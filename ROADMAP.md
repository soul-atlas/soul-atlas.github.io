# Roadmap

The mission is large and simple: **one SOUL for every way humans think.** This roadmap
sketches how we get there. Dates are intentionally absent — direction matters more than
deadlines, and this is community-paced.

## Now — Foundations (launch)

- [x] The [`SOUL.md`](https://soul.md/) format and schema (sections, metadata, relationship types).
- [x] Static content engine: parse, validate, generate APIs, graph, statistics, search.
- [x] Astro website: explorer, knowledge graph, dashboard, compare, per-SOUL pages.
- [x] Machine-readable API (JSON) + per-occupation Markdown/YAML exports + RSS.
- [x] CI validation and automatic GitHub Pages deployment.
- [x] A launch corpus spanning every major domain as a quality baseline.

## Next — Breadth and depth

- [ ] Grow coverage toward full enumeration of occupations across every industry.
- [ ] Expand beyond occupations into disciplines, communities, and life roles.
- [ ] Specialization trees (e.g. physician → cardiologist → electrophysiologist). _Sub-specialties
  now surfaced per SOUL; multi-level interactive trees still to come._
- [x] Country/jurisdiction variants surfaced as first-class on the page.
- [ ] A "completeness" review pass to move SOULs from `draft` → `review` → `stable`.
- [ ] Diff viewer for comparing revisions of a single SOUL on the site.

## Later — Interoperability and scale

- [x] Stable, versioned API contract and an OpenAPI/JSON-Schema description of it
  ([`/api/openapi.json`](https://soul-atlas.github.io/api/openapi.json) + served JSON Schema).
- [ ] Incremental / sharded builds to comfortably handle 10,000+ SOULs.
- [ ] Embeddings + semantic "explore similar minds" beyond explicit edges.
- [ ] Translations and multilingual SOULs.
- [ ] EPUB / PDF export of curated collections ("a reader's atlas of the trades").
- [x] Citation format so SOULs can be referenced in papers and prompts reproducibly (APA / BibTeX /
  plain text on every SOUL page and in the JSON API).

## Principles that won't change

- **Static, open, MIT.** No backend, no lock-in, no paywall.
- **Quality and breadth together.** A consistently high baseline as we scale, not a
  pile of stubs.
- **Human-first, machine-friendly.** Optimized for people to read and for systems to
  consume.
- **Community-governed.** See [GOVERNANCE.md](GOVERNANCE.md).

Have an idea? Open an issue with the `enhancement` label, or propose a change to this
file in a PR.
