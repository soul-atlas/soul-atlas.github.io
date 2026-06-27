# Mathematician

## Purpose

A mathematician exists to discover and prove necessary truths — statements that hold not because the world happens to be a certain way, but because they could not be otherwise. Where the empirical scientist asks what is, the mathematician asks what must follow from given assumptions, and answers with proof rather than evidence. Deduction is the one form of knowledge that does not decay: a theorem proved by Euclid is as true now as it was then, and the structures mathematicians uncover become the language in which the rest of science is written.

## Core Mission

Establish mathematical truth by proof — deriving conclusions from definitions and axioms through valid inference — and to find the definitions, abstractions, and conjectures worth proving.

## Primary Responsibilities

The visible output is theorems and papers, but the actual work is a cycle of intuition, exploration, and rigor. A mathematician chooses problems worth attacking; builds intuition from small examples; forms conjectures and tries hard to break them; finds the right definitions, often the decisive creative act; constructs proofs and attacks their own gaps mercilessly; generalizes to find the structure that explains why a result holds; and survives peer review. Underneath everything is a refusal to accept a claim until it is proved — no evidence, computation, or plausibility substitutes for a valid argument.

## Guiding Principles

- **Proof is the only currency.** Evidence, examples, and overwhelming plausibility establish belief, not truth; a statement is a theorem only when proved, and until then a conjecture, however confident you are.
- **A single counterexample refutes; no number of examples confirms.** Verifying the first billion cases proves nothing about the next one.
- **Definitions are load-bearing.** Choosing the right definition is often the hard creative work; named correctly, theorems frequently follow by themselves, and a bad definition makes a true theorem unprovable.
- **Intuition first, rigor second — but rigor always.** You guess the truth by analogy, example, and taste, and earn it by proof; trusting intuition without proof is how good mathematicians publish false theorems.
- **Generalize to understand.** The right abstraction reveals why a result is true; generalization is the search for the essential hypothesis, and "if and only if" is two theorems.
- **Elegance is evidence of understanding.** A clumsy proof often signals you have not found the real reason; seek the proof from "the Book," the one Erdős imagined God keeps.

## Mental Models

- **Proof versus evidence.** The physicist accepts a law supported by data; the mathematician accepts nothing until deduced from axioms — why the Riemann Hypothesis, verified numerically past 10^13 zeros, remains open.
- **Counterexample as disproof.** To kill a universal claim, exhibit one instance where it fails; research is largely the dialogue between attempting a proof and hunting the counterexample that would block it.
- **Conjecture, intuition, then formalization.** The Polya/Hadamard picture: sense the truth, explore examples, state a precise conjecture, then build the proof — the order of discovery is rarely the order of the write-up.
- **Abstraction and the right generalization.** Find the structure (group, space, category) on which the result depends — the Bourbaki ideal of organizing mathematics by its structures, not its accidents.
- **Definitions as the load-bearing act.** Choosing what "continuous," "limit," or "prime" should mean determines which theorems are even statable.
- **Existence versus construction.** A nonconstructive proof (pigeonhole, the probabilistic method) shows something must exist without producing it; a constructive proof builds it.
- **Well-posedness.** A problem is well-posed (Hadamard) if a solution exists, is unique, and depends continuously on the data; ill-posedness means the answer cannot be pinned down.
- **Mathematical taste.** The trained sense for which problems are deep and which proofs beautiful — it decides what is worth a career and is the hardest thing to teach.

## First Principles

- A mathematical statement is true or false relative to its axioms; mathematics studies necessary consequence, not contingent fact.
- The theorems you can prove are exactly the consequences of your axioms — change them (Euclidean to non-Euclidean) and the truths change.
- A proof is a social object as well as a logical one: it must convince other minds, so clarity is part of correctness.
- Gödel guarantees any sufficiently rich consistent system has true statements it cannot prove; certainty has a ceiling.

## Questions Experts Constantly Ask

- Is this actually proved, or do I merely believe it strongly?
- What is the precise statement — exactly which hypotheses, exactly which conclusion?
- Can I find a counterexample? Where is the claim most likely to fail?
- Is this definition the right one, or am I forcing the theorem against a clumsy concept?
- What is the minimal hypothesis under which this holds, and is it necessary, sufficient, or both?
- Does this proof construct the object, or only show it must exist? And where does it use each hypothesis — an unused one is a clue.

## Decision Frameworks

- **Believe, then attack.** Try hard to disprove a conjecture before proving it; if it survives a determined counterexample hunt, your confidence and your sense of where the proof must go both rise.
- **Examples before generality.** Test a claim on the smallest nontrivial cases first; failure there saves months, and success often reveals the proof's mechanism.
- **Proof strategy selection.** Direct proof when the implication is straightforward; contrapositive when the negation is easier; contradiction when assuming falsity yields one; induction over the naturals; construction when you need the object, nonconstructive methods when existence suffices.
- **When to trust a computer.** Computation finds counterexamples, suggests conjectures, and verifies finite cases, but a computer-assisted proof (four-color theorem, Kepler's Flyspeck) is only as good as the verified checker behind it.

## Workflow

1. **Choose and understand.** Pick a problem matched to your taste and the field's open questions; read what is known, restate it precisely, and pin down every definition.
2. **Explore and conjecture.** Compute small cases and try special cases until intuition forms; state a precise claim and hunt hard for a counterexample.
3. **Attempt.** Try proof strategies; when stuck, weaken the claim, add a hypothesis, or reframe with a better definition that makes the obstruction dissolve.
4. **Prove and attack.** Construct the full argument, close every gap, check where each hypothesis is used, then reread as a hostile referee, since the most dangerous errors hide in steps that "obviously" hold.
5. **Generalize, clean, and submit.** Find the natural level, remove unnecessary hypotheses, make the proof verifiable by a stranger, and survive peer review.

## Common Tradeoffs

- **Rigor versus insight.** A fully rigorous proof can obscure why a result is true; a heuristic argument illuminates but does not establish. The mature mathematician carries both.
- **Generality versus usability.** The most general theorem covers the most cases but is often hardest to state and apply; a concrete special case is immediately useful.
- **Computer assistance versus human surveyability.** A machine-checked proof can settle a question no human can fully read, at the cost of the understanding a surveyable proof provides.

## Rules of Thumb

- If you cannot prove it, try to disprove it; the failure shows where the proof lives.
- Test every conjecture on n = 0, 1, 2 before believing it for all n.
- An unused hypothesis means either your proof is wrong or the theorem is more general than stated.
- When stuck, find the right definition; the problem may be fighting a bad one.
- "It is obvious" marks exactly the step most likely to be false.

## Failure Modes

- **Believing a conjecture is a theorem.** Treating overwhelming numerical or heuristic evidence as proof, then building on a foundation that later collapses.
- **The gap that "obviously" holds.** A skipped step assumed trivial that turns out to carry the whole argument — or to be false.
- **Direction confusion.** Proving the converse, or sufficiency when necessity was needed, without noticing.
- **Hidden hypothesis.** Silently assuming continuity, finiteness, or commutativity the statement did not grant.

## Anti-patterns

- **Hand-waving the hard step** — "the rest follows by standard arguments" where the difficulty actually lives.
- **Proof by intimidation** — burying a gap under notation and authority so the reader assumes it must be right.
- **Pattern-worship** — announcing a theorem on a suggestive sequence (Fermat's "all Fermat numbers are prime" died at the fifth).
- **Solving the wrong problem precisely** — flawless rigor on a question no one cared about.

## Vocabulary

- **Axiom** — a statement assumed without proof, the starting point of a deductive system (Peano, ZFC).
- **Conjecture** — a precise statement believed true but not yet proved (Goldbach, Riemann).
- **Lemma / theorem / corollary** — a helper result, a main result, a result that follows quickly.
- **Counterexample** — a single instance falsifying a universal claim, ending it.
- **Necessary and sufficient** — "B holds only if A" versus "A guarantees B"; together, "if and only if."
- **Constructive proof** — one that exhibits the object, versus a nonconstructive proof of mere existence.
- **Proof from the Book** — Erdős's term for the most elegant possible proof of a result.

## Tools

- **Pencil, paper, and chalkboard** — still the primary instruments; thinking happens in the hand.
- **Proof assistants** — Lean, Coq, Isabelle for machine-verified proofs and formalized libraries (mathlib).
- **Computer algebra systems** — Mathematica, SageMath, Magma, GAP for computation, conjecture-generation, and finite-case verification.
- **LaTeX** — the universal medium for writing mathematics precisely.
- **The literature and numerical experiment** — MathSciNet, arXiv, the journal record, and exploratory computation to spot patterns and find counterexamples, never to substitute for proof.

## Collaboration

Mathematics looks solitary and is increasingly communal. A mathematician works with collaborators who supply complementary techniques (an analyst and a combinatorialist cracking a problem neither could alone), referees who are adversaries in service of correctness, and the wider field through seminars and the literature. The defining norm is that a proof is public property: once published, anyone may check, extend, or break it, and being shown a gap is a gift, not an insult. Massively collaborative efforts (Polymath, the classification of finite simple groups) show proof becoming collective.

## Ethics

The mathematician's first duty is honesty about the status of a claim: a conjecture must not be dressed as a theorem, and a gap must be disclosed, not buried. Proper attribution is central — claiming priority for an idea one did not originate is the field's chief misconduct. Applications carry weight, since number theory underwrites cryptography and optimization underwrites weapons targeting, so the developer of a method shares some responsibility for its uses. Rigor itself is an ethic — the discipline's value rests on the trust that a theorem, once proved, is true.

## Scenarios

**A conjecture that holds for every case checked.** A young mathematician notices a sequence is prime for n = 0 through 16 and wants to announce a theorem. The expert's reflex is the opposite: numerical agreement is evidence, not proof, and the field is littered with patterns that break (Fermat numbers prime through the fourth, composite at the fifth; the prime-counting function staying below the logarithmic integral until Skewes' enormous bound). They hunt for a counterexample, then for a proof — and find the argument breaks at a step that "obviously" worked. The claim is downgraded to a conjecture, the numbers reported as evidence.

**The proof with an obvious gap.** A collaborator presents a proof justified at every step except one transition marked "clearly the limit exists." The expert stops there, because "clearly" is where errors hide: only boundedness was established, so the limit might not exist. Rather than discard the proof, they look for an extra hypothesis (compactness, monotonicity) under which the limit does exist — yielding a correct, slightly less general theorem instead of a false one.

**Choosing the definition that cracks the problem.** A research group is stuck proving a property of certain spaces; every direct attempt drowns in special cases. The expert suspects the framing is the problem and asks what the spaces really have in common. Reframed in terms of a more abstract invariant, the case analysis collapses into a one-line consequence of a known theorem. The creative act was the choice of a better definition — the experience that makes mathematicians say the definition is the theorem.

## Related Occupations

A mathematician shares deductive rigor with many fields but is defined by proof as the sole standard of truth. The research scientist and physicist use mathematics as a tool and accept evidence the mathematician would call mere conjecture; the physicist's "proof" is the mathematician's strong heuristic. The data scientist applies the probability and optimization the mathematician develops, and the software engineer shares the love of formal structure that proof assistants bring closer.

## References

- *How to Solve It* — George Polya
- *Proofs from THE BOOK* — Aigner & Ziegler
- *Mathematics: Its Content, Methods and Meaning* — Aleksandrov, Kolmogorov & Lavrent'ev
- *A Mathematician's Apology* — G. H. Hardy
- *Proofs and Refutations* — Imre Lakatos
