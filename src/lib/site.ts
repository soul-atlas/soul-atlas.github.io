// Site-wide configuration and URL helpers. The base path is injected by Astro
// (`base` in astro.config.mjs) so the site works under /soul-atlas on GitHub
// Pages and at / on a custom domain without code changes.

export const SITE = {
  name: 'SOUL Atlas',
  tagline: 'A map of how the world thinks.',
  description:
    'The open, community-maintained collection of SOUL.md files: one SOUL for every way humans think — structured portraits of how people in every field actually think, decide, and work.',
  githubRepo: import.meta.env.GITHUB_REPO || 'soul-atlas/soul-atlas.github.io',
};

export const GITHUB_URL = `https://github.com/${SITE.githubRepo}`;

/** The home of the SOUL.md format specification. */
export const SOUL_FORMAT_URL = 'https://soul.md/';

const BASE = import.meta.env.BASE_URL || '/';

/** Build an internal URL that respects the configured base path. */
export function url(path = ''): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return path === '' || path === '/' ? base || '/' : `${base}${p}`;
}

export function soulUrl(slug: string): string {
  return url(`/souls/${slug}`);
}

export function categoryUrl(name: string): string {
  return url(`/categories/${slugifyCat(name)}`);
}

export function tagUrl(tag: string): string {
  return url(`/tags/${tag}`);
}

export function slugifyCat(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// GitHub deep links for a given SOUL.
export function ghEditUrl(slug: string): string {
  return `${GITHUB_URL}/edit/main/souls/${slug}/SOUL.md`;
}
export function ghHistoryUrl(slug: string): string {
  return `${GITHUB_URL}/commits/main/souls/${slug}/SOUL.md`;
}
export function ghBlameUrl(slug: string): string {
  return `${GITHUB_URL}/blame/main/souls/${slug}/SOUL.md`;
}
export function ghNewIssueUrl(slug: string): string {
  return `${GITHUB_URL}/issues/new?template=correction.yml&title=${encodeURIComponent(`[${slug}] `)}`;
}
