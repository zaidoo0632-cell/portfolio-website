# 🎨 Portfolio Customization Guide

## Quick Start

1. Open `index.html` in a web browser to preview the website
2. Edit content directly in `index.html`
3. No build process needed - changes are instant!

---

## 📝 How to Customize

### 1. **Change Your Name**
Find and replace "Zaid Ababou" throughout the file:
```html
<!-- In navbar -->
<div class="text-2xl font-bold text-teal-600">Zaid Ababou</div>

<!-- In hero section -->
<h1 class="text-5xl md:text-6xl font-bold mb-4 text-white">Zaid Ababou</h1>

<!-- In footer -->
<p class="mb-2">&copy; 2025 Zaid Ababou. All rights reserved.</p>
```

### 2. **Update Contact Information**
```html
<!-- Phone -->
<a href="tel:+33671906863">+33 6 71 90 68 63</a>

<!-- Email -->
<a href="mailto:zaid.ababouu@gmail.com">zaid.ababouu@gmail.com</a>

<!-- Location -->
<p>Nantes, France</p>
```

### 3. **Add Your CV**
```html
<!-- Create a 'files' folder and place your CV there -->
<a href="files/CV-Your-Name.pdf" download class="...">Download CV</a>
```

### 4. **Update GitHub Profile**
```html
<!-- Replace these URLs with your GitHub profile -->
<a href="https://github.com/your-username" target="_blank">GitHub Profile</a>
```

### 5. **Customize Projects**
Each project card follows this structure:
```html
<div class="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
    <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center">
        <span class="text-4xl">🚗</span>  <!-- Change emoji here -->
    </div>
    <div class="p-6">
        <h3 class="text-2xl font-bold text-slate-900 mb-3">Project Title</h3>
        <p class="text-gray-700 mb-4">Project description...</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Tech</span>
        </div>
        <a href="#">View Project →</a>
    </div>
</div>
```

**To modify:**
- Change emoji: Replace `🚗` with your preferred emoji
- Update title: Change "Project Title"
- Edit description: Modify the `<p>` tag content
- Update tech tags: Change tech stack badges
- Link project: Update `href="#"` to your project URL

### 6. **Modify Skills**
Skills are organized in a grid. Find the Skills section and update:
```html
<li class="flex items-center text-gray-700">
    <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
    Skill Name
</li>
```

### 7. **Update Experience**
Experience cards use this structure:
```html
<div class="bg-white p-6 rounded-lg border-l-4 border-teal-600 shadow-md">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
            <h3 class="text-2xl font-bold text-slate-900">Job Title</h3>
            <p class="text-teal-600 font-semibold">Company Name</p>
        </div>
        <span class="text-gray-600 font-semibold mt-2 md:mt-0">Duration</span>
    </div>
    <p class="text-gray-700">Job description...</p>
</div>
```

### 8. **Customize Colors**
The main color scheme uses Tailwind classes:
- **Primary**: `teal-600`, `teal-700`
- **Dark**: `slate-900`, `slate-800`
- **Light**: `gray-50`, `white`

To change the color scheme:
1. Replace `teal-` classes with your preferred color (e.g., `blue-`, `purple-`, `indigo-`)
2. Update gradient colors in hero section
3. Modify link hover colors

**Example: Change Teal to Purple**
- Replace `text-teal-600` → `text-purple-600`
- Replace `bg-teal-600` → `bg-purple-600`
- Replace `border-teal-600` → `border-purple-600`

---

## 🎯 Section-by-Section Customization

### Hero Section
- Update headline text
- Modify rhythm details (1 week school / 2 weeks company)
- Change location
- Update CTA buttons

### About Section
- Update introduction text
- Modify education details
- Change highlights

### Skills Section
- Add/remove skill categories
- Update individual skills
- Modify skill descriptions

### Projects Section
- Add/remove projects
- Update project details
- Change tech stack tags
- Add project links

### Experience Section
- Update job titles and companies
- Modify durations
- Change job descriptions

### Education Section
- Update degree names
- Modify school names
- Change graduation dates
- Update descriptions

### Contact Section
- Update phone, email, location
- Modify contact card emojis
- Customize form labels
- Update button links

---

## 🎨 Color Customization Examples

### Option 1: Professional Blue
```
Primary: blue-600
Secondary: blue-500
Dark: slate-900
```

### Option 2: Modern Purple
```
Primary: purple-600
Secondary: purple-500
Dark: slate-900
```

### Option 3: Vibrant Orange
```
Primary: orange-600
Secondary: orange-500
Dark: slate-900
```

---

## 📱 Responsive Design Notes

The site uses Tailwind's responsive prefixes:
- `md:` = Tablets and larger (768px+)
- `sm:` = Small screens (640px+)
- `lg:` = Large screens (1024px+)

Example:
```html
<div class="text-xl md:text-2xl lg:text-3xl">
    Text adjusts size based on screen size
</div>
```

---

## 🔗 Important Links to Update

Find and update these in your editor:

1. **GitHub Profile**: `https://github.com`
2. **CV Download**: `files/CV-Zaid-Ababou.pdf`
3. **Email**: `zaid.ababouu@gmail.com`
4. **Phone**: `+33 6 71 90 68 63`
5. **Projects**: Links in project cards

---

## 💡 Pro Tips

1. **Use a Code Editor**: VS Code, Sublime Text, or Atom for better editing
2. **Live Preview**: Use "Live Server" extension in VS Code
3. **Browser DevTools**: Use F12 to inspect and test responsive design
4. **Keep Backup**: Save original files before major changes
5. **Test Mobile**: Always test on mobile devices or browser dev tools

---

## 🐛 Troubleshooting

### Styles not loading?
- Make sure `styles.css` is in the same folder as `index.html`
- Check browser console (F12) for errors

### JavaScript not working?
- Ensure `script.js` is in the same folder
- Check that all script tags have correct paths
- Open browser console to see any errors

### Links not working?
- Check that paths are correct
- Use absolute URLs for external links
- Use relative paths for internal files

### Mobile menu not closing?
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly

---

## 📊 Analytics Setup (Optional)

Add Google Analytics to track visitors:
```html
<!-- Add this in the <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

---

## 🚀 Deployment

### Simple Options:
1. **Netlify** (Recommended):
   - Drag and drop your folder
   - Automatic HTTPS
   - Free hosting

2. **GitHub Pages**:
   - Push files to GitHub
   - Enable Pages in settings
   - Free hosting at `username.github.io`

3. **Vercel**:
   - Connect GitHub repo
   - Auto-deploys on push
   - Free tier available

---

## 📞 Need Help?

1. Check the README.md for full documentation
2. Review Tailwind CSS docs: https://tailwindcss.com/docs
3. Test in browser DevTools (F12)
4. Validate HTML: https://validator.w3.org/

---

Happy customizing! 🎉
