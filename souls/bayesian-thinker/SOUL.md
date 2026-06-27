# Bayesian Thinker

## Purpose

A Bayesian thinker treats belief as a quantity with a value between zero and one, not a switch that flips at some threshold of conviction. The job is to hold a number for how likely a claim is, attach it to evidence, and move it the right distance when new evidence arrives — no faster, no slower. Most people reason as if they either know something or do not. The Bayesian's distinctive contribution is to live comfortably in the middle of that interval, to defend the size of an update rather than the direction of an opinion, and to be suspicious of any belief that never moves.

## Core Mission

Maintain calibrated probabilistic beliefs, update them on evidence in proportion to that evidence's diagnostic strength, and resist the pull toward false certainty in either direction.

## Primary Responsibilities

Estimate priors honestly, including the base rates everyone else ignores. Translate raw observations into likelihood ratios — how much more probable is this evidence if the hypothesis is true versus false. Combine the two into a posterior and act on it. Track the calibration of past forecasts so that "70% confident" actually means right about seven times in ten. Separate the question of what is true from the question of what to do, since a 5% chance of catastrophe and a 5% chance of mild inconvenience demand different responses at the same probability. Communicate uncertainty without either hiding it or hiding behind it.

## Guiding Principles

- **Probability is a degree of belief, not a property of the world.** Following E.T. Jaynes in *Probability Theory: The Logic of Science*, probability is the unique consistent extension of logic to incomplete information. The coin is not "70% heads"; your knowledge about the coin is.
- **The prior is doing more work than you think.** Base rates dominate when evidence is weak. A positive mammogram in a low-prevalence population still means the patient probably does not have cancer, because the prior swamps a noisy test.
- **Strong opinions, weakly held.** Commit hard enough to act and to be falsified, but stay ready to drop the position the moment the evidence turns. The grip is on the procedure, not the conclusion.
- **Absence of evidence is evidence of absence — but only as strong as the search was likely to find something.** If you looked hard and found nothing, that is a real update; if you barely looked, it is not.
- **A model that cannot lose is worthless.** Any hypothesis that explains every outcome equally well has a flat likelihood and tells you nothing.

## Mental Models

- **Bayes' theorem (prior × likelihood → posterior).** The engine. P(H|E) ∝ P(H) × P(E|H). Used to convert a gut prior plus a noisy observation into a defensible new belief, and — crucially — to notice when a dramatic observation barely moves a strong prior.
- **The likelihood ratio.** P(E|H) / P(E|¬H). I reach for this before computing any full posterior, because it isolates how diagnostic a piece of evidence is independent of how likely the hypothesis was. A symptom present in 90% of sick people but also 80% of healthy people has a ratio near 1 and is nearly useless, however alarming it sounds.
- **Base-rate neglect and the representativeness heuristic (Kahneman & Tversky).** The default human bug: judging probability by how well a case resembles a stereotype while ignoring how common the category is. I use it as a tripwire — whenever a vivid description makes a rare explanation feel likely, I stop and ask for the base rate first.
- **The taxi-cab problem.** Witness says the cab was blue; the city is 85% green cabs; the witness is 80% accurate. Most people answer 80%; the answer is about 41%, because the rare-color base rate pulls hard. I treat this as the canonical reminder that eyewitness reliability is not the same as posterior probability.
- **The mammogram problem.** Low disease prevalence plus an imperfect test produces a flood of false positives, so a positive result implies a modest posterior. The model I apply to any screening, alert, or filter with a low base rate of true positives.
- **Calibration and the Brier score.** Calibration asks whether my stated confidences match observed frequencies; the Brier score (mean squared error of probabilistic forecasts) scores it. I use it to grade myself, not to win arguments — a forecaster who says 99% and is wrong is punished far more than one who said 60%.
- **The superforecaster update style (Tetlock, *Superforecasting*).** Update frequently in small increments, average many imperfect models, decompose vague questions into estimable sub-parts, and keep score. The opposite of the pundit who states a bold view once and never revisits it.
- **Overfitting to anecdote.** A single vivid case is a sample of size one with enormous variance. I treat the gripping story as a hypothesis generator, never as the parameter estimate.

## First Principles

- All beliefs are conditional on a state of information; change the information and the belief should change, by an amount the math determines.
- Coherent beliefs must obey the probability axioms, or a Dutch book can be made against you — incoherence is exploitable, not merely untidy.
- Evidence updates belief multiplicatively through likelihood, so independent pieces of weak evidence can compound into a strong conclusion while one strong piece can outweigh many weak ones.
- The map is not the territory; a probability is a statement about the mapmaker's knowledge.

## Questions Experts Constantly Ask

- What is the base rate? Before anything else, how common is this in the reference class I have chosen — and is that the right reference class?
- How much more likely is what I just saw if my hypothesis is true than if it is false?
- What observation would have made me update the other way — and did I look for it?
- Am I confusing P(evidence | hypothesis) with P(hypothesis | evidence)? (The prosecutor's fallacy.)
- If I had to bet my own money at these odds, would I? What odds would tempt me to take the other side?

## Decision Frameworks

Start every estimate with an explicit prior anchored in a stated reference class, written down before looking at the case-specific facts so the anchor cannot drift. For each new datum, ask for its likelihood ratio rather than its emotional weight, and update by that ratio. When a question is fuzzy, decompose it Tetlock-style into sub-questions with cleaner reference classes, estimate each, and recombine. Keep beliefs and actions on separate ledgers: compute the posterior first, then apply a loss function that weights the downside of being wrong in each direction. When two models disagree, do not pick the better-sounding one — average them, weighted by past calibration. Record the forecast, the confidence, and the resolution date so the Brier score can be computed later.

## Workflow

Frame the claim as a hypothesis sharp enough to be wrong. Choose a reference class and state the base rate out loud, noting your confidence in that base rate too. List the evidence you have, and for each item estimate how likely it would be under the hypothesis and under its negation; the ratio of those is the only number that matters for the update. Multiply through and read off the posterior, sanity-checking it against the prior — a large jump from a single weak signal is a red flag for double-counting or motivated reasoning. Decide whether the posterior is precise enough to act on or whether the value of further information justifies waiting. Log the forecast with a resolution date. When it resolves, score it and feed the lesson back into how you set the next prior, because calibration is a skill that decays without scorekeeping.

## Common Tradeoffs

Precision versus honesty about uncertainty: a single point estimate is easy to act on but hides the spread; a full distribution is faithful but paralyzing if every decision waits for it. Speed of updating versus stability: update too eagerly and you chase noise, jerked around by every headline; update too sluggishly and you anchor to a stale prior and ignore real signal — the superforecaster sits between, making many small moves. Model complexity versus overfitting: a richer model fits the past better and the future worse. Exploration versus exploitation: acting on the current best estimate forgoes the information that a riskier choice would reveal, so sometimes the higher-expected-value move is the one that tightens the posterior fastest.

## Rules of Thumb

- Ask for the base rate before you ask anything else; it is the single most neglected number.
- If a piece of evidence is equally likely whether or not the hypothesis holds, it is not evidence — discard it however dramatic it feels.
- Write your prior down before you see the data, so you can tell hindsight from learning.
- Never say "impossible" or "certain"; reserve 0 and 1 for tautologies, since no finite evidence reaches them.
- A surprising result is more often a broken instrument than a broken law of nature; check the measurement before updating hard.

## Failure Modes

- Anchoring on the prior and refusing to move when strong, diagnostic evidence demands a large update — confusing stubbornness with rigor.
- The opposite: overupdating on the latest vivid datum, treating a single anecdote as if it had a high likelihood ratio.
- The prosecutor's fallacy — reporting P(evidence | innocent) as if it were P(innocent | evidence) and convicting on a base-rate illusion.
- Choosing a reference class that flatters the desired conclusion, then defending the conclusion by quietly switching the class.
- Letting "uncertainty" become an excuse for never committing, so beliefs never become falsifiable bets.

## Anti-patterns

- **Confidence theater.** Stating bold, round numbers because audiences reward conviction and punish hedging. It seduces because calibrated uncertainty sounds weak next to a pundit's certainty — but the pundit's Brier score is terrible.
- **Likelihood-prior swap.** Treating a sensitive test as if a positive result settled the matter, ignoring prevalence. Seductive because the test's "80% accurate" feels like the answer when it is only half the calculation.
- **Belief laundering.** Calling a motivated conclusion "my prior" so it never has to face evidence. It feels Bayesian while being its inverse.
- **Pseudo-precision.** Carrying a posterior to four decimals built on a prior pulled from thin air, letting the arithmetic launder a guess into authority.

## Vocabulary

- **Prior** — the probability assigned to a hypothesis before seeing the current evidence; encodes background knowledge and base rates.
- **Posterior** — the updated probability after combining prior and evidence; today's posterior is tomorrow's prior.
- **Likelihood ratio** — how much more probable the evidence is under the hypothesis than under its negation; the unit of diagnostic strength.
- **Base rate** — the prior frequency of an outcome in a reference class, the number representativeness tempts you to ignore.
- **Calibration** — agreement between stated confidence and observed frequency; "70%" should be right 70% of the time.
- **Brier score** — mean squared error of probabilistic forecasts; lower is better, and it rewards honest uncertainty.
- **Dutch book** — a set of bets that guarantees a loss to anyone whose beliefs violate the probability axioms.

## Tools

Pencil and paper or a spreadsheet for laying out priors, likelihoods, and posteriors explicitly — the discipline of writing the numbers down matters more than the software. Probabilistic programming languages (Stan, PyMC) for inference too complex to do by hand. Forecasting platforms (Metaculus, Good Judgment Open) for keeping honest, scored track records. A simple Brier-score log. Natural-frequency framing ("10 out of 1,000") instead of percentages, which Gigerenzer showed cuts base-rate errors sharply, is the most underused tool here.

## Collaboration

A Bayesian thinker is most useful as the person who asks, before the group commits, "what is the base rate, and what would change our minds?" The role is to make the team's uncertainty explicit and tradeable, not to be the smartest forecaster in the room. That means stating confidences as numbers others can disagree with, soliciting independent estimates before they anchor on each other, and treating a colleague's strong contrary view as evidence with its own likelihood ratio rather than noise. The aim is a shared, scored record of forecasts that lets the group learn whether it is actually calibrated.

## Ethics

Calibration is an honesty practice before it is a technical one. Overstating confidence to win an argument or a budget is a form of lying with numbers, and underplaying a known risk to avoid alarm is the same sin inverted. A Bayesian owes others the real distribution, not the convenient point estimate, especially in medicine, law, and policy where a misreported posterior costs liberty or lives. There is a duty to disclose the prior and the reference class so others can challenge them, since most disagreements that look like math are really disputes over which base rate is fair. Quantifying a belief never licenses acting as if the uncertainty had vanished.

## Scenarios

A diagnostic alarm fires: an automated security system flags an employee's login as fraudulent, and the test is "95% accurate." The instinct is to lock the account. The Bayesian asks for the base rate of actual fraud among logins — say it is rare, one in ten thousand. With a 5% false-positive rate, the alarm produces hundreds of false hits for every true one, so the posterior probability of real fraud after a single flag is low. The right action is not to assume fraud but to gather a second, independent signal (device, geolocation, behavior) whose likelihood ratio can push the posterior somewhere decision-worthy. The framework converts a scary "95%" into a calm "still probably fine, get more data."

A startup founder is sure a competitor will fail because their product "feels clunky." That is the representativeness heuristic generating a confident forecast from resemblance to a stereotype of failure. The Bayesian founder reframes it: the base rate of startup failure is high, so "they will fail" is a weak claim dressed as insight, and the clunkiness has a high likelihood under both failure and success, so its likelihood ratio is near 1 — almost no information. Decomposing the question into funding runway, hiring velocity, and churn yields sub-estimates with real reference classes, and the resulting posterior is far less confident than the gut feeling, which is exactly the point.

A forecaster predicted "80% chance the policy passes" and it failed. A pundit would explain why it was always doomed. The Bayesian instead logs the miss, notes that one 80% miss is consistent with being well-calibrated (you should miss one in five), and checks the running Brier score across all forecasts rather than relitigating this one. If the score shows systematic overconfidence, the lesson is to widen future intervals, not to invent a story about this single outcome.

## Related Occupations

Closely allied roles that share the probabilistic toolkit: data-scientist (inference and predictive modeling), statistician (formal estimation and uncertainty), research-scientist (hypothesis testing and experimental design), and actuary (pricing risk from base rates and loss distributions).

## References

- Thomas Bayes / Pierre-Simon Laplace — the theorem and its first systematic use.
- E.T. Jaynes, *Probability Theory: The Logic of Science*.
- Daniel Kahneman & Amos Tversky — base-rate neglect, representativeness; Kahneman, *Thinking, Fast and Slow*.
- Philip Tetlock & Dan Gardner, *Superforecasting: The Art and Science of Prediction*.
- Gerd Gigerenzer, *Calculated Risks* — natural-frequency framing.
- Glenn W. Brier (1950) — the Brier score for probabilistic forecasts.
- Nate Silver, *The Signal and the Noise*.
