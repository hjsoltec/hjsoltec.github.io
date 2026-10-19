import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('out');
const pages = [];
function walk(dir) { for (const e of fs.readdirSync(dir, {withFileTypes:true})) { const f=path.join(dir,e.name); if(e.isDirectory()) walk(f); else if(e.name.endsWith('.html')) pages.push(f); } }
walk(root);
const failures = [];
let checked = 0;
for (const page of pages) {
  const html = fs.readFileSync(page,'utf8');
  if (!html.includes('lang="ko"')) failures.push(`${page}: missing Korean language`);
  if (!html.includes('<title>')) failures.push(`${page}: missing title`);
  for (const m of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const href = m[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|data:|tel:|blob:)/.test(href)) continue;
    const [rawPath, fragment] = href.split('#');
    const pathname = decodeURIComponent((rawPath || '').split('?')[0]);
    let target = pathname ? path.resolve(pathname.startsWith('/') ? root : path.dirname(page), pathname.replace(/^\//,'')) : page;
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target=path.join(target,'index.html');
    if (!fs.existsSync(target)) { failures.push(`${path.relative(root,page)} -> ${href} missing`); continue; }
    if (fragment && target.endsWith('.html')) {
      const content = fs.readFileSync(target,'utf8');
      if (!content.includes(`id="${decodeURIComponent(fragment)}"`)) failures.push(`${path.relative(root,page)} -> ${href} missing anchor`);
    }
    checked++;
  }
}
for (const p of ['index.html','about/index.html','solutions/index.html','products/hjsol/index.html','products/ls-rnd/index.html','resources/index.html','contact/index.html','privacy/index.html','404.html','sitemap.xml','robots.txt','.nojekyll']) if(!fs.existsSync(path.join(root,p))) failures.push(`Required export missing: ${p}`);
const resources=JSON.parse(fs.readFileSync('src/content/resources.json','utf8'));
for(const r of resources.filter(r=>r.status==='ready')) { const pathname=r.href.split(/[?#]/)[0]; let f=path.join(root,pathname); if(fs.existsSync(f)&&fs.statSync(f).isDirectory()) f=path.join(f,'index.html'); if(!fs.existsSync(f)) failures.push(`Resource missing: ${r.id}`); }
if(failures.length) { console.error(failures.join('\n'));process.exit(1); }
console.log(`PASS static export: ${pages.length} HTML pages, ${checked} local links/assets and ${resources.filter(r=>r.status==='ready').length} ready resources checked`);
