# Portfolio Website

## 🌐 Live Demo
**[truevineinsights.ch](https://truevineinsights.ch)**

---

## Overview
This system allows you to easily update your portfolio website content by editing a simple YAML file.

## Files Overview

- `website-samuel-portfolio.html` - Your main website file
- `website-content.yaml` - Content configuration (edit this to update website)
- `update_website.py` - Script that updates the HTML with YAML content
- `pyproject.toml` - Python project configuration (auto-generated)

## How to Update Your Website

### 1. Edit Content
Open `website-content.yaml` and modify any text you want to update. The YAML is organized into sections:

```yaml
hero:
  name: Your Name
  tagline: Your professional tagline

profile:
  summary: Your profile description...

skills:
  category_name:
    title: Display Name
    technologies: List of technologies

experience:
  - title: Job Title  Company
    period: Date Range
    description: Job description with bullet points

# ... and so on
```

### 2. Apply Updates
Run the update script:
```bash
uv run update_website.py
```

### 3. Deploy
The script will:
-  Create a backup of your current website
- = Update all sections with your YAML content
-  Preserve all styling and functionality

## Features

- **Simple Editing**: Plain text in YAML - no HTML tags to maintain
- **Automatic Backup**: Creates timestamped backups before each update
- **Precise Injection**: Content goes exactly where it should
- **Style Preservation**: All CSS and JavaScript functionality maintained
- **Error Handling**: Clear error messages if something goes wrong

## Example Workflow

1. Update your CV information
2. Edit corresponding sections in `website-content.yaml`
3. Run `uv run update_website.py`
4. Your website is automatically updated!

## Tips

- Keep text formatting consistent with existing style
- Use quotes around text containing special characters (colons, etc.)
- Test changes locally before deploying
- The script automatically handles HTML formatting and line breaks

## Troubleshooting

- **YAML Error**: Check for proper indentation and quote special characters
- **Missing Dependencies**: Run `uv add pyyaml` to install requirements
- **File Not Found**: Ensure you're in the correct directory with all files

---

*Your website content is now manageable through a single YAML file!*