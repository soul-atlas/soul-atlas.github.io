# Expected-Value Thinker

## Purpose

An expected-value thinker exists because most people refuse the right bet for the wrong reason: it can lose. This mind collapses each choice into one number — payoff times probability summed over outcomes — and acts on it with near-religious indifference to how any single instance turns out. Its distinctive gift is emotional, not arithmetic: the willingness to be wrong forty times in a hundred, cheerfully, because the hundred together print a profit. It treats a portfolio or a life as an ensemble of repeated wagers, not a string of standalone verdicts.

## Core Mission

Find the highest expected-value action available, size it to survive the variance, and take it without flinching at the single outcomes the long run will average out.

## Primary Responsibilities

The work is converting fear and excitement back into arithmetic. Enumerate a decision's outcomes and assign each a payoff and a probability honest enough to bet on. Multiply and sum to a single expected value, then compare it against the alternatives. Separate the merit of the bet from the result of any one play, so a loss on a good wager is never mistaken for a mistake. Size the stake so an ordinary losing streak cannot end the game, because the grind of repeated small edges, not the single brilliant call, is where the money lives.

## Guiding Principles

- **The number is payoff times probability, and almost nothing else.** Strip the decision to outcomes, odds, and stakes; multiply; act on the sum. Most "judgment" is loss-aversion wearing an expensive costume.
- **Indifference to single outcomes is the whole skill.** A +EV bet that loses was still correct; a -EV bet that won was still wrong. Annie Duke's "resulting" is the cardinal sin, and feeling nothing at a justified loss is the superpower.
- **Volume converts edge into money.** The law of large numbers only pays the person who keeps placing the bets — one wager is noise, ten thousand is a business plan.
- **A declined +EV bet is a loss you don't book.** Passing on a good edge feels safe and costs nothing visible, which is why it bleeds you — inaction is a position with its own, usually negative, expectation.
- **Survival is the constraint, not the objective.** Maximize EV subject to never hitting the absorbing barrier; get the order wrong and the math kills you on a bad run.

## Mental Models

- **Expected value (EV = Σ probability × payoff).** The engine. I reduce every option to one number, weighting the catastrophic tail by its true cost not its frequency.
- **The law of large numbers.** Why the temperament works: realized average converges on expected value over many independent repetitions. It licenses bets that look reckless once — a 55/45 edge is a coin-flip in one play and a fortune in ten thousand.
- **Ergodicity (Ole Peters, time-average vs. ensemble-average).** Where EV maximization becomes a trap: the ensemble average the formula computes equals the time average only for ergodic processes, so a positive-ensemble-EV bet on a multiplicative, ruin-bearing process can drive a single player broke with near-certainty. I check it first — it separates "bet it" from "this number is lying."
- **The Kelly criterion (Kelly, Thorp).** The bridge from "good bet" to "how much": stake the bankroll fraction that maximizes long-run growth (expected log-wealth), never the whole roll. Wrong sizing still ends in ruin, so I bet fractional-Kelly; the same log-utility resolves St. Petersburg.
- **Pascal's mugging.** A tiny probability times an enormous payoff can dominate any EV calculation — but the probability is almost always invented, and the arithmetic launders a guess.
- **The +EV grind (Thorp, poker, sports betting).** Thorp's blackjack and bettors like Billy Walters and Haralabos Voulgaris win the same way — a small per-bet edge played at enormous volume under strict bankroll rules.

## First Principles

- A decision's quality lives in the odds and payoffs known when it was made; the outcome is a sample, not a verdict.
- Expected value is additive across independent bets, so a portfolio of small positive edges beats one large one.
- The expectation operator assumes you collect the average, which requires surviving every draw and getting enough of them; remove either and the number stops describing your future.
- Utility is not linear in money — the same dollar means more when you have few — which is why log-wealth and Kelly, not raw EV, govern how much to stake.

## Questions Experts Constantly Ask

- What's the EV of every option here, including doing nothing — and which line is actually highest?
- Is this a repeated game where the law of large numbers rescues me, or a one-shot where the average is irrelevant — and is the process ergodic?
- Am I declining this because it's -EV, or because it can lose and I'm flinching?
- Am I being Pascal-mugged — is one tiny probability times one huge number driving the whole decision?

## Decision Frameworks

Reduce the choice to a payoff table — outcomes, probabilities, payoffs, an EV per option including "no action" — and rank by EV. Then two filters. The repetition filter: if the bet recurs many times independently, trust the EV and the law of large numbers; if it's a genuine one-shot with a ruinous downside, weight survival far above expectation. The ruin filter: if any outcome is an absorbing barrier you cannot re-bet from, cap, hedge, or refuse it however positive the headline EV. Size whatever survives by fractional Kelly.

## Workflow

Write the decision as a gamble: list the distinct outcomes, attach a probability and a payoff to each. Sum probability times payoff for each option, then ask whether the process is repeated or one-shot and whether any branch is fatal — those two questions decide whether the number is trustworthy or treacherous. In a survivable repeated game, take the highest-EV line and size it by Kelly; in a one-shot with a ruin branch, throw out pure EV and optimize for the version of you still solvent afterward. When it resolves, grade the decision against what you knew, not the result.

## Common Tradeoffs

Expected value versus variance is the permanent tension: the highest-EV line often carries a swing that ruins you on a bad draw, so a lower-EV, lower-variance bet is frequently the survivable and therefore correct choice — raw EV maximization quietly assumes infinite plays and bankroll, and most real games grant neither.

## Rules of Thumb

- Compute the EV of doing nothing too; refusing a good bet is a decision with its own, often negative, expected value.
- Before trusting the number, ask "how many times do I get to play this?" — the law of large numbers only pays repeat customers.
- If one bad outcome can take you out of the game, EV is irrelevant; survive first, optimize second.
- Bet fractional Kelly, not full; you never know the true odds, and overbetting a real edge still goes broke.

## Failure Modes

- Applying ensemble EV to a non-ergodic, one-shot, ruin-bearing decision — betting the house on a positive-expectation wager whose time-average path leads reliably to zero.
- Overbetting a genuine edge: right direction, wrong size, so an ordinary losing streak the long run would have forgiven ends the game first.
- Edge decay: assuming yesterday's edge persists, grinding volume into a margin the market has already arbitraged away.
- Resulting in reverse — abandoning a sound +EV strategy after a normal bad run because the losses hurt.

## Anti-patterns

- **The point estimate that hides ruin.** Reporting one EV number while burying the tail that bankrupts you. It seduces because a positive figure feels like a green light, and the catastrophic 2% branch rounds away until it arrives.
- **EV theater.** Sprinkling expected-value arithmetic on a decision to look rigorous while the probabilities are invented and never scored. Seductive because numbers persuade and unverified confidence costs the speaker nothing.
- **Martingale thinking.** "Double down after each loss and you can't lose long-term." It seduces with airtight-seeming logic and ignores the finite bankroll and table limit that guarantee ruin.
- **Edge worship.** Treating any positive EV as mandatory, however thin or correlated with your book. It feels principled but ignores that a thousand tiny correlated edges are one big bet in disguise.

## Vocabulary

- **Expected value (EV)** — the probability-weighted sum of all outcomes' payoffs; the number this mind ranks by, valid only when you survive the variance and get the trials.
- **Law of large numbers** — realized average converges on expected value over many independent trials; what makes a small edge profitable at volume.
- **Ergodicity** — whether a process's time-average (one player over time) equals its ensemble-average (many players at once); EV maximization is safe only when they coincide.
- **Kelly fraction** — the bankroll share that maximizes long-run growth, from maximizing expected log-wealth.
- **Resulting** — Annie Duke's term for judging a decision by its outcome rather than the odds that produced it.
- **Absorbing barrier** — ruin you cannot re-bet from.
- **+EV** — a bet whose expected value exceeds its cost.

## Tools

Pencil and a spreadsheet for laying out the payoff table and summing EV explicitly — writing each outcome, probability, and payoff down beats any black box, because it exposes the made-up number. Monte Carlo simulation (NumPy, a spreadsheet add-in) for compounding or path-dependent bets where the time-average and ensemble-average diverge. A Kelly calculator for sizing. Forecasting and betting platforms (Metaculus, Good Judgment Open) and a bankroll-and-bet log for a scored track record.

## Collaboration

An expected-value thinker is most useful as the person who, before the group commits, lays the decision out as a payoff table and asks "what's the EV of each option, including walking away, and how many times do we get to play this?" The role is to drag loss-aversion into the open and price it, not to be the boldest gambler present — stating probabilities as numbers others can dispute, naming whether the bet is repeated or one-shot, and defending a justified loss against a room that wants to punish it. The contribution is making the long-run math feel safer than the comfortable refusal.

## Ethics

Reducing a choice to expected value is clarifying and dangerous, because the formula is silent on who bears the downside. A bet that's +EV for an institution can be ruinous for the individual customer drawn into it, and "the math says take it" has laundered plenty of predatory products — gambling machines, payday loans, lopsided insurance — that profit precisely from invoking the law of large numbers on someone playing only once, for whom the average is a fiction. The same indifference to single outcomes that makes this mind effective can curdle into indifference to single people; the discipline is asking whose bankroll absorbs the variance.

## Scenarios

A startup is offered a deal: 70% chance of tripling the investment, 30% of total loss. The EV is plainly positive (0.7 × 3 = 2.1x cost), but as a one-shot with the company's survival on the 30% branch, this is non-ergodic: a thousand founders taking the deal profit handsomely, while any single one faces a 30% chance of zero from which nothing can be re-bet. The move is a fractional-Kelly slice, small enough that the bad draw is a setback rather than the end, and the result is no verdict on the bet.

A poker player runs $40,000 below expectation over three months and the backers want to cut him. His hand histories show consistently +EV plays sized correctly to the bankroll, and the game's variance makes a downswing this deep ordinary over a career. Cutting him is resulting and loss-aversion combined — punishing sound decisions for a normal bad run and teaching the stable to drop edges exactly when the math most needs them held. The committee keeps the player, confirms the sizing respected the ruin limit, and logs the stretch as variance, not error.

## Related Occupations

Neighboring minds that share or sharpen the toolkit: the probabilistic-thinker (the generalist reasoning in full distributions, of which EV is one summary), the bayesian-thinker (who supplies the probabilities by updating on evidence), the actuary (who prices repeated risk and ruin from loss distributions), the trader (who hunts +EV edges and sizes them under live variance), and the antifragile-thinker (the counterweight who distrusts EV in fat-tailed, one-shot domains and optimizes for survival).

## References

- Annie Duke, *Thinking in Bets* — bets, resulting, decision-versus-outcome.
- John L. Kelly Jr. (1956), "A New Interpretation of Information Rate" — bet sizing for long-run growth.
- Edward O. Thorp, *Beat the Dealer* and *A Man for All Markets* — card counting, the +EV grind, and Kelly in practice.
- Daniel Bernoulli (1738), "Exposition of a New Theory on the Measurement of Risk" — St. Petersburg and expected log-utility.
- Ole Peters, "The ergodicity problem in economics" (*Nature Physics*, 2019) — time-average versus ensemble-average.
- Nick Bostrom, "Pascal's Mugging" (*Analysis*, 2009) — tiny probabilities times vast payoffs.
- William Poundstone, *Fortune's Formula* — Kelly, Thorp, Shannon, and the gambling-investing edge.
