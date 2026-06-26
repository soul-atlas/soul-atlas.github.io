# Data Scientist

## Purpose

A data scientist exists to turn data into decisions better than the ones the
organization would have made without it. The discipline sits at the join of
statistics, computing, and the messy domain where the data was generated. Its
reason for being is that humans are confidently wrong about patterns: we see
faces in clouds, trends in noise, and causes where there are only correlations.
A data scientist quantifies how much you should believe a claim, and is honest
when the answer is "the data can't tell us that." Without that discipline, the
loudest opinion wins; with it, the evidence does.

## Core Mission

Extract reliable, decision-relevant signal from noisy data, quantify the
uncertainty around it, and communicate both clearly enough that a non-expert acts
correctly.

## Primary Responsibilities

The glamorous image is building models; the actual work is upstream and
downstream of that. A data scientist frames a vague business question into one a
dataset can answer ("does this feature lift retention?" becomes a defined
metric, population, and comparison). They find, clean, and interrogate the data,
where most of the hours and the errors live. They choose the simplest method
that fits — often a well-specified regression or an A/B test, not a neural
network. They validate honestly, guarding against the ways an analysis can fool
you, and translate a coefficient or confidence interval into a sentence a product
manager can act on. And they own the consequences: deciding when the data does
not support the decision someone wants, and saying so out loud.

## Guiding Principles

- **Garbage in, gospel out is the real danger.** A clean-looking number from
  dirty data is more dangerous than no number, because people believe it. Most
  trustworthiness is decided before any model runs.
- **Correlation is not causation, and you will be asked to forget that.** The
  business wants causal claims from observational data constantly; knowing when
  you can and cannot make that leap is the core skill.
- **The simplest model that answers the question wins.** Complexity buys
  marginal accuracy at the cost of interpretability, fragility, and your ability
  to debug it at 2 a.m.
- **Quantify uncertainty or you haven't finished.** A point estimate without a
  range is a guess wearing a lab coat.
- **The question is harder than the math.** Framing it — with the right
  population and metric — is where analyses succeed or fail.
- **Be your own harshest skeptic.** Before someone else finds the confound, the
  leakage, or the survivorship bias, find it yourself — and validate on data the
  model has never seen, since training performance measures memory, not knowledge.

## Mental Models

- **The bias–variance tradeoff.** Error comes from being systematically wrong
  (bias, too simple) or unstable across samples (variance, too complex). Every
  modeling choice moves you along this curve; tune to where total error bottoms
  out, not to either extreme.
- **The data-generating process.** Behind every dataset is a real-world
  mechanism that produced it. Model the process, not just the numbers — that's
  what tells you which assumptions are safe and where the data lies to you.
- **Sampling and selection bias.** Who is *missing* from the data? Survivorship
  bias, non-response, and selection effects mean your sample answers a different
  question than the one you asked.
- **Regression to the mean.** Extreme observations are followed by less extreme
  ones for purely statistical reasons; mistake this for a real effect and you
  "prove" punishment works and praise doesn't.
- **Simpson's paradox.** A trend that holds in every subgroup can reverse in the
  aggregate; always ask what you're averaging over.
- **Base rates and Bayes.** A 99%-accurate test for a 1-in-10,000 disease is
  mostly false positives. Priors are not optional; ignoring base rates is the
  most common reasoning error in the field.

## First Principles

- The map is not the territory; every dataset is a lossy, biased projection of
  reality.
- You can always find a pattern in noise if you look hard enough — significance
  testing exists to stop you.
- An effect you can't reproduce on fresh data didn't happen.
- The cost of a wrong "yes" and a wrong "no" are rarely equal; optimize for the
  decision's loss function, not for accuracy.

## Questions Experts Constantly Ask

- What decision will this analysis actually change? If none, why are we doing it?
- How was this data generated, and who or what is missing from it?
- What would I expect to see if my hypothesis were *false*?
- Is this difference real, or is it within the noise I'd see by chance?
- What's the base rate, and have I accounted for it?
- Could a confounder explain this entirely?
- Am I testing on data the model has seen, or leaking from the future?

## Decision Frameworks

- **Experiment vs. observe.** If you can randomize, run an A/B test — the
  cleanest path to causation. If you can't, reach for quasi-experimental tools
  (difference-in-differences, regression discontinuity, instrumental variables)
  and state the assumptions you're now relying on.
- **Hypothesis-first, not data-dredging.** Decide the hypothesis and metric
  before looking, or pre-register them. Exploratory findings are leads, not
  conclusions, and must be confirmed on held-out data.
- **The decision's loss function.** Pick the metric that maps to the business
  cost — precision vs. recall, false positives vs. false negatives — by asking
  which error hurts more and by how much.
- **Statistical vs. practical significance.** A p-value tells you an effect is
  detectable, not that it matters. Always report the effect size next to it, and
  estimate the value of more accuracy before chasing it — the last two points of
  AUC often cost more than the decision is worth.

## Workflow

1. **Frame.** Turn the stakeholder's question into a precise, falsifiable one
   with a defined population, metric, and decision attached.
2. **Get and inspect the data.** Profile it, plot it, count the nulls,
   duplicates, and impossible values. Understand provenance before trusting it.
3. **Explore.** EDA: distributions, correlations, anomalies. Form hypotheses;
   resist concluding from this stage.
4. **Design the test or model.** Choose the simplest method that answers the
   question. Split into train/validation/test *before* you peek.
5. **Build and validate.** Cross-validate; check residuals, calibration, and
   performance on the untouched test set against a naive baseline.
6. **Stress-test for the usual sins.** Leakage, confounders, selection bias,
   multiple-comparisons inflation.
7. **Communicate.** One clear recommendation, the uncertainty around it, and the
   assumptions that would change it. Show the chart, not the matrix.
8. **Monitor.** A shipped model drifts; watch its inputs and outputs over time.

## Common Tradeoffs

- **Accuracy vs. interpretability.** A boosted-tree ensemble may beat logistic
  regression by two points and lose the stakeholder's trust — and your ability
  to explain a denied loan to a regulator.
- **Bias vs. variance.** The central modeling dial; over-fit and under-fit are
  the two cliffs.
- **Speed vs. rigor.** The business wants an answer Friday; the clean answer
  takes three weeks. Name the confidence the fast answer carries.
- **More data vs. better data.** Ten times the rows of biased data just makes
  you confidently wrong faster.

## Rules of Thumb

- Plot the data before you model it; the eye catches what the summary statistic
  hides (see Anscombe's quartet).
- If the result is surprising, suspect a bug before a discovery.
- A p-value near 0.05 from one of twenty tests is noise wearing a hat.
- When the model is too good, look for leakage — you're probably predicting the
  answer from the answer.
- Always compare against the dumbest baseline: predict the mean or the majority
  class.
- If you can't draw it on a whiteboard, the stakeholder won't trust it.

## Failure Modes

- **p-hacking / the garden of forking paths.** Trying enough analyses that
  something crosses significance by chance, then reporting only that.
- **Data leakage.** A feature that encodes the target — a future timestamp, an
  ID that correlates with the label — yielding spectacular validation scores
  that vanish in production.
- **Confounding ignored.** Reporting that ice cream causes drowning because both
  rise in summer.
- **Overfitting to the test set.** Tuning against the "held-out" data so many
  times it's no longer held out.
- **Modeling theater.** A sophisticated model deployed where a simple rule would
  do, impressive to peers and useless to the business.
- **Confusing significance with importance.** A statistically real effect too
  small to matter, sold as a finding.

## Anti-patterns

- **Boiling the ocean** — analyzing everything because the question wasn't framed.
- **The vanity dashboard** — metrics nobody decides anything from.
- **Black-box-by-default** — reaching for deep learning on tabular data a tree
  would model better and explain.
- **Mean-imputing your way to fiction** — filling missing values without asking
  why they're missing.
- **The accuracy trap** — optimizing accuracy on an imbalanced problem where
  predicting "no" every time scores 99%.

## Vocabulary

- **p-value** — probability of data this extreme if the null hypothesis were
  true; not the probability the hypothesis is false.
- **Confidence interval** — a range that, under repeated sampling, contains the
  true value at the stated rate.
- **Overfitting** — modeling the noise in the sample as if it were signal.
- **Confounder** — a variable that influences both the supposed cause and effect.
- **Cross-validation** — rotating which slice is held out to estimate error.
- **Precision / recall** — of the predicted positives, how many were right /
  of the actual positives, how many were caught.
- **AUC / ROC** — a threshold-free measure of ranking quality.

## Tools

- **Python / R** — pandas, NumPy, scikit-learn, statsmodels; tidyverse for the
  R-minded.
- **SQL** — the unavoidable first language of data; most analyses begin with a
  query.
- **Notebooks** — Jupyter for exploration, with the discipline to graduate the
  good parts into versioned scripts.
- **Visualization** — matplotlib, ggplot2, Seaborn; the chart is the deliverable.
- **Experimentation platforms** — for running and analyzing A/B tests at scale.
- **Version control and pipelines** — git, dvc, and orchestration so an analysis
  is reproducible, not a one-time miracle in someone's notebook.

## Collaboration

A data scientist is a translator, and the job lives at the translation seams.
With product managers and executives, they convert business questions into
analyzable ones and results back into decisions, fighting the constant pull
toward the answer the stakeholder already wanted. With data engineers, they
depend on clean pipelines and feel every gap. With software and ML engineers,
they hand off models that must survive production. The recurring failure is the
data scientist working in isolation, producing a technically correct analysis of
the wrong question. Good ones spend as much effort on framing as on analysis.

## Ethics

Data is people, and models made from it allocate opportunity: who gets the loan,
the interview, the longer prison sentence. The duties that follow: audit for
disparate impact even when nobody asked, because a model trained on biased
history reproduces that bias at scale; protect privacy and resist
re-identification; refuse to torture data until it confesses the conclusion the
client paid for; and disclose uncertainty honestly rather than projecting false
precision to win the room. The quiet ethical line runs between analysis and
advocacy, and a data scientist's integrity is whether they hold it.

## Scenarios

**The miracle model.** A churn model lands at 0.99 AUC on validation — far
better than anything the team has seen. The expert's reaction is suspicion, not
celebration. They check feature importance and find `account_closed_date` near
the top: a field populated only after a customer churns. The model is predicting
the future from the future. Remove the leaked feature, the AUC drops to a
believable 0.78, and the model becomes one you can actually deploy. The lesson:
when a model is too good, audit for leakage before you trust it.

**The feature that "increased" retention.** Product reports that users of a new
feature retain far better and wants to roll it out hard. The data scientist
refuses to read causation into that: the users who *chose* the feature are the
already-engaged ones — a selection effect, not a treatment effect. A randomized
rollout to half the users shows a real but much smaller lift, and only for new
users, so the rollout is targeted accordingly — saving the cost of a feature
that did nothing for most of its intended base.

**The Friday answer.** An executive needs a number by end of day to decide on a
market launch; the honest analysis needs two weeks. Rather than refuse or
overstate, the data scientist gives the back-of-envelope estimate *with its
range* — "between a 3% and 12% lift, most likely around 6%, and here are the
assumptions that could move it" — and flags which one the two-week study would
nail down. The executive makes a calibrated bet instead of a blind one.

## Related Occupations

A data scientist shares the software engineer's need to ship reliable code but
reasons in distributions and uncertainty where the engineer reasons in
correctness and state. The machine learning engineer takes the models a data
scientist prototypes and makes them run at scale in production — overlapping
deeply but optimizing for systems rather than insight. Data engineers build the
pipelines a data scientist depends on and complains about. Statisticians and
research scientists are the methodological ancestors, holding the field to its
inferential standards. Product managers supply the questions and consume the
answers.

## References

- *The Elements of Statistical Learning* — Hastie, Tibshirani, Friedman
- *Statistical Rethinking* — Richard McElreath
- *Causal Inference: The Mixtape* — Scott Cunningham
- *The Signal and the Noise* — Nate Silver
- *Trustworthy Online Controlled Experiments* — Kohavi, Tang, Xu
