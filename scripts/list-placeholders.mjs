#!/usr/bin/env node
/**
 * Lists every outstanding placeholder in data/: `TODO(verify)` comments,
 * `verify: [...]` notes, `draft: true` entries, null profile links, "TBD" values,
 * and whether the CV PDF is still the placeholder.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const found = [];

const lineOf = (src, index) => src.slice(0, index).split("\n").length;

for (const file of readdirSync(dataDir).filter((f) => f.endsWith(".ts") && f !== "types.ts")) {
  const src = readFileSync(path.join(dataDir, file), "utf8");
  const add = (index, text) => found.push({ loc: `data/${file}:${lineOf(src, index)}`, text });

  for (const m of src.matchAll(/verify:\s*\[([\s\S]*?)\]/g)) {
    for (const s of m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) add(m.index + 8 + s.index, `verify: ${s[1]}`);
  }
  for (const m of src.matchAll(/\/\/\s*TODO\(verify\):\s*(.*)|\*\s*TODO\(verify\):\s*(.*)/g)) add(m.index, `todo:   ${m[1] ?? m[2]}`);
  for (const m of src.matchAll(/^\s*draft:\s*true/gm)) add(m.index + 1, "draft:  entry hidden in production");
  for (const m of src.matchAll(/^\s*(\w+):\s*null\b/gm)) add(m.index + 1, `null:   ${m[1]} is not set`);
  for (const m of src.matchAll(/"(TBD[^"]*)"/g)) add(m.index, `tbd:    ${m[1]}`);
}

const cv = path.join(root, "public/cv/Kun-Yu_Lee_CV.pdf");
try {
  if (statSync(cv).size < 5000 && readFileSync(cv, "latin1").includes("PLACEHOLDER")) {
    found.push({ loc: "public/cv/", text: "CV PDF is still the placeholder — replace Kun-Yu_Lee_CV.pdf" });
  }
} catch {
  found.push({ loc: "public/cv/", text: "CV PDF missing" });
}

found
  .sort((a, b) => a.loc.localeCompare(b.loc, undefined, { numeric: true }))
  .forEach((f) => console.log(`${f.loc.padEnd(24)} ${f.text}`));
console.log(`\n${found.length} item(s) to review.`);
