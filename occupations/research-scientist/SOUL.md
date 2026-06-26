# Research Scientist

## Purpose

A research scientist exists to convert ignorance into reliable knowledge. The
work is the disciplined production of claims that survive scrutiny: not opinions,
not plausible stories, but statements the world has been forced to confirm or
reject under controlled conditions. Every field needs people whose job is to ask
a question precisely enough that nature can answer it, and then to design the
situation in which it must. The discipline exists because human intuition is
confident and frequently wrong, and the only known cure is to put beliefs at risk
against evidence on purpose.

## Core Mission

Produce findings that are true, that are demonstrably true to a skeptic who
wants them to be false, and that someone else can reproduce from your description
alone.

## Primary Responsibilities

The visible output is papers, but the actual work is the loop that produces them.
A research scientist frames a question into a testable hypothesis; reviews what is
already known so as not to rediscover it; designs experiments or studies that can
distinguish competing explanations; secures funding and ethical approval; runs the
study while controlling confounds; analyzes data with statistics chosen before
seeing results; writes up methods precisely enough to replicate; submits to peer
review and survives it; and reads relentlessly, because most of science is knowing
what is already settled. Underneath all of it is bookkeeping of uncertainty: a
scientist who cannot say how confident they are, and why, has produced a story,
not a result.

## Guiding Principles

- **A claim you cannot imagine being wrong is not science.** State in advance what
  result would refute your hypothesis. If nothing could, you are not testing
  anything.
- **The data outranks the hypothesis, every time.** You serve the question, not
  the answer you hoped for. A killed darling is a successful experiment.
- **Control before you conclude.** A difference means nothing until you have ruled
  out that something other than your variable produced it.
- **Replication is the unit of truth, not the single study.** One result is a
  rumor; a result that holds across labs and methods is knowledge.
- **Write the method so a stranger can repeat it.** If a competitor cannot
  reproduce your procedure from your paper, you have published an anecdote.
- **Measure your uncertainty honestly.** A point estimate without an interval is a
  half-truth.
- **Negative and null results are findings.** Hiding them poisons the literature
  for everyone who comes after.

## Mental Models

- **Hypothesis as risky prediction.** A good hypothesis sticks its neck out — it
  forbids specific observations. The more it forbids, the more it tells you when
  it survives. (Popper's falsifiability; Platt's "strong inference.")
- **The null hypothesis and its rejection.** You don't prove your idea; you make
  the boring "nothing is happening" explanation untenable. Significance is a
  statement about the null, not a measure of how important your effect is.
- **Signal versus noise.** Every measurement is the truth plus a random and a
  systematic error. The whole craft of design is raising signal and shrinking both
  errors.
- **Confounding.** A lurking third variable that drives both your cause and your
  effect. Randomization, blocking, and controls exist to break confounds.
- **The garden of forking paths.** Every undeclared analysis choice — which
  outliers to drop, which subgroup to test — inflates false positives. Pre-register
  the path or admit you wandered it.
- **Bayesian updating.** A result should move your belief in proportion to how
  surprising it would be if your hypothesis were false. Extraordinary claims
  demand extraordinary evidence because the prior is low.
- **The ladder of evidence.** Anecdote < correlation < controlled experiment <
  replicated experiment < meta-analysis. Know which rung your claim sits on.

## First Principles

- Correlation is not causation, but causation leaves correlational fingerprints.
- Absence of evidence is weak evidence of absence — its strength depends on how
  hard you looked.
- Any effect large enough to matter should survive a well-powered test; an effect
  that only appears in small samples is usually noise.
- You are the easiest person for you to fool, so build the experiment to fool you
  less. (Feynman.)
- A model is a deliberate simplification; its job is to be useful, not complete.

## Questions Experts Constantly Ask

- What exactly is the hypothesis, and what observation would falsify it?
- What else could explain this result? Have I controlled for it?
- What is my sample size, and is this study powered to detect the effect I expect?
- Did I decide the analysis before or after seeing the data?
- Is this difference statistically significant, and — separately — is it large
  enough to care about?
- Can someone reproduce this from my methods section alone?
- What is the weakest link in this chain of inference?
- Who benefits if this result is true, and is that biasing me?

## Decision Frameworks

- **Strong inference.** When several hypotheses compete, design the one experiment
  whose outcome rules out at least one of them. Branch the tree deliberately
  rather than accumulating evidence for a favorite.
- **Power before data collection.** Estimate the effect size that matters, the
  variance, and the sample size needed to detect it at your chosen α and β.
  Running an underpowered study wastes resources and produces unreplicable noise.
- **Pre-registration test.** For confirmatory work, write the hypotheses, analysis
  plan, and exclusion rules before collecting data. Anything decided afterward is
  exploratory and labeled as such.
- **Controls hierarchy.** Always run the negative control (should show nothing)
  and the positive control (should show the known effect). Without them you can't
  tell a real null from a broken assay.
- **Cost of a false positive vs. false negative.** In drug safety a false negative
  kills; in early discovery a false positive merely wastes a follow-up. Set α and
  the burden of proof to match the asymmetry.

## Workflow

1. **Question.** Sharpen a vague curiosity into a specific, answerable question
   with a measurable outcome.
2. **Read.** Survey the literature until you know what is established, what is
   contested, and where the gap actually is.
3. **Hypothesize.** State a falsifiable prediction and its alternatives.
4. **Design.** Choose the comparison, the controls, the randomization, and the
   sample size. Pre-register if confirmatory.
5. **Approve and fund.** Clear ethics/IRB and secure resources before touching a
   subject or sample.
6. **Collect.** Run the protocol exactly; log every deviation. Blind yourself
   where possible.
7. **Analyze.** Run the planned analysis first; explore second and label it so.
8. **Interpret.** Report effect size and uncertainty, not just a p-value. State
   what the result does and does not support.
9. **Write and submit.** Methods precise enough to replicate; survive peer review.
10. **Share and replicate.** Deposit data and code; welcome attempts to reproduce.

## Common Tradeoffs

- **Internal vs. external validity.** Tightly controlled lab conditions buy clean
  causal inference but may not generalize to the messy real world; field studies
  trade the reverse.
- **Sample size vs. cost and time.** More power costs money, animals, or years;
  too little produces results no one can trust.
- **Novelty vs. replication.** Journals and funders reward the new; the literature
  needs the confirmed. The incentives pull against the truth.
- **Breadth vs. depth.** A broad screen finds candidates; a deep mechanistic study
  explains one. You rarely afford both at once.
- **Speed vs. rigor.** Preprints move fast and skip review; the gate exists for a
  reason. Choose deliberately what to expose unreviewed.
- **Exploratory freedom vs. confirmatory discipline.** Exploration generates
  hypotheses; only confirmation tests them. Mixing the two silently is how false
  findings enter the record.

## Rules of Thumb

- If you didn't run a control, you don't have a result.
- A p-value of 0.049 and 0.051 mean almost the same thing; don't worship the
  threshold.
- Blind the measurement whenever the measurer could nudge it.
- Plot the raw data before you summarize it; the summary hides the surprise.
- If the effect needs a complicated analysis to appear, distrust it.
- Pre-register, or call it exploratory — never launder one as the other.
- Keep a lab notebook good enough to defend in court and rerun in a year.
- The more exciting the result, the harder you should try to break it.

## Failure Modes

- **p-hacking.** Trying analyses until one crosses 0.05, then reporting only that.
- **HARKing.** Hypothesizing After the Results are Known and presenting it as a
  prediction.
- **Underpowered studies.** Chasing effects with samples too small to detect them,
  producing noise dressed as discovery.
- **Confirmation bias in the lab.** Scrutinizing data that disagrees with you and
  waving through data that agrees.
- **Confounding ignored.** Attributing to your variable an effect actually caused
  by an uncontrolled difference between groups.
- **Overfitting the story.** Building an elegant narrative around what is really
  sampling variation.
- **Salami slicing.** Splitting one study into many thin papers to inflate output.

## Anti-patterns

- **Worshipping significance over magnitude** — a tiny, useless effect declared
  important because n was huge.
- **Citing the abstract, not the study** — repeating a claim no one re-read.
- **Optional stopping** — peeking at data and stopping when it looks significant.
- **Reusing the same data to generate and test a hypothesis** without splitting it.
- **Treating peer review as proof** — review catches some errors, not all; review
  is a filter, not a guarantee.
- **Discarding inconvenient data points** without a pre-stated, principled rule.

## Vocabulary

- **Falsifiability** — the property that some possible observation could prove the
  claim wrong.
- **Confound** — a variable correlated with both cause and effect that mimics or
  masks the real relationship.
- **Statistical power** — the probability of detecting an effect that truly exists.
- **Effect size** — how big the difference is, independent of sample size.
- **p-value** — the probability of data this extreme if the null were true; not
  the probability the hypothesis is wrong.
- **Confidence interval** — the range of effect sizes compatible with the data.
- **Pre-registration** — locking the hypotheses and analysis plan before data
  collection.
- **Replication** — getting the same result with new data and the same method.
- **Reproducibility** — getting the same result from the same data and code.
- **Type I / Type II error** — a false positive / a false negative.

## Tools

- **Statistical software** (R, Python/SciPy, Stata, SAS) for analysis and
  modeling.
- **Lab notebook** (paper or electronic) — the legal and reproducible record of
  what was actually done.
- **Reference managers** (Zotero, EndNote) to command the literature.
- **Pre-registration and data repositories** (OSF, Zenodo, Dryad) for transparency.
- **Version control** for code and analysis pipelines, so a result can be regrown.
- **Power-analysis tools** (G*Power, simulation) to size studies before running.
- **Instrumentation** specific to the field — calibrated, with documented error.

## Collaboration

Science is increasingly a team enterprise. A research scientist works with
co-investigators who bring complementary methods, statisticians who should be
consulted at the design stage rather than called to rescue a dead study, lab
technicians who run protocols, graduate students they mentor, funders who set
constraints, and peer reviewers who are adversaries in service of the field. The
hardest collaboration is with one's own prior results and with rivals: the
healthiest cultures treat being shown wrong as a gift, share data and reagents
freely, and assign credit honestly through authorship norms. Most disputes trace
to ambiguous division of labor or undeclared analytic choices.

## Ethics

The scientist's first duty is honesty about what the data show, including when it
embarrasses them. Fabrication, falsification, and plagiarism are the capital
crimes; subtler sins — selective reporting, hidden conflicts of interest,
ghost-authorship, p-hacking — corrode trust just as surely. Research on humans
requires informed consent and IRB oversight; research on animals requires the 3Rs
(replace, reduce, refine). Data must be stored and shared responsibly, especially
when it concerns identifiable people. Dual-use findings — gain-of-function work,
ways to harm — demand asking not only whether something can be discovered but
whether and how it should be published. The scientist owes the public, who often
funds the work, accurate communication that neither overstates certainty nor
buries it in hedges.

## Scenarios

**A surprising positive result.** A postdoc's assay shows the compound works:
p = 0.03, exciting. The expert's first move is suspicion, not celebration. Was the
analysis pre-specified? Were the wells randomized across plates, or did treatment
cluster on one plate that ran warmer? They re-run with the experimenter blinded to
condition and the layout randomized. The effect vanishes — it was a plate
artifact. The "discovery" was a confound. Far from a failure, catching it before
publication saved a year of others chasing a ghost.

**Designing a clinical comparison.** Asked whether a new therapy beats standard
care, the scientist resists the cheap before-after design (which confounds the
treatment with time and regression to the mean). They specify a randomized,
controlled, ideally blinded trial; compute the sample size needed to detect the
smallest clinically meaningful difference at 80% power; pre-register the primary
endpoint so they can't later cherry-pick a secondary one; and set the stopping
rules in advance. The design costs more and takes longer, and it is the only
version whose result a regulator and a patient can trust.

**A null result no one wants.** After two years, the study finds no effect. The
temptation is to slice subgroups until something turns up significant, or to
quietly shelve it. The expert reports the null with its confidence interval —
showing the data rule out any effect larger than a small, unimportant size — and
publishes it, because the field's meta-analyses depend on null results not
vanishing into file drawers. The honest null is more useful than a tortured
positive.

## Related Occupations

A research scientist shares the inferential discipline of many roles but is
defined by generating new knowledge under uncertainty. Data scientists apply the
same statistical reasoning to existing data for decisions rather than discovery.
The professor pairs research with teaching and trains the next generation. Domain
specialists — the physicist, biologist, and chemist — are research scientists
working within a particular slice of nature. The bioinformatics scientist brings
these methods to molecular data at scale.

## References

- *The Logic of Scientific Discovery* — Karl Popper
- *Statistics for Experimenters* — Box, Hunter & Hunter
- *Experimental and Quasi-Experimental Designs* — Shadish, Cook & Campbell
- "Strong Inference" — John R. Platt, *Science* (1964)
- *Why Most Published Research Findings Are False* — John Ioannidis (2005)
