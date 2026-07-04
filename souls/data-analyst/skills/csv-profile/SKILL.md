---
name: csv-profile
description: Profile a CSV or tabular file before analysis — row and column counts, inferred types, missing-value rates, cardinality, and basic numeric stats. Use when handed an unfamiliar dataset and you need to understand its shape, spot data-quality problems, and decide what to clean before drawing any conclusions.
license: MIT
metadata:
  soul: data-analyst
  authority: unverified
---

# CSV profile

Never analyze a dataset you haven't profiled. The [`data-analyst`](../../SOUL.md)
SOUL explains why "look at the data first" is non-negotiable; this skill is the
first pass you run on any new table.

## What profiling answers

- How big is it (rows x columns), and does that match what you expected?
- What is each column — number, date, category, or free text?
- Where are the holes (missing values) and the surprises (outliers, mixed types)?
- Which columns are keys (unique) versus categories (low cardinality)?

## Procedure

1. **Profile before anything else.** Run the helper on the raw file:
   ```
   scripts/profile.py data.csv
   scripts/profile.py data.csv --top 5        # most-common values per column
   scripts/profile.py data.csv --delimiter ";"
   ```
2. **Read the shape.** Are the row/column counts sane? Any column entirely empty?
3. **Check missingness.** A high missing rate changes what you can conclude —
   note it *before* you report a number, not after.
4. **Sanity-check types.** A "number" column read as text usually means a stray
   unit, comma, or sentinel (`N/A`, `-`). Fix the source; don't coerce blindly.
5. **Eyeball ranges.** Min/max/mean per numeric column surface impossible values
   (negative ages, future dates) fast.
6. **Only then analyze** — and carry the caveats (missingness, outliers) into
   every claim you make.

See [references/data-quality.md](references/data-quality.md) for the checks that
matter most and the traps they catch.

## Rules of thumb

- **The profile is a caveat list.** Every hole and oddity is a footnote your
  conclusion has to carry.
- **Missing is information.** Not-collected, not-applicable, and dropped are
  three different stories — and they change the answer.
- **Distrust a too-clean dataset** as much as a messy one; ask how it was made.

## When NOT to use this

For files too large to fit in memory, or for database tables, use a streaming or
SQL-based profiler — this reads the whole file into memory for simplicity.
