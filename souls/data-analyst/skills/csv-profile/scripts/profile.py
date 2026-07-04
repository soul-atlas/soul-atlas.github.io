#!/usr/bin/env python3
"""Profile a CSV file — shape, types, missingness, cardinality, numeric stats.

Pure stdlib (csv), no dependencies. The data-analyst SOUL supplies the judgment
about what the profile *means*; this just measures the table so you look before
you leap.

Examples:
    profile.py data.csv
    profile.py data.csv --top 5
    profile.py data.csv --delimiter ";"
"""
import argparse
import csv
import sys
from collections import Counter

# Tokens treated as "missing" regardless of column (case-insensitive).
MISSING = {"", "na", "n/a", "nan", "null", "none", "-", "?"}


def is_int(s: str) -> bool:
    try:
        int(s.replace(",", ""))
        return True
    except ValueError:
        return False


def is_float(s: str) -> bool:
    try:
        float(s.replace(",", ""))
        return True
    except ValueError:
        return False


def infer(values: list) -> str:
    """Infer a column type from its non-missing values."""
    if not values:
        return "empty"
    ints = sum(1 for v in values if is_int(v))
    floats = sum(1 for v in values if is_float(v))
    n = len(values)
    if ints == n:
        return "int"
    if floats == n:
        return "float"
    if {v.lower() for v in values} <= {"true", "false", "yes", "no", "0", "1"}:
        return "bool"
    return "text"


def main() -> None:
    p = argparse.ArgumentParser(description="Profile a CSV file")
    p.add_argument("path", help="CSV file to profile")
    p.add_argument("--delimiter", default=",", help="field delimiter (default ,)")
    p.add_argument("--top", type=int, default=0, help="show N most-common values per column")
    a = p.parse_args()

    with open(a.path, newline="", encoding="utf-8", errors="replace") as f:
        reader = csv.reader(f, delimiter=a.delimiter)
        try:
            header = next(reader)
        except StopIteration:
            print("Empty file.", file=sys.stderr)
            sys.exit(2)
        cols = [[] for _ in header]
        missing = [0] * len(header)
        counters = [Counter() for _ in header]
        rows = 0
        for row in reader:
            rows += 1
            for i in range(len(header)):
                val = row[i].strip() if i < len(row) else ""
                if val.lower() in MISSING:
                    missing[i] += 1
                else:
                    cols[i].append(val)
                    counters[i][val] += 1

    print(f"# {a.path}")
    print(f"{rows} rows x {len(header)} columns\n")
    print(f"{'column':<24} {'type':<7} {'missing':>10} {'unique':>8}  stats")
    print("-" * 74)
    for i, name in enumerate(header):
        vals = cols[i]
        typ = infer(vals)
        miss_pct = (missing[i] / rows * 100) if rows else 0
        stats = ""
        if typ in ("int", "float") and vals:
            nums = [float(v.replace(",", "")) for v in vals]
            stats = f"min={min(nums):g} max={max(nums):g} mean={sum(nums) / len(nums):.3g}"
        elif typ == "text" and vals:
            stats = f"maxlen={max(len(v) for v in vals)}"
        miss = f"{missing[i]} ({miss_pct:.0f}%)"
        print(f"{name[:24]:<24} {typ:<7} {miss:>10} {len(counters[i]):>8}  {stats}")

    if a.top:
        print()
        for i, name in enumerate(header):
            common = counters[i].most_common(a.top)
            if common:
                print(f"{name}: " + ", ".join(f"{v!r}={c}" for v, c in common))


if __name__ == "__main__":
    main()
