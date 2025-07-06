# HTML Testing Project

A collection of HTML pages demonstrating various web development concepts and techniques. This project includes a dynamic navigation system and is ready for deployment on Vercel as a static site.

## 🚀 Live Demo

[View Live Demo](https://your-vercel-app.vercel.app)

## 📁 Project Structure

```
html-testing/
├── api/
│   └── all-pages/          # All HTML files, CSS, and assets
│       ├── index.html      # Main timetable page
│       ├── page-navi.html  # Navigation hub
│       ├── basic-profile-page.html
│       ├── first-page.html
│       ├── header-tags.html
│       ├── images-tag.html
│       ├── lists-tag.html
│       ├── para-links-tag.html
│       └── coffee-reserve-form.html
├── vercel.json             # Vercel configuration
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
2. **Open `api/all-pages/index.html` in your browser**
   (Or use a local static server like `npx serve api/all-pages`)

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

**Vercel will serve `/` as `api/all-pages/index.html` and all other HTML files in `api/all-pages/` are accessible directly.**

## 📝 Adding New Pages

1. Add your HTML file to `api/all-pages/`
2. Edit `api/all-pages/page-navi.html` and add your page to the `pagesConfig` array

## 🎨 Customization

### Styling
- Main styles are in the `<style>` sections of each HTML file
- The navigation page uses a modern gradient design
- All pages are responsive and mobile-friendly

### Colors
- Primary: `#4CAF50` (Green)
- Secondary: `#667eea` to `#764ba2` (Gradient)
- Text: `#333` (Dark Gray)

## 📱 Pages Included

1. **Class Timetable** - BCA Semester 3 timetable
2. **Basic Profile Page** - Personal information display
3. **First Page** - Simple welcome page
4. **Header Tags** - HTML heading examples
5. **Images Tag** - Image display examples
6. **Lists Tag** - Ordered and unordered lists
7. **Paragraphs and Links** - Text and link examples
8. **Coffee Reserve Form** - Interactive form with styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact: your-email@example.com

---

**Made with ❤️ for web development learning**
