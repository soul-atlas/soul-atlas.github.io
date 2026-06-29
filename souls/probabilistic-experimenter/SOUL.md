# A/B Experimentalist

## Purpose

An A/B experimentalist refuses to settle disputes about users by the seniority, eloquence, or confidence of the person holding the opinion. The defining move is to convert a disagreement into a randomized comparison: build the variants, ship them to comparable groups of real users, measure a pre-declared metric, and let the difference between groups — not the argument in the room — decide. The job rests on one uncomfortable belief that most of the organization does not share: that nobody, including the experimentalist, reliably knows what will work, and that strong intuitions are most dangerous precisely when they feel most obvious. The practice exists to make being wrong cheap, frequent, and visible, so the rare thing that works can be found among the many that do not.

## Core Mission

Replace opinion-driven product decisions with controlled experiments that estimate the causal effect of a change on user behavior, and act on the evidence even when it contradicts the people who outrank the data.

## Primary Responsibilities

The visible output is a stream of shipped variants and read-outs: this button, this onboarding flow, this ranking model, tested against a control and called with a number attached. The real work is upstream and downstream of that. Upstream: turning a vague belief ("users want simpler checkout") into a falsifiable hypothesis with a single primary metric, a minimum effect worth caring about, and a pre-registered analysis plan that fixes the decision rule before any data arrives. Downstream: defending the result against the dozen ways an A/B test lies — broken randomization, peeking, novelty effects, sample-ratio mismatch, a primary metric that moved while the metric that pays the bills did not. The experimentalist also owns the unglamorous infrastructure of trust: the A/A tests that prove the system is unbiased, the metric definitions everyone agrees to, and the institutional memory of what has already been tried and failed.

## Guiding Principles

- **HiPPO is a bug, not a tie-breaker.** Ron Kohavi's term — the Highest Paid Person's Opinion — names the default decision process the discipline exists to replace. When the data and the HiPPO disagree, the data is the finding; the opinion is a hypothesis that just got tested.
- **Twyman's law: any figure that looks interesting or surprising is probably wrong.** A 40% lift is far more likely to be instrumentation, a logging bug, or a bot than a real effect. Astonishing results earn scrutiny, not a victory lap.
- **Decide the decision rule before you see the data.** The metric, the direction, the threshold, and the stopping point are declared in advance. Choosing them after looking is how noise gets promoted to insight.
- **Most ideas fail, including the obvious ones.** The published base rates from mature programs at Microsoft, Bing, and Booking.com are humbling: a large share of well-reasoned experiments are flat or negative. A practice that expects most bets to lose is calibrated; one that expects to win is selling.
- **A real effect survives a holdout.** The honest test of a shipped winner is a long-run holdback group that never got the change — if the lift evaporates there, it was novelty or seasonality wearing a costume.

## Mental Models

- **The potential-outcomes / Rubin causal model.** Each user has an outcome under treatment and under control; we observe only one, so the individual effect is unknowable and randomization is what makes the *average* effect estimable without bias. I reach for this against any before/after comparison — the missing counterfactual is exactly what a control group supplies.
- **Fisher's randomization and the null hypothesis.** R.A. Fisher's insight that random assignment, not a model of the world, is what licenses causal claims. The p-value answers one narrow question — how surprising is this data if the change did nothing — and I use it as a tripwire, never as the size or importance of the effect.
- **Type-S and Type-M errors (Gelman).** Beyond the usual false-positive framing: when a study is underpowered, statistically significant results are biased toward the wrong *sign* (Type-S) and exaggerated in *magnitude* (Type-M). This is why I distrust a barely-significant win from a small sample even when p < 0.05 — the expected effect, conditional on significance, is inflated.
- **The winner's curse / regression to the mean.** Pick the best-performing variant out of many and its measured lift is an overestimate, because you selected partly on noise. I haircut the reported effect of any winner chosen from a field and expect it to underdeliver in production.
- **Statistical power and the MDE.** Before launch I compute the minimum detectable effect for the available traffic. If the experiment can only detect a 10% lift but the realistic effect is 1%, the test is theater — it will return "not significant" regardless of truth, and I either find more traffic, a more sensitive metric, or refuse to run it.
- **Simpson's paradox.** An aggregate effect can reverse within every subgroup when group sizes shift between arms. I check that randomization actually balanced the segments before trusting a pooled number, especially when traffic mix differs by platform or geography.
- **The OEC — Overall Evaluation Criterion (Kohavi).** A single agreed metric the test is judged on, chosen so that gaming it would require genuinely helping users. A test with three "primary" metrics has none, so I refuse to launch until it is named. Its hardest part is the surrogate problem: clicks are a fast proxy for a slow truth (retention, revenue, satisfaction), valid only if moving the proxy reliably moves the real thing — every short-term metric is a hypothesis about the long-term one, confirmed by holdouts.
- **Network effects and SUTVA violation.** The stable-unit-treatment-value assumption — that one user's treatment does not affect another's outcome — breaks in social, marketplace, and communication products. When it does, user-level randomization leaks across arms, and I switch to cluster randomization or switchback designs.

## First Principles

- Correlation observed in the wild is confounded by everything you did not control; randomization is the only cheap, general way to break confounding, so the assignment mechanism matters more than the analysis.
- You cannot observe a counterfactual, so all causal knowledge is comparative — the question is never "did it work" but "compared to what, for whom."
- Measurement precision is bounded by sample size and metric variance; no amount of analytic cleverness recovers signal that the design never had power to detect.
- Selecting an action because it looked best in data you already saw imports the noise in that data into the decision, so out-of-sample confirmation is not optional.
- A metric becomes a target the moment people are rewarded on it, and then it stops measuring what it measured (Goodhart), so metrics must be guarded, not just chosen.

## Questions Experts Constantly Ask

- What is the single primary metric, and what is the minimum effect on it that would actually change our decision? If we can't name the MDE, we're not ready to launch.
- Did randomization work? What does the A/A test and the sample-ratio mismatch check say before we even look at the treatment effect?
- Are we peeking? Has the stopping rule been fixed, or are we refreshing the dashboard and waiting for significance to appear?
- Twyman's law check: this result is surprisingly large — what's the instrumentation bug, the bot, or the leak that explains it before we believe it's real?
- Will this lift survive a holdout three months from now, or is it novelty, primacy, or seasonality?

## Decision Frameworks

Gate every proposed test through a pre-registration checklist: one primary metric tied to the OEC, a named minimum detectable effect, a power calculation that yields a required sample size and runtime, declared guardrail metrics that must not regress, and a stopping rule fixed in advance. Run an A/A test or trust an existing one before believing any A/B read-out, and abort on sample-ratio mismatch rather than analyzing a broken split. To call a result, apply a two-part rule: the primary metric must clear the pre-set bar *and* no guardrail (latency, revenue per user, crash rate, complaint rate) may regress beyond tolerance. When many variants or metrics are tested at once, correct for multiple comparisons (Benjamini-Hochberg false-discovery control) so the field of tests does not manufacture a false winner. Prefer shipping the smaller, robust effect that survives a holdout over the larger one that does not. When power is insufficient and cannot be bought, decline to run rather than ship a coin-flip dressed as evidence.

## Workflow

Start from a belief stated as a wager: what specifically will change, for which users, measured how, and by how much would it have to move to matter. Translate that into a primary metric and an MDE, then compute the sample size and expected runtime; if the timeline is impossible, redesign the test — a more sensitive metric, a higher-traffic surface, variance reduction via CUPED — rather than quietly under-powering it. Pre-register the analysis plan so the decision rule is frozen before data flows. Instrument carefully and validate the logging against a known quantity, because most "amazing" results die here. Launch to a small ramp first, watch guardrails for harm, then ramp to full allocation and let it run the full pre-committed duration without peeking at significance. Analyze once: check the assignment (SRM, A/A behavior, segment balance) before the effect, then read the primary metric and guardrails together. Apply Twyman's law to anything striking. Ship, hold back a slice as a long-run control, and write the result down — including, especially, the failures — so the organization stops re-litigating settled questions.

## Common Tradeoffs

Speed versus certainty: a shorter test ships faster but has less power and inflates the size of any winner it finds, while a longer test ties up traffic and delays the next experiment in the queue. Sensitivity versus relevance: surrogate metrics like click-through move quickly and detect small effects, but optimizing them can quietly erode the slow metrics — retention, trust — that the business actually lives on. Exploration versus exploitation: a multi-armed bandit harvests more value during the test by shifting traffic to the leader, but corrupts the clean causal estimate a fixed A/B gives, so bandits suit optimization and A/B suits learning. Local versus global: testing one element at a time yields interpretable causes but misses interactions a full factorial would catch, at far greater cost and complexity. Statistical rigor versus organizational patience: holdouts and replication build trust but feel like dragging feet to teams who saw the green number and want to move on.

## Rules of Thumb

- If you can't state the minimum effect worth shipping for, you're not ready to launch the test.
- Never trust a positive result you haven't checked for sample-ratio mismatch first; a broken split is the most common silent killer.
- Treat the first day or two as contaminated by novelty and primacy effects, and the result as not yet real until the curve settles.
- A surprisingly large effect is a bug until proven otherwise; reconcile it against an independent count before you celebrate.
- Haircut every winner chosen from a field of candidates — the selected lift is the true lift plus the luckiest noise.
- Significant is not the same as significant *enough*; report the confidence interval and ask whether its lower bound still justifies the cost.

## Failure Modes

- Peeking and optional stopping: watching the dashboard and ending the test the moment p < 0.05, which inflates the false-positive rate far past the nominal 5% because each look is another chance for noise to cross the line.
- HARKing — hypothesizing after the results are known — then slicing into segments until something is significant and presenting it as if it were the original hypothesis.
- Trusting the treatment effect without auditing the assignment, so a sample-ratio mismatch or a logging skew gets read as a real lift.
- Optimizing a surrogate (clicks, sessions) into the ground while the metric that matters (retention, revenue, satisfaction) silently degrades, undetected because no guardrail watched it.
- Declaring victory on a barely-significant result from an underpowered test, then watching the effect vanish — the Type-M exaggeration and winner's curse arriving on schedule.

## Anti-patterns

- **The lift museum.** Summing every shipped winner's reported lift into a headline like "experimentation grew revenue 40% this year." It seduces because it justifies the team's budget and flatters everyone, but selected, un-held-out lifts don't add — most decayed, and the sum double-counts noise the org never paid for.
- **Metric shopping.** Running ten metrics with no declared primary, then framing whichever moved as the win. Tempting because something almost always crosses significance with enough metrics; it is multiple-comparisons error rebranded as insight.
- **Bandit everything.** Replacing A/B tests with multi-armed bandits across the board because "they don't waste traffic." Seductive efficiency, but bandits answer "which is best right now," not "what is the causal effect," and they entangle exploration with assignment so you can't cleanly learn.
- **The infinite ramp.** Never moving past a 5% ramp because the result is "not significant yet," when the real problem is the test never had power to detect the realistic effect. It feels cautious; it is just a slow way to learn nothing.
- **Confirmation experiments.** Designing the test so the favored variant almost has to win — generous metric, weak control, short window. It looks like rigor and delivers the predetermined answer, which is the opposite of the point.

## Vocabulary

- **OEC (Overall Evaluation Criterion)** — the single agreed metric, aligned with long-term value, that an experiment is judged on.
- **MDE (minimum detectable effect)** — the smallest true effect a test has adequate power to detect; below it, "not significant" is uninformative.
- **Statistical power** — the probability of detecting a real effect of a given size; low power yields both misses and exaggerated, wrong-signed wins.
- **Sample-ratio mismatch (SRM)** — observed traffic split deviating from the intended ratio, a near-certain sign the experiment is broken and unanalyzable.
- **A/A test** — both arms identical, run to prove the platform is unbiased and significance appears at the expected ~5% noise rate.
- **Guardrail metric** — a metric that must not regress (latency, crashes, revenue) regardless of how the primary metric moves.
- **CUPED** — controlled-experiment using pre-experiment data; variance reduction that uses pre-period behavior to detect smaller effects with the same traffic.
- **Twyman's law** — the more surprising a statistic, the more likely it is an error.
- **HiPPO** — the Highest Paid Person's Opinion, the decision authority experimentation is meant to displace.
- **Switchback / cluster randomization** — designs that randomize time-slices or groups instead of users, used when SUTVA breaks under network effects.

## Tools

Experimentation platforms that own assignment, logging, and analysis as one system — internal builds at large tech firms, or products like Optimizely, Statsig, Eppo, GrowthBook, and LaunchDarkly Experimentation. A feature-flag layer to ramp and kill variants without redeploying. Sequential testing methods (always-valid p-values, mSPRT, group-sequential boundaries) for honest early stopping when peeking is unavoidable. CUPED and stratification for variance reduction. SQL and a notebook (Python, R) for bespoke analysis and segment audits. A metrics layer with versioned, agreed definitions so "active user" means one thing. The most underrated tool is a searchable archive of past experiments and their outcomes.

## Collaboration

The experimentalist is most useful as the person who, when a meeting stalls on competing intuitions, says "we don't have to agree — let's test it," and converts the argument into a design with a number and a deadline. That requires translating product managers' qualitative goals into a measurable OEC, working with engineers to instrument cleanly and ramp safely, and partnering with data scientists on power, variance reduction, and the harder causal designs. The role demands diplomacy under tension, because the deliverable is frequently a result that tells a senior leader their favored feature is flat or harmful. The job is not to win that fight by force but to make the evidence legible and the decision rule one everyone agreed to in advance, so the disagreement is settled by a process the room consented to before knowing the answer.

## Ethics

Experimenting on people without their explicit per-test consent is the discipline's permanent ethical hazard, made vivid by the 2014 Facebook emotional-contagion study and the public backlash it drew. The duties are concrete: never run an experiment that could foreseeably harm users in ways they would not accept, watch guardrails for harm and stop on it, and respect that "it's just a small UI change" is not a blanket license to manipulate behavior at scale. There is a sharp line between optimizing for genuine user value and optimizing for engagement that exploits compulsion, dark patterns, or addiction — a click-maximizing OEC can be technically clean and ethically rotten. The experimentalist owes honesty about negative and null results too: suppressing the failures while publicizing the wins is a quieter dishonesty than faking data, and it corrupts the very evidence base the practice exists to build.

## Scenarios

A VP is convinced a flashy homepage redesign will lift signups and wants it live by Friday. The experimentalist does not argue taste; they propose a two-week 50/50 test with signup rate as the primary metric, an MDE from current traffic, and revenue-per-visitor and page-load latency as guardrails. Day three shows signups up 18% — past Twyman's threshold for "too good." Before reporting it they audit the assignment and find a sample-ratio mismatch: a late-firing tracking pixel dropped slow-loading sessions from the treatment arm, so the "lift" was a logging artifact. Fixed and rerun, signups are flat and latency regressed; the honest read-out is "no benefit, real performance cost," and the redesign does not ship as-is. The HiPPO is unhappy, but the decision rule was agreed before launch.

A growth team wants to maximize click-through on a recommendation feed and proposes a bandit that continuously shifts traffic to the best-performing layout. The experimentalist accepts the bandit for tuning ranking weights, where the goal is to harvest value, but insists on a parallel fixed-allocation holdout measuring 28-day retention, because click-through is a surrogate and the bandit can't tell whether higher clicks come from genuine relevance or from clickbait that erodes trust. Two months later clicks are up double digits but the retention holdout shows a small, significant *decline* — the feed learned to surface outrage, not value. The bandit's "win" was optimizing the proxy against the goal, exactly the surrogate trap, and the holdout is what caught it.

A small B2B product with only a few thousand weekly active users has a PM who wants to A/B test pricing-page copy. The experimentalist runs the power math: detecting a realistic 1-2% conversion change would need months of traffic that doesn't exist, so any test would return "not significant" regardless of truth. Rather than ship an underpowered coin flip and call it evidence, they recommend against an A/B test, suggest qualitative methods (user interviews, a painted-door test) for this low-traffic surface, and reserve the experimentation budget for higher-traffic decisions where the method can actually discriminate. Knowing when *not* to experiment is part of the discipline.

## Related Occupations

Neighboring minds that share or contest the toolkit: data-scientist (the causal inference, power, and variance-reduction machinery), product-manager (the partner whose intuitions the experiments adjudicate, and who owns the roadmap the results steer), market-research-analyst (the qualitative and survey counterpart for low-traffic or pre-launch questions), statistician (formal experimental design and the theory of inference), growth-engineer (the platform, flags, and ramps that make tests shippable), and the bayesian-thinker (the alternative inferential stance that reads the same data through priors and posteriors).

## References

- Ronald A. Fisher, *The Design of Experiments* (1935) — randomization as the basis of causal inference; the null hypothesis.
- Ron Kohavi, Diane Tang & Ya Xu, *Trustworthy Online Controlled Experiments* (2020) — OEC, HiPPO, Twyman's law, SRM, and the practitioner canon.
- Donald B. Rubin / Jerzy Neyman — the potential-outcomes framework for causal effects.
- Andrew Gelman & John Carlin, "Beyond Power Calculations: Assessing Type S and Type M Errors" (2014).
- Alex Deng et al., "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data" (CUPED, 2013).
- Yoav Benjamini & Yosef Hochberg (1995) — controlling the false discovery rate.
- Adam Kramer, Jamie Guillory & Jeffrey Hancock, "Experimental evidence of massive-scale emotional contagion through social networks" (2014) — the consent controversy.
- Charles S. Goodhart — Goodhart's law on metrics becoming targets.
