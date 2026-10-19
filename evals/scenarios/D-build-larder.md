# Project: Larder (recipe finder, web app) — build stage

Light UI, background #f7f4ee, cards white #ffffff with 16 px corner radius, accent #e2572b, font "Inter". The app runs locally. Stack for the video: HTML/CSS + GSAP, every frame a pure function of time, rendered frame by frame in headless Chromium (Playwright). Output 1920×1080, 30 fps.

Screens (real UI, all exist):
1. Pantry: header "Larder"; on the left a column of ingredient chips (640 × 820 px, from y = 120); under the chips, at y = 970, the accent pill button "Find recipes" (220 × 52 px, label 16 px).
2. Results: heading "12 recipes found" (40 px, top-left at x = 120, y = 96); a 3 × 2 grid of white recipe cards (300 × 360 px each, photo + title), one of them "Lemon orzo".
3. Recipe detail: white hero panel (1200 × 560 px) with photo and title "Lemon orzo" (48 px); right of it a white ingredients panel (460 × 700 px) with 9 ingredient lines (15 px), the first "200 g orzo".
4. Cooking mode: a white step card (900 × 420 px, centered) with the step text "Toast 200 g orzo in butter" (56 px); in the step card's top-right corner a small timer label "08:00" (18 px).
5. Timer: full-screen timer "08:00" (220 px, centered) on the background.

Assets captured so far, all with Playwright at its default settings, viewport 1920 × 1080:
- a full-page screenshot of every screen;
- element screenshots: Pantry chip column, "Find recipes" button; Results heading, the whole card grid (one image), each single card; Detail hero panel, ingredients panel; Cooking step card.
You may capture more, with any settings.

The plan is approved. These scene changes are fixed:

```
Change 1: Pantry → Results   trigger: click "Find recipes"
Carried: "Find recipes" button — why: attention (just clicked) + counterpart (it causes the results)
Start → End: pill 220×52, label 16 px, bottom of the chip column → heading block 520×64 top-left, "12 recipes found" 40 px
Transform: geometry + content swap
A leaves: chip column (left), header (up)   B assembles: cards from below, nearest first
Timing: travel expo.inOut 0.9 s · exits power3.in 0.35 s · entrances expo.out 0.7 s, stagger 0.06 s

Change 2: Results → Detail   trigger: click "Lemon orzo"
Carried: "Lemon orzo" card — why: attention + counterpart (same recipe)
Start → End: card 300×360 in the grid → hero panel 1200×560
Transform: geometry + colour or role (card becomes the hero panel)
A leaves: the other cards (outward), heading (up)   B assembles: ingredients panel from the right
Timing: as change 1

Change 3: Detail → Cooking mode   trigger: click "Start cooking"
Carried: ingredients panel — why: attention (the viewer was reading it) + counterpart (its first line becomes the step)
Start → End: panel 460×700 at the right → step card 900×420 centered; list → step text
Transform: geometry + content swap
A leaves: hero panel (left)   B assembles: nothing else
Timing: as change 1

Change 4: Cooking mode → Timer   trigger: click "08:00"
Carried: timer label — why: attention + counterpart (same timer)
Start → End: 18 px label in the step card corner → 220 px full-screen timer
Transform: geometry; it is small, so the camera pushes in with it (about 3×) before the step card leaves
A leaves: step card (down)   B assembles: nothing else
Timing: as change 1
```
