#!/usr/bin/env node
// Scaffold a new occupation directory from the canonical templates.
//
//   npm run new -- --title "Glassblower" --category "Skilled Trades" \
//                  --summary "Shapes molten glass by breath and timing." [--slug glassblower]
//
import fs from 'node:fs';
import path from 'node:path';
import { OCCUPATIONS_DIR, SCHEMA_DIR } from './lib/paths.mjs';
import { slugify } from './lib/markdown.mjs';

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

const title = arg('title');
if (!title) {
  console.error('Usage: npm run new -- --title "Role Name" --category "Category" --summary "…" [--slug]');
  process.exit(1);
}
const slug = arg('slug') || slugify(title);
const category = arg('category') || 'Emerging';
const summary = arg('summary') || `How an expert ${title.toLowerCase()} thinks and works.`;
const today = new Date().toISOString().slice(0, 10);

const dir = path.join(OCCUPATIONS_DIR, slug);
if (fs.existsSync(dir)) {
  console.error(`✗ ${slug} already exists at occupations/${slug}`);
  process.exit(1);
}
fs.mkdirSync(dir, { recursive: true });

const soulTemplate = fs.readFileSync(path.join(SCHEMA_DIR, 'SOUL.template.md'), 'utf8');
fs.writeFileSync(path.join(dir, 'SOUL.md'), soulTemplate.replace('{{Title}}', title));

const metaTemplate = fs.readFileSync(path.join(SCHEMA_DIR, 'metadata.template.yaml'), 'utf8');
const meta = metaTemplate
  .replace('"{{Title}}"', JSON.stringify(title))
  .replace('"{{slug}}"', JSON.stringify(slug))
  .replace('"{{Category}}"', JSON.stringify(category))
  .replace('"{{One or two sentences on how this mind works.}}"', JSON.stringify(summary))
  .replaceAll('"{{YYYY-MM-DD}}"', JSON.stringify(today));
fs.writeFileSync(path.join(dir, 'metadata.yaml'), meta);

console.log(`✓ Created occupations/${slug}/`);
console.log(`  • SOUL.md         (fill in every section — see STYLE_GUIDE.md)`);
console.log(`  • metadata.yaml   (title, category, summary set; add tags & related)`);
console.log(`\nNext:  npm run validate   then   npm run dev`);
