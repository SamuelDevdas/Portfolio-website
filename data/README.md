# Portfolio Data Management

Edit YAML files in this folder to update your portfolio website content.

## How to Update

1. Edit any YAML file (`samuel-cv-content.yaml`, `test-content.yaml`, or `website-content.yaml`)
2. Run: `python update_website.py [filename]`
3. Use `git diff` to see exactly what changed in the HTML
4. Commit changes with `git add . && git commit -m "Update content"`

## Git Workflow

### Basic Update
```bash
# Update with CV content
python update_website.py samuel-cv-content.yaml

# See what changed
git diff website-samuel-portfolio.html

# Commit changes
git add . && git commit -m "Update portfolio with latest CV content"
```

### Testing Content
```bash
# Test with dummy data
python update_website.py test-content.yaml
git diff  # See test changes

# Discard if not happy
git checkout -- website-samuel-portfolio.html

# Switch back to CV content
python update_website.py samuel-cv-content.yaml
```

## YAML Files

- `samuel-cv-content.yaml` - Real CV content for production
- `test-content.yaml` - Dummy data for testing layouts
- `website-content.yaml` - Custom content variations

## YAML Structure

Each YAML file contains:
- `hero` - Name, tagline
- `profile` - Professional summary  
- `skills` - Technical skills by category
- `experience` - Work history with achievements
- `projects` - Project highlights
- `education` - Education & certifications
- `volunteering` - Activities & interests
- `contact` - Location, email, phone, social links
- `footer` - Copyright text

## Example Updates

**Change job title:** Update `hero.tagline`
**Add new skill:** Add to `skills.category_name.technologies`
**Update profile:** Edit `profile.summary`
**New project:** Add to `projects` array