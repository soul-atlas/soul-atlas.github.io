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
import { categoryColor } from './data';

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
  const color = categoryColor(input.category);
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
  return (
    `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 100 100" ` +
    `role="img" aria-label="${label}" style="overflow:visible;display:block">` +
    `<title>${label}</title>${inner}</svg>`
  );
}
