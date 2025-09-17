# Agent Guide (Codex/Claude)

Purpose: Persistent rules for any AI assistant working in this repo. Follow these to keep the site maintainable and the YAML→HTML pipeline reliable.

Scope: Entire repository.

Core Principles
- Single source of truth is YAML in `data/*.yaml`.
- YAML MUST remain text-only. Do not add HTML tags, CSS classes, or inline styles to YAML content.
- All presentation (HTML structure, CSS, JS) happens in `index.html` and styles within it, or via `data/update_website.py` when transforming text → markup.
- If a change requires structure or styling, update templates/CSS or extend the updater script, not the YAML.

Content Workflow
1) Edit text in `data/samuel-cv-content.yaml` (or another YAML input).
2) Run the updater to inject content:
   - From repo root: `uv run data/update_website.py data/samuel-cv-content.yaml`
   - Or from `data/`: `uv run update_website.py samuel-cv-content.yaml`
3) Verify in a real browser (avoid VS Code’s embedded preview):
   - `python3 -m http.server 8000` then open `http://localhost:8000/index.html`

YAML Rules (strict)
- No HTML tags (`<strong>`, `<em>`, `<br>`, `<span>`, etc.) — write plain sentences only.
- No CSS/JS hooks in YAML (`class="…"`, `id="…"`).
- Keep punctuation and capitalization human-friendly; script will handle any formatting.

Updater Script Rules (`data/update_website.py`)
- The script is responsible for adding any necessary markup for emphasis and layout.
- When new visual treatments are needed, add options/fields to the YAML schema and map them in the script. Example (proposal):
  ```yaml
  profile:
    lead: "Masters Graduate in Applied Information and Data Science with expertise in AI‑driven solutions."
    permit:
      type: "Swiss B residence permit"
      note: "family reunification; unrestricted work authorization, no sponsorship"
    highlights: ["Generative AI", "LLM Ops", "Azure AI", "RAG", "NLP"]
  ```
  The script may then render badges/pills and emphasis in HTML/CSS without HTML appearing in YAML.

Profile Section Guidance
- Goal: fast scanning in 3–5 seconds.
- Keep a one-sentence lead, an unambiguous permit note, and optional highlights rendered as pills.
- Emphasis/badges are added by HTML/CSS, not by YAML markup.

Accessibility & QA
- External links use `target="_blank"` with `rel="noopener"`.
- Maintain heading order and semantic elements.
- When adding interactive elements, ensure keyboard access and visible focus states.

Do / Don’t
- Do centralize style changes in CSS; keep content changes in YAML.
- Do extend `update_website.py` to support new display needs.
- Don’t inject spans or classes into YAML.
- Don’t hardcode one-off HTML in content fields.

Change Protocol for Agents
1) For layout/styling changes: propose CSS/HTML updates and, if needed, a YAML schema extension + script mapping.
2) Only after user approval, implement minimal, targeted changes.
3) Leave YAML text intact unless the user asks for content edits.

Notes
- `CLAUDE.md` explains the broader content workflow; this file enforces agent rules with an emphasis on YAML-as-text-only for Codex/Claude.

Additional Context from CLAUDE.md (curated)
- Section keys used by the updater: `hero`, `profile`, `skills`, `experience`, `projects`, `education`, `volunteering`, `contact`, `footer`.
- Typical field mapping:
  - hero → `name`, `tagline`
  - profile → single summary string (plain text per this guide)
  - skills → categories with `title`, `technologies`
  - experience → list of items: `title`, `period`, `description`
  - projects/education/volunteering → list of cards with `title` + `description`/`details`
  - contact → `location`, `email`, optional `phone`, `linkedin_url`, `github_url`, `cv_filename`

Workflow & Commands
- Update site content from YAML:
  - From repo root: `uv run data/update_website.py data/samuel-cv-content.yaml`
  - From `data/`: `uv run update_website.py samuel-cv-content.yaml`
- Test with dummy data: `cd data && uv run update_website.py test-content.yaml`
- Review diffs: `git diff index.html`

Local Dev & Preview
- Serve via `python3 -m http.server 8000` and open `http://localhost:8000/index.html`.
- Prefer a real browser over VS Code’s embedded preview (external links may not behave normally in the preview webview).

Performance & Responsiveness
- Keep CSS solutions lightweight; test desktop, ≤768px, and ≤480px.
- Use CSS variables already defined for theming; don’t introduce duplicate colors.

Precedence & Scope
- AGENTS.md governs agent behavior repo-wide and overrides CLAUDE.md where rules conflict (e.g., HTML allowed in YAML in CLAUDE.md vs. YAML text-only here).
