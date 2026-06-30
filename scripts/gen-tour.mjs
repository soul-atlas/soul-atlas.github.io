#!/usr/bin/env node
// Records assets/tour.* — a guided walk-through of the Atlas (home, search, a
// SOUL, compare, dashboard, and the knowledge graph as the centerpiece).
//
// This step only produces the raw screen recording (a .webm). Turn it into the
// committed tour.gif + tour.mp4 with scripts/encode-tour.sh.
//
// Replicate end-to-end:
//   npm run build                      # builds dist/ incl. the Pagefind search index
//   npm run preview -- --port 4321 &   # serve the built site (search needs the build)
//   npx playwright install chromium    # one-time: fetch the browser
//   node scripts/gen-tour.mjs          # -> assets/tour.webm
//   scripts/encode-tour.sh             # -> assets/tour.gif + assets/tour.mp4
//
// Env:
//   TOUR_BASE  base URL of the running preview (default http://localhost:4321)
//   TOUR_OUT   output .webm path (default assets/tour.webm)
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = (process.env.TOUR_BASE || 'http://localhost:4321').replace(/\/$/, '');
const OUT = path.resolve(process.env.TOUR_OUT || path.join(__dirname, '..', 'assets', 'tour.webm'));
const VID = { width: 1280, height: 800 };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const glide = (page, x, y, steps = 28) => page.mouse.move(x, y, { steps });

// Eased programmatic scroll to a document Y, so pans read as deliberate motion.
function smoothScrollTo(page, targetY, ms = 1400) {
  return page.evaluate(
    ([ty, dur]) =>
      new Promise((res) => {
        const start = window.scrollY;
        const t0 = performance.now();
        const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        (function step(now) {
          const t = Math.min(1, (now - t0) / dur);
          window.scrollTo(0, start + (ty - start) * ease(t));
          if (t < 1) requestAnimationFrame(step);
          else res();
        })(performance.now());
      }),
    [targetY, ms],
  );
}

// Record into a temp dir (Playwright names the file randomly), then move it to OUT.
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'soul-tour-'));
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: VID,
  recordVideo: { dir: tmpDir, size: VID },
  deviceScaleFactor: 1,
  colorScheme: 'dark',
});
const page = await ctx.newPage();
const go = (p) => page.goto(BASE + p, { waitUntil: 'networkidle' });

// 1. HOME — what the Atlas is
await go('/');
await sleep(1600);
await smoothScrollTo(page, 700, 1600);
await sleep(1100);
await smoothScrollTo(page, 1500, 1700);
await sleep(1100);
await smoothScrollTo(page, 0, 1200);
await sleep(700);

// 2. SEARCH — full-text across every SOUL (Pagefind; needs the build)
await go('/search');
const searchInput = page.locator('#search input').first();
await searchInput.waitFor({ state: 'visible', timeout: 10000 });
await sleep(600);
await searchInput.click();
for (const ch of 'negotiation') {
  await page.keyboard.type(ch);
  await sleep(85);
}
await sleep(2200);
await smoothScrollTo(page, 320, 1000);
await sleep(1400);

// 3. A SOUL — the page + its one-hop neighborhood graph
await go('/souls/philosopher');
await sleep(1400);
await smoothScrollTo(page, 600, 1500);
await sleep(1100);
await smoothScrollTo(page, 1500, 1700);
await sleep(1400);
await page.evaluate(() => {
  const g = document.querySelector('.graph-wrap');
  if (g) g.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
await sleep(2600);

// 4. COMPARE — two minds side by side + the live graph distance
await go('/compare');
await sleep(900);
await page.selectOption('#sel-a', 'detective');
await sleep(800);
await page.selectOption('#sel-b', 'philosopher');
await sleep(2000);
await smoothScrollTo(page, 700, 1500);
await sleep(1600);
await smoothScrollTo(page, 1500, 1500);
await sleep(1400);

// 5. DASHBOARD — the Atlas at a glance
await go('/dashboard');
await sleep(1300);
await smoothScrollTo(page, 700, 1500);
await sleep(1300);
await smoothScrollTo(page, 1600, 1600);
await sleep(1300);
await smoothScrollTo(page, 2600, 1600);
await sleep(1400);

// 6. KNOWLEDGE GRAPH — the centerpiece
await go('/graph');
// Scroll so the 640px canvas + controls + legend sit fully in the viewport
// (the big heading scrolls partly off the top), then let the clustered layout
// settle and auto-fit (the page auto-fits at ~1.5s).
await smoothScrollTo(page, 232, 900);
await sleep(3000);

const wrap = page.locator('[data-graph-id="full"]');
const canvas = wrap.locator('[data-graph-canvas]');
const cbox = await canvas.boundingBox();
const cx = cbox.x + cbox.width / 2;
const cy = cbox.y + cbox.height / 2;

// Live node positions (viewport coords) — biggest (highest-degree) nodes, spread out.
async function nodePoints(want) {
  return page.evaluate(
    ([sel, n]) => {
      const w = document.querySelector(sel);
      const cv = w.querySelector('[data-graph-canvas]').getBoundingClientRect();
      const pts = [...w.querySelectorAll('svg path')]
        .map((p) => {
          const r = p.getBoundingClientRect();
          return { x: r.x + r.width / 2, y: r.y + r.height / 2, w: r.width };
        })
        .filter(
          (p) => p.x > cv.left + 40 && p.x < cv.right - 40 && p.y > cv.top + 40 && p.y < cv.bottom - 40,
        )
        .sort((a, b) => b.w - a.w)
        .slice(0, 60);
      const out = [];
      const step = Math.max(1, Math.floor(pts.length / n));
      for (let i = 0; i < pts.length && out.length < n; i += step) out.push(pts[i]);
      return out;
    },
    [sel(), want],
  );
  function sel() {
    return '[data-graph-id="full"]';
  }
}

// Hover hubs to isolate neighborhoods (edges light up, the rest fades back).
for (const p of await nodePoints(4)) {
  await glide(page, p.x, p.y, 30);
  await sleep(1500);
}
await glide(page, cx, cbox.y + 30, 20);
await sleep(700);

// Search a node — pans/zooms to it.
const gsearch = wrap.locator('[data-graph-search]');
await gsearch.click();
for (const ch of 'surgeon') {
  await page.keyboard.type(ch);
  await sleep(95);
}
await sleep(2200);
await gsearch.fill('');
await sleep(400);

// Re-cluster: no clustering, then back to by-category.
const groupSel = wrap.locator('[data-graph-group]');
await groupSel.selectOption('none');
await sleep(2600);
await groupSel.selectOption('category');
await sleep(2800);

// Filter to a single category — the view re-frames to fill.
const catSel = wrap.locator('[data-graph-filter]');
await catSel.selectOption('Healthcare');
await sleep(2600);
await catSel.selectOption('');
await sleep(1800);

// Zoom in (reveals labels), then back out.
await glide(page, cx, cy, 20);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, -260);
  await sleep(260);
}
await sleep(1800);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, 260);
  await sleep(180);
}
await sleep(900);

// Surprise me — jump to a random SOUL's neighborhood, twice.
const randomBtn = wrap.locator('[data-graph-random]');
await randomBtn.click();
await sleep(2400);
await randomBtn.click();
await sleep(2400);

// Reset, settle, final beauty pause on the full clustered map.
await wrap.locator('[data-graph-reset]').click();
await sleep(2600);

await ctx.close();
await browser.close();

const webm = fs.readdirSync(tmpDir).find((f) => f.endsWith('.webm'));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.renameSync(path.join(tmpDir, webm), OUT);
fs.rmSync(tmpDir, { recursive: true, force: true });
const mb = (fs.statSync(OUT).size / 1048576).toFixed(1);
console.log(`✓ wrote ${path.relative(process.cwd(), OUT)} — ${VID.width}x${VID.height}, ${mb} MB`);
