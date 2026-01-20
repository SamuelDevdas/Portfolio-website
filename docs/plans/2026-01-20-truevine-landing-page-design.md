# TrueVine Insights Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a company landing page for TrueVine Insights that establishes brand identity, showcases services, and links to Samuel's portfolio.

**Architecture:** Multi-page site structure with shared CSS/JS. The landing page (`index.html`) becomes the main entry point; the portfolio moves to `portfolio.html`. Both pages share the same design system (teal palette, glassmorphism, animations).

**Tech Stack:** Pure HTML, CSS, JavaScript (no frameworks) — consistent with existing portfolio

---

## Brand Analysis (from Full Resume + LinkedIn + Portfolio)

### TrueVine Insights Identity
- **Founder:** Samuel Devdas (Lead Consultant/Owner since April 2021)
- **LinkedIn Headline:** "AI Engineer | Production LLM Systems (Retrieval, Agents, Evaluation) | Secure, Reliable, Cost-Efficient | Python/FastAPI/Azure | Switzerland"
- **Core Expertise:** Production LLM systems, Retrieval (RAG), Agents, Evaluation, Python/FastAPI/Azure
- **Value Proposition:** Secure, reliable, cost-efficient AI systems for real-world deployment
- **Target Clients:** Swiss enterprises, multinationals, NGOs, small businesses
- **Proven Track Record:** HSLU, Pilatus Aircraft, Collins Aerospace, Mann Machines, Cyclone Manufacturing

### Key Differentiators (from LinkedIn)
- **Production focus:** "Deliver production AI and LLM systems from scoping to deployment, focused on reliability, security, and cost control"
- **Evaluation-driven:** "Build retrieval + agent workflows, plus evaluation and regression checks to maintain quality over time"
- **Full-stack delivery:** "Develop lightweight services and APIs (Python/FastAPI) and data pipelines (ETL, validation)"
- **Enablement focus:** "Lead stakeholder alignment, requirements, delivery planning, and enablement (training + documentation) for long-term maintainability"
- Swiss B permit holder (immediate start, unrestricted work authorization)
- Dual Master's degrees (Data Science + Engineering)
- Microsoft certified (Security, Compliance & Identity; Azure AI Engineer in progress)
- 34% improvement over baseline in personality-adaptive AI thesis project

### Academic Credibility
- **Co-Supervisor** for Master's thesis at HSLU (MSc IDS Program, Jul 2025 – Present)
- **AI Consultant** at HSLU (Mar 2025 – Present)
- Thesis work potentially being published in scientific journal

### Recommendations (LinkedIn)
1. **Prof. Guang Lu (HSLU):** "His thesis is excellently written and will potentially be published in a scientific journal... I highly recommend him as a valuable asset to any organization."
2. **Alexandre de Spindler (HSLU):** "34% improvement over baseline approaches... rare balance of technical competence and human-centred thinking"
3. **Barna Becsek (Pilatus Aircraft):** "Worked thoroughly... able to deliver things on time while working independently"

### Service Categories (refined from LinkedIn)
1. **Production LLM Systems** - Retrieval (RAG), agents, evaluation, secure deployment
2. **Data Pipelines & APIs** - Python/FastAPI services, ETL, validation, data quality
3. **Evaluation & Quality** - Regression checks, prompt optimization, reliability testing
4. **Training & Enablement** - Stakeholder training, documentation, handover for independent operation

### Core Skills (from LinkedIn)
- **AI/ML:** AI Agents, Large Language Models (LLM), Generative AI, RAG, Fine Tuning, Prompt Engineering, NLP, Transformers, Machine Learning
- **Development:** Python, FastAPI, Git, Docker, CI/CD, Azure Cloud, SQL, APIs
- **Data:** ETL, Data Pipelines, Data Quality, Statistical Analysis, Pandas, Tableau
- **Process:** Agile Development, Scrum, Stakeholder Management, Project Management

### Visual Identity (from existing CSS)
- **Primary Color:** Teal (`#018488`)
- **Typography:** Inter (body), Playfair Display (headings)
- **Effects:** Glassmorphism, blur overlays, subtle animations
- **Aesthetic:** Dark theme, professional, modern tech

---

## Site Structure

```
truevineinsights.ch/
├── index.html           # NEW: Company landing page (main entry)
├── portfolio.html       # RENAMED: Samuel's portfolio (from index.html)
├── css/
│   └── styles.css       # MODIFIED: Add landing page styles
├── js/
│   └── main.js          # MODIFIED: Support multi-page navigation
└── data/
    └── truevine-content.yaml  # NEW: Landing page content
```

---

## Landing Page Sections

### 1. Hero Section
- **Company name:** TrueVine Insights
- **Tagline:** "Production LLM Systems for Swiss Enterprises"
- **Sub-tagline:** "Secure, reliable, cost-efficient AI — from scoping to deployment"
- **CTAs:** "Get Started" → contact | "Meet the Founder" → portfolio
- **Background:** Same video/style as portfolio for consistency

### 2. About Section
- **Headline:** "AI That Works in Production"
- **Lead:** We deliver production AI and LLM systems focused on reliability, security, and cost control.
- **Supporting:** Founded in 2021, we've built AI solutions for HSLU, Pilatus Aircraft, and Collins Aerospace. Our systems include evaluation and regression checks to maintain quality over time — and we train your team for independent operation.
- **Trust Signals:**
  - 34% improvement over baseline in AI research
  - Swiss B permit (immediate availability)
  - Proven with Swiss aerospace & research institutions
  - Thesis work being prepared for scientific publication

### 3. Services Section
Based on LinkedIn-verified expertise:

| Service | Description |
|---------|-------------|
| **Production LLM Systems** | Retrieval (RAG) + agent workflows with evaluation and regression checks for quality over time |
| **APIs & Data Pipelines** | Lightweight Python/FastAPI services, ETL pipelines, data validation, and integration into client processes |
| **Evaluation & Optimization** | Prompt optimization, structured outputs, review loops to improve consistency and reliability |
| **Training & Enablement** | Stakeholder training, documentation, and handover for long-term independent operation |

### 4. Team/Founder Section
- **Card linking to portfolio**
- **Name:** Samuel Devdas
- **Title:** Founder & Lead Consultant
- **Current Roles:**
  - Lead Consultant, TrueVine Insights (Apr 2021 – Present)
  - AI Consultant, HSLU (Mar 2025 – Present)
  - Co-Supervisor, MSc Thesis Program, HSLU (Jul 2025 – Present)
- **Credentials:**
  - MSc Applied Information & Data Science (HSLU Lucerne)
  - MEng Advanced Materials Manufacturing & Design (University of Ottawa)
  - Microsoft Certified: Security, Compliance & Identity Fundamentals
  - Azure AI Engineer Associate (in progress)
- **Summary:** AI Engineer specializing in production LLM systems (retrieval, agents, evaluation). Built secure LLM applications for HSLU, Pilatus Aircraft, and Collins Aerospace. Focus on reliability, security, and cost control with evaluation-driven iteration.
- **Highlight:** "34% improvement over baseline... rare balance of technical competence and human-centred thinking" — Alexandre de Spindler, HSLU
- **CTA:** "View Full Profile" → portfolio.html
- **Links:** LinkedIn, GitHub

### 5. Social Proof Section (from LinkedIn Recommendations)
Testimonial quotes with rotating display or carousel:
- **Prof. Guang Lu (HSLU):** "His thesis is excellently written and will potentially be published... I highly recommend him as a valuable asset to any organization."
- **Alexandre de Spindler (HSLU):** "Samuel designed and implemented a full conversational agent pipeline, achieving a 34% improvement over baseline approaches."
- **Barna Becsek (Pilatus Aircraft):** "Worked thoroughly... able to deliver things on time while working independently."

### 6. Insights/Blog Section (LinkedIn Articles)
- **Headline:** "Insights & Articles"
- **Description:** Practical lessons from building production AI systems
- **Source:** LinkedIn articles feed (embedded or linked)
- **Display:** 3 most recent articles as cards with:
  - Article title
  - Brief excerpt/description
  - Publication date
  - "Read on LinkedIn" CTA
- **Link:** "View All Articles →" to LinkedIn profile articles section
- **URL pattern:** `https://www.linkedin.com/in/samueldevdas/recent-activity/articles/`
- **Future enhancement:** Could add RSS feed integration or manual YAML updates for featured articles

### 7. Contact Section
- Same contact form as portfolio
- Company contact information
- Location: Amriswil, Switzerland

### 8. Footer
- Navigation links to all sections
- Link to portfolio
- Copyright: © 2026 TrueVine Insights
- "Production AI for the real world"

---

## Navigation Changes

### Landing Page Nav
```
[Logo] -------- [About] [Services] [Testimonials] [Insights] [Team] [Contact] [Portfolio →]
```

### Portfolio Page Nav (updated)
```
[Logo → home] -------- [About] [Skills] [Experience] [Projects] [Education] [Contact]
```

---

## Implementation Tasks

### Task 1: Rename existing index.html to portfolio.html

**Files:**
- Rename: `index.html` → `portfolio.html`

**Step 1: Rename the file**
```bash
git mv index.html portfolio.html
```

**Step 2: Verify the rename**
```bash
ls -la *.html
```
Expected: `portfolio.html` exists, `index.html` does not

**Step 3: Commit**
```bash
git add -A
git commit -m "refactor: rename index.html to portfolio.html for multi-page structure"
```

---

### Task 2: Update portfolio.html navigation

**Files:**
- Modify: `portfolio.html`

**Step 1: Update the navigation to link back to home**

Change the logo link from `#` to `index.html`:
```html
<a href="index.html" class="nav-logo"><img src="logo/final gra leaf.png" alt="TrueVine Insights Logo" height="36"></a>
```

**Step 2: Verify navigation update**
Open file and confirm logo links to index.html

**Step 3: Commit**
```bash
git add portfolio.html
git commit -m "feat: update portfolio nav to link back to landing page"
```

---

### Task 3: Create landing page content YAML

**Files:**
- Create: `data/truevine-content.yaml`

**Step 1: Create the content file**

```yaml
# TrueVine Insights Landing Page Content
# Company landing page for truevineinsights.ch
# Updated with LinkedIn profile data (Jan 2026)

hero:
  company_name: TrueVine Insights
  tagline: Production LLM Systems for Swiss Enterprises
  sub_tagline: Secure, reliable, cost-efficient AI — from scoping to deployment
  cta_primary:
    text: Get Started
    link: "#contact"
  cta_secondary:
    text: Meet the Founder
    link: "portfolio.html"

about:
  headline: AI That Works in Production
  lead: We deliver production AI and LLM systems focused on reliability, security, and cost control.
  supporting: Founded in 2021, we've built AI solutions for HSLU, Pilatus Aircraft, and Collins Aerospace. Our systems include evaluation and regression checks to maintain quality over time — and we train your team for independent operation.
  trust_signals:
    - 34% improvement over baseline in AI research
    - Swiss B permit (immediate availability)
    - Proven with Swiss aerospace & research institutions
    - Thesis work being prepared for scientific publication

services:
  - title: Production LLM Systems
    icon: ai
    description: Retrieval (RAG) + agent workflows with evaluation and regression checks for quality over time.

  - title: APIs & Data Pipelines
    icon: data
    description: Lightweight Python/FastAPI services, ETL pipelines, data validation, and integration into client processes.

  - title: Evaluation & Optimization
    icon: quality
    description: Prompt optimization, structured outputs, review loops to improve consistency and reliability across runs.

  - title: Training & Enablement
    icon: training
    description: Stakeholder training, documentation, and handover for long-term independent operation. We build for handoff.

testimonials:
  - quote: "His thesis is excellently written and will potentially be published in a scientific journal... I highly recommend him as a valuable asset to any organization."
    author: Prof. Guang Lu
    role: Senior Data Scientist & AI Lecturer, HSLU
    relationship: Thesis Supervisor

  - quote: "Samuel designed and implemented a full conversational agent pipeline, achieving a 34% improvement over baseline approaches... rare balance of technical competence and human-centred thinking."
    author: Alexandre de Spindler
    role: Computer Scientist and Teacher, HSLU
    relationship: Thesis Co-Supervisor

  - quote: "Worked thoroughly and was able to integrate himself into the team quickly. His way of communicating was seamless and efficient. He was able to deliver things on time while working independently."
    author: Barna Becsek
    role: Team Lead Aircraft Data & Analytics
    relationship: Manager at Pilatus Aircraft

insights:
  headline: Insights & Articles
  description: Practical lessons from building production AI systems
  articles_url: https://www.linkedin.com/in/samueldevdas/recent-activity/articles/
  # Featured articles - update manually or fetch via integration
  featured:
    - title: "[Article Title 1]"
      excerpt: "[Brief description of the article content]"
      date: "[Publication date]"
      url: "[LinkedIn article URL]"
    - title: "[Article Title 2]"
      excerpt: "[Brief description]"
      date: "[Publication date]"
      url: "[LinkedIn article URL]"
    - title: "[Article Title 3]"
      excerpt: "[Brief description]"
      date: "[Publication date]"
      url: "[LinkedIn article URL]"

team:
  founder:
    name: Samuel Devdas
    title: Founder & Lead Consultant
    headline: "AI Engineer | Production LLM Systems (Retrieval, Agents, Evaluation) | Secure, Reliable, Cost-Efficient | Python/FastAPI/Azure | Switzerland"
    current_roles:
      - Lead Consultant, TrueVine Insights (Apr 2021 – Present)
      - AI Consultant, HSLU (Mar 2025 – Present)
      - Co-Supervisor, MSc Thesis, HSLU (Jul 2025 – Present)
    credentials:
      - MSc Applied Information & Data Science (HSLU Lucerne)
      - MEng Advanced Materials Manufacturing & Design (Ottawa)
      - Microsoft Certified: Security, Compliance & Identity
      - Azure AI Engineer Associate (in progress)
    summary: AI Engineer specializing in production LLM systems (retrieval, agents, evaluation). Built secure LLM applications for HSLU, Pilatus Aircraft, and Collins Aerospace. Focus on reliability, security, and cost control with evaluation-driven iteration.
    highlight: '"34% improvement over baseline... rare balance of technical competence and human-centred thinking" — Alexandre de Spindler, HSLU'
    portfolio_link: portfolio.html
    linkedin: https://www.linkedin.com/in/samueldevdas/
    github: https://github.com/SamuelDevdas

contact:
  headline: Let's Build Your AI Solution
  lead: Whether you need a production LLM system, data pipeline, or team training, we're here to help. Swiss B permit holder — immediate start available.
  location: Amriswil, Switzerland
  email: SamuelDevdas01@gmail.com
  phone: +41 77 448 8108
  linkedin: https://www.linkedin.com/in/samueldevdas

footer:
  copyright: © 2026 TrueVine Insights
  tagline: Production AI for the real world
  portfolio_text: Samuel Devdas Portfolio
  portfolio_link: portfolio.html
```

**Step 2: Verify YAML syntax**
```bash
python -c "import yaml; yaml.safe_load(open('data/truevine-content.yaml'))"
```
Expected: No errors

**Step 3: Commit**
```bash
git add data/truevine-content.yaml
git commit -m "feat: add TrueVine landing page content YAML"
```

---

### Task 4: Create landing page HTML

**Files:**
- Create: `index.html`

**Step 1: Create the landing page HTML structure**

The full HTML will mirror portfolio.html structure but with landing page sections:
- Same `<head>` with updated meta tags for company
- Same nav structure with updated links
- Hero section with company branding
- About section
- Services grid (4 cards)
- Team/Founder section with link to portfolio
- Contact section (same form)
- Footer with portfolio link

**Step 2: Create the file with complete HTML**

(Full HTML code provided in implementation - approximately 280 lines mirroring portfolio structure)

Key differences from portfolio.html:
- Meta title: "TrueVine Insights — Production AI Systems for Swiss Enterprises"
- Schema.org type: Organization (not Person)
- Hero: Company name, tagline, different CTAs
- Sections: About, Services, Team, Contact (not Skills, Experience, Projects, Education)
- Nav links: About, Services, Team, Contact, Portfolio

**Step 3: Verify HTML**
```bash
ls -la index.html
```
Expected: File exists

**Step 4: Commit**
```bash
git add index.html
git commit -m "feat: add TrueVine Insights landing page"
```

---

### Task 5: Add landing page styles to CSS

**Files:**
- Modify: `css/styles.css`

**Step 1: Add services grid styles**

```css
/* Services Grid - Landing Page */
.services-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
}

.service-card {
    padding: 2.2rem 1.8rem;
    border-radius: 18px;
    background: var(--glass);
    backdrop-filter: blur(24px);
    box-shadow: 0 20px 55px rgba(0, 0, 0, .08);
    opacity: 0;
    transform: translateY(40px);
    transition: all .7s;
    text-align: center;
}

.service-card.show {
    opacity: 1;
    transform: translateY(0);
}

.service-card h3 {
    margin-bottom: .8rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--gold);
}

.service-card p {
    font-size: .92rem;
    color: var(--glass-txt);
    line-height: 1.7;
}

/* Service Icon Placeholder */
.service-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.2rem;
    border-radius: 50%;
    background: rgba(1, 132, 136, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--gold);
}
```

**Step 2: Add team section styles**

```css
/* Team Section - Landing Page */
.team-card {
    max-width: 600px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    border-radius: 18px;
    background: var(--glass);
    backdrop-filter: blur(24px);
    box-shadow: 0 20px 55px rgba(0, 0, 0, .08);
    text-align: center;
}

.team-card h3 {
    font-size: 1.4rem;
    margin-bottom: .3rem;
}

.team-card .title {
    color: var(--gold);
    font-size: .95rem;
    margin-bottom: .8rem;
}

.team-card .credentials {
    font-size: .85rem;
    color: var(--glass-txt);
    margin-bottom: 1rem;
}

.team-card .summary {
    font-size: .95rem;
    color: var(--glass-txt);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.team-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}
```

**Step 3: Add landing hero variants if needed**

```css
/* Landing Page Hero Variant */
.landing-hero h1 {
    font-size: clamp(2.2rem, 5vw, 4rem);
}

.landing-hero .sub-tagline {
    font-size: clamp(0.9rem, 1.3vw, 1.1rem);
    color: var(--glass-txt);
    margin-top: 0.5rem;
    max-width: 600px;
    margin-inline: auto;
}
```

**Step 4: Verify CSS changes**
```bash
git diff css/styles.css
```

**Step 5: Commit**
```bash
git add css/styles.css
git commit -m "feat: add landing page styles (services grid, team section)"
```

---

### Task 6: Update main.js for multi-page support

**Files:**
- Modify: `js/main.js`

**Step 1: Ensure intersection observers work on both pages**

The existing JavaScript should work for both pages since it uses generic selectors (`.card`, `.skill`, `.item`). Verify and add `.service-card` to the observer if needed.

**Step 2: Add service-card to intersection observer**

Find the intersection observer and add `.service-card`:
```javascript
document.querySelectorAll('.card, .skill, .item, .service-card').forEach(el => {
    observer.observe(el);
});
```

**Step 3: Commit**
```bash
git add js/main.js
git commit -m "feat: extend animations to landing page service cards"
```

---

### Task 7: Test and verify both pages

**Step 1: Start local server**
```bash
python -m http.server 8000
```

**Step 2: Test landing page**
Open: http://localhost:8000/
- Verify all sections render
- Verify navigation works
- Verify "Meet the Founder" links to portfolio.html

**Step 3: Test portfolio page**
Open: http://localhost:8000/portfolio.html
- Verify logo links back to index.html
- Verify all existing functionality works

**Step 4: Test mobile responsiveness**
Use browser dev tools to test at 768px and 480px widths

---

### Task 8: Final commit and summary

**Step 1: Review all changes**
```bash
git status
git log --oneline -5
```

**Step 2: Create summary commit if any loose changes**
```bash
git add -A
git commit -m "chore: finalize TrueVine landing page implementation"
```

---

## Future Enhancements (Not in Scope)

These items are documented for future development:

1. **Case Studies Page** - Detailed project showcases
2. **Blog/Insights** - Thought leadership content
3. **Pricing Page** - Service packages and pricing
4. **Client Testimonials** - Social proof section
5. **Service Icons** - Custom SVG icons for services
6. **Analytics** - Google Analytics or privacy-friendly alternative
7. **Multi-language** - German version for Swiss market

---

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `index.html` | Rename → `portfolio.html` | Existing portfolio becomes sub-page |
| `index.html` | Create | New landing page |
| `portfolio.html` | Modify | Update nav to link home |
| `css/styles.css` | Modify | Add landing page styles |
| `js/main.js` | Modify | Extend observers to new elements |
| `data/truevine-content.yaml` | Create | Landing page content |

---

## Success Criteria

- [ ] Landing page loads at root URL
- [ ] Portfolio accessible at /portfolio.html
- [ ] Navigation works between both pages
- [ ] Consistent design system across pages
- [ ] Mobile responsive on both pages
- [ ] Contact form works on landing page
- [ ] All animations function correctly
