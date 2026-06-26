// Markdown rendering for SOUL bodies. We render with `marked` at generate-time
// so the website, the API, and the exports all share one canonical HTML output.
import { Marked } from 'marked';
import { gfmHeadingId, getHeadingList, resetHeadings } from 'marked-gfm-heading-id';

const marked = new Marked({ gfm: true, breaks: false });
marked.use(gfmHeadingId());

/** Render a markdown string to HTML. */
export function renderMarkdown(md) {
  resetHeadings();
  return marked.parse(md ?? '');
}

/**
 * Render markdown and also return the heading outline (h2/h3) for a table of
 * contents. Headings carry stable, GitHub-compatible ids.
 */
export function renderWithToc(md) {
  resetHeadings();
  const html = marked.parse(md ?? '');
  const toc = getHeadingList()
    .filter((h) => h.level === 2 || h.level === 3)
    .map((h) => ({ id: h.id, text: stripTags(h.text), level: h.level }));
  return { html, toc };
}

function stripTags(s) {
  return String(s)
    .replace(/<[^>]+>/g, '')
    .trim();
}

/** Count words in a markdown/plain string, ignoring code fences and HTML. */
export function countWords(md) {
  if (!md) return 0;
  const text = String(md)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_\-|]/g, ' ');
  const m = text.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g);
  return m ? m.length : 0;
}

/** Average adult reading pace ~225 wpm; round up to whole minutes (min 1). */
export function readingTime(words) {
  return Math.max(1, Math.round(words / 225));
}

/** GitHub-style slug, matching marked-gfm-heading-id for cross-references. */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
