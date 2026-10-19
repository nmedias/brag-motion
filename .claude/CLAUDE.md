# CLAUDE.md

One skill, `brag-motion` (`skills/brag-motion/`), shipped as plugin and marketplace at once. Evals live in `evals/`.

## Relation to brag

Extends the third-party [`brag`](https://github.com/latent-spaces/brag) and ships none of its files. `brag` owns angle, copy, tone, audio and delivery; this skill owns scene changes, timing and pacing.

## Commands

```sh
claude plugin validate --strict .   # validate manifests
npm install                         # once, for changesets
npx changeset                       # describe a change (patch/minor/major)
claude --plugin-dir .               # try without installing
wc -w skills/brag-motion/SKILL.md   # keep under ~500 words; details go to a reference file
```

## Rules

- Skill changes are test-first (superpowers:writing-skills): eval the current skill, fix only what failed, re-run, record scores in `evals/README.md`.
- Every user-facing change adds a changeset (`npx changeset`) in the same commit.
- Release: `npm run version` (bumps `package.json`, syncs `plugin.json`, writes `CHANGELOG.md`), commit, `npm run tag`, push with `--follow-tags`. Never edit versions by hand, never set one in `marketplace.json`. Never rename the plugin.

## Commit style

`<type>(<scope>): <description>` — always English, no Co-Authored-By trailer.

| Type | Usage |
|---|---|
| feat | New rule, mechanic or scenario |
| fix | Correct a wrong value or reference |
| refine | Tighten or clarify existing wording |
| refactor | Restructure (move, rename, split files) |
| docs | READMEs, eval results |
| chore | Manifests, config, tooling |

Scopes: `(skill)`, `(evals)`, `(plugin)`; omit = general.
