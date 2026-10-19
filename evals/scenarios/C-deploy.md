# Project: Shipyard (self-hosted deploy dashboard, web app)

Dark UI, background #09090b, text #fafafa, accent electric blue #3b82f6, success #22c55e, fonts "Geist" + "Geist Mono". Runs locally; can be screenshotted and driven with a browser automation tool.

Screens and elements:
1. Projects grid: cards per repo (name, branch "main", last deploy "2h ago", status dot). One card "storefront" is highlighted.
2. Project page: header with repo name + "Deploy" primary button; commit list (hash, message, author avatar); environment tabs Preview / Production.
3. Deploy run: a log panel streaming build lines (install, build, test, upload) with a step timeline on the left (4 steps get checkmarks one by one), elapsed timer "00:41".
4. Live state: banner "Live on storefront.example.dev", a URL pill with copy button, small chart "p95 112 ms".

Happy path: grid → open "storefront" → press Deploy → logs stream, steps check off → Live banner + URL.
Tagline: "Push. Watch. Live."
