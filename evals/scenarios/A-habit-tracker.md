# Project: Tidepool (habit tracker, web app)

Dark UI, background #0b1014, accent teal #2dd4bf, font "Manrope". The app runs locally; you can screenshot it and record interactions.

Screens and elements (real UI, all exist):
1. Today screen: top bar ("Tidepool", streak badge "12 days"); centered large circular progress ring showing "3/5 done"; below it a vertical list of 5 habit rows (checkbox, name, small 7-day dot strip): "Drink water", "Read 20 pages", "Stretch", "No phone after 22:00", "Journal". Floating "+" button bottom-right.
2. Habit detail (opens when a row is tapped): header with habit name, a 12-week calendar heatmap, stats cards "Longest streak 31", "Completion 84%".
3. Add-habit sheet (opens from "+"): text field "Habit name", frequency segmented control (Daily / Weekdays / Custom), color dots, primary button "Create habit".
4. Weekly review screen: bar chart Mon–Sun, a line "You were 92% consistent this week", share button.

Happy path: open Today → tick "Stretch" (ring goes 3/5 → 4/5) → tap "Read 20 pages" → detail heatmap → back → "+" → type "Meditate" → Create → new row appears → weekly review.
Tagline in README: "Small habits, tracked honestly."
