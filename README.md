# HTML Testing Project

A collection of HTML pages demonstrating various web development concepts and techniques. This project includes a dynamic navigation system and is ready for deployment on Vercel as a static site.

## 🚀 Live Demo

[View Live Demo](https://bcatt.vercel.app)

## 📁 Project Structure

```
html-testing/
├── public/                # All HTML files, CSS, and assets
│   ├── index.html         # Main timetable page
│   ├── page-navi.html     # Navigation hub
│   ├── basic-profile-page.html
│   ├── first-page.html
│   ├── header-tags.html
│   ├── images-tag.html
│   ├── lists-tag.html
│   ├── para-links-tag.html
│   └── coffee-reserve-form.html
├── vercel.json            # Vercel configuration
└── README.md
```

## 🛠️ Features

- **Dynamic Navigation**: Responsive grid showing all pages
- **Easy Page Management**: Add new pages by editing `page-navi.html`
- **Vercel Ready**: Configured for instant static deployment
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful gradient design with hover effects

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/html-testing.git
   cd html-testing
   ```
2. **Open `public/index.html` in your browser**
   (Or use a local static server like `npx serve public`)

### Vercel Deployment (Static Hosting)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for static deployment"
   git push origin main
   ```
2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Deploy!

**Vercel will serve `/` as `public/index.html` and all other HTML files in `public/` are accessible directly.**

## 📝 Adding New Pages

1. Add your HTML file to `public/`
2. Edit `public/page-navi.html` and add your page to the `pagesConfig` array
