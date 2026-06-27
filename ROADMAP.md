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

## Next — Verification and depth (the priority)

The launch corpus is AI-drafted scaffolding, marked honestly as such. It becomes
trustworthy only when people who do the work verify it. Depth and verification now
matter more than adding nodes.

- [x] Honest provenance: AI-drafted SOULs are `status: draft` / `provenance:
  ai-generated`, badged "unverified" until a human reviews them.
- [x] No-account suggestion + verification flow: anyone can correct or vouch for a
  SOUL from the website, landing as a pull request.
- [x] `npm run audit` — a specificity signal that surfaces the thinnest entries to
  review first.
- [ ] Drive the practitioner-verified share up: recruit reviewers, prioritise the
  thinnest/abstract entries the audit flags.
- [ ] A review pass that moves SOULs from `draft` → `review` → `stable` as
  `reviewers` accumulate.
- [ ] Specialization trees (e.g. physician → cardiologist → electrophysiologist).
  _Sub-specialties surfaced per SOUL; multi-level interactive trees still to come._
- [x] Country/jurisdiction variants surfaced as first-class on the page.
- [ ] Diff viewer for comparing revisions of a single SOUL on the site.
- [ ] Grow coverage toward full enumeration — but depth-per-entry leads breadth.

> **On the knowledge graph:** the schema and graph earn their keep as the corpus
> grows and people traverse it. Until then, the prose is the product. We invest in
> making individual SOULs genuinely good before adding graph features.

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
