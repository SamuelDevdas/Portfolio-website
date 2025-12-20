# Portfolio Website

## 🌐 Live Demo

**[truevineinsights.ch](https://truevineinsights.ch)**

---

## Tech Stack

- HTML, CSS, JavaScript (vanilla)
- Hosted on **Netlify** with auto-deploy from GitHub
- Contact form via **Netlify Forms**

## Features

- Responsive design (mobile-friendly)
- Dark/light theme toggle
- Animated scroll effects
- Contact form with email notifications
- Spam protection (honeypot)

## Local Development

```bash
# Serve locally
npx http-server

# Or use Python
python -m http.server 8080
```

## Updating Content

Edit `index.html` directly, or use the YAML-based update system:

```bash
# Edit content in data/samuel-cv-content.yaml
# Then run:
uv run data/update_website.py
```

## Deployment

Push to `main` branch → Netlify auto-deploys.

---

**Samuel Devdas** • AI Engineer & Data Scientist • Switzerland
