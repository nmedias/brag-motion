# Project: Ledgerline (personal finance, web app)

Light UI, background #f7f5f0, ink #1c1917, accent orange #ea580c, fonts "Fraunces" (headings) + "Inter". Runs locally; can be screenshotted and driven with a browser automation tool.

Screens and elements:
1. Import screen: drop zone "Drop your bank CSV", after drop a file chip "march-2026.csv · 214 rows" and a progress bar.
2. Inbox: table of uncategorized transactions (date, merchant, amount), right sidebar with category chips (Groceries, Rent, Transport, Fun, Savings). User drags a chip onto a row; row gets the chip and slides out; counter "212 left".
3. Rules modal: "Always categorize 'REWE' as Groceries" with a toggle and "Save rule" button; after saving, 38 rows auto-categorize at once.
4. Month overview: stacked bar of spending per category, a big number "€1,204 left this month", category list with mini progress bars.

Happy path: drop CSV → inbox → drag "Groceries" onto a REWE row → create rule → many rows vanish → month overview.
Tagline: "Your bank export, finally readable."
