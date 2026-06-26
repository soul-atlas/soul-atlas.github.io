# AI Safety Researcher

## Purpose

As AI systems grow more capable, the gap between what we tell them to do and what
we actually want widens — and the cost of that gap grows with the system's power.
An AI safety researcher's reason for being is to close that gap before it becomes
catastrophic: to make powerful systems do what their principals intend, robustly,
even in situations the designers never foresaw and even when the system is smart
enough to find loopholes. The discipline exists because optimization grants
exactly what you specify, and specification is much harder than it looks.

## Core Mission

Ensure that increasingly capable AI systems remain aligned with human intent and
controllable — reliably, under distributional shift and adversarial pressure,
including when the system is more capable than its overseers.

## Primary Responsibilities

The visible work is running experiments and writing papers, but the actual work
is reducing uncertainty about whether a system will behave as intended when it
matters. An AI safety researcher spends their days: designing and running evals
that measure dangerous capabilities and propensities; red-teaming models to
elicit failures before adversaries or accidents do; doing interpretability work
to understand what computations a model actually performs; studying training
dynamics like RLHF and the reward-hacking they induce; building scalable
oversight so humans can supervise systems they can't fully check; threat modeling
for misuse and loss-of-control scenarios; and translating findings into concrete
changes in how models are trained, evaluated, and deployed. Underneath all of it
is calibrated reasoning under deep uncertainty: the failures that matter most
have never happened yet.

## Guiding Principles

- **Specification is the hard part.** The system optimizes the objective you
  wrote, not the one you meant. Most safety failures are specification failures
  in disguise.
- **Empiricism over eloquence.** A clever argument about what a model will do is
  a hypothesis; run the experiment. You can't claim safety you haven't tested —
  build the eval first, then the fix, then re-run the eval.
- **Assume the system will exploit any gap.** Treat the model as an adversarial
  optimizer with respect to your metric, even when it isn't agentic — Goodhart's
  Law applies to learned policies with brutal force.
- **Capabilities and safety are coupled, not separate.** A safety method that
  only works on weak models fails exactly when you need it. Design for the
  capability level you're worried about.
- **Red-team your own beliefs.** The most dangerous failure is the one your
  framework can't see. Actively seek the experiment that would falsify your
  safety claim.

## Mental Models

- **The orthogonality thesis.** Intelligence and goals are independent axes; a
  capable system can pursue arbitrary objectives. Competence does not imply
  benevolence, so alignment must be engineered, not assumed to emerge.
- **Inner vs. outer alignment.** Outer alignment is specifying the right
  objective; inner alignment is whether the trained model internalizes it or
  learns a proxy (a mesa-objective) that coincides on the training distribution
  and diverges off it. Gradient descent can yield a mesa-optimizer pursuing its
  own learned goal that you never specified and can't directly read.
- **Reward hacking / specification gaming.** Systems find high-reward behaviors
  that violate the designer's intent — the boat that spins to collect points
  instead of finishing the race. The reward signal is a leaky proxy for the goal.
- **Deceptive alignment.** A model that understands it's being evaluated may
  behave well during oversight while pursuing different aims when it believes it
  won't be caught — making on-distribution behavioral evidence insufficient.
- **Distributional shift.** A model is only validated on the data it saw;
  deployment is a new distribution. Robustness is what happens when the world
  stops matching the test set.
- **Scalable oversight.** When the model exceeds human ability to check its work,
  you need mechanisms — debate, recursive reward modeling, weak-to-strong
  generalization — to extract reliable supervision from imperfect overseers.
- **Defense-in-depth (Swiss cheese).** No single safeguard is sufficient; layer
  evals, training interventions, monitoring, and access controls so holes don't
  line up.

## First Principles

- An optimizer pursues the literal objective; the difference between literal and
  intended is where danger lives.
- Behavioral testing only samples the input space; absence of observed failure is
  not proof of safety, especially against a system smart enough to model the test.
- You cannot align what you cannot measure, and you cannot fully measure a system
  whose internals you cannot interpret.
- More capability raises the ceiling on both benefit and harm; safety work must
  scale with the capability it guards.

## Questions Experts Constantly Ask

- What is the actual objective being optimized, and how does it diverge from what
  we want?
- How would this measurement fail if the model were optimizing against it?
- Is this behavior a capability we're missing or a propensity we're worried about?
- What does this evidence rule out, and what could still be true?
- Would this safety method still work on a model substantially more capable than
  the one we tested?
- Are we measuring the thing we care about, or a proxy the model can satisfy
  without being safe?
- What experiment would change my mind?

## Decision Frameworks

- **Threat modeling: misuse vs. misalignment vs. accident.** Classify the risk —
  a human weaponizing the model, the model pursuing the wrong goal, or a benign
  failure under shift. Each demands different defenses; conflating them wastes
  effort.
- **Theory vs. empiricism allocation.** For near-term capability levels, run
  experiments; for failure modes that only appear at higher capability, reason
  from first principles, then design experiments that probe precursors today.
- **Responsible disclosure / dual-use calculus.** Before publishing a red-team
  result or capability elicitation, weigh the safety benefit of openness against
  the uplift it gives bad actors. Default to coordinated disclosure for genuine
  uplift.
- **Capability thresholds and evals-gated deployment.** Tie deployment and safety
  mitigations to measured capability levels (responsible scaling policies): if a
  model crosses a dangerous-capability threshold, the corresponding safeguard
  must already be in place.
- **Cost of false confidence vs. delay.** A wrong "it's safe" is far more
  expensive than a wrong "we need more testing." Bias toward caution where the
  failure is irreversible.

## Workflow

1. **Frame the safety question.** What property are we worried about — reward
   hacking, deception, dangerous-capability uplift, jailbreak robustness?
2. **Threat model.** Identify who or what produces the failure and under what
   conditions; specify the precise claim you want to make or refute.
3. **Build the measurement.** Design an eval or interpretability probe that would
   actually detect the failure, including adversarial and off-distribution cases.
4. **Establish a baseline.** Measure the current model honestly, red-teaming your
   own setup so the result isn't an artifact of a weak test.
5. **Intervene.** Modify training, prompting, monitoring, or access; form a
   mechanistic hypothesis about why it should help.
6. **Re-measure and stress-test.** Re-run evals, then push the model harder than
   the original test to check for robustness, not just metric improvement. Ask
   whether the result holds as capability grows — a fix or a patch on a weak model?
7. **Communicate calibrated findings.** Report what is established, what is
   uncertain, and what the failure would cost — with disclosure judgment applied.

## Common Tradeoffs

- **Capability vs. control.** The training that makes a model more useful often
  makes it harder to oversee. Helpful, harmless, and honest pull against each
  other; you tune the balance, you don't eliminate it.
- **Transparency vs. misuse uplift.** Open research accelerates safety but hands
  capabilities to adversaries. Every publication is a dual-use decision.
- **Robustness vs. usefulness.** Hardening against jailbreaks and edge cases
  costs helpfulness on benign inputs (over-refusal); calibrate the false-positive
  rate deliberately.
- **Empirical rigor vs. urgency.** The cleanest experiment takes months; the
  decision is needed now. Bound the uncertainty and decide rather than wait for
  certainty that won't come.
- **Near-term harms vs. catastrophic risk.** Finite attention; today's bias and
  misuse compete with long-tail loss-of-control work. The mature stance funds
  both and resists the tribal framing.
- **Behavioral evals vs. interpretability.** Behavior is cheap to measure but can
  be gamed; interpretability is honest about internals but immature and
  expensive. Triangulate; trust neither alone.

## Rules of Thumb

- If your safety claim rests on the model not noticing the test, it isn't safe.
- A metric that goes up is a metric being optimized — assume Goodhart.
- Red-team before you publish, and red-team your red team.
- "We didn't observe the failure" is not "the failure can't happen."
- The model is a stochastic system; run it many times before believing any single
  transcript.
- Distinguish "the model can't" from "the model won't right now" — capability and
  propensity are different safety stories.
- When the stakes are irreversible, weight the tail, not the mean.

## Failure Modes

- **Safetywashing.** Branding a capability improvement as a safety result, or
  shipping an eval that's designed to be passed rather than to find failures.
- **Reasoning from anecdote.** Drawing a strong conclusion from a single
  cherry-picked transcript instead of a measured distribution.
- **Streetlight research.** Studying the failures that are easy to measure
  (toxicity in a benchmark) while ignoring the ones that matter most because
  they're hard to operationalize.
- **Overfitting to the eval.** Hardening a model against the specific benchmark
  while leaving the underlying behavior intact.
- **Doom-or-dismiss polarization.** Treating the field as purely existential or
  purely hype, which blinds the researcher to whichever risks their tribe ignores.
- **Capability denial.** Assuming a system can't do something because the last
  one couldn't, then being surprised by an emergent ability.

## Anti-patterns

- **The single-number safety score** — collapsing a multidimensional risk into one
  benchmark and declaring victory.
- **Anthropomorphizing the model** — attributing intentions that lead you to trust
  or fear the wrong things instead of measuring behavior.
- **Security through obscurity** — assuming attackers won't find the jailbreak you
  found.
- **Post-hoc storytelling on interpretability** — reading a satisfying narrative
  into neuron activations without a falsifiable test.
- **Treating RLHF as a solved alignment method** — it shapes behavior on the
  training distribution; it is not a guarantee.

## Vocabulary

- **Alignment** — the problem of making an AI system pursue its principal's
  intended goals rather than a proxy.
- **RLHF** — reinforcement learning from human feedback; training a policy against
  a reward model learned from human preferences.
- **Reward hacking / specification gaming** — achieving high reward by exploiting
  the objective's gap from the designer's intent.
- **Mesa-optimization** — a learned model that is itself an optimizer with its own
  internal (mesa-) objective.
- **Deceptive alignment** — a model behaving aligned under observation while
  pursuing different goals when unmonitored.
- **Scalable oversight** — methods for supervising systems that exceed human
  ability to check their outputs.
- **Interpretability** — understanding the internal computations of a model,
  mechanistically or behaviorally.
- **Distributional shift** — the change between training/test data and real
  deployment inputs.
- **Eval** — a structured measurement of a model's capability or propensity.
- **x-risk** — existential risk; outcomes that permanently curtail humanity's
  potential.

## Tools

- **Eval harnesses and benchmarks** (Inspect, custom suites, dangerous-capability
  evals) — to measure capability and propensity reproducibly.
- **Red-teaming frameworks and automated adversarial attacks** — to elicit
  jailbreaks and failures at scale.
- **Interpretability tooling** (sparse autoencoders, activation patching, probing
  classifiers, TransformerLens) — to inspect internal computation.
- **Training and fine-tuning stacks** (RLHF/RLAIF pipelines, PyTorch, JAX) — to
  run interventions on real models.
- **Statistics and experiment tracking** — to report calibrated effect sizes, not
  single runs.
- **Sandboxed deployment and monitoring** — to run capable models without
  unintended affordances.

## Collaboration

AI safety research sits between empirical ML, theory, security, and policy.
Researchers work with ML engineers (who build and train the models), red teams
and security engineers (who think adversarially about misuse), policy and
governance staff (who translate findings into deployment rules), and the broader
research community through publication and shared evals. The field is unusually
collaborative across organizational lines because the risks are partly shared — a
dangerous capability is dangerous regardless of who trained it — yet competitive
pressure complicates open disclosure. The healthiest collaboration treats
disagreement about timelines and threat models as a feature, pre-registers what
would count as evidence, and resists letting institutional incentives quietly
redefine what "safe enough" means.

## Ethics

This is a field where the work is the ethics. Core duties: be honest about
capabilities and risks even when honesty is inconvenient to a product launch;
exercise disclosure restraint on genuinely dangerous dual-use findings while
resisting the temptation to hide inconvenient safety results behind it; and avoid
overstating both safety ("we've solved alignment") and danger ("imminent doom"),
because miscalibration in either direction erodes the credibility the field runs
on. Researchers carry responsibility for the downstream uses of the capabilities
their work enables, and for people harmed today by bias, surveillance, and
misuse — not only hypothetical future failures. When commercial pressure pushes
toward shipping a model whose safety case is weak, the duty is to say so clearly
and on the record, even at personal cost.

## Scenarios

**A model passes the harmlessness benchmark but a tester is uneasy.** A new model
scores well on the standard refusal eval and the team is ready to ship. The
researcher distrusts the clean number, asking whether the model is actually safe
or has just learned to recognize the benchmark's phrasing. They build an
out-of-distribution red-team set: the same harmful requests in obfuscated,
multi-turn, and role-play forms the benchmark never covered. The refusal rate
collapses from 98% to 60%. The conclusion is not "the model is unsafe" but "the
benchmark measured benchmark-recognition, not harmlessness." The fix is both a
better eval and an adversarial-training pass — and a note that the original
metric should never again be cited as a safety guarantee.

**Deciding whether to publish a jailbreak technique.** A researcher finds a
prompting method that reliably extracts dangerous synthesis instructions from
several frontier models. Publishing would let labs patch it; it would also hand a
working attack to anyone who reads the paper. They apply the dual-use calculus:
how much real uplift does this give a motivated bad actor beyond what's already
public, and how much does disclosure help defenders? They choose coordinated
disclosure — privately notifying the affected labs, withholding operational
details, and publishing the defensive findings only after patches ship. The
decision is logged and reviewed, not made unilaterally.

**Interpreting an interpretability result.** A sparse autoencoder surfaces a
feature that activates on text about being evaluated and correlates with the
model behaving more cautiously. It's tempting to announce "we found the deception
feature." The expert resists the story and designs a falsification test: ablate
the feature to check whether behavior changes causally, and test on held-out
contexts to rule out a spurious correlation. Ablation moves behavior only weakly.
The honest report is "we found a feature correlated with evaluation-awareness;
its causal role is unclear" — calibrated and falsifiable, more useful than the
headline would have been.

## Related Occupations

An AI safety researcher shares the empirical training of ML practitioners but is
defined by optimizing for what systems shouldn't do rather than what they can.
Machine learning engineers build and scale the models safety researchers probe
and constrain. Research scientists share the experimental method and the norm of
calibrated, peer-reviewed claims. Security engineers share the adversarial
mindset, applied to learned systems instead of code and networks. Prompt
engineers work the same model surface daily and surface many of the robustness
failures safety researchers study. Policy analysts translate technical risk
findings into governance and deployment rules.

## References

- *Concrete Problems in AI Safety* — Amodei, Olah, et al. (2016)
- *Risks from Learned Optimization* — Hubinger et al. (mesa-optimization)
- *Superintelligence* — Nick Bostrom (orthogonality, instrumental convergence)
- *The Alignment Problem* — Brian Christian
- Anthropic, *Core Views on AI Safety*; *Constitutional AI* paper
- *Concrete Problems* and the AI Alignment Forum (alignmentforum.org)
