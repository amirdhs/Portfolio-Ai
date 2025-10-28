# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to the internet.

## Quick Deployment Options

### 1. GitHub Pages (Recommended for Beginners) ⭐

**Pros:** Free, Easy, Custom domain support
**Time:** 5 minutes

**Steps:**

1. **Create a GitHub Account**
   - Go to https://github.com
   - Sign up for free

2. **Create a New Repository**
   ```
   - Click "+" in top right
   - Select "New repository"
   - Name it: "portfolio" or "your-name-portfolio"
   - Make it Public
   - Click "Create repository"
   ```

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag all files from Portfolio-Ai folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   ```
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click Save
   ```

5. **Access Your Site**
   - Wait 2-3 minutes
   - Your site will be at: `https://YOUR-USERNAME.github.io/REPO-NAME`

**Using Git (Alternative):**
```powershell
# In PowerShell, navigate to your portfolio folder
cd c:\Users\amirdhs\Desktop\Portfolio-Ai

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### 2. Netlify (Best for Continuous Deployment) ⭐⭐

**Pros:** Free, Drag-and-drop, Auto-deploy from GitHub, Custom domain
**Time:** 3 minutes

**Steps:**

1. **Sign Up**
   - Go to https://www.netlify.com
   - Sign up with GitHub/Email

2. **Deploy**
   
   **Option A - Drag & Drop:**
   ```
   - Click "Add new site" → "Deploy manually"
   - Drag your Portfolio-Ai folder
   - Done! You get instant URL
   ```

   **Option B - Connect GitHub:**
   ```
   - Click "Add new site" → "Import from Git"
   - Choose GitHub
   - Select your portfolio repository
   - Click "Deploy site"
   - Auto-deploys on every git push!
   ```

3. **Custom Domain (Optional)**
   ```
   - Domain settings → Add custom domain
   - Follow DNS configuration steps
   ```

**Your site URL:** `https://random-name-12345.netlify.app`
Can be changed to: `https://your-name.netlify.app`

---

### 3. Vercel (Great for React/Next.js) ⭐⭐

**Pros:** Free, Fast, GitHub integration, Great performance
**Time:** 3 minutes

**Steps:**

1. **Sign Up**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   ```
   - Click "Add New" → "Project"
   - Import from GitHub
   - Select your portfolio repo
   - Click "Deploy"
   ```

3. **Done!**
   - Your site: `https://your-portfolio.vercel.app`
   - Auto-deploys on git push

---

### 4. Render (Alternative) ⭐

**Pros:** Free, Simple, GitHub integration
**Time:** 5 minutes

**Steps:**
1. Go to https://render.com
2. Sign up with GitHub
3. New → Static Site
4. Connect repository
5. Deploy

---

### 5. Traditional Web Hosting

**For Shared Hosting (GoDaddy, Bluehost, HostGator, etc.):**

1. **Via FTP/SFTP:**
   ```
   - Get FTP credentials from hosting provider
   - Use FileZilla or similar FTP client
   - Upload all files to public_html/ or www/ folder
   - Ensure index.html is in root
   ```

2. **Via File Manager:**
   ```
   - Login to cPanel
   - Open File Manager
   - Navigate to public_html
   - Upload all files
   - Extract if needed
   ```

3. **Access Site:**
   - Your domain: `https://yourdomain.com`

---

## Custom Domain Setup

### For GitHub Pages:

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add CNAME file to repo with your domain
3. Configure DNS:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```

### For Netlify/Vercel:

1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions provided
4. Wait for DNS propagation (up to 48 hours)

---

## Pre-Deployment Checklist

- [ ] Replace all placeholder images with real ones
- [ ] Add your actual resume PDF
- [ ] Update all personal links (GitHub, LinkedIn)
- [ ] Test contact form
- [ ] Check all project links
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Check loading speed
- [ ] Verify all images load
- [ ] Test all navigation links
- [ ] Check responsive design
- [ ] Update meta descriptions for SEO
- [ ] Add Google Analytics (optional)
- [ ] Test form submission
- [ ] Verify email addresses are correct

---

## SEO Optimization

### Update Meta Tags (in index.html):

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="backend developer, python, fastapi">
<meta property="og:title" content="Amir Dehestani - Portfolio">
<meta property="og:description" content="Backend Developer & AI Specialist">
<meta property="og:image" content="URL to your image">
<meta property="og:url" content="Your website URL">
<meta name="twitter:card" content="summary_large_image">
```

### Submit to Search Engines:

1. **Google Search Console**
   - https://search.google.com/search-console
   - Add your site
   - Submit sitemap

2. **Bing Webmaster Tools**
   - https://www.bing.com/webmasters
   - Add your site

---

## SSL Certificate (HTTPS)

All recommended platforms provide free SSL:
- ✅ GitHub Pages: Automatic
- ✅ Netlify: Automatic
- ✅ Vercel: Automatic
- ✅ Render: Automatic

For traditional hosting:
- Use Let's Encrypt (free)
- Or hosting provider's SSL

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Resize to appropriate dimensions
   ```

2. **Minify CSS/JS (Optional):**
   ```
   - Use online minifier tools
   - Or build tools (webpack, gulp)
   ```

3. **Enable Caching:**
   - Most platforms do this automatically

---

## Analytics Setup (Optional)

### Google Analytics:

1. Create account: https://analytics.google.com
2. Get tracking code
3. Add before `</head>` in index.html:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Plausible Analytics (Privacy-friendly):
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Monitoring & Maintenance

### Regular Checks:
- [ ] Monthly: Check all links work
- [ ] Monthly: Update projects section
- [ ] Quarterly: Update resume
- [ ] Quarterly: Refresh certifications
- [ ] Annually: Review and update content

### Performance Monitoring:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

---

## Troubleshooting

### Site not loading:
- Wait for DNS propagation (up to 48 hours)
- Clear browser cache
- Check deployment logs
- Verify all files uploaded

### Images not showing:
- Check file paths (case-sensitive)
- Verify files uploaded
- Check file extensions

### Form not working:
- Configure form endpoint (see README.md)
- Check console for errors
- Verify email service setup

### Mobile not responsive:
- Test in browser dev tools
- Check viewport meta tag
- Verify CSS media queries

---

## Support & Resources

**Documentation:**
- GitHub Pages: https://docs.github.com/pages
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

**Community:**
- Stack Overflow
- Dev.to
- Reddit r/webdev

**Your Contact:**
- Email: amirmo800@gmail.com
- LinkedIn: linkedin.com/in/amir-dehestani

---

## Cost Breakdown

| Platform | Free Tier | Custom Domain | SSL |
|----------|-----------|---------------|-----|
| GitHub Pages | ✅ Yes | ✅ Yes | ✅ Free |
| Netlify | ✅ Yes | ✅ Yes | ✅ Free |
| Vercel | ✅ Yes | ✅ Yes | ✅ Free |
| Render | ✅ Yes | ✅ Yes | ✅ Free |

**Domain Cost:** $10-15/year (optional)

---

## Next Steps After Deployment

1. **Share your portfolio:**
   - Add to LinkedIn profile
   - Share on Twitter/X
   - Add to resume
   - Include in email signature

2. **Get feedback:**
   - Ask colleagues to review
   - Post in web dev communities
   - Test with different users

3. **Keep updating:**
   - Add new projects
   - Update skills
   - Refresh content regularly

4. **Monitor traffic:**
   - Set up analytics
   - Track visitor behavior
   - Optimize based on data

---

**🎉 Congratulations! Your portfolio is live!**

Share it with the world and land your dream job! 🚀

---

Built with ❤️ by Amir Dehestani | October 2025
