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
