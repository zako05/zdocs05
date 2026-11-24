---
description: Overview of GitHub Merge Queue — what problem it solves, how it works, and CI/CD & QA/SDET gotchas.
---

# GitHub Merge Queue

## What problem it solves

Normally, PR A and PR B can both pass CI against `main`, get merged back-to-back, and **break `main`** because their changes conflict semantically (neither was tested *together*). Requiring branches to be up-to-date before merging fixes this, but creates a painful rebase/re-run-CI race on busy repositories.

## How it works

1. A PR gets **approved** and passes normal PR checks (`pull_request` trigger).
2. Instead of merging straight to `main`, you click **"Merge when ready"** to add it to the **merge queue**.
3. GitHub creates a temporary merge branch combining `main` + queued PR(s) and triggers CI via the **`merge_group`** event.
4. If checks pass, GitHub fast-forwards `main`. If checks fail, the offending PR is **ejected** from the queue without breaking `main`.

## Key features & CI/CD gotchas

- **Batching / speculative checks**: Can test multiple PRs together (e.g., PR 1, PR 1+2, PR 1+2+3 in parallel) to keep throughput high.
- **Workflow trigger gotcha**: Any required GitHub Actions check **must** listen to `merge_group` (not just `pull_request`), or the queue will hang waiting forever:

  ```yaml
  on:
    pull_request:
    merge_group:
  ```

- **Tiered test strategy**: Teams often run fast checks on `pull_request` and heavier E2E/Playwright suites on `merge_group` (or vice versa) to balance developer speed vs. `main` stability.
- **Flaky tests hurt much more**: A flaky test in a merge queue doesn't just annoy one author—it can **eject a PR (or trigger a bisect/re-run of a whole batch)**, stalling everyone behind it. Retries, sharding, and quarantine/flake management become critical.
- **PR reviews**: Approvals are checked *before* entering the queue; you don't need re-approval for the temporary merge-group commits.
