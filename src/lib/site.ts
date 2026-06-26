// Site-wide configuration and URL helpers. The base path is injected by Astro
// (`base` in astro.config.mjs) so the site works under /soul-atlas on GitHub
// Pages and at / on a custom domain without code changes.

export const SITE = {
  name: 'SOUL Atlas',
  tagline: 'How experts think — one SOUL at a time.',
  description:
    'The open, community-maintained collection of SOUL.md files: structured portraits of how experts in every field actually think, decide, and work.',
  githubRepo: import.meta.env.GITHUB_REPO || 'soul-atlas/soul-atlas.github.io',
};

export const GITHUB_URL = `https://github.com/${SITE.githubRepo}`;

const BASE = import.meta.env.BASE_URL || '/';

/** Build an internal URL that respects the configured base path. */
export function url(path = ''): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return path === '' || path === '/' ? base || '/' : `${base}${p}`;
}

export function soulUrl(slug: string): string {
  return url(`/occupations/${slug}`);
}

export function categoryUrl(name: string): string {
  return url(`/categories/${slugifyCat(name)}`);
}

export function tagUrl(tag: string): string {
  return url(`/tags/${tag}`);
}

export function slugifyCat(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// GitHub deep links for a given occupation.
export function ghEditUrl(slug: string): string {
  return `${GITHUB_URL}/edit/main/occupations/${slug}/SOUL.md`;
}
export function ghHistoryUrl(slug: string): string {
  return `${GITHUB_URL}/commits/main/occupations/${slug}/SOUL.md`;
}
export function ghBlameUrl(slug: string): string {
  return `${GITHUB_URL}/blame/main/occupations/${slug}/SOUL.md`;
}
export function ghNewIssueUrl(slug: string): string {
  return `${GITHUB_URL}/issues/new?template=correction.yml&title=${encodeURIComponent(`[${slug}] `)}`;
}
