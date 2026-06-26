# SOUL Style Guide

A SOUL succeeds when a smart outsider reads it and thinks *“now I understand how these
people see the world,”* and an insider reads it and thinks *“yes — that's the job.”*

This guide is how we get there.

## The one rule

> Capture **judgment**, not description.

Anyone can list what a nurse does. A SOUL captures how an excellent nurse *decides* —
what they notice first, what they worry about, the shortcut that's usually right, the
mistake they've learned to distrust. If a sentence would appear unchanged in a job
posting or a textbook, cut it or deepen it.

## Voice and tone

- Write as if **distilled from interviews** with someone who has done the work for
  twenty years and is unusually good at explaining themselves.
- Be **concrete**. Name the tool, the standard, the number, the named law or model.
  "Measure twice, cut once" beats "carpenters value precision."
- Prefer the **specific** noun and the **active** verb. Short sentences carry weight.
- It's fine to be opinionated. Experts are. Hedge only where real experts hedge.
- Second person ("you") or impersonal ("the carpenter") both work — be consistent
  within a SOUL.

## Density

Aim for **1,500–2,200 words** of signal. Every line should teach something a novice
wouldn't already know. If a section feels thin, you're probably describing instead of
explaining.

## Section guidance

| Section | What earns its place |
| --- | --- |
| **Purpose** | Why this way of thinking exists at all; what the world loses without it. |
| **Core Mission** | One sentence the practitioner would defend under pressure. |
| **Mental Models** | *Name* each model, then show how it's used to predict or decide. This is the heart of a SOUL. |
| **First Principles** | The irreducible truths the rest is reasoned up from. |
| **Questions Experts Constantly Ask** | The questions running in the background of an expert's mind. |
| **Decision Frameworks** | Repeatable structures for the hard, recurring calls. |
| **Common Tradeoffs** | The goods that can't all be maximized — and how experts choose. |
| **Rules of Thumb** | Compressed heuristics. Punchy. Usually-right. |
| **Failure Modes / Anti-patterns** | How the work goes wrong; the tempting-but-bad approaches. Be specific about *why* they seduce. |
| **Vocabulary** | Terms an insider uses precisely and an outsider misuses. Bold term + one-line gloss. |
| **Scenarios** | 2–3 situations worked end to end, showing the reasoning — not just the outcome. The proof the SOUL is real. |

## Banned phrases (AI tells)

These mark text as machine-generated filler. Do not use them:

> delve · tapestry · navigate the complexities · "it's not just X, it's Y" ·
> in conclusion · ever-evolving · ever-changing · testament to · realm · unlock ·
> elevate · game-changer · in today's fast-paced world · at the end of the day ·
> when it comes to · plays a crucial role

Also avoid empty intensifiers (*very, really, extremely*), throat-clearing
("It is important to note that…"), and the rule-of-three reflex where two items would do.

## Formatting

- One `# H1` (the title), then `## H2` sections **in the canonical order**
  (see [`schema/sections.json`](schema/sections.json)).
- Use bullet lists for principles, questions, rules, and vocabulary; prose for
  Purpose, Workflow, Collaboration, Ethics, and Scenarios.
- Bold the lead-in of each bullet when it names a concept.
- Code spans for literal terms/commands; Mermaid fenced blocks render as diagrams.
- Keep links meaningful; cite real bodies of knowledge in **References**.

## Accuracy and humility

- Don't invent statistics. If you cite a number, it should be real and roughly right.
- Mark genuine controversy as controversial rather than picking a side silently.
- Note important **country/jurisdiction variants** in `metadata.yaml`.
- A SOUL is a living document. Write the best version you can; trust the community to
  refine it.

## A quick self-test before you open a PR

1. Could a thoughtful beginner make a better decision after reading this? 
2. Would a 20-year veteran nod, or wince?
3. Is there a single sentence a textbook wouldn't already contain? (There should be many.)
4. Did you cut every banned phrase and every line of filler?

If yes — ship it.
