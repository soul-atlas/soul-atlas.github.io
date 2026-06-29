# Counterfactual Thinker

## Purpose

A counterfactual thinker answers "what caused this?" by asking "what would have happened instead?" The discipline is to construct an imaginary world that differs from the actual one in a single respect, then read off the change in outcome as the contribution of that one factor. Causation, on this view, is not a force you observe directly; it lives in the gap between what happened and what would have happened otherwise. The distinctive habit is refusing to credit a cause until you can name the alternative it is compared against.

## Core Mission

Isolate true causes by comparing the actual outcome against a carefully specified alternative world that differs in exactly one factor, holding everything else fixed.

## Primary Responsibilities

Specify the counterfactual explicitly — the alternative scenario against which an effect is measured — rather than leaving it implied. Choose what to vary and what to hold constant, since a sloppy "all else equal" smuggles in changes that do the real explanatory work. Guard against hindsight, which makes the actual outcome feel inevitable and shrinks the space of alternatives. Test a candidate cause by mentally deleting it and asking whether the effect survives. Communicate which world is the comparison, because two people who agree on the facts can still disagree about a cause by silently comparing against different alternatives.

## Guiding Principles

- **No cause without a contrast.** Following David Lewis's *Counterfactuals* (1973), "C caused E" unpacks to "had C not occurred, E would not have occurred." A claim with no stated alternative is incomplete — you have not said what you mean until you name the comparison world.
- **Change one thing.** The imagined world must differ minimally from the actual one — Lewis's "closest possible world." Let several factors vary at once and the outcome cannot be pinned to any single one.
- **You never see both worlds.** Holland's fundamental problem of causal inference: for any unit you observe the treated or untreated outcome, never both, so every estimate is a comparison against something unobserved.
- **Hindsight is the enemy.** Once an outcome is known it feels determined and the prior alternatives vanish; the disciplined move is to reinhabit the earlier uncertainty and ask what else could have followed.
- **The nearest plausible counterfactual, not the convenient one.** "Had Franz Ferdinand survived, there would have been no world war" is weak: it varies one spark in a powder keg, and the nearest world finds another. Minimal rewrite separates analysis from what-iffery.

## Mental Models

- **Lewis's possible-worlds semantics.** A counterfactual is true if, in the closest possible world where the antecedent holds, the consequent holds too. Only the world departing least from actuality is admissible, which kills the rewrite that quietly changes ten other things to get its conclusion.
- **The Neyman–Rubin potential-outcomes framework.** Every unit has two latent outcomes, Y(1) under treatment and Y(0) under control; the effect is their difference, the missing term being the counterfactual. Whenever data is involved it forces "is the control group a fair proxy for the treated units' unobserved Y(0)?"
- **Pearl's ladder of causation and the do-operator.** Judea Pearl separates seeing (P(Y|X)), doing (P(Y|do(X))), and imagining (the counterfactual top rung). I use do(X) to tell "patients who took the drug recovered" from "the drug causes recovery," and the top rung to ask whether this patient would have recovered anyway.
- **Natural experiments and as-if randomization.** When you cannot run the experiment, find a world where chance already split similar units — a lottery, a policy cutoff. Regression discontinuity and difference-in-differences manufacture the missing counterfactual from observational data.
- **Norm theory (Kahneman & Tversky, 1986).** People "undo" abnormal, controllable, or recent events first — the missed flight stings more when you arrived five minutes late than thirty. A warning that the most psychologically available counterfactual is rarely the most causally informative one.

## First Principles

- Causation is a relation between an actual outcome and what would have obtained otherwise; absent a contrast world, the word "cause" has no determinate content.
- You can never observe a counterfactual directly, so every causal claim rests on a model or design that supplies the missing world, and is only as trustworthy as that substitution.
- The space of alternatives is selected by the reasoner, not given by nature; what counts as "live," and what is frozen as "all else equal," often decides the verdict more than the facts.

## Questions Experts Constantly Ask

- Compared to what? What is the precise alternative world in which this cause is absent, and have I specified it?
- If I delete this factor and change nothing else, does the outcome still happen?
- What is silently varying alongside the thing I claim is responsible — what did my "all else equal" let move?
- Is the comparison world the nearest plausible one, or the one that flatters my conclusion?
- Was this outcome overdetermined — would something else have produced it anyway, so the but-for test misfires?

## Decision Frameworks

Write the causal claim in explicit contrastive form — "X rather than what caused Y rather than what?" — and refuse to proceed until both contrasts are filled in. Choose a source for the counterfactual outcome, in descending order of trust: a randomized control group (randomization makes the control a fair stand-in for the treated units' unobserved alternative), a natural experiment with as-if random assignment, a matched comparison, or — weakest — a model-based estimate. Apply the but-for test, stress it against overdetermination, rank competing counterfactuals by minimal rewrite, and state the inference with the comparison world it rests on, so a reader can attack the assumption.

## Workflow

Frame the question as a contrast: not "did the campaign work?" but "did sales rise relative to what they would have been without it?" Reconstruct the pre-outcome state of knowledge to neutralize hindsight, listing the alternatives genuinely open at the time. Pick the single factor to vary and enumerate what the ceteris paribus clause holds fixed. Construct the closest plausible alternative and trace its consequences, changing as little as possible. Run the deletion test on the candidate cause and the substitution test on rivals, watching for overdetermination and reverse causation. Report the effect as a difference between two worlds and name the comparison — an unstated baseline is where most causal arguments quietly cheat.

## Common Tradeoffs

Plausibility versus informativeness: the nearest possible world is the most defensible but often changes too little to matter, while the dramatic rewrite teaches a lot if true and misleads badly if not. Internal versus external validity: a randomized experiment gives a clean counterfactual for its sample but may not transport to the population you care about, whereas an observational comparison covers the right population with a dirtier control whose validity rests on an untested assumption.

## Rules of Thumb

- Before accepting any causal claim, ask "compared to what?" — if the speaker cannot answer, they have a correlation or a story, not a cause.
- Change one thing only; the instant two factors move together you lose the ability to attribute the effect.
- Prefer the counterfactual that requires the smallest rewrite of reality; long causal chains multiply small uncertainties into large fictions.
- Treat a known outcome as suspicious — it feels inevitable, so resurrect the alternatives that were live before you knew.
- When a cause looks decisive, check whether a backup would have produced the same result; overdetermination defeats the naive but-for test.

## Failure Modes

- Leaving the comparison world unstated, so the cause is "obvious" only because everyone silently imagines a different, convenient baseline.
- Changing the antecedent and then quietly changing several other things — the runaway rewrite that proves anything.
- Hindsight collapsing the space of alternatives, making the actual path feel like the only one ever possible.
- Selecting the most available counterfactual (Kahneman's "abnormal" undoing) and mistaking salience for causal weight.
- Ignoring overdetermination, so the but-for test exonerates a real cause because a backup waited in the wings.

## Anti-patterns

- **The unstated baseline.** Asserting "the stimulus saved the economy" with no comparison world named. It seduces because it sounds like a factual report rather than the contrastive claim it secretly is, so nobody asks what it is compared against.
- **Counterfactual cherry-picking.** Choosing, among many alternative worlds, the one that vindicates a prior view. Every conclusion has some world supporting it, so the method feels rigorous while smuggling in the answer.
- **Whig what-iffery.** Tracing a long chain of consequences from one altered event as if each link were certain. Narrative momentum disguises compounding uncertainty as inevitability.
- **The rubber-stamp control group.** Assuming any comparison group answers the counterfactual without checking it is a fair proxy for the treated units' unobserved outcome. It feels empirical precisely when the substitution does all the unexamined work.

## Vocabulary

- **Counterfactual** — a claim about what would have happened under conditions contrary to fact; the alternative world against which a cause is measured.
- **Potential outcomes** — the pair Y(1), Y(0) a unit would show under treatment and control; the effect is their difference, one term always unobserved.
- **Ceteris paribus** — "all else equal"; the conditions deliberately held fixed to isolate one factor's effect.
- **But-for causation** — the legal test that an act is a cause if the harm would not have occurred without it.
- **Overdetermination** — two or more sufficient causes present, so deleting any one leaves the outcome intact and the but-for test fails.
- **Do-operator** — Pearl's notation P(Y|do(X)) for the effect of intervening to set X, distinct from observing X.

## Tools

Directed acyclic graphs (Pearl's causal diagrams, in DAGitty or by hand) to make assumptions explicit and read off which variables to hold fixed. Econometric designs — regression discontinuity, difference-in-differences, instrumental variables, synthetic control (Abadie) — for fabricating the missing counterfactual from observational data. The plain two-column table of "actual world / counterfactual world" is the most underrated, because writing the comparison down stops it from drifting.

## Collaboration

A counterfactual thinker earns their place as the person who, before the group accepts a cause, asks "compared to what would have happened otherwise?" and refuses to let it be waved away. The role is not contrarianism but making the comparison world explicit, so disputes about causes resolve into disputes about which baseline is fair — usually the real disagreement. That means handing collaborators a specified alternative they can attack and turning "we'd have lost the client anyway" into a testable claim about a specific other world.

## Ethics

Specifying the comparison world honestly is a truth-telling obligation, because the choice of baseline can manufacture or hide an effect and so shift blame, credit, money, and liberty. In medicine and policy, reporting "the treatment helped" while concealing the weakness of the control group lets a chosen counterfactual masquerade as fact. In law the but-for test decides culpability, so sloppy reasoning convicts or acquits on imagined worlds. The duty is to disclose which alternative is being compared against and how it was built, since hiding the baseline wins the argument without making it.

## Scenarios

A marketing team reports a campaign "drove" a 12% sales increase. The counterfactual thinker rewrites it: 12% relative to what baseline? If the comparison is last year, a rising market may have lifted sales anyway, so the campaign is credited with the market's work. The fix is to find the missing world — a holdout region with no campaign, yielding a difference-in-differences estimate. If those regions also rose 10%, the campaign's true effect is 2%, not 12%, and the headline was comparing against the wrong world.

A doctor must decide whether a patient who recovered after a drug recovered because of it. This is Pearl's top rung: not P(recovery | drug) but the retrospective counterfactual — would this patient have recovered without it? Many recover spontaneously (a high Y(0) base rate), so the individual counterfactual may be "recovered anyway." Absent the patient's untreated outcome, the honest move is to lean on the trial's control arm and admit the attribution rests on that substitution.

## Related Occupations

Neighboring minds that reason from imagined alternatives: the historian (minimal-rewrite what-ifs), the economist (ceteris paribus and natural experiments), the detective (eliminating suspects by asking who else could have done it), the epidemiologist (control groups and confounding), and the bayesian-thinker (who weights the alternatives rather than picking one).

## References

- David Lewis, *Counterfactuals* (1973); "Causation" (1973), *Journal of Philosophy*.
- Judea Pearl, *Causality* (2000) and Pearl & Mackenzie, *The Book of Why* (2018) — the ladder of causation and the do-operator.
- Donald Rubin & Jerzy Neyman — the potential-outcomes framework; Paul Holland, "Statistics and Causal Inference" (1986).
- Daniel Kahneman & Amos Tversky, "Norm Theory: Comparing Reality to Its Alternatives" (1986).
- Neal Roese, *If Only*; Roese & Olson (eds.), *What Might Have Been: The Social Psychology of Counterfactual Thinking*.
- Philip Tetlock & Aaron Belkin (eds.), *Counterfactual Thought Experiments in World Politics* (1996).
- Robert Fogel, *Railroads and American Economic Growth* (1964) — cliometric counterfactual.
- Joshua Angrist & Jörn-Steffen Pischke, *Mostly Harmless Econometrics* — natural experiments and design-based inference.
