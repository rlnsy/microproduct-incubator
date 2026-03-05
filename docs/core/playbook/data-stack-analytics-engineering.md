---
title: Data Stack & Analytics Engineering
description: Opinionated MVP patterns for orchestration, transformation, and analytics storage.
last_reviewed: 2026-03-05
---

## Context

Use this module when your microproduct depends on repeatable data pipelines, reliable metrics, or derived datasets beyond a single script. It is designed for builders shipping MVPs who need fast, practical decisions without over-engineering.

## Opinionated Defaults

- Local-first default: `Dagster + dbt + DuckDB`
- Warehouse-first default: `Dagster + dbt + Snowflake`

Choose local-first if:

- your total modeled data is still manageable on a single machine,
- one builder owns the pipeline end-to-end,
- low infrastructure cost and fast iteration are the highest priorities.

Choose warehouse-first if:

- data volume or query concurrency is growing beyond comfortable local execution,
- multiple contributors need shared, governed access,
- uptime, security, and access-control requirements are becoming strict.

## MVP Reference Architecture

Use this baseline flow:

1. Ingestion/source sync pulls raw data from APIs, files, or operational stores into a raw landing layer.
2. Dagster orchestrates ingestion and transformation assets with explicit dependencies and schedules.
3. dbt transforms raw data into trusted models and runs tests before downstream use.
4. The serving layer exposes curated marts to your microproduct API, UI, or reporting surface.

Minimum component boundaries:

- Ingestion owns source extraction and incremental loading only.
- Orchestration owns run order, retries, scheduling, and failure visibility.
- Transformations own business logic, naming, tests, and contracts.
- Serving owns product-facing read paths and response latency requirements.

## Tooling Roles

- Dagster: orchestration, asset graph management, schedules, retries, and run visibility.
- dbt: SQL transformations, model layering, tests, contracts, and documentation.
- DuckDB: embedded analytical engine for fast local and small-to-medium workloads.
- Snowflake: managed cloud warehouse for scale, concurrency, governance, and enterprise access controls.

## Implementation Steps

1. Choose stack path (`DuckDB` local-first or `Snowflake` warehouse-first) using clear workload and team criteria.
2. Scaffold projects: initialize Dagster repository structure and dbt project with environments (`dev`, `prod`).
3. Define ingestion pattern: full refresh vs incremental sync by source, with explicit load timestamps.
4. Implement dbt model layers: `staging` (source cleanup), `intermediate` (joins/business prep), `marts` (product-facing).
5. Connect Dagster assets/jobs to dbt runs and source sync tasks with dependency-aware scheduling.
6. Add data quality tests and contracts before exposing any mart to product features.
7. Establish deployment baseline: one repeatable deploy path, pinned dependencies, and environment secrets management.
8. Add observability baseline: run status dashboards, failure alerts, and simple run-time/freshness SLO tracking.

## Data Quality And Reliability Minimums

- Source freshness checks for every production source.
- Key uniqueness and non-null tests on core entities.
- Schema contract checks for critical marts consumed by product workflows.
- Pipeline run alerts for failures and repeated retries.
- Documented retry and backfill strategy for each ingestion path.

## Pitfalls

- Selecting too many tools before MVP requirements are stable.
- Embedding business logic in orchestration code instead of dbt models.
- Skipping model naming standards, which creates long-term maintenance drag.
- Leaving tests out of "temporary" models that quietly become production dependencies.
- Moving to warehouse spend too early without data volume or concurrency pressure.

## Upgrade Triggers

Move from DuckDB to Snowflake when one or more thresholds are consistently true:

- Scheduled production runs regularly exceed 20-30 minutes for core pipelines.
- Modeled analytical data grows beyond 50-100 GB with degraded local development and CI performance.
- Concurrent contributor and consumer demand reaches 3 or more active users and creates contention or fragmented state.
- Required freshness SLA drops below 15 minutes and local-first orchestration cannot reliably meet it.
- Governance or security requirements (RBAC, auditing, data retention controls) exceed what local-first operation can support.

## References

- Dagster Docs: [https://docs.dagster.io](https://docs.dagster.io)
- dbt Docs: [https://docs.getdbt.com/docs/introduction](https://docs.getdbt.com/docs/introduction)
- DuckDB Docs: [https://duckdb.org/docs/](https://duckdb.org/docs/)
- Snowflake Docs: [https://docs.snowflake.com/](https://docs.snowflake.com/)

## Next Step

- Apply these decisions in [Implementation](/docs/playbook/implementation).
- Validate delivery quality with [QA Methodology](/docs/playbook/qa-methodology).
