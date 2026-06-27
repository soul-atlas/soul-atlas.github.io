<div align="center">

<!-- Animated hero (assets/banner.gif). The static SVG version is kept at
     assets/banner.svg as a fallback. Both are reproducible: `npm run banner`. -->
<a href="https://soul-atlas.github.io">
  <img src="./assets/banner.gif" alt="SOUL Atlas — a galaxy of connected minds" width="100%" />
</a>

# SOUL Atlas

**A map of how the world thinks.**

An open, community-built collection of [`SOUL.md`](https://soul.md/) files — each one a portrait of how
someone who's mastered a field actually thinks, decides, and works.

[**Explore the Atlas →**](https://soul-atlas.github.io) ·
[Contribute](CONTRIBUTING.md) ·
[Style Guide](STYLE_GUIDE.md) ·
[Architecture](ARCHITECTURE.md) ·
[FAQ](FAQ.md)

[![Build](https://github.com/soul-atlas/soul-atlas.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/soul-atlas/soul-atlas.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![SOULs](https://img.shields.io/endpoint?url=https://soul-atlas.github.io/api/badge.json)](https://soul-atlas.github.io/souls)

</div>

---

## See it in action

<div align="center">

<a href="https://soul-atlas.github.io">
  <img src="./assets/tour.gif" alt="A guided tour of SOUL Atlas — search, explore, the knowledge graph, dashboard, and side-by-side comparison" width="100%" />
</a>

<em>Search with ⌘K · browse 300+ SOULs · navigate the knowledge graph · compare two minds side by side.</em>

</div>

---

## What is a SOUL?

A SOUL isn't documentation, and it isn't a prompt.

Docs tell you *what an architect knows*. A SOUL tries to capture *how a great architect
**thinks*** — the judgment that usually only shows up after years of doing the work.

It's a structured Markdown file that pins down the things experts carry in their heads
but rarely write down:

- goals, priorities, and values
- mental models and first principles
- the questions experts constantly ask
- decision frameworks and workflows
- tradeoffs, heuristics, and rules of thumb
- failure modes, anti-patterns, and common mistakes
- professional vocabulary, tools, ethics, and collaboration
- worked scenarios that show the reasoning in motion

> **The long-term vision: one SOUL for every way humans think.**

We're starting with jobs and professions, and branching out from there into roles,
disciplines, communities, identities, and the kinds of expertise that never came with
a job title.

### SOUL vs. prompt vs. documentation

| | Documentation | Prompt | **SOUL** |
| --- | --- | --- | --- |
| Captures | facts, procedures | instructions for a model | **judgment & mental models** |
| Audience | users | one model, one task | **humans first, machines too** |
| Lifespan | until the system changes | until the model changes | **durable, versioned** |
| Question | "what is it?" | "do this now" | **"how does an expert think?"** |

A SOUL can absolutely ground a prompt or an AI agent — but it's also just worth reading
on its own.

## Repository layout

```text
soul-atlas/
├── souls/                  # the corpus — one folder per SOUL
│   └── software-engineer/
│       ├── SOUL.md         # the portrait (H1 title + H2 sections)
│       └── metadata.yaml   # category, tags, relationships, status…
├── schema/                 # the format contract: JSON Schema, sections, templates
├── scripts/                # the content engine (parse → validate → generate)
├── src/                    # the Astro website (pages, components, lib)
├── public/                 # static assets; /public/api is generated at build
├── docs/                   # schema reference, developer guide
├── .github/                # CI, deploy, issue/PR templates
└── README.md, CONTRIBUTING.md, STYLE_GUIDE.md, ARCHITECTURE.md, …
```

## Quick start

```bash
npm install      # install dependencies (Node ≥ 18.17)
npm run dev      # generate data + start the dev server at http://localhost:4321
npm run build    # generate + build the static site + search index into dist/
npm run preview  # serve the production build locally
```

Useful commands:

```bash
npm run new -- --title "Glassblower" --category "Skilled Trades" --summary "…"
npm run validate   # schema + section + relationship checks (CI gate)
npm run stats      # quick corpus statistics
npm run check      # validate + lint + format check
```

## How it works

SOUL Atlas is **100% static** — no backend, no database, no server. Everything is
derived from the `souls/` directory at build time:

1. **`npm run generate`** parses every SOUL, validates structure, renders Markdown,
   reads git history, computes statistics and the knowledge graph, and emits:
   - `src/generated/*` — consumed by the website
   - `public/api/*` — the static, machine-readable JSON API
2. **`astro build`** renders the website to static HTML.
3. **`pagefind`** indexes the built pages for instant full-text search.

See [ARCHITECTURE.md](ARCHITECTURE.md) for the full data flow.

## The website

- **Explore** — filter and browse the whole corpus
- **Knowledge Graph** — an interactive D3 force graph of every SOUL and how they relate
- **Dashboard** — live statistics, leaderboards, and a repository activity heatmap
- **Compare** — two minds side by side, with synchronized scroll and shortest-path
- **Command palette** (`⌘K` / `/`) — instant fuzzy navigation
- Per-SOUL pages with table of contents, reading time, git history, contributors,
  backlinks, related minds, a neighborhood graph, sub-specialties and regional variants,
  a one-click **Download SOUL.md** button, ready-made citations (APA / BibTeX / plain text),
  and exports (Markdown / JSON / YAML / print-to-PDF)

## The API

Every artifact is available as static JSON (and per-occupation Markdown/YAML):

```text
/api/index.json                     # API root + endpoint map
/api/openapi.json                   # OpenAPI 3.1 description of this API
/api/schema/*.schema.json           # the JSON Schemas the corpus validates against
/api/souls.json               # every SOUL (summary)
/api/categories.json   /api/tags.json
/api/graph.json                     # nodes + typed edges
/api/stats.json                     # all computed analytics
/api/souls/<slug>.json        # full record (sections, HTML, git history, citation)
/api/souls/<slug>.md|.yaml    # exports
```

For LLMs, there's an [`/llms.txt`](https://soul-atlas.github.io/llms.txt) index and a
full-corpus [`/llms-full.txt`](https://soul-atlas.github.io/llms-full.txt) (see
[llmstxt.org](https://llmstxt.org/)). Plus RSS feeds (`/rss.xml`, `/feed/new.xml`), a
sitemap, and a crawler-friendly `robots.txt`. The corpus is released under the MIT
License, and **AI training is explicitly welcome**.

## Honest about provenance

The launch corpus was **AI-drafted** to create a consistent baseline across every
domain — useful scaffolding, but not yet a vetted corpus. We don't hide that: those
SOULs are marked `provenance: ai-generated`, `status: draft`, and carry an
**"AI-drafted · unverified"** badge until a person who does the work reviews them.
When a practitioner verifies one, they're credited and the badge flips to
**"Practitioner-reviewed."** The goal is entries people stand behind, not a pile of
drafts. `npm run audit` ranks the corpus by a specificity signal so the thinnest
entries get attention first.

## Contributing

The Atlas grows through pull requests, and every contribution makes the next one
easier — but **you don't need a GitHub account**. Every SOUL page has a *"Suggest a
change"* button and an *"I do this job — verify it"* link
([`/suggest`](https://soul-atlas.github.io/suggest)) that turn your input into a
pull request automatically, anonymously if you like. See
[docs/SUGGESTIONS.md](docs/SUGGESTIONS.md).

To contribute directly, read the [Contributing Guide](CONTRIBUTING.md) and the
[Style Guide](STYLE_GUIDE.md), then:

```bash
npm run new -- --title "Your Role" --category "Category"
# write souls/your-role/SOUL.md from real expertise
npm run validate        # schema, sections, relationships
npm run audit           # see which existing SOULs read thinnest
```

You don't need to be the world's foremost expert — you need to be honest about how
the work is actually done, and willing to be corrected. Every SOUL can be better.

## License

[MIT](LICENSE). Free to reuse, remix, redistribute, use commercially, train AI on,
and build derivatives — without unnecessary restrictions.
