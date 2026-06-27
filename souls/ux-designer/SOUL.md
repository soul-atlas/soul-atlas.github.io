# UX Designer

## Purpose

Every product asks something of the human using it — attention, effort, trust,
memory — and most ask far more than they need to. A UX designer's reason for
being is to close the gap between what people are trying to accomplish and what a
product makes them do: find the real job, shape flow and structure around how
minds actually work, and remove the friction, confusion, and exclusion between
intent and outcome. The discipline exists because software is not built around
users by default; left alone, it mirrors the org chart and the database schema,
and someone has to fight for the person on the other side of the screen.

## Core Mission

Make the right thing the easy thing — design products people can use to
accomplish their actual goals with the least confusion, effort, and exclusion,
and prove it with real users rather than from taste.

## Primary Responsibilities

The visible work is making screens; the actual work is understanding humans and
reducing the cost of using a thing. A UX designer spends their days: uncovering
the real user goal beneath the feature request; mapping flows and information
architecture so people can find and predict where things are; sketching,
wireframing, and prototyping in increasing fidelity; running usability tests and
watching people struggle without rescuing them; specifying interaction states
(loading, empty, error, success) that engineers have to build; maintaining a
design system; and advocating — constantly — for the user in a room of competing
pressures. Underneath it is evidence: turning "I think users want" into "we
watched five users and four failed at step three."

## Guiding Principles

- **Design for the user's goal, not the feature request.** People don't want a
  drill; they want a hole — really, a shelf on the wall. Find the job-to-be-done
  before you design the interface.
- **Don't make me think.** Every moment a user spends decoding your UI is stolen
  from their task. Obviousness is the product of work.
- **You are not the user.** Your fluency, context, and tolerance for complexity
  are all atypical. Test with real, representative people, and match the system to
  the user's mental model and language — with obvious affordances and feedback. If
  users can't tell something is clickable, it isn't. Accessibility is the floor,
  not a feature: WCAG conformance improves the product for everyone, not just the
  "edge."
- **Show, don't tell.** A prototype settles arguments slides prolong — make the
  disagreement clickable.

## Mental Models

- **Norman's gulfs of execution and evaluation.** The user has to figure out *how*
  to do the thing (execution) and *whether it worked* (evaluation). Good design
  narrows both with clear affordances, signifiers, mapping, and feedback.
- **Fitts's Law.** Time to hit a target is a function of its distance and size —
  why primary actions are large and edges/corners (infinitely large) are
  valuable.
- **Hick's Law.** Decision time grows with the number and complexity of choices.
  Fewer, well-grouped options beat a wall of equal ones; progressive disclosure
  applies it.
- **Jakob's Law.** Users spend most of their time on *other* products, so they
  expect yours to work like those — convention is a feature, novelty has a tax.

## First Principles

- Attention and effort are the scarcest resources you spend on the user's behalf;
  every interaction has a cognitive cost.
- People satisfice — they take the first option that works, not the best — so the
  obvious path must be the good path.
- A user's behavior is data; their explanation of it often isn't. Watch what they
  do, not what they say they'd do.
- The interface is not the product; the experience in the user's head is.

## Questions Experts Constantly Ask

- What is the user actually trying to accomplish here — the job, not the click?
- What does the user already believe about how this works (their mental model)?
- Where will they get confused, and how will they recover from a mistake?
- What's the simplest flow that gets them there — can I remove a step?
- Can someone using a screen reader, a keyboard only, or low vision do this?
- How would I know this works — what would I watch a user do to prove it?

## Decision Frameworks

- **Jobs-to-be-Done framing.** State the job as "when [situation], I want to
  [motivation], so I can [outcome]." Design against the job (stable), not the
  feature (fashion).
- **Heuristic evaluation, then test.** Audit against Nielsen's 10 usability
  heuristics first (cheap, fast, finds the obvious), then validate the unknowns
  with real users. Experts catch violations; users reveal blind spots. Match
  fidelity to the question and don't pixel-polish what you might throw away.
- **Confidence vs. cost of being wrong.** High-stakes, irreversible flows
  (payment, deletion, onboarding) earn rigorous research; low-stakes tweaks ship
  and get measured. The 5-user rule: ~five users per round surfaces ~85% of
  usability problems — run more, smaller rounds.

## Workflow

1. **Understand.** Talk to users and stakeholders. Define the job-to-be-done, the
   real goal, the constraints, and how success will be measured.
2. **Research.** Interviews, contextual inquiry, analytics, support tickets — find
   the actual pain and the user's existing mental model and vocabulary.
3. **Define & structure.** Map the user journey and information architecture (card
   sorting, site maps, flows). Decide structure before surface.
4. **Sketch & prototype.** Many cheap divergent ideas on paper, then clickable
   flows in Figma at the lowest fidelity that can answer the question.
5. **Test.** Watch real, representative users attempt real tasks. Stay quiet. Note
   where they hesitate, misread, or fail — not where you'd explain.
6. **Iterate.** Fix the biggest friction, re-test. Designing is re-designing.
7. **Spec & hand off.** Document states, behaviors, edge cases, and a11y
   requirements; pair with engineers through build.
8. **Measure in the wild.** Watch task success, drop-off, and behavior post-ship;
   the launch is the start of learning, not the end.

## Common Tradeoffs

- **Usability vs. aesthetics.** Beauty builds trust and can mask flaws (the
  aesthetic-usability effect), but pretty and unusable still fails the user.
- **Simplicity vs. capability.** Every feature taxes the clarity of the ones
  already there. Power users want depth; new users want a clear path. Use
  progressive disclosure rather than choosing one audience.
- **User desire vs. business goal.** What's best for the user and what drives
  revenue sometimes diverge; the long game is that user trust *is* the business.

## Rules of Thumb

- If users keep "doing it wrong," the design is wrong, not the users.
- The error message should say what happened, why, and how to fix it — in their
  words.
- Make the primary action the most obvious thing on the screen; make destructive
  actions harder and reversible.
- Recognition over recall: show options, don't make people remember them.
- Test with five users, fix, test again — small and often beats big and late.
- Touch targets at least ~44px; contrast at least 4.5:1 for body text (WCAG AA).

## Failure Modes

- **Designing for yourself.** Mistaking your own fluency and taste for the
  user's, and skipping the test that would have proven you wrong.
- **Aesthetic over function.** Beautiful, on-brand screens users can't actually
  operate — trophies, not tools.
- **Accessibility as an afterthought.** Bolting on a11y at the end, then "fixing"
  it with an overlay that makes it worse.
- **Research theater.** Running tests to confirm a decision already made, leading
  the witness, ignoring inconvenient findings.

## Anti-patterns

- **Mystery-meat navigation** — icons or controls with no label and no obvious
  meaning.
- **Dark patterns** — confirmshaming, hidden costs, roach motels (easy in, hard
  out), pre-checked boxes that profit by deceiving the user.
- **Low-contrast "minimalist" text** that looks clean and excludes anyone with
  imperfect vision.
- **Inconsistent components** — five buttons that behave five different ways
  because there's no design system.

## Vocabulary

- **Affordance / signifier** — what an object lets you do, and the cue that
  signals it (Norman's distinction).
- **Information architecture (IA)** — the structure, labeling, and organization of
  content so people can find and understand it.
- **Jobs-to-be-Done (JTBD)** — the underlying goal a user "hires" a product for.
- **WCAG** — Web Content Accessibility Guidelines; AA is the common conformance
  target.
- **Progressive disclosure** — revealing complexity gradually, as needed.
- **Cognitive load** — the mental effort an interface demands.

## Tools

- **Figma** — the de facto tool for wireframing, high-fidelity design,
  prototyping, and shared design systems; plus Maze/UsabilityHub for unmoderated
  testing.
- **Research & analytics** — Dovetail for synthesis; Hotjar/FullStory for session
  replays and heatmaps; Google Analytics/Amplitude for funnels and drop-off.
- **Accessibility checkers** — axe, WAVE, contrast checkers, and a real screen
  reader (VoiceOver, NVDA) — automated tools catch only part of it.
- **Design systems / handoff** — Storybook and tokenized component libraries that
  keep design and code in sync.

## Collaboration

UX design is a relay, not a solo. Designers work with product managers (who own
the *what* and *why*), UX researchers (partners, not vendors), engineers (who own
feasibility and the states a designer must specify), content designers, and
accessibility specialists. The healthiest collaboration brings engineers into
design early so constraints shape ideas before pixels harden, treats critique as
improving the work rather than judging the person, and grounds debates in user
evidence rather than seniority or loudness. Friction lives at handoff — the gap
between the polished mockup and what ships when edge cases, performance, and
timelines bite. Good designers spec the unglamorous states and stay close through
build.

## Ethics

UX designers shape what millions of people do, often below the level of conscious
choice, which makes persuasion design a quiet exercise of power. Core duties:
refuse dark patterns that profit by manipulating, confusing, or trapping users —
confirmshaming, hidden subscriptions, roach motels, fake urgency. Design for
genuine informed consent rather than coerced clicks. Treat accessibility as a
right, not a checkbox, since an inaccessible product simply excludes people. Be
honest with stakeholders when a metric-driven request would harm users. The
hardest gray zones — persuasive design, attention-maximizing loops, "growth"
mechanics that exploit cognitive biases — rarely have clean answers, but the
designer is often the last person in the room positioned to name the harm before
it ships.

## Scenarios

**The form nobody completes.** Analytics show a 60% drop-off on a four-step
signup. The PM wants to "add a progress bar to motivate users." The expert
resists the band-aid and runs five quick usability tests. The problem is plain:
step two demands a company tax ID most individual users don't have, and the error
just says "Invalid." The mental-model mismatch — the form assumes a business, the
users are individuals — is the real failure. The fix isn't motivation; it's
splitting the flow by user type up front and writing an error that says what's
wrong and how to fix it. Drop-off falls because the design stopped asking for what
users couldn't give.

**The "make it pop" redesign.** A stakeholder wants the dashboard "more modern"
with trendy low-contrast, icon-only navigation. The expert reframes from taste to
evidence: icon-only nav fails recognition-over-recall, and the light-gray-on-white
labels fall below the 4.5:1 WCAG AA contrast ratio, excluding low-vision users.
Rather than argue aesthetics, they prototype both and run a task test: users are
measurably slower with icon-only nav. The compromise ships modern visuals *with*
text labels and accessible contrast — the winning argument was a measured task
failure and a standard.

**The dark-pattern subscription.** Growth proposes making cancellation a five-step
phone-and-email gauntlet to cut churn. The expert declines the roach motel and
reframes the math: forced-retention metrics improve short-term while trust,
reviews, and word-of-mouth — and regulators under "click-to-cancel" rules — punish
it. They propose a one-click cancel with an honest, optional "before you go"
offer. Retention earned by a better product is the only kind that compounds; the
job was to stop the company spending trust it couldn't get back.

## Related Occupations

A UX designer shares the user-obsession of several roles but owns the design of
the interaction and structure itself. UX researchers go deeper into understanding
users and feed the designer evidence; the two are tight partners, sometimes one
person. Product managers own the *why* and *what* to the designer's *how it
works*. Graphic and visual designers own the surface aesthetics the UX designer
arranges into a usable whole. Industrial designers apply the same human-centered,
affordance-driven thinking to physical objects. Frontend engineers turn the
design into a living interface and own the constraints the designer must respect.
Game developers share the obsession with perception versus system state.

## References

- *The Design of Everyday Things* — Don Norman
- *Don't Make Me Think* — Steve Krug
- *About Face: The Essentials of Interaction Design* — Cooper, Reimann, Cronin
- *100 Things Every Designer Needs to Know About People* — Susan Weinschenk
- Nielsen Norman Group — nngroup.com
- Web Content Accessibility Guidelines (WCAG) — w3.org/WAI
