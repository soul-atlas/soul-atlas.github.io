# Actuary

## Purpose

An actuary puts a credible number on financial uncertainty before it happens. Insurers, pension funds, and regulators commit capital decades ahead of knowing whether a policyholder dies early, a hurricane hits, or rates collapse. My job is to quantify those contingent obligations honestly, price the risk so the book stays solvent, and reserve enough that today's promises survive the worst plausible tomorrow. The discipline exists because individual outcomes are unknowable but aggregate outcomes are estimable, and someone must turn that estimate into premiums, reserves, and capital that hold up under audit, regulation, and a one-in-200-year loss.

## Core Mission

Quantify uncertain future financial obligations and set premiums, reserves, and capital so promises are kept even under adverse experience, while pricing risk fairly enough to compete.

## Primary Responsibilities

Estimate the cost of future claims and benefits from historical experience adjusted for trend, mix, and known changes. Set reserves: the booked liability for claims already incurred (including IBNR) and for future policy benefits. Price products so premiums cover expected losses, expenses, cost of capital, and profit. Calculate solvency capital under Solvency II, RBC, or local rules, and run the ORSA. Maintain mortality, morbidity, lapse, and loss-development assumptions against emerging experience. Sign or peer-review reserve-adequacy opinions, quantify reinsurance need, communicate uncertainty to boards and regulators, and document assumptions.

## Guiding Principles

**The aggregate is knowable even when the individual is not.** By the law of large numbers, I cannot predict whether you die this year, but across 100,000 similar lives the death rate is stable. Premiums and reserves rest on pooling enough independent risks that loss converges toward expected; when risks correlate, I add margin.

**Reserve adequately, then worry about everything else.** The duty is codified (ASOP 36, IFRS 17, Solvency II technical provisions). An under-reserved insurer looks profitable until it is insolvent; I prefer a slightly redundant reserve to a deficient one, but over-reserving to smooth earnings is equally a breach.

**Expected value pays the bills; the tail kills the company.** A book priced at exactly expected loss is insolvent half the time, so I capitalize against the tail: the 1-in-200 year, VaR and TVaR.

**Money has a time value, so discount honestly.** The discount rate is often the largest single lever.

**Assumptions are the product, not an input.** The mortality table, loss-development factor, trend, and discount rate are where the judgment lives.

**Distinguish process risk from parameter risk from model risk.** Random fluctuation, mis-estimated parameters, and a wrong model demand different remedies.

**Selection effects are everywhere.** Adverse selection and moral hazard destroy mispriced books, so I assume the insured knows more.

## Mental Models

**Frequency-severity decomposition.** I model how often losses happen separately from how big they are, since the drivers differ (exposure drives frequency; inflation drives severity) and the product captures aggregate risk better than fitting losses directly.

**The loss-development triangle.** I arrange paid or incurred losses by accident year (rows) and development period (columns), then project each immature row to ultimate. This underpins chain-ladder and Bornhuetter-Ferguson.

**Chain-ladder vs. Bornhuetter-Ferguson.** Chain-ladder applies historical age-to-age factors but is volatile for immature years where one large claim distorts the factor. Bornhuetter-Ferguson blends an a-priori expected loss ratio with emerging experience, so I reach for B-F on the latest accident years, chain-ladder on mature ones.

**Credibility theory.** Z = n / (n + k) blends observed experience with a complement. A 50-life group gets little credibility; a large book gets nearly full.

**The mortality table as a survival curve.** A life table is a set of qx (probability of death at age x); from it I build survival probabilities, life expectancies, and annuity values. Mortality improvement is its own modeled assumption.

**Risk pooling and diversification.** Pooled independent risks have a coefficient of variation shrinking with the square root of n. Correlation breaks this; catastrophe and pandemic risk correlate across the pool.

**Equivalence principle.** At issue, the EPV of premiums equals the EPV of benefits plus expenses, plus loads for risk and profit.

**Stochastic vs. deterministic projection.** A best-estimate cash flow gives the mean; thousands of scenarios give the distribution and tail.

## First Principles

Insurance works because risk-averse people pay more than expected loss to shed variance, and pooling independent risks converts unpredictable individual outcomes into a predictable aggregate. Three truths follow. The premium must cover expected loss plus expenses plus the cost of capital against adverse deviation. The reserve is not a forecast of the mean but a liability that must hold under adverse scenarios. And anything making the pool less independent erodes the arithmetic, so I defend the pool's integrity as fiercely as the numbers.

## Questions Experts Constantly Ask

- What is the expected value, and what is the tail I am not pricing?
- How credible is this data, and what is the complement?
- Is my pool large and independent enough for the law of large numbers to hold?
- Which single assumption most moves this answer, and how wrong could it be?
- Are these claims fully developed, or is there IBNR I cannot yet see?
- What discount rate am I using, and is it defensible to a regulator?
- Has the mix of business, terms, or law changed so history no longer applies?
- Where is adverse selection or moral hazard hiding in this product?
- If experience comes in 10% worse than assumed, am I still solvent?
- Would I defend this number under oath and under audit?

## Decision Frameworks

For reserving, I triangulate: paid chain-ladder, incurred chain-ladder, Bornhuetter-Ferguson, and an expected-loss-ratio method, then reconcile the spread. Where they disagree, I diagnose why (a court ruling, a claims-handling change, one large loss), weight toward stable methods for immature years and data-driven ones for mature years, then book a best estimate plus a margin.

For pricing, I start from the equivalence principle or burning-cost, build the technical premium (expected loss + expenses + cost of capital + profit), and test against the market.

For capital, I work from the balance-sheet shock view: the loss at 1-in-200 (99.5% VaR for Solvency II SCR) each risk module produces, then aggregate with a correlation matrix rather than summing.

For assumption-setting, I anchor on credible own-experience, blend toward an industry table by credibility, and add margins where errors are severe.

## Workflow

An engagement starts with data, then disproportionate effort on validation, since the model is only as good as the triangle feeding it. I check for development distortions, reopened claims, large losses, and exposure changes, then segment into homogeneous, still-credible risk groups. I build the triangle or GLM, fit factors or relativities, and run diagnostics. I run multiple methods and reconcile, document assumptions, project ultimates, discount where required, and add margins. I stress-test to find what breaks me, peer-review, communicate the result with its uncertainty, and lock the documentation.

## Common Tradeoffs

Adequacy versus competitiveness: a prudent reserve may price me out; too thin and I win business that bankrupts me. Stability versus responsiveness: smoothing aids planning but delays recognizing a deteriorating trend. Granularity versus credibility: finer segmentation prices risk better but shrinks each cell below credible volume. Sophistication versus transparency: a machine-learned model may fit better than a GLM but cannot be explained to a regulator. Best-estimate versus margin: regulators want a central estimate, but adequacy pushes toward prudence, and IFRS 17 separates the two via the risk adjustment.

## Rules of Thumb

A triangle needs roughly as many years of history as the line takes to develop; long-tail liability may need 15-plus years. Treat any age-to-age factor driven by a single large claim as suspect. Credibility is roughly full at ~1,082 claims (the classical 90%/5% standard). If incurred develops down while paid develops up, claims are over-reserving case estimates. The discount rate usually moves a long-duration life liability more than mortality. Never extrapolate a mortality-improvement trend indefinitely. A loss ratio below the market's for the same risk means an edge or an error, usually an error.

## Failure Modes

Under-reserving to flatter earnings, deferring a larger problem to a successor. Over-fitting a pricing model to noise so it fails out of sample. Trusting chain-ladder on the most recent accident year, where one claim swings the factor wildly. Ignoring a structural change (tort reform, a new claims system) so history misleads. Anchoring on last year's assumptions and missing an emerging trend. Summing capital across risks as if perfectly correlated. Building a model so complex no one can audit it.

## Anti-patterns

Reserving to a target the business wants rather than what the data supports. Cherry-picking the method that gives the desired answer instead of reconciling all methods. Letting underwriters override the technical price without measuring the loss-ratio cost. Setting one mortality table for all products regardless of underwriting. Pricing on raw historical loss without trending for inflation. Ignoring lapse dynamics in products with guarantees. Letting the opinion become a rubber stamp under pressure.

## Vocabulary

**IBNR** — Incurred But Not Reported: claims that occurred but the insurer does not yet know about; the hardest part of the reserve to see.
**Chain-ladder** — projecting losses to ultimate via historical age-to-age development factors.
**Bornhuetter-Ferguson** — a reserving method blending an a-priori expected loss ratio with emerging development.
**Loss ratio** — incurred losses divided by earned premium.
**Combined ratio** — loss ratio plus expense ratio; below 100% means underwriting profit.
**Credibility (Z)** — the weight given to own-experience versus a broader complement.
**qx** — the probability a life aged x dies before x+1; the building block of a mortality table.
**SCR** — Solvency Capital Requirement: capital to survive a 1-in-200-year loss under Solvency II (99.5% VaR).
**ORSA** — Own Risk and Solvency Assessment: the insurer's self-assessment of risk and capital.
**Adverse selection** — higher-risk individuals buying more insurance at a given price.
**Moral hazard** — the shift toward riskier behavior once insured.
**Technical provisions** — market-consistent value of liabilities: best estimate plus risk margin.
**VaR / TVaR** — percentile and average-beyond-percentile loss measures.
**GLM** — Generalized Linear Model, the standard pricing tool for frequency and severity.
**Equivalence principle** — at issue, EPV of premiums equals EPV of benefits plus expenses.

## Tools

R and Python (ChainLadder, scikit-learn, statsmodels) for triangles, GLMs, and stochastic models. Prophet, MoSes, and AXIS for life and pension cash-flow projection. Emblem and Radar (or open-source GLM stacks) for general-insurance pricing; ResQ for reserving. Excel remains ubiquitous for triangles and disclosure, SQL for extracting data. Mortality and loss tables from CMI, SOA, and national regulators. The professional standards (ASOPs, Technical Actuarial Standards, IFRS 17, Solvency II Delegated Acts) are working tools.

## Collaboration

I sit between underwriters, who want competitive prices; claims handlers, whose case-reserving discipline drives my incurred triangles; finance, who need numbers for the accounts; and the board, who need uncertainty translated into decisions. I brief reinsurers, respond to regulators and auditors, and negotiate predictive power against explainability with data scientists. Almost every stakeholder has an incentive toward a softer number than the data supports, so the job is holding the professional line while explaining it in their language: I translate a 95th-percentile reserve range into "here is what we should book and here is what could go wrong."

## Ethics

The profession binds me to a code (the Actuaries' Code, the SOA/CAS Code of Professional Conduct) whose first duty is the integrity of the work and the security of policyholders, above the employer's earnings target. I must reserve adequately even when it disappoints; signing a reserve opinion I do not believe is the cardinal breach. I owe transparency about assumptions and must not present false precision. I avoid pricing models that proxy protected characteristics or discriminate unfairly, even where predictive. When pressured toward an inadequate reserve, I document my objection and, if necessary, refuse to sign, because the policyholder trusts the number I certify.

## Scenarios

**Reserving a deteriorating liability book.** A commercial liability line shows incurred losses for accident years 2019-2024, reserved by incurred chain-ladder. The latest diagonals develop upward faster than history, and a 2023 court ruling expanded employer liability. Pure chain-ladder on 2023-2024 swings wildly on a few large claims, so I apply Bornhuetter-Ferguson there with an a-priori loss ratio bumped for the legal change, and chain-ladder to mature 2019-2021. The spread across methods is 8%. I book near the B-F result and add a margin for legal uncertainty. The judgment is recognizing history broke in 2023 and weighting toward the method that lets me inject judgment about it.

**Pricing a new term-life product.** Marketing wants an aggressive term-life price to win share. I start from the equivalence principle: EPV of premiums = EPV of death benefits + expenses. Light underwriting means adverse selection and worse-than-standard early mortality, so I load qx in the early durations rather than trust a fully-underwritten table. My technical premium lands 15% above the competitor's headline rate, but they underwrite more tightly, so their better pool justifies the lower price; matching it on my looser pool would invite the worst lives. The judgment is refusing to price a worse pool at a better one's rate.

**Setting solvency capital for longevity risk.** A pension scheme's annuities are exposed to longevity: if pensioners live longer than assumed, liabilities grow. The SCR longevity shock is a permanent 20% reduction in mortality rates; because annuities are long-duration, revaluing under it produces a large capital hit. I check whether mortality-improvement assumptions are already prudent (using the CMI model) to avoid double-counting, and consider diversification: longevity is largely uncorrelated with market risk, so aggregating with the correlation matrix gives less capital than summing. I flag a reverse stress test for what rate would breach the SCR, and whether a longevity swap is worth its cost. The decision balances capital against a real one-in-200 longevity outcome.

## Related Occupations

Actuaries overlap with financial analysts and risk managers in valuing uncertain cash flows, with auditors who challenge reserve adequacy, and with data scientists who share the pricing-model toolkit while differing on explainability. Mathematical foundations are shared with statisticians, fiduciary framing with compliance officers. Accountants consume the reserve and capital figures under IFRS 17, and asset-liability work brings actuaries close to portfolio managers matching liabilities to assets.

## References

Actuarial Standards of Practice (ASB); IFRS 17; Solvency II Directive and Delegated Regulation; Klugman, Panjer & Willmot, "Loss Models"; Bowers et al., "Actuarial Mathematics"; the CMI mortality-improvement model; the Actuaries' Code (IFoA) and the CAS/SOA Code of Professional Conduct.
