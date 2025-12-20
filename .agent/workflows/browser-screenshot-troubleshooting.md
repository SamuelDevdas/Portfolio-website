# Browser Screenshot Troubleshooting Guide

## Issue: Grey/Black Screenshots

### Problem Description
When capturing screenshots of websites with video backgrounds, heavy canvas elements, or complex CSS effects (like glassmorphism/backdrop-filter), screenshots may appear as grey or black screens instead of showing the actual content.

### Root Causes

1. **Browser Extensions (Most Common!)**
   - **Dark Reader** and similar dark mode extensions inject CSS that overrides page styles
   - Can cause backgrounds to appear grey/black and hide content
   - **Solution:** Disable Dark Reader and similar extensions before taking screenshots
   
2. **Video Background Not Loaded**
   - Video elements may not have fully loaded when the screenshot is taken
   - The video `autoplay` attribute requires the page to be in a "visible" state

2. **GPU Rendering Issues**
   - Headless browser mode may not properly render WebGL/canvas content
   - `backdrop-filter: blur()` effects may not render correctly in screenshots

3. **Browser Initialization Timing**
   - Taking screenshots too quickly after page load
   - Animations still in progress when screenshot is captured

4. **Z-Index Overlays**
   - Hidden or semi-transparent overlay elements covering visible content
   - Custom cursor elements (`#c`, `#f` in this site) with high z-index

### Solutions

#### 1. Wait for Page Load
```javascript
// Wait before capturing
await new Promise(r => setTimeout(r, 2000));
```

#### 2. Refresh Page Before Capture
If the initial load has rendering issues, refresh the page and wait again.

#### 3. Remove Problematic Elements (Temporary)
```javascript
document.querySelectorAll('video').forEach(v => v.remove());
document.querySelectorAll('canvas').forEach(c => c.remove());
```

#### 4. Force Contrast (Debug Mode)
```javascript
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';
```

#### 5. Multiple Page Opens
Sometimes opening a fresh page instance works when the previous one doesn't:
```
open_browser_url → screenshot fails → close → open_browser_url again → screenshot succeeds
```

### This Website Specific Notes (truevineinsights.ch)

- Uses a full-screen video background with CSS `filter: grayscale(100%) brightness(.55)`
- Has floating gradient circles with `filter: blur(110px)` and `mix-blend-mode: overlay`
- Custom cursor elements (`#c`, `#f`) with `mix-blend-mode: difference` and `z-index: 9999`
- Glassmorphism cards with `backdrop-filter: blur(24px)`

### Best Practice

When screenshotting sites with these elements:
1. Open page → wait 2-3 seconds
2. Take test screenshot
3. If grey/black, reload page
4. Wait for video to start playing (check console for playback events)
5. Proceed with full screenshot series

---

*Created: 2025-12-20*
