import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";

const manifest = JSON.parse(fs.readFileSync("docs/BROCHURE_SOURCE_20261110.json", "utf8"));
const screens = JSON.parse(fs.readFileSync("src/content/screens.json", "utf8"));
const hash = bytes => createHash("sha256").update(bytes).digest("hex");
assert.equal(screens.length, 108);
assert.equal(new Set(screens.map(s => s.id)).size, 108);
assert.equal(new Set(screens.map(s => s.slide)).size, 108);
const expectedCounts = { hjsol: 53, "ls-rnd": 49, "hjsol-aieg": 6 };
for (const product of manifest.products) {
  const subset = screens.filter(s => s.product === product.slug);
  assert.equal(subset.length, expectedCounts[product.slug]);
  assert.equal(subset.length, product.screen_sources.length);
  for (const screen of subset) {
    assert(screen.title.trim() && screen.description.trim() && screen.category.trim());
    assert(screen.slide >= product.original_pages[0] && screen.slide <= product.original_pages[1]);
    assert(screen.image.startsWith("/images/brochure/") && !screen.image.includes(".."));
    const source = product.screen_sources.find(s => s.id === screen.id);
    assert.equal(hash(fs.readFileSync(path.join("public", screen.image))), source.sha256, `${screen.id}: original screenshot`);
    assert.equal(hash(fs.readFileSync(path.join("out", screen.image))), source.sha256, `${screen.id}: exported screenshot`);
  }
  const html = fs.readFileSync(`out/products/${product.slug}/index.html`, "utf8");
  assert(html.includes('id="screens"') && html.includes('aria-label="기능·화면 검색"'));
  assert(html.includes('aria-label="기능 분류"') && html.includes('class="screen-dialog"'));
}
for (const download of manifest.download_files) {
  for (const root of ["public", "out"]) {
    const bytes = fs.readFileSync(path.join(root, download.path));
    assert.equal(bytes.length, download.bytes);
    assert.equal(hash(bytes), download.sha256, `${download.path}: ${root}`);
  }
}
assert.equal(hash(fs.readFileSync("public/downloads/hjsolai-brochure-20261110.pptx")), manifest.source_sha256, "Supplied PowerPoint is unchanged");
console.log(`PASS brochure: 108 source-linked screens, 3 product galleries, ${manifest.download_files.length} downloads, original PPTX and exported asset hashes`);
