---
title: QA Methodology
description: Phase 2 QA track for validating agent-assisted builds and ensuring progress.
tags: [playbook, qa]
last_reviewed: 2026-03-18
---

## QA Track in Implementation Phase
Delivering high-quality microproducts to users requires effort in the ideation,
implementation and operation of the software. Here, we focus on shaping key
aspects and milestones in the implementation phase to enable fast execution while
producing reliable outcomes. QA is a dedicated track inside Phase 2, not a post-
build afterthought. Its purpose is not to introduce friction into the SDLC, but
rather to create effective feedback loops, facilitate progress without regression,
and allow timely delivery of a product that matches or exceeds initial expectations.


## Disclaimer
Like much of the content in this knowledge-base, our guidelines and templates for
QA do not follow or prescribe any one doctrine or set of tools. However, we use
these to consolidate tailored learnings from work on other microproducts and
share opinionated defaults in the form of guiding principles, reference architecture,
and best practices. We consider this a working document, and welcome variants of
the suggested methodology as well as improvements through contributions.

## QA Philosophy
We draw inspiration from some of the most successful tech companies (Google, Amazon)
and incorporate ideas from processes like 'Shift-Left', Continuous Testing and
Behaviour-Driven Development (BDD) while adapting them to meet the needs of
microproduct development in our modern, AI-assisted era.
Our quality assurance methodology has the following characteristics:

1. [Focused Specification](#focused-specification)
2. [Automation](#automation)
3. [Thoughtful Quality Gates & Feedback Mechanisms](#thoughtful-quality-gates--feedback-mechanisms)

Which are explored further below.

### Focused Specification
*Business rules and product behaviours are organized into independent modules for evolution, testing and feedback.*

Tests validate that software meets requirements, most commonly using examples
that demonstrate a particular behaviour or rule. Statements that describe the
structure, behaviour, rules and non-functional properties of a system form the
specification. Tests help demonstrate that those statements are true of the
current implementation or release candidate. In this way, testing, quality
assurance and specifications are intertwined.

We do *not* expect microproduct developers to write a complete
specification prior to coding. Rather, a structure and a set of rules and examples
should emerge as iteration proceeds. End-to-end testing of high-value flows is
critical in the early days of development.

However, in order to grow the product and have confidence in the results, we must also be
able to reason about and independently test small, separate components of the system.
Furthermore, those components must demonstrate and provide a single source of
truth for each requirement, ideally focused around a single business domain. We
encourage developers to constantly think about breaking up their work and
architecture in this way, using AI-assisted refactoring to promote decoupling,
effective testing and easy-to-measure progress. 

As an example, suppose that we have a betting product where a user picks a number
of different bets and checks out using their crypto wallet. Of course, we need
at least one test of the overall flow with the actual UI - from selecting bets
to checking out - but such tests are typically flaky and difficult to maintain.
They also grow in complexity as the product grows. Consider needing to change
the calculation of booking fees applied to each bet. It would be inappropriate
to run a full-flow test for each set of different fees and bets used in the
examples. To manage this, we introduce a component like 'BetTotalCalculation'.
This might be a class in the code, a vertical slice, or even an entire
microservice. In any case, it owns the logic needed to do bet calculations and
specifications/tests of this component are focused on that bit of the domain.

Additional refactoring might introduce components such as:
- Authentication/Login
- Bet cart
- Checkout
- Payment
- Frontend UI components (may have some duplication of business logic)

A focused specification means that when a new requirement is introduced - or an
existing one changes - there is a single place we need to change and re-test.
For the purposes of QA, we always break higher-level requirements into detailed
specifications that fit cleanly into pieces of the system. Once that piece is
implemented and tested, we know we have made progress the scope of changes is
apparent during code reviews.

### Automation
TODO

### Thoughtful Quality Gates & Feedback Mechanisms
TODO


## Agent-Assisted Testing Guidance

- Prioritize tests for the highest-value workflow and failure modes first.
- Use known sample datasets to validate deterministic expectations.
- Require human review for ambiguous or high-risk agent-generated changes.

## Repository Entropy Controls

- Enforce consistent architecture and naming conventions.
- Gate merges with required checks and explicit reviewer accountability.
- Track defect recurrence and unstable areas to prevent drift.

## Risk-Tiered Checklists and Release Gates

Apply checks by risk tier:

- Low risk: functional path test and basic regression check.
- Medium risk: error-path, integration, and accessibility spot checks.
- High risk: full critical-path validation, rollback readiness, and monitoring checks.

## Release Readiness Checklist

- Critical user path passes in representative conditions.
- Known high-impact defects are resolved or explicitly mitigated.
- Observability is in place for new high-risk code paths.
- Rollback and incident response owner are identified.

## Contributor Expansion Areas

- QA automation patterns for agent-first repositories.
- Risk scoring models for release decisions.
- Post-release quality review templates.

[Propose an improvement](https://github.com/TrilemmaFoundation/microproduct-incubator/pulls)
