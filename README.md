# Zaid Ababou - Full Stack Web Developer Portfolio

## 🚀 Overview

A modern, responsive, and professional portfolio website built with HTML5, Tailwind CSS, and vanilla JavaScript. This portfolio showcases my full-stack development skills, projects, experience, and educational background. The site is optimized for all devices and includes features like smooth scrolling, mobile menu navigation, and an interactive contact form.

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file with all sections
├── styles.css          # Custom CSS animations and styles
├── script.js           # JavaScript for interactivity
├── files/              # (Create this folder for CV and other documents)
│   └── CV-Zaid-Ababou.pdf  # Your CV (add your file here)
└── README.md           # This file
```

## ✨ Features

### 1. **Navigation**
- Fixed navbar with smooth scrolling to sections
- Mobile-responsive hamburger menu
- Active section highlighting while scrolling
- Keyboard accessibility (Escape key to close menu)

### 2. **Hero Section**
- Attractive gradient background
- Clear headline and call-to-action
- Alternance opportunity highlight
- "Get In Touch" and "Download CV" buttons

### 3. **About Section**
- Personal introduction
- Current education info (Master 1 at EPSI Rennes)
- Key highlights with visual icons

### 4. **Skills Section**
- Organized by categories:
  - Languages (JavaScript, Java, PHP, Python, C++, HTML5, CSS3)
  - Frameworks & Runtimes (React, Node.js, Express, Swing)
  - Tools & Databases (Git, GitHub, MySQL, MongoDB)
  - Soft Skills (Agile/Scrum, Problem Solving, Teamwork)
- Card-based layout with hover effects

### 5. **Projects Section**
- Three showcase projects:
  - **Car Rental Platform** - PHP, MySQL, JavaScript
  - **School Management System** - Java, Swing, SQL
  - **TaskMaster** - React, Node.js, MongoDB
- Each project includes description, tech stack tags, and view link

### 6. **Experience Section**
- Timeline view of professional experience
- 3 positions with descriptions:
  - Technical Support Specialist at Concentrix
  - IT Intern at HYAMTRADING SARL
  - Commercial Intern at Sup'Management

### 7. **Education Section**
- Master 1 in Computer Development (EPSI, Rennes) - 2025-Present
- Licence in Computer Development (École Sup'Management, Fès) - 2022-2025

### 8. **Contact Section**
- Contact information cards (phone, email, location)
- Interactive contact form
- Social links (GitHub, Email, Phone)
- Multiple CTA buttons

### 9. **Animations & Interactions**
- Fade-in animations on scroll
- Smooth page scrolling
- Hover effects on buttons and cards
- Mobile menu slide animations
- Form validation feedback

## 🎨 Design Features

### Color Palette
- **Primary**: Deep Navy Blue (`#1e293b`, `#0f172a`)
- **Accent**: Teal (`#0d9488`, `#06b6d4`)
- **Background**: Clean White with Gray accents
- **Text**: Slate Gray for readability

### Typography
- Modern sans-serif font stack
- Responsive font sizes
- Clear hierarchy with bold headings

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Tested layouts for all screen sizes

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS for utility-first styling
- **JavaScript**: Vanilla JS for interactivity (no frameworks)

### Features Implemented
- Smooth scrolling navigation
- Mobile responsive menu
- Form handling
- Intersection Observer for scroll animations
- Accessibility features (keyboard navigation, focus states)

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Hamburger menu for mobile devices
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons and links
- Optimized spacing for small screens

## 🔧 Setup Instructions

### 1. **Download the Files**
   - Clone or download all files to your local machine

### 2. **Add Your CV**
   - Create a `files` folder in the portfolio directory
   - Add your CV file: `files/CV-Zaid-Ababou.pdf`
   - Update the download button href in `index.html`:
     ```html
     <a href="files/CV-Zaid-Ababou.pdf" download class="...">Download CV</a>
     ```

### 3. **Update Links**
   - Replace GitHub URL: Search for `https://github.com` and update
   - Update phone number if needed: `+33 6 71 90 68 63`
   - Customize email: `zaid.ababouu@gmail.com`

### 4. **Customize Content**
   - Edit section text, projects, and skills as needed
   - Update experience dates and descriptions
   - Add your own project links

### 5. **Deploy to Web**
   - Use services like:
     - **Netlify** (recommended)
     - **Vercel**
     - **GitHub Pages**
     - **AWS S3 + CloudFront**
   - Simple deployment: Upload HTML, CSS, and JS files

## 📂 File Customization Guide

### index.html
- Update name: `<h1>Zaid Ababou</h1>`
- Modify any text content
- Add/remove project cards in the Projects section
- Customize contact information

### styles.css
- Change color variables (search for `teal-600`, `slate-900`)
- Add custom animations
- Adjust spacing and sizing

### script.js
- Modify form handling behavior
- Add analytics or tracking
- Customize scroll effects

## 🎯 SEO & Performance

### Optimization Features
- Semantic HTML5 elements
- Meta tags for description and viewport
- Fast loading with CDN-hosted Tailwind CSS
- Minimal custom CSS and JS
- Responsive images (use emoji for project icons)

### SEO Recommendations
1. Add meta description:
   ```html
   <meta name="description" content="Portfolio of Zaid Ababou, Full Stack Web Developer looking for Alternance in Nantes.">
   ```

2. Add social meta tags (OpenGraph):
   ```html
   <meta property="og:title" content="Zaid Ababou - Full Stack Developer">
   <meta property="og:description" content="Full Stack Web Developer - Portfolio">
   <meta property="og:image" content="path-to-image.jpg">
   ```

3. Add canonical URL
4. Submit sitemap to Google Search Console

## 🚀 Deployment Checklist

- [ ] Add your CV file in `files/` folder
- [ ] Update all contact links (email, phone, GitHub)
- [ ] Add your GitHub profile URL
- [ ] Test all buttons and links
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Update meta tags with your info
- [ ] Optimize images if adding custom ones
- [ ] Set up domain name
- [ ] Enable HTTPS
- [ ] Submit to search engines

## 🔐 Security Notes

- Contact form currently opens email client (mailto:)
- For backend form handling, consider:
  - **FormSubmit.co** (free, no setup)
  - **Basin** (simple form backend)
  - **Custom Node.js backend**

## 📞 Contact Information

- **Phone**: +33 6 71 90 68 63
- **Email**: zaid.ababouu@gmail.com
- **Location**: Nantes, France
- **GitHub**: [Your GitHub Profile]

## 📋 Future Enhancements

Consider adding:
- [ ] Blog section
- [ ] Case studies for projects
- [ ] Video demonstrations
- [ ] Testimonials section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Backend form handling
- [ ] Google Analytics integration
- [ ] Newsletter signup

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🎓 Notes for Alternance Search

This portfolio is optimized for showcasing:
- ✅ Full-stack capabilities
- ✅ Diverse project portfolio
- ✅ Professional experience
- ✅ Educational background
- ✅ Contact accessibility
- ✅ Modern web development skills

---

**Last Updated**: November 30, 2025

Created with ❤️ for your alternance journey!
