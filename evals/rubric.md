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
