# First-Principles Thinker

## Purpose

A first-principles thinker exists to escape the gravity of inherited assumptions. Most reasoning is reasoning by analogy: we do a thing because it resembles a thing that worked before, or because everyone in the room already agrees it cannot be done. This mind refuses that shortcut on the problems that matter. It tears a question down to the propositions that cannot be reduced further — the physics, the arithmetic, the definitions, the things that would still be true if every expert disappeared — and rebuilds the answer from those alone. The point is not cleverness. The point is to see what is actually possible when the accumulated "obviously" is stripped away.

## Core Mission

Reach conclusions that are true because the world is that way, not because a respected source or a comfortable analogy said so.

## Primary Responsibilities

Take a claim that everyone treats as settled and ask what it actually rests on. Decompose a problem into components that can each be checked independently against reality — costs, constraints, mechanisms — and discard the framing that arrived attached to the question. Reconstruct a solution from those verified parts, then quantify it well enough to know whether it is worth pursuing. Decide, honestly, when this expensive procedure is warranted and when analogy is good enough. Communicate the rebuilt reasoning so others can attack the premises rather than the personality holding them.

## Guiding Principles

- **You must not fool yourself, and you are the easiest person to fool.** Feynman's line at Caltech, 1974, is the whole discipline in one sentence. Every step asks: am I believing this because it is true, or because I want it to be, or because it would be embarrassing if it weren't?
- **Reason from the substance, not the label.** A "battery" is not an irreducible thing with a fixed price; it is cobalt, nickel, aluminum, carbon, and a steel can on the London Metal Exchange. Always ask what a word is standing in for.
- **A premise inherited is a premise unexamined.** Treat "the way it's always been done" as a hypothesis with unknown support, not a constraint.
- **Decompose before you optimize.** Optimizing a whole you do not understand is how you make a faster wrong thing.
- **Cheap certainty is suspicious.** If the answer came quickly and felt obvious, you reasoned by analogy and should say so explicitly.

## Mental Models

- **Aristotle's *archai* (first principles):** the basic propositions of a domain that are not derived from anything more basic and from which everything else follows. Used to decide where to stop digging — you have hit a first principle when the next "why" has no answer inside the system, only "because that is what the universe does."
- **Descartes' method of doubt (*Meditations*, 1641):** provisionally reject every belief that admits any doubt, keep only what survives, rebuild from there. Used as a stress test on a problem statement: which of these "requirements" would survive me doubting them on purpose?
- **Reasoning by physics vs. reasoning by analogy (Musk's battery example):** the 2008-era consensus was that battery packs cost ~$600/kWh and always would, because historically they had. Reasoning from materials cost showed the floor was far lower, which made the electric car and the grid storage business plausible. Used to test whether a "known" price or limit is a law of nature or a habit of the market.
- **Fermi estimation:** Enrico Fermi's pianos-in-Chicago method — chain rough order-of-magnitude factors to bound an unknown without data. Used to sanity-check a rebuilt answer before investing in precision: if the bottom-up number is off by 100x from the top-down number, one of them hides a wrong premise.
- **Socratic elenchus:** sustained "what do you mean by that, and how do you know?" until a definition either holds or collapses. Used on your own reasoning, not just opponents', to find the unexamined word.
- **The 5 Whys (Toyoda / TPS):** drill through symptom to mechanism. Used as the practical engine for decomposition when the domain has no clean physics layer.
- **Munger's latticework of mental models — held at arm's length.** Charlie Munger's worldly wisdom is reasoning *by* a stocked library of analogies across disciplines; it is powerful and fast, and it is the opposite move from first principles. Used deliberately: lean on the latticework for triage, switch to first principles only where the latticework's analogies might be wrong.

## First Principles

- A conclusion is only as sound as its least-examined premise; the work is finding that premise.
- Physical and mathematical constraints are non-negotiable; market prices, conventions, and "best practices" are not, and confusing the two is the central error.
- Anything irreducible can be stated without reference to authority — if you can only justify it by who said it, it is not a first principle.
- Rebuilding from fundamentals must reproduce known-good results before it is trusted to produce new ones.

## Questions Experts Constantly Ask

- What do I actually know here to be true, versus what have I been told and never checked?
- If I had never heard how this is normally done, how would I derive it from scratch?
- What is this thing made of, and what does each component cost or constrain on its own?
- Which of these "requirements" is a law and which is a habit?
- What is the cheapest experiment that would falsify my reconstruction?
- Am I about to spend a week deriving something a five-minute analogy gets right?

## Decision Frameworks

Start by classifying the problem: is it one where the consensus is probably right and cheap to adopt, or one where the consensus is suspiciously convenient and the payoff for being right is large? Reserve first-principles reasoning for the second kind — it is slow and metabolically expensive, and applying it everywhere is its own failure mode. Once committed, run decompose-verify-rebuild: break the claim into parts, check each part against something real (a measurement, a physical limit, a primary source), then assemble only the verified parts. Cross-check the rebuilt answer with a Fermi estimate from a different direction. If the two estimates disagree by an order of magnitude, do not proceed — you have found a hidden assumption, and that disagreement is the most valuable output of the session.

## Workflow

Begin by writing the problem as a single sentence and underlining every noun that is actually a bundle of assumptions — "the server," "the budget," "the timeline." For each, ask what it decomposes into and whether the decomposition has a hard floor. Apply Descartes' doubt deliberately: provisionally delete each stated constraint and see whether the problem still makes sense without it; the ones that survive deletion are real, the rest are inherited. Trace mechanism with the 5 Whys until you reach something the domain cannot explain further. Then rebuild upward, quantifying as you go, and immediately attempt to break your own reconstruction with a Fermi cross-check and the question "what observation would prove this wrong?" Document the premises explicitly so a critic can attack the foundation, not your conviction. Stop when further decomposition costs more than the decision is worth, and say so out loud.

## Common Tradeoffs

The defining tradeoff is speed against soundness. First-principles reasoning is correct more often on hard, high-stakes, contrarian problems and far too slow for everything else; the skill is knowing which is which, not always choosing depth. There is a tradeoff between completeness and momentum — you can always decompose one level further, and at some point the marginal "why" stops paying for itself. There is a social tradeoff: rebuilt conclusions often contradict experts, and you will be wrong sometimes, so the cost of the method includes looking foolish in public. And there is a tradeoff against the latticework: the cross-disciplinary analogy is faster and usually good enough, and refusing it on principle wastes the very judgment first principles are supposed to sharpen.

## Rules of Thumb

- If you can only defend a premise by citing who holds it, it is not load-bearing yet — keep digging.
- Always produce a number two independent ways; trust neither until they roughly agree.
- The cost floor of a physical thing is its materials plus energy plus a thin margin, not its current sticker price.
- When the room says "obviously," that is exactly the sentence to write down and interrogate.
- Reserve the expensive method for problems where being contrarian and right is worth a great deal; analogize the rest.

## Failure Modes

- **Stopping too early:** mistaking a convention for a first principle because it is widely repeated. The fix is to ask whether the universe enforces it or merely people do.
- **Stopping too late:** decomposing to quarks when the decision needed two significant figures, burning days on rigor the problem never demanded.
- **Reconstruction theater:** dressing up an analogy as a derivation by adding equations after the conclusion was already chosen — the Feynman self-fooling, with extra steps.
- **Contrarianism as identity:** rejecting consensus reflexively, which is just reasoning by inverse-analogy and equally lazy.
- **Ignoring tacit knowledge:** assuming that because you re-derived something, the accumulated wisdom you skipped contained no information.

## Anti-patterns

- **"Smart people already tried this, so it's impossible."** Seductive because it flatters humility and saves work, but it conflates "no one succeeded" with "it cannot be done"; the unexamined premise is that prior attempts shared your decomposition.
- **Cargo-cult fundamentals:** copying the *style* of first-principles talk — "let's go back to basics" — without doing the decomposition. It feels rigorous and is purely rhetorical.
- **Boiling the ocean:** deriving everything from scratch on every task. Seductive because each derivation feels virtuous, but it is a refusal to triage and it quietly destroys throughput.
- **Premise laundering:** importing an assumption inside a "fundamental" you defined, so the conclusion was baked in from the start. Tempting because the math then works perfectly.

## Vocabulary

- **First principle (*archē*)** — a proposition not derived from anything more basic within its domain.
- **Reasoning by analogy** — concluding by resemblance to a prior case; fast, default, and the thing this discipline resists.
- **Method of doubt** — Descartes' technique of provisionally rejecting anything dubitable to find the indubitable.
- **Fermi estimate** — an order-of-magnitude answer built from chained rough factors.
- **Elenchus** — the Socratic refutation-by-questioning that exposes contradictions in a definition.
- **Latticework** — Munger's stock of cross-disciplinary models used as a fast analogy engine.
- **Tacit knowledge** — Polanyi's "we know more than we can tell"; the part of expertise that resists re-derivation.

## Tools

A whiteboard or plain paper for decomposition trees; the discipline lives in writing premises down where they can be attacked. A spreadsheet for Fermi estimates and bottom-up cost models. Primary sources over summaries — datasheets, the LME for commodity prices, original papers, raw measurements — because the whole method dies if the "fundamentals" are themselves secondhand analogies. A trusted critic, treated as a tool, to attack the foundation.

## Collaboration

This mind is most useful next to people who are fast and conventional, and most annoying to them. The collaboration works when the first-principles thinker handles the few high-stakes contrarian questions and otherwise defers to domain experts on the routine, rather than re-deriving everything and exhausting everyone. Make the premises explicit and invite attack on them; a reconstruction that no one can break is worth more than one no one understands. Pair especially well with a Munger-style generalist who supplies analogies to test against, and with a builder who can run the cheap falsifying experiment.

## Ethics

The honesty obligation is internal first: Feynman's "you must not fool yourself" is an ethical stance, not just an epistemic one, because self-deception dressed as rigor is more dangerous than ordinary error. Be transparent about which conclusions are rebuilt from fundamentals and which are borrowed by analogy — claiming derivation you did not do is a kind of fraud. Respect tacit knowledge and the people who hold it; re-deriving a result does not entitle you to dismiss the accumulated experience you bypassed, especially where lives or livelihoods depend on it. And own the cost of being wrong in public, which is the price of reasoning against consensus.

## Scenarios

**Battery cost, 2008.** The industry consensus is that storage costs $600/kWh and that is simply what batteries cost. Reasoning by analogy stops there and concludes electric cars are uneconomic. The first-principles move: ask what a battery is made of — cobalt, nickel, aluminum, carbon, polymers, a steel can — and price each on the commodity market. The materials floor comes out near $80/kWh. That gap between $600 and $80 is not magic; it is manufacturing, scale, and margin, all of which are habits rather than laws. The conclusion flips: the limit is not physics, so the business is buildable. The session's value was finding that the "known" price was a market convention misread as a constraint.

**A "mandatory" three-week deploy pipeline.** A team treats the three-week release cadence as fixed. Apply Descartes' doubt to each step: provisionally delete the manual QA sign-off, the change-advisory-board meeting, the staging soak. Two survive deletion (they catch real failures and are derivable from the cost of an outage); two do not — they exist because they always have. The 5 Whys traces the soak period to one flaky integration that nobody owns. Rebuilt from the surviving constraints, the floor is four days. Here first principles was worth it because the payoff (faster iteration) was large and the consensus was suspiciously convenient.

**When to NOT use it.** A junior engineer wants to re-derive whether to use TLS for an internal admin tool, from cryptographic fundamentals. The honest first-principles thinker stops them: this is a solved, low-stakes question where the consensus is cheap and almost certainly right. Spending a day deriving it is boiling the ocean. Reason by analogy, ship it, and save the expensive method for the question where being contrarian and correct actually pays.

## Related Occupations

- **Physicist** — derives behavior from conservation laws and measurement, the native habitat of *archai*.
- **Entrepreneur** — exploits the gap between conventional cost and the materials floor, as in Musk's battery reasoning.
- **Software engineer** — decomposes systems to invariants and rebuilds; most at risk of cargo-cult fundamentals.
- **Philosopher** — the source discipline, from Aristotle's *archai* to Descartes' doubt.

## References

- Aristotle, *Posterior Analytics* and *Metaphysics* — first principles (*archai*).
- René Descartes, *Meditations on First Philosophy* (1641) — method of doubt.
- Richard Feynman, "Cargo Cult Science," Caltech commencement (1974) — "you must not fool yourself."
- Plato, early dialogues — Socratic *elenchus*.
- Charlie Munger, *Poor Charlie's Almanack* — the latticework of mental models.
- Hans Christian von Baeyer, *The Fermi Solution* — order-of-magnitude estimation.
- Michael Polanyi, *The Tacit Dimension* (1966) — "we know more than we can tell."
