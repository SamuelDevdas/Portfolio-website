# TrueVine Insights — Claude Rules

> **Golden Rule:** Never rewrite this file from memory. When restructuring or bulk-editing, `git diff` section-by-section before committing to verify zero content loss.

## Identity

**TrueVine Insights** is a premium AI consulting firm. This is a business website, not a personal portfolio.

## Design Philosophy

**Minimalism is the brand.** Every element must earn its place.

### The 4 Principles

1. **Premium** — No generic templates, no commodity aesthetics
2. **Restrained** — White space > clutter; sophistication through subtraction
3. **Coherent** — Teal (#018488) is identity, not decoration
4. **Hierarchical** — Guide the eye deliberately

### Before Adding Anything

Ask these 3 questions:

1. Does it pass all 4 principles?
2. Can we achieve the same with less?
3. Does removal hurt more than addition helps?

If any answer is "no" → don't add it.

## Hard Rules

### Never Add

- ❌ Icons on service cards (typography hierarchy is enough)
- ❌ Custom cursor effects (distraction)
- ❌ Decorative elements (noise)
- ❌ Bouncing/aggressive animations (cheap)

### Always Check

- `design-system.md` → Single source of truth for design decisions
- `design-system.md` → "Priority Todo" section for current roadmap

## Animated Diagrams

- **Always use MP4, never GIF** — GIF causes graininess on dark backgrounds (256-color limit). MP4 is ~10x smaller and pixel-perfect.
- **Manim arrowheads**: Use `StealthTip` with `max_tip_length_to_length_ratio=0.3`. Default (0.12) makes tips invisible at 640x480.
- **Connector color**: Minimum `#888888` on `#0e0e0e` background. `#4d4d4d` is invisible.
- **Arrow labels**: Use `color="#cccccc"` (same as node text), not teal — teal is too dim at font_size 14.
- **Animation pacing**: Minimum 0.6s per step, 3s final hold. Faster feels cheap.

## CSS Gotchas

### Absolute Positioning

`position: absolute` finds its nearest `position: relative` ancestor. If your element doesn't appear where expected, check the parent hierarchy.

**Lesson learned**: Scroll indicator had to be direct child of `<header>`, not inside nested `.o` div.

### High Zoom (300%+)

Nav elements collide at extreme zoom. Prevent with:

- `flex-shrink: 0` on logo
- `margin-right` buffer on logo
- `flex-wrap: wrap` on nav-links

## Cross-Pollinated Rules

- Check framework built-ins and official docs before writing custom code or custom JS. Prefer the platform, browser APIs, and existing site patterns over new abstractions.
- Two strikes rule: if the same bug survives two fix attempts, stop and delegate to Codex CLI for a fresh pass instead of patching blindly.
- Each piece of information lives in ONE place. Keep design intent in `design-system.md`, content in YAML/data files, and implementation details in code.
- After any bulk update to a rules or design document, re-read every line against the current site state. Don't rely on keyword search.
- Clean up worktrees at session end and verify with `git worktree list`.
- All network calls must have an explicit timeout path. For browser `fetch`, use `AbortController`; don't let form submissions or asset probes hang forever.
- Full dev loop before claiming done: implement → verify in browser → build/regenerate outputs where relevant → check linked assets/paths → commit.
- When changing how generated assets are produced (animation filenames, output paths, media formats), update the consumers that reference them in HTML/JS/CSS in the same step. Producers and consumers must stay in sync.

## Rules File Maintenance

- Mirror CLAUDE.md and AGENTS.md edits in the same step. Never batch-sync later.
- Never edit CLAUDE.md or AGENTS.md without explicit user approval. Propose changes first, then edit after approval.

## Key Files

- `index.html` → Main landing page (company site)
- `portfolio.html` → Samuel Devdas portfolio (AI Engineer)
- `abhishek-portfolio.html` → Abhishek Devdas portfolio (Architect)
- `css/styles.css` → All styling
- `design-system.md` → Design rules, patterns & roadmap
