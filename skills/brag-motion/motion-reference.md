# brag-motion — build reference

Mechanics, timing and capture rules for building the transition contracts. Tool-neutral.

## Mechanics

- **Shell:** the carried element is drawn as a plain shell. Its rect and corner radius interpolate from A's element to B's counterpart. Its fill tweens from A's element's surface to B's with the same ease; if B's surface is the bare background, the fill fades out over 0.3 s from landing. Use clip/inset or transforms (layout properties snap to whole pixels).
- **Content swap:** the shell scales; the start and end content keep their own type size. Both are anchored to the same edge or baseline of the shell: the one where B's content sits in B's layout. The start content fades out from 20 to 50 % of travel with blur 0 → 6 px; the end content fades in from 50 to 80 % with blur 6 → 0 px.
- **Lift:** a carried element with a surface rises during travel (scale ≈ 1.02, shadow) and settles on landing. Bare text does not lift.
- **A leaves:** A's other parts start exiting at travel start and are gone by 50 % of travel.
- **B assembles:** B's parts start entering at 70 % of travel, from their own edge, outward from the carried element, all complete within 1.2 s of landing. Captions enter after that.
- **No counterpart:** the carried element holds still while A leaves and B assembles from change start; then it travels to its place in B (or exits) with the timing profile.
- **Camera push:** a push is part of the travel, not a step before it. The camera scales with the carried element on the same ease and time; A's parts sit inside the camera group and exit as above.
- **Overlay:** if B is an overlay over A in the real app (sheet, modal, popover), A stays in place and dims as B's backdrop. Only the parts B covers leave.
- **Seam:** swap parts ↔ real recording or screenshot only on a frame where both are identical.

## Timing profile

| Motion | Ease | Duration |
|---|---|---|
| Carried travel / morph (camera moves with it) | strong in-out: expo.inOut, power4.inOut | 0.8 s in place, 1.0 s across the frame |
| A's parts exit | accelerating: power3.in | 0.3–0.4 s, from travel start |
| B's parts enter | strong out: expo.out | 0.6–0.8 s, stagger 0.04–0.1 s |
| Readable line | — | `brag`'s / `brag-slim`'s reading floors |

## Captures

Use the app's live markup for parts where the video can render it. Where a part comes from a capture (screenshot, region crop, recording):
- **Shown larger than captured** (morph target, camera push by factor k): capture at `deviceScaleFactor` ≥ k, up to 4. Above 4, draw it from B's larger capture, scaled down. The lift's 1.02 does not count.
- **On the shell or a changing surface:** cut it out of its background to alpha; the shell carries the surface. B's opaque crop appears only from the landing seam.
- **The carried element is also pixels in one of A's exiting parts** (a grid image, a full screenshot): fill that area with the surrounding surface before the part moves.
- **A's content stays inside a shrinking shell:** clip it to the shell.

## Recording state-changing flows

If the flow writes data (submit, purchase, message), record against an isolated copy of the app with its own data and ports, never the user's real data. Tell the user if the flow triggers paid calls (e.g. an LLM API).
