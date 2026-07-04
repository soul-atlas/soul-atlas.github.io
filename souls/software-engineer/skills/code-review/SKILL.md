---
name: code-review
description: Review a code change (a diff, pull request, or commit) for correctness, risk, and clarity before it merges. Use when asked to review a diff or PR, when deciding whether a change is safe to ship, or when you need to turn a raw diff into concrete, prioritized review feedback.
license: MIT
metadata:
  soul: software-engineer
  authority: unverified
---

# Code review

Review the *change*, not the whole system — but read enough of the surrounding
code to know whether the change is safe. The [`software-engineer`](../../SOUL.md)
SOUL explains the judgment; this skill is the pass/fail loop you run on a diff.

## What a review is for

Catch what tests and CI can't: unclear intent, hidden coupling, risky edge
cases, and changes that will be expensive to live with. Approving a change means
"I'd be comfortable owning this."

## Procedure

1. **Understand the intent.** Read the PR description or commit message. If you
   can't say what the change does and why in one sentence, ask before reviewing.
2. **Read the diff twice.** First for shape (what moved, what's new); then for
   correctness (does each hunk do what it claims?).
3. **Run the risk pass** on each changed hunk — correctness, boundaries, tests,
   clarity, blast radius (see the reference for the full rubric).
4. **Separate blocking from optional.** Tag each comment *must-fix*,
   *should-fix*, or *nit* so the author knows what gates the merge.
5. **Decide:** approve, approve-with-nits, or request-changes — with reasons.

Use the helper to scan a unified diff for common risk signals and seed the
checklist:

```
git diff main... | scripts/review.py
scripts/review.py --file changes.diff
```

See [references/checklist.md](references/checklist.md) for the full review rubric.

## Rules of thumb

- **Review the code, not the coder.** Comment on the change and the risk.
- **A blocking comment needs a reason.** "I'd do it differently" is a nit.
- **A big diff is a review smell.** Ask to split it before sinking hours in.
- **If you can't tell what a hunk does, that's a finding** — not your failure.

## When NOT to use this

This is not a substitute for tests, static analysis, or actually running the
code. It structures human judgment on top of those — it does not replace them.
