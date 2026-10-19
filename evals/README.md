# Evals

The skill was written test-first (RED → GREEN → REFACTOR). Agents plan or build a launch video for fictional, project-neutral apps, against the previous and the changed skill (the first round: without and with it). Each output is scored with [`rubric.md`](rubric.md).

## Files

- `scenarios/` — project briefs. Each one stands in for brag's Step 1.
  - A–C (habit tracker, finance app, deploy dashboard): planning with `brag`, rubric R1–R8.
  - D, D2 (recipe app, build stage; D2 has no DOM and must build from captures): build spec for four fixed changes, rubric R9–R13.
  - E (lesson app): planning with `brag-slim`, rubric R1–R8 plus R14–R15.
- `rubric.md` — the criteria per scenario group.
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
- <path>/skills/brag-motion/SKILL.md, and any file in <path>/skills/brag-motion/ it points to
- <brag>/SKILL.md, <brag>/references/step-2-plan.md, <brag>/references/tones.md
- The project brief: <path>/evals/scenarios/<scenario>.md

Do not read any other file in the repo (no evals, rubric, README, other scenarios, earlier runs).

The brief stands in for Step 1. Tone: infer it. No duration was given.

Produce in <out>/: brag-plan.md (per step-2-plan.md) and motion-spec.md (for every scene: what is on
screen and where it comes from, what moves, start times, durations, easing, reading holds, and
exactly how each scene change happens).

Do not build or render anything. Reply with the file paths, the total length and how you arrived at
it, the one line you would say to the user about the length, a 3-line summary, and the points in the
skills where you had to guess AND the guess changed your plan (or "none").
```

Write the outputs to `evals/runs/` (git-ignored) and score each run with the rubric.

### Scenarios D, D2 and E (`brag-slim`)

Replace `<brag-slim>` with the installed `brag-slim` skill folder. For a baseline, drop the brag-motion line as above.

E (planning): the prompt above, with these changes. The first sentence becomes "You were invoked as /brag-motion. On this model /brag hands off to /brag-slim, so you are running the /brag-slim workflow (launch video) for a project with the brag-motion extension, and you are at the planning stage." The brag files become `<brag-slim>/SKILL.md`, and brag-plan.md follows "brag-slim's step 2".

D and D2 (build):

```
You were invoked as /brag-motion. On this model /brag hands off to /brag-slim, so you are running the
/brag-slim workflow (launch video) with the brag-motion extension, and you are at the build stage:
the plan is approved.

Read ONLY these files:
- <path>/skills/brag-motion/SKILL.md, and any file in <path>/skills/brag-motion/ it points to
- <brag-slim>/SKILL.md
- The project brief: <path>/evals/scenarios/<scenario>.md

Do not read any other file in the repo (no evals, rubric, README, other scenarios, earlier runs).

Produce <out>/build-spec.md. For every change:
1. The layer stack, bottom to top. For each layer: its source (which asset or capture; any new capture
   with its exact settings), its masks/clips, and its motion (property, from → to, ease, start, duration).
2. What the viewer sees at 0, 25, 50, 75 and 100 % of travel and 0.5 s after landing. Describe every
   visible thing in each frame.
3. The QA checks you will run on this change.

Do not build or render anything. Reply with the file path, a 3-line summary, and the points in the
skills where you had to guess AND the guess changed your build (or "none").
```

## Results

### Round 1 (v0.1.0 first draft)

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

Model used: Claude Opus. One run per scenario per round.

### Round 2 (gaps from a real build, before the v0.1.0 release)

Planning and build, scored with R1–R15. Baseline-findings has the RED table per gap.

| Run | v0.1.0 draft | Changed skill |
|---|---|---|
| A habit (R1–R8) | 16 | 16 |
| B finance (R1–R8) | 16 | 14 (R5 reading floors, R8 no seam stated); after two refactors R5 met (checked on R5 only) |
| C deploy (R1–R8) | 16 | 16 |
| E slim ladder (R1–R8, R14–R15) | – (R14/R15: 2/2 in two runs) | 20 / 20 |
| D2 canvas build (R9–R13), two runs | 9, ~9 | 10, 10 |
| D live-DOM build (R9–R13), two runs | 8, 8 | not re-run (R9 is covered by D2) |

Lengths without a given duration: A 33.7 s · B 36.1–41.0 s · C 31.5 s · E 46.8 s.

Model used: Claude Opus. One or two runs per scenario, so treat these as indicative, not statistical.
