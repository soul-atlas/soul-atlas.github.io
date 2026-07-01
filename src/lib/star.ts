// A SOUL's visual identity, derived entirely from metadata that already exists.
//
// Every SOUL already carries a small constellation of facts — category, kind,
// difficulty, status, provenance, tags, how many minds it links to, how much has
// been written. This turns those facts into a single deterministic "star": same
// input, same SVG, every build — exactly how the rest of the Atlas is derived
// from the corpus rather than stored by hand. No portraits, no icon library, no
// art queue that falls behind 300 SOULs today or 10,000 tomorrow.
//
// The mapping (see the field guide on any SOUL page):
//   category    -> hue                (the Atlas's existing 21-colour palette)
//   kind        -> core glyph shape   (occupation, discipline, role, identity, …)
//   difficulty  -> size + glow radius
//   status      -> formation stage    (stub gas cloud -> steadily glowing star)
//   provenance  -> line confidence    (human solid, ai-assisted dashed, ai dotted)
//   verified    -> a thin corona, brighter per practitioner reviewer
//   related     -> diffraction spikes (one family of rays per linked mind)
//   tags        -> orbiting moons      (each at a fixed, hash-derived angle)
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
  animate?: boolean; // add classes the stylesheet animates (pulse / slow spin)
  title?: string; // <title> for accessibility; defaults to "<name> sigil"
}

const DIFFICULTY_RADIUS: Record<string, number> = {
  foundational: 12,
  intermediate: 15,
  advanced: 18,
  expert: 22,
};

// --- deterministic hashing so a SOUL's star never changes between builds ------
function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
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
const f = (n: number) => Number(n.toFixed(2));

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function polygon(cx: number, cy: number, r: number, sides: number, rot: number): string {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const a = ((rot - 90 + (i * 360) / sides) * Math.PI) / 180;
    pts.push(`${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`);
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
    const a = ((rot - 90 + (i * 360) / total) * Math.PI) / 180;
    pts.push(`${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`);
  }
  return pts.join(' ');
}

// The core glyph family for each `kind`. Stroke/fill are applied by the caller.
function coreShape(kind: string, cx: number, cy: number, r: number, rot: number): string {
  switch (kind) {
    case 'discipline':
      return `<polygon points="${polygon(cx, cy, r, 6, rot)}" />`;
    case 'role':
      return `<polygon points="${polygon(cx, cy, r, 5, rot)}" />`;
    case 'identity':
      return `<circle cx="${cx}" cy="${cy}" r="${f(r)}" fill="none" />`;
    case 'community': {
      const off = r * 0.42;
      const a = ((rot - 90) * Math.PI) / 180;
      const rr = f(r * 0.72);
      return (
        `<circle cx="${f(cx + off * Math.cos(a))}" cy="${f(cy + off * Math.sin(a))}" r="${rr}" fill="none" />` +
        `<circle cx="${f(cx - off * Math.cos(a))}" cy="${f(cy - off * Math.sin(a))}" r="${rr}" fill="none" />`
      );
    }
    case 'historical': {
      let ticks = '';
      for (let i = 0; i < 8; i++) {
        const a = ((rot - 90 + (i * 360) / 8) * Math.PI) / 180;
        ticks += `<line x1="${f(cx + r * Math.cos(a))}" y1="${f(cy + r * Math.sin(a))}" x2="${f(cx + (r + 4) * Math.cos(a))}" y2="${f(cy + (r + 4) * Math.sin(a))}" />`;
      }
      return `<polygon points="${polygon(cx, cy, r, 8, rot)}" />${ticks}`;
    }
    case 'agent-persona': {
      const s = r * 0.62;
      return (
        `<polygon points="${polygon(cx, cy, r, 4, rot + 45)}" />` +
        `<line x1="${f(cx - s)}" y1="${cy}" x2="${f(cx + s)}" y2="${cy}" />` +
        `<line x1="${cx}" y1="${f(cy - s)}" x2="${cx}" y2="${f(cy + s)}" />`
      );
    }
    case 'occupation':
    default:
      return `<polygon points="${starPolygon(cx, cy, r, r * 0.42, 4, rot)}" />`;
  }
}

/**
 * Build the SVG markup for a SOUL's star. Pure and deterministic — the same
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
  const tags = input.tags ?? [];
  const related = Math.max(0, Math.min(8, input.related ?? 0));

  const seed = fnv1a(`${input.title}|${input.category}|${kind}`);
  const rng = mulberry32(seed);
  const rotation = rng() * 360;

  const color = categoryColor(input.category);
  const baseR = DIFFICULTY_RADIUS[input.difficulty || ''] ?? 15;
  const wordFactor = Math.max(0, Math.min(1, ((input.wordCount ?? 1500) - 150) / 5850));
  const glow = 1.5 + wordFactor * 5;
  const uid = `sg${seed.toString(36)}`;
  const pulse = animate ? ` class="soul-sigil__pulse"` : '';
  const spin = animate ? ` class="soul-sigil__spin"` : '';

  const parts: string[] = [];
  parts.push(
    `<defs><filter id="${uid}" x="-120%" y="-120%" width="340%" height="340%">` +
      `<feGaussianBlur stdDeviation="${f(glow)}" result="b" />` +
      `<feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>` +
      `</filter></defs>`,
  );

  // --- stub: a protostar — an unformed wisp of gas with no defined edges yet ---
  if (status === 'stub') {
    parts.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(baseR * 0.55)}" fill="${rgba(color, 0.28)}" filter="url(#${uid})" />`,
    );
    for (let d = 0; d < 6; d++) {
      const dr = baseR * (0.6 + rng() * 0.9);
      const da = rng() * Math.PI * 2;
      parts.push(
        `<circle cx="${f(cx + dr * Math.cos(da))}" cy="${f(cy + dr * Math.sin(da))}" r="${f(0.6 + rng() * 0.8)}" fill="${rgba(color, 0.35 + rng() * 0.3)}" />`,
      );
    }
    return wrap(parts.join(''), size, animate, input, opts.title);
  }

  // Formation stage (status) drives fill/stroke presence.
  let fillOpacity: number;
  let strokeOpacity: number;
  let showGlow: boolean;
  const pre: string[] = [];

  if (status === 'draft') {
    fillOpacity = 0.05;
    strokeOpacity = 0.65;
    showGlow = false;
    pre.push(
      `<ellipse cx="${cx}" cy="${cy}" rx="${f(baseR * 1.7)}" ry="${f(baseR * 0.55)}" transform="rotate(${f(rotation * 0.4)} ${cx} ${cy})" fill="none" stroke="${color}" stroke-opacity="0.25" stroke-dasharray="2 4" />`,
    );
  } else if (status === 'review') {
    fillOpacity = 0.4;
    strokeOpacity = 0.9;
    showGlow = false;
    for (let i = 0; i < 3; i++) {
      const a = rng() * 360 * (Math.PI / 180);
      const flen = baseR + 3 + rng() * 3;
      pre.push(
        `<line x1="${f(cx + baseR * Math.cos(a))}" y1="${f(cy + baseR * Math.sin(a))}" x2="${f(cx + flen * Math.cos(a))}" y2="${f(cy + flen * Math.sin(a))}" stroke="${color}" stroke-opacity="0.5" stroke-width="1"${pulse} />`,
      );
    }
  } else {
    fillOpacity = 0.85;
    strokeOpacity = 1;
    showGlow = true;
  }

  // Provenance — how confidently the lines are drawn.
  let dash = '';
  let strokeWidth = 1.8;
  if (provenance === 'ai-generated') {
    dash = ' stroke-dasharray="1.4 3"';
    strokeWidth = 1.1;
    fillOpacity *= 0.55;
    // an astronomer's "unconfirmed candidate" ring for an unverified draft
    pre.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(baseR + 8)}" fill="none" stroke="${color}" stroke-opacity="0.3" stroke-dasharray="1 4" stroke-width="1" />`,
    );
  } else if (provenance === 'ai-assisted') {
    dash = ' stroke-dasharray="5 3"';
    strokeWidth = 1.5;
  }

  parts.push(...pre);

  const glowAttr = showGlow ? ` filter="url(#${uid})"` : '';
  parts.push(
    `<g fill="${rgba(color, fillOpacity)}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${strokeOpacity}"${dash}${glowAttr}>` +
      coreShape(kind, cx, cy, baseR, rotation) +
      `</g>`,
  );

  // The nucleus — the mind itself.
  parts.push(
    `<circle cx="${cx}" cy="${cy}" r="${f(Math.max(1.6, baseR * 0.14))}" fill="${mix(color, WHITE, 0.75)}"${showGlow ? ` filter="url(#${uid})"` : ''}${pulse} />`,
  );

  // Verified + reviewers — a thin corona, brighter with each practitioner.
  if (input.verified) {
    const reviewers = Math.max(1, input.reviewers ?? 1);
    const op = Math.min(0.85, 0.3 + reviewers * 0.16);
    parts.push(
      `<circle cx="${cx}" cy="${cy}" r="${f(baseR + 6)}" fill="none" stroke="${mix(color, WHITE, 0.6)}" stroke-width="0.9" stroke-opacity="${f(op)}" stroke-dasharray="0.2 3.4" stroke-linecap="round"${spin} />`,
    );
  }

  // Related minds — diffraction spikes, one ray per linked mind.
  if (related > 0) {
    const spikeLen = 4 + related * 1.8;
    const inner = baseR * 0.9;
    for (let i = 0; i < related; i++) {
      const a = ((rotation + (i * 360) / related + rng() * 8) * Math.PI) / 180;
      parts.push(
        `<line x1="${f(cx + inner * Math.cos(a))}" y1="${f(cy + inner * Math.sin(a))}" x2="${f(cx + (inner + spikeLen) * Math.cos(a))}" y2="${f(cy + (inner + spikeLen) * Math.sin(a))}" stroke="${color}" stroke-width="0.9" stroke-opacity="0.55" />`,
      );
    }
  }

  // Tags — orbiting moons at fixed, hash-derived angles (hover shows the tag).
  tags.slice(0, 8).forEach((tag, i) => {
    const a = ((fnv1a(tag) % 360) * Math.PI) / 180;
    const orbitR = baseR + 9 + (i % 2) * 6;
    parts.push(
      `<circle cx="${f(cx + orbitR * Math.cos(a))}" cy="${f(cy + orbitR * Math.sin(a))}" r="1.6" fill="${mix(color, WHITE, 0.5)}"><title>${esc(tag)}</title></circle>`,
    );
  });

  return wrap(parts.join(''), size, animate, input, opts.title);
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
