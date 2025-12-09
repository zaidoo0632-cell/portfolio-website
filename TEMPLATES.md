# 📋 Templates & Code Snippets

## Ready-to-Use Templates for Common Edits

---

## 🎯 Add a New Skill

**Location**: Skills section

### Copy & Paste Template:
```html
<li class="flex items-center text-gray-700">
    <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
    Your Skill Name Here
</li>
```

### Example - Add TypeScript:
```html
<li class="flex items-center text-gray-700">
    <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
    TypeScript
</li>
```

### Where to Paste:
Find the skill category (Languages, Frameworks, etc.) and add the new skill in the list

---

## 🚀 Add a New Project Card

**Location**: Projects section (after existing projects)

### Copy & Paste Template:
```html
<div class="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
    <div class="bg-gradient-to-r from-green-500 to-green-600 h-32 flex items-center justify-center">
        <span class="text-4xl">🎨</span>
    </div>
    <div class="p-6">
        <h3 class="text-2xl font-bold text-slate-900 mb-3">Your Project Title</h3>
        <p class="text-gray-700 mb-4">
            Your project description goes here. Explain what the project does, what problem it solves, and what you learned from building it.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Tech1</span>
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Tech2</span>
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Tech3</span>
        </div>
        <a href="https://github.com/your-username/project-repo" target="_blank" class="inline-block text-teal-600 hover:text-teal-700 font-semibold">View Project →</a>
    </div>
</div>
```

### How to Customize:
1. Change `🎨` emoji to your project emoji
2. Replace `Your Project Title`
3. Replace project description
4. Update color: Change `from-green-500` and `to-green-600` to match (e.g., blue-500, purple-500)
5. Update tech stack badges (Tech1, Tech2, Tech3)
6. Add your project GitHub link or portfolio link

### Emoji Examples:
- Web app: 🌐, 💻, ⚡, 🚀
- E-commerce: 🛒, 💳
- Social: 👥, 💬
- CMS: 📝, 📰
- Analytics: 📊, 📈
- Gaming: 🎮
- Music: 🎵
- Photography: 📷

---

## 💼 Add a New Experience

**Location**: Experience section

### Copy & Paste Template:
```html
<div class="bg-white p-6 rounded-lg border-l-4 border-teal-600 shadow-md hover:shadow-lg transition">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
            <h3 class="text-2xl font-bold text-slate-900">Your Job Title</h3>
            <p class="text-teal-600 font-semibold">Company Name</p>
        </div>
        <span class="text-gray-600 font-semibold mt-2 md:mt-0">X months / Year - Year</span>
    </div>
    <p class="text-gray-700">
        Describe what you did in this position. What were your main responsibilities? What did you accomplish? What did you learn? Keep it professional and achievement-focused.
    </p>
</div>
```

### Example - Junior Developer Internship:
```html
<div class="bg-white p-6 rounded-lg border-l-4 border-teal-600 shadow-md hover:shadow-lg transition">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
            <h3 class="text-2xl font-bold text-slate-900">Junior Web Developer</h3>
            <p class="text-teal-600 font-semibold">TechStartup Inc.</p>
        </div>
        <span class="text-gray-600 font-semibold mt-2 md:mt-0">3 months | Jan 2025 - Mar 2025</span>
    </div>
    <p class="text-gray-700">
        Developed and maintained responsive web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and fix bugs. Improved page load times by 40% through code optimization. Participated in daily stand-ups and code reviews following Agile methodology.
    </p>
</div>
```

---

## 🎓 Add Education Entry

**Location**: Education section

### Copy & Paste Template:
```html
<div class="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg border-2 border-indigo-200 shadow-md">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
            <h3 class="text-2xl font-bold text-slate-900">Your Degree Name</h3>
            <p class="text-indigo-600 font-semibold text-lg">School Name, City</p>
            <p class="text-gray-700 mt-2">
                Brief description of your studies, focus areas, notable achievements, relevant courses, or projects completed during this program.
            </p>
        </div>
        <span class="text-gray-600 font-semibold mt-4 md:mt-0 text-right">Year - Year</span>
    </div>
</div>
```

### Example:
```html
<div class="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200 shadow-md">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
            <h3 class="text-2xl font-bold text-slate-900">Bootcamp - Full Stack Web Development</h3>
            <p class="text-orange-600 font-semibold text-lg">Coding School, Nantes</p>
            <p class="text-gray-700 mt-2">
                Intensive 3-month bootcamp covering front-end (HTML, CSS, JavaScript, React), back-end (Node.js, Express), databases (MongoDB), and deployment. Built 5 full-stack projects and collaborated in teams using Git and Agile methodologies.
            </p>
        </div>
        <span class="text-gray-600 font-semibold mt-4 md:mt-0 text-right">Jan 2024 - Mar 2024</span>
    </div>
</div>
```

---

## 🎨 Change Color Scheme

### Teal Theme (Current)
```html
text-teal-600
bg-teal-600
border-teal-600
hover:bg-teal-700
```

### Blue Theme
```html
text-blue-600
bg-blue-600
border-blue-600
hover:bg-blue-700
```

### Purple Theme
```html
text-purple-600
bg-purple-600
border-purple-600
hover:bg-purple-700
```

### Orange Theme
```html
text-orange-600
bg-orange-600
border-orange-600
hover:bg-orange-700
```

### Indigo Theme
```html
text-indigo-600
bg-indigo-600
border-indigo-600
hover:bg-indigo-700
```

### Green Theme
```html
text-green-600
bg-green-600
border-green-600
hover:bg-green-700
```

**How to Apply**:
1. In VS Code, press Ctrl+H (Find & Replace)
2. Find: `teal-6`
3. Replace: `blue-6` (or your chosen color)
4. Replace All

---

## 📞 Add Social Link

### Copy & Paste Template:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank" class="text-teal-400 hover:text-teal-300">LinkedIn</a>
```

### Different Platforms:

**GitHub**:
```html
<a href="https://github.com/your-username" target="_blank">GitHub</a>
```

**LinkedIn**:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
```

**Twitter**:
```html
<a href="https://twitter.com/your-handle" target="_blank">Twitter</a>
```

**Email**:
```html
<a href="mailto:your-email@example.com">Email</a>
```

**Phone**:
```html
<a href="tel:+33671906863">Phone</a>
```

---

## 🔗 Add a Skill Category

**Location**: Skills section

### Copy & Paste Template:
```html
<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <span class="inline-block w-3 h-3 bg-teal-600 rounded-full mr-3"></span>
        Category Name
    </h3>
    <ul class="space-y-2">
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Skill 1
        </li>
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Skill 2
        </li>
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Skill 3
        </li>
    </ul>
</div>
```

### Example - Design Skills:
```html
<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <span class="inline-block w-3 h-3 bg-teal-600 rounded-full mr-3"></span>
        Design & UI
    </h3>
    <ul class="space-y-2">
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Figma
        </li>
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            UI/UX Design
        </li>
        <li class="flex items-center text-gray-700">
            <span class="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Responsive Design
        </li>
    </ul>
</div>
```

---

## 🎯 Complete Project Card Example

Here's a complete, real-world example of adding a new project:

```html
<div class="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
    <div class="bg-gradient-to-r from-rose-500 to-pink-600 h-32 flex items-center justify-center">
        <span class="text-4xl">❤️</span>
    </div>
    <div class="p-6">
        <h3 class="text-2xl font-bold text-slate-900 mb-3">Dating App MVP</h3>
        <p class="text-gray-700 mb-4">
            A minimum viable product for a modern dating application. Features include user authentication with JWT, real-time messaging, profile matching algorithm, swipe functionality, and in-app notifications. Built with a focus on performance and user experience, deployed on AWS.
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold">React</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold">PostgreSQL</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold">AWS</span>
        </div>
        <a href="https://github.com/your-username/dating-app" target="_blank" class="inline-block text-teal-600 hover:text-teal-700 font-semibold">View Project →</a>
    </div>
</div>
```

---

## 📝 Update Navigation Links

**If you add new sections**, add them to the navigation:

```html
<!-- In navbar -->
<ul id="nav-menu" class="hidden md:flex space-x-8 text-gray-700">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#your-new-section">New Section</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<!-- And in mobile menu -->
<ul id="mobile-menu" class="hidden md:hidden bg-gray-50 border-t">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#your-new-section">New Section</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

---

## 🎨 Add a Custom Banner/Alert

```html
<div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded">
    <p class="text-lg font-semibold mb-2 text-yellow-800">⚠️ Important Note</p>
    <p class="text-yellow-700">
        Your important message goes here
    </p>
</div>
```

### Alert Color Options:
- **Blue**: `bg-blue-50`, `border-blue-400`, `text-blue-800`
- **Green**: `bg-green-50`, `border-green-400`, `text-green-800`
- **Red**: `bg-red-50`, `border-red-400`, `text-red-800`
- **Yellow**: `bg-yellow-50`, `border-yellow-400`, `text-yellow-800`
- **Purple**: `bg-purple-50`, `border-purple-400`, `text-purple-800`

---

## 🌟 Add an Achievement Badge

```html
<div class="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm">
    ⭐ 5-Star Rating
</div>
```

### Different Badge Styles:

**Success**:
```html
<div class="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
    ✓ Certified
</div>
```

**Featured**:
```html
<div class="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm">
    ⭐ Featured Project
</div>
```

**New**:
```html
<div class="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
    🆕 Latest
</div>
```

---

## 💡 Quick Copy-Paste Checklist

What you can easily copy-paste:
- ✅ New skills
- ✅ New projects
- ✅ New experiences
- ✅ New education entries
- ✅ Social links
- ✅ Skill categories
- ✅ Alerts and badges

What needs customization:
- ⚠️ Project emojis (choose relevant ones)
- ⚠️ Colors (match your theme)
- ⚠️ Text content (your info)
- ⚠️ Links (your URLs)
- ⚠️ Dates (your timeline)

---

## 🎯 Pro Template Tips

1. **Always keep structure**: Don't remove outer divs
2. **Match colors**: Use same color theme throughout
3. **Consistent spacing**: Keep the `mb-X`, `p-X` classes
4. **Test after pasting**: Make sure layout looks right
5. **Validate HTML**: Check for unclosed tags

---

**Last Updated**: November 30, 2025

Happy templating! 🚀
