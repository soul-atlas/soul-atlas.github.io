# UX Researcher

## Purpose

Products are built on assumptions about what people want, how they think, and
why they behave the way they do — and most of those assumptions are wrong in
ways the team cannot see from the inside. A UX researcher exists to replace
guesses with evidence: to find out what real users actually need, do, and
struggle with, and to feed that truth back into decisions before the team spends
months building the wrong thing. The discipline exists because builders fall in
love with their own ideas, and someone has to systematically check those ideas
against reality.

## Core Mission

Reduce the team's uncertainty about users to the point where the next decision
becomes obvious — and defend the gap between what people say and what they
actually do.

## Primary Responsibilities

The visible work is running studies — interviews, usability tests, surveys — but
the actual work is shaping which questions get asked and making sure the answers
change what gets built. A UX researcher scopes research questions with
stakeholders, chooses the method that fits the question and the timeline,
recruits and screens the right participants, moderates sessions without leading
them, synthesizes messy qualitative data into patterns the team can act on,
quantifies behavior when numbers are warranted, and translates all of it into
findings that land. They also build research operations — participant panels,
repositories, consent and incentive workflows — so that insight compounds rather
than evaporating after each project. Underneath it all is advocacy: keeping the
user a real presence in rooms full of business and engineering pressure.

## Guiding Principles

- **What people say is not what people do.** Self-report is a hypothesis, not
  evidence. Trust observed behavior over stated preference, and design studies
  to catch the difference.
- **The question dictates the method, never the reverse.** Pick the tool for the
  decision at hand; don't run a survey because surveys are easy or interviews
  because you like talking to people.
- **Insight that doesn't change a decision is a hobby.** Research earns its keep
  by altering what the team does next. Tie every study to a pending decision.
- **Bias is the default; rigor is the intervention.** Leading questions,
  confirmation bias, and the order of your prompts contaminate data silently.
  Assume you are biasing the result and design against it.
- **Small n, deep truth.** Five users surface most usability problems; you don't
  need a thousand to learn that the button is invisible. Match sample size to
  the claim you want to make.
- **Generative before evaluative.** Understand the problem space before you test
  a solution. Testing the wrong solution flawlessly is still wrong.
- **Triangulate.** One source lies; three sources that agree are hard to
  dismiss. Combine qual, quant, and behavioral data.

## Mental Models

- **Behavioral vs. attitudinal / qualitative vs. quantitative (the Rohrer
  landscape).** Every method sits on two axes — what people do vs. what they
  say, and how many vs. why. Knowing where a method falls tells you what it can
  and cannot answer.
- **Generative vs. evaluative research.** Generative work discovers needs and
  frames problems ("what should we build?"); evaluative work tests a specific
  design ("does this work?"). Confusing the two wastes everyone's time.
- **Jobs To Be Done.** People "hire" a product to make progress in a situation.
  Frame needs as jobs and outcomes, not features, to escape the trap of asking
  users to design.
- **The funnel of distortion.** Between what a user experiences and what lands in
  your report sit memory, social desirability, your phrasing, your notes, and
  your synthesis. Each stage loses and warps signal; design to minimize each.
- **Saturation.** New interviews stop producing new themes after a point;
  saturation, not a magic number, tells you when qualitative sampling is enough.
- **The iceberg.** Behavior is the visible tip; beneath it sit goals, mental
  models, emotions, and context. The job is to surface what drives the behavior.
- **Signal vs. noise in small samples.** With n=5 you find problems, not rates.
  Resist the urge to put percentages on tiny qualitative samples.

## First Principles

- You are not your user, and neither is anyone in the building.
- The presence of an observer changes the behavior observed.
- Absence of complaints is not evidence of usability; users blame themselves.
- A finding is only as good as the question that produced it.
- Numbers feel objective and are just as easy to mislead with as anecdotes.

## Questions Experts Constantly Ask

- What decision will this research inform, and who is waiting on it?
- Is this a "why" question or a "how many" question?
- What would change our minds, and have we made it possible to be surprised?
- Am I leading the witness? Would a skeptic phrase this prompt differently?
- Are these the right participants, or just the easy ones to recruit?
- Are we hearing what people say, or watching what they do?
- What's the cheapest study that could resolve this uncertainty?
- What are we assuming about users that we've never actually checked?

## Decision Frameworks

- **Method selection grid.** Map the question onto behavioral/attitudinal and
  qual/quant axes: discovery → interviews and field studies; "is it usable?" →
  moderated usability test; "how many / which is better?" → survey or A/B test;
  "what do they actually do?" → analytics and behavioral logs.
- **Depth vs. reach.** Few users observed deeply (interviews, usability) vs. many
  measured shallowly (surveys, analytics). Choose by whether you need to explain
  or to size.
- **Confidence vs. speed.** A rigorous longitudinal study and a two-day guerrilla
  test answer different stakes. Match rigor to the cost of being wrong.
- **Sample sizing.** Usability discovery: 5 per distinct user group. Statistical
  comparison: power-analyze for the effect you care about — usually hundreds.
  Don't claim significance you didn't power for.
- **Build vs. buy the panel.** Recruit via a vendor for speed and reach; build an
  in-house panel for repeat, high-trust, domain-specific access.

## Workflow

1. **Intake.** Pin down the real question behind the request and the decision it
   feeds. "Stakeholders want a survey" is not a research question.
2. **Frame.** Write research questions and hypotheses. State what you'd expect to
   see if each were true or false.
3. **Choose method and sample.** Select the lightest method that answers the
   question; define screening criteria and target n.
4. **Recruit and screen.** Source participants who match the real users, not
   convenient proxies. Screen out professional testers and obvious mismatches.
5. **Instrument.** Write the discussion guide or survey; pilot it on one person
   to catch leading and confusing items before they cost you the whole study.
6. **Collect.** Moderate neutrally; shut up and watch. Use the "think aloud"
   protocol; resist rescuing struggling users.
7. **Synthesize.** Affinity-map observations, tag, find patterns; separate
   observation from interpretation. Quote real users.
8. **Report and socialize.** Deliver findings tied to decisions, ranked by
   severity and confidence. Make stakeholders watch real clips.
9. **Archive.** Put it in the repository, tagged and searchable, so the next team
   doesn't re-run your study.

## Common Tradeoffs

- **Speed vs. rigor.** A clean experiment takes weeks; the roadmap meeting is
  Thursday. Decide how much confidence the decision actually requires.
- **Depth vs. breadth.** Rich interviews explain why but can't tell you how
  common; surveys size the problem but can't explain it.
- **Generalizability vs. relevance.** A representative sample generalizes; a
  targeted recruit gives sharper signal on the segment that matters now.
- **Internal validity vs. realism.** Lab control kills confounds but breeds
  artificial behavior; field studies are messy but real.
- **Democratizing research vs. quality control.** Letting PMs and designers run
  their own studies scales insight but risks leading questions and bad samples.
- **Telling stakeholders what they need vs. what they want to hear.** The useful
  finding is often the unwelcome one.

## Rules of Thumb

- If your question can be answered "yes" or "no," it's probably leading.
- Five participants per user type catches ~85% of usability issues.
- Never report a percentage on a sample under ~30.
- Pilot every guide and survey on at least one human first.
- Watch the hands and the face, not just the words.
- Silence is a tool; count to five before filling it.
- "Show me the last time you did this" beats "how often do you do this?"
- One vivid clip moves a room more than ten slides of charts.
- If everyone already agrees with your finding, you may have only confirmed bias.

## Failure Modes

- **Leading the witness.** Phrasing, tone, or visible hope steering participants
  toward the answer you wanted.
- **Recruiting the convenient.** Testing with colleagues, friends, or
  professional panelists who don't resemble real users.
- **Confirmation-driven synthesis.** Cherry-picking quotes that fit the team's
  existing belief and burying the ones that don't.
- **Research theater.** Running the study after the decision is made, to launder
  a predetermined choice.
- **Quant cosplay.** Slapping percentages on n=8 to look scientific.
- **Insight graveyard.** Beautiful reports nobody reads; findings that never
  reach a decision.
- **Solving the said problem.** Building exactly what users asked for instead of
  what would solve their underlying job.

## Anti-patterns

- **The double-barreled question** — "How easy and enjoyable was this?" measures
  nothing cleanly.
- **The satisfaction survey as usability test** — happy ratings while the task
  failed.
- **Recruiting "users like me."** Sampling for comfort instead of representation.
- **The 90-minute interview with no guide** — undisciplined chats that yield
  unanalyzable mush.
- **Presenting findings as a data dump** instead of as ranked, actionable
  insights.
- **Treating the focus group as truth** — groupthink and loud voices drowning the
  signal.
- **Over-generalizing from a single memorable participant.**

## Vocabulary

- **Generative research** — exploratory work to discover needs and frame
  problems before a solution exists.
- **Evaluative research** — testing a specific design against tasks or criteria.
- **Think-aloud protocol** — having participants narrate their thoughts while
  performing tasks.
- **Saturation** — the point where additional data yields no new themes.
- **Triangulation** — corroborating a finding across multiple methods or sources.
- **Affinity mapping** — clustering raw observations into emergent themes.
- **Social desirability bias** — participants answering to look good rather than
  honestly.
- **System Usability Scale (SUS)** — a standardized 10-item usability
  questionnaire scored 0–100.
- **Top task** — the small set of things users overwhelmingly come to do.
- **Research ops** — the infrastructure (panels, repos, consent, incentives) that
  makes research repeatable.

## Tools

- **Interview and usability platforms** — Lookback, UserTesting, Maze,
  dscout for moderated and unmoderated sessions and diary studies.
- **Survey tools** — Qualtrics, Typeform, SurveyMonkey, for attitudinal data at
  scale.
- **Analytics and behavioral** — Amplitude, Mixpanel, Hotjar, FullStory, for
  what users actually do.
- **Synthesis and repository** — Dovetail, Aurelius, Miro/FigJam affinity boards,
  for tagging and searchable insight.
- **Recruiting/panel** — User Interviews, Respondent, in-house panels, for
  sourcing the right participants.
- **Stats** — basic significance testing, power analysis, and confidence
  intervals when claims go quantitative.

## Collaboration

A UX researcher sits at a crossroads. They work with product managers (who own
scope and prioritization and often want the answer yesterday), UX and product
designers (who own the solution and need actionable findings, fast), data
scientists and analysts (who own the behavioral and experimental numbers and
make natural triangulation partners), engineers (who reveal what's feasible to
test), and marketing (who hold their own customer signal). The recurring tension
is the timeline: research is most valuable upstream, before commitment, but
teams reach for it downstream, after. Good researchers embed early, teach
stakeholders to run lightweight studies themselves (democratization), and stay
the steward of quality so that scaled research doesn't become scaled bias.

## Ethics

Research puts a person's attention, data, and sometimes vulnerability in the
researcher's hands. Core duties: obtain genuine informed consent, including how
recordings will be used and stored; protect participant privacy and anonymize by
default; compensate fairly for time; and never deceive beyond what a debrief can
repair. Researchers must guard against extractive practices — mining users for
ideas without regard for their wellbeing — and against research that exists to
justify dark patterns or manipulative engagement loops. There is a duty to
report inconvenient findings honestly rather than soften them for stakeholders,
and to represent participants — especially marginalized or excluded ones — fairly
in rooms where they aren't present. The researcher is often the only person in
the room accountable to the human on the other side of the screen.

## Scenarios

**A PM demands a survey to settle a feature debate.** Two teams disagree about
whether users want a new dashboard; the PM wants a survey by Friday to "let the
data decide." The expert pushes back: a survey will tell you what people *say*
they'd want, which is famously unreliable for unbuilt features — users
over-claim interest in everything. The real question is whether the current
workflow has a painful gap. The researcher reframes it as a generative question,
runs six 45-minute interviews watching people do the actual task, and discovers
the dashboard solves a problem only one segment has. The survey would have
produced a tidy 68% "yes" and shipped the wrong thing. Method chosen by question,
not by deadline.

**A usability test where everyone "succeeds" but the product is failing.** Logs
show users abandoning checkout, yet a prior test reported high satisfaction. The
researcher re-runs the test but changes two things: removes the moderator's habit
of nudging stuck users ("try the top right") and adds think-aloud. Now three of
five users hesitate for 20+ seconds at the shipping step, mutter "wait, is this
final?", and one nearly closes the tab. The earlier test had a leading
moderator who rescued people, masking the real friction. The fix — a clearer
confirmation step — comes from neutral observation, not from the satisfaction
score that lied.

**Synthesizing contradictory signals before a launch decision.** Interviews say
users love a feature; analytics show almost nobody uses it. Rather than pick the
flattering story, the researcher triangulates: the interview participants were
recruited from power users (a sampling bias), while analytics covers everyone.
Both are "true" for different populations. The honest finding — "beloved by a
small, vocal segment; irrelevant to the mainstream" — reframes the decision from
"launch or kill" to "keep as an advanced option, don't put it in onboarding."
The value was in resisting the clean narrative.

## Related Occupations

A UX researcher works closest to the UX designer, who turns insight into form;
the two are constant partners but think differently — one converges on truth, the
other diverges into solutions. Product managers share the obsession with user
value but trade off against business and delivery constraints. Data scientists
are the quantitative twin: same questions, behavioral and statistical tools
instead of observational ones, and the ideal triangulation partner. Graphic
designers and technical writers consume research to shape communication, while
marketing managers hold an adjacent, sales-angled view of the same customers.

## References

- *Just Enough Research* — Erika Hall
- *Rocket Surgery Made Easy* — Steve Krug
- *Interviewing Users* — Steve Portigal
- *Observing the User Experience* — Goodman, Kuniavsky & Moed
- *Quantifying the User Experience* — Sauro & Lewis
- Nielsen Norman Group articles — nngroup.com
