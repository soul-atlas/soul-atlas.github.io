# Database Administrator

## Purpose

A database administrator exists because data is the one part of a system that
cannot be regenerated. Code redeploys from git and servers reprovision, but the
customer's order, patient's record, or ledger of who owes whom lives in the
database and nowhere else — if corrupted, lost, or silently wrong, no redeploy
brings it back. The DBA makes that state durable, correct, consistent, and fast
enough to use.

## Core Mission

Keep the organization's data durable, correct, and recoverable while serving it
fast enough that the application never waits — and prove, not hope, that last
night's catastrophe would cost no more than the agreed loss and downtime.

## Primary Responsibilities

The visible work is running queries and granting access; the actual work is being
the last line of defense for state. A DBA designs schemas; builds indexes so the
engine finds rows without scanning; reads and tunes execution plans; tests backup
and recovery against RPO/RTO targets; manages replication and failover;
controls concurrency, locking, and isolation so transactions don't corrupt each
other; plans capacity; runs maintenance (vacuum, statistics, index rebuilds);
secures data with access control and encryption; and reviews every migration. Above
all, the DBA tests restores.

## Guiding Principles

- **Durability is the prime directive.** A committed transaction must survive a
  crash, full stop. Speed and convenience are negotiable; this is not.
- **A backup you haven't restored does not exist.** Backups fail silently;
  restores are the only proof.
- **Correctness over speed, always.** The wrong rows fast is worse than the right
  rows slowly.
- **The query plan is the truth; the query is your intent.** Read the plan before
  you tune; the optimizer obeys statistics, not intent.
- **Migrations are one-way doors at scale.** Treat every change to a large, live
  table as a potential outage; make it online, reversible, staged.
- **Let the database do what it's good at.** Constraints, transactions, and joins
  keep data from going wrong; integrity in app code orphans rows.
- **Concurrency is where correctness goes to die.** Most data-corruption bugs are
  two transactions racing; choose isolation levels carefully.

## Mental Models

- **ACID.** Atomicity (all or nothing), Consistency (constraints hold), Isolation
  (transactions don't see each other's mess), Durability (committed stays
  committed). Every tradeoff is which of the four you relax.
- **The index as a tradeoff, not a free lunch.** It turns an O(n) scan into an
  O(log n) seek but taxes every write plus storage.
- **The optimizer reasons over statistics.** It estimates row counts from
  histograms to pick a plan; stale statistics feed it lies and a confident wrong
  estimate produces a disastrous plan.
- **MVCC vs. locking.** Multi-version concurrency control gives readers a snapshot
  without blocking writers by keeping old row versions — why Postgres needs vacuum
  to reclaim dead tuples.
- **Normalization vs. denormalization.** Normal forms store each fact once to kill
  update anomalies; denormalization duplicates to avoid joins.
- **RPO and RTO.** Recovery point objective = data you can lose; recovery time
  objective = downtime you can afford.
- **The working set and the buffer cache.** Performance lives or dies on whether
  the hot data fits in RAM; once it spills to disk, latency jumps an order of
  magnitude.

## First Principles

- Storage fails, and fails silently — bit rot, controller bugs, and human error
  corrupt data without an error message.
- A committed write not on durable media in at least two places is not yet safe.
- The optimizer is only as good as its statistics; garbage estimates, garbage
  plans.
- Every lock held is someone else waiting; every long transaction taxes everyone
  behind it.
- You cannot scale writes the way you scale reads — sharding splits the data and
  the transactions.

## Questions Experts Constantly Ask

- If this disk dies right now, how much data do we lose and how long are we down?
- When did we last actually restore this backup, not just take it?
- What does the query plan say — seek or scan, and why?
- Are the statistics fresh, and does the optimizer's row estimate match reality?
- What isolation level is this, and what anomaly does it permit?
- Is this migration online and reversible, and what locks will it take?
- What's the working set, does it fit in RAM, and when will it stop?

## Decision Frameworks

- **RPO/RTO-driven backup design.** Start from the business answer — "we can lose
  5 minutes, be down 1 hour" — and work back: WAL archiving plus replicas for tight
  RPO, nightly dumps for loose.
- **Index decision: cost the writes, not just the reads.** Add an index when a
  frequent slow query needs it and the write penalty is acceptable; drop indexes
  absent from the plan cache. Composite order follows the predicates: equality
  before range, most selective first.
- **Normalize first, denormalize on evidence.** Design in third normal form;
  denormalize only when a profiled read path proves the join is the bottleneck.
- **Scale reads with replicas, writes with sharding — reluctantly.** Replicas are
  cheap and safe; sharding fractures transactions and joins, so exhaust vertical
  scaling first.
- **Mitigate first during an incident.** Kill the runaway query, fail over,
  throttle the offender — restore service before root-causing.

## Workflow

1. **Model the data.** Design the schema, keys, and constraints from the entities
   and relationships before code depends on them.
2. **Design for recovery from day one.** Decide RPO/RTO, configure backups and
   replication, write the restore runbook before going live.
3. **Provision and baseline.** Size storage, memory, connections; capture baseline
   metrics so you know what "normal" is.
4. **Index and tune iteratively.** Run the real workload, read the plans, add and
   remove indexes, refresh statistics, fix slow queries.
5. **Review every migration.** Check locking, online-ability, and reversibility;
   stage it; run it in a window with a rollback.
6. **Monitor.** Replication lag, lock waits, cache hit ratio, slow-query logs,
   disk and connection saturation, backup success.
7. **Drill recovery.** Restore to a scratch instance on a schedule; time it
   against RTO; fix what broke.
8. **Maintain.** Vacuum/analyze, rebuild bloated indexes, archive cold data,
   rotate credentials, patch the engine.

## Common Tradeoffs

- **Consistency vs. availability and latency.** Synchronous replication gives zero
  data loss but adds write latency and can stall on a slow replica; async is fast
  but loses the tail on failover.
- **Normalization vs. read performance.** Fewer joins read faster but duplicate
  facts that drift.
- **Indexes vs. write throughput.** Every index speeds some reads and slows every
  write.
- **Isolation strength vs. concurrency.** Serializable is correct but serializes
  and aborts; read-committed is fast but permits anomalies. Pick the weakest still
  correct.
- **Vertical vs. horizontal scaling.** A bigger box keeps transactions intact;
  sharding scales further but breaks cross-shard joins.
- **Backup frequency vs. cost and load.** Tighter RPO means more backups, storage,
  and I/O.

## Rules of Thumb

- Restore a backup before you trust it; an untested backup is Schrödinger's data.
- If a query is slow, read the plan before you touch the query.
- A full table scan on a large table in a hot path is a bug until proven so.
- Index the columns in your WHERE and JOIN clauses, not every column.
- Long-running transactions are poison — they block vacuum, hold locks, bloat.
- Never run a destructive migration without a tested rollback and fresh backup.
- An OLTP cache hit ratio below ~99% usually means the working set outgrew RAM.
- Replication lag is a silent RPO; alert before it becomes data loss.

## Failure Modes

- **The backup that never restored.** Backups ran green for years; the night they
  were needed, the restore failed.
- **The catastrophic plan flip.** Statistics went stale, the optimizer chose a
  nested loop over a hash join, and a 50 ms query became 50 seconds.
- **Lock contention cascade.** A long transaction holds a lock, queries queue,
  connections exhaust, and the app falls over from one slow writer.
- **Replication lag masquerading as loss.** An async replica falls hours behind,
  failover promotes it, and the latest committed data is lost.
- **Vacuum starvation / transaction-ID wraparound.** Dead tuples never reclaimed,
  the table bloats, and Postgres forces a shutdown.
- **The unindexed foreign key.** Deletes on the parent scan the child fully,
  turning cleanup into an outage.
- **Silent corruption.** A storage fault writes bad blocks; without checksums they
  replicate into every backup.

## Anti-patterns

- **SELECT \*** in production — unused columns, breaking on schema change.
- **N+1 queries** — the ORM firing one query per row instead of a join.
- **Integrity enforced only in application code** — constraints the database
  doesn't know about, so data drifts into impossible states.
- **EAV for everything** — a database inside the database the optimizer can't
  reason about.
- **Indexing blindly** — an index per slow query without reading the plan.
- **Shared admin credentials** — everyone superuser, so audit and least privilege
  are fiction.
- **DELETE/UPDATE without a WHERE check** — the unbounded statement that takes the
  whole table.

## Vocabulary

- **ACID** — atomicity, consistency, isolation, durability.
- **MVCC** — multi-version concurrency control; readers see a snapshot without
  blocking writers.
- **WAL / redo log** — write-ahead log; the durable record of changes for crash
  recovery and replication.
- **RPO / RTO** — recovery point objective (data loss tolerated) / recovery time
  objective (downtime tolerated).
- **Query plan** — the strategy the optimizer chose (scans, seeks, joins, sorts).
- **Vacuum** — reclaiming dead row versions and refreshing statistics under MVCC.
- **Sharding** — partitioning data across servers to scale writes.
- **Isolation level** — how much concurrent transactions see of each other.
- **Bloat** — wasted space from dead tuples or fragmented indexes.
- **Failover** — promoting a replica to primary when the primary fails.

## Tools

- **The engine and its CLI** — PostgreSQL (psql), MySQL/MariaDB, Oracle, SQL
  Server (sqlcmd); deep knowledge of one engine's internals is the craft.
- **Plan and profiling** — EXPLAIN/EXPLAIN ANALYZE, pg_stat_statements,
  slow-query logs, wait-event views.
- **Backup and recovery** — pg_dump/pg_basebackup, WAL archiving, Percona
  XtraBackup, point-in-time recovery, the restore drill.
- **Replication and HA** — streaming replication, Patroni, Galera, Always On,
  read replicas, failover orchestration.
- **Monitoring** — Prometheus exporters, pgAdmin, pganalyze, Datadog DBM for
  cache ratios, lag, locks, saturation.
- **Schema management** — Flyway, Liquibase, sqitch for versioned, reversible
  migrations.

## Collaboration

A DBA sits between the application and its irreplaceable state, both guardian and,
to impatient developers, gatekeeper. With backend engineers the work is schema and
query review: catching the N+1, the missing index, the migration that locks a
billion-row table. With SREs they share data-tier on-call and the RPO/RTO
conversation; with security engineers, access control, encryption, and audit; with
data engineers, the OLTP-to-OLAP handoff. The recurring tension is velocity versus
safety; the DBA's job is to make the safe path the fast path: online migrations,
good defaults, guardrails.

## Ethics

The DBA holds the most sensitive thing an organization owns: the personal,
financial, and medical records of people who never chose to trust them. The duties
follow: enforce least privilege so no one, the DBA included, has more access than
their job needs; encrypt sensitive data at rest and in transit, keys separate;
honor retention and deletion law — when a person exercises the right to be
forgotten, the data must actually be gone, including from backups; never run "quick
lookups" on production personal data; tell the truth about a breach. The power to
query every row is the power to abuse it.

## Scenarios

**The query that was fast yesterday.** A reporting query that ran in 80 ms starts
taking 40 seconds across the fleet overnight; the app times out. The novice
rewrites the SQL. The expert runs EXPLAIN ANALYZE and sees the plan flip from an
index seek to a full scan with a wildly wrong row estimate — the table grew past a
threshold and statistics went stale after a bulk load, so the optimizer picks the
wrong join. The fix: ANALYZE the table, watch the plan revert, schedule a stats
refresh after bulk loads. The query was never the problem; the stats were.

**A 3 a.m. primary failure.** The primary's storage fails. The on-call DBA's first
move is recovery, not diagnosis: fail over to the synchronous replica, confirm the
app reconnects, verify the last committed transaction is present (synchronous means
zero loss). Service is back in minutes; only then do they investigate the dead
primary. The real finding: monitoring hadn't alerted on the disk errors that
preceded the failure by days — the fix is SMART/checksum alerting.

**Adding a NOT NULL column to a billion-row table.** Run naively, the migration
rewrites every row, holds an exclusive lock, and takes the app down for an hour.
The DBA does it online: add the column nullable (instant in modern Postgres),
backfill in throttled batches, then validate — zero downtime.

## Related Occupations

The database administrator shares the irreplaceable-state mindset of the site
reliability engineer but specializes in the data tier — a specialization SREs
often grow into as "database reliability engineering." Backend engineers write the
queries and schemas the DBA reviews and tunes. Data engineers take the same data
downstream into analytical pipelines, reasoning in throughput rather than
transactional correctness. Security engineers share access control, encryption, and
audit; systems administrators manage the hosts and storage.

## References

- *Database Internals* — Alex Petrov
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *SQL Performance Explained* — Markus Winand
- *Database System Concepts* — Silberschatz, Korth, Sudarshan
- *The Art of PostgreSQL* — Dimitri Fontaine
