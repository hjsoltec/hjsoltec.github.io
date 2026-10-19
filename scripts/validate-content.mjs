import fs from 'node:fs';
import path from 'node:path';
const data = JSON.parse(fs.readFileSync('src/content/resources.json', 'utf8'));
const ids = new Set();
for (const r of data) {
  if (!r.id || ids.has(r.id)) throw new Error(`Missing or duplicate resource id: ${r.id}`);
  ids.add(r.id);
  if (!['company', 'hjsol', 'ls-rnd'].includes(r.product)) throw new Error(`Unknown product: ${r.id}`);
  if (!['preparing', 'ready'].includes(r.status)) throw new Error(`Unknown status: ${r.id}`);
  if (!r.title?.trim() || !r.description?.trim()) throw new Error(`Missing resource copy: ${r.id}`);
  if (r.status === 'preparing' && (r.href || r.download)) throw new Error(`Preparing resource must have empty href and download=false: ${r.id}`);
  if (r.status === 'ready') {
    if (typeof r.download !== 'boolean' || !r.href.startsWith('/') || r.href.startsWith('//') || r.href.includes('..') || r.href.includes('\\')) throw new Error(`Use a safe same-site path: ${r.id}`);
    if (r.download && !fs.existsSync(path.join('public', r.href.split(/[?#]/)[0]))) throw new Error(`Missing public download file: ${r.href}`);
    for (const key of ['preview', 'cover']) {
      if (r[key] && (!r[key].startsWith('/') || r[key].startsWith('//') || r[key].includes('..') || !fs.existsSync(path.join('public', r[key].split(/[?#]/)[0])))) throw new Error(`Missing or unsafe resource ${key}: ${r.id}`);
    }
  }
}
const email = (process.env.NEXT_PUBLIC_CONTACT_EMAIL || '').trim();
if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('NEXT_PUBLIC_CONTACT_EMAIL is invalid');
console.log(`PASS content: ${data.length} resources validated; contact ${email ? 'configured' : 'not yet configured (brief-only mode)'}`);
