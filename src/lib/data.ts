// Typed access to the build-time generated corpus. Everything the site renders
// flows through here, so pages never touch the filesystem or the engine directly.
import indexJson from '../generated/index.json';
import graphJson from '../generated/graph.json';
import statsJson from '../generated/stats.json';
import manifestJson from '../generated/manifest.json';
import activityJson from '../generated/activity.json';
import searchJson from '../generated/search.json';

export type RelationshipType =
  | 'related'
  | 'specialization'
  | 'prerequisite'
  | 'adjacent'
  | 'collaboration'
  | 'progression';

export interface Related {
  slug: string;
  type: RelationshipType;
  note?: string;
}

export interface Reviewer {
  name: string;
  credential?: string;
  date?: string;
}

export type Kind =
  | 'occupation'
  | 'discipline'
  | 'role'
  | 'identity'
  | 'community'
  | 'historical'
  | 'agent-persona';

export interface SoulSource {
  origin: string;
  url?: string;
  repo?: string;
  license?: string;
  attribution?: string;
  fetched?: string;
}

export interface SoulSummary {
  slug: string;
  title: string;
  category: string;
  kind: Kind;
  source: SoulSource | null;
  federated: boolean;
  tags: string[];
  aliases: string[];
  difficulty: string | null;
  status: string;
  provenance: string | null;
  verified: boolean;
  unverifiedAiDraft: boolean;
  reviewers: Reviewer[];
  lastReviewed: string | null;
  summary: string;
  wordCount: number;
  readingTimeMinutes: number;
  completeness: number;
  backlinks: string[];
  related: Related[];
  created: string | null;
  updated: string | null;
}

export interface Section {
  heading: string;
  id: string;
  markdown: string;
  html: string;
  wordCount: number;
}

export interface GitHistory {
  created: string | null;
  updated: string | null;
  revisions: number;
  authors: { name: string; commits: number }[];
  timeline: { date: string; author: string }[];
}

export interface Citation {
  apa: string;
  bibtex: string;
  text: string;
}

export interface SoulRecord {
  slug: string;
  title: string;
  metadata: Record<string, any>;
  sections: Section[];
  computed: {
    wordCount: number;
    readingTimeMinutes: number;
    completeness: number;
    backlinks: string[];
    verified: boolean;
    aiDrafted: boolean;
    unverifiedAiDraft: boolean;
    federated: boolean;
  };
  git: GitHistory;
  citation: Citation;
}

export interface GraphData {
  nodes: {
    id: string;
    title: string;
    category: string;
    kind: Kind;
    difficulty: string | null;
    status: string;
    verified: boolean;
    tags: string[];
    wordCount: number;
    degree: number;
  }[];
  edges: { source: string; target: string; type: RelationshipType; note?: string }[];
}

export const souls = indexJson as SoulSummary[];
export const graph = graphJson as GraphData;
export const stats = statsJson as any;
export const manifest = manifestJson as any;
export const activity = activityJson as { date: string; count: number }[];
export const searchDocs = searchJson as any[];

const bySlug = new Map(souls.map((s) => [s.slug, s]));

export function getSummary(slug: string): SoulSummary | undefined {
  return bySlug.get(slug);
}

export function titleOf(slug: string): string {
  return bySlug.get(slug)?.title ?? slug;
}

// Full records (with rendered HTML + git history), loaded eagerly at build.
const fullModules = import.meta.glob<{ default: SoulRecord }>('../generated/souls/*.json', {
  eager: true,
});
const fullBySlug = new Map<string, SoulRecord>();
for (const path in fullModules) {
  const rec = fullModules[path].default;
  fullBySlug.set(rec.slug, rec);
}

export function getRecord(slug: string): SoulRecord | undefined {
  return fullBySlug.get(slug);
}

export function allRecords(): SoulRecord[] {
  return [...fullBySlug.values()];
}

// ---------------------------------------------------------------------------
// Specialization trees. A SOUL's free-text `specializations` list declares its
// narrower forms (e.g. Architect → Landscape Architect); where a label resolves
// to a real SOUL (by slug, title, or alias) it becomes a navigable parent→child
// edge, otherwise it stays a leaf label. We root each SOUL's tree at its topmost
// ancestor so the page shows where it sits, with the current node highlighted.
// The forest deepens automatically as sub-specialty SOULs are added — no code
// change needed.
export interface SpecNode {
  slug: string | null; // null for a free-text leaf with no SOUL of its own
  title: string;
  current: boolean; // the SOUL whose tree is being rendered
  children: SpecNode[];
}

const normLabel = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

interface Forest {
  childrenOf: Map<string, { slug: string | null; title: string }[]>;
  parentOf: Map<string, string>;
}
let _forest: Forest | null = null;

function specForest(): Forest {
  if (_forest) return _forest;
  const resolve = new Map<string, string>(); // normalized label → slug
  for (const rec of fullBySlug.values()) {
    resolve.set(normLabel(rec.slug), rec.slug);
    resolve.set(normLabel(rec.title), rec.slug);
    for (const a of (rec.metadata.aliases ?? []) as string[]) resolve.set(normLabel(a), rec.slug);
  }
  const childrenOf = new Map<string, { slug: string | null; title: string }[]>();
  const parentOf = new Map<string, string>();
  for (const rec of fullBySlug.values()) {
    const specs = (rec.metadata.specializations ?? []) as string[];
    const kids: { slug: string | null; title: string }[] = [];
    for (const label of specs) {
      if (typeof label !== 'string' || !label.trim()) continue;
      const childSlug = resolve.get(normLabel(label));
      if (childSlug && childSlug !== rec.slug) {
        kids.push({ slug: childSlug, title: titleOf(childSlug) });
        if (!parentOf.has(childSlug)) parentOf.set(childSlug, rec.slug);
      } else {
        kids.push({ slug: null, title: label.trim() });
      }
    }
    if (kids.length) childrenOf.set(rec.slug, kids);
  }
  _forest = { childrenOf, parentOf };
  return _forest;
}

/**
 * The specialization tree a SOUL belongs to, rooted at its topmost ancestor with
 * `current` flagged on the given slug — or null if it has no parent and no
 * specializations of its own.
 */
export function getSpecializationTree(slug: string): SpecNode | null {
  const { childrenOf, parentOf } = specForest();
  if (!childrenOf.has(slug) && !parentOf.has(slug)) return null;

  // Walk up to the root (guard against cycles).
  let root = slug;
  const seen = new Set([root]);
  while (parentOf.has(root)) {
    const p = parentOf.get(root)!;
    if (seen.has(p)) break;
    seen.add(p);
    root = p;
  }

  const build = (s: string, visited: Set<string>): SpecNode => ({
    slug: s,
    title: titleOf(s),
    current: s === slug,
    children: (childrenOf.get(s) ?? []).map((k) =>
      k.slug && !visited.has(k.slug)
        ? build(k.slug, new Set(visited).add(k.slug))
        : { slug: k.slug, title: k.title, current: false, children: [] },
    ),
  });
  return build(root, new Set([root]));
}

// ---------------------------------------------------------------------------
// "Similar minds" — content similarity beyond the explicit, hand-authored graph
// edges. We have no embedding service (the site is static, offline-built, and
// dependency-light), so similarity is computed at build time with TF-IDF cosine
// over each SOUL's text (title + tags + summary + section prose, with the
// shorter, more topical fields weighted up). For a corpus this size that
// surfaces genuinely related minds — shared vocabulary, mental models, and
// concerns — that no one thought to link. Deterministic; recomputed each build.
export interface SimilarMind {
  slug: string;
  title: string;
  category: string;
  score: number;
}

const STOPWORDS = new Set(
  (
    'the and for are but not you all any can her was one our out has had his she him how its ' +
    'who get why see use two has had let put say too via per yet off who whom this that with ' +
    'from into over under than then them they their there here when what which while where ' +
    'your yours about above after again against because been before being below between both ' +
    'does doing down during each few more most other some such only own same these those very ' +
    'will would should could other within without across among also like just much many often ' +
    'every most less able based using used make makes made work works working one set sets'
  ).split(/\s+/),
);

function tokenize(text: string): string[] {
  const out: string[] = [];
  const re = /[a-z][a-z'-]{2,}/g;
  let m: RegExpExecArray | null;
  const t = text.toLowerCase();
  while ((m = re.exec(t))) {
    const w = m[0].replace(/['-]/g, '');
    if (w.length >= 3 && !STOPWORDS.has(w)) out.push(w);
  }
  return out;
}

let _similar: Map<string, SimilarMind[]> | null = null;

function buildSimilar(): Map<string, SimilarMind[]> {
  if (_similar) return _similar;
  const recs = [...fullBySlug.values()];
  const N = recs.length || 1;

  // Field-weighted term frequencies + document frequencies.
  const docs: { slug: string; tf: Map<string, number> }[] = [];
  const df = new Map<string, number>();
  for (const r of recs) {
    const m = r.metadata ?? {};
    const parts: string[] = [];
    const repeat = (s: string, n: number) => {
      for (let i = 0; i < n; i++) parts.push(s);
    };
    repeat(r.title, 3);
    for (const tag of (m.tags ?? []) as string[]) repeat(String(tag).replace(/-/g, ' '), 3);
    if (m.summary) repeat(String(m.summary), 2);
    for (const sec of r.sections ?? []) parts.push(sec.markdown ?? '');
    const tf = new Map<string, number>();
    for (const tok of tokenize(parts.join(' '))) tf.set(tok, (tf.get(tok) ?? 0) + 1);
    for (const term of tf.keys()) df.set(term, (df.get(term) ?? 0) + 1);
    docs.push({ slug: r.slug, tf });
  }

  // L2-normalized TF-IDF vectors (sublinear TF; drop near-ubiquitous terms).
  const vecs = new Map<string, Map<string, number>>();
  for (const { slug, tf } of docs) {
    const v = new Map<string, number>();
    let norm = 0;
    for (const [term, count] of tf) {
      const d = df.get(term)!;
      if (d > N * 0.5) continue;
      const w = (1 + Math.log(count)) * Math.log(N / d);
      if (w <= 0) continue;
      v.set(term, w);
      norm += w * w;
    }
    norm = Math.sqrt(norm) || 1;
    for (const [term, w] of v) v.set(term, w / norm);
    vecs.set(slug, v);
  }

  // Inverted index → sparse cosine → top candidates per doc.
  const inverted = new Map<string, [string, number][]>();
  for (const [slug, v] of vecs)
    for (const [term, w] of v) {
      if (!inverted.has(term)) inverted.set(term, []);
      inverted.get(term)!.push([slug, w]);
    }

  const out = new Map<string, SimilarMind[]>();
  for (const [slug, v] of vecs) {
    const score = new Map<string, number>();
    for (const [term, w] of v) {
      const postings = inverted.get(term)!;
      if (postings.length > N * 0.4) continue;
      for (const [other, ow] of postings) {
        if (other === slug) continue;
        score.set(other, (score.get(other) ?? 0) + w * ow);
      }
    }
    // Keep a deep pool: the very top matches are often the same SOULs already
    // linked in the curated graph, which getSimilar() excludes — so we need
    // headroom to still fill K genuinely-novel "similar minds" below them.
    const ranked = [...score.entries()]
      .filter(([, s]) => s > 0)
      .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
      .slice(0, 30)
      .map(([s, sc]) => ({
        slug: s,
        title: titleOf(s),
        category: getSummary(s)?.category ?? '',
        score: sc,
      }));
    out.set(slug, ranked);
  }
  _similar = out;
  return out;
}

/**
 * The most content-similar SOULs to `slug`, excluding itself and any it is
 * already explicitly linked to (related edges + backlinks) — so the list adds
 * discovery rather than repeating the curated graph.
 */
export function getSimilar(slug: string, k = 6): SimilarMind[] {
  const candidates = buildSimilar().get(slug) ?? [];
  const summary = getSummary(slug);
  const exclude = new Set<string>([
    slug,
    ...(summary?.related ?? []).map((r) => r.slug),
    ...(summary?.backlinks ?? []),
  ]);
  return candidates.filter((c) => !exclude.has(c.slug)).slice(0, k);
}

export const categories = manifest.categories as { name: string; count: number }[];
export const kinds = (manifest.kinds ?? []) as { kind: Kind; count: number }[];
export const tags = manifest.tags as { tag: string; count: number }[];

// Display labels and the noun used in kind-aware copy.
export const KIND_LABELS: Record<Kind, string> = {
  occupation: 'Occupation',
  discipline: 'Discipline',
  role: 'Role',
  identity: 'Identity',
  community: 'Community',
  historical: 'Historical',
  'agent-persona': 'Agent persona',
};

export function kindLabel(kind: string | null | undefined): string {
  return KIND_LABELS[(kind as Kind) ?? 'occupation'] ?? 'Occupation';
}

// schema.org type for JSON-LD `about`. Occupations are a first-class type; every
// other way of thinking is best described as a DefinedTerm (a named concept).
export function schemaOrgType(kind: string | null | undefined): string {
  return (kind ?? 'occupation') === 'occupation' ? 'Occupation' : 'DefinedTerm';
}

export const RELATION_LABELS: Record<RelationshipType, string> = {
  related: 'Related',
  specialization: 'Specialization',
  prerequisite: 'Prerequisite',
  adjacent: 'Adjacent',
  collaboration: 'Collaborates with',
  progression: 'Progression',
};

export const CATEGORY_COLORS: Record<string, string> = {
  Technology: '#3b82f6',
  Healthcare: '#ef4444',
  'Skilled Trades': '#f59e0b',
  Engineering: '#8b5cf6',
  Science: '#06b6d4',
  Education: '#10b981',
  Business: '#6366f1',
  Government: '#64748b',
  Military: '#4b5563',
  Law: '#0ea5e9',
  Transportation: '#14b8a6',
  Agriculture: '#84cc16',
  Hospitality: '#ec4899',
  Creative: '#f472b6',
  Sports: '#22c55e',
  Entertainment: '#a855f7',
  Finance: '#eab308',
  'Public Service': '#0891b2',
  Historical: '#a16207',
  Emerging: '#d946ef',
  'Life Roles': '#fb7185',
};

export function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? '#94a3b8';
}

export interface VerificationBadge {
  tone: 'verified' | 'unverified';
  label: string;
  title: string;
}

/**
 * The one place that turns provenance + review state into a user-facing badge.
 * Honesty is the point: an AI-drafted SOUL nobody has checked says so plainly.
 */
export function verificationBadge(s: {
  verified: boolean;
  provenance?: string | null;
  reviewers?: Reviewer[];
  lastReviewed?: string | null;
}): VerificationBadge {
  if (s.verified) {
    const n = (s.reviewers || []).length;
    return {
      tone: 'verified',
      label: n > 0 ? `Practitioner-reviewed${n > 1 ? ` · ${n}` : ''}` : 'Reviewed',
      title:
        n > 0
          ? `Reviewed against real practice by ${n} ${n === 1 ? 'person' : 'people'}.`
          : `Last reviewed ${s.lastReviewed || 'by a human'}.`,
    };
  }
  return {
    tone: 'unverified',
    label: s.provenance === 'ai-generated' ? 'AI-drafted · unverified' : 'Unverified',
    title:
      'A first draft no practitioner has verified yet. Treat it as a starting point, not authority — and tell us where it is wrong.',
  };
}
