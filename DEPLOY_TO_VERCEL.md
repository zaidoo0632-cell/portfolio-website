# Deploy to Vercel - Step by Step

## Prerequisites
- GitHub account (free at github.com)
- Vercel account (free at vercel.com)

## Step 1: Push to GitHub

1. **Create a GitHub repository:**
   - Go to github.com and sign in
   - Click "New repository"
   - Name: `portfolio-website`
   - Click "Create repository"

2. **Push your code:**
   ```powershell
   cd C:\Users\MYDIL\Desktop\portfolio-website
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Sign up at Vercel:**
   - Go to vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your `portfolio-website` repository
   - Click "Import"

3. **Configure & Deploy:**
   - Root Directory: `.` (leave as default)
   - Framework: `Other` (or leave blank)
   - Click "Deploy"

4. **Done!**
   - Your site will be live at: `https://portfolio-website.vercel.app`
   - You can customize the domain in Vercel settings

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard → Your project → Settings → Domains
2. Add your custom domain (e.g., zaidababou.com)
3. Follow DNS setup instructions

## Tips

- Every `git push` to main branch = automatic redeploy
- Check deployment status in Vercel dashboard
- Use `vercel env` to add environment variables if needed

## File Structure (Ready for Vercel)

```
portfolio-website/
├── index.html          ✅ Main page
├── script.js           ✅ JavaScript
├── styles.css          ✅ Styling
├── vercel.json         ✅ Vercel config
├── .gitignore          ✅ Git ignore rules
└── Documentation files
```

All set! Follow the steps above to deploy. 🚀
