# Data Engineer

## Purpose

A data engineer exists so the rest of an organization can trust the numbers. Raw
data arrives messy, late, duplicated, and lying — from databases, event streams,
APIs, and hand-edited spreadsheets — and somebody must turn it into tables an
analyst, a model, or an executive can rely on without a footnote. The gap between
"the data is somewhere" and "we have a correct, timely answer" is bridged by
plumbing that holds when the source schema changes at 3 a.m. unannounced.

## Core Mission

Move data from where it is produced to where it is needed — correct, complete, on
time, and reproducible — so the same input always yields the same trustworthy
output, run after run.

## Primary Responsibilities

The visible work is writing pipelines; the actual work is defending data
correctness across systems never designed to agree. A data engineer designs
ingestion from operational sources without melting them; models the
warehouse/lakehouse so a question maps to a query, not a forensic investigation;
writes idempotent, replayable transformation logic (ELT or ETL); enforces quality
with tests and contracts; orchestrates the dependency graph so the daily run
finishes before dashboards refresh; manages schema evolution so one upstream change
doesn't break twelve downstream jobs; and owns compute cost that can bill five
figures a month. When a number looks wrong, the data engineer is asked why — and "I
don't know" won't hold for long.

## Guiding Principles

- **Idempotency is non-negotiable.** A pipeline you can't re-run can't be operated;
  re-running yesterday's load must reproduce it, not double it.
- **Make pipelines replayable from source.** Keep raw immutable and partitioned;
  rebuilding any table from raw means recovering from any bug.
- **Schema is a contract, and contracts break loudly.** Detect drift at the
  boundary; never let a silently-changed upstream column poison a gold table.
- **Correctness beats freshness beats cost.** Get it right, then timely, then
  cheap. A fast, cheap wrong number is the worst outcome.
- **Test data like you test code.** Row counts, uniqueness, null rates, and
  referential integrity are assertions, not hopes.
- **Push computation to the data.** Move the query into the warehouse; don't drag a
  billion rows across the network to filter.
- **Late-arriving data is the normal case.** Design for events hours late, not as
  an exception.

## Mental Models

- **ETL vs. ELT.** With cheap storage and powerful warehouses (Snowflake,
  BigQuery, Databricks), load raw first and transform in-warehouse; prefer ELT.
- **The medallion architecture (bronze/silver/gold).** Raw ingested (bronze),
  cleaned (silver), business aggregates (gold) — each a checkpoint rebuildable from
  the one below.
- **Batch vs. stream as a latency spectrum.** Batch is a stream with a big window,
  streaming a batch of one; ask what latency the consumer needs.
- **The Lambda / Kappa debate.** Lambda runs batch and stream in parallel; Kappa
  keeps one path and replays it. Two paths computing one number is a reconciliation
  tax — prefer one.
- **Event time vs. processing time.** When something happened versus when you saw
  it — home of windowing, watermarks, late data, and most "totals don't match"
  bugs.
- **Slowly Changing Dimensions (SCD).** How history survives a dimension change —
  overwrite (Type 1) or new versioned row (Type 2); the wrong type destroys "what
  was true back then?"
- **The DAG.** Every pipeline is a directed acyclic graph of dependencies that
  orchestration runs in order, retries, and backfills; a cycle means a broken model.

## First Principles

- Data is guilty until proven clean; every source lies in its own dialect.
- The same query run twice should return the same answer, or you have a bug, not a
  result.
- Storage and recomputation are cheap; a wrong number that reached a decision-maker
  is expensive — favor recoverability.
- Every join is a claim about cardinality you must verify.
- A pipeline with no tests asserts correctness on faith.

## Questions Experts Constantly Ask

- What is the grain of this table — one row per what?
- Is this transformation idempotent, and can I backfill it safely?
- What happens when this source sends a duplicate, null, or late event?
- Who consumes this table, and what freshness SLA do they need?
- If this column disappears upstream tomorrow, what breaks, how loudly?
- Are these two numbers different from a bug or event-time skew?
- What will this query cost, and is a full scan needed?
- Can I rebuild this from raw?

## Decision Frameworks

- **Batch vs. streaming.** Default to batch; it's simpler and cheaper. Reach for
  streaming only when a decision needs sub-minute latency (fraud, real-time
  inventory).
- **Build vs. buy for ingestion.** Connectors to common SaaS sources are solved;
  use Fivetran/Airbyte rather than maintaining brittle API clients, unless the
  source is a core differentiator.
- **Normalize vs. denormalize.** Normalize where data is written and integrity
  matters; denormalize (star schema, wide tables) where it's read.
- **Where to enforce quality.** Block at the contract boundary for failures that
  corrupt downstream (schema, key uniqueness); warn-and-continue for the merely
  suspicious — don't fail a DAG over a 0.1% null rate on a nullable field.
- **Full refresh vs. incremental.** Full refresh is simple and self-healing but
  scales badly; go incremental only when volume forces it, with a periodic full
  rebuild as the safety net.

## Workflow

1. **Understand the consumer.** What question must this answer, at what grain, how
   fresh, and who is hurt if it's wrong? Define the SLA before the schema.
2. **Profile the source.** Volume, update pattern, key uniqueness, null rates, how
   it signals deletes and late data. Assume nothing the docs claim.
3. **Land raw, immutably.** Ingest to bronze with full fidelity, partitioned by
   ingestion or event date — never transform on the way in.
4. **Model.** Decide grain, keys, and SCD type. Write transformations as
   version-controlled, tested SQL (dbt) — silver then gold.
5. **Test.** Assert uniqueness, not-null, accepted values, and referential
   integrity; a model without tests doesn't merge.
6. **Orchestrate.** Wire the DAG in Airflow/Dagster with retries, upstream-readiness
   sensors, and idempotent tasks. Make backfill a first-class command.
7. **Observe.** Monitor freshness, volume, and schema drift; alert when row counts
   swing outside expected bounds.
8. **Tune cost.** Right-size warehouses, partition and cluster on real query
   patterns, kill the full scans.

## Common Tradeoffs

- **Freshness vs. cost.** Sub-minute pipelines cost far more than hourly ones; buy
  the latency the decision needs, not the one that sounds modern.
- **Correctness vs. timeliness.** Wait for late data and be right but late, or cut
  the window and be timely but provisional; state which, per table.
- **Normalization vs. query performance.** Fewer joins read faster but duplicate
  data and risk drift; normalization is cleaner but slower.
- **Schema-on-write vs. schema-on-read.** Structure on ingest catches problems
  early but rejects messy reality; schema-on-read defers the pain.
- **Generic framework vs. specific pipeline.** A mega-pipeline handling every source
  poorly versus tailored jobs each handling one well.
- **One-path (Kappa) vs. two-path (Lambda).** One path is simpler to keep correct;
  two buy latency at the cost of constant reconciliation.

## Rules of Thumb

- Always know the grain of a table before you query it.
- If a pipeline isn't idempotent, treat it as broken even if it "works" today.
- Partition by the column you filter on; cluster by the column you join on.
- A dedupe step belongs right after ingestion, not layers downstream.
- Never `SELECT *` in production transforms — it's how schema drift sneaks in.
- Test the keys: a non-unique primary key makes every downstream count suspect.
- Backfill is not an emergency procedure; design for it from day one.
- When two numbers disagree, suspect event-time vs. processing-time before
  arithmetic.

## Failure Modes

- **Silent duplication.** A non-idempotent load run twice, doubling revenue in a
  dashboard nobody reconciled.
- **Fan-out joins.** A many-to-many join nobody checked, inflating every metric.
- **Schema drift poisoning.** An upstream type change flowing unnoticed into gold,
  corrupting a quarter of reporting.
- **The midnight backfill that didn't.** A "rerun" that wasn't idempotent, leaving
  partial state worse than the failure.
- **Pipeline spaghetti.** Hundreds of interdependent jobs with no lineage; no one
  can say what breaks if a table is dropped.
- **Cost surprise.** A naive full-scan scheduled hourly, billing more than the
  team's salaries.
- **Freshness theater.** A pipeline that runs "successfully" on stale data because
  nobody monitored whether new data arrived.

## Anti-patterns

- **Transform-on-ingest** — destroying the raw record, so you can never replay.
- **The one giant SQL file** — a 2,000-line transform no one can test.
- **Manual fixes in production** — hand-editing a warehouse table, breaking
  reproducibility.
- **`MERGE` without idempotency** — upserts that aren't safe to re-run.
- **Reverse ETL sprawl** — syncing the warehouse into a dozen unowned tools.
- **Trusting source documentation** — building on the schema the API claims, not
  what it sends.
- **No data contracts** — letting upstream teams change shape with no notice.

## Vocabulary

- **Idempotent** — re-running a load yields the same state, not duplicate data.
- **Grain** — what a single row of a table represents.
- **Backfill** — recomputing historical partitions after a fix or new column.
- **Watermark** — the event-time point past which a window is emitted.
- **SCD (Slowly Changing Dimension)** — how a dimension preserves or discards
  history on change.
- **CDC (Change Data Capture)** — streaming a database's row-level changes from its
  transaction log, not polling.
- **Lakehouse** — object-storage lake with warehouse-grade table semantics via
  Delta, Iceberg, or Hudi.
- **Data contract** — an enforced agreement on the schema a producer guarantees.
- **Fan-out** — a join that multiplies rows because the key isn't unique.
- **Lineage** — how each table derives from its sources.

## Tools

- **Orchestration** — Airflow, Dagster, or Prefect to schedule and retry the DAG.
- **Transformation** — dbt for version-controlled, tested, modular SQL.
- **Warehouses / lakehouses** — Snowflake, BigQuery, Databricks, Redshift; table
  formats Iceberg/Delta/Hudi over object storage.
- **Ingestion / CDC** — Fivetran, Airbyte, Debezium, Kafka Connect.
- **Streaming** — Kafka, Kinesis, Flink, Spark Structured Streaming.
- **Processing** — Spark for big batch; DuckDB/Polars for what fits on one machine.
- **Quality / observability** — Great Expectations, dbt tests, Monte Carlo,
  freshness/volume monitors.

## Collaboration

A data engineer sits between the people who produce data and those who consume it,
and most friction lives at those two seams. Upstream, software/backend engineers
decide whether you get stable schemas or a moving target — the best outcome is a
data contract enforced in their CI, not a Slack apology after a break. Downstream,
analysts and data scientists are the customers, given clean, well-grained tables.
Data engineering is invisible when it works and blamed when a number is wrong, so
over-communicate lineage, freshness, and caveats.

## Ethics

Data engineers handle the most sensitive material an organization holds — who its
users are, what they did, what they're worth — and build the pipes that make it
trivially copyable. The duties: minimize and pseudonymize PII rather than hoard it
because storage is cheap; honor deletion and consent (GDPR, CCPA) as pipeline
requirements, tracking where data flows so you can purge it; resist the join that
re-identifies anonymized records; and be honest about quality, since a wrong number
does more harm than an admitted gap. The hardest cases are where the
easy pipeline and the right one diverge — combining datasets users never consented
to, retaining logs "just in case" — and those should be named, not defaulted.

## Scenarios

**A revenue dashboard doubled overnight.** Finance reports today's revenue is 2x
yesterday's, with no price change. The expert checks the run log first, not the
dashboard query, and finds last night's ingestion failed mid-run, was manually
re-triggered, and the load wasn't idempotent — so a day's events landed twice.
Immediate fix: rebuild the partition from immutable bronze. In the postmortem, the
plain `INSERT` becomes an idempotent `MERGE` keyed on event ID with a dedupe step,
plus a row-count anomaly monitor so the next double-load alerts first.

**"Make the dashboard real-time."** A product manager wants the metrics dashboard
real-time. Rather than reaching for Kafka and Flink, the engineer asks what
decision the freshness enables — and learns the team reviews it in a standup each
morning. The honest requirement is "fresh by 9 a.m.," not "real-time." They
schedule the hourly batch's final run for 8:30 and redirect the saved streaming
work toward the data-quality tests that were missing.

**Onboarding a new third-party source.** A vendor API will feed a new customer
table. The engineer profiles it first: the "unique" customer ID repeats for ~2% of
rows, timestamps are in vendor local time with no offset, and deletes are a
vanishing row, not a tombstone. They land raw to bronze, dedupe on the natural key,
normalize to UTC at silver, and detect soft deletes by diffing snapshots —
building the pipeline to survive the vendor breaking the ID contract, because
vendors do.

## Related Occupations

A data engineer shares the software engineer's discipline of testable,
version-controlled code but aims it at data correctness over time, not application
behavior. Data scientists and machine-learning engineers are the primary
downstream consumers, reasoning in distributions and models while the data engineer
guarantees the tables they train on. Database administrators are the operational
cousins tuning the stores pipelines read and write. Backend engineers produce the
operational data and event streams pipelines ingest, making data contracts a shared
concern. Cloud architects design the storage and compute substrate underneath.

## References

- *The Data Warehouse Toolkit* — Ralph Kimball & Margy Ross
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Fundamentals of Data Engineering* — Joe Reis & Matt Housley
- *Streaming Systems* — Akidau, Chernyak & Lax
- dbt and Apache Airflow documentation
