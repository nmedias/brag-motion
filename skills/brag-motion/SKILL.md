---
name: brag-motion
description: Use when planning, storyboarding or composing a launch, brag or demo video of an app or website — alongside /brag or /brag-slim — or when a product video's scene changes read as a slideshow (fades, slides, wipes, crossfades between whole screens) or viewers cannot follow because it moves too fast.
---

# brag-motion

Extension to `brag`: how the video moves. `brag` keeps owning angle, copy, tone, audio and delivery.

## Invocation

- `/brag-motion [args]`: invoke the `brag` skill with the args unchanged, run its workflow (or `brag-slim`'s, if `brag` hands off), and apply this skill at the points below.
- Loaded alongside a `brag` run: apply at the same points.

| Stage | Apply |
|---|---|
| Plan / storyboard | pacing budget · per change: carried element + start → end state (in the transition field) |
| Composition brief / build | the full transition contract per change · timing profile |
| Validate / check | change QA |

Precedence over `brag`, when no duration was given:
- **Scene changes:** follow the contracts. The tone presets' transition vocabulary only governs element-level motion (captions, overlays).
- **Length, scene count, hook and outro durations:** follow the pacing budget. `brag`'s "Short" law, its 15–25 s window and Step 2 gate, the hook/outro durations of its pattern, and the tones' scene counts give way.

When a duration was given, `brag`'s limits hold.

## Core principle

A scene change is one element that stays on screen and transforms. The outgoing scene leaves around it, and the incoming scene assembles around it. The viewer's eye never has to search.

## Transition contract (REQUIRED for every change, including hook → first scene and last scene → outro)

```
Change <n>: <A> → <B>   trigger: <action in A | A's flow completes>
Carried: <element visible at end of A> — why: <criterion + reason>
Start → End: <geometry / look in A> → <geometry / look / role in B>
Transform: geometry | content swap | colour or role | elevation
A leaves: <parts, direction>          B assembles: <parts, nearest to the carried element first>
Timing: travel <ease, s> · exits <ease, s> · entrances <ease, s, stagger>
```

## Choosing the carried element

Take any element visible at the end of A (UI, a caption or a hook line), the one that best meets these criteria together. Their order breaks ties:
1. **Attention:** what the viewer was just looking at or acting on.
2. **Counterpart:** it exists in B in another form: same object, data, value or role, or the control that causes B.
3. **Followable:** big enough at both ends. If it isn't, move the camera with it.

No counterpart in B: the element stays where it is, B assembles around it, then it takes a place in B's layout. If B has no place for it, it becomes B's caption or exits last, after B is complete.

## Mechanics (tool-neutral)

- **Geometry:** interpolate rect and corner radius of a plain shell filled with B's surface colour. If B's surface is the bare background, the fill fades out on landing. Use clip/inset or transforms (layout properties snap to whole pixels).
- **Content swap:** the shell scales; the start and end content keep their own type size and crossfade, between 30 % and 70 % of travel time.
- **Lift:** the carried element rises (scale ≈ 1.02, shadow). A's other parts are gone by 50 % of travel time.
- **Overlay:** if B is an overlay over A in the real app (sheet, modal, popover), A stays in place and dims as B's backdrop. Only the parts B covers leave.
- **Assemble:** B's parts arrive from their own edge, outward from the carried element, completing within 1.2 s of landing. Captions enter after that.
- **Seam:** swap parts ↔ real recording only on a frame where both are identical.

## Timing profile

| Motion | Ease | Duration |
|---|---|---|
| Carried travel / morph (camera moves with it) | strong in-out: expo.inOut, power4.inOut | 0.8–1.0 s |
| A's parts exit | accelerating: power3.in | 0.3–0.4 s, from travel start |
| B's parts enter | strong out: expo.out | 0.6–0.8 s, stagger 0.04–0.1 s |
| Readable line | — | `brag`'s reading floors |

## Pacing budget

Compute length bottom-up from the flow:

```
scene  = travel + assembly (1.2 s) + action + look
  action: real speed; an action longer than 4 s is time-lapsed to 2–4 s
  look:   the complete screen still ≥ 2 s; caption and text entrances and their holds fall inside it
  a return to a screen already shown is a scene only if something new happens there;
  otherwise it is a pass-through: travel + assembly + its trigger action, no look
hook   = its lines' reading floors + their entrances
outro  = travel + assembly + look ≥ 3 s on the final frame
length = hook + Σ scenes + outro
```

The terms are a budget, not an order. Action and look follow the flow: the trigger action of a change is the last thing in its scene.

- No duration given: length = the sum, every flow scene stays. State it to the user in one line.
- Duration given: drop whole scenes, least important first. Keep the timings of the remaining scenes.

## Change QA

Snapshot each change at 0, 25, 50, 75 and 100 % of travel and 0.5 s after landing. Pass when:
- the carried element is visible in every frame;
- no frame shows two full screens overlapped, except an overlay over its real backdrop;
- nothing is visible before its entrance or after its exit.
