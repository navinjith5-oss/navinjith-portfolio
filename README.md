# Navinjith K — Premium Interactive Cybersecurity Portfolio & ATS Resume

A cinematic, interactive cybersecurity portfolio and ATS-friendly resume for **Navinjith K**, **EC-Council Certified SOC Analyst (CSA)**, targeting Tier 1 SOC Analyst and Cybersecurity Analyst opportunities.

---

## 🌟 Key Architecture & Experience

### 1. Minimalist Cinematic Homepage (`/`)
- **Uncluttered First Impression**: Features strictly **Navinjith K** in bold typography, headline, mission statement, futuristic orbital cyber telemetry visual (`CyberHeroVisual`), and two primary magnetic buttons:
  - **"Explore My Work"** &rarr; routes smoothly into `/projects`
  - **"Download Resume"** &rarr; routes directly into `/resume`
- **Zero Information Clutter**: No heavy project descriptions, skills walls, or education blocks dumping on the first screen.

### 2. Dedicated Multi-Page Navigation with Framer Motion
Every section has its own distinctive dedicated page with smooth page entrance animations and sliding navigation indicators:
- **Home** (`/`): Full-screen cinematic landing experience.
- **About Me** (`/about`): Narrative journey bridging Cyber Forensics (BCA) and MCA software systems, internship background, and defensive philosophy.
- **Projects** (`/projects`): Interactive security research gallery with 3D tilt cards featuring **SecureLoop AI**.
- **Case Study** (`/projects/secureloop-ai`): Substantive deep dive with architecture diagrams, reviewed FastAPI/Nuclei code snippets, Docker lab management, and honest engineering boundaries.
- **Skills** (`/skills`): Interactive Cybersecurity Skills Dashboard with category tabs and real-time search filtering.
- **Certifications** (`/certifications`): Interactive gallery with click-to-open modal detailing syllabus domains for EC-Council CSA, CICSA, and IBM certs.
- **Education** (`/education`): Interactive timeline of Cyber Forensics (Yenepoya University) and MCA (Adi Shankara Institute).
- **Experience** (`/experience`): Interactive timeline detailing the 8-month internship at RedTeam Hacker Academy, daily triage workflows, and SIEM tools.
- **Resume** (`/resume`): ATS-tested single-column resume viewer with direct PDF and DOCX downloads.
- **Contact** (`/contact`): Minimal, premium channels with one-click email copying and direct LinkedIn/GitHub links.

### 3. Motion & Microinteractions
- **Page Transitions**: Framer Motion smooth entrance glide.
- **Active Navigation Pill**: Slides behind the active route in the floating glassmorphic navbar.
- **3D Tilt Cards**: Spring-physics perspective shifts on hover (`TiltCard`).
- **Magnetic Buttons**: Spring-loaded cursor magnetic effect (`MagneticButton`).
- **Cyber Background**: Lightweight, interactive node constellation canvas with scanning telemetry beam.
- **Accessibility**: Full compliance with `prefers-reduced-motion` and keyboard navigation.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Test production build
npm run build

# 4. Regenerate or verify ATS resume files (PDF & DOCX)
python scripts/generate_resume.py
python scripts/verify_integrity.py
```

Open [http://localhost:3000](http://localhost:3000) to view the live portfolio.
