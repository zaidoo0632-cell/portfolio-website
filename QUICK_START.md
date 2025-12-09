# ⚡ Quick Start Guide

## 🎯 Get Your Portfolio Live in 5 Minutes!

### Step 1: Open the Website (1 minute)
1. Navigate to the `portfolio-website` folder
2. Double-click `index.html`
3. Your portfolio opens in your browser!

### Step 2: Customize Your Info (2 minutes)
1. Right-click on `index.html`
2. Select "Open with" → Choose Notepad or VS Code
3. Find and replace your info:
   - Search for `Zaid Ababou` → Replace with your name
   - Search for `zaid.ababouu@gmail.com` → Replace with your email
   - Search for `+33 6 71 90 68 63` → Replace with your phone
   - Search for `Nantes, France` → Replace with your location

4. Save the file (Ctrl+S)
5. Refresh your browser to see changes

### Step 3: Update Your CV Link (1 minute)
1. Create a `files` folder in the portfolio directory
2. Add your CV file: `CV-Your-Name.pdf`
3. In `index.html`, find all `download` links and update the path:
```html
<!-- Change from -->
<a href="#" download>Download CV</a>

<!-- To -->
<a href="files/CV-Your-Name.pdf" download>Download CV</a>
```
4. Save and refresh browser

### Step 4: Deploy (1 minute)
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your entire `portfolio-website` folder
4. **Done!** Your site is live!

---

## 📝 Essential Edits Checklist

### Must Edit:
- [ ] Replace name: `Zaid Ababou`
- [ ] Replace email: `zaid.ababouu@gmail.com`
- [ ] Replace phone: `+33 6 71 90 68 63`
- [ ] Replace location: `Nantes, France`
- [ ] Update GitHub URL
- [ ] Add your CV file

### Should Edit:
- [ ] Update about section text
- [ ] Modify skills list (add/remove)
- [ ] Update project titles and descriptions
- [ ] Change experience details
- [ ] Update education dates

### Optional Edit:
- [ ] Change color scheme (search for `teal-`)
- [ ] Adjust text and font sizes
- [ ] Add your own project links

---

## 🎨 Quick Customization Commands

### Find & Replace with VS Code:
1. Open `index.html` with VS Code
2. Press `Ctrl+H` to open Find & Replace
3. Enter search term and replacement

**Quick Replacements**:
```
Find: Zaid Ababou          Replace: Your Name
Find: zaid.ababouu@gmail.com    Replace: Your Email
Find: +33 6 71 90 68 63    Replace: Your Phone
Find: Nantes, France       Replace: Your City
Find: https://github.com   Replace: Your GitHub URL
```

---

## 🚀 Deploy in 30 Seconds

### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag your folder into browser
3. Done! You have a live URL

### Option B: GitHub Pages (Free Forever)
1. Create GitHub account
2. Create repo: `username.github.io`
3. Upload files via GitHub web interface
4. Site goes live automatically

### Option C: Vercel (For Developers)
1. Sign up at [vercel.com](https://vercel.com)
2. Connect GitHub
3. Import your repo
4. Deploy with one click

---

## 📁 File Structure

```
portfolio-website/
├── index.html           ← Main file (edit this!)
├── styles.css           ← Styling
├── script.js            ← JavaScript
├── README.md            ← Full documentation
├── CUSTOMIZATION.md     ← Detailed customization guide
├── DEPLOYMENT.md        ← Deployment instructions
├── QUICK_START.md       ← This file
└── files/               ← Create this folder
    └── CV-Your-Name.pdf ← Add your CV here
```

---

## 🔧 Common Edits in 30 Seconds

### Change Your Hero Heading
```html
<!-- Find this line (around line 80) -->
<h1 class="text-5xl md:text-6xl font-bold mb-4 text-white">Zaid Ababou</h1>

<!-- Replace with -->
<h1 class="text-5xl md:text-6xl font-bold mb-4 text-white">Your Name</h1>
```

### Change Your Title
```html
<!-- Find this line (around line 81) -->
<h2 class="text-3xl md:text-4xl font-semibold mb-6 text-teal-300">Full Stack Web Developer</h2>

<!-- Replace with -->
<h2 class="text-3xl md:text-4xl font-semibold mb-6 text-teal-300">Your Job Title</h2>
```

### Change Hero Description
```html
<!-- Find this line (around line 83) -->
<p class="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
    Building reliable web applications with net interfaces and secure back-ends.
</p>

<!-- Replace with -->
<p class="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
    Your professional headline here
</p>
```

### Add Your GitHub URL
```html
<!-- Find and replace this -->
<a href="https://github.com" target="_blank">

<!-- With -->
<a href="https://github.com/your-username" target="_blank">
```

---

## 📱 Test Your Changes

After editing:
1. Save the file (Ctrl+S)
2. Refresh browser (F5)
3. Check on mobile (resize browser window)
4. Test all buttons and links

---

## ✅ Pre-Launch Checklist

Before sending to recruiters:
- [ ] All text is correct (no typos)
- [ ] All links work (test each one)
- [ ] Mobile menu works
- [ ] Email link works
- [ ] Phone link works
- [ ] CV download works
- [ ] Website looks good on mobile

---

## 💡 Pro Tips

1. **Use VS Code** for easier editing
   - Download free at https://code.visualstudio.com
   - Install "Live Server" extension for auto-refresh

2. **Test on Mobile**
   - Open your site
   - Press F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Test hamburger menu

3. **Share Your Site**
   - Once deployed, share the URL
   - Add to LinkedIn, GitHub, resume
   - Send to recruiters looking for alternance candidates

4. **Keep It Updated**
   - Update skills as you learn new ones
   - Add new projects
   - Add internship experience
   - Update dates as you progress

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Nothing shows | Double-click `index.html` to open in browser |
| Styles look wrong | Make sure `styles.css` is in same folder as `index.html` |
| Mobile menu doesn't work | Make sure `script.js` is in same folder |
| Links don't work | Check file paths and email format |
| Changes don't show | Save file (Ctrl+S) and refresh browser (F5) |

---

## 🎯 Next Steps

1. ✅ Edit your info
2. ✅ Add your CV
3. ✅ Test everything
4. ✅ Deploy to Netlify/GitHub Pages
5. ✅ Share with recruiters
6. ✅ Keep it updated

---

## 📞 Questions?

Check these files for help:
- `README.md` - Full documentation
- `CUSTOMIZATION.md` - How to modify each section
- `DEPLOYMENT.md` - How to launch online

---

## 🚀 You're All Set!

Your professional portfolio is ready. Now go land that alternance! 💼✨

**Last Updated**: November 30, 2025
