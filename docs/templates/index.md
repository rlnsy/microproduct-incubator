---
title: Product templates overview
description: Starter repositories for scaffolding microproducts—from data apps to agentic workflows.
slug: /
last_reviewed: 2026-05-04
---

Build Trilemma hosts a reduced set of opinionated starters under **`product-templates/`** in [microproduct-lab](https://github.com/TrilemmaFoundation/microproduct-lab). Each starter includes README, AGENTS guidance, YAML metadata stubs, Markdown contracts, `src/` and `tests/` placeholders, and GitHub Actions (stub workflows until you attach a toolchain).

:::info Legacy markdown templates

The top-level **`templates/`** folder is for documentation and submission scaffolding (for example playbook modules)—not runnable product repos.

:::

## Starter index

Each row links into the canonical repository paths.

| Template | Audience | Highlights |
| --- | --- | --- |
| [**data-app**](https://github.com/TrilemmaFoundation/microproduct-lab/tree/main/product-templates/data-app) | Engineers shipping decision tools atop structured datasets | Opinionated Markdown contracts plus placeholder app layout |
| [**benchmark-suite**](https://github.com/TrilemmaFoundation/microproduct-lab/tree/main/product-templates/benchmark-suite) | Evaluation-heavy teams | Evaluation + metrics docs first |
| [**agentic-workflow**](https://github.com/TrilemmaFoundation/microproduct-lab/tree/main/product-templates/agentic-workflow) | Operators orchestrating autonomous agents | Captures escalation + human review hooks |

:::info Compatibility note

Older starter names such as `llm-app`, `analytics-api`, `dashboard-to-tool`, `research-to-product`, and `capstone-project` were consolidated into the canonical starters above. Use `agentic-workflow` for agent orchestration, `data-app` for decision tools, and `benchmark-suite` for evaluation-heavy products.

:::

:::caution Stub CI workflows

Starter `.github/workflows/checks.yml` files intentionally perform placeholder steps so you can choose **npm**, **pnpm**, **uv**, etc. Swap them once you finalize your stack.

:::

## References

- [Archetypes](/archetypes) — pick patterns before scaffolding.
- [Standards](/standards) — required files & maturity semantics.
- [Contribute workflow](/contribute) — submissions for this registry.
