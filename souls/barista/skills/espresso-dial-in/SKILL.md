---
name: espresso-dial-in
description: Dial in an espresso shot by steering the dose–yield–time triangle from taste. Use when an espresso tastes sour, bitter, or hollow, when switching beans or roast, or when a shot runs too fast or too slow and you need a concrete grind/dose/yield adjustment.
license: MIT
metadata:
  soul: barista
  authority: unverified
---

# Espresso dial-in

Turn a bad shot into a good one by reading **taste and time**, then changing
**one variable at a time**. This is the barista's core feedback loop. The
[`barista`](../../SOUL.md) SOUL explains the judgment behind it; this skill is the
executable procedure a model (or a person) can follow step by step.

## The one model: the dose–yield–time triangle

- **Dose** — dry grounds in the basket (g).
- **Yield** — liquid espresso out (g).
- **Time** — seconds from pump-on to cut.
- **Ratio** = yield ÷ dose (18 g → 36 g is a 1:2).

Grind size is the master lever: **finer** = more resistance = slower flow = more
extraction; **coarser** = faster = less. Taste is the target; the numbers are
only a starting point.

## Procedure

1. **Set a recipe target.** Modern espresso ≈ **1:2 in 25–32 s**. Start at
   18 g in → 36 g out, aim ~28 s.
2. **Pull, weigh, time, taste.** Record all three; taste is decisive.
3. **Diagnose from taste first, time second:**
   - **Sour / sharp / hollow** → under-extracted → grind **finer**.
   - **Bitter / harsh / drying** → over-extracted → grind **coarser**.
   - **Gusher (<22 s) & watery** → grind **finer**.
   - **Choker (>35 s) & harsh** → grind **coarser**.
4. **Change one variable**, re-pull, re-taste. Converge.
5. **Lock the recipe** when it tastes sweet and balanced; write down dose/yield/time.

Use the helper to compute targets and get the adjustment direction from a symptom:

```
scripts/ratio.py --dose 18 --ratio 2.0
scripts/ratio.py --symptom sour
```

See [references/troubleshooting.md](references/troubleshooting.md) for the full
symptom → cause → fix table (channeling, gushing, choking, and more).

## Rules of thumb

- **Taste beats numbers.** The recipe is where you start, not where you stop.
- **One variable at a time**, or you learn nothing from the shot.
- **Fresh beans move for ~2 weeks** off roast as they degas — re-dial over time.
- **Distribute and tamp level.** Channeling imitates an extraction fault; fix
  prep before chasing grind.

## When NOT to use this

Brewed / filter / pour-over coffee uses very different ratios (~1:15–1:17) and a
different mental model. This skill is espresso-specific.
