# Machine Learning Engineer

## Purpose

A machine learning engineer exists to make models earn their keep in
production — to turn a method that works in a notebook on last month's data into a
system that serves predictions at scale, under latency budgets, without silently
rotting. The gap between "scored well in an experiment" and "creates value in
production" is where most ML projects die. The data scientist asks whether the
signal is real; the ML engineer asks whether you can serve it 50,000 times a
second, retrain it weekly, roll it back in one move, and know within minutes when
it predicts garbage. The deliverable is a reliable ML *system*, not a model.

## Core Mission

Build and operate machine learning systems that deliver accurate predictions
reliably in production, retrain and improve safely over time, and fail loudly and
recoverably, never silently.

## Primary Responsibilities

The romantic image is training state-of-the-art models; the real work is
plumbing, serving, and operations. An ML engineer builds training pipelines that
turn raw data into a reproducible artifact, and feature pipelines that compute
features identically across training and serving. They deploy models behind
APIs or batch jobs within latency and cost budgets, and version everything —
data, features, code, model, config — so "which model is in prod?" always has an
answer. They monitor for the failure unique to ML: the model up and fast but
quietly wrong because the world drifted. And they own the retraining loop — when,
on what data, with what guardrails against a worse model.

## Guiding Principles

- **A model is a perishable asset.** Trained on a snapshot of a moving world —
  plan for drift, retraining, and decay.
- **Training–serving skew is the silent killer.** Compute features differently in
  training and serving and your offline metrics are fiction. Share the code path
  or feature store.
- **Reproducibility is non-negotiable.** Same data, code, and seed must yield the
  same model, or you can't debug, audit, or roll back.
- **The model is the easy part.** The data pipeline, serving, and monitoring are
  90% of the system and 90% of the failures (Sculley, "Hidden Technical Debt in
  ML Systems").
- **Ship the simplest model that clears the bar, then iterate.** A logistic
  regression in prod beats a transformer in a notebook.
- **Offline metrics are a hypothesis; online metrics are the truth.** A model
  that improves AUC can still tank revenue.
- **Make every model rollback-able.** A bad deploy is an incident; roll it back
  in one move.

## Mental Models

- **The ML system as a pipeline of stages.** Data ingestion → feature
  computation → training → evaluation → serving → monitoring → retraining. The
  system is only as reliable as its weakest stage — rarely the model.
- **Training–serving skew.** Two code paths that must agree: the batch path that
  built training features and the online path that builds them at request time.
  Any divergence — a default, time-zone, fill value — silently degrades output.
- **Data and concept drift.** *Data drift* is the input distribution moving;
  *concept drift* is the input-to-target relationship moving. Both decay a model
  but demand different responses: retrain vs. rethink.
- **The feedback loop.** A deployed model changes the data it later trains on; a
  recommender teaches itself it was right.
- **Shadow and canary deployment.** Run the new model alongside the old, scoring
  the same traffic without acting on it.
- **The cost surface.** Inference cost = model size × traffic × hardware. The win
  is often quantization, distillation, or caching — not a bigger architecture.
- **Garbage in, model out.** The model encodes whatever the training data
  contains — errors and biases — at scale.

## First Principles

- A model is a function fit to the past; the future is only sometimes like it,
  and the system must notice when it isn't.
- Anything you don't version you can't reproduce; anything you can't reproduce you
  can't trust.
- Offline accuracy and online value are different quantities that only correlate.
- Every feature is a dependency on an upstream pipeline that can break.
- The expensive ML failures are silent: the system stays green while predictions
  go wrong.

## Questions Experts Constantly Ask

- Are features computed identically in training and serving? Prove it.
- What's the latency and cost budget per prediction, and does this model fit it?
- How will I know the model has drifted before a user or the revenue does?
- What's the rollback path if this deploy is bad?
- What data is this trained on, and is any of it leaking the future?
- What happens to predictions when an upstream feature pipeline returns nulls?
- Is the offline metric I'm optimizing correlated with the business outcome?
- Will deploying this model change the distribution of data it later sees?

## Decision Frameworks

- **Build the baseline first.** Ship a heuristic or simple model end-to-end
  before touching quality — it proves the plumbing and sets the bar.
- **Batch vs. real-time serving.** If predictions can be precomputed (daily
  recommendations), batch is cheaper. Pay for online serving only when freshness
  matters.
- **Retrain-on-schedule vs. retrain-on-trigger.** Time-based is simple and
  predictable; drift-triggered is efficient but needs reliable detection. Choose
  by how fast the world moves.
- **Buy vs. build the model.** For commodity tasks (OCR, transcription, general
  language), a hosted API or open foundation model usually beats training from
  scratch. Build when data, latency, or cost is the edge.
- **Promote-on-evidence.** A new model reaches production only after offline
  eval, shadow scoring, then a canary with automatic rollback on regression.

## Workflow

1. **Frame and baseline.** Define the prediction task, metric, and latency/cost
   budget; ship the dumbest model through the full pipeline first.
2. **Build the data and feature pipelines.** Share feature computation across
   train and serve; version the data.
3. **Train and evaluate offline.** Reproducible run, held-out evaluation,
   comparison against baseline and incumbent.
4. **Package and optimize.** Containerize; quantize, distill, or batch to meet
   the budget.
5. **Deploy progressively.** Shadow, then canary, then ramp — with automatic
   rollback wired to online metrics.
6. **Monitor.** Track input and prediction distributions, latency, and the
   business metric; alert on drift, not just crashes.
7. **Retrain.** On schedule or drift trigger, with a guardrail that refuses to
   promote a worse model.
8. **Postmortem ML incidents** like any outage; the fix is usually a monitoring
   or pipeline gap, not the weights.

## Common Tradeoffs

- **Model accuracy vs. inference cost and latency.** The bigger model wins
  offline and blows the latency budget; distillation and quantization trade
  accuracy for speed.
- **Freshness vs. stability.** Retrain often and chase noise; retrain rarely and
  decay. Tune the cadence.
- **Online learning vs. batch retraining.** Online adapts fast but is hard to
  debug and roll back; batch is slower but auditable.
- **Feature richness vs. pipeline fragility.** Every feature is another upstream
  dependency that can break and another way the paths split.
- **Automation vs. oversight in retraining.** A fully automated retrain loop ships
  a regression at machine speed unless guardrails gate it.

## Rules of Thumb

- If the model is suspiciously good offline, look for leakage before you ship.
- Log the model version with every prediction, or you'll never debug prod.
- Compute features once, use them in both training and serving — or pay in skew.
- A model with no monitoring is one you've already lost control of.
- Quantize before you reach for bigger hardware.
- The retrain pipeline must be able to refuse to promote a worse model.
- Reproduce the training run from scratch before you trust the artifact.

## Failure Modes

- **Training–serving skew.** Offline metrics look great, production is worse,
  because features differ between the two paths.
- **Silent drift.** The system is up, fast, and increasingly wrong because the
  input distribution moved and nobody watched.
- **Data leakage.** A feature encodes the label or the future; the model dazzles
  in eval and collapses in production.
- **Pipeline jungle.** A tangle of glue scripts nobody can reproduce — the
  commonest form of ML technical debt.
- **Undeclared consumers.** Other teams quietly depend on a model's outputs, so
  you can't change it without breaking theirs.
- **Feedback loops gone feral.** Predictions reshape the training data until the
  model optimizes for its own past output.
- **The notebook in production.** A model promoted from a notebook with no
  versioning, tests, or rollback.

## Anti-patterns

- **Train-once-deploy-forever** — shipped with no retraining or monitoring,
  left to decay.
- **Two feature code paths** — separate logic for training and serving, drifting
  apart silently.
- **Big-model-by-default** — the largest architecture when a smaller one clears
  the bar at a tenth the cost.
- **Offline-only validation** — promoting on AUC with no shadow or canary.
- **Unversioned everything** — no way to answer "which model, on which data?"
- **Manual retraining heroics** — re-running a notebook each month, not a guarded
  pipeline.

## Vocabulary

- **Training–serving skew** — divergence between how features are computed in
  training and at inference.
- **Feature store** — serves consistent features to training and serving from one
  definition.
- **Data / concept drift** — input distribution moving / input-to-target
  relationship moving.
- **Model registry** — versioned catalog of model artifacts and lineage.
- **Shadow deployment** — running a new model on live traffic without acting on
  it.
- **Quantization / distillation** — shrinking a model by reducing numerical
  precision / training a smaller model to mimic a larger.
- **MLOps** — operating ML systems reliably (CI/CD for models).
- **Inference latency** — time to produce one prediction; the serving budget.
- **Backfill** — recomputing historical features or predictions with new logic.
- **Embedding** — a learned dense vector representing an input.

## Tools

- **Frameworks** — PyTorch, TensorFlow, JAX; scikit-learn and XGBoost for tabular
  work.
- **Serving** — TorchServe, Triton, BentoML, ONNX Runtime, vLLM for LLMs.
- **Pipelines and orchestration** — Airflow, Kubeflow, Ray, Spark.
- **Experiment and artifact tracking** — MLflow, Weights & Biases, DVC; a model
  registry for audit.
- **Feature stores** — Feast, Tecton, to kill training–serving skew.
- **Monitoring** — drift detectors, Evidently, plus Prometheus/Grafana for
  latency and throughput.
- **Infrastructure** — Kubernetes, GPUs/TPUs, autoscaling, and cost accounting.

## Collaboration

An ML engineer sits between research and operations and speaks both languages.
With data scientists, they harden a prototype and push back when it can't be
served within budget or reproduced. With data engineers, they share feature
pipelines and feel every upstream schema change. With software engineers, they
integrate the model behind an API under the same review discipline; with SREs,
they share on-call and observability. The recurring friction is the handoff from
data science: a research artifact lands needing the reproducibility, monitoring,
and rollback it was never built with — good ML engineers push that rigor
upstream.

## Ethics

ML systems decide about people at a scale and speed no human reviews, which
concentrates the cost of a quiet mistake. The duties: monitor for fairness and
disparate impact in production, not just at training time, because a model can
drift into discrimination as the world shifts; keep a human-meaningful
explanation and appeal path for high-stakes decisions; refuse to deploy a model
whose data you can't account for or whose failures you can't detect; treat a
silently-wrong model as a safety incident. The hardest line is shipping speed
versus the guardrails that catch the harm — and the engineer who skips them owns
what the model does.

## Scenarios

**The model that aced the lab and failed the field.** A fraud model scores 0.94
AUC offline but barely beats the old rules in production. Suspecting
training–serving skew, the engineer compares feature values across both paths.
The training pipeline computed "average transaction amount" over a 30-day window
including the current transaction; the serving path excluded it — a leak
inflating offline scores. Unifying the paths through one feature definition drops
the offline number to a realistic 0.86, which production matches.

**Silent drift after a holiday.** A demand-forecasting model that ran clean for
months starts under-predicting badly in late November. No alert fired — latency
and error rates were fine; the *system* was healthy, only the *predictions* were
wrong. The fix is twofold: revert to a seasonal heuristic now, then add
prediction- and input-distribution monitoring with drift alerts. ML monitoring
must watch the numbers the model emits, not just whether the server is up.

**The retrain that would have shipped a regression.** The weekly automated
retrain scores higher on the rolling validation set. The promotion
guardrail runs it against a fixed golden test set and a fairness slice, and
catches that overall accuracy rose but dropped sharply for a minority segment —
that week's training data was skewed by a logging bug. The pipeline refuses to
promote and pages the engineer; the old model stays up, stopping harm at machine
speed.

## Related Occupations

A machine learning engineer is a software engineer who specializes in the
failure modes of systems that learn — versioning, testing, and operating code
applied to artifacts that decay and drift. The data scientist is the closest
neighbor and upstream partner: they prove the signal and prototype the model; the
ML engineer makes it a reliable production system. Data engineers
build the pipelines both depend on; SREs share the on-call culture; AI safety
researchers and prompt engineers work the same models from alignment and
interface angles; research scientists supply the methods it productionizes.

## References

- *Designing Machine Learning Systems* — Chip Huyen
- *Machine Learning Design Patterns* — Lakshmanan, Robinson, Munn
- *Reliable Machine Learning* — Chen et al. (Google)
- "Hidden Technical Debt in Machine Learning Systems" — Sculley et al., NeurIPS 2015
- *Designing Data-Intensive Applications* — Martin Kleppmann
