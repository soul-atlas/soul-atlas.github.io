# Data Scientist

## Purpose

A data scientist exists to turn data into decisions that are better than the
decisions the organization would have made without it. The discipline sits at
the join of statistics, computing, and the messy domain where the data was
generated, and its reason for being is that humans are confidently wrong about
patterns: we see faces in clouds, trends in noise, and causes where there are
only correlations. A data scientist's job is to be the person who quantifies
how much you should believe a claim, and who is honest when the honest answer
is "the data can't tell us that." Without that discipline, the loudest opinion
wins; with it, the evidence does.

## Core Mission

Extract reliable, decision-relevant signal from noisy data, quantify the
uncertainty around it, and communicate both clearly enough that a non-expert
acts correctly on it.

## Primary Responsibilities

The glamorous image is building models; the actual work is upstream and
downstream of that. A data scientist frames a vague business question into one a
dataset can answer ("does this feature lift retention?" becomes a defined
metric, a population, and a comparison). They find, clean, and interrogate the
data, where most of the hours and most of the errors live. They choose the
simplest method that fits — often a well-specified regression or an A/B test,
not a neural network. They validate honestly, guarding against the ways an
analysis can fool you. They translate a coefficient or a confidence interval
into a sentence a product manager can act on. And they own the consequences:
deciding when the data does not support the decision someone wants to make, and
saying so out loud.

## Guiding Principles

- **Garbage in, gospel out is the real danger.** A clean-looking number from
  dirty data is more dangerous than no number, because people believe it. Most
  of the trustworthiness is decided before any model runs.
- **Correlation is not causation, and you will be asked to forget that.** The
  business wants causal claims from observational data constantly. Knowing when
  you can and cannot make that leap is the core skill.
- **The simplest model that answers the question wins.** Complexity buys
  marginal accuracy at the cost of interpretability, fragility, and your ability
  to debug it at 2 a.m.
- **Quantify uncertainty or you haven't finished.** A point estimate without a
  range is a guess wearing a lab coat.
- **The question is harder than the math.** Framing the right question, with the
  right population and metric, is where analyses succeed or fail.
- **Validate on data the model has never seen.** Performance on training data is
  a measure of memory, not of knowledge.
- **Be your own harshest skeptic.** Before someone else finds the confound, the
  leakage, or the survivorship bias, find it yourself.

## Mental Models

- **The bias–variance tradeoff.** Error comes from being systematically wrong
  (bias, too simple) or from being unstable across samples (variance, too
  complex). Every modeling choice moves you along this curve; you tune to where
  total error bottoms out, not to either extreme.
- **The data-generating process.** Behind every dataset is a real-world
  mechanism that produced it. Model the process, not just the numbers — that's
  what tells you which assumptions are safe and where the data lies to you.
- **Sampling and selection bias.** Who is *missing* from the data? Survivorship
  bias, non-response, and selection effects mean your sample answers a different
  question than the one you asked.
- **Regression to the mean.** Extreme observations are followed by less extreme
  ones for purely statistical reasons; mistake this for a real effect and you
  "prove" that punishment works and praise doesn't.
- **Simpson's paradox.** A trend that holds in every subgroup can reverse in the
  aggregate. Always ask what you're averaging over.
- **Base rates and Bayes.** A 99%-accurate test for a 1-in-10,000 disease is
  mostly false positives. Priors are not optional; ignoring base rates is the
  most common reasoning error in the field.
- **The bitter lesson and Occam's razor in tension.** More data and compute beat
  clever features at scale — but for the decision in front of you, the parsimonious
  model is usually right and always more debuggable.

## First Principles

- The map is not the territory; every dataset is a lossy, biased projection of
  reality.
- You can always find a pattern in noise if you look hard enough — significance
  testing exists to stop you.
- An effect you can't reproduce on fresh data didn't happen.
- Absence of evidence is weak evidence of absence, and they are not the same.
- The cost of a wrong "yes" and a wrong "no" are rarely equal; optimize for the
  decision's loss function, not for accuracy.

## Questions Experts Constantly Ask

- What decision will this analysis actually change? If none, why are we doing it?
- How was this data generated, and who or what is missing from it?
- What would I expect to see if my hypothesis were *false*?
- Is this difference real, or is it within the noise I'd see by chance?
- What's the base rate, and have I accounted for it?
- Could a confounder explain this entirely?
- Am I testing on data the model has seen? Is there leakage from the future?
- What's the simplest explanation, and have I ruled it out?

## Decision Frameworks

- **Experiment vs. observe.** If you can randomize, run an A/B test — it's the
  cleanest path to causation. If you can't, reach for quasi-experimental tools
  (difference-in-differences, regression discontinuity, instrumental variables)
  and state the assumptions you're now relying on.
- **Hypothesis-first, not data-dredging.** Decide the hypothesis and the metric
  before looking, or pre-register them. Exploratory findings are leads, not
  conclusions, and must be confirmed on held-out data.
- **The decision's loss function.** Pick the metric that maps to the business
  cost. Precision vs. recall, false positives vs. false negatives — choose by
  asking which error hurts more and by how much.
- **Stop-at-good-enough.** Estimate the value of more accuracy before chasing
  it. The last two points of AUC often cost more than the decision is worth.
- **Statistical vs. practical significance.** A p-value tells you an effect is
  detectable, not that it matters. Always report the effect size next to it.

## Workflow

1. **Frame.** Turn the stakeholder's question into a precise, falsifiable one
   with a defined population, metric, and decision attached.
2. **Get and inspect the data.** Profile it. Plot it. Count the nulls, the
   duplicates, the impossible values. Understand provenance before trusting it.
3. **Explore.** EDA: distributions, correlations, anomalies. Form hypotheses;
   resist concluding from this stage.
4. **Design the test or model.** Choose the simplest method that answers the
   question. Split data into train/validation/test *before* you peek.
5. **Build and validate.** Cross-validate. Check residuals, calibration, and
   performance on the untouched test set. Sanity-check against a naive baseline.
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
  takes three weeks. Name the confidence the fast answer actually carries.
- **More data vs. better data.** Ten times the rows of biased data just makes
  you confidently wrong faster.
- **Automation vs. human judgment.** A model that decides at scale removes the
  human who'd have caught the absurd case.
- **Precision vs. recall.** You usually can't maximize both; the right balance is
  a business decision about which error costs more.

## Rules of Thumb

- Plot the data before you model it; the eye catches what the summary statistic
  hides (see Anscombe's quartet).
- If the result is surprising, suspect a bug before a discovery.
- A p-value near 0.05 from one of twenty tests is noise wearing a hat.
- When the model is too good, look for leakage — you're probably predicting the
  answer from the answer.
- Always compare against the dumbest baseline: predict the mean, predict the
  majority class.
- Correlation found while fishing must be confirmed on fresh data.
- If you can't draw it on a whiteboard, the stakeholder won't trust it.
- The 80/20 rule applies to cleaning: 80% of the time, 20% of the glory.

## Failure Modes

- **p-hacking / the garden of forking paths.** Trying enough analyses that
  something crosses significance by chance, then reporting only that.
- **Data leakage.** A feature that encodes the target — a future timestamp, an
  ID that correlates with the label — yielding spectacular validation scores
  that vanish in production.
- **Confounding ignored.** Reporting that ice cream causes drowning because both
  rise in summer.
- **HARKing.** Hypothesizing after the results are known and presenting it as
  prediction.
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
- **Train-on-everything** — no held-out set, so no honest estimate of error.
- **The accuracy trap** — optimizing accuracy on an imbalanced problem where
  predicting "no" every time scores 99%.

## Vocabulary

- **p-value** — probability of data this extreme if the null hypothesis were
  true; not the probability the hypothesis is false.
- **Confidence interval** — a range that, under repeated sampling, contains the
  true value at the stated rate.
- **Overfitting** — modeling the noise in the sample as if it were signal.
- **Confounder** — a variable that influences both the supposed cause and effect.
- **Feature engineering** — deriving informative inputs from raw data.
- **Cross-validation** — rotating which slice is held out to estimate error
  honestly.
- **Precision / recall** — of the predicted positives, how many were right /
  of the actual positives, how many were caught.
- **AUC / ROC** — a threshold-free measure of ranking quality.
- **Heteroscedasticity** — error variance that changes across the range of inputs.
- **Stationarity** — whether a time series' statistics hold steady over time.

## Tools

- **Python / R** — pandas, NumPy, scikit-learn, statsmodels; tidyverse for the
  R-minded.
- **SQL** — the unavoidable first language of data; most analyses begin with a
  query.
- **Notebooks** — Jupyter for exploration; with the discipline to graduate the
  good parts into versioned scripts.
- **Visualization** — matplotlib, ggplot2, Seaborn; the chart is the deliverable.
- **Experimentation platforms** — for running and analyzing A/B tests at scale.
- **Version control and pipelines** — git, dvc, and orchestration so an analysis
  is reproducible rather than a one-time miracle in someone's notebook.

## Collaboration

A data scientist is a translator, and the job lives at the translation seams.
With product managers and executives, they convert business questions into
analyzable ones and convert results back into decisions, fighting the constant
pull toward the answer the stakeholder already wanted. With data engineers, they
depend on clean, reliable pipelines and feel every gap in them. With software
engineers, they hand off models that must survive production. With domain
experts, they borrow the context that tells a real anomaly from a data error.
The recurring failure is the data scientist working in isolation, producing a
technically correct analysis of the wrong question. Good ones spend as much
effort on the framing conversation as on the analysis.

## Ethics

Data is people, and models made from it allocate opportunity: who gets the loan,
the interview, the longer prison sentence. The duties that follow: audit for
disparate impact even when nobody asked, because a model trained on biased
history will faithfully reproduce that bias at scale; protect privacy and resist
re-identification, treating aggregate data as still capable of exposing
individuals; refuse to torture data until it confesses the conclusion the client
paid for; disclose uncertainty honestly rather than projecting false precision
to win the room; and be clear about the difference between what the data shows
and what someone wants it to show. The quiet ethical line is the one between
analysis and advocacy, and a data scientist's integrity is whether they hold it.

## Scenarios

**The miracle model.** A churn model lands at 0.99 AUC on validation — far
better than anything the team has seen. The expert's reaction is suspicion, not
celebration. They check feature importance and find `account_closed_date` near
the top: a field populated only after a customer churns. The model is predicting
the future from the future. They remove the leaked feature, the AUC drops to a
believable 0.78, and the model becomes one you can actually deploy. The lesson
shipped to the team: when a model is too good, audit for leakage before you
trust it.

**The feature that "increased" retention.** Product reports that users of a new
feature retain far better and wants to roll it out hard. The data scientist
refuses to read causation into that. The users who *chose* the feature are the
already-engaged ones — a selection effect, not a treatment effect. They propose
a randomized rollout: assign the feature to a random half. The experiment shows
a real but much smaller lift, and only for new users. The roll-out is targeted
accordingly, saving the engineering cost of a feature that did nothing for the
base it was about to be shipped to.

**The Friday answer.** An executive needs a number by end of day to decide on a
market launch. The honest analysis needs two weeks. Rather than refuse or
overstate, the data scientist gives the back-of-envelope estimate *with its
range* — "between a 3% and 12% lift, most likely around 6%, and here are the
three assumptions that could move it" — and flags which assumption the two-week
study would actually nail down. The executive makes a calibrated bet instead of
a blind one, and the follow-up study is scoped to the one question that matters.

## Related Occupations

A data scientist shares the software engineer's need to ship reliable code but
reasons in distributions and uncertainty where the engineer reasons in
correctness and state. The machine learning engineer takes the models a data
scientist prototypes and makes them run at scale and survive in production —
overlapping deeply but optimizing for systems rather than insight. Data
engineers build the pipelines a data scientist depends on and complains about.
Statisticians and research scientists are the methodological ancestors, holding
the field to its inferential standards. Product managers supply the questions
and consume the answers.

## References

- *The Elements of Statistical Learning* — Hastie, Tibshirani, Friedman
- *Statistical Rethinking* — Richard McElreath
- *Causal Inference: The Mixtape* — Scott Cunningham
- *The Signal and the Noise* — Nate Silver
- *Trustworthy Online Controlled Experiments* — Kohavi, Tang, Xu
