# Yaswanth Krishna — Portfolio

A polished, recruiter-focused engineering portfolio for **Jonnalagadda Yaswanth Krishna**, graduating CSE undergraduate at RGUKT Ongole (2027) focused on **Data Engineering, Python Backend, and Applied AI Systems**.

Built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be running at `http://localhost:3000`.

### Production Build & Linting

```bash
# Run TypeScript type-checking
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Project Structure

```
├── public/
│   ├── images/
│   │   └── yaswanth-krishna.jpg   # Real portfolio photograph
│   ├── resume/                    # Place Yaswanth_Krishna_Resume.pdf here
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky header with monogram & status links
│   │   ├── Hero.tsx               # Primary introduction, photo & terminal card
│   │   ├── RecruiterAuditBar.tsx  # 4-card at-a-glance recruiter snapshot
│   │   ├── About.tsx              # Positioning & "How I Work" principles
│   │   ├── Experience.tsx         # CodeTantra software development internship
│   │   ├── Projects.tsx           # Bento grid of verified projects
│   │   ├── ProjectModal.tsx       # Accessible architecture pipeline modal
│   │   ├── Skills.tsx             # Honest, categorized skill breakdown
│   │   ├── ProblemSolving.tsx     # SQL-LeetCode-50 repo & DSA practice
│   │   ├── EducationAchievements.tsx # RGUKT Ongole, AQVH, SIH, certifications
│   │   ├── GitHubSection.tsx      # Open source repositories showcase
│   │   ├── Contact.tsx            # Email copy & direct inquiry form
│   │   ├── ResumeModal.tsx        # Single-page ATS resume viewer
│   │   └── Footer.tsx             # Engineering statement & links
│   ├── data/
│   │   └── portfolioData.ts       # Central verified portfolio content
│   ├── types.ts                   # Type definitions
│   ├── App.tsx                    # Top-level application layout
│   └── main.tsx                   # Vite entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📌 Items for Yaswanth to Supply / Confirm

The codebase includes clear code comments for items awaiting your confirmation:
1. **LinkedIn Profile URL:** Replace the placeholder in `src/data/portfolioData.ts` (`TODO: paste confirmed LinkedIn profile URL`).
2. **LeetCode Profile URL:** Replace the placeholder in `src/data/portfolioData.ts` (`TODO: paste confirmed LeetCode profile URL`).
3. **Resume PDF:** Place your official PDF resume at `public/resume/Yaswanth_Krishna_Resume.pdf` and set `hasResumePdf: true` in `src/data/portfolioData.ts`.
4. **Agentic SQL Analyst Public Repo:** Once the repository is published on GitHub, update the repository URL in `src/data/portfolioData.ts`.

---

## 🌐 Deployment

### GitHub Pages
1. In `vite.config.ts`, ensure `base: '/Portfolio-/'` (or your chosen repository name).
2. Run `npm run build`.
3. Deploy the `dist/` directory via GitHub Pages action or branch.

### Vercel / Netlify
1. Connect your repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`

---

## 📄 License

Engineered by Jonnalagadda Yaswanth Krishna · Built with care and precision.
