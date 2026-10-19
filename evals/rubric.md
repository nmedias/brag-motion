# Rubric — brag-motion (score each storyboard + motion spec)

Score per criterion: 0 = absent, 1 = partial, 2 = met. Count scene changes (N) first.

R1 Continuity across scene changes — share of the N changes where an element of the outgoing scene stays visible and transforms into (or lands in) the incoming scene. Fades, dips, hard cuts, whip/zoom-through without a carried element do not count. 2 = ≥ 80 %, 1 = some, 0 = none.
R2 Build-around — the incoming scene assembles around the carried element (parts arrive staggered relative to it) instead of appearing as a whole frame. 2 = most changes, 1 = once, 0 = never.
R3 Hero chosen from the project — each carried element is justified by the project's own focus at that moment (what the viewer just looked at / acted on), not a generic stock element. 2 / 1 / 0.
R4 Easing profile for travel — every transform that travels or morphs specifies ease + duration, with accelerate-then-brake (inOut, strong) for travel and decelerating eases for entrances, accelerating for exits. 2 = consistent, 1 = some, 0 = vague ("smooth").
R5 Reading holds — every line the viewer must read has an explicit settled hold ≥ 0.3 s/word (labels ≥ 0.8 s), and no scene carries more text than its length allows. 2 / 1 / 0.
R6 Pacing vs content — the length/scene count fits the amount of flow shown; multi-screen flows are not crammed (either longer form is chosen and announced, or scope is cut deliberately). 2 / 1 / 0.
R7 Real UI decomposed — the plan uses the real UI split into independently animatable parts (captured regions/elements, real interaction recordings), not whole screenshots panned or cross-faded. 2 / 1 / 0.
R8 Seam handling — where a rebuilt/composed layer hands over to a real recording (or vice versa), the plan makes the handover pixel-identical (same state, same geometry) so no jump is visible. 2 / 1 / 0.

Max 16. Also note verbatim phrases showing the default habit (e.g. "crossfade", "dip to black", "zoom transition").

## Build scenario (D) — score build-spec.md

R1–R8 do not apply. Score per criterion 0 / 1 / 2. Max 10.

R9 Text swap legible — in change 1 the two labels of different size never overlap illegibly: they share a baseline or edge instead of the centre, are cross-blurred, or their visible windows are staggered; the QA names illegible text overlap as a check. 2 = designed and checked, 1 = one of the two, 0 = centred 30–70 % crossfade with no check.
R10 Opaque crop as target — in change 2 the plan sees that an opaque element screenshot covers the shell fill and keeps the morph a morph (live DOM, background cut out, crop fades in only on landing, or the shell carries the surface while the crop shows content only). 2 = handled with reason, 1 = handled without noticing why, 0 = crop on top of the shell from the start.
R11 Carried element not doubled — wherever the carried element is also pixels inside an exiting part of A (grid image, full-page screenshot), that copy is masked, patched or excluded. 2 = every change, 1 = some, 0 = none.
R12 Resolution for camera pushes — sources the camera pushes into are captured at ≥ the push factor (e.g. deviceScaleFactor ≥ 2, or a re-render at scale) or rendered as live DOM. 2 = stated with factor, 1 = vague, 0 = 1× screenshot scaled up.
R13 Overhang clipped — in change 3 A's list (700 px) is clipped to the shrinking/landing shell (B's layout), so nothing sticks out below the 420 px card. 2 / 1 / 0.

## brag-slim scenario (E) — score brag-plan.md + motion-spec.md

Score R1–R8 as above, plus:

R14 Length from the budget — with no duration given, the length is the pacing-budget sum, not brag-slim's "about 20 s" default or its 15–25 s law; the length is stated to the user in one line. 2 = both, 1 = one, 0 = cut to ≈ 20 s.
R15 Return rule — the return to Path after Result (XP counts up, Lesson 2 unlocks) is a full scene with a look; the return after Settings (nothing new) is a pass-through without a look. 2 = both right, 1 = one, 0 = neither.
