# Portfolio Website - Claude Code Configuration

## Project Overview
This is a data-driven single-page portfolio website for Samuel Devdas, showcasing AI & Data Science expertise. The site uses a YAML-to-HTML workflow for easy content management.

## Architecture & Design Decisions

### Why YAML-Based Content Management?
- **Single Source of Truth**: CV data drives website content automatically
- **Easy Updates**: Change YAML files instead of editing HTML directly
- **Version Control**: Track content changes through Git
- **Flexibility**: Multiple content profiles (test data, production data)
- **Maintainability**: Separate content from presentation logic

### Folder Structure
```
Portfolio-website/
├── website-samuel-portfolio.html    # Main website (git tracked)
├── backup/                          # Reference template only
│   └── website-samuel-portfolio-original.html
├── data/                            # Content management
│   ├── website-content.yaml         # Current website content
│   ├── samuel-cv-content.yaml       # CV-mapped content
│   ├── test-content.yaml           # Test/dummy data
│   ├── update_website.py           # Content injection script
│   └── README.md                   # Data folder documentation
└── CV_Samuel_Devdas_G-8-10.md     # Source CV document
```

## Content Management Workflow

### 1. Content Sources
- **Primary**: `CV_Samuel_Devdas_G-8-10.md` - Master CV document
- **Website**: `data/samuel-cv-content.yaml` - CV content mapped to website structure
- **Testing**: `data/test-content.yaml` - Minimal dummy data for testing
- **Active**: `data/website-content.yaml` - Currently displayed content

### 2. Content Structure Mapping
```yaml
# CV Section → Website Section Mapping
hero:           # Name, title, tagline
profile:        # Professional summary from CV
skills:         # Technical skills categorized
experience:     # Work history with achievements
projects:       # Key projects and accomplishments  
education:      # Degrees and certifications
volunteering:   # Activities and interests
contact:        # Location, email, phone, social links
footer:         # Copyright and tech stack
```

### 3. Update Workflow
```bash
# Method 1: Use production CV content
cd data
uv run update_website.py samuel-cv-content.yaml

# Method 2: Test with dummy data
cd data  
uv run update_website.py test-content.yaml

# Method 3: Use custom content
cd data
uv run update_website.py website-content.yaml

# Method 4: From project root
uv run data/update_website.py data/samuel-cv-content.yaml
```

### 4. Content Injection Process
The `update_website.py` script:
1. **Reads** YAML content file
2. **Applies** regex-based content injection to HTML
3. **Updates** all sections: hero, profile, skills, experience, projects, education, volunteering, contact, footer
4. **Preserves** HTML structure, CSS classes, and JavaScript functionality
5. **Modifies** HTML file only - no git operations or backups

## Text Formatting & Language Alignment

### HTML Formatting in YAML
- `<strong>text</strong>` - Bold emphasis for key terms
- `<em>text</em>` - Italic emphasis for specializations
- `<br>` - Line breaks for better readability
- `•` - Bullet points for achievements (auto-converted to `<br>•`)

**IMPORTANT**: Use HTML tags directly in YAML only. The update script does NOT add additional formatting - any HTML tags in YAML are passed through directly to HTML. Avoid double-nesting tags like `<em><em>text</em></em>` which can break HTML parsing and layout responsiveness.

### Language Style Characteristics
- **Professional tone**: Technical but accessible language
- **Quantified achievements**: Metrics included (%, $, time saved)
- **Action-oriented**: Active voice and strong verbs used
- **Consistent formatting**: En-dashes (–) used for date ranges
- **Swiss context**: Work authorization and local experience emphasized

### Content Optimization Approach
- **SEO-friendly**: Relevant keywords included naturally
- **Scannable**: Bullet points and short paragraphs structure
- **Achievement-focused**: Results and impact highlighted
- **Technology alignment**: Skills matched to job market demands

## Development Commands

### Content Updates
```bash
# Update website with CV content
cd data && uv run update_website.py samuel-cv-content.yaml

# View changes applied
git diff website-samuel-portfolio.html

# Test changes with dummy data  
cd data && uv run update_website.py test-content.yaml
git diff website-samuel-portfolio.html

# Commit changes or discard
git add . && git commit -m "Update portfolio content"
# OR
git checkout -- website-samuel-portfolio.html
```

### Local Development
```bash
# Serve locally
python -m http.server 8000
# Open: http://localhost:8000/website-samuel-portfolio.html

# Or use Live Server in VS Code
```

## File Dependencies
- `website-samuel-portfolio.html` - Main portfolio page
- `backup/website-samuel-portfolio-original.html` - Clean template
- `data/CV_Samuel_Devdas_G-8-10.md` - Source CV document
- `data/*.yaml` - Content files
- `data/update_website.py` - Content injection script

## Key Features
- **Responsive design** with mobile optimization
- **Dark/light theme toggle** with system preference detection
- **Smooth animations** and intersection observers
- **3D card hover effects** for interactive experience
- **Custom cursor** with blend modes
- **Video background** in hero section
- **Professional sections**: About, Skills, Experience, Projects, Education, Contact

## Technical Stack
- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Content**: YAML-based content management
- **Styling**: CSS custom properties for theming
- **Accessibility**: Semantic HTML, skip links, ARIA labels
- **Modern CSS**: Grid, Flexbox, backdrop-filter
- **Browser Support**: Modern browsers with graceful fallbacks

## Context Information
- CV document serves as single source of truth for content
- YAML files contain structured content data with direct HTML formatting
- HTML file is modified directly via script injection (no additional formatting applied)
- Git provides version control and diff visibility for changes
- Content updates flow through YAML → Script → HTML → Git diff pipeline
- Viewport meta tag configured for proper zoom responsiveness up to 500%
- HTML validation critical - malformed tags in YAML break layout responsiveness