# 🌐 Bipin's Web Portfolio — Node.js & EJS

A professional, server-side rendered (SSR) portfolio website built to showcase my web development journey, technical projects, and skills as an aspiring full-stack developer.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen)](https://memoapp-8eb2.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](#)

---

## 📸 Preview

> Visit the live site: [https://memoapp-8eb2.onrender.com](https://memoapp-8eb2.onrender.com)

---

## ✨ Features

- **Server-Side Rendering (SSR)** — Pages rendered with EJS for fast, SEO-friendly delivery
- **Responsive Design** — Fully optimized for both mobile and desktop using CSS Flexbox & Grid
- **Reusable Partials** — Modular EJS components (Navbar, Footer) for clean, maintainable code
- **Dynamic Routing** — Express.js handles routing cleanly and efficiently
- **CI/CD Deployment** — Automatically deployed to Render on every push to `main`
- **Git Version Control** — Full project history managed with GitHub

---

## 🛠 Tech Stack

| Category         | Technology                        |
|------------------|-----------------------------------|
| Runtime          | Node.js                           |
| Framework        | Express.js                        |
| Template Engine  | EJS (Embedded JavaScript)         |
| Styling          | CSS3 (Flexbox & Grid)             |
| Deployment       | Render (CI/CD)                    |
| Version Control  | Git / GitHub                      |

---

## 📁 Project Structure

```
portfolio/
├── views/                  # EJS templates
│   ├── partials/
│   │   ├── navbar.ejs      # Reusable navigation bar
│   │   └── footer.ejs      # Reusable footer
│   └── index.ejs           # Main portfolio page
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   └── images/             # Images & icons
├── app.js                  # Express server entry point
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started (Run Locally)

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Blon11-ux/portfolio.git

# 2. Navigate into the project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
node app.js
```

Then open your browser and visit: `http://localhost:3000`

---

## 🌍 Deployment

This project is deployed on **[Render](https://render.com)** with automatic CI/CD.  
Every push to the `main` branch triggers an automatic redeploy.

**Live URL:** [https://memoapp-8eb2.onrender.com](https://memoapp-8eb2.onrender.com)

---

## 👤 Author

**Bipin**  
📧 [Your Email Here]  
🐙 GitHub: [@Blon11-ux](https://github.com/Blon11-ux)  
🌏 Based in Hokkaido, Japan

---

## 📄 License

This project is licensed under the MIT License.

---

> *Built with passion and curiosity as part of my journey into web development in Japan. 🇯🇵*
