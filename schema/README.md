# SOUL Schema

This directory is the **contract** for every SOUL in the Atlas. Tooling, the
website, and the public API all derive from these files — change the format
here, in one place, and everything downstream follows.

| File | Purpose |
| --- | --- |
| [`sections.json`](./sections.json) | The canonical, ordered list of [SOUL.md](https://soul.md/) sections, which are required, their minimum substance, and the authoring prompt for each. |
| [`metadata.schema.json`](./metadata.schema.json) | JSON Schema (draft-07) for `metadata.yaml`. Validated on every build. |
| [`soul.schema.json`](./soul.schema.json) | JSON Schema for the fully assembled record emitted at `/api/souls/{slug}.json`. |
| [`SOUL.template.md`](./SOUL.template.md) | The starting point for a new SOUL body. `npm run new` copies it. |
| [`metadata.template.yaml`](./metadata.template.yaml) | The starting point for a new `metadata.yaml`. |

## A SOUL is two files

```text
souls/<slug>/
├── SOUL.md         # the portrait of how this mind works (H1 title, H2 sections)
└── metadata.yaml   # structured facts: category, tags, relationships, status…
```

## Sections

Required sections must be present **and** meet a minimum word count to count
toward a SOUL's *completeness* score. The current set:

<!-- Keep this list in sync with sections.json; the validator is the source of truth. -->

Purpose · Core Mission · Primary Responsibilities · Guiding Principles ·
Mental Models · First Principles *(optional)* · Questions Experts Constantly Ask ·
Decision Frameworks · Workflow · Common Tradeoffs · Rules of Thumb · Failure Modes ·
Anti-patterns · Vocabulary · Tools · Collaboration · Ethics · Scenarios ·
Related Occupations · References *(optional)*

## Relationship types

`metadata.related[]` entries are typed edges in the knowledge graph:

| Type | Meaning |
| --- | --- |
| `related` | Generally connected ways of thinking. |
| `specialization` | A narrower variant of this role. |
| `prerequisite` | Knowledge/role typically mastered before this one. |
| `adjacent` | Sits next to this role; frequent boundary overlap. |
| `collaboration` | Works directly with this role to get things done. |
| `progression` | A common career step from/to this role. |

## Validating

```bash
npm run validate   # schema + section + relationship checks; non-zero on error
```

See [`../STYLE_GUIDE.md`](../STYLE_GUIDE.md) for *how* to write a great SOUL,
and [`../docs/SCHEMA.md`](../docs/SCHEMA.md) for the full field reference.
