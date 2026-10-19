# Baseline (RED) — brag without extension, 3 scenarios, opus

Scores (rubric.md): A 7/16 · B 10/16 · C 9/16

Already good (do NOT teach): explicit reading holds (R5), per-element eases/durations, pixel-identical overlays on real captures (R8), real-UI capture via browser automation.

Failures (teach these):
1. Scene changes are whole-frame devices, 11 of 13 changes. Verbatim: "vertical push", "slides in from the right … nav easing", "0.7 s crossfade inside the panel", "soft recede … blurs 0→8px", "success wipe … circle expands", "zoom-through".
2. Incoming scene appears as a whole plate. No change builds the new scene around anything (R2 = 0 everywhere).
3. Carried element, where present (C: card → page; B: counter → big number), is chosen ad hoc. There is no rule for choosing it.
4. Travel/morph durations are 0.4–0.6 s, power2/power3. There is no pronounced accelerate-then-brake.
5. 4–5 screens are packed into 20–23 s. All agents obey the 25 s cap and none proposes a longer form.

Form decision (writing-skills "match the form"): these are output-shape failures. Use a REQUIRED slot per scene change (transition contract) plus a positive recipe. No prohibition list.
User constraint: the skill must not prescribe which elements are heroes or map element types to patterns. It gives selection criteria and mechanics only.

# Round 2 (RED) — v0.1.0 skill, scenarios D, D2, E, opus

Input: seven gaps from a real build (`brag-slim` on Opus 5.5). Two runs per scenario.

| Gap | Criterion | D-1 | D-2 | D2-1 | D2-2 | E-1 | E-2 |
|---|---|---|---|---|---|---|---|
| Text → text swap overlaps illegibly | R9 | 0 | 0 | 1 | 1 | | |
| Opaque crop covers the shell | R10 | 2 | 2 | 2 | 2 | | |
| Carried element doubled in A's part | R11 | 2 | 2 | 2 | 2 | | |
| 1× source blurs under a push | R12 | 2 | 2 | 2 | 2 | | |
| A's content overhangs B | R13 | 2 | 2 | 2 | 1 | | |
| `brag-slim` default caps the length | R14 | | | | | 2 | 2 |
| Return-with-news vs pass-through | R15 | | | | | 2 | 2 |

Failures (teach these):
1. Every run builds the content swap centre-on-centre with a 30–70 % crossfade, because the skill prescribes it. D-1 verbatim: "If the 50 % frame reads as mush, record it as a finding and keep the window from the skill."
2. Ambiguities every build run guessed differently: shell fill vs A's look at frame 0; when B's entrances start (50 / 75 / 100 % of travel); camera push vs "exits from travel start".

Not reproduced on paper: R10–R15. Gaps 2–5 were kept as short conditionals in `motion-reference.md` on the evidence of the real build; 6 and 7 only got `brag-slim` named in the precedence rule.
