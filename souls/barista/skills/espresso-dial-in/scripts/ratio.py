#!/usr/bin/env python3
"""Espresso dial-in helper — recipe targets and taste-based adjustment.

Pure stdlib, no dependencies. The barista SOUL supplies the judgment; this
just does the arithmetic and points the grind the right way.

Examples:
    ratio.py --dose 18 --ratio 2.0      # target yield + time window
    ratio.py --symptom sour             # which way to move the grind
    ratio.py --dose 18 --symptom slow
"""
import argparse

# symptom -> (likely cause, concrete fix). Change ONE variable, then re-taste.
SYMPTOMS = {
    "sour": ("under-extracted", "grind FINER (or raise yield ~2 g)"),
    "hollow": ("under-extracted", "grind FINER; confirm dose and level tamp"),
    "thin": ("under-extracted", "grind FINER; check dose"),
    "bitter": ("over-extracted", "grind COARSER (or lower yield ~2 g)"),
    "harsh": ("over-extracted", "grind COARSER"),
    "fast": ("too little resistance (gusher)", "grind FINER"),
    "slow": ("too much resistance (choker)", "grind COARSER"),
}


def main() -> None:
    p = argparse.ArgumentParser(description="Espresso dial-in helper")
    p.add_argument("--dose", type=float, help="dry dose in grams")
    p.add_argument(
        "--ratio", type=float, default=2.0, help="yield:dose ratio (default 2.0 = 1:2)"
    )
    p.add_argument("--symptom", choices=sorted(SYMPTOMS), help="taste or flow symptom")
    a = p.parse_args()

    if a.dose:
        yield_g = round(a.dose * a.ratio, 1)
        print(
            f"Target: {a.dose:g} g in -> {yield_g:g} g out "
            f"(1:{a.ratio:g}), 25-32 s (aim ~28 s)."
        )
    if a.symptom:
        cause, fix = SYMPTOMS[a.symptom]
        print(f"'{a.symptom}': likely {cause} -> {fix}. Change ONE variable, then re-taste.")
    if not a.dose and not a.symptom:
        p.print_help()


if __name__ == "__main__":
    main()
