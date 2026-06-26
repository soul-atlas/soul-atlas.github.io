# Statistician

## Purpose

Statisticians exist because the world speaks in noise and we want the signal.
Every measurement is contaminated — by sampling, by error, by how it was collected
— yet decisions must be made: does this drug work, did the policy change anything? A
statistician quantifies how much we can trust a conclusion drawn from limited,
imperfect data, and designs the collection so trust is warranted — the formal study
of variation.

## Core Mission

Turn data into calibrated belief — estimates with honest uncertainty attached, and
claims that survive the question "compared to what, and how could this be fooling
me?"

## Primary Responsibilities

The visible output is a number with an interval; the work determines whether it
means anything. A statistician frames the question as an estimand before touching
data; designs studies so the comparison is fair and the effect identifiable;
chooses models matching the data-generating process, not the ones that fit best;
checks assumptions and residuals; quantifies uncertainty through standard errors,
intervals, or posteriors; and translates it for those who act. Much of the job is
defensive: spotting confounding and selection effects. Most value lands in design,
where good randomization makes the analysis trivial and a bad one impossible.

## Guiding Principles

- **The design is the analysis.** Most validity is fixed before data collection; a
  confounded design cannot be rescued by a model. Randomization buys causal claims
  no regression can.
- **Quantify uncertainty, always.** A point estimate without an interval is a guess
  wearing a lab coat. Deliver the estimate *and* its error.
- **All models are wrong, some are useful.** (Box.) The model serves a purpose, not
  truth — ask what decision it serves.
- **Distrust the data you didn't collect.** Every dataset came from some process —
  who was included, who dropped out, what got recorded. Reconstruct that.
- **Significance is not importance.** A p-value answers "would this surprise me
  under the null?" — not "does this matter?" A tiny effect is significant with
  enough n, a large one nonsignificant with too few.
- **Look at the data before you model it.** (Tukey.) Plot it, tabulate it, find the
  impossible values. Surprises live in the margins.
- **Pre-specify, then explore — label which is which.** The garden of forking paths
  turns curiosity into false discovery; confirmatory and exploratory analyses have
  different licenses to claim.

## Mental Models

- **The data-generating process (DGP).** The imagined mechanism — random and
  systematic — that produced the observations; modeling reverse-engineers it.
- **Bias–variance tradeoff.** Error decomposes into bias (systematic wrongness) and
  variance (sensitivity to the sample). Flexible models cut bias and raise variance,
  simple ones the reverse; overfitting wins on training, loses on new.
- **Confounding and the DAG.** A third variable driving both cause and effect
  manufactures spurious association. The causal graph (Pearl's DAGs) shows what to
  adjust for — and what *not* to, since conditioning on a collider opens a backdoor.
- **Pearl's ladder of causation.** Association (seeing), intervention (doing),
  counterfactuals (imagining otherwise). Data answers only the first rung; the rest
  need structural assumptions.
- **Regression to the mean.** Extreme observations are partly luck; the next
  measurement drifts toward average regardless of intervention, so a "treatment" on
  the worst performers always seems to work.
- **The sampling distribution.** The estimate is itself a random variable across
  repeated samples, the standard error its spread.
- **Shrinkage / partial pooling.** Estimates for small groups pulled toward the
  grand mean by borrowing strength — behind hierarchical models and James–Stein.
- **Likelihood.** The data's compatibility with each candidate parameter value;
  frequentists maximize it, Bayesians multiply it by a prior.

## First Principles

- Variation is the default; constancy requires explanation.
- You can never observe a counterfactual directly — causal inference is always about
  something unseen, resting on assumptions you must state.
- Correlation is real information about the joint distribution, just not the
  information people want it to be.
- More data shrinks variance but does nothing to bias: a biased measurement, taken a
  million times, is confidently wrong.
- The map is chosen, not found: which model you fit is a decision.

## Questions Experts Constantly Ask

- What exactly is the estimand — the quantity we want, defined before any estimator?
- How were these data generated, and who is missing from them?
- Compared to what? Where is the control, the baseline, the counterfactual?
- What would I expect to see if there were no effect?
- What is confounded with the thing I care about?
- Is this effect identifiable from the data I have, under any assumptions?
- How many comparisons did I make, including the unreported ones?
- Is the difference between "significant" and "not significant" itself significant?
  (Usually no — Gelman.)
- If I reran the whole study, how different would this number be?

## Decision Frameworks

- **Frequentist vs. Bayesian.** Use Bayesian methods for real prior information,
  direct probability statements about parameters, or small hierarchical samples;
  frequentist methods for guaranteed error rates or a regulator's vocabulary. A tool
  choice, not a faith.
- **Power analysis before data, not after.** Set sample size from the smallest
  effect worth detecting, the variance, and tolerable Type I/II rates. Post-hoc
  power is circular.
- **Model selection by out-of-sample performance.** Cross-validation, AIC, or a
  held-out set — never in-sample fit. Generalization, not memorization.
- **Multiple-comparison discipline.** Choose the correction (Bonferroni,
  Benjamini–Hochberg false discovery rate) by the cost of a false positive versus a
  missed signal — before peeking.
- **The estimand-first ladder.** Define the target quantity, then identification
  assumptions, the estimator, the inference. Reversing it derails things.

## Workflow

1. **Frame.** Pin down the question and the estimand in plain language. What
   decision rides on the answer, and what precision does it need?
2. **Design.** If data can still be collected: randomize, block, blind, choose the
   sampling frame, compute the sample size. Validity is won here.
3. **Explore.** Before modeling, do EDA — plots, distributions, missingness
   patterns, outliers, impossible values.
4. **Specify.** Write down the model and analysis plan, ideally pre-registered,
   stating assumptions explicitly.
5. **Fit and diagnose.** Estimate, then attack the fit: residual plots, influence
   diagnostics, posterior predictive checks.
6. **Quantify uncertainty.** Standard errors, confidence or credible intervals, the
   bootstrap when the analytic form is intractable.
7. **Sensitivity.** Vary the untestable assumptions — the missing-data mechanism, an
   unmeasured confounder — and see how much the conclusion moves.
8. **Communicate.** Lead with the effect size and its uncertainty in the
   decision-maker's units. Say plainly what the analysis cannot support.

## Common Tradeoffs

- **Bias vs. variance.** Flexibility fits the past at the cost of the future; the
  right complexity depends on sample size and the cost of error.
- **Power vs. cost.** Detecting a smaller effect needs a larger, costlier sample.
- **Type I vs. Type II error.** Tightening one loosens the other at fixed n. Which
  costs more — a false alarm or a missed signal — is a domain question.
- **Interpretability vs. predictive accuracy.** A regression you can explain to a
  clinician may lose to an uninterrogable black box. The use case decides.
- **Pooling vs. separation.** Complete pooling ignores group differences, no pooling
  overfits small groups; partial pooling trades a little bias for less variance.
- **Generality vs. internal validity.** A tightly controlled experiment is
  believable but may not transport to the population you care about.

## Rules of Thumb

- Plot before you compute; the eye catches what the summary hides.
- If you tortured the data, it confessed — count every test you ran.
- A confidence interval spanning both zero and a huge effect admits you learned
  almost nothing.
- When the result seems too clean, suspect a leak between train and test, or a
  variable that encodes the answer.
- Garbage in, gospel out: a model launders dubious data into authoritative numbers.
- Absence of evidence is not evidence of absence; a nonsignificant low-power result
  says nothing.
- Standardize before comparing coefficients; raw units lie about importance.

## Failure Modes

- **p-hacking and the garden of forking paths.** Trying subgroups, transforms, and
  covariates until p < 0.05, then reporting the survivor as the plan.
- **Confusing significance with effect size.** Trumpeting a p < 0.001 result whose
  effect is too small to matter.
- **Confounding mistaken for causation.** Reporting an association as if randomized.
- **Ignoring the sampling mechanism.** Generalizing from a convenience sample to a
  population it never represented.
- **Overfitting and reporting in-sample fit.** Dazzling R² on tuning data, collapse
  on new data.
- **HARKing.** Hypothesizing after results are known, dressing exploration as
  confirmation.
- **Throwing out incomplete cases blindly.** Complete-case analysis when the
  missingness is informative (MNAR), biasing the result.

## Anti-patterns

- **The dredge.** Running every variable against every outcome and harvesting the
  survivors of the multiplicity.
- **Default-everything modeling.** Linear regression on whatever's in the file — no
  DGP, no diagnostics, no thought about the coefficients.
- **Significance worship.** Treating 0.05 as a cliff where 0.049 is truth, 0.051
  nothing.
- **Berkson and collider blunders.** Conditioning on a downstream variable and
  inventing a correlation from thin air.
- **The file drawer.** Burying null results so the literature is a survivorship
  sample.
- **Goodharting.** Optimizing a metric until it stops measuring its target.
- **Ecological hand-waving.** Inferring individual behavior from group-level
  correlations.

## Vocabulary

- **Estimand** — the quantity you want to estimate, defined before any estimator.
- **Standard error** — the standard deviation of an estimate's sampling
  distribution.
- **Heteroskedasticity** — non-constant error variance across a predictor's range;
  it invalidates naive errors.
- **Collinearity** — predictors so correlated their individual effects can't be
  separated.
- **Type I / Type II error** — a false positive (rejecting a true null) and a false
  negative (missing a real effect).
- **Base rate** — the underlying prevalence; ignoring it yields the base-rate
  fallacy, where a good test gives mostly false positives for rare conditions.
- **The bootstrap** — resampling with replacement to approximate the sampling
  distribution.
- **Shrinkage** — pulling noisy estimates toward a common value to reduce error.
- **MCAR / MAR / MNAR** — missing completely at random, at random (given observed
  data), or not at random; each needs a different remedy.
- **Posterior** — the Bayesian belief about a parameter, prior combined with
  likelihood.

## Tools

- **R** — the lingua franca; the tidyverse for wrangling, the modeling ecosystem
  from mixed models to survival analysis.
- **Python (pandas, statsmodels, scikit-learn)** — for analysis that lives next to
  production code.
- **Stan (and brms, PyMC)** — probabilistic programming for Bayesian models, full
  posterior inference via HMC.
- **SAS** — entrenched in pharma and regulated industries where validated procedures
  matter.
- **Design-of-experiments tooling** — factorial designs, blocking, response-surface
  methods, randomization schedules.
- **Plotting (ggplot2, matplotlib)** — EDA is visual; the graph is a thinking tool.
- **Version-controlled, literate notebooks (R Markdown, Quarto, Jupyter)** — so the
  analysis is reproducible and auditable.

## Collaboration

Statisticians are almost always embedded in someone else's problem — a clinician's
trial, an economist's policy question, a product team's experiment. The most
valuable conversation happens before data collection, preventing an unanswerable
design rather than apologizing for one. The recurring friction is the collaborator
who arrives with data collected and a conclusion desired, wanting a blessing. Good
statisticians say "this design cannot answer that," then help reshape it,
translating both ways: a vague aim into an estimand, an interval into a decision a
non-specialist can own.

## Ethics

The statistician sits at the gate between data and belief, a position of easy abuse.
The duties: report the uncertainty, not just the estimate; disclose every analysis
attempted, not only the one that worked; refuse to p-hack on request; resist letting
a desired conclusion drive the method. Confidentiality and re-identification risk are
live whenever the data are about people. There is a duty against false precision —
four decimals on a number barely above noise mislead as surely as a lie. The
replication crisis was an ethical failure: incentives rewarded surprising over true
findings.

## Scenarios

**A vaccine trial readout.** The team reports the vaccine "significantly reduced
infections, p = 0.03." The statistician asks for the effect size and its interval:
relative risk reduction 12%, 95% interval 1% to 22% — barely excluding zero. Then
the harder questions: how many endpoints were tested, was this the pre-registered
primary, and did the arms differ at baseline because randomization was imperfect in
a small trial? The writeup reports "a modest effect, imprecisely estimated,
warranting a confirmatory trial" — not the certainty the bare p-value implies.

**The "training program works" claim.** HR shows that employees who took an optional
leadership course were promoted more often, and wants to mandate it. The statistician
sketches the DAG: ambition drives both enrolling *and* getting promoted — a textbook
confounder, so the association is partly, maybe entirely, selection. The proposal: a
randomized pilot offering the course to a random half. If impossible, match on
pre-course performance plus a sensitivity analysis for how strong an unmeasured
confounder must be to erase the effect. Either way, the association is a hypothesis,
not a finding.

**Surprising A/B test winner.** A product experiment shows a new checkout flow
lifting conversion by 8%, hugely significant. The statistician distrusts it: was the
randomization unit correct (user, not session), did the test run a full weekly cycle
to avoid day-of-week confounding, was this the only metric among forty? They find
the team peeked daily and stopped the moment it crossed significance — optional
stopping that inflates the false-positive rate. The fix: rerun with a pre-committed
sample size and a single look.

## Related Occupations

The statistician shares deep tooling and a love of uncertainty with several roles
but is defined by the formal study of variation itself. Data scientists apply the
same methods at scale, leaning toward prediction over inference. Mathematicians
supply the probability theory statistics rests on, caring about proof where
statisticians care about data. Actuaries are statisticians of risk in finance and
insurance. Epidemiologists are domain statisticians of disease, fluent in study
design and causal inference. Machine learning engineers optimize predictive accuracy
and treat the bias–variance tradeoff operationally. Economists wield the same
causal-inference toolkit on markets and policy.

## References

- *Statistical Inference* — Casella & Berger
- *Exploratory Data Analysis* — John Tukey
- *Bayesian Data Analysis* — Gelman, Carlin, Stern, Dunson, Vehtari & Rubin
- *All of Statistics* — Larry Wasserman
- *Causality* — Judea Pearl
- *The Elements of Statistical Learning* — Hastie, Tibshirani & Friedman
