import fs from 'node:fs';
import assert from 'node:assert/strict';

const origin = 'https://hjsoltec.github.io';
const paths = ['/', '/about/', '/solutions/', '/products/hjsol/', '/products/ls-rnd/', '/resources/', '/contact/', '/privacy/', '/guides/', '/guides/ai-workflow-automation/', '/guides/materials-rd-ai/'];
const attributes = tag => Object.fromEntries([...tag.matchAll(/([^\s=<>]+)="([^"]*)"/g)].map(m => [m[1],m[2]]));
const meta = (html, key) => [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attributes(m[0])).find(a => a.name === key || a.property === key)?.content;
const titles = new Set();
const expectedEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'hjsoltec@gmail.com';
for (const pathname of paths) {
  const html = fs.readFileSync(`out${pathname}index.html`, 'utf8');
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attributes(m[0])).find(a => a.rel === 'canonical')?.href;
  assert.equal(canonical, origin + pathname, `${pathname} canonical`);
  assert.equal(meta(html, 'og:url'), canonical, `${pathname} page-specific Open Graph URL`);
  const description = meta(html, 'description');
  assert(description?.length > 15, `${pathname} description`);
  assert.equal(meta(html, 'og:description'), description, `${pathname} matching Open Graph description`);
  assert.equal(meta(html, 'twitter:description'), description, `${pathname} matching Twitter description`);
  assert(!/noindex/i.test(meta(html, 'robots') || ''), `${pathname} indexable`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${pathname} single readable H1`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${pathname} distinct title`); titles.add(title);
  const graphs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const nodes = graphs.flatMap(g => g['@graph'] || [g]);
  const organization = nodes.find(n => n['@type'] === 'Organization');
  assert.equal(organization?.email, expectedEmail);
  assert.equal(organization?.telephone, '010-9378-8314');
  assert(nodes.some(n => n['@type'] === 'WebSite'));
  if (pathname.startsWith('/products/')) {
    assert(nodes.some(n => n['@type'] === 'Service'));
    assert(nodes.some(n => n['@type'] === 'BreadcrumbList'));
    assert((html.match(/<summary>/g) || []).length >= 4, `${pathname} readable FAQ`);
    assert(!JSON.stringify(graphs).match(/"(?:aggregateRating|ratingValue|offers|price)"/), 'No invented reviews, prices or offers');
  }
  if (pathname.startsWith('/guides/') && pathname !== '/guides/') {
    assert(nodes.some(n => n['@type'] === 'Article' && n.headline && n.datePublished === '2026-10-19'));
    assert((html.match(/<section>/g) || []).length >= 4, `${pathname} actual guide content`);
  }
}
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
for (const pathname of [...paths, '/showcase/rd-studio/', '/showcase/rd-studio/guide.html']) assert(sitemap.includes(`<loc>${origin}${pathname}</loc>`), `Sitemap ${pathname}`);
assert.equal((sitemap.match(/<loc>/g) || []).length, 13);
const robots = fs.readFileSync('out/robots.txt', 'utf8');
assert(/User-Agent: \*/i.test(robots) && /Allow: \//.test(robots));
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert(!/Disallow:\s*\/\s*$/m.test(robots));
console.log(`PASS SEO export: ${paths.length} pages, canonical/OG/description/H1, valid JSON-LD, visible FAQs, 2 guides, 13 sitemap URLs, crawler access and public contacts`);
