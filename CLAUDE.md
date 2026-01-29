# TrueVine Insights — Claude Rules

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

## CSS Gotchas

### Absolute Positioning

`position: absolute` finds its nearest `position: relative` ancestor. If your element doesn't appear where expected, check the parent hierarchy.

**Lesson learned**: Scroll indicator had to be direct child of `<header>`, not inside nested `.o` div.

### High Zoom (300%+)

Nav elements collide at extreme zoom. Prevent with:

- `flex-shrink: 0` on logo
- `margin-right` buffer on logo
- `flex-wrap: wrap` on nav-links

## Key Files

- `index.html` → Main landing page (company site)
- `portfolio.html` → Samuel Devdas portfolio (AI Engineer)
- `abhishek-portfolio.html` → Abhishek Devdas portfolio (Architect)
- `css/styles.css` → All styling
- `design-system.md` → Design rules, patterns & roadmap
