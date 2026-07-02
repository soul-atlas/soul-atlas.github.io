// A SOUL's visual identity, derived entirely from metadata that already exists.
//
// Every SOUL already carries a small constellation of facts — category, kind,
// difficulty, status, provenance, tags, how many minds it links to, how much has
// been written. This turns those facts into a single deterministic emblem: same
// input, same SVG, every build — exactly how the rest of the Atlas is derived
// from the corpus rather than stored by hand. No portraits, no icon library, no
// art queue that falls behind 300 SOULs today or 10,000 tomorrow.
//
// Design goal: a clean, symmetric orbital seal with a strong silhouette that
// still reads at 32px, not a scatter of particles. The mapping:
//   category    -> hue (reuses the existing 21-colour palette)
//   kind        -> the solid core glyph (occupation, discipline, role, …)
//   difficulty  -> core size
//   status      -> how "formed" the emblem is (stub = faint hollow ring;
//                  draft/review/stable = progressively solid core + brighter orbit)
//   provenance  -> the orbit line style, one subtle cue (human solid,
//                  ai-assisted dashed, ai-generated finely dotted)
//   verified    -> a bright halo ring, stronger per practitioner reviewer
//   related     -> evenly spaced nodes on the orbit, one per linked mind
//   tags        -> small evenly spaced satellites on a faint outer orbit
//
// This is pure and framework-free: it returns an SVG string and touches no DOM,
// so it renders identically at build time in Astro, in the API, or in a test.
// It imports only the corpus-free colour palette, so it is also safe to bundle
// into client-side scripts (e.g. the Explore filter).
import { categoryColor } from './colors';

export interface SigilInput {
  title: string;
  category: string;
  kind?: string | null;
  difficulty?: string | null;
  status?: string | null;
  provenance?: string | null;
  tags?: string[];
  related?: number;
  wordCount?: number;
  verified?: boolean;
  reviewers?: number;
}

export interface SigilOptions {
  size?: number; // rendered px (viewBox is a fixed 100x100)
  animate?: boolean; // add classes the stylesheet animates (pulse / spin)
  title?: string; // <title> for accessibility; defaults to "<name> sigil"
}

// One place that turns a corpus summary or a (possibly serialised) record into a
// SigilInput, so every surface — cards, hero, compare, the SVG endpoint — builds
// the emblem from exactly the same fields.
type SummaryLike = {
  title: string;
  category: string;
  kind?: string | null;
  difficulty?: string | null;
  status?: string | null;
  provenance?: string | null;
  tags?: string[];
  related?: unknown[];
  reviewers?: unknown[];
  verified?: boolean;
  wordCount?: number;
};

export function sigilInputFromSummary(s: SummaryLike): SigilInput {
  return {
    title: s.title,
    category: s.category,
    kind: s.kind ?? 'occupation',
    difficulty: s.difficulty ?? null,
    status: s.status ?? null,
    provenance: s.provenance ?? null,
    tags: s.tags ?? [],
    related: (s.related ?? []).length,
    reviewers: (s.reviewers ?? []).length,
    verified: s.verified ?? false,
    wordCount: s.wordCount,
  };
}

export function sigilInputFromRecord(rec: {
  title: string;
  metadata: any;
  computed?: { verified?: boolean; wordCount?: number };
}): SigilInput {
  const m = rec.metadata ?? {};
  return {
    title: rec.title,
    category: m.category,
    kind: m.kind ?? 'occupation',
    difficulty: m.difficulty ?? null,
    status: m.status ?? null,
    provenance: m.provenance ?? null,
    tags: m.tags ?? [],
    related: (m.related ?? []).length,
    reviewers: (m.reviewers ?? []).length,
    verified: rec.computed?.verified ?? false,
    wordCount: rec.computed?.wordCount,
  };
}

const DIFFICULTY_RADIUS: Record<string, number> = {
  foundational: 13,
  intermediate: 16,
  advanced: 19,
  expert: 22,
};

// --- deterministic hashing so a SOUL's emblem never changes between builds ----
function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '');
  if (h.length === 3)
    h = h
      .split('')
      .map((c) => c + c)
      .join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mix(hex: string, target: [number, number, number], t: number): string {
  const a = hexToRgb(hex);
  const c = (i: number) => Math.round(a[i] + (target[i] - a[i]) * t);
  return `rgb(${c(0)},${c(1)},${c(2)})`;
}

function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

// --- identity layer ----------------------------------------------------------
// The mapping above is the *semantic* layer: it turns metadata into the most
// salient channels (hue, silhouette, size…). But a cohort that shares
// category + kind + difficulty collapses to a near-identical emblem. So we add
// an *identity* layer that routes the title hash into channels the semantic
// layer does not use — tone (saturation + lightness; hue, i.e. the category, is
// deliberately preserved) and a small inner core motif. Still deterministic.

function hexToHsl(hex: string): [number, number, number] {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.min(1, Math.max(0, s));
  l = Math.min(1, Math.max(0, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const to = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

// Nudge hue slightly (staying inside the category's colour family) along with
// saturation + lightness, so every SOUL gets its own shade while the category
// stays recognisable. Lightness is clamped to a legible band on the dark panel.
function tonalShift(hex: string, dH: number, dS: number, dL: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h + dH, s + dS, Math.min(0.62, Math.max(0.3, l + dL)));
}

// A small deterministic value stream from the 32-bit seed (xorshift32).
function seedStream(seed: number): () => number {
  let s = seed >>> 0 || 0x9e3779b9;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}

const WHITE: [number, number, number] = [255, 255, 255];
const DARK: [number, number, number] = [12, 16, 27]; // toward the panel background
const f = (n: number) => Number(n.toFixed(2));

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// A point on a circle. Angle 0 is straight up; increases clockwise.
function pt(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function polygon(cx: number, cy: number, r: number, sides: number, rot: number): string {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const [x, y] = pt(cx, cy, r, rot + (i * 360) / sides);
    pts.push(`${f(x)},${f(y)}`);
  }
  return pts.join(' ');
}

function starPolygon(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  spikes: number,
  rot: number,
): string {
  const pts: string[] = [];
  const total = spikes * 2;
  for (let i = 0; i < total; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const [x, y] = pt(cx, cy, r, rot + (i * 360) / total);
    pts.push(`${f(x)},${f(y)}`);
  }
  return pts.join(' ');
}

// The solid core glyph for each `kind`. Fill/stroke are supplied by the caller's
// group so the shape stays a clean, filled silhouette.
function coreShape(kind: string, cx: number, cy: number, r: number, rot: number): string {
  switch (kind) {
    case 'discipline':
      return `<polygon points="${polygon(cx, cy, r, 6, rot)}" />`;
    case 'role':
      return `<polygon points="${polygon(cx, cy, r, 5, rot)}" />`;
    case 'identity':
      return `<circle cx="${cx}" cy="${cy}" r="${f(r)}" />`;
    case 'community': {
      // two interlocking discs (a vesica) — a shared way of thinking
      const off = r * 0.4;
      const [ax, ay] = pt(cx, cy, off, rot);
      const [bx, by] = pt(cx, cy, off, rot + 180);
      const rr = f(r * 0.74);
      return (
        `<circle cx="${f(ax)}" cy="${f(ay)}" r="${rr}" />` +
        `<circle cx="${f(bx)}" cy="${f(by)}" r="${rr}" />`
      );
    }
    case 'historical':
      return `<polygon points="${polygon(cx, cy, r, 8, rot)}" />`;
    case 'agent-persona': {
      // a diamond with a crosshair — a constructed persona
      const s = r * 0.5;
      return (
        `<polygon points="${polygon(cx, cy, r, 4, rot)}" />` +
        `<line x1="${f(cx - s)}" y1="${cy}" x2="${f(cx + s)}" y2="${cy}" stroke-width="1" />` +
        `<line x1="${cx}" y1="${f(cy - s)}" x2="${cx}" y2="${f(cy + s)}" stroke-width="1" />`
      );
    }
    case 'occupation':
    default:
      // a sharp four-point star
      return `<polygon points="${starPolygon(cx, cy, r, r * 0.4, 4, rot)}" />`;
  }
}

// A light figure set into the core. Same silhouette (kind) + different motif =
// two SOULs that still read as their own; it also makes the core rotation
// legible on otherwise symmetric shapes. Kept simple so it survives at ~32px.
const CORE_MOTIFS = 6;
function coreMotif(
  motif: number,
  cx: number,
  cy: number,
  r: number,
  rot: number,
  tone: string,
): string {
  const sw = f(Math.max(0.7, r * 0.06));
  switch (motif) {
    case 1: // inner counter-triangle
      return `<polygon points="${polygon(cx, cy, r * 0.52, 3, rot)}" fill="none" stroke="${tone}" stroke-width="${sw}" stroke-linejoin="round" />`;
    case 2: {
      // radial spokes
      let s = '';
      const n = 4;
      for (let i = 0; i < n; i++) {
        const [x, y] = pt(cx, cy, r * 0.66, rot + (i * 360) / n);
        s += `<line x1="${cx}" y1="${cy}" x2="${f(x)}" y2="${f(y)}" stroke="${tone}" stroke-width="${sw}" stroke-linecap="round" />`;
      }
      return s;
    }
    case 3: // inner ring
      return `<circle cx="${cx}" cy="${cy}" r="${f(r * 0.5)}" fill="none" stroke="${tone}" stroke-width="${sw}" />`;
    case 4: {
      // triad of pips
      let s = '';
      for (let i = 0; i < 3; i++) {
        const [x, y] = pt(cx, cy, r * 0.48, rot + i * 120);
        s += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(Math.max(1, r * 0.11))}" fill="${tone}" />`;
      }
      return s;
    }
    case 5: // inner star outline
      return `<polygon points="${starPolygon(cx, cy, r * 0.55, r * 0.24, 5, rot)}" fill="none" stroke="${tone}" stroke-width="${sw}" stroke-linejoin="round" />`;
    default: // 0 — clean, nucleus only
      return '';
  }
}

interface StatusStyle {
  fillOpacity: number; // core fill strength
  orbitOpacity: number; // main orbit ring strength
  orbitWidth: number;
  glow: boolean;
}
const STATUS_STYLE: Record<string, StatusStyle> = {
  draft: { fillOpacity: 0.42, orbitOpacity: 0.35, orbitWidth: 0.9, glow: false },
  review: { fillOpacity: 0.68, orbitOpacity: 0.6, orbitWidth: 1.1, glow: false },
  stable: { fillOpacity: 0.92, orbitOpacity: 0.85, orbitWidth: 1.3, glow: true },
};

// Orbit line style is the single provenance cue.
function orbitDash(provenance: string): string {
  if (provenance === 'ai-generated') return ' stroke-dasharray="0.5 3"';
  if (provenance === 'ai-assisted') return ' stroke-dasharray="4 3"';
  return '';
}

/**
 * Build the SVG markup for a SOUL's emblem. Pure and deterministic — the same
 * input always yields the same string.
 */
export function soulSigilSvg(input: SigilInput, opts: SigilOptions = {}): string {
  const size = opts.size ?? 48;
  const animate = opts.animate ?? false;
  const cx = 50;
  const cy = 50;

  const kind = input.kind || 'occupation';
  const status = input.status || 'stable';
  const provenance = input.provenance || 'human';
  const tags = (input.tags ?? []).slice(0, 8);
  const related = Math.max(0, Math.min(8, input.related ?? 0));

  const seed = fnv1a(`${input.title}|${input.category}|${kind}`);
  const rotation = seed % 360; // a stable orientation so the family isn't uniform
  // Identity layer: hue (category) is preserved; tone + inner motif carry the
  // per-SOUL individuality so a same-category/kind/difficulty cohort isn't uniform.
  const rnd = seedStream(seed);
  const color = tonalShift(
    categoryColor(input.category),
    (rnd() - 0.5) * 16, // ±8° hue — a distinct shade, still in the category family
    (rnd() - 0.5) * 0.26,
    (rnd() - 0.5) * 0.16,
  );
  const motif = Math.floor(rnd() * CORE_MOTIFS);
  const motifRot = Math.floor(rnd() * 360);
  const coreR = DIFFICULTY_RADIUS[input.difficulty || ''] ?? 15;
  const orbitR = coreR + 13;
  const tagR = orbitR + 7;
  const uid = `sg${seed.toString(36)}`;

  const pulse = animate ? ' class="soul-sigil__pulse"' : '';

  const defs =
    `<defs>` +
    `<radialGradient id="${uid}c" cx="40%" cy="36%" r="72%">` +
    `<stop offset="0%" stop-color="${mix(color, WHITE, 0.5)}" />` +
    `<stop offset="55%" stop-color="${color}" />` +
    `<stop offset="100%" stop-color="${mix(color, DARK, 0.5)}" />` +
    `</radialGradient>` +
    `<filter id="${uid}g" x="-80%" y="-80%" width="260%" height="260%">` +
    `<feGaussianBlur stdDeviation="1.6" />` +
    `</filter>` +
    `</defs>`;

  const layers: string[] = [];

  // --- stub: barely formed. A single faint hollow ring, nothing else. ---------
  if (status === 'stub') {
    layers.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(coreR)}" fill="none" stroke="${color}" stroke-width="1.2" stroke-opacity="0.5" stroke-dasharray="1.5 3.5" />`,
      `<circle cx="${cx}" cy="${cy}" r="2" fill="${rgba(color, 0.6)}" />`,
    );
    return wrap(defs + layers.join(''), size, animate, input, opts.title);
  }

  const st = STATUS_STYLE[status] ?? STATUS_STYLE.stable;

  // A restrained glow disc behind a fully-formed emblem (the core stays crisp).
  if (st.glow) {
    layers.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(coreR * 1.05)}" fill="${rgba(color, 0.28)}" filter="url(#${uid}g)" />`,
    );
  }

  // Main orbit ring (provenance sets the dash; status sets the weight/opacity).
  layers.push(
    `<circle cx="${cx}" cy="${cy}" r="${f(orbitR)}" fill="none" stroke="${color}" stroke-width="${st.orbitWidth}" stroke-opacity="${st.orbitOpacity}"${orbitDash(provenance)} />`,
  );

  // Related minds — evenly spaced nodes riding the orbit.
  for (let i = 0; i < related; i++) {
    const [x, y] = pt(cx, cy, orbitR, rotation + (i * 360) / related);
    layers.push(
      `<circle cx="${f(x)}" cy="${f(y)}" r="2.3" fill="${mix(color, WHITE, 0.25)}" stroke="${mix(color, DARK, 0.3)}" stroke-width="0.6" />`,
    );
  }

  // Verified — a crisp bright halo just outside the core, stronger per reviewer.
  if (input.verified) {
    const reviewers = Math.max(1, input.reviewers ?? 1);
    const haloR = coreR + 5;
    layers.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(haloR)}" fill="none" stroke="${mix(color, WHITE, 0.7)}" stroke-width="${f(Math.min(2, 0.9 + reviewers * 0.35))}" stroke-opacity="${f(Math.min(0.95, 0.55 + reviewers * 0.15))}" />`,
    );
  }

  // The core glyph (kind), a solid filled silhouette. It stays crisp — only the
  // disc behind it glows — so bright hues don't bloom over the shape.
  layers.push(
    `<g fill="url(#${uid}c)" fill-opacity="${st.fillOpacity}" stroke="${mix(color, WHITE, 0.55)}" stroke-width="1.3" stroke-linejoin="round">` +
      coreShape(kind, cx, cy, coreR, rotation) +
      `</g>`,
  );

  // Identity motif — a light figure set into the core (see coreMotif).
  const motifSvg = coreMotif(motif, cx, cy, coreR, motifRot, mix(color, WHITE, 0.72));
  if (motifSvg) layers.push(motifSvg);

  // Nucleus highlight.
  layers.push(
    `<circle cx="${cx}" cy="${cy}" r="${f(Math.max(1.8, coreR * 0.16))}" fill="${mix(color, WHITE, 0.85)}"${pulse} />`,
  );

  // Tags — tiny satellites on a faint outer orbit, interleaved with the nodes.
  tags.forEach((tag, i) => {
    const [x, y] = pt(cx, cy, tagR, rotation + 22.5 + (i * 360) / tags.length);
    layers.push(
      `<circle cx="${f(x)}" cy="${f(y)}" r="1.3" fill="${mix(color, WHITE, 0.4)}" fill-opacity="0.7"><title>${esc(tag)}</title></circle>`,
    );
  });

  return wrap(defs + layers.join(''), size, animate, input, opts.title);
}

function wrap(
  inner: string,
  size: number,
  animate: boolean,
  input: SigilInput,
  titleText?: string,
): string {
  const label = esc(titleText ?? `${input.title} sigil`);
  const cls = animate ? 'soul-sigil soul-sigil--animate' : 'soul-sigil';
  // The xmlns is required for the emblem to render as a standalone file (e.g.
  // the /sigils/<slug>.svg used as the search-result thumbnail); it is harmless
  // when the same markup is inlined into a page.
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" width="${size}" height="${size}" viewBox="0 0 100 100" ` +
    `role="img" aria-label="${label}" style="overflow:visible;display:block">` +
    `<title>${label}</title>${inner}</svg>`
  );
}
