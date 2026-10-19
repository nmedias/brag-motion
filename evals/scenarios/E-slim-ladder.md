# Project: Kanji Ladder (lesson app, web app)

Dark UI, background #12101a, accent violet #a78bfa, gold #fbbf24 for XP, font "Noto Sans JP" + "Inter". The app runs locally; you can screenshot it and record interactions.

Screens and elements (real UI, all exist):
1. Path: top bar with XP counter "120 XP" and streak flame "5"; a vertical path of lesson nodes; node "Lesson 1 · Numbers" active, "Lesson 2 · Days" locked (padlock). Bottom nav: Path, Leaderboard, Settings.
2. Lesson: one multiple-choice card at a time: a big kanji ("三"), four answer buttons ("one", "two", "three", "four"), a progress bar on top. Correct answers turn the button green.
3. Result: card "Lesson complete", "+30 XP" in gold, button "Continue".
4. Settings: list of toggles, one "Daily reminder" (off).
5. Leaderboard: weekly ranking, the user in place 4 with "150 XP".

Happy path: Path → tap Lesson 1 → answer "三" with "three" → answer "七" with "seven" → Result "+30 XP" → Continue → back on Path: XP counter counts 120 → 150, Lesson 2 unlocks (padlock opens) → Settings → toggle "Daily reminder" on → back to Path (nothing changes there) → Leaderboard.
Tagline in README: "One rung a day."
