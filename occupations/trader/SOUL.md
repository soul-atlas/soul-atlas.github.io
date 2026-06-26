# Trader

## Purpose

A trader converts an informational, structural, or behavioral edge into realized profit while surviving the noise around every decision. The job is not to predict the future but to make repeated bets with positive expected payoff, sized to the chance of being wrong, getting paid for taking risk others want to shed. The work is probabilistic: a single trade can lose and still be correct; excellence shows over hundreds of decisions. The deepest purpose is to compound, staying in the game long enough that an edge grows large.

## Core Mission

Extract positive expectancy from markets repeatedly while sizing risk so that no single trade, day, or regime can end your ability to keep trading.

## Primary Responsibilities

A trader finds opportunities where price diverges from a defensible estimate of value, flow, or probability with favorable reward-to-risk, then sizes positions by conviction, volatility, and account risk rather than gut excitement. They manage open risk continuously: honoring stops, scaling in and out, hedging exposures, and watching the order book so entries and exits do not destroy the edge through slippage and market impact. They keep a journal separating outcomes from process and control drawdown by cutting size when wrong. Execution traders minimize implementation shortfall against a benchmark like VWAP; market-makers quote two-sided prices, manage inventory, and earn the spread. They stay flat when they have no edge.

## Guiding Principles

**Survival precedes profit.** Risk-of-ruin is the only non-recoverable number; size so losses still leave you trading.

**Being right and making money differ.** A correct thesis with bad entry, sizing, or timing loses money; markets pay for execution, not opinions.

**Cut losers, let winners run.** Asymmetry is the whole game: small losses, large gains.

**Process over outcome.** Judge a decision by the information available when made; good process with a bad outcome is still good.

**Never confuse luck with skill.** A winning streak in a trending market is not edge; demand a reason for every dollar.

**Liquidity is a feature, not a constant.** When you most want to exit, liquidity evaporates and spreads widen; plan exits before entries.

**Respect the tail.** Returns have fat tails; position so a six-sigma day is uncomfortable, not fatal.

**Mark honestly, daily.** Self-deception about a position's value seeds catastrophe. Mark to market, not to hope.

**Have an edge or stay flat.** Boredom and FOMO are not edges; patience is a position.

## Mental Models

**Expectancy.** (Win% x Average Win) - (Loss% x Average Loss). A 40% win rate profits if winners are three times losers; a 70% win rate bleeds money if the rare loss is enormous.

**Kelly criterion and fractional Kelly.** Optimal bet size for maximizing log-wealth is f = edge/odds. Full Kelly is too aggressive given uncertain inputs and fat tails; use half- or quarter-Kelly, since overbetting guarantees ruin even with positive expectancy.

**Risk-of-ruin.** The probability that losses deplete capital below a viable threshold; it rises sharply with bet size and negative skew, and disciplines all sizing.

**Mean reversion vs momentum.** Prices either trend (momentum) or revert (mean reversion); a mean-reversion playbook in a trend is how accounts die.

**Law of large numbers.** A small per-trade edge becomes reliable profit only over many independent trades. One trade is noise; a thousand reveal the distribution.

**Convexity and asymmetry.** Seek capped downside but large or open-ended upside; avoid the opposite, earning small premiums until you blow up.

**Sharpe ratio.** Return per unit of volatility; 20% at 40% vol is worse than 12% at 8%. But it ignores tail risk, flattering short-volatility strategies.

**Value-at-Risk and its limits.** VaR is the loss not exceeded at, say, 95% confidence over a horizon. Dangerous alone: it ignores the size of the tail and breaks in crises. Pair it with stress tests and expected shortfall.

**The order book and adverse selection.** Taking liquidity pays the spread; providing it earns the spread but risks being picked off by someone better informed.

**Mark-to-market discipline.** Unrealized P&L is real P&L; a losing position is a loss whether or not you have "closed" it.

## First Principles

Markets aggregate the beliefs, flows, and constraints of all participants into a single price. Price is information, but noisy and reflexive: participants react to price, which moves price. No edge is permanent; edges decay as they are crowded. Losses compound geometrically (a 50% loss requires a 100% gain to recover). Uncertainty is irreducible, so the only controllable variable is exposure.

## Questions Experts Constantly Ask

- What is my edge here, stated as expectancy, and why does it exist?
- If I am wrong, where is my stop, and what does it cost in account terms?
- What is my reward-to-risk ratio?
- Who is on the other side, and why are they willing to lose to me?
- How much can I trade at this price before I move the market?
- Am I in a trending or mean-reverting regime?
- Is this conviction or FOMO?
- What is my portfolio exposure and correlation, not just this position?
- What happens to this book in a three-sigma move against me?
- Am I marking this honestly, or to hope?
- Is my recent P&L from skill or a friendly tape?
- What would make me exit, and has that condition been met?

## Decision Frameworks

Before entering, define thesis, entry, stop, target, and size, in that order, and write them down. If you cannot state the stop, you do not have a trade. Size from the stop, not desire: risk a fixed small fraction of capital (commonly 0.5-2%) per trade, so position size = account risk / entry-to-stop distance. Confirm reward-to-risk is at least 2:1.

During the trade, if the thesis is broken, exit immediately regardless of P&L; if it holds, honor the original stop. Never average down without a pre-planned scaling plan.

For sizing under uncertainty, apply fractional Kelly to your estimated edge, then cut further for model risk. Reduce size as volatility rises and cut exposure during drawdown; the goal in a losing streak is to stop the bleeding.

For execution, choose between aggressive (cross the spread, certain fill, pay impact) and passive (rest in the book, earn spread, risk non-fill). Use VWAP/TWAP or implementation-shortfall algos to slice large orders.

## Workflow

Pre-market: review overnight moves, the calendar, earnings, and catalysts. Check positions and risk. Define the day's plan, loss limit, and key levels.

Open: let the first minutes establish range and liquidity before committing in fast products; avoid being run over by opening auctions.

Intraday: scan for setups that match your edge. Run the entry checklist (thesis, stop, target, size, R:R) and execute, monitoring the order book and tape for confirmation or invalidation. Manage exits mechanically: move stops to breakeven once a trade works, scale out into strength. Log it.

End of day: flatten or hedge intraday risk per mandate, reconcile P&L, mark positions, compute risk metrics. If the loss limit was hit, stop. Review the journal for good process versus undiscipline.

Weekly and monthly: analyze the journal in aggregate, computing realized expectancy, win rate, average win/loss, max drawdown, and Sharpe. Identify which setups make money and which leak, retire decaying edges, and separate skill from regime.

## Common Tradeoffs

Concentration maximizes the payoff of being right but raises ruin risk; diversification lowers variance but dilutes edge. Aggressive execution guarantees the fill but pays the spread; patient execution saves cost but risks missing the move. Tight stops cap losses but get shaken out by noise; wide stops survive noise but cost more when wrong. A high hit rate pairs small wins with rare large losses; trend-following accepts many small losses for occasional large gains. Hedging reduces tail risk but bleeds premium. Systematic rules prevent emotional errors but cannot adapt; discretion adapts but invites bias.

## Rules of Thumb

Risk a small, fixed fraction per trade. Cut losses fast; let winners run. If unsure whether to exit, you have probably already overstayed. The first stop is the cheapest stop. Don't add to losers. When a position keeps you up at night, it is too big. The market can stay irrational longer than you can stay solvent. Liquidity is greatest when you need it least. Reduce size after losses, not wins. If everyone knows it, it is in the price. Flat is a position.

## Failure Modes

Overtrading from boredom, with no edge. Revenge trading after a loss. Averaging down on losers, turning a small planned loss into a catastrophic one. Moving stops as price approaches them. Oversizing on conviction, forgetting conviction is not probability. Marking to hope. Mistaking a favorable regime for genius, then sizing up just as it turns. Ignoring correlation, so ten "different" positions are one big bet. Selling tails for premium until one event wipes out years of gains. Letting a trade become an identity.

## Anti-patterns

Trading without a written stop or sizing rule. Sizing by excitement rather than risk. Chasing price out of FOMO. Holding a loser because "it has to come back." Cherry-picking the journal. Confusing activity with productivity. Believing a backtest with no costs or slippage. Using leverage to compensate for a thin edge. Trusting VaR as a hard ceiling and ignoring the tail beyond it. Treating a tip as edge without verification. Counting unrealized gains as spendable certainty. Scaling up after a windfall.

## Vocabulary

**Edge** - a repeatable reason for positive expected value. **Expectancy** - average profit per trade. **Slippage** - expected versus actual fill price. **Market impact** - price move from your own order. **Spread** - gap between best bid and offer. **Order book** - resting orders at each price level. **Adverse selection** - losing to a better-informed counterparty. **Drawdown** - peak-to-trough equity decline. **Max drawdown** - the largest such decline. **VaR (Value-at-Risk)** - loss not exceeded at a given confidence over a horizon. **Expected shortfall** - average loss in the tail beyond VaR. **Sharpe ratio** - excess return per unit of volatility. **Risk-of-ruin** - probability of losing enough to stop trading. **Mark-to-market** - valuing positions at current prices. **Convexity** - capped downside, open upside. **Fat tails** - extreme events far more frequent than a normal distribution predicts. **Black swan** - a rare, high-impact, retrospectively rationalized event. **Mean reversion** - prices returning to an average. **Momentum** - trends persisting. **VWAP/TWAP** - volume- and time-weighted average price benchmarks. **Implementation shortfall** - execution cost versus the decision price. **Gamma** - rate of change of an option's delta. **Theta** - an option's time decay. **Kelly criterion** - bet-sizing formula for log-wealth growth. **Stop-loss** - predefined exit capping a loss. **Position sizing** - choosing trade size from risk and edge.

## Tools

Order management and execution systems for algorithmic slicing (VWAP, TWAP, implementation-shortfall, iceberg orders). Market data terminals (Bloomberg, Refinitiv) for prices, news, and depth-of-book. Level 2 / order book displays and time-and-sales tape. Charting platforms for technical levels. Risk systems computing VaR, expected shortfall, greeks, and stress scenarios. Backtesting environments (Python with pandas, NumPy) with realistic cost models. A disciplined journal recording thesis, entry, stop, size, exit, and reasoning.

## Collaboration

A trader works inside a risk framework set by risk management, who define limits, VaR budgets, and stop-out rules. Quants and researchers build and validate strategies; the trader supplies intuition about what actually fills and breaks live. Execution traders coordinate with portfolio managers to implement large orders without leaking intent, and compliance defines what is permissible. Good collaboration means honest, immediate communication of losses; the worst outcomes come from hiding a position until it is too large.

## Ethics

Front-running, trading ahead of a client's known order to profit from the move it causes, is theft and illegal; client orders come first, always. Acting on material non-public information is insider trading and prohibited. Market manipulation, spoofing (posting orders you intend to cancel to fake pressure), layering, or wash trading fabricates the information prices should convey and is criminal. For those with fiduciary duty, best execution is mandatory, and fill allocation must be fair. Marks must be honest, especially in illiquid books where mismarking hides losses. Do not lie to the market, do not steal from those who trust you, do not use information you are not entitled to use.

## Scenarios

Scenario one: a position moving against you. You are long a stock at 50 with a stop at 48, risking 2 points sized so they equal 1% of the account. It drops to 48.10 on a broad selloff, not company-specific news, and you want to widen the stop "because it's just noise." But the thesis was company-specific and the stop exists precisely for this. You honor it, take the 1% loss, and step aside; twenty minutes later the stock trades 46. The stop converted a potential 8% hit into the budgeted 1%.

Scenario two: an illiquid exit. You hold 200,000 shares of a small-cap that averages 80,000 a day. Bad earnings hit after the close, and the order book shows only 5,000 shares on the bid within 3% of the last print; a market order would crater the price. Do not panic-sell into no liquidity. Hedge by shorting a correlated liquid ETF or index future, then work the exit over the next sessions with an implementation-shortfall algorithm. The lesson: size to the liquidity, not the conviction.

Scenario three: a tempting tip. An acquaintance tells you, confidently, that a takeover is "happening next week, a sure thing," and the price has not moved. Stop. Is this information public? If it is non-public and material, acting on it is insider trading, a crime regardless of the source's confidence. Even if public, a "sure thing" with no defined risk ruins traders, because sizing collapses into "bet huge" once downside is assumed away. No clean information, no trade.

## Related Occupations

A financial analyst values securities and builds the fundamental case a trader may express through a position. An investment banker structures the deals that create the instruments traders move. A financial advisor manages client capital on a planning horizon rather than a trading P&L. A data scientist builds the predictive models systematic trading depends on. A compliance officer enforces permissible conduct. These roles share markets and capital but differ in horizon, mandate, and how risk is measured.


## References

Edwin Lefevre, *Reminiscences of a Stock Operator*. Nassim Nicholas Taleb, *Fooled by Randomness* and *The Black Swan*. Jack Schwager, *Market Wizards*. Van K. Tharp, *Trade Your Way to Financial Freedom*. Ralph Vince, on money management.
