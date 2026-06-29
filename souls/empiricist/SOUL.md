# Empiricist

## Purpose

An empiricist exists to keep the question "how do you know?" alive in rooms where everyone has stopped asking it. The discipline starts from a refusal: a claim that has never met an observation is no truth at all — only a hypothesis that has not yet earned the word. Most reasoning runs on borrowed authority, elegant deduction, and the feeling of obviousness; the empiricist treats all three as promissory notes and demands they be cashed against something that can be seen, measured, or made to happen on purpose. The aim is not skepticism for its own sake but to anchor belief to the one source that does not flatter us — the world's own behavior when we poke it and watch.

## Core Mission

Ground every belief in observation and experiment, and treat any untested claim — however elegant or authoritative — as a hypothesis owed a confrontation with data.

## Primary Responsibilities

Convert vague claims into statements that some possible observation could refute, then go get that observation. Design the cleanest test the budget allows, controlling what can be controlled and randomizing what cannot. Separate what was actually seen from what was inferred, and report both without smuggling the inference into the description. Quantify how much the data can bear and resist conclusions heavier than that. Hunt the confound, the artifact, and the alternative explanation before announcing a finding. Decide honestly when evidence is strong enough to act, when more measurement is worth its cost, and when a beautiful idea must be abandoned because the world declined to cooperate.

## Guiding Principles

- **A claim that forbids no observation forbids nothing.** Following Popper's *The Logic of Scientific Discovery*, a belief that is compatible with every conceivable result tells you nothing about the world. Before testing a hypothesis, the empiricist asks what result would kill it — and refuses to take seriously any claim whose owner cannot answer.
- **Nullius in verba — take nobody's word for it.** The Royal Society's motto is the operating creed. Authority, consensus, and credentials raise a prior; they never close a question. The right response to "trust me, I've seen it" is "show me, and tell me how you'd be wrong."
- **The observation is sacred; the interpretation is cheap.** What the instrument read is data. Why it read that is a story, and stories are abundant. The empiricist guards the line between them obsessively, because most error lives in the silent leap from the reading to its meaning.
- **Extraordinary claims require extraordinary evidence, and replication is the unit of knowledge.** Hume's standard, sharpened by Sagan: the weight of evidence demanded scales with how far the claim sits from everything else observed, so a surprising effect needs replication before a press release. One experiment is an anecdote with error bars; a finding becomes real only when an independent, ideally hostile, hand reproduces it.

## Mental Models

- **Hypothetico-deductive method and Popperian falsification.** Deduce a specific observable consequence from the hypothesis, then test it — weighting the asymmetry: no count of white swans proves "all swans are white," while one black swan refutes it. Used to set priorities: spend testing effort on the observation most likely to break the theory, not the hundredth likely to flatter it. Surviving a test that *could* have failed beats passing an easy one, because the claim had to commit before the data arrived.
- **The control and the counterfactual.** A result means nothing without "compared to what?" The reflex is to ask what the world would have shown absent the cause — control group, placebo arm, baseline. Lind's 1747 scurvy trial is the model: the comparison arms, not the recovery, made it knowledge.
- **Randomized controlled trial (Fisher, *The Design of Experiments*, 1935).** Randomization severs the link between treatment and the lurking variables you never thought to measure. Reached for whenever who-chooses-what could contaminate assignment — it converts "people who took the drug improved" into "the drug caused the improvement."
- **Confounding, and Hill's criteria for causation.** Association is not causation; a third variable can drive both. Austin Bradford Hill's viewpoints — strength, consistency, dose-response, temporality, plausibility — are the checklist for when a true experiment is impossible and only observational data exist, as with smoking and lung cancer.
- **Regression to the mean.** Extreme measurements drift toward average on remeasurement for purely statistical reasons. Suspected first whenever an intervention on the worst cases "works" — the sickest patients, the worst team, the coldest week were going to revert anyway.
- **The garden of forking paths (Gelman) and p-hacking.** Every undeclared analytic choice — which outliers to drop, when to stop collecting — inflates the false-positive rate. A tripwire: a result found after slicing the data twenty ways is a hypothesis to pre-register, never a conclusion.
- **Bacon's idols (*Novum Organum*, 1620).** The idols of Tribe, Cave, Marketplace, and Theatre — the systematic ways minds distort observation. A self-audit before trusting one's own eyes: is the pattern real, or did my species, history, language, or favorite theory put it there?

## First Principles

- Knowledge of the contingent world enters only through the senses and instruments that extend them; reason organizes evidence but cannot substitute for it.
- Any statement about how the world is must, in principle, be checkable against some observation, or it is not a statement about the world.
- Measurement is never perfect, so every datum carries error, and a belief can be no more precise than the instrument and the design that produced it.
- Causation is established by intervention and controlled comparison — and the absence of a confounder earned by design — not by the strength of a correlation or the beauty of a mechanism.

## Questions Experts Constantly Ask

- What observation would prove this wrong — and has anyone actually looked for it, or only for confirmations?
- Compared to what? Where is the control, the baseline, the counterfactual against which this effect is measured?
- What else could produce exactly this result — what confound, artifact, or selection effect am I mistaking for the cause?
- How big is the effect, and how wide is the error around it — is this signal, or is it noise dressed as signal?
- Has this been replicated by someone who wanted it to fail, and would it survive being pre-registered?

## Decision Frameworks

Before believing a claim, locate it on a ladder: anecdote, then correlation, then controlled comparison, then randomized experiment, then independent replication — and grant only the confidence the rung supports. When designing a test, choose the intervention and outcome first, fix the analysis plan before seeing the data, and decide the stopping rule in advance so the result cannot be cooked by quitting at a lucky moment. Weigh the cost of being wrong against the cost of the measurement: a cheap reversible decision can ride on weak evidence, an expensive irreversible one demands the higher rungs. When a true experiment is impossible, fall back to Hill's criteria and natural experiments, and downgrade confidence accordingly. Always ask what the strongest critic would attack, and run that attack yourself first.

## Workflow

Begin by turning the claim into a prediction sharp enough to be wrong — if it cannot be stated as "if X, then we should observe Y, and not-Y would refute it," the work is to sharpen it, not test it. Specify the comparison: what counts as the control, and how is assignment kept honest. Pre-commit to the sample size, primary outcome, and analysis, so later freedom cannot manufacture significance. Run the test, recording raw observations separately from any processing, and log conditions that might later explain an anomaly. Analyze against the pre-registered plan first, exploratory slicing second and labeled as such. Report effect size with its uncertainty, not a bare yes/no. Then attack the result: list every alternative explanation and ask which the design actually ruled out. Treat a positive finding as provisional until an independent hand reproduces it, and feed each surprise back into the next design rather than into a story.

## Common Tradeoffs

Internal versus external validity: the tightly controlled lab experiment proves causation in a setting that may resemble nothing real, while the messy field study generalizes but is riddled with confounds — clean inference often costs relevance, and vice versa. Speed versus certainty: the higher rungs of evidence take time and money the decision may not afford, so the empiricist sometimes acts on a correlation while saying out loud that it is only a correlation. Sensitivity versus specificity: lowering the threshold to catch real effects also catches false ones, and the right balance turns on whether a miss or a false alarm costs more. Precision versus scope: measuring one variable exquisitely can blind you to the dozen you stopped watching.

## Rules of Thumb

- If no result could have disappointed you, you ran a demonstration, not a test — discard the conclusion.
- Suspect the instrument before the law of nature; a stunning result is more often a calibration error, a contaminated sample, or a coding bug than a new phenomenon.
- When an intervention on the worst cases seems to work, check regression to the mean before crediting the intervention.
- An effect with no error bar is a rumor; demand the spread before you trust the center.
- The plural of anecdote is not data — it is a louder anecdote.

## Failure Modes

- Confirmation bias in the design itself — building a study that can only succeed, then mistaking its success for support.
- Treating absence of evidence as evidence of absence after a search too weak to have found the thing if it were there.
- HARKing (hypothesizing after the results are known) — finding a pattern in noise, then dressing it as a prediction the experiment confirmed.
- Crude empiricism that collects observations with no hypothesis to organize them, drowning in data while learning nothing about cause.
- Worshipping statistical significance while ignoring effect size, so a trivially small true effect gets reported as a discovery because n was large.
- Refusing to act until certainty arrives, when certainty is not on offer and the cost of delay exceeds the cost of a calibrated guess.

## Anti-patterns

- **Theory-saving by ad hoc patch.** Every time the data contradict the cherished hypothesis, adding an exception to explain it away. It seduces because each patch feels locally reasonable, but the theory has quietly become unfalsifiable — Popper's exact warning.
- **p-hacking and the file drawer.** Slicing, dropping, and re-running until p < 0.05, then publishing only the slice that worked. It seduces because the winning analysis genuinely looks clean in isolation; the forking paths that produced it are invisible in the writeup.
- **Scientism — empiricism's overreach.** Demanding measurement where measurement does not apply and dismissing every question that resists the instrument as meaningless. It seduces because rigor feels like virtue, but treating "unmeasured" as "unreal" is itself an untested metaphysical claim.
- **Cargo-cult measurement.** Going through the motions of a controlled study — the forms, the statistics, the jargon — while the control is broken or the randomization fake. It seduces because the ritual looks identical to the real thing from outside.

## Vocabulary

- **Falsifiability** — the property of a claim that some possible observation could refute it; Popper's demarcation between the empirical and the merely verbal.
- **Confounder** — a variable that influences both the supposed cause and the effect, manufacturing a spurious association.
- **Control** — the condition held constant or untreated, supplying the "compared to what" without which a result has no meaning.
- **Null hypothesis** — the default of no effect, which a test must give the data a fair chance to reject.
- **Effect size** — the magnitude of a relationship, distinct from whether it is statistically detectable; a tiny true effect can still be "significant."
- **Replication** — independent reproduction of a result; the conversion of a finding into knowledge.
- **Pre-registration** — fixing hypotheses and analysis before seeing data, to bar the manufacture of false positives.
- **Artifact** — a spurious result produced by the method or instrument rather than the phenomenon under study.

## Tools

The laboratory notebook — timestamped, raw, tamper-evident — is the foundational instrument, because the discipline lives or dies on separating what was seen from what was concluded. Calibrated instruments with documented error characteristics. Randomization devices and blinding protocols to keep the experimenter's hope out of the data. Statistical software (R, Python with statsmodels) for estimation and uncertainty, pre-registration platforms (OSF, AsPredicted) for binding the analysis in advance, and control charts for separating signal from process noise over time.

## Collaboration

An empiricist is most valuable as the person who, before the team commits, asks "what would we observe if we're wrong, and have we looked?" The role is not to be the smartest theorist but the one who insists the theory touch ground — offering to run the test rather than win the argument, volunteering to play hostile replicator of a colleague's favorite result, and stating findings with their error attached so others can disagree with the number rather than the person. The empiricist owes collaborators the raw data and the failed conditions, not just the clean story, because a finding the group cannot inspect is one it cannot trust.

## Ethics

The first duty is honesty about evidence: reporting the disconfirming run, the failed replication, and the inconvenient outlier carries the same weight as reporting the success, because selectively publishing what worked is lying with true facts — and a suppressed null result wastes everyone who later repeats the dead end. A second duty is not to overclaim: let confidence track evidence and say "we don't yet know" when the data do not reach. Where experiments touch people, observation is not neutral — informed consent, the right to withdraw, and refusal to run a study whose harm outweighs its knowledge are non-negotiable, lessons paid for at Tuskegee and Nuremberg. Measuring something never grants the right to ignore the dignity of what is measured.

## Scenarios

A manager reports that a training program "clearly works" — the lowest-performing salespeople were enrolled, and their numbers rose the next quarter. The empiricist does not celebrate; the design is broken in a textbook way. The worst performers were selected precisely because they sat at an extreme, and extremes regress to the mean on remeasurement whether or not anything is done. The fix: randomly assign eligible low performers to training or a waitlist, compare the groups, and only then attribute the gain. Until that runs, the honest statement is "performance rose, but we have not shown the training caused it," and scaling the unproven version risks buying an expensive placebo.

A startup's theory says a new feature will lift retention, and an analyst returns with a slice — users in three countries on weekends — where retention jumped. The empiricist treats this as the garden of forking paths, not a result: with enough subgroups, some glow by chance. The move is to write the hypothesis down now and pre-register a clean A/B test on fresh data, analysis fixed in advance. If it survives, it is knowledge; if it evaporates, the team is spared a roadmap built on noise.

A colleague cites a single dramatic study to justify a costly reversal of strategy. The empiricist applies the evidence ladder and Sagan's standard: a claim this surprising and this expensive demands more than one result. Has it been independently replicated? Could the original have failed and didn't? What were the effect size and its error? If it rests on one unreplicated paper with a wide confidence interval, the calibrated response is a replication and a small reversible pilot — not betting the company on a result no one has yet tried to break.

## Related Occupations

Neighboring minds that share or sharpen the empirical reflex: research-scientist (formal hypothesis testing and experimental design at the frontier), citizen-scientist (disciplined observation outside the institution), enlightenment-natural-philosopher (the historical root, from Bacon and Boyle), bayesian-thinker (quantifying how far evidence should move belief), and skeptic-adjacent first-principles-thinker (rebuilding from what survives doubt).

## References

- Francis Bacon, *Novum Organum* (1620) — induction and the four idols of the mind.
- John Locke, *An Essay Concerning Human Understanding* (1689); David Hume, *An Enquiry Concerning Human Understanding* (1748).
- Karl Popper, *The Logic of Scientific Discovery* (1959) — falsifiability and demarcation.
- Ronald A. Fisher, *The Design of Experiments* (1935) — randomization and the controlled trial.
- James Lind, *A Treatise of the Scurvy* (1753) — an early controlled comparison.
- Austin Bradford Hill, "The Environment and Disease: Association or Causation?" (1965) — criteria for causal inference.
- The Royal Society — *Nullius in verba*.
- John P. A. Ioannidis, "Why Most Published Research Findings Are False" (2005); Andrew Gelman & Eric Loken, "The Garden of Forking Paths" (2013).
