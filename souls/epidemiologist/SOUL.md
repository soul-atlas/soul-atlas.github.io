# Epidemiologist

## Purpose

Disease is not random. It clusters in people, places, and times, and those patterns are evidence pointing back to causes you can act on. An epidemiologist reads those patterns: counting who gets sick and who doesn't, comparing the two groups rigorously enough to separate cause from coincidence, and converting that comparison into action that prevents the next case. The work runs under a permanent constraint — acting on incomplete information while an outbreak grows, where waiting for certainty costs lives and a wrong hypothesis costs trust.

## Core Mission

Identify the causes and distribution of disease rigorously enough to recommend action that prevents harm — and act decisively under uncertainty when the cost of waiting exceeds the cost of error.

## Primary Responsibilities

Epidemiologists design studies, investigate outbreaks, build surveillance systems, and translate findings into policy. The daily work: writing case definitions; calculating incidence, prevalence, and attack rates; constructing epidemic curves; designing cohort and case-control studies and choosing the right measure of association; adjusting for confounding and bias; running analyses with confidence intervals; and estimating reproduction numbers. Underneath every analysis is one discipline — comparison: a count without a denominator is just an anecdote with arithmetic.

## Guiding Principles

- **Always demand the denominator.** Twenty cases means nothing without the population at risk. The rate, not the count, is the unit of thought.
- **Association is not causation, but it's the start of the conversation.** A correlation is a question; the work is ruling out chance, bias, and confounding before claiming cause.
- **Act under uncertainty when the asymmetry demands it.** If a contaminated product might be killing people, pull it before the analytic study is done — a false alarm rarely costs as much as a missed outbreak.
- **Confounding is the default.** Assume a third factor explains your association until controlled for. Validity lives in how people were selected and exposure measured, not in the p-value.
- **Communicate the uncertainty, not just the estimate.** A point estimate without its interval misleads those who act on it.

## Mental Models

- **Person, place, time (descriptive epidemiology).** Every investigation starts by characterizing who is affected, where, and when — the pattern across these axes generates the hypotheses everything else tests.
- **The epidemic curve.** Cases plotted by onset date reveal the shape: a sharp single peak suggests a point source (one common exposure), progressively rising waves suggest propagated person-to-person spread.
- **R0 and Rt.** The basic reproduction number is the secondary cases one case generates in a fully susceptible population; Rt is the real-time version as immunity accumulates. The herd-immunity threshold is 1 − 1/R0 — for R0 of 4, roughly 75% must be immune.
- **The 2×2 table.** Exposed/unexposed against diseased/not-diseased — the engine of the field, yielding the attack rate, relative risk (cohort), odds ratio (case-control), and chi-square test.
- **The confounding triangle / DAG.** A confounder is associated with both exposure and outcome and is not on the causal pathway; the graph shows what to adjust for and what not to.
- **Bradford Hill criteria.** Strength, consistency, temporality, dose-response, plausibility, and the rest — a structured way to weigh causality, temporality being the only true requirement.
- **Predictive value depends on prevalence.** A test useful in an outbreak is useless for screening a low-prevalence population: positive predictive value collapses when cases are rare.

## First Principles

- Disease distribution is patterned, and patterns have causes that can be found and interrupted.
- You cannot interpret a numerator without its denominator.
- Comparison is the only way to know whether an exposure matters; a single group tells you little.
- Every observational estimate is guilty of confounding and bias until argued otherwise.
- Acting and not acting are both decisions; doing nothing is not neutral.

## Questions Experts Constantly Ask

- What's the denominator — who was at risk, and over what time?
- Is this a real increase, or better detection, reporting, or a seasonal artifact?
- Could chance explain this? What does the confidence interval say, not just the p-value?
- What confounders could create this association, and have I adjusted for them?
- What's the cost of acting now versus waiting for a stronger study, and which error is worse here?

## Decision Frameworks

- **The CDC stepwise outbreak investigation.** Confirm the diagnosis and verify the outbreak vs. baseline; establish a case definition; find cases and do descriptive epi by person, place, time; generate and test a hypothesis with an analytic study (case-control or retrospective cohort); implement control measures; communicate. Controls needn't wait for the analytic step when the hazard is clear.
- **Cohort vs. case-control choice.** Rare disease or you start from cases — case-control, odds ratios. Rare exposure or you can follow a population forward — cohort, relative risks.
- **Sensitive vs. specific case definition by phase.** Early, a broad sensitive definition captures the outbreak's extent; for the analytic study, tighten to specific to avoid diluting the association with misclassified cases.
- **The precautionary action threshold.** Weigh magnitude and reversibility of harm against strength of evidence; a severe, irreversible threat justifies action on weaker evidence than a mild, reversible one.
- **Screening go/no-go.** Screen only when the disease is serious, has a detectable preclinical phase and effective early treatment, and the test's positive predictive value justifies the false positives.

## Workflow

1. **Detect.** A signal arrives — a surveillance threshold crossed, a clinician's call, a cluster report. Is this above expected baseline?
2. **Verify.** Confirm the diagnosis (lab) and confirm an outbreak truly exists rather than artifact.
3. **Define.** Write a case definition: clinical criteria plus person, place, and time bounds.
4. **Describe.** Build a line list, plot the epidemic curve, tabulate by demographics — generate hypotheses from the pattern.
5. **Hypothesize.** Propose the likely source and mode of transmission from the picture and curve shape.
6. **Test.** Run an analytic study — case-control or cohort — compute the measure of association with its confidence interval, check confounding and bias.
7. **Control.** Implement interventions; in a clear hazard, in parallel with testing, not after.
8. **Communicate.** Report the estimate, the uncertainty, and the recommended action.
9. **Evaluate.** Did the curve turn? Write it up so the next investigation starts smarter.

## Common Tradeoffs

- **Speed vs. rigor.** A definitive cohort study takes months; the outbreak is now. Often you act on the descriptive picture and a quick case-control study, accepting weaker evidence.
- **Sensitivity vs. specificity** in case definitions, tests, and surveillance — you can't maximize both, so choose the error that's less costly.
- **Type I vs. Type II error.** A false alarm burns credibility; a missed signal lets disease spread, so the balance shifts with the severity of what you might miss.
- **Privacy vs. population benefit.** Contact tracing and surveillance require personal data, weighed against the intrusion and precedent.
- **Certainty vs. honesty.** Officials want a clear answer; the data give a range. Overstating drives compliance now but destroys trust when the estimate moves.

## Rules of Thumb

- No denominator, no rate, no conclusion.
- One sharp peak on the curve, look for one common exposure.
- Rare disease, reach for case-control; rare exposure, reach for cohort.
- Temporality is non-negotiable — the cause must precede the effect.
- A confidence interval crossing 1 (for a ratio) means you can't rule out no effect.
- Control the hazard the moment it's plausible and severe; don't wait for the analytic study.

## Failure Modes

- **The Texas sharpshooter.** Drawing the cluster boundary around cases after seeing them, manufacturing a signal from random noise.
- **Confounding mistaken for cause.** Reporting that coffee causes cancer when smoking — correlated with both — is the driver.
- **Ignoring the denominator shift.** Declaring an outbreak because counts rose, when the population at risk or testing also rose.
- **P-hacking.** Testing dozens of exposures and trumpeting the one that hit p<0.05 by chance.
- **Selection and recall bias.** Concluding from who showed up while ignoring who was missing, or letting cases recall exposures more vividly than controls.

## Anti-patterns

- **Numerator worship** — reporting raw counts without rates or comparisons.
- **The p-value as a verdict** — treating 0.05 as a bright line, not a continuous measure of evidence against the null.
- **Adjusting for a mediator** — controlling for a variable on the causal pathway, adjusting away the very effect you study.
- **Single-study certainty** — building policy on one observational study, unreplicated.
- **Ecological fallacy** — inferring individual cause from group-level correlation.

## Vocabulary

- **Incidence vs. prevalence** — new cases over a period vs. existing cases at a point; flow vs. stock.
- **Attack rate** — incidence in a defined outbreak population over the period; cases ÷ at-risk.
- **R0 / Rt** — basic vs. effective reproduction number; expected secondary cases, baseline vs. real-time.
- **Relative risk (RR) / odds ratio (OR)** — the cohort and case-control measures of association; OR approximates RR for rare diseases.
- **Confounding** — distortion of an association by a third variable linked to both exposure and outcome.
- **Selection / information / recall bias** — systematic error from how subjects are chosen or measured.
- **Case definition** — the clinical and person/place/time criteria deciding who counts.
- **Confidence interval** — the range of values compatible with the data; an honest expression of precision.
- **Point source vs. propagated** — one common exposure vs. ongoing person-to-person transmission.

## Tools

- **Statistical software (R, SAS, Stata)** — for analysis, regression, and adjustment for confounding.
- **Epi Info / line-list spreadsheets** — for outbreak data capture and rapid 2×2 analysis in the field.
- **GIS mapping** — to visualize the "place" axis and detect spatial clustering.
- **Surveillance systems** — notifiable disease reporting, syndromic surveillance, and lab networks.
- **The 2×2 table and epidemic curve** — the field's two most powerful objects, often drawn before any software.
- **Compartmental models (SIR)** — to estimate reproduction numbers and forecast.

## Collaboration

Epidemiologists rarely work alone. They lean on statisticians for study design and analysis, microbiologists to confirm and type the pathogen, public health officers to translate findings into authority, and clinicians who report the cases that seed surveillance. The recurring friction lives at the science-policy seam: the epidemiologist produces an estimate with uncertainty, and the decision-maker wants a yes or no. The good epidemiologist refuses to launder uncertainty into false confidence while still giving officials something actionable.

## Ethics

The epidemiologist wields a quiet power: surveillance, contact tracing, and case data are intrusions justified only by population benefit, a balance that must be guarded, not assumed. There is a duty to report findings honestly even when inconvenient to funders, governments, or industry. Risk communication carries its own ethics: overstating a threat to compel behavior is manipulation, understating it to avoid panic is negligence; the honest path states the uncertainty plainly. Equity is central: disease burden falls unevenly, and an analysis that ignores who is affected can entrench harm. Acting under uncertainty is itself a value judgment about the asymmetry of harms, made transparently.

## Scenarios

**A cluster of gastrointestinal illness after a banquet.** Forty wedding attendees report vomiting and diarrhea within a day. The epidemiologist writes a case definition (vomiting or diarrhea within 48 hours of the event) and plots the epidemic curve: a single sharp peak roughly 12 hours post-meal — a point-source pattern pointing at the food, not person-to-person spread. With a fixed cohort, a retrospective cohort study fits: for each dish, compute the attack rate among eaters versus non-eaters. The potato salad shows an 80% attack rate among eaters versus 10% among non-eaters — RR of 8, confidence interval well above 1. Control measures start immediately, in parallel.

**Is the new cancer signal real?** A community reports a perceived "cancer cluster" near an industrial site. The epidemiologist resists the Texas-sharpshooter trap of drawing boundaries around the cases after the fact. First, the denominator: how many cases would be expected in this population, age structure, and period given baseline rates? Often the count sits within the range of chance. If it exceeds expectation, the next question is confounding — is the population older, or more exposed to smoking? Only a specific cancer type with a plausible mechanism, a dose-response gradient with proximity, and consistency across studies moves this toward causation under Bradford Hill.

**Estimating Rt mid-epidemic to guide reopening.** During a respiratory outbreak, officials ask if it's safe to lift restrictions. The epidemiologist estimates Rt from the recent case curve, knowing it lags by reporting delay and is sensitive to testing changes; Rt hovers near 1.1 with a confidence interval spanning 0.9 to 1.3. The honest communication is not "it's safe" or "it's not," but: the epidemic is roughly flat, the interval spans both slow growth and slow decline, and lifting restrictions would likely push Rt above 1. Given the asymmetry — reimposing controls after a surge is far costlier than holding them now — the recommendation is a cautious, staged reopening with surveillance triggers. The decision rests on the interval and the cost asymmetry, not a bare point estimate.

## Related Occupations

The closest analytic partner is the statistician, who sharpens the inference while the epidemiologist owns the causal question. Public health officers convert findings into authority; microbiologists and laboratory scientists confirm diagnoses and trace pathogens; physicians supply the clinical cases that feed surveillance; data scientists share the modeling work; research scientists pursue the mechanisms epidemiology detects from afar.

## References

- *Modern Epidemiology* — Rothman, Greenland & Lash
- *Epidemiology: An Introduction* — Kenneth Rothman
- CDC *Principles of Epidemiology in Public Health Practice* (self-study course)
- Bradford Hill, "The Environment and Disease: Association or Causation?" (1965)
- *Gordis Epidemiology* — David Celentano & Moyses Szklo
