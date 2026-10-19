# Evals

The skill was written test-first (RED → GREEN → REFACTOR). Agents plan a launch video for three fictional, project-neutral apps, once without the skill and once with it. Each storyboard plus motion spec is scored with [`rubric.md`](rubric.md).

## Files

- `scenarios/` — project briefs (habit tracker, finance app, deploy dashboard). Each one stands in for brag's Step 1.
- `rubric.md` — 8 criteria, max 16 points.
- `baseline-findings.md` — what agents do without the skill. This is the RED evidence the skill addresses.

## Running a round

For each scenario, start a fresh agent (judgement task, so use a strong model) with the prompt below. Replace these placeholders:

| Placeholder | Replace with |
|---|---|
| `<path>` | absolute path of this repo |
| `<brag>` | absolute path of the installed `brag` skill folder (the one containing its `SKILL.md`) |
| `<scenario>` | file name in `scenarios/` without `.md`, e.g. `A-habit-tracker` |
| `<out>` | output folder for this run, e.g. `evals/runs/<round>/<scenario>` |

For the baseline, remove the `brag-motion/SKILL.md` line and the words "/brag-motion" and "with the brag-motion extension".

```
You were invoked as /brag-motion: you are running the /brag workflow (launch video) for a project,
in its full Hyperframes mode, with the brag-motion extension, and you are at the planning stage.

Read ONLY these files:
- <path>/skills/brag-motion/SKILL.md
- <brag>/SKILL.md, <brag>/references/step-2-plan.md, <brag>/references/tones.md
- The project brief: <path>/evals/scenarios/<scenario>.md

The brief stands in for Step 1. Tone: infer it. No duration was given.

Produce in <out>/: brag-plan.md (per step-2-plan.md) and motion-spec.md (for every scene: what is on
screen and where it comes from, what moves, start times, durations, easing, reading holds, and
exactly how each scene change happens).

Do not build or render anything. Reply with the file paths, the total length and how you arrived at
it, the one line you would say to the user about the length, a 3-line summary, and the points in the
skills where you had to guess AND the guess changed your plan (or "none").
```

Write the outputs to `evals/runs/` (git-ignored) and score each run with the rubric.

## Results (v0.1.0)

| Round | A habit | B finance | C deploy |
|---|---|---|---|
| Baseline (brag only) | 7 | 10 | 9 |
| First draft | 14 | 15 | 14 |
| After refactor | 16 | 16 | 16 |

Lengths without a given duration:

| Round | A | B | C |
|---|---|---|---|
| Baseline | 21.5 s | 23.0 s | 20.5 s |
| After refactor | 36.5–38.0 s | 38.5–39.1 s | 30.9–32.3 s |

Model used: Claude Opus. One run per scenario per round, so treat these as indicative, not statistical.
