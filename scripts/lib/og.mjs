// Builds a 1200×630 Open Graph card for a SOUL (or the site default) and
// rasterizes it to PNG. The card is a hand-authored SVG — a dark, on-brand
// panel with the title, a category/kind eyebrow, a one-line summary, a
// review-status pill, and a per-slug "constellation" cluster echoing the
// Atlas's graph of connected minds. Rendered deterministically with bundled
// Liberation Sans (no system-font dependency) so CI and local output match.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONT_DIR = path.join(__dirname, '..', 'og-fonts');
const FONT_FILES = [
  path.join(FONT_DIR, 'LiberationSans-Regular.ttf'),
  path.join(FONT_DIR, 'LiberationSans-Bold.ttf'),
];
const FAMILY = 'Liberation Sans';

export const OG_W = 1200;
export const OG_H = 630;

// Brand palette (the site's dark theme — OG cards don't theme-switch).
const C = {
  bg: '#0c0d11',
  ink: '#e8e8e6',
  inkSoft: '#adb0b8',
  inkFaint: '#71757f',
  accent: '#6f9bff',
  amber: '#d8a23f',
  panelEdge: '#262a33',
};

function escapeXml(s) {
  return String(s).replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c],
  );
}

// Deterministic PRNG seeded from the slug, so every card's constellation is
// stable across rebuilds but distinct per SOUL.
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Coarse text metrics (Liberation Sans ≈ Arial). Generous factors so estimated
// line widths don't underrun and overflow the card.
function textWidth(s, size, bold) {
  return s.length * size * (bold ? 0.56 : 0.5);
}
function wrap(text, size, maxW, bold) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (!cur || textWidth(test, size, bold) <= maxW) cur = test;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}
// Largest title size in [44,76] that fits in ≤2 lines; otherwise smallest, with
// the second line ellipsized.
function fitTitle(text, maxW) {
  for (let size = 76; size >= 44; size -= 4) {
    const lines = wrap(text, size, maxW, true);
    if (lines.length <= 2 && lines.every((l) => textWidth(l, size, true) <= maxW)) {
      return { size, lines };
    }
  }
  const size = 44;
  const lines = wrap(text, size, maxW, true).slice(0, 2);
  if (lines.length === 2) lines[1] = `${lines[1]}…`;
  return { size, lines };
}
function clampSummary(text, size, maxW, maxLines) {
  const lines = wrap(text, size, maxW, false);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[.,;:\s]+$/, '')}…`;
  return kept;
}

/**
 * Build the OG card SVG.
 * @param {{title:string, eyebrow?:string, summary?:string, status?:{text:string,tone:'accent'|'amber'|'faint'}, seed?:string}} o
 */
export function buildOgSvg(o) {
  const PAD = 80;
  const textMaxW = 640; // left text column; constellation lives to the right
  const rng = mulberry32(hashSeed(o.seed || o.title || 'soul'));

  // Constellation cluster on the right third.
  const NODES = 11;
  const region = { x0: 770, x1: 1130, y0: 120, y1: 520 };
  const pts = Array.from({ length: NODES }, () => ({
    x: region.x0 + rng() * (region.x1 - region.x0),
    y: region.y0 + rng() * (region.y1 - region.y0),
    r: 2.5 + rng() * 4,
  }));
  let edges = '';
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 165) {
        const a = (0.45 * (1 - d / 165)).toFixed(3);
        edges += `<line x1="${pts[i].x.toFixed(1)}" y1="${pts[i].y.toFixed(1)}" x2="${pts[j].x.toFixed(1)}" y2="${pts[j].y.toFixed(1)}" stroke="${C.accent}" stroke-opacity="${a}" stroke-width="1.4"/>`;
      }
    }
  }
  const dots = pts
    .map(
      (p) =>
        `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.r.toFixed(1)}" fill="${C.accent}" fill-opacity="0.85"/>`,
    )
    .join('');

  // Vertical rhythm for the left column.
  const title = fitTitle(o.title, textMaxW);
  const titleLineH = title.size * 1.08;
  const eyebrowY = 150;
  const titleTop = 250;
  const summaryLines = o.summary ? clampSummary(o.summary, 29, textMaxW, 2) : [];

  const titleSvg = title.lines
    .map(
      (l, i) =>
        `<text x="${PAD}" y="${(titleTop + i * titleLineH).toFixed(1)}" font-family="${FAMILY}" font-weight="700" font-size="${title.size}" fill="${C.ink}">${escapeXml(l)}</text>`,
    )
    .join('');

  const summaryTop = titleTop + (title.lines.length - 1) * titleLineH + 78;
  const summarySvg = summaryLines
    .map(
      (l, i) =>
        `<text x="${PAD}" y="${(summaryTop + i * 40).toFixed(1)}" font-family="${FAMILY}" font-weight="400" font-size="29" fill="${C.inkSoft}">${escapeXml(l)}</text>`,
    )
    .join('');

  // Status pill, bottom-left.
  let pill = '';
  if (o.status) {
    const tone =
      o.status.tone === 'accent' ? C.accent : o.status.tone === 'amber' ? C.amber : C.inkFaint;
    const py = 540;
    const pw = Math.round(textWidth(o.status.text, 22, false) + 64);
    pill =
      `<rect x="${PAD}" y="${py}" width="${pw}" height="46" rx="23" fill="none" stroke="${tone}" stroke-opacity="0.5"/>` +
      `<circle cx="${PAD + 24}" cy="${py + 23}" r="5" fill="${tone}"/>` +
      `<text x="${PAD + 42}" y="${py + 30}" font-family="${FAMILY}" font-weight="400" font-size="22" fill="${tone}">${escapeXml(o.status.text)}</text>`;
  }

  const eyebrow = o.eyebrow
    ? `<text x="${PAD}" y="${eyebrowY}" font-family="${FAMILY}" font-weight="700" font-size="26" letter-spacing="2" fill="${C.accent}">${escapeXml(o.eyebrow.toUpperCase())}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}" viewBox="0 0 ${OG_W} ${OG_H}">
  <defs>
    <radialGradient id="glow" cx="78%" cy="42%" r="55%">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="${C.accent}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="${C.bg}"/>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#glow)"/>
  <rect x="20" y="20" width="${OG_W - 40}" height="${OG_H - 40}" rx="22" fill="none" stroke="${C.panelEdge}" stroke-width="2"/>
  <rect x="20" y="20" width="${OG_W - 40}" height="6" rx="3" fill="${C.accent}"/>
  ${edges}${dots}
  <!-- wordmark -->
  <circle cx="${PAD + 7}" cy="84" r="7" fill="${C.accent}"/>
  <text x="${PAD + 26}" y="92" font-family="${FAMILY}" font-weight="700" font-size="24" letter-spacing="3" fill="${C.inkFaint}">SOUL ATLAS</text>
  ${eyebrow}
  ${titleSvg}
  ${summarySvg}
  ${pill}
  <text x="${OG_W - PAD}" y="${OG_H - 54}" text-anchor="end" font-family="${FAMILY}" font-weight="400" font-size="22" fill="${C.inkFaint}">soul-atlas.github.io</text>
</svg>`;
}

/** Render an OG card SVG to a PNG Buffer. */
export function renderOgPng(opts) {
  const svg = buildOgSvg(opts);
  const resvg = new Resvg(svg, {
    font: { fontFiles: FONT_FILES, loadSystemFonts: false, defaultFontFamily: FAMILY },
    fitTo: { mode: 'width', value: OG_W },
  });
  return resvg.render().asPng();
}

// Sanity: fail loudly at build time if the bundled fonts went missing.
export function assertFonts() {
  for (const f of FONT_FILES) {
    if (!fs.existsSync(f)) throw new Error(`OG font missing: ${f}`);
  }
}
