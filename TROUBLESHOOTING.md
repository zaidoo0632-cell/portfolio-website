# 🔧 Troubleshooting Guide

## Common Issues & Solutions

---

## 🌐 Website Issues

### Issue 1: Website Won't Open
**Problem**: Double-clicking `index.html` doesn't open anything

**Solutions**:
1. Right-click `index.html` → "Open with" → Choose a browser (Chrome, Firefox, Edge)
2. Copy file path, paste into browser address bar
3. Try: `file:///C:/portfolio-website/index.html`

---

### Issue 2: Styling Looks Wrong (No Colors)
**Problem**: Website shows only black text on white, no colors

**Solutions**:
1. Check that `styles.css` is in the same folder as `index.html`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Refresh page (Ctrl+F5)
4. Try different browser

**Verify Files**:
- ✓ `index.html` exists
- ✓ `styles.css` exists
- ✓ `script.js` exists
- ✓ All in same folder

---

### Issue 3: Mobile Menu Doesn't Work
**Problem**: Hamburger menu on mobile doesn't open

**Solutions**:
1. Check browser console for errors (F12)
2. Verify `script.js` is in same folder
3. Clear cache and refresh (Ctrl+Shift+Delete, then Ctrl+F5)
4. Test in different browser

**Debug**:
```javascript
// Open browser console (F12)
// Should see: "Portfolio website loaded successfully!"
// If not, script.js didn't load
```

---

### Issue 4: Links Don't Work
**Problem**: Clicking links does nothing

**Solutions**:
1. **Navigation links**: Check that section IDs match (e.g., `href="#about"` should link to `<section id="about">`)
2. **Email link**: Make sure it's `mailto:your-email@example.com`
3. **Phone link**: Make sure it's `tel:+33671906863`
4. **External links**: Add `target="_blank"` for opening in new tab

**Fix Email Link**:
```html
<!-- Wrong -->
<a href="email@example.com">Email</a>

<!-- Correct -->
<a href="mailto:email@example.com">Email</a>
```

**Fix Phone Link**:
```html
<!-- Wrong -->
<a href="0671906863">Call</a>

<!-- Correct -->
<a href="tel:+33671906863">Call</a>
```

---

### Issue 5: Form Doesn't Submit
**Problem**: Clicking "Send Message" does nothing

**Solution**: The form is set up to open your email client
1. Make sure you have an email client configured
2. If no email client: Form still works, but opens your mail app
3. For true form submission, need backend (see DEPLOYMENT.md)

**Test Form**:
1. Fill out form
2. Click "Send Message"
3. Your email client should open with pre-filled message

---

### Issue 6: CV Download Doesn't Work
**Problem**: "Download CV" button doesn't do anything

**Solutions**:
1. Create a `files` folder in portfolio-website/
2. Add your CV: `files/CV-Your-Name.pdf`
3. Update HTML to correct path:
```html
<!-- Update this line to -->
<a href="files/CV-Your-Name.pdf" download>Download CV</a>
```

**Verify**:
- ✓ Files folder exists
- ✓ PDF is inside files folder
- ✓ PDF filename matches the href
- ✓ HTML was saved after changing

---

### Issue 7: Text Looks Too Small/Large
**Problem**: Font size is wrong on certain devices

**Solutions**:
1. Check zoom level in browser (Ctrl+0 to reset)
2. Website is responsive - text should adjust automatically
3. If still wrong, text might be cut off on mobile

**Test Responsiveness**:
1. Press F12 (DevTools)
2. Click device toggle (phone icon)
3. Drag edges to test different sizes

---

### Issue 8: Smooth Scrolling Doesn't Work
**Problem**: Clicking nav links jumps instantly instead of smooth scrolling

**Solutions**:
1. Check browser supports smooth scroll (most modern browsers do)
2. Some browsers disable it - check settings
3. Fallback: Click on the link anyway, it still goes to section

**Fix**:
Add to CSS if needed:
```css
html {
    scroll-behavior: smooth;
}
```

---

## 📝 Editing Issues

### Issue 9: Changes Don't Show When I Refresh
**Problem**: Edited HTML but changes don't appear

**Solutions**:
1. **Save file first**: Ctrl+S in editor
2. **Full refresh**: Ctrl+Shift+Delete (clear cache), then Ctrl+F5
3. **Close/reopen**: Close browser tab completely and reopen
4. **Use incognito**: Ctrl+Shift+N for fresh load (no cache)

**Verify Edits**:
1. Right-click in browser → "View page source"
2. Search (Ctrl+F) for your text
3. If it's there, browser cache issue
4. If not there, HTML file not saved

---

### Issue 10: Accidental HTML Syntax Error
**Problem**: Website breaks after editing

**Solutions**:
1. Undo your last changes (Ctrl+Z in editor)
2. Look for unclosed tags: `<div>` without `</div>`
3. Check for unmatched quotes: `"text'` (should match)
4. Check for invalid special characters

**Common Mistakes**:
```html
<!-- Wrong - missing closing tag -->
<p>Some text

<!-- Correct -->
<p>Some text</p>

<!-- Wrong - mismatched quotes -->
<a href='link.html">Click</a>

<!-- Correct -->
<a href="link.html">Click</a>

<!-- Wrong - invalid HTML -->
<p>Text &amp; more text</p> (use &amp; for &)
```

---

### Issue 11: Can't Find Text to Edit
**Problem**: Searching for text doesn't find anything

**Solutions**:
1. Use Ctrl+F in HTML editor (not browser)
2. Check exact spelling and spacing
3. Text might be split across multiple lines
4. Try searching for part of phrase

**Find Text Properly**:
1. Open `index.html` in text editor
2. Press Ctrl+F
3. Search for your phrase
4. It should be highlighted

---

### Issue 12: Deleted Content and Can't Undo
**Problem**: Accidentally deleted section and can't undo

**Solution**: Use the templates in CUSTOMIZATION.md to recreate

**Prevention**:
1. Save backup before major edits
2. Use Ctrl+Z to undo immediately
3. Keep original file as backup

---

## 🎨 Design Issues

### Issue 13: Colors Look Wrong
**Problem**: Colors don't match the preview

**Solutions**:
1. Check monitor display settings
2. Browser might not support colors (rare)
3. Verify Tailwind CSS loaded from CDN

**Check CDN**:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Look for `cdn.tailwindcss.com` entry
5. Should show status 200 (success)

---

### Issue 14: Layout is Broken on Mobile
**Problem**: Website looks wrong on phone

**Solutions**:
1. Check viewport meta tag in `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Should already be there.

2. Test with browser DevTools (F12 → Device toggle)
3. Remove custom width styles if you added any
4. All Tailwind classes handle responsive automatically

---

### Issue 15: Images/Emojis Don't Show
**Problem**: Emojis or images appear as broken icons

**Solutions**:
1. **Emojis**: Should work in all modern browsers
2. **Images**: Make sure image file exists in right location
3. Clear cache (Ctrl+Shift+Delete)
4. Try different browser

**Check Image Path**:
```html
<!-- Correct formats -->
<img src="images/photo.jpg">        <!-- Relative path -->
<img src="/portfolio/photo.jpg">    <!-- Absolute path -->
<img src="https://...">             <!-- URL -->
```

---

## 🚀 Deployment Issues

### Issue 16: Site Works Locally But Not After Deployment
**Problem**: Website works on your computer but broken online

**Solutions**:
1. **Check file paths**: URLs are case-sensitive on servers
   - Change `Image.JPG` to `image.jpg`
   - Change `Link.html` to `link.html`

2. **Verify all files uploaded**:
   - index.html
   - styles.css
   - script.js
   - Any files in subdirectories

3. **Check deployment settings**:
   - Publishing directory should be root
   - Not in a subfolder

4. **Test in private/incognito browser** (no cache issues)

---

### Issue 17: CSS/JS Files Return 404
**Problem**: "Failed to load resource: 404" errors

**Solutions**:
1. Verify files are uploaded to server
2. Check file names match exactly (case-sensitive)
3. Verify correct folder structure
4. Try uploading files again

**On Netlify**:
1. Go to Deploys
2. View deployment logs
3. Check which files are included
4. Redeploy if needed

---

### Issue 18: Site Shows But Very Slow
**Problem**: Website loads slowly after deployment

**Solutions**:
1. **Clear cache**: Ctrl+Shift+Delete
2. **Test with different connection**: Use mobile data
3. **Check file sizes**: Compress images if you added any
4. **Use CDN**: Netlify/Vercel already use CDN

**Speed Test**:
- Google PageSpeed: https://pagespeed.web.dev
- GT Metrix: https://gtmetrix.com
- Pingdom: https://tools.pingdom.com

---

### Issue 19: Form/Email Not Working After Deploy
**Problem**: Contact form broken on live site

**Solutions**:
1. Current setup opens email client (client-side)
2. Works on any browser with email app configured
3. If you need true form submission:
   - Use FormSubmit.co (free)
   - Use Basin (simple form backend)
   - Use Google Forms
   - Set up backend with Node.js

---

### Issue 20: Custom Domain Not Working
**Problem**: Custom domain shows error after purchase

**Solutions**:
1. **DNS propagation**: Can take 24-48 hours
2. **Check DNS settings**: 
   - Point to correct nameservers
   - Update A records if needed
3. **Verify in platform**:
   - Netlify: Domain settings
   - GitHub Pages: Settings → Pages
   - Vercel: Domains tab

**Debug Domain**:
- https://mxtoolbox.com (check DNS)
- https://whatsmydns.net (DNS propagation)

---

## 🐛 Browser-Specific Issues

### Issue 21: Works in Chrome but Not in Firefox
**Problem**: Website broken in specific browser

**Solutions**:
1. Clear cache in that browser
2. Disable extensions (might conflict)
3. Try in incognito/private mode
4. Update browser to latest version

---

### Issue 22: Mobile Browser Issues
**Problem**: Mobile Safari or Chrome mobile not working right

**Solutions**:
1. Ensure viewport meta tag is present
2. Check touch events (buttons should be 44px+ in size)
3. Test on actual device, not just DevTools
4. Check for iPhone-specific CSS issues

---

### Issue 23: Old Browser (IE11, Old Safari)
**Problem**: Website doesn't work in old browser

**Solution**: Modern websites don't need to support ancient browsers
- Target modern browsers (Chrome, Firefox, Safari, Edge)
- Older browsers will have degraded experience
- Add progressive enhancement if needed

---

## 🔍 Debug Techniques

### Method 1: Check Browser Console
```
Press F12 → Console tab
Look for any red error messages
Note the error and fix it
```

### Method 2: View Page Source
```
Right-click → "View Page Source"
Search (Ctrl+F) for your content
Verify it's there and correctly formatted
```

### Method 3: Check Network
```
Press F12 → Network tab
Refresh page
Look for red items (failed loads)
Click each to see what failed
```

### Method 4: Validate HTML
```
Visit: https://validator.w3.org
Upload your HTML file
Fix any errors listed
```

### Method 5: Test Responsiveness
```
Press F12 → Click device toggle (phone icon)
Test at different sizes: 320px, 768px, 1024px
Check layout on each size
```

---

## ✅ Checklist for Troubleshooting

When something breaks:
- [ ] Check browser console (F12) for errors
- [ ] Verify file names and paths
- [ ] Clear cache and refresh (Ctrl+Shift+Delete)
- [ ] Try different browser
- [ ] Try incognito/private mode
- [ ] Check file was saved
- [ ] Validate HTML syntax
- [ ] Check all tags are closed
- [ ] Look for typos in attribute names
- [ ] Try undo (Ctrl+Z) if you edited recently

---

## 📞 Getting Help

### If Issue Persists:
1. **Search online**: "HTML [error message]"
2. **Check MDN**: https://developer.mozilla.org
3. **Stackoverflow**: Search the exact error
4. **Ask AI**: Describe problem, share error message
5. **Ask Mentor/Teacher**: Show them the error

---

## 🎯 Quick Reference

| Issue | Quick Fix |
|-------|-----------|
| Doesn't open | Right-click → Open with browser |
| No colors | Check styles.css exists |
| Menu broken | Check script.js exists |
| Links broken | Use correct href format |
| Changes don't show | Ctrl+S save, Ctrl+F5 refresh |
| Mobile broken | F12 → Device toggle → test |
| Deployed wrong | Verify all files uploaded |
| Email wrong | Use `mailto:` prefix |
| Phone wrong | Use `tel:` prefix |
| Cache issues | Ctrl+Shift+Delete |

---

**Last Updated**: November 30, 2025

Good luck fixing your issue! 💪
