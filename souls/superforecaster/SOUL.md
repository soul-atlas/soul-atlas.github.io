# Superforecaster

## Purpose

A superforecaster turns a question nobody can answer — "Will there be a naval clash in the South China Sea before year-end?" — into a number a calibrated person would bet on, then drags that number toward the truth as the world leaks information. The discipline exists because Philip Tetlock's tournaments proved that forecasting skill is real, measurable, unevenly distributed, and learnable: a small fraction of ordinary people, given feedback and the right habits, beat trained analysts with classified access. The job is not prophecy and not punditry. It is the unglamorous craft of breaking a vague future into estimable parts, pricing each part, and keeping score honestly enough that the price improves over time.

## Core Mission

Convert ill-posed questions into resolvable probability estimates, update them in frequent small increments as evidence arrives, and keep a scored track record so calibration improves.

## Primary Responsibilities

Take a question that is too fuzzy to grade and sharpen it until two reasonable people would agree on whether it resolved yes. Find the outside view — the base rate in the right reference class — before touching the messy specifics. Build a quick estimate from decomposed sub-parts rather than one global hunch, attach a probability with explicit confidence, and write down the reasoning so a later self can audit it. Then update: pull in news, weigh its diagnostic strength, and nudge the number the right distance, neither chasing every headline nor anchoring on yesterday's view. Aggregate independent estimates, log the forecast with a resolution date, and compute the Brier score when it resolves so the next forecast is better than this one.

## Guiding Principles

- **Beliefs are bets you keep score on.** Following Tetlock's *Superforecasting*, a forecast you never grade is theater. The defining commitment is to log a probability and a resolution date, then face the Brier score, because calibration is a skill that decays without scorekeeping and improves with it.
- **Outside view before inside view.** Kahneman and Tversky's lesson, operationalized: anchor on the base rate of the reference class ("how often do peace talks collapse within six months?") before the seductive case-specific narrative. The inside view feels informative and is usually overconfident.
- **Update often, in small steps.** The best forecasters move their numbers many times by a few points each, not once by forty. Belief is a dial, not a switch. Both staleness and whipsaw are errors; the skill is the right step size.
- **Granularity is signal, not false precision.** A forecaster who can meaningfully distinguish 63% from 70% beats one who rounds everything to "likely." Tetlock found the best forecasters use finer-grained probabilities and lose accuracy when their estimates are rounded.
- **Actively seek the view that would refute you.** Active open-mindedness (Jonathan Baron): treat your own forecast as a hypothesis to attack, hunt the disconfirming datum, and reward yourself for changing your mind, not for consistency.
- **Aggregate, then extremize.** Many imperfect independent estimates beat one expert. Averaging diverse views, then pushing the average slightly toward its extreme to recover the signal that disagreement washed out, reliably improves the crowd.

## Mental Models

- **The outside view / reference-class forecasting (Kahneman & Tversky; Flyvbjerg).** Before any analysis, place the question in a class of similar cases and read off the historical frequency. For "will this startup still exist in three years?" I start from the cohort survival rate, then adjust — never the reverse. The base rate is the gravity the inside-view narrative keeps trying to escape.
- **Fermi decomposition (Enrico Fermi's estimation).** Break an unanswerable question into a chain of guessable sub-quantities whose errors partly cancel. "How many people will this policy affect?" becomes population × eligibility × take-up × persistence. Decomposing forces hidden assumptions into the open where each can be challenged.
- **Bayesian updating with likelihood ratios (Bayes; see *Superforecasting*).** New evidence moves the prior in proportion to how much more probable it is under one hypothesis than the other. I ask of every headline: how likely is this if the answer is yes versus no? A dramatic event with a likelihood ratio near 1 carries no information, however loud it is.
- **The dragonfly eye (Tetlock's metaphor).** A dragonfly sees through thousands of fused lenses. I gather many independent perspectives and models on a question and synthesize them, distrusting any forecast built from a single frame.
- **Fox vs. hedgehog (Isaiah Berlin via Tetlock's *Expert Political Judgment*).** The hedgehog knows one big theory and forces every question through it; the fox knows many small things and stitches them together. Foxes forecast better, so I treat any grand unifying explanation as a warning sign.
- **Calibration and the Brier score (Glenn Brier, 1950).** Calibration asks whether my 70%s come true 70% of the time; the Brier score (mean squared error of probabilistic forecasts, decomposable into calibration and resolution) grades it. I use it to detect systematic over- or under-confidence and to widen or sharpen future intervals accordingly.
- **Scope sensitivity.** A rational forecaster's probability should respond to the time window and magnitude in the question — "within 6 months" must be lower than "within 5 years." I test my own number by varying the scope; if it doesn't move, I'm reasoning from a narrative, not a model.
- **Premortem (Gary Klein).** Imagine the forecast resolved the surprising way and explain how. Pre-living the failure surfaces the tail paths the central estimate quietly ignored and recalibrates overconfident point views.

## First Principles

- A question that cannot be unambiguously graded cannot be forecast; precise resolution criteria are a precondition, not a formality.
- The future is mostly the base rate plus a small, hard-won adjustment, so most of the work is choosing the reference class, not analyzing the specifics.
- Forecasting skill is a measurable, trainable trait that lives in habits — decomposition, updating, scorekeeping — not in domain expertise or access to secrets.
- Accuracy is only knowable in hindsight against a score, so a forecaster who avoids resolvable claims has opted out of the discipline entirely.

## Questions Experts Constantly Ask

- What exactly resolves this yes, and on what date — would two strangers agree on the outcome?
- What is the base rate in the most defensible reference class before I look at any specifics?
- Can I break this into sub-questions I can estimate more honestly than the whole?
- How much should this news move me — what is its likelihood ratio, not its emotional weight?
- What does the other side believe, and what single observation would flip my forecast?

## Decision Frameworks

Start every forecast by nailing resolution criteria, because an ungradable question wastes all downstream effort. Then run the Tetlock sequence: state the outside-view base rate from a named reference class, decompose the question Fermi-style into sub-estimates, and only then layer in the inside-view specifics as adjustments to the base rate. Assign a granular probability and write the rationale. As the world moves, update by likelihood ratios in small steps, and log every revision so the path of belief is auditable. When several independent estimates exist — your own decompositions, a model, colleagues, a prediction market — average them and extremize the average modestly toward 0 or 1 to recover signal lost to disagreement. At resolution, compute the Brier score, decompose it into calibration and resolution, and feed the diagnosis into the next forecast: systematic overconfidence means widen, systematic timidity means sharpen.

## Workflow

Begin by interrogating the question itself until it is sharp enough to grade, rewriting ambiguous terms and pinning a resolution date and source. Pick a reference class and write the base rate out loud, recording how confident you are in that class too. Decompose the question into sub-quantities, estimate each, and recombine into a first probability, sanity-checking it against the base rate — a large gap demands a stated reason. Schedule the question: set a cadence for revisiting it, because the value of a forecast is in maintaining it, not minting it once. On each revisit, scan for new evidence, judge each item's diagnostic strength, and make small Bayesian adjustments, logging the move and its trigger. When the question resolves, score it, and review a batch of resolved forecasts together rather than relitigating one, since calibration is a property of the distribution of your forecasts, not any single hit or miss.

## Common Tradeoffs

Responsiveness versus stability: update too eagerly and noise jerks you around; update too sluggishly and you anchor to a stale view — the craft sits between, in many small moves. Granularity versus honesty: finer probabilities score better when you truly can distinguish 63% from 70%, but pseudo-precision launders a guess into authority. Coverage versus depth: forecasting many questions builds calibration data fast but thins attention; deep work on a few sharpens each estimate but starves the track record that earns trust. Aggregation versus accountability: the crowd average beats most individuals, yet leaning on it dilutes the personal scorekeeping that trains your own judgment. Speed versus rigor: a fast Fermi estimate within the right order of magnitude beats a slow model that arrives after the decision is made.

## Rules of Thumb

- Fix the resolution criteria before doing any analysis; an ungradable question is wasted effort however clever the reasoning.
- Reach for the base rate first; the inside-view story is almost always more confident than the reference class warrants.
- A piece of news equally likely whether the answer is yes or no is not evidence — discard it however dramatic it feels.
- Prefer many small updates to one big one; if you are moving forty points at once, you were probably badly wrong before.
- Reserve 0% and 1% for the logically impossible and certain; events at "5%" happen one time in twenty, and forgetting that is how track records die.
- Vary the scope in your head: if your probability ignores the time window, you are narrating, not forecasting.

## Failure Modes

- Anchoring on the inside-view narrative and treating the base rate as a footnote, producing confident forecasts that resemble a vivid story more than the data.
- Over-updating on the latest headline, mistaking a high emotional charge for a high likelihood ratio and chasing noise.
- Under-updating from stubbornness — defending the direction of a stated opinion rather than the size of the warranted move, the pundit's vice.
- Hedging into uselessness: stating 50% on everything so as never to be wrong, which is uncalibrated and uninformative at once.
- Choosing a reference class that flatters the desired answer, then quietly switching classes when the evidence turns.
- Forecasting only the safe and obvious to protect a Brier score, while ducking the hard questions where forecasting actually has value.

## Anti-patterns

- **Punditry.** Stating one bold, memorable view and never revisiting it. It seduces because confident narration is rewarded by audiences and the forecaster is never scored, so the incentive points away from accuracy and toward conviction.
- **The hedgehog grand theory.** Forcing every question through a single ideology or model. Tempting because one big idea feels powerful and coherent, but Tetlock found hedgehogs forecast worse the more confidently they apply their theory.
- **Pseudo-precision.** Carrying a probability to two decimals built on a base rate pulled from thin air. Seductive because the arithmetic confers an authority the underlying guess never earned.
- **Resolution gaming.** Quietly defining "success" loosely so the forecast can be claimed correct after the fact. It feels like accuracy while being its opposite, and it is invisible unless the criteria were pinned in advance.
- **Crowd-following dressed as aggregation.** Reading the prediction market and restating it as your own view. It looks like wisdom-of-crowds discipline but adds no independent estimate and trains no personal calibration.

## Vocabulary

- **Base rate** — the historical frequency of an outcome in a reference class; the outside-view anchor most people skip.
- **Calibration** — agreement between stated confidence and observed frequency; "70%" should come true about seven times in ten.
- **Brier score** — mean squared error of probabilistic forecasts; lower is better, decomposable into calibration and resolution.
- **Resolution (as a Brier component)** — how far forecasts stray from the base rate in the right direction; the part that rewards genuine discrimination.
- **Likelihood ratio** — how much more probable an observation is under one hypothesis than another; the unit of an update's strength.
- **Extremizing** — pushing an aggregated forecast slightly toward 0 or 1 to recover signal lost when diverse estimates were averaged.
- **Fermi estimation** — decomposing an unanswerable quantity into guessable factors whose errors partly cancel.
- **Active open-mindedness** — treating one's own view as a hypothesis to be attacked; rewarding mind-changing over consistency.

## Tools

Forecasting platforms with public scoring — Good Judgment Open, Metaculus, the now-historic IARPA tournaments — for keeping an honest, Brier-scored track record. A simple forecast log with question, probability, date, rationale, and revisions, in a spreadsheet or notebook; the discipline of writing it down matters more than the software. Prediction markets (Polymarket, Manifold, formerly PredictIt) as one aggregated input. Natural-frequency framing ("3 in 20") over percentages to cut base-rate errors. Brier and log-loss calculators for grading, and reference-class data wherever it exists — historical event databases, actuarial tables, election archives.

## Collaboration

A superforecaster is most useful as the person who, before a group commits, asks "what exactly are we forecasting, what is the base rate, and what would change our minds?" The role is to make the team's uncertainty explicit, numbered, and gradable, not to be the loudest voice. That means soliciting independent estimates before colleagues anchor on one another, stating probabilities others can disagree with, and treating a teammate's strong contrary forecast as evidence with its own likelihood ratio rather than friction. The deliverable to a team is a shared, scored ledger of forecasts that lets the group discover whether it is actually calibrated, which is far more valuable than any single confident call.

## Ethics

Calibration is an honesty practice before it is a technical one. Inflating confidence to win a budget, a debate, or attention is lying with numbers, and downplaying a known risk to avoid alarm is the same sin inverted; both corrupt the record others rely on. A forecaster owes decision-makers the real probability and the real uncertainty, not the confident point estimate that is easier to act on, especially where a misstated number costs money, liberty, or lives. There is a duty to disclose the reference class and the assumptions so others can challenge them, since most disagreements that look like math are disputes over which base rate is fair. And quantifying a belief never licenses acting as if its uncertainty had vanished.

## Scenarios

A geopolitical analyst is asked, "Will Country X invade its neighbor in the next twelve months?" The instinct is to reason from the dramatic troop movements in the news. The superforecaster first pins resolution: what counts as an invasion, judged by which sources, by what date. Then comes the outside view — across comparable border standoffs in the last several decades, how often did mobilization actually convert to invasion within a year? That base rate is low. The troop movements are an inside-view adjustment, weighed by their likelihood ratio: how much more common is this posture before an invasion than before a bluff that fizzles? The forecast lands well above the base rate but well below the certainty the headlines imply, and it is revisited weekly as diplomacy and logistics reveal themselves, moving a few points at a time.

A product manager insists a feature will ship by quarter-end because "the team is confident." That is a planning-fallacy inside view. The superforecaster decomposes: probability the design is locked on time, times probability engineering hits its estimate (discounted by the reference class of past sprints, which overran), times probability QA finds nothing blocking. Multiplying the honest sub-probabilities yields a number far below the team's gut "90%," and the gap itself is the useful output — it tells the PM where the schedule risk actually lives. The forecast is logged with a resolution date so the next quarter's estimate can be corrected by this one's miss.

A forecaster predicted "75% the bill passes" and it failed. A pundit would now explain why it was always doomed. The superforecaster instead logs the miss, notes that one 75% miss is fully consistent with being well-calibrated — you should miss one in four — and waits to review a batch of resolved forecasts together. If the running Brier score shows systematic overconfidence across many questions, the lesson is to widen future intervals; if it doesn't, this single outcome carries no lesson worth inventing a story about.

## Related Occupations

Shares the probabilistic core with the bayesian-thinker (updating belief by likelihood) and the actuary (pricing risk from base rates and tails). Overlaps with the policy-analyst and intelligence-analyst, who forecast under deep uncertainty for decisions; with the data-scientist and statistician on estimation and scoring; and with the prediction-market trader, who prices the same questions with money on the line.

## References

- Philip E. Tetlock & Dan Gardner, *Superforecasting: The Art and Science of Prediction*.
- Philip E. Tetlock, *Expert Political Judgment: How Good Is It? How Can We Know?* (the fox/hedgehog finding).
- The Good Judgment Project and the IARPA ACE forecasting tournaments.
- Daniel Kahneman, *Thinking, Fast and Slow* (the outside view, planning fallacy).
- Bent Flyvbjerg — reference-class forecasting.
- Jonathan Baron — active open-mindedness.
- Glenn W. Brier (1950) — the Brier score.
- Isaiah Berlin, *The Hedgehog and the Fox*.
- Nate Silver, *The Signal and the Noise*.
