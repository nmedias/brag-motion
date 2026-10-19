# brag-motion

A motion extension for the **brag** launch-video skill for Claude Code.

`brag` turns a project into a short launch video. `brag-motion` changes how that video moves. Each scene change carries one element of the outgoing scene, which transforms while the next scene assembles around it. Moves accelerate hard and brake softly, and the length is computed from the product flow instead of squeezed into a fixed window.

> **Unofficial.** This is an independent extension and is not affiliated with the authors of `brag`. It does not include or redistribute any part of `brag`.

## Requirements

- [Claude Code](https://code.claude.com)
- [`brag`](https://github.com/latent-spaces/brag) (includes `brag-slim`, which `/brag` switches to automatically on Opus 5.5), installed separately from its own source

## Install

### As a plugin (recommended)

```sh
claude plugin marketplace add nmedias/brag-motion
claude plugin install brag-motion@brag-motion
```

Or in a session: `/plugin marketplace add nmedias/brag-motion`, then `/plugin install brag-motion@brag-motion`. You choose the scope (user, project or local) when installing.

To pin a release: `claude plugin marketplace add nmedias/brag-motion#v0.1.0`.

### Manual copy

```sh
git clone https://github.com/nmedias/brag-motion
cp -r brag-motion/skills/brag-motion ~/.claude/skills/              # all projects
# or: cp -r brag-motion/skills/brag-motion <project>/.claude/skills/ # one project
```

### Try without installing

```sh
claude --plugin-dir ./brag-motion
```

## Usage

```
/brag-motion [brag arguments]
```

`/brag-motion` invokes `brag` with your arguments unchanged and applies the extension at the storyboard, composition and validation stages. When installed as a plugin, the fully qualified name is `/brag-motion:brag-motion`. The short form works unless another command already uses the name.

Calling `/brag` alone may also pick up the extension through its description, but that is not guaranteed. Call `/brag-motion` for a reliable run.

If you give no duration, the length follows the flow. brag-motion announces it in one line, typically 30–40 s for a 4–6 screen flow. If you give a duration, `brag`'s limits apply and whole scenes are dropped instead of speeding anything up.

## What it changes

| Area | brag alone | with brag-motion |
|---|---|---|
| Scene changes | whole-screen push, slide, crossfade, wipe | one carried element transforms, and the next scene assembles around it |
| Choosing that element | — | criteria (attention, counterpart, followable), taken from the project's own UI |
| Timing | per element | travel 0.8–1.0 s strong in-out, exits accelerate, entrances decelerate |
| Length | 15–25 s window | computed bottom-up from the flow, with at least 2 s of look per screen |
| QA | composition check | snapshots at 0/25/50/75/100 % of every change |

## Updates

Releases are versioned in `.claude-plugin/plugin.json`. Plugin installs update with `claude plugin update brag-motion@brag-motion`, or automatically if you enable auto-update for this marketplace in `/plugin`. Manual installs: `git pull` and copy again.

## Development

- Skill: `skills/brag-motion/SKILL.md`
- Validate: `claude plugin validate --strict .`
- Evals: [`evals/`](evals/README.md). Every change to the skill is re-tested against the scenarios there before release.

## License

[MIT](LICENSE)
