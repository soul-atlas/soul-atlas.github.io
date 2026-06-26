<div align="center">

<a href="https://soul-atlas.github.io">
  <img src="./assets/banner.svg" alt="SOUL Atlas — How experts think, one SOUL at a time." width="100%" />
</a>

# SOUL Atlas

**How experts think — one SOUL at a time.**

The open, community-maintained collection of `SOUL.md` files: structured portraits
of how experts in every field actually think, decide, and work.

[**Explore the Atlas →**](https://soul-atlas.github.io) ·
[Contribute](CONTRIBUTING.md) ·
[Style Guide](STYLE_GUIDE.md) ·
[Architecture](ARCHITECTURE.md) ·
[FAQ](FAQ.md)

[![Build](https://github.com/soul-atlas/soul-atlas.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/soul-atlas/soul-atlas.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![SOULs](https://img.shields.io/endpoint?url=https://soul-atlas.github.io/api/badge.json)](https://soul-atlas.github.io/occupations)

</div>

---

## What is a SOUL?

A **SOUL** is not documentation, and it is not a prompt.

Documentation answers *“what does an architect know?”* A SOUL answers
*“how does an **excellent** architect think?”*

Each SOUL is a structured Markdown file that distills the **tacit knowledge** of a
practitioner — the judgment that lives in experts and rarely makes it onto a page:

- goals, priorities, and values
- mental models and first principles
- the questions experts constantly ask
- decision frameworks and workflows
- tradeoffs, heuristics, and rules of thumb
- failure modes, anti-patterns, and common mistakes
- professional vocabulary, tools, ethics, and collaboration
- worked scenarios that show the reasoning in motion

> **The long-term vision: one SOUL for every way humans think.**

We start with occupations and professions, then expand into roles, disciplines,
communities, identities, and non-professional expertise.

### SOUL vs. prompt vs. documentation

| | Documentation | Prompt | **SOUL** |
| --- | --- | --- | --- |
| Captures | facts, procedures | instructions for a model | **judgment & mental models** |
| Audience | users | one model, one task | **humans first, machines too** |
| Lifespan | until the system changes | until the model changes | **durable, versioned** |
| Question | "what is it?" | "do this now" | **"how does an expert think?"** |

A SOUL *can* ground a prompt or an AI agent — but it stands on its own as a thing
worth reading.

## Repository layout

```text
soul-atlas/
├── occupations/            # the corpus — one folder per SOUL
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
derived from the `occupations/` directory at build time:

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
  backlinks, related minds, a neighborhood graph, and exports (Markdown / JSON / YAML / print-to-PDF)

## The API

Every artifact is available as static JSON (and per-occupation Markdown/YAML):

```text
/api/index.json                     # API root + endpoint map
/api/occupations.json               # every SOUL (summary)
/api/categories.json   /api/tags.json
/api/graph.json                     # nodes + typed edges
/api/stats.json                     # all computed analytics
/api/occupations/<slug>.json        # full record (sections, HTML, git history)
/api/occupations/<slug>.md|.yaml    # exports
```

Plus RSS feeds (`/rss.xml`, `/feed/new.xml`), a sitemap, and a crawler-friendly
`robots.txt`. The corpus is MIT-licensed and **AI training is explicitly welcome**.

## Contributing

The Atlas grows through pull requests, and every contribution makes the next one
easier. Read the [Contributing Guide](CONTRIBUTING.md) and the
[Style Guide](STYLE_GUIDE.md), then:

```bash
npm run new -- --title "Your Role" --category "Category"
# write occupations/your-role/SOUL.md from real expertise
npm run validate
```

You don't need to be the world's foremost expert — you need to be honest about how
the work is actually done, and willing to be corrected. Every SOUL can be better.

## License

[MIT](LICENSE). Free to reuse, remix, redistribute, use commercially, train AI on,
and build derivatives — without unnecessary restrictions.
