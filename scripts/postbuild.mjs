import fs from 'node:fs';
fs.writeFileSync('out/.nojekyll', '');
console.log('PASS GitHub Pages: out/.nojekyll created');
