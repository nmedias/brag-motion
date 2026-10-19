---
name: brag-motion
description: Use when planning, storyboarding or composing a launch, brag or demo video of an app or website — alongside /brag or /brag-slim — or when a product video's scene changes read as a slideshow (fades, slides, wipes, crossfades between whole screens) or viewers cannot follow because it moves too fast.
---

# brag-motion

Extension to `brag` and `brag-slim`: how the video moves. They keep angle, copy, tone, audio and delivery.

`/brag-motion [args]` invokes `brag` with the args unchanged (its workflow, or `brag-slim`'s if `brag` hands off). Loaded alongside either, apply at the same points:
- **Plan:** pacing budget; per change the carried element and its start → end state.
- **Build:** a transition contract per change, built with `motion-reference.md`.
- **Check:** change QA.

**No duration given by the user:** scene changes follow the contracts (the tones' transition vocabulary only moves captions and overlays), and length, scene count, hook and outro follow the pacing budget. It overrides `brag`'s 15–25 s window, "Short" law and Step 2 gate, `brag-slim`'s 15–25 s law and "about 20 s" default, and the tones' scene counts. A given duration keeps their limits.

## Core principle

A scene change is one element that stays on screen and transforms. The outgoing scene leaves around it, and the incoming scene assembles around it. The eye never has to search.

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

Any element visible at the end of A (UI, caption, hook line) that best meets these together; their order breaks ties:
1. **Attention:** what the viewer was just looking at or acting on.
2. **Counterpart:** it exists in B in another form (same object, data, value or role, or the control that causes B).
3. **Followable:** big enough at both ends, or the camera pushes with it.

No counterpart: it stays put while B assembles around it, then takes a place in B's layout, becomes B's caption, or exits last.

## Pacing budget

```
scene  = travel + assembly (1.2 s) + action + look
  action: real speed; longer than 4 s → time-lapsed to 2–4 s
  look:   complete screen still, ≥ 2 s and ≥ the sum of the reading floors of every new line on it;
          caption entrances and holds fall inside it
  a return to a screen already shown is a scene only if something new happens there,
  otherwise a pass-through: travel + assembly + its trigger action, no look
hook   = its lines' reading floors + their entrances
outro  = travel + assembly + look ≥ 3 s on the final frame
length = hook + Σ scenes + outro
```

The terms are a budget, not an order: action and look follow the flow, and a trigger action (the tap that causes the next change) comes last, after the look. No duration given: length = the sum, every flow scene stays; state it to the user in one line. Duration given: drop whole scenes, least important first, keeping the others' timings.

## Change QA

Snapshot each change at 0, 25, 50, 75 and 100 % of travel and 0.5 s after landing. Pass when:
- the carried element is visible in every frame, exactly once;
- no two full screens overlap, except an overlay over its real backdrop;
- no two texts overlap with both above 20 % opacity;
- nothing extends past the shell or B's layout;
- nothing is visible before its entrance or after its exit.
