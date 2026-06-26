# Schema Reference

A SOUL is two files in `occupations/<slug>/`:

- **[`SOUL.md`](https://soul.md/)** — the portrait: an `# H1` title followed by `## H2` sections.
- **`metadata.yaml`** — structured facts, validated against
  [`schema/metadata.schema.json`](../schema/metadata.schema.json).

The fully assembled, computed record served at `/api/occupations/<slug>.json` is
described by [`schema/soul.schema.json`](../schema/soul.schema.json).

## [`SOUL.md`](https://soul.md/) sections

Defined canonically in [`schema/sections.json`](../schema/sections.json). Required
sections must be present **and** meet a minimum word count to count toward a SOUL's
*completeness* score (shown on every page and in the dashboard).

| # | Section | Required | Min words |
| --- | --- | --- | --- |
| 1 | Purpose | ✓ | 25 |
| 2 | Core Mission | ✓ | 15 |
| 3 | Primary Responsibilities | ✓ | 30 |
| 4 | Guiding Principles | ✓ | 40 |
| 5 | Mental Models | ✓ | 50 |
| 6 | First Principles | — | 25 |
| 7 | Questions Experts Constantly Ask | ✓ | 20 |
| 8 | Decision Frameworks | ✓ | 40 |
| 9 | Workflow | ✓ | 40 |
| 10 | Common Tradeoffs | ✓ | 40 |
| 11 | Rules of Thumb | ✓ | 30 |
| 12 | Failure Modes | ✓ | 30 |
| 13 | Anti-patterns | ✓ | 30 |
| 14 | Vocabulary | ✓ | 25 |
| 15 | Tools | ✓ | 20 |
| 16 | Collaboration | ✓ | 25 |
| 17 | Ethics | ✓ | 30 |
| 18 | Scenarios | ✓ | 60 |
| 19 | Related Occupations | ✓ | 15 |
| 20 | References | — | 0 |

Headings must match exactly and appear in this order. Non-canonical headings are
allowed but flagged as warnings by the validator.

## `metadata.yaml` fields

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | string | ✓ | Display name, 2–80 chars. |
| `slug` | string | ✓ | Must equal the directory name; `^[a-z0-9]+(?:-[a-z0-9]+)*$`. |
| `aliases` | string[] | — | Synonyms used in search. |
| `category` | enum | ✓ | One of the 21 top-level domains (see below). |
| `tags` | string[] | — | Lowercase-hyphenated; faceted browsing. |
| `difficulty` | enum | — | `foundational` \| `intermediate` \| `advanced` \| `expert`. |
| `summary` | string | ✓ | 20–320 chars; how the mind works. Shown on cards/search. |
| `contributors` | string[] | — | Names/handles. Merged with git authors on the page. |
| `last_reviewed` | date \| null | — | ISO date of last accuracy review. |
| `created` | date | ✓ | ISO date. (Git history overrides on the page when present.) |
| `updated` | date | ✓ | ISO date. |
| `related` | object[] | — | Typed edges: `{ slug, type, note? }`. |
| `specializations` | string[] | — | Narrower variants (free text). |
| `country_variants` | object[] | — | `{ region, note }`. |
| `sources` | object[] | — | `{ title, url?, kind? }`. |
| `status` | enum | ✓ | `stub` \| `draft` \| `review` \| `stable`. |

### Categories

`Technology`, `Healthcare`, `Skilled Trades`, `Engineering`, `Science`, `Education`,
`Business`, `Government`, `Military`, `Law`, `Transportation`, `Agriculture`,
`Hospitality`, `Creative`, `Sports`, `Entertainment`, `Finance`, `Public Service`,
`Historical`, `Emerging`, `Life Roles`.

### Relationship types

| Type | Meaning | Rendered edge |
| --- | --- | --- |
| `related` | Generally connected. | neutral |
| `specialization` | A narrower variant of this role. | purple |
| `prerequisite` | Typically mastered before this role. | amber |
| `adjacent` | Sits next to this role; boundary overlap. | cyan |
| `collaboration` | Works directly with this role. | green |
| `progression` | A common career step. | pink |

Edges are **directed** in metadata but rendered undirected in the graph;
`backlinks` (who points at me) are computed automatically.

## Example

```yaml
title: "Software Engineer"
slug: "software-engineer"
aliases: ["Software Developer", "Programmer"]
category: "Technology"
tags: [software, programming, systems]
difficulty: advanced
summary: "Turns ambiguous intent into systems that behave correctly under conditions nobody anticipated."
contributors: ["soul-atlas"]
last_reviewed: "2026-06-26"
created: "2026-06-26"
updated: "2026-06-26"
related:
  - { slug: "site-reliability-engineer", type: "adjacent", note: "optimizes for survival over features" }
  - { slug: "engineering-manager", type: "progression" }
status: stable
```

## Validation

```bash
npm run validate
```

Errors (schema violations, missing required sections, slug mismatch, self-reference)
fail CI. Warnings (thin sections, dangling references, non-canonical headings) are
advisory.
