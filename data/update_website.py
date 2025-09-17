#!/usr/bin/env python3
"""
Website Content Updater

This script updates the website HTML file with content from YAML files
Usage: 
    python update_website.py                    # Uses website-content.yaml
    python update_website.py test-content.yaml # Uses specified file
"""

import yaml
import re
import sys
from pathlib import Path

def load_yaml_content(yaml_filename="website-content.yaml"):
    """Load content from YAML file"""
    yaml_file = Path(yaml_filename)
    if not yaml_file.exists():
        raise FileNotFoundError(f"{yaml_filename} not found")
    
    with open(yaml_file, 'r', encoding='utf-8') as f:
        return yaml.safe_load(f)


def update_hero_section(html_content, content):
    """Update hero section content"""
    # Update name in h1 spans
    name_parts = content['hero']['name'].split()
    first_name = name_parts[0] if name_parts else ""
    last_name = " ".join(name_parts[1:]) if len(name_parts) > 1 else ""
    
    html_content = re.sub(
        r'<h1><span>.*?</span><span>.*?</span></h1>',
        f'<h1><span>{first_name}</span><span>{last_name}</span></h1>',
        html_content
    )
    
    # Update tagline
    html_content = re.sub(
        r'<p>.*?</p>',
        f'<p>{content["hero"]["tagline"]}</p>',
        html_content,
        count=1
    )
    
    return html_content

def update_profile_section_structured(html_content, content):
    """Update profile/about section with structured YAML support.
    Prefers structured keys (lead/permit/supporting/highlights) and falls back to legacy 'summary'.
    All YAML fields are plain text; HTML/CSS presentation is added here.
    """

    profile = content.get('profile', {})

    # Prefer structured schema
    if any(k in profile for k in ('lead', 'permit', 'supporting', 'highlights')):
        lead = (profile.get('lead') or '').strip()
        permit = profile.get('permit') or {}
        permit_type = (permit.get('type') or '').strip()
        permit_note = (permit.get('note') or '').strip()
        supporting = (profile.get('supporting') or '').strip()
        highlights = profile.get('highlights') or []

        parts = []
        # Lead sentence
        if lead:
            parts.append(f'<p class="profile-lead">{lead}</p>')

        # Permit badge on its own line
        if permit_type or permit_note:
            permit_html = ''
            if permit_type:
                permit_html += f'<strong>{permit_type}</strong>'
            if permit_note:
                permit_html += f' <span class="permit-note">({permit_note})</span>'
            parts.append(f'<p class="profile-permit">{permit_html}</p>')

        if supporting:
            # Put "Specializing in" on a new line if present
            if 'Specializing in' in supporting:
                supporting = supporting.replace('Specializing in', '<br>Specializing in')
            parts.append(f'<p class="profile-supporting">{supporting}</p>')

        if highlights:
            pills = ' '.join(f'<span class="pill">{h}</span>' for h in highlights)
            parts.append(f'<div class="pills">{pills}</div>')

        profile_html = "\n                ".join(parts)

        # Replace the inner HTML of the card within the about section
        pattern = r'(<section id=\"about\">.*?<div class=\"card[^>]*\">)(.*?)(</div>\s*</section>)'
        replacement = r'\1\n                ' + profile_html + r'\n            \3'
        return re.sub(pattern, replacement, html_content, flags=re.DOTALL)

    # Legacy summary fallback
    legacy = (profile.get('summary') or '').strip()
    if not legacy:
        return html_content
    pattern = r'(<section id=\"about\">.*?<p>)(.*?)(</p>.*?</section>)'
    replacement = rf'\g<1>{legacy}\g<3>'
    return re.sub(pattern, replacement, html_content, flags=re.DOTALL)

def update_profile_section(html_content, content):
    """Update profile/about section"""
    # Convert plain text to HTML with proper formatting
    profile_text = content['profile']['summary']
    
    # Add HTML formatting for emphasis
    profile_text = profile_text.replace('AI & Data Scientist', '<strong>AI & Data Scientist</strong>')
    
    # Handle line breaks if needed
    if 'high‑impact products' in profile_text:
        profile_text = profile_text.replace('into high‑impact products', 'into<br>high‑impact products')
    
    # Update the profile section
    pattern = r'(<section id="about">.*?<p>)(.*?)(</p>.*?</section>)'
    replacement = rf'\g<1>{profile_text}\g<3>'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_skills_section(html_content, content):
    """Update skills section"""
    skills_html = ""
    
    for skill_key, skill_data in content['skills'].items():
        skills_html += f'''                <div class="skill">
                    <h3>{skill_data["title"]}</h3><span>{skill_data["technologies"]}</span>
                </div>
'''
    
    # Replace the entire skills grid content
    pattern = r'(<div class="skills-grid">)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{skills_html.rstrip()}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_experience_section(html_content, content):
    """Update experience section"""
    experience_html = ""
    
    for exp in content['experience']:
        # Convert bullet points to HTML
        description = exp['description'].replace('•', '•').replace('. •', '.<br>•')
        
        experience_html += f'''                <div class="item">
                    <h3>{exp["title"]}</h3><time>{exp["period"]}</time>
                    <p>{description}</p>
                </div>
'''
    
    # Replace the timeline content
    pattern = r'(<div class="timeline">)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{experience_html.rstrip()}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_projects_section(html_content, content):
    """Update projects section"""
    projects_html = ""
    
    for project in content['projects']:
        projects_html += f'''                <div class="card">
                    <h3>{project["title"]}</h3>
                    <p>{project["description"]}</p>
                </div>
'''
    
    # Replace projects grid content
    pattern = r'(<section id="projects">.*?<div class="grid">)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{projects_html.rstrip()}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_education_section(html_content, content):
    """Update education section"""
    education_html = ""
    
    for edu in content['education']:
        education_html += f'''                <div class="card">
                    <h3>{edu["title"]}</h3>
                    <p>{edu["details"]}</p>
                </div>
'''
    
    # Replace education grid content
    pattern = r'(<section id="edu">.*?<div class="grid">)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{education_html.rstrip()}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_volunteering_section(html_content, content):
    """Update volunteering section"""
    volunteering_html = ""
    
    for vol in content['volunteering']:
        volunteering_html += f'''                <div class="card">
                    <h3>{vol["title"]}</h3>
                    <p>{vol["description"]}</p>
                </div>
'''
    
    # Replace volunteering grid content
    pattern = r'(<section id="vol">.*?<div class="grid">)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{volunteering_html.rstrip()}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    return html_content

def update_contact_section(html_content, content):
    """Update contact section"""
    contact = content['contact']
    
    # Build phone section only if phone exists
    phone_section = ""
    if contact.get("phone") and contact["phone"].strip():
        phone_section = f'<br>☎︎ <a href="tel:{contact["phone"].replace(" ", "")}">{contact["phone"]}</a>'
    
    contact_html = f'''                <p>📍 {contact["location"]}<br>✉︎ <a
                        href="mailto:{contact["email"]}">{contact["email"]}</a>{phone_section}<br><a
                        href="{contact["linkedin_url"]}" target="_blank">LinkedIn</a> | <a
                        href="{contact["github_url"]}" target="_blank">GitHub</a></p>'''
    
    # Replace contact content
    pattern = r'(<section id="contact">.*?<div class="card show"[^>]*>)(.*?)(</div>\s*</section>)'
    replacement = f'\\1\n{contact_html}\n            \\3'
    html_content = re.sub(pattern, replacement, html_content, flags=re.DOTALL)
    
    # Update CV download link
    html_content = re.sub(
        r'href="CV_Samuel_Devdas_G-\d+-\d+\.pdf"',
        f'href="{contact["cv_filename"]}"',
        html_content
    )
    
    return html_content

def update_footer(html_content, content):
    """Update footer content"""
    html_content = re.sub(
        r'<footer>.*?</footer>',
        f'<footer>{content["footer"]["copyright"]}</footer>',
        html_content
    )
    return html_content

def main():
    """Main function to update website content"""
    try:
        # Get YAML filename from command line argument or use default
        yaml_filename = sys.argv[1] if len(sys.argv) > 1 else "website-content.yaml"
        
        # Load YAML content
        print(f"📖 Loading content from {yaml_filename}...")
        content = load_yaml_content(yaml_filename)
        
        # Read HTML file - handle both running from project root and data folder
        html_file = Path("index.html")
        if not html_file.exists():
            html_file = Path("../index.html")
        if not html_file.exists():
            raise FileNotFoundError("index.html not found")
        
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Update each section
        print("🔄 Updating hero section...")
        html_content = update_hero_section(html_content, content)
        
        print("🔄 Updating profile section...")
        html_content = update_profile_section_structured(html_content, content)
        
        print("🔄 Updating skills section...")
        html_content = update_skills_section(html_content, content)
        
        print("🔄 Updating experience section...")
        html_content = update_experience_section(html_content, content)
        
        print("🔄 Updating projects section...")
        html_content = update_projects_section(html_content, content)
        
        print("🔄 Updating education section...")
        html_content = update_education_section(html_content, content)
        
        print("🔄 Updating volunteering section...")
        html_content = update_volunteering_section(html_content, content)
        
        print("🔄 Updating contact section...")
        html_content = update_contact_section(html_content, content)
        
        print("🔄 Updating footer...")
        html_content = update_footer(html_content, content)
        
        # Write updated HTML
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"✅ Website updated successfully!")
        print(f"📝 Run 'git diff' to see changes applied to HTML")
        print(f"📝 Run 'git add . && git commit -m \"Update portfolio content\"' to save changes")
        print(f"📝 Run 'git checkout -- index.html' to discard changes")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
