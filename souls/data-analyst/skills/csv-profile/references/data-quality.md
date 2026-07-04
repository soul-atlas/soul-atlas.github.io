# Data-quality checks that matter

A profile is only useful if you act on what it shows. The traps below cause most
wrong conclusions drawn from tabular data.

## Missingness

- **Rate:** a column that is 40% empty cannot support a confident average.
- **Mechanism:** missing-at-random versus missing-because (e.g. income blank for
  the unemployed) — the second biases any analysis that ignores it.
- **Sentinels:** `-1`, `999`, `0`, or `"N/A"` used to mean "missing" masquerade
  as data. The profiler treats common tokens as missing; watch for
  domain-specific ones it can't know about.

## Types & parsing

- A numeric column read as **text** usually hides a stray unit, thousands
  separator, currency symbol, or sentinel. Fix the source; don't blindly coerce.
- **Dates** in mixed formats (`03/04` — March or April?) need an explicit format.
- **Booleans** get encoded many ways (`Y/N`, `1/0`, `true/false`) — normalize once.

## Distribution & outliers

- Min/max surface impossible values fast: negative ages, future timestamps,
  percentages above 100.
- A mean far from the median means skew or outliers — don't report the mean alone.

## Cardinality

- **Unique count == rows** → likely an ID or key, not a feature.
- **Very low cardinality** → a category; consider grouping or one-hot encoding.
- **Near-unique free text** → needs parsing or NLP, not aggregation.

## Provenance

- How, when, and by whom was the data collected — and for what purpose?
- A dataset that is *too* clean was probably processed; ask what was dropped.
