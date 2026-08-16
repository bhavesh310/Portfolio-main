<div align="center">

# 🚀 Bhavesh Ghatode — Portfolio

### Full Stack Developer

A cinematic, single-page developer portfolio built with React and Vite — featuring a video hero, scroll-triggered animations, and a bold red/black design language throughout.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AOS](https://img.shields.io/badge/AOS-Animate_On_Scroll-FF2A2A?style=for-the-badge)](https://michalsnik.github.io/aos/)

**[Live Site →](https://bhaveshghatodeportfolio.netlify.app/)** &nbsp;·&nbsp; **[Connect on LinkedIn](https://www.linkedin.com/in/bhavesh-kumar-4466a3276/)**

</div>

---

## 📌 Overview

This is my personal developer portfolio — a single-page React application designed to feel less like a template and more like a cinematic pitch reel. It combines a full-screen video hero, scroll-driven reveal animations, and a consistent red-on-black design system to present my work, skills, and experience in a way that's memorable rather than generic.

Every section is a fully independent, self-contained component — meaning the entire page can be reordered, extended, or trimmed down without touching unrelated parts of the codebase.

---

## ⚡ Highlights

| | |
|---|---|
| **12+ sections** | Hero, About, Education, Skills, Services, Projects, Internships, Certificates, Soft Skills, Contact |
| **100% component-driven** | Every section is isolated — add, remove, or reorder without side effects |
| **Scroll-triggered animations** | Powered by AOS, staggered for a polished, sequential reveal |
| **Custom video hero** | Full-bleed background video with play/pause controls and gradient overlays for readability |
| **Fully responsive** | Mobile-first layouts across every section, from the hero to the contact form |

---

## 🚀 Features

- **🎬 Cinematic Video Hero** — Full-screen background video with playback controls, animated scroll indicator, and floating social links
- **🪪 ID Badge-Style About Section** — A hanging lanyard-card visual metaphor for the personal introduction
- **🎓 Education Timeline** — Academic background presented as clean, individual cards
- **🛠️ Technical Skills Showcase** — Categorized display of languages, frameworks, and tools
- **💼 Project Spotlight** — Flagship and secondary projects with tech tags, live demo links, and GitHub repos
- **🧳 Work Experience Cards** — Internship and freelance roles with skills gained and technologies used, uniformly aligned regardless of content length
- **📜 Certifications Grid** — Industry-recognized credentials with a "View All" call-to-action
- **🤝 Soft Skills Grid** — Core competencies presented as icon-led cards
- **📬 Contact Section** — Direct contact form with permission checkbox and email fallback
- **🌊 Seamless Section Transitions** — Torn-paper SVG dividers between sections, color-matched to create a continuous visual flow rather than hard cuts

---

## 🏗️ Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Frontend Framework | React 18 | Component-driven UI, declarative rendering |
| Build Tool | Vite | Fast HMR, instant dev server startup |
| Styling | Tailwind CSS | Utility-first styling, consistent design tokens |
| Animations | AOS (Animate on Scroll) | Lightweight scroll-triggered reveal animations |
| Icons | Inline SVG | Crisp, dependency-free iconography |
| Linting | ESLint | Consistent code quality across components |

---

## 📂 Project Structure

```
portfolio/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, hero video, logos
│   │   ├── about/                # Badge photo, tech logos (React, Node, MongoDB)
│   │   └── hero video/           # Background hero video
│   ├── components/
│   │   ├── Preloader.jsx         # Initial loading screen
│   │   ├── Navbar.jsx            # Sticky navigation
│   │   ├── Hero.jsx              # Video hero with CTA buttons
│   │   ├── About.jsx             # Bio, education, tech stack
│   │   ├── TechnicalSkills.jsx   # Skills showcase
│   │   ├── Services.jsx          # Services offered
│   │   ├── Projects.jsx          # Project portfolio
│   │   ├── Internships.jsx       # Work experience cards
│   │   ├── Certificates.jsx      # Certifications grid
│   │   ├── SoftSkills.jsx        # Core competencies
│   │   ├── Contact.jsx           # Contact form
│   │   └── Footer.jsx            # Footer
│   ├── data/
│   │   └── portfolioData.js      # Centralized content — bio, projects, education, socials
│   ├── App.jsx                    # Section composition & ordering
│   └── main.jsx                    # Application entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎯 Design Philosophy

- **Content lives in one place.** Nearly all page text, links, and structured data (bio, projects, internships, education, certifications) is centralized in `src/data/portfolioData.js` — updating content never requires touching component logic.
- **Sections are disposable.** Every section is composed in `App.jsx` as a standalone import — removing or reordering a section is a two-line change with zero risk to the rest of the page.
- **Color-matched transitions.** Divider shapes between sections always match the color of the section *above* them, creating the illusion of one background flowing into the next rather than abrupt section breaks.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bhavesh310/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev        # Start dev server (Vite)
npm run build       # Production build
npm run preview     # Preview production build locally
npm run lint         # Run ESLint
```

---

## ✏️ Editing Content

Almost everything on the site is driven by `src/data/portfolioData.js`. To update:

- **Hero text & CTAs** → `heroContent`
- **Bio & tech stack** → `aboutContent`
- **Education** → `education`
- **Work experience** → `internshipsList`
- **Projects** → `projects`
- **Social links** → `socialLinks`

No component code changes are needed for standard content updates — just edit the data file.

---

## 🚢 Deployment

### Deploy to Netlify

```bash
npm run build
```
Drag and drop the `dist/` folder onto [Netlify](https://netlify.com), or connect your GitHub repo for continuous deployment.

### Deploy to Vercel

```bash
npm run build
```
Push to GitHub and import the repo on [Vercel](https://vercel.com) — it auto-detects Vite. No extra configuration needed.

---

## 📄 License

This project is **private and proprietary**. All rights reserved.

---

## 👤 Author

**Bhavesh Ghatode** — Full Stack & Java Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhavesh-kumar-4466a3276/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bhavesh310)

---

<p align="center">
  <i>Designed, built, and deployed solo.</i>
</p>
