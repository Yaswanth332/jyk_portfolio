# Master Build Prompt — Yaswanth Krishna Portfolio

You are a senior product designer, portfolio strategist, and staff-level frontend engineer. Your task is to **upgrade the existing portfolio application** for **Jonnalagadda Yaswanth Krishna** into a polished, recruiter-focused engineering portfolio. This is not a generic template exercise. The site must communicate a clear professional identity, show credible technical depth, and make it easy for recruiters and engineering leads to verify projects, experience, and contact details.

## 0. Work in the existing codebase first

The existing repository is `https://github.com/Yaswanth332/Portfolio-`.

It is already a React + TypeScript + Vite application with reusable sections and project data. Inspect the whole codebase before changing anything. Preserve working components and useful behavior; refactor where needed rather than blindly replacing the app. Check the installed package versions and use the existing animation stack (`motion` is already installed) unless there is a strong reason to change it. Do not add a second animation library unnecessarily.

Before implementation:
1. Inspect `package.json`, `src/App.tsx`, `src/types.ts`, `src/data/portfolioData.ts`, all components, assets, CSS, and build configuration.
2. Identify broken imports, duplicate content, stale claims, placeholder links, and oversized or unnecessary dependencies.
3. Create a short implementation plan, then implement the complete working site.
4. Run the production build and TypeScript/lint checks. Fix errors you introduce. Do not claim a check passed unless you ran it.
5. Finish with a concise list of files changed, commands run, build result, and any details Yaswanth must still supply.

Do not expose secrets. Never commit `.env`, API keys, database credentials, private contact details, or local datasets containing personal information. Use `.env.example` with dummy values only.

## 1. Professional positioning

Present Yaswanth as:

**Aspiring Data Engineer | Python & SQL Developer | AI/ML Systems Builder**

The primary narrative is **Data Engineering and backend systems**, supported by applied AI/ML and practical software engineering. Do not position him as an expert in every technology or as a senior engineer. He is a final-year undergraduate with internship and project experience who is actively building deeper data engineering capability.

Use this core introduction:

> I’m Jonnalagadda Yaswanth Krishna, a final-year Computer Science and Engineering undergraduate at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole, graduating in 2027. I build Python backend applications, SQL-based data workflows, and applied AI systems. My work spans data ingestion, transformation, relational modelling, API development, and practical machine-learning applications. I’m currently focused on strengthening my Data Engineering and cloud foundations while building an Agentic SQL Analyst backed by PostgreSQL and Google Gemini.

Core facts to use:
- Name: **Jonnalagadda Yaswanth Krishna**
- Display name: **Yaswanth Krishna**
- Degree: **B.Tech, Computer Science and Engineering**
- Institution: **RGUKT Ongole, Andhra Pradesh, India**
- Graduation: **2027**
- CGPA: **9.3/10**
- Class XII: **9.93/10** (include only in the education detail, not as a hero headline)
- Location: **Ongole / Hyderabad, India**; do not imply he lives in both places simultaneously. Phrase as “Andhra Pradesh, India; open to opportunities in Hyderabad and elsewhere.”
- GitHub: `https://github.com/Yaswanth332`
- LinkedIn: **placeholder until Yaswanth confirms the exact profile URL**. Do not choose between similarly named LinkedIn profiles or reuse a guessed URL.
- LeetCode: **placeholder until Yaswanth supplies the exact profile URL/username**. Link to the public SQL practice repository in the meantime: `https://github.com/Yaswanth332/SQL-LeetCode-50`.
- Resume: use `/resume/Yaswanth_Krishna_Resume.pdf` only when that exact file exists. If it does not exist, show a clearly marked “Add resume PDF” TODO for the owner and do not create a fake download link.

Tone: technically clear, confident, specific, and grounded. Avoid buzzword-heavy claims such as “revolutionizing”, “enterprise-grade”, “production-ready AI”, “world-class”, “zero-knowledge” or “quantum-proof” unless implementation and evidence support them.

## 2. Personal photograph — use the supplied image

I will provide a real photograph of myself with this prompt. Use that exact supplied image as the portfolio portrait.

- Save the image as `public/images/yaswanth-krishna.jpg` (or preserve the original extension and update references consistently).
- Use the image in the hero and optionally a small About section portrait.
- Preserve my real appearance. Do not generate a replacement face, invent facial details, change identity, or apply cartoon/anime/AI-avatar styling.
- Do not make aggressive beauty edits. Use a clean crop, restrained lighting treatment, rounded rectangle or subtle circular frame, and a neutral dark background treatment.
- Use `object-fit: cover`, intentional `object-position`, and explicit width/height or aspect ratio to prevent layout shift.
- Provide meaningful alt text: `Portrait of Jonnalagadda Yaswanth Krishna`.
- If the supplied image is unavailable to the coding environment, create the asset path and a clearly labelled local placeholder; do not fetch a random stock person image.

## 3. Visual direction

Create a distinctive, premium engineering portfolio. Avoid the generic template look and avoid overloading every section with gradients and glowing effects.

**Design system**
- Background: `#09090B` or a similarly near-black neutral.
- Elevated surfaces: `#141418` / `#18181B`.
- Borders: `#27272A`.
- Primary accent: cyan `#06B6D4`.
- Secondary accent: emerald `#10B981`.
- Main text: near-white; secondary text: cool neutral gray.
- Typography: Plus Jakarta Sans or Inter for interface text; JetBrains Mono for code labels, terminal details, metadata, and technical tags.
- Use a consistent spacing scale, constrained content width, clear type hierarchy, and generous whitespace.
- Use glass effects sparingly on the sticky navbar and one or two hero surfaces only.

**Motion and interaction**
- Hero: tasteful staggered entrance for eyebrow, headline, summary, and CTAs; a restrained animated data-flow / node-grid background; terminal-style rotating or typing status text.
- Status terminal copy: `> Building an Agentic SQL Analyst with PostgreSQL + Gemini`.
- Add a thin scroll-progress indicator at the top.
- Use scroll-triggered reveals with `IntersectionObserver` or the installed Motion library. Respect `prefers-reduced-motion` and provide a static fallback.
- Project cards: subtle lift, border tint, and restrained pointer-follow highlight. Do not use strong 3D tilt that harms readability or mobile usability.
- Architecture details: accessible modal/dialog with Escape handling, focus management, visible close control, and scroll containment.
- Skills: filterable categories and clear proficiency labels; tooltips must also work on keyboard focus.
- No cursor hijacking, no scroll hijacking, no autoplay video, and no heavy WebGL/canvas effect that harms mobile performance.

## 4. Required page structure

### A. Sticky navigation

- Left: `YK.dev` monogram in JetBrains Mono.
- Links: About, Experience, Projects, Skills, Achievements, Contact.
- Right: GitHub, LinkedIn (placeholder), and Resume CTA (only active when a real PDF exists).
- Mobile: accessible menu with proper focus and close behavior.
- Active section state should be subtle and must not cause layout shifts.

### B. Hero

Eyebrow/status:

`OPEN TO DATA ENGINEERING, PYTHON BACKEND & AI/ML INTERNSHIPS`

Main heading:

`Hi, I’m Yaswanth Krishna.`

Supporting line:

`I build data pipelines, Python backend systems, and practical AI applications.`

Summary:

`Final-year CSE undergraduate at RGUKT Ongole (2027), with a 9.3/10 CGPA and three months of software development internship experience. Interested in turning raw data and complex workflows into reliable, useful systems.`

Primary CTA: `Explore Projects` (scrolls to projects).
Secondary CTA: `GitHub Profile` (opens the real GitHub URL).
Optional third CTA: `Download Resume` only if a real PDF is included.

Display supplied photo beside the hero content on desktop and above/below the text naturally on mobile. Include a compact “currently building” terminal card, not a fake live system status.

### C. Recruiter snapshot / at-a-glance

Use three or four restrained cards:
- `9.3/10` — B.Tech CSE CGPA
- `3 months` — Software Development Internship
- `2027` — Expected graduation
- `AQVH Runner-Up` — Competition achievement

Do not invent counts for users, records processed, performance gains, uptime, stars, ranking, or production impact. Project-specific dataset counts may be shown only where described below and clearly labelled as locally generated/sample data.

### D. About

Use the core introduction above, followed by a concise “How I work” set of points:
- I prefer understanding the complete data flow: source, ingestion, transformation, storage, and consumption.
- I value SQL fundamentals, readable Python, explicit validation, and clear system boundaries.
- I’m strengthening problem-solving and cloud foundations through consistent practice and hands-on projects.

Do not say “mastered advanced SQL” or “expert in distributed systems”.

### E. Experience timeline

**Software Development Intern — CodeTantra**  
Hyderabad, India · 3 months · 2026 (use June–August 2026 only if confirmed against the offer/experience letter; otherwise display `2026 · 3 months`)

Use accurate, concise bullets based on the work performed:
- Contributed to an education and examination-management platform in a production codebase.
- Implemented validation behavior for evaluation-rule workflows in React.
- Built an Evaluation Assignment Rule interface in SolidJS and integrated it with Java backend APIs and MongoDB-backed configuration.
- Investigated and fixed issues in Evaluation Playground and evaluation/scheduling workflows, including navigation, rendering, and schedule-change validation.
- Worked with JavaScript/TypeScript, React, SolidJS, Java/JSP, REST APIs, MongoDB, and Git.

Describe the role as **Software Development Intern** unless the official title on the internship letter differs. Do not inflate this into sole ownership of the platform or claim architecture leadership.

**Other programs / campus involvement**
- Add WISER Summer Program (2026) and Internshala Student Partner (2025) only if Yaswanth provides/has a verifiable certificate, selection email, or clear evidence. Until confirmed, do not display them as completed professional employment.
- Include Smart India Hackathon (SIH) 2025 team leadership in Achievements, not as paid employment.

### F. Featured projects — strongest evidence first

Use a responsive bento grid with filter tabs: `All`, `Data Engineering`, `AI / ML`, `Backend & Systems`, `Research`.
Each project card must show: one-sentence problem, what was built, verified stack, current status, GitHub link, and an accessible `Architecture` detail modal. Add a live-demo link only when an actual deployment URL is provided. Never fabricate metrics or demo links.

**1. Agentic SQL Analyst — In Progress / Current Build**  
Repository: not yet confirmed as public; use `#` with a code comment `TODO: add public repository URL after publishing`.

Description:
A Python-based natural-language database assistant being developed to inspect PostgreSQL schema metadata, use database context to draft SQL, and validate model output before execution. The application uses the Google Gemini API and a configurable response budget. The project includes a generated ride-sharing dataset and PostgreSQL ingestion utilities.

Known implementation context:
- Python, Google Gemini API, PostgreSQL, `psycopg2`, Pydantic, `python-dotenv`.
- Dataset generation/seeding currently covers 600 users, 300 vehicles, 500 rides, 500 payments, and 500 ratings (2,400 generated rows in total). Label these as synthetic/local development data, not real users or production throughput.
- Uses PostgreSQL metadata/schema inspection and `COPY ... FROM STDIN` / `copy_expert` for bulk loading where present in code.
- Model response budgets are planned/configured as 1,024 / 2,048 / 4,096 tokens; label as selectable response settings only if implemented in the current code.
- A `Pydantic` schema/model integration is under active development. Do not claim robust SQL execution or full agent autonomy until the implementation and tests verify it.
- Do not list LangChain unless it is actually imported and used in the current repository.

Architecture view should distinguish `Implemented` from `Planned`: user question → schema introspection → model-generated SQL draft → Pydantic/SQL validation → controlled execution → result explanation. Only mark a stage as implemented after reading the code. For any execution stage, recommend read-only database credentials, SELECT-only validation, query timeout, row limits, and denial of DDL/DML by default. Do not state these safeguards exist unless implemented.

**2. Retail Data Warehouse Pipeline**  
GitHub: `https://github.com/Yaswanth332/Data-Engineering-`

Description:
A data pipeline that accepts retail CSV data through a FastAPI endpoint, retains a raw/Bronze copy, processes and normalizes records with Pandas, loads structured tables into MySQL using SQLAlchemy, and exposes analytics through Streamlit. The repository describes asynchronous background processing and a dimensional model with customer/product dimensions and a sales fact table.

Stack: Python, FastAPI, Pandas, SQLAlchemy, MySQL, Streamlit.

Important accuracy note: the repository README describes AWS S3 as a simulated workflow. Do not describe the project as a deployed AWS lakehouse or claim real S3 production ingestion unless the source code and deployment prove it. Do not expose the repository's tracked `.env`; advise removing it, rotating any exposed credentials, and cleaning Git history before featuring the repo.

**3. PostgreSQL SQL Data Warehouse**  
GitHub: `https://github.com/Yaswanth332/Sql-DataWareHouse-Project-`

Description:
A PostgreSQL-based warehouse that ingests CSV source data, separates raw Bronze, cleaned Silver, and analytics-oriented Gold layers, applies data-quality checks, and models fact/dimension relationships using a Star Schema.

Stack: PostgreSQL, SQL, Medallion architecture, Star Schema, data quality validation.

**4. QuMail — Quantum-Inspired Secure Email Prototype**  
GitHub: `https://github.com/Yaswanth332/QuMail`

Description:
A hackathon prototype exploring secure email workflows with encryption and simulated quantum-randomness / QKD concepts. Project documentation describes AES-GCM encryption, Qiskit-based quantum simulation, and ephemeral-key handling.

Stack: Python, Qiskit, cryptography, backend APIs, React, Docker (verify exact components against source before displaying all tags).

Critical wording: this is a **simulated quantum / cryptographic prototype**, not a deployed quantum network, production QKD system, or proven unbreakable service. Do not call it “zero-knowledge” unless the actual threat model and code support that term. Do not claim the hackathon award was specifically won by this project unless the award record says so.

**5. AGRISMART — Crop Recommendation & Soil Analysis**  
GitHub: `https://github.com/Yaswanth332/AGRISMART/tree/yaswanth`

Description:
A Django application that combines soil parameters, weather context, and machine-learning predictions to support crop recommendations. The repository documents soil inputs, crop reference data, a dashboard, and OCR-related workflows.

Stack: Python, Django, scikit-learn, Pandas, NumPy, Tesseract OCR, weather API. Verify whether the current branch uses SQLite before stating the database.

**6. Credit Card Customer Churn Prediction**  
GitHub: `https://github.com/Yaswanth332/credit-card-churn-analysis-App`

Description:
An end-to-end classification project involving data cleaning, feature engineering, SMOTE class balancing, model comparison/tuning, and a Streamlit interface. The repository README reports selected-model metrics of 95.36% accuracy, 81.23% precision, 92.66% recall, and 86.57% F1. Attribute these as repository-reported results and do not present them as independently audited production performance.

Stack: Python, Pandas, scikit-learn, XGBoost, SMOTE, Streamlit, Joblib.

**7. Road Crack Detection — Research Project**  
Use as a research project only if the corresponding repository, report, or project documentation is present. The project is associated with faculty guidance from P. Sindhu. The supplied project brief mentions segmentation, SAM-assisted pseudo-labelling, and OpenCV ArUco calibration for physical measurements; verify the exact implemented methods before publishing them. Do not claim measured crack-width accuracy or field deployment without evidence.

**8. Dockerized Node.js Application & Jenkins CI Pipeline**  
GitHub: `https://github.com/Yaswanth332/Task_1` and `https://github.com/Yaswanth332/Task_2_Jenkins_Pipeline`

Description:
A DevOps practice project covering a containerized Node.js application, Docker build/run workflow, automated tests, and a Jenkins pipeline. The documented local test suite had three passing tests. Do not imply large-scale production deployment.

Stack: Node.js, Docker, Docker Compose, Jenkins, GitHub.

Do not add the proposed Fake News Detector / RoBERTa / React dashboard unless a real repository and working implementation are supplied. It is not currently verified as a public project.

### G. Skills — categorized and honest

Create filterable groups. Use three levels: `Used in projects`, `Working knowledge`, `Currently learning`. Do not use percentage proficiency bars.

**Programming & Querying**
- Python, SQL, Java, JavaScript
- DSA / problem solving: arrays, hashing, two pointers, stacks; continue to build consistency across core patterns.

**Data Engineering & Databases**
- PostgreSQL, MySQL, SQLite, Pandas, SQLAlchemy
- CSV/API ingestion, ETL concepts, data cleaning, validation, Bronze/Silver/Gold layers, Star Schema, relational modelling

**Backend & APIs**
- FastAPI, Django, REST APIs, Pydantic, `psycopg2`

**AI / ML / Computer Vision**
- scikit-learn, XGBoost, Pandas, OpenCV, Tesseract OCR, Whisper; Qiskit for quantum simulation concepts
- Google Gemini API in the current Agentic SQL project

**Cloud, DevOps & Tools**
- AWS fundamentals (EC2, S3, RDS, IAM, CloudWatch, VPC — mark as fundamentals/learning where appropriate), Docker, Jenkins, Linux, Git, GitHub

**Frontend exposure**
- React, SolidJS, TypeScript, HTML/CSS, Tailwind CSS

Do not list Spark, Kafka, Airflow, dbt, Supabase, Ollama, YOLOv8, LangChain or PyTorch as core skills unless they are verified in a project/course and correctly labelled as learning or experimental.

### H. Problem-solving / LeetCode / SQL practice

Add a compact “Problem Solving” section instead of fake competitive-programming statistics.

- Link the verified SQL practice repository: `https://github.com/Yaswanth332/SQL-LeetCode-50`.
- Mention continued DSA practice across arrays, hashing, two pointers, and stacks, with a focus on revisiting patterns and improving complexity analysis.
- Add LeetCode profile only after the exact username/URL is supplied.
- Do not invent LeetCode rating, contest ranking, solved count, streak, or badges. If live stats are unavailable, use a manually maintained progress description.

### I. Education, achievements, certifications

**Education — RGUKT Ongole**
- B.Tech CSE, 2023–2027, CGPA 9.3/10.
- Class XII 9.93/10 and Class X 10/10 may be shown in an expandable academic detail row.

**Achievements**
- Runner-Up — Amaravathi Quantum Valley Hackathon (AQVH), 2025. Include “Problem Statement 1” only if the certificate/result clearly confirms it.
- Team Lead — Smart India Hackathon (SIH) 2025; led a 6-member team.
- Add TCS CodeVita Season 13 qualification, Adobe India Hackathon 2025, WISER Summer Program, Internshala Student Partner, and Google Local Guide only if Yaswanth supplies evidence or explicitly confirms the exact distinction. Keep unverified items out of the published page by default.

**Certifications**
- NPTEL Cloud Computing — 95% (use the exact course title and certificate issuer from the certificate).
- APSCHE Cloud Computing Fundamentals.
- APSSDC Cloud & DevOps.
- LinkedIn Django certificate.

Do not invent dates, credential IDs, certificate URLs, or issuers. Add credential links only when supplied.

### J. Contact and footer

Build a terminal-inspired but accessible contact panel with:
- `mailto:` email only after confirming the preferred public email address.
- One-click copy email control with visible “Copied” feedback.
- GitHub link to `https://github.com/Yaswanth332`.
- LinkedIn placeholder to be replaced with Yaswanth’s confirmed URL.
- Resume link only when the actual PDF exists.
- Do not publish the personal phone number by default. Add it only with explicit approval.

Footer text:

`Engineered by Jonnalagadda Yaswanth Krishna · Built with care and precision.`

## 5. Technical implementation requirements

- React + TypeScript + Vite; keep component boundaries clean and data separate from presentation.
- Use the already-installed styling and motion dependencies after checking versions. Avoid unnecessary dependencies.
- Responsive at 360px mobile, tablet, laptop, and wide desktop. No horizontal overflow.
- Semantic HTML, keyboard navigation, visible focus rings, accessible dialogs, correct contrast, descriptive image alt text, and reduced-motion support.
- Avoid layout shift: reserve image dimensions, avoid injecting late content above the fold, and use stable card heights where practical.
- Performance: lazy-load below-the-fold images, optimize the supplied image, minimize expensive effects, avoid large animation loops, and keep the hero lightweight.
- SEO: unique title/description, Open Graph metadata, favicon, canonical placeholder only if a real deployment domain exists, and basic `robots.txt` / `sitemap.xml` when a deployment URL is known.
- Add clear code comments for owner-supplied values:
  - `TODO: paste confirmed LinkedIn profile URL`
  - `TODO: paste confirmed LeetCode profile URL`
  - `TODO: add resume PDF`
  - `TODO: add live demo URL`
  - `TODO: verify program / award evidence`
- Do not put literal `#` links on visible buttons. Until a URL exists, render a disabled state or omit the CTA; keep the code TODO.
- Use real project GitHub URLs from this prompt. Open external links safely with `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the site deployable on GitHub Pages, Vercel, or Netlify; document the simplest build/deploy path in README.

## 6. Project modal / architecture diagrams

Each architecture modal should present a small, readable flow built from the actual project stages. Prefer lightweight CSS/SVG or a simple accessible list over a heavy graph library. Distinguish implemented components from planned components with badges and text labels. Include:
- Problem
- Data / input source
- Processing stages
- Storage / serving layer
- Validation, reliability, or security considerations
- What I personally implemented

Do not draw infrastructure boxes that the project does not use. Do not present conceptual recommendations as implemented features.

## 7. Required quality checks and handover

Before calling the work complete:
1. Run the production build.
2. Run TypeScript/lint checks available in the package scripts.
3. Check mobile and desktop layout, navigation, modals, project filters, copy-email behavior, and resume handling.
4. Confirm every internal and external link points to the correct destination or is visibly disabled with a TODO.
5. Confirm the supplied photo loads and has no layout shift.
6. Confirm `dist/` is generated and no secrets are included.
7. Report honestly what passed, what could not be tested, and what information remains for Yaswanth to provide.

**Definition of done:** a fully working, responsive, polished portfolio that presents a credible 2027 CSE graduate with a clear Data Engineering direction; truthful project case studies; useful experience and achievement details; a real portrait supplied by Yaswanth; and no fabricated profile metrics, job claims, awards, deployment URLs, or technical capabilities.
