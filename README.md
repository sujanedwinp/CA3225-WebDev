# HTML Testing Project

A collection of HTML pages demonstrating various web development concepts and techniques. This project includes a dynamic navigation system and is ready for deployment on Vercel.

## 🚀 Live Demo

[View Live Demo](https://your-vercel-app.vercel.app)

## 📁 Project Structure

```
html-testing/
├── api/
│   ├── all-pages/          # All HTML files
│   │   ├── index.html      # Main timetable page
│   │   ├── page-navi.html  # Navigation hub
│   │   ├── basic-profile-page.html
│   │   ├── first-page.html
│   │   ├── header-tags.html
│   │   ├── images-tag.html
│   │   ├── lists-tag.html
│   │   ├── para-links-tag.html
│   │   └── coffee-reserve-form.html
│   └── index.js            # API handler
├── server.js               # Express server
├── package.json
├── vercel.json            # Vercel configuration
└── README.md
```

## 🛠️ Features

- **Dynamic Navigation**: 4-column responsive grid showing all pages
- **Easy Page Management**: Add new pages without editing HTML manually
- **Vercel Ready**: Configured for instant deployment
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful gradient design with hover effects

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/html-testing.git
   cd html-testing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Deploy!

## 📝 Adding New Pages

### Method 1: Edit page-navi.html (Recommended)

1. Open `api/all-pages/page-navi.html`
2. Find the `pagesConfig` array in the JavaScript section
3. Add a new object:

```javascript
{
    name: "Your Page Name",
    demoUrl: "your-page.html",
    githubUrl: "https://github.com/yourusername/html-testing"
}
```

### Method 2: Using Environment Variables

```bash
HTML_FILE=api/all-pages/your-page.html npm run dev
```

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

## 🔧 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run dev:custom` - Start with custom HTML file

## 🌐 Deployment

This project is configured for:
- **Vercel** (Primary) - Serverless deployment
- **Heroku** - Traditional hosting
- **Netlify** - Static hosting

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
