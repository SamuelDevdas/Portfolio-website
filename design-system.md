# TrueVine Insights — Complete Brand Design System

## Design Philosophy

### Core Principles

1. **Premium Positioning** — Every element signals expertise and high-value consulting. We avoid generic templates and commodity aesthetics.

2. **Restrained Elegance** — Sophistication through subtraction. White space commands attention; clutter diminishes perceived value.

3. **Brand Coherence** — The teal palette isn't decoration—it's identity. Every accent reinforces the TrueVine leaf motif.

4. **Intentional Hierarchy** — Guide the eye deliberately. Primary CTAs demand action; secondary elements support without competing.

### Color Psychology Rationale

| Color                    | Psychological Effect           | Application                                               |
| ------------------------ | ------------------------------ | --------------------------------------------------------- |
| **Teal (#018488)**       | Trust, innovation, stability   | Primary accent—establishes credibility in tech consulting |
| **Deep Teal (#016668)**  | Depth, commitment, premium     | Hover states—rewards interaction with richness            |
| **Light Teal (#01969a)** | Approachability, freshness     | Gradients—adds dimension without visual weight            |
| **Pale Teal (#d3e7e5)**  | Calm, openness, breathing room | Light mode backgrounds—provides rest for the eye          |
| **Pure Black (#0b0b0b)** | Authority, sophistication      | Dark mode base—positions as premium, not trendy           |
| **Pure White (#fff)**    | Clarity, precision             | Text on dark—maximum readability, no compromise           |

---

## Brand Color Tokens

| Token            | Hex       | RGB                  | Usage                              |
| ---------------- | --------- | -------------------- | ---------------------------------- |
| `--teal-primary` | `#018488` | `rgb(1, 132, 136)`   | Primary accent, CTA buttons, links |
| `--teal-hover`   | `#016668` | `rgb(1, 102, 104)`   | Button hover, active states        |
| `--teal-light`   | `#01969a` | `rgb(1, 150, 154)`   | Gradient highlights                |
| `--teal-pale`    | `#d3e7e5` | `rgb(211, 231, 229)` | Light backgrounds                  |
| `--black`        | `#0b0b0b` | `rgb(11, 11, 11)`    | Dark mode background               |
| `--white`        | `#fff`    | `rgb(255, 255, 255)` | Light mode, text                   |

---

## Element-by-Element Color Mapping

### 1. Navigation

| Element                  | Current       | Target                | Rationale                      |
| ------------------------ | ------------- | --------------------- | ------------------------------ |
| Nav background           | Transparent   | Transparent           | Allows hero video to breathe   |
| Logo                     | 64px image    | Keep                  | Brand anchor, sized for impact |
| Nav links                | `#fff`        | Keep                  | Maximum contrast on dark/video |
| Link underline           | `var(--gold)` | `var(--teal-primary)` | ✅ Uses variable, auto-updates  |
| Theme toggle knob (dark) | `var(--gold)` | `var(--teal-primary)` | ✅ Uses variable, auto-updates  |
| Burger lines             | `var(--text)` | Keep                  | Adapts to theme                |

### 2. Hero Section

| Element       | Current               | Target | Rationale                        |
| ------------- | --------------------- | ------ | -------------------------------- |
| Video overlay | Dark gradient         | Keep   | Creates text contrast            |
| Name (h1)     | `#fff`                | Keep   | Maximum impact                   |
| Tagline       | `#fff`                | Keep   | Clear supporting text            |
| CTA buttons   | Teal gradient         | Keep   | Premium gradient already applied |
| Button text   | `#fff`                | Keep   | Contrast on teal                 |
| Button shadow | `rgba(1,132,136,0.3)` | Keep   | Teal-tinted glow                 |

### 3. Cards & Glassmorphism

| Element         | Current                | Target                | Rationale               |
| --------------- | ---------------------- | --------------------- | ----------------------- |
| Card background | `var(--glass)`         | Keep                  | Glassmorphism effect    |
| Card text       | `var(--glass-txt)`     | Keep                  | Theme-aware             |
| Section links   | `var(--gold)`          | `var(--teal-primary)` | ✅ Uses variable         |
| Link underline  | `rgba(212,175,55,0.3)` | `rgba(1,132,136,0.3)` | ⚠️ LINE 75: Needs update |

### 4. Skills Section

| Element               | Current                 | Target                 | Rationale                |
| --------------------- | ----------------------- | ---------------------- | ------------------------ |
| Skill icon background | `rgba(212,175,55,0.08)` | `rgba(1,132,136,0.08)` | ⚠️ LINE 478: Needs update |
| Skill icon border     | `rgba(212,175,55,0.22)` | `rgba(1,132,136,0.22)` | ⚠️ LINE 479: Needs update |
| Category headers      | `var(--text)`           | Keep                   | Clean hierarchy          |

### 5. Timeline (Experience/Education)

| Element        | Current                 | Target                | Rationale        |
| -------------- | ----------------------- | --------------------- | ---------------- |
| Timeline dot   | `var(--gold)`           | `var(--teal-primary)` | ✅ Uses variable  |
| Timeline line  | `rgba(255,255,255,0.1)` | Keep                  | Subtle connector |
| Date highlight | `var(--gold)`           | `var(--teal-primary)` | ✅ Uses variable  |

### 6. Form Elements

| Element            | Current                 | Target                 | Rationale                |
| ------------------ | ----------------------- | ---------------------- | ------------------------ |
| Input focus border | `rgba(212,175,55,0.55)` | `rgba(1,132,136,0.55)` | ⚠️ LINE 546: Needs update |
| Submit button      | Teal gradient           | Keep                   | Already updated          |

### 7. Footer

| Element           | Current                | Target                                   | Rationale                |
| ----------------- | ---------------------- | ---------------------------------------- | ------------------------ |
| Accent gradient   | `var(--gold), #c4a030` | `var(--teal-primary), var(--teal-hover)` | ⚠️ LINE 610: Needs update |
| Footer background | `#0e0e0e`              | Keep                                     | Near-black premium       |

### 8. Typography Hierarchy

| Level | Font             | Size                         | Weight | Color                 | Usage          |
| ----- | ---------------- | ---------------------------- | ------ | --------------------- | -------------- |
| h1    | Playfair Display | `clamp(2.5rem, 6vw, 4.5rem)` | 600    | `#fff`                | Name only      |
| h2    | Inter            | `clamp(1.8rem, 3vw, 2.5rem)` | 700    | `var(--text)`         | Section titles |
| h3    | Inter            | `1.15rem`                    | 600    | `var(--text)`         | Card headers   |
| Body  | Inter            | `1rem`                       | 300    | `var(--glass-txt)`    | Content        |
| Links | Inter            | inherit                      | 500    | `var(--teal-primary)` | Interactive    |

---

## Implementation Checklist

### Updates Required

- [ ] **Line 75**: Update link underline from `rgba(212, 175, 55, 0.3)` → `rgba(1, 132, 136, 0.3)`
- [ ] **Line 478**: Update skill icon bg from `rgba(212, 175, 55, .08)` → `rgba(1, 132, 136, 0.08)`
- [ ] **Line 479**: Update skill icon border from `rgba(212, 175, 55, .22)` → `rgba(1, 132, 136, 0.22)`
- [ ] **Line 546**: Update input focus from `rgba(212, 175, 55, 0.55)` → `rgba(1, 132, 136, 0.55)`
- [ ] **Line 610**: Update footer gradient from `var(--gold), #c4a030` → `var(--teal-primary), var(--teal-hover)`

### Already Using Variables (Auto-Updated)

- ✅ `var(--gold)` now points to `var(--teal-primary)`
- ✅ Button gradients use `var(--teal-primary/light/hover)`
- ✅ Theme toggle uses `var(--gold)`
- ✅ Timeline dots use `var(--gold)`
- ✅ Nav underlines use `var(--gold)`

---

## Verification Plan

After implementation:

1. **Visual Check**: Screenshot hero, skills, contact, footer
2. **No Gold Remnants**: `grep -n "212, 175, 55" index.html` should return 0 results
3. **Variables Working**: `grep -n "teal-primary\|teal-hover\|teal-light" index.html` confirms usage

---

## CSS Variables (Copy-Ready)

```css
:root {
    /* Brand Teal Palette */
    --teal-primary: #018488;
    --teal-hover: #016668;
    --teal-light: #01969a;
    --teal-pale: #d3e7e5;
    
    /* Neutrals */
    --black: #0b0b0b;
    --white: #fff;
    --off: #f7f7f7;
    
    /* Semantic Tokens */
    --gold: var(--teal-primary);
    --text: var(--black);
    --bg: var(--off);
    --glass: rgba(255, 255, 255, .12);
    --glass-txt: #444;
    --dark-glass: rgba(255, 255, 255, .05);
}
```

---

*Document Version: 1.0 | Last updated: 2025-12-20*
