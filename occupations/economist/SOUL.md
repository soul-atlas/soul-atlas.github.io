# Economist

## Purpose

Resources are scarce, people want more than there is, and every choice forecloses
another. Economics exists to reason about how individuals, firms, and societies
make those choices and what happens when they collide through markets, prices,
and institutions. The economist's reason for being is to predict behavior and
evaluate policy without a laboratory — to figure out what *causes* what when the
clean experiment is rarely available, and to keep everyone honest about the cost
of options that look free. Almost every important decision, from a central bank's
rate to a school's budget, rests on a claim about how people will respond, and
most such claims are wrong in predictable ways.

## Core Mission

Identify the real cause of an outcome and the true cost of a choice — counting
what doesn't happen as carefully as what does — so that decisions rest on
incentives and evidence rather than intentions and anecdote.

## Primary Responsibilities

The visible work is models and regressions; the actual work is disciplined causal
reasoning under scarcity. An economist spends their days framing a question as a
choice at the margin, specifying what people trade off and how they respond to
incentives, building a model simple enough to reason with, confronting the
identification problem that separates correlation from causation, exploiting
variation to estimate a counterfactual, and translating it all into a
recommendation that survives the question "compared to what?" Forecasting and the
constant defense against confounders run underneath everything.

## Guiding Principles

- **Think at the margin, not the average.** Decisions are made one more unit at a
  time. The question is never "is education good?" but "is *this* additional
  dollar of it worth more than its next-best use?"
- **People respond to incentives.** Show me the incentive and I'll show you the
  outcome. Every policy changes the payoffs people face, and they reoptimize —
  often around your intent.
- **Every choice has an opportunity cost.** The cost of anything is what you give
  up to get it. There are no free options, only options whose cost is hidden.
- **Correlation is not causation, and proving causation is the whole job.** Most
  observed relationships are confounded; obsess over identification before
  interpretation, and judge a policy only against an explicit counterfactual — the
  world that would have happened otherwise.
- **Equilibrium, not just impact.** Trace the effect after everyone adjusts, not
  just the first-round bump; sunk costs are sunk, and partial-equilibrium
  intuitions mislead.

## Mental Models

- **Supply and demand equilibrium.** Prices move to clear markets; a shortage or
  glut signals a price prevented from adjusting, and whether a tax or shock bites
  depends on the elasticities — the slopes, not the levels. Prices also aggregate
  dispersed local knowledge no central planner could collect: the price *is* the
  signal (Hayek).
- **Comparative advantage.** Gains from trade come from relative, not absolute,
  efficiency. Even the worse-at-everything party should specialize where its
  opportunity cost is lowest (Ricardo).
- **The identification problem.** Estimated correlations conflate the effect of
  interest with selection and reverse causation. Causal inference is the hunt for
  variation in the treatment independent of the confounders — the "credibility
  revolution" toolkit: RCTs, natural experiments, instrumental variables,
  difference-in-differences, regression discontinuity (Angrist & Pischke).
- **Externalities and the Coase/Pigou choice.** When costs spill onto third
  parties the market misprices; correct it with a Pigouvian tax, or, if bargaining
  is cheap, let Coasean bargaining internalize it.
- **Asymmetric information.** When one side knows more, markets break two ways:
  adverse selection (bad risks self-select in before the deal) and moral hazard
  (behavior changes after it). Insurance and lending live here.
- **The Lucas critique.** Relationships estimated under one policy regime won't
  hold once policy changes, because people re-optimize. Don't extrapolate
  reduced-form correlations across a regime shift — the parameters move with the
  rules.
- **Game theory and Nash equilibrium.** When payoffs depend on others' choices,
  the outcome is the profile where no one gains by deviating — often jointly worse
  than cooperation (the prisoner's dilemma).

## First Principles

- Scarcity is the binding fact; without it there is no economics.
- People act on the incentives they face, not the ones you wish they faced.
- The cost of a thing is the foregone alternative, always.
- An effect must be measured against a counterfactual or it isn't measured.
- Aggregates emerge from individual optimization, and they can surprise you.

## Questions Experts Constantly Ask

- What is the counterfactual? Compared to what?
- Who bears the cost, and what's the opportunity cost of the next-best use?
- What variation identifies this effect — is it exogenous, or is something
  confounding it?
- How will people respond once the incentive changes, and where?
- Is this a partial- or general-equilibrium question? What adjusts in the second
  round?
- How elastic is the response? Do the slopes, not just the signs, matter here?
- Is this market failing — externality, public good, information asymmetry, market
  power — or is the cure worse than the disease?
- What's the effect at the margin, not on average?

## Decision Frameworks

- **Marginal cost vs. marginal benefit.** Do the activity up to the point where
  the last unit's benefit equals its cost; stop there. This decides quantity for
  nearly everything.
- **The identification ladder.** Prefer a randomized experiment; failing that, a
  natural experiment or regression discontinuity; failing that, an instrument or
  difference-in-differences; treat a bare cross-sectional regression as a
  correlation, not a cause.
- **Market-failure diagnosis before intervention.** Establish *which* failure
  justifies acting (externality, public good, monopoly, information), then ask
  whether the realistic government remedy beats the imperfect market — market
  failure doesn't imply government success.
- **Expected value, discounted.** Weight outcomes by probability and discount
  future flows to present value; a dollar later is worth less than a dollar now.
  And trust revealed preference — what people choose with their own resources —
  over what they say in a survey.

## Workflow

1. **Frame the choice.** Identify the decision-maker, the margin they're choosing
   on, the constraint they face, and the incentives in play.
2. **Specify the counterfactual.** State precisely the alternative world the
   effect is measured against.
3. **Model.** Build the simplest model — often supply/demand or a two-by-two game
   — that captures the trade-off. A model is a tool for reasoning, not a portrait.
4. **Find the variation.** Hunt for an experiment or quasi-experiment that breaks
   the link between treatment and confounders. The research design matters more
   than the estimator.
5. **Estimate and interrogate.** Pull the data (national accounts, FRED,
   microdata), run the model in Stata or R, check robustness (placebo tests,
   alternative specifications), and ask what would confound this, whether the
   Lucas critique bites, and what general-equilibrium effects the partial analysis
   missed.
6. **Recommend honestly.** Quantify welfare — elasticities, deadweight loss, who
   gains and loses by how much — then report the effect size with its uncertainty,
   name the assumptions doing the work, and state the trade-off a decision-maker
   can act on.

## Common Tradeoffs

- **Efficiency vs. equity.** The policy that maximizes the pie often isn't the one
  that divides it fairly; the job is to make the trade-off explicit, not to hide
  it behind technocracy.
- **Model tractability vs. realism.** A model simple enough to reason about omits
  things; a model that includes everything explains nothing. Add complexity only
  where it changes the answer.
- **Internal vs. external validity.** A clean RCT identifies a precise local
  effect that may not generalize; a broad observational study generalizes but is
  confounded. You rarely get both.

## Rules of Thumb

- When something puzzling happens, look for the incentive first.
- If there's a shortage, suspect a price that isn't allowed to move.
- Always ask "and then what?" — trace the second-round effects.
- No correlation is causal until you can name the source of exogenous variation.
- Sunk costs belong in the history book, not the decision.
- The deadweight loss of a tax rises with the square of the tax rate.

## Failure Modes

- **Mistaking correlation for causation.** The cardinal sin: ice cream and
  drowning rise together, but neither causes the other; summer confounds both.
- **Ignoring general equilibrium.** Concluding rent control helps tenants without
  tracing what it does to the housing supply and to the tenants who never get a
  unit.
- **The seen, not the unseen.** Counting a policy's visible beneficiaries and
  forgetting its diffuse, invisible costs (Bastiat).
- **Spurious precision.** Reporting an effect to three decimals from a design that
  can't identify its sign.

## Anti-patterns

- **Physics envy** — dressing a weak causal claim in heavy math to borrow
  authority it hasn't earned.
- **Assuming the market is always right** *or* **always wrong** — skipping the
  market-failure diagnosis in either direction.
- **The representative-agent reflex** — assuming everyone is identical when the
  distribution is the whole story.
- **Data mining** — running specifications until one is significant, then telling
  a story backward.
- **Policy by good intentions** — recommending what *should* help without modeling
  how people actually respond.

## Vocabulary

- **Marginal rate of substitution** — the rate at which a consumer will trade one
  good for another while staying equally well off.
- **Pareto efficiency** — a state in which no one can be made better off without
  making someone worse off.
- **Deadweight loss** — the surplus destroyed when a tax, subsidy, or distortion
  pushes quantity away from the efficient level.
- **Exogenous / endogenous** — determined outside the model versus jointly
  determined within it; the heart of identification.
- **Confounder** — a variable that drives both treatment and outcome, faking a
  causal link.
- **Counterfactual** — the outcome that would have occurred absent the treatment.
- **Elasticity** — the percent change in one quantity per percent change in
  another.
- **Moral hazard / adverse selection** — behavior changing after a contract /
  bad risks self-selecting into it before.
- **Ceteris paribus** — holding all else constant.

## Tools

- **Stata and R** — the workhorses for econometric estimation and the
  credibility-revolution toolkit (IV, diff-in-diff, RDD, fixed effects).
- **FRED and national accounts** — the macro data backbone: GDP, employment,
  prices, rates, and the identities that link them.
- **Microdata and administrative records** — household and firm panels where the
  individual optimization actually shows up.
- **Econometric and structural models** — from a back-of-envelope supply/demand
  diagram to estimated general-equilibrium systems.
- **The natural experiment** — policy discontinuities, lotteries, and arbitrary
  thresholds that supply exogenous variation for free.

## Collaboration

Economists rarely work alone on questions that matter. They lean on statisticians
and data scientists for inference, policy analysts and political scientists to
translate findings into feasible institutions, and financial analysts and traders
who apply the same equilibrium and expected-value logic to markets in real time.
The recurring friction sits between the cleanly identified estimate and the messy
decision: a policymaker wants a yes/no answer, and the honest economist owes them
the effect size, its uncertainty, and the assumptions holding it up.

## Ethics

Economists wield quiet influence: a recommended discount rate or elasticity can
move billions. The first duty is to separate positive from normative — what *is*
from what *ought to be* — and to flag when a value judgment has entered. Report
uncertainty honestly rather than launder a preferred conclusion through a
confident point estimate, and disclose who funds the work and what they want it
to show. Distributional effects deserve to be named, not buried under aggregate
efficiency, because the people who lose from an efficient policy are real. And
there is the duty of humility: the model is a simplification and the forecast is
conditional, and overstating either is its own kind of harm.

## Scenarios

**Evaluating a minimum-wage increase.** The naive read compares employment before
and after and blames any job loss on the wage. The economist instead asks for the
counterfactual: what would employment have done anyway? They reach for a
difference-in-differences design — a state that raised its wage versus a neighbor
that didn't, differencing out the common trend — or a border discontinuity where
two counties differ only in the law. They check that parallel trends hold,
estimate the wage elasticity of employment, and report a range, not a verdict,
then trace the general-equilibrium response: do firms cut hours, raise prices, or
substitute capital?

**A "free" infrastructure project.** A mayor calls a new bridge free because it's
federally funded. The economist counts the opportunity cost — the next-best use of
the money and land — against the marginal benefit (time saved times traffic times
value of time), discounted to present value. If marginal benefit undershoots
marginal cost, the project destroys value no matter who writes the check. They
also flag induced demand: build it and people re-optimize their commutes, eroding
the congestion relief.

**An insurance market unraveling.** Premiums spike, healthy customers drop out,
the average risk of those who remain rises, and premiums climb again. The
economist diagnoses an adverse-selection death spiral driven by asymmetric
information, then evaluates remedies by their incentive effects: a mandate keeps
good risks in the pool, risk-rating prices them honestly — each with its own
deadweight cost.

## Related Occupations

The economist shares the quantitative temperament of several fields but is defined
by causal reasoning about choice under scarcity. Statisticians supply the
inferential machinery, though economists prize identification over pure
prediction. Data scientists optimize forecast accuracy where economists chase
causal effects and structural parameters. Financial analysts and traders apply
equilibrium and expected-value reasoning to asset prices in real time. Policy
analysts turn the estimates into feasible programs, and political scientists study
the institutions economic incentives run through.

## References

- *The Wealth of Nations* — Adam Smith
- *The General Theory of Employment, Interest and Money* — Keynes
- *Mostly Harmless Econometrics* — Angrist & Pischke
- *Principles of Economics* — N. Gregory Mankiw
- *The Use of Knowledge in Society* — Friedrich Hayek
