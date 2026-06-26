#!/usr/bin/env node
// Generates assets/banner.gif — an animated "galaxy of souls" hero for the README.
// Software-renders frames into RGBA buffers (no canvas dependency) and encodes an
// animated GIF with gifenc. Deterministic (seeded), so it is fully reproducible:
//   npm i -D gifenc && node scripts/gen-banner-gif.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import gifenc from 'gifenc';
const { GIFEncoder, quantize, applyPalette } = gifenc;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'assets', 'banner.gif');

const W = 800;
const H = 260;
const FRAMES = 30; // one full spiral rotation per loop -> seamless
const CX = W * 0.5;
const CY = H * 0.52;
const TWO_PI = Math.PI * 2;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20260627);
const rand = (a, b) => a + (b - a) * rnd();
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

const N = W * H;

// ---- Static background: radial dark gradient + nebula blooms + vignette ----
const bg = new Float32Array(N * 3);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const dx = (x - CX) / (W * 0.62);
    const dy = (y - CY) / (H * 0.62);
    const d = Math.min(1, Math.hypot(dx, dy));
    const i = (y * W + x) * 3;
    bg[i] = lerp(18, 5, d);
    bg[i + 1] = lerp(26, 6, d);
    bg[i + 2] = lerp(58, 13, d);
  }
}
function addGlow(buf, cx, cy, rad, r, g, b, strength, squash = 1) {
  const x0 = Math.max(0, Math.floor(cx - rad));
  const x1 = Math.min(W - 1, Math.ceil(cx + rad));
  const y0 = Math.max(0, Math.floor(cy - rad / squash));
  const y1 = Math.min(H - 1, Math.ceil(cy + rad / squash));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dx = x - cx;
      const dy = (y - cy) * squash;
      const d = Math.hypot(dx, dy);
      if (d > rad) continue;
      const f = 1 - d / rad;
      const a = f * f * strength;
      const i = (y * W + x) * 3;
      buf[i] += r * a;
      buf[i + 1] += g * a;
      buf[i + 2] += b * a;
    }
  }
}
addGlow(bg, W * 0.5, H * 0.5, 360, 59, 91, 219, 0.42, 1.7); // central blue
addGlow(bg, W * 0.26, H * 0.42, 240, 124, 58, 237, 0.32, 1.4); // violet
addGlow(bg, W * 0.76, H * 0.62, 260, 14, 116, 144, 0.3, 1.4); // teal
// vignette
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const dx = (x - CX) / (W * 0.5);
    const dy = (y - CY) / (H * 0.5);
    const d = Math.hypot(dx, dy);
    if (d > 0.7) {
      const v = Math.min(1, (d - 0.7) / 0.55) * 0.6;
      const i = (y * W + x) * 3;
      bg[i] *= 1 - v;
      bg[i + 1] *= 1 - v;
      bg[i + 2] *= 1 - v;
    }
  }
}

// Static dither noise baked into the background to break up GIF color banding
// in the smooth nebula gradient (kept static so it doesn't shimmer between frames).
for (let p = 0; p < N; p++) {
  const n = (rnd() - 0.5) * 3;
  bg[p * 3] += n;
  bg[p * 3 + 1] += n;
  bg[p * 3 + 2] += n;
}

// ---- Galaxy spiral dust (rotates) ----
const dust = [];
const ARMS = 3;
const PER = 80;
for (let arm = 0; arm < ARMS; arm++) {
  const off = (arm / ARMS) * TWO_PI;
  for (let k = 0; k < PER; k++) {
    const t = 0.35 + (k / PER) * 5.6;
    const r = (10 + 9 * Math.exp(0.26 * t)) * 0.62;
    if (r > 330) break;
    dust.push({
      r,
      th: t + off + rand(-0.1, 0.1),
      size: rand(0.6, 1.8) * (1 - (r / 330) * 0.4),
      tint: r < 90 ? [220, 230, 255] : r < 200 ? [150, 184, 255] : [126, 123, 240],
      bright: rand(0.5, 1),
    });
  }
}

// ---- Background starfield (twinkles) ----
const stars = [];
for (let s = 0; s < 150; s++) {
  const x = rand(0, W);
  const y = rand(0, H);
  const dx = (x - CX) / (W * 0.55);
  const dy = (y - CY) / (H * 0.5);
  if (dx * dx + dy * dy < 0.05) continue;
  stars.push({
    x,
    y,
    base: rand(0.25, 0.9),
    ph: rand(0, TWO_PI),
    spd: Math.round(rand(1, 3)),
    big: rnd() < 0.12,
  });
}

// ---- Constellation of souls (fixed; pulses) ----
const PALETTE = [
  [59, 130, 246],
  [16, 185, 129],
  [245, 158, 11],
  [239, 68, 68],
  [139, 92, 246],
  [6, 182, 212],
  [236, 72, 153],
  [234, 179, 8],
  [34, 197, 94],
  [168, 85, 247],
  [20, 184, 166],
  [8, 145, 178],
  [132, 204, 22],
  [217, 70, 239],
  [111, 155, 255],
];
const nodes = [];
const NODEC = 16;
for (let i = 0; i < NODEC; i++) {
  const ring = 0.35 + 0.65 * (i / NODEC);
  const a = rand(0, TWO_PI);
  const r = ring * rand(70, 200);
  const x = CX + r * Math.cos(a);
  const y = CY + r * Math.sin(a) * 0.62;
  if (x < 24 || x > W - 24 || y < 18 || y > H - 18) continue;
  nodes.push({ x, y, rad: rand(2.6, 5.2), col: PALETTE[i % PALETTE.length], ph: rand(0, TWO_PI) });
}
// edges: each node to its 2 nearest neighbours
const edges = [];
for (let i = 0; i < nodes.length; i++) {
  const near = nodes
    .map((n, j) => ({ j, d: Math.hypot(n.x - nodes[i].x, n.y - nodes[i].y) }))
    .filter((o) => o.j !== i)
    .sort((a, b) => a.d - b.d)
    .slice(0, 2);
  for (const { j } of near) if (j > i) edges.push([i, j]);
}

// ---- Drawing primitives (operate on a Float32 RGB frame) ----
function addPoint(buf, x, y, r, g, b, a) {
  const xi = Math.round(x);
  const yi = Math.round(y);
  if (xi < 0 || xi >= W || yi < 0 || yi >= H) return;
  const i = (yi * W + xi) * 3;
  buf[i] += r * a;
  buf[i + 1] += g * a;
  buf[i + 2] += b * a;
}
function addDisc(buf, cx, cy, rad, r, g, b, strength) {
  const x0 = Math.max(0, Math.floor(cx - rad));
  const x1 = Math.min(W - 1, Math.ceil(cx + rad));
  const y0 = Math.max(0, Math.floor(cy - rad));
  const y1 = Math.min(H - 1, Math.ceil(cy + rad));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const d = Math.hypot(x - cx, y - cy);
      if (d > rad) continue;
      const f = 1 - d / rad;
      const a = f * f * strength;
      const i = (y * W + x) * 3;
      buf[i] += r * a;
      buf[i + 1] += g * a;
      buf[i + 2] += b * a;
    }
  }
}
function overDisc(buf, cx, cy, rad, r, g, b) {
  const x0 = Math.max(0, Math.floor(cx - rad - 1));
  const x1 = Math.min(W - 1, Math.ceil(cx + rad + 1));
  const y0 = Math.max(0, Math.floor(cy - rad - 1));
  const y1 = Math.min(H - 1, Math.ceil(cy + rad + 1));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const d = Math.hypot(x - cx, y - cy);
      const a = clamp(rad - d + 0.5, 0, 1);
      if (a <= 0) continue;
      const i = (y * W + x) * 3;
      buf[i] = lerp(buf[i], r, a);
      buf[i + 1] = lerp(buf[i + 1], g, a);
      buf[i + 2] = lerp(buf[i + 2], b, a);
    }
  }
}
function addLine(buf, x0, y0, x1, y1, r, g, b, a) {
  const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    addPoint(buf, x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, r, g, b, a);
  }
}

// ---- Encode ----
const gif = GIFEncoder();
const frame = new Float32Array(N * 3);
const rgba = new Uint8Array(N * 4);

for (let f = 0; f < FRAMES; f++) {
  const phase = (f / FRAMES) * TWO_PI; // full rotation across the loop
  frame.set(bg);

  // edges (faint, static)
  for (const [i, j] of edges) {
    addLine(frame, nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, 150, 175, 235, 0.16);
  }
  // rotating spiral dust
  for (const p of dust) {
    const th = p.th + phase;
    const x = CX + p.r * Math.cos(th);
    const y = CY + p.r * Math.sin(th) * 0.62;
    const a = 0.5 * p.bright;
    if (p.size > 1.2) addDisc(frame, x, y, p.size, p.tint[0], p.tint[1], p.tint[2], a);
    else addPoint(frame, x, y, p.tint[0], p.tint[1], p.tint[2], a);
  }
  // twinkling stars
  for (const st of stars) {
    const tw = 0.55 + 0.45 * Math.sin(st.ph + phase * st.spd);
    const a = st.base * tw;
    addPoint(frame, st.x, st.y, 255, 255, 255, a);
    if (st.big) {
      addPoint(frame, st.x + 1, st.y, 255, 255, 255, a * 0.5);
      addPoint(frame, st.x, st.y + 1, 255, 255, 255, a * 0.5);
    }
  }
  // central core (gentle pulse)
  const pulse = 1 + 0.08 * Math.sin(phase);
  addDisc(frame, CX, CY, 70 * pulse, 79, 134, 255, 0.5);
  addDisc(frame, CX, CY, 22 * pulse, 230, 238, 255, 0.9);
  overDisc(frame, CX, CY, 5.5, 255, 255, 255);
  // soul nodes (halo + colored core, pulsing)
  for (const n of nodes) {
    const tw = 0.7 + 0.3 * Math.sin(n.ph + phase * 2);
    addDisc(frame, n.x, n.y, n.rad + 5, n.col[0], n.col[1], n.col[2], 0.5 * tw);
    overDisc(frame, n.x, n.y, n.rad, n.col[0], n.col[1], n.col[2]);
    overDisc(frame, n.x, n.y, n.rad * 0.45, 255, 255, 255);
  }

  // Float RGB -> RGBA Uint8
  for (let p = 0; p < N; p++) {
    rgba[p * 4] = clamp(frame[p * 3], 0, 255);
    rgba[p * 4 + 1] = clamp(frame[p * 3 + 1], 0, 255);
    rgba[p * 4 + 2] = clamp(frame[p * 3 + 2], 0, 255);
    rgba[p * 4 + 3] = 255;
  }
  const palette = quantize(rgba, 256, { format: 'rgb565' });
  const index = applyPalette(rgba, palette, 'rgb565');
  gif.writeFrame(index, W, H, { palette, delay: 60, repeat: 0 });
}
gif.finish();
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, gif.bytes());
const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
console.log(`✓ wrote ${path.relative(process.cwd(), OUT)} — ${W}x${H}, ${FRAMES} frames, ${kb} KB`);
