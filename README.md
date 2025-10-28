# Amir Dehestani - Portfolio Website

A modern, professional portfolio website showcasing my work as a Backend Developer, AI Developer, and Automation Specialist.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - Typewriter effect in hero section
  - Animated terminal window
  - Particle.js background animation
  - Smooth scroll navigation
  - Hover effects on cards and buttons
  - Form validation with real-time feedback
- **Sections**:
  - Hero/Home with animated background
  - About Me with professional summary
  - Tech Stack with categorized skills
  - Work Experience timeline
  - Featured Projects showcase
  - Certifications grid
  - Education details
  - Contact form with validation
- **Performance Optimized**: Fast loading, optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations, flexbox, and grid
- **JavaScript (ES6+)**: Interactive functionality
- **Particles.js**: Animated background effects
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Fira Code fonts

## 📁 Project Structure

```
Portfolio-Ai/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # All JavaScript functionality
├── assets/
│   ├── profile-placeholder.svg
│   ├── project-1.svg
│   ├── project-2.svg
│   ├── project-3.svg
│   ├── project-4.svg
│   ├── project-5.svg
│   ├── project-6.svg
│   └── resume.pdf         # Your resume PDF
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Direct Opening
1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! No build process required

### Option 2: Using a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Update Personal Information

1. **Contact Details** (`index.html`):
   - Update email, LinkedIn, GitHub links
   - Modify location information
   - Update phone number if needed

2. **Professional Summary** (`index.html`):
   - Edit the "About Me" section
   - Update work experience details
   - Modify certifications and education

3. **Colors** (`css/style.css`):
   ```css
   :root {
       --primary-color: #64ffda;    /* Main accent color */
       --accent-color: #f06449;     /* Secondary accent */
       --bg-primary: #0a192f;       /* Background color */
       --text-heading: #e6f1ff;     /* Heading text */
   }
   ```

4. **Projects**:
   - Replace project images in the `assets/` folder
   - Update project descriptions, technologies, and links in `index.html`

5. **Resume**:
   - Replace `assets/resume.pdf` with your actual resume

### Replace Placeholder Images

The current placeholders are SVG files. To use real images:

1. Add your images to the `assets/` folder (JPG, PNG, or WebP)
2. Update the image paths in `index.html`:
   ```html
   <!-- Change from -->
   <img src="assets/profile-placeholder.svg" alt="Amir Dehestani">
   
   <!-- To -->
   <img src="assets/profile-photo.jpg" alt="Amir Dehestani">
   ```

3. Recommended image sizes:
   - Profile photo: 400x400px
   - Project images: 800x450px (16:9 aspect ratio)

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional:

### Option 1: Using Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `js/script.js`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   });
   ```

### Option 2: Using EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their setup instructions
3. Update the form submission code accordingly

### Option 3: Custom Backend
Create your own backend API endpoint and update the fetch URL in `js/script.js`.

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select branch (usually `main`) and root folder
5. Save and wait for deployment
6. Your site will be at `https://username.github.io/repository-name`

### Netlify (Free)
1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Or connect your GitHub repository
4. Custom domain available

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Custom domain available

### Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Point your domain to the hosting

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Mobile Optimization

The site is fully responsive and tested on:
- iPhone (all models)
- iPad (all models)
- Android phones
- Android tablets

## ⚡ Performance Tips

1. **Optimize Images**: 
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate sizes (don't upload 4K images)

2. **Minimize Files**:
   - Use minified CSS/JS in production
   - Consider using a CDN for libraries

3. **Enable Caching**:
   - Configure your server to cache static assets

## 🐛 Troubleshooting

### Particles background not showing
- Check console for errors
- Ensure particles.js CDN is loading
- Check internet connection

### Form not submitting
- Check console for errors
- Ensure you've configured the form endpoint
- Check network tab for failed requests

### Animations not working
- Ensure JavaScript is enabled
- Check for console errors
- Try a different browser

## 📝 License

This project is open source and available for personal and commercial use.

## 📞 Contact

**Amir Dehestani**
- Email: amirmo800@gmail.com
- LinkedIn: [linkedin.com/in/amir-dehestani](https://linkedin.com/in/amir-dehestani)
- Location: Germany

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Particles.js for animated background
- Inspiration from modern portfolio designs

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add testimonials section
- [ ] Integrate GitHub API to show repositories
- [ ] Add project filtering
- [ ] Implement multi-language support
- [ ] Add loading animations
- [ ] Create an admin panel for easy updates

---

**Built with ❤️ by Amir Dehestani**

Last Updated: October 2025
