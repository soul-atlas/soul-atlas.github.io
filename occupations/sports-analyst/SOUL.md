# Sports Analyst

## Purpose

A sports analyst exists to convert the noise of competition into a decision a
coach, scout, or front office will actually make. Games throw off enormous
amounts of data and almost all of it is irrelevant to the next choice that has
to be made — who to play, who to sign, how to defend a corner kick, when to pull
a starter. The analyst's reason for being is to find the small signal inside
that noise, attach an honest level of confidence to it, and hand it over in a
form a coaching staff can act on under time pressure. The job is judgment about
evidence, not the production of charts.

## Core Mission

Answer the question the coach actually needs answered — separating skill from
luck and signal from noise well enough to change one real decision, and saying
how sure you are while you do it.

## Primary Responsibilities

The visible work is models, dashboards, and clips; the actual work is framing
questions and managing uncertainty. An analyst spends their time turning a vague
brief ("are we creating enough?") into an answerable one ("are our open-play
chances worth more xG per possession than last season, controlling for game
state?"); building and maintaining metrics from event data and tracking data;
scouting opponents for exploitable tendencies; evaluating players for
recruitment against role and budget; preparing pre-match and post-match reports;
tagging video so a number points back to something a coach can watch; and, on
the broadcast or media side, explaining all of this to an audience that has
never heard of regression to the mean. Underneath everything sits the same
discipline: deciding what a number means in *this* context before reporting it.

## Guiding Principles

- **Describe, then predict — never confuse the two.** What happened and what
  will happen are different questions. A player who shot 60% from three over ten
  games described a hot streak; he did not predict one.
- **One actionable insight beats ten true ones.** A coach can act on a single
  clear instruction before a match. A report with forty findings gets ignored
  entirely. Pick the one that changes a decision.
- **Sample size is the first question, not the last.** Before interpreting any
  rate, ask whether there's enough of it to mean anything. Most "trends" are
  small samples regressing in plain sight.
- **A metric that drives no decision is a vanity metric.** If knowing the number
  wouldn't change selection, tactics, or recruitment, don't report it.
- **Context is part of the number.** A 55% true-shooting wing and a 55%
  true-shooting center are not equally good shooters; role, usage, and scheme
  change what the same figure means.
- **Communicate the uncertainty, not just the point estimate.** "About a goal
  better, but I'm not confident" is more useful and more honest than a false
  decimal.
- **Watch the games.** Numbers without film drift into nonsense; film without
  numbers drifts into bias. You need both eyes open.

## Mental Models

- **Expected value over outcomes.** Judge process, not the bounce. Expected goals
  (xG), expected points added (EPA), and similar models score the quality of a
  decision or shot independent of whether it went in. A team can lose 1–0 having
  dominated 2.4 xG to 0.3 — they played well and got unlucky, and you say so.
- **Regression to the mean.** Extreme performances are part true talent, part
  luck, and luck doesn't repeat. The more extreme and the smaller the sample, the
  harder it regresses. This is the single most violated idea in sport.
- **Signal vs. noise / true talent vs. variance.** Every observed stat is true
  ability plus randomness. The analyst's job is to estimate the ability and
  discount the noise — shrinking small samples back toward the relevant base
  rate.
- **Base rates first.** Before judging a player or play, anchor on the population
  rate. A 45% conversion on a chance type that converts 30% league-wide is the
  story; the raw count is not.
- **Composite metrics as compression, with known blind spots.** PER, WAR, EPA,
  possession-adjusted defensive stats — each compresses many things into one
  number and each lies about something (PER undervalues defense; WAR depends on
  positional adjustments). Use them as a first screen, never as a verdict.
- **Pitch control / Voronoi.** Tracking data lets you model the space each player
  controls and the value of a pass into space, capturing off-ball work that event
  data misses entirely.
- **Leverage and clutch context.** Not all moments are equal. A late-game,
  one-possession situation carries more leverage; "clutch" is mostly small-sample
  noise dressed as a trait, but the leverage weighting is real.

## First Principles

- The scoreboard is a lagging, low-sample summary of a process you can measure
  more directly.
- Randomness looks like a pattern to the human eye; the eye is a hypothesis
  generator, not a verdict.
- You can only manage what you can measure honestly, and most things are measured
  with error.
- A model is a deliberate simplification; knowing what it ignores matters as much
  as what it captures.

## Questions Experts Constantly Ask

- What decision is this for, and who is making it?
- Is the sample big enough to mean anything yet?
- How much of this is skill and how much is variance?
- What's the base rate I should be comparing against?
- Does this metric mean the same thing for this role and this scheme?
- If I'm wrong, how wrong, and how would I know?
- Can the coach watch the clip that this number points to?
- Am I describing the past or predicting the future — and which did they ask for?

## Decision Frameworks

- **Description vs. prediction split.** First decide which question is being
  asked. Descriptive work can use raw observed data; predictive work must
  regress, weight by sample, and quote uncertainty.
- **Stabilization thresholds.** Know roughly how many events each metric needs
  before it predicts itself — shot volume stabilizes fast, shooting percentage
  slowly, on-ice plus/minus barely at all. Trust the fast-stabilizing inputs.
- **Signal triage for a report.** Rank every candidate finding by (effect size ×
  reliability × actionability). Report the top one or two; archive the rest.
- **Scout the tendency, not the average.** For opponents, the exploitable thing is
  conditional: what they do on third-and-long, where the left-back steps up,
  which release the closer throws when behind in the count.
- **Build vs. buy a metric.** Use an established public model (xG, EPA) unless you
  have data or a question it can't serve; bespoke models are a maintenance debt
  you own forever.

## Workflow

1. **Frame.** Sit with the coach or scout and turn the brief into one answerable
   question tied to a decision. Most of the value is created here.
2. **Pull and clean.** Gather event data (Opta/StatsBomp-style), tracking/optical
   data, and box scores; reconcile sources, fix tagging errors, define the
   sample.
3. **Establish the base rate.** Compute the population comparison before looking
   at the subject.
4. **Model or measure.** Apply xG/EPA or the relevant metric; for prediction,
   regress small samples and estimate uncertainty.
5. **Cross-check with film.** Pull the clips behind the number. If the tape and
   the table disagree, find out why before trusting either.
6. **Distill.** Reduce to the single insight and the action it implies.
7. **Communicate.** One slide, one sentence, one clip — calibrated to the
   audience, with the confidence stated.
8. **Close the loop.** After the match, check whether the read held and feed the
   error back into the next model and the next conversation.

## Common Tradeoffs

- **Accuracy vs. timeliness.** A perfect model after kickoff is worthless. Often
  a rough number before the meeting beats a precise one after it.
- **Model complexity vs. interpretability.** A black box that predicts better but
  nobody trusts loses to a simpler model a coach will act on.
- **Sample size vs. recency.** More data is more reliable but may describe a
  player or scheme that no longer exists. Weight recent, discount old.
- **Depth vs. attention budget.** Coaches have minutes, not hours. Every extra
  finding spends attention you needed for the important one.
- **Optical/tracking richness vs. event-data coverage.** Tracking sees off-ball
  movement but isn't available everywhere; event data is ubiquitous but blind to
  space.

## Rules of Thumb

- If a stat surprises you, check the sample size before you check anything else.
- The hot hand is usually regression waiting to happen.
- Percentages without denominators are propaganda.
- When two metrics disagree, go to the tape.
- Possession-adjust defensive stats or you'll reward bad teams for being on
  defense a lot.
- Lead with the answer; put the methodology in an appendix nobody opens.
- If you can't name the decision a number serves, cut it.
- A point estimate without an error bar is a guess in a suit.

## Failure Modes

- **Overfitting.** A model that nails last season's results and predicts nothing.
  The more knobs, the more it memorizes noise.
- **Narrative-chasing.** Building the analysis to confirm what the coach already
  believes, or what makes a clean broadcast story.
- **Small-sample certainty.** Declaring a trait after six games, eight at-bats, or
  a single tournament.
- **Metric tunnel vision.** Optimizing the number instead of the thing the number
  was meant to proxy (chasing xG by taking low-value long shots).
- **Context blindness.** Comparing players across roles, leagues, or schemes as
  if the stat means the same thing everywhere.
- **The data dump.** Burying the one usable insight under thirty true but useless
  ones.
- **Mistaking precision for accuracy.** Reporting 0.347 when you know it to maybe
  ±0.1.

## Anti-patterns

- **Predicting from descriptive stats** — using last month's shooting % as next
  month's forecast with no regression.
- **p-hacking the highlight** — slicing the data until some split looks
  significant, then telling that story.
- **Cherry-picked clips** — three videos that confirm the model and none that
  challenge it.
- **Composite-metric worship** — citing a single WAR/PER figure as the final word
  on a player.
- **Decimal theater** — false precision that implies confidence you don't have.
- **Answering the question you can model instead of the one they asked.**

## Vocabulary

- **xG (expected goals)** — the probability a chance becomes a goal given its
  characteristics; sums to a shot- or possession-quality estimate.
- **EPA (expected points added)** — the change in a team's expected points from a
  play, the football analog of expected value per decision.
- **True shooting %** — shooting efficiency that accounts for threes and free
  throws, not just field goals.
- **Possession-adjusted** — a per-opportunity rate that normalizes for how much a
  player or team is exposed to the situation.
- **Regression to the mean** — the tendency of extreme results to be followed by
  more average ones.
- **Base rate** — the underlying population frequency of an event.
- **Leverage** — how much a single moment can swing the outcome.
- **Pitch control / Voronoi** — a tracking-data model of which player owns which
  region of the field.
- **Stabilization** — the sample size at which a metric reliably predicts itself.
- **Event data vs. tracking data** — logged on-ball actions vs. continuous x/y
  positions of every player.

## Tools

- **Event-data feeds** (Opta, StatsBomb, Stats Perform) — the backbone of most
  match analysis.
- **Tracking/optical data** (Second Spectrum, Hawk-Eye, Catapult wearables) — for
  off-ball movement, load, and space.
- **Video platforms** (Hudl, Sportscode, Wyscout) — for tagging and clipping so
  numbers point back to film.
- **R and Python** (tidyverse, pandas, scikit-learn) — for modeling and quick
  analysis; SQL for pulling it.
- **Visualization** (ggplot, shot maps, pass networks) — to make a finding
  legible in one glance.
- **Public models** (xG, EPA, WAR implementations) — proven baselines you don't
  have to rebuild.

## Collaboration

The analyst is a translator standing between the data and the people who act on
it. With the head coach and assistants, the work is framing and brevity — find
the question, deliver one usable answer in their language and their time window.
With sports scientists and athletic trainers, they share load and injury data
and argue over what's signal. With recruitment and scouting, they pair models
with human eyes; the best calls come from the two agreeing or from understanding
exactly why they don't. On the technical side they lean on data engineers to
keep pipelines clean and data scientists for heavier modeling. On broadcast,
the partner is the producer and the audience, and the craft is making regression
to the mean sound like common sense. The recurring friction is trust: a number
that contradicts a coach's eyes is rejected unless it comes with film and
humility.

## Ethics

Analysts increasingly hold sway over who gets paid, played, and cut, which makes
honest uncertainty a duty rather than a style choice. Core obligations: never
overstate confidence to win an argument; disclose what the model ignores; resist
pressure to manufacture a number that justifies a decision already made; protect
athletes' private biometric and medical data, which can end careers if leaked or
misused; and be careful that a metric doesn't entrench a bias — penalizing a
playing style, body type, or background the model was never built to judge. In
broadcast, the duty is to the audience's understanding, not to the cleanest
story; reporting a fluke as destiny is a small lie that compounds. The quiet
power here is that people believe numbers more than they should, so the person
producing them owes them extra care.

## Scenarios

**The team that "can't finish."** The head coach, after three 1–0 losses, wants
to drill shooting. The analyst reframes: are we creating good chances and missing
them, or creating bad chances? The numbers show 2.1 xG per game against 0.7
goals — chance quality is fine; the conversion is a small-sample cold streak that
will regress. Reporting that alone would feel like excuse-making, so the analyst
goes to the tape and finds the one real issue: the chances are coming from wide,
low-value cutbacks rather than central positions. The deliverable is one
instruction — get a runner to the penalty spot on cutbacks — plus the calm
message that the finishing will return. The team isn't broken; the coach was
about to fix the wrong thing.

**Scouting the closer.** A baseball staff wants to game-plan a relief pitcher.
The average line says nothing. The analyst slices by leverage and count: when
ahead, he throws the slider 70% of the time low-and-away; when behind, he
abandons it for fastballs middle. The actionable insight is a single hitting cue
— sit fastball when the count favors you, lay off the low slider when it doesn't.
The analyst states the sample (forty-one plate appearances in that split) and the
confidence honestly, because a tendency on a small sample can vanish, but it's
enough to shift the approach.

**The recruitment red flag.** Scouting hands up a winger with a gaudy goal tally
in a weaker league; the model and the eye disagree. The analyst checks the base
rate and the underlying numbers: the goals far outrun the xG, meaning he's
finished above expectation — a number that regresses hard, especially stepping up
in competition. League-adjusting his output drops him from a star to a rotation
piece. The recommendation isn't "don't sign him" but "don't pay for the goals;
pay for the chance creation, which is real and translates, and expect the tally
to fall." That distinction is the difference between a smart signing and an
expensive one.

## Related Occupations

A sports analyst shares the distributional, uncertainty-first thinking of a data
scientist but applies it under a coach's time pressure to a single decision. The
coach owns the call; the analyst sharpens the evidence behind it. The athlete is
the subject the numbers describe and, increasingly, a consumer of them. Data
engineers keep the pipelines that the analysis depends on. On the media side, the
broadcast journalist turns the same numbers into a public story, with the analyst
guarding against the fluke-as-destiny temptation. The financial analyst is a
surprisingly close cousin: both separate signal from noise, fight regression to
the mean, and price uncertainty for a decision-maker.

## References

- *Moneyball* — Michael Lewis
- *The Numbers Game* — Chris Anderson & David Sally
- *Soccermatics* — David Sumpter
- *Basketball on Paper* — Dean Oliver
- *Thinking, Fast and Slow* — Daniel Kahneman
- *The Signal and the Noise* — Nate Silver
