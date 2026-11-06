# Navinjith K — Cybersecurity Portfolio & ATS Resume System

A modern, high-performance portfolio and ATS-friendly resume built for **Navinjith K**, **EC-Council Certified SOC Analyst (CSA)**, targeting Tier 1 SOC Analyst and Cybersecurity Analyst opportunities.

---

## 🛡️ Key Features

- **Flagship Project — SecureLoop AI**:
  - Dedicated interactive case study at `/projects/secureloop-ai`
  - Clear architectural separation between the **Public Scanner Implementation** (FastAPI, Nuclei, JSONL, React, Docker lab management) and the **Separate AI Prototype** (Groq LLM, rule-based CWE matching, PostgreSQL)
  - Code-supported functionality with direct GitHub deep links to audited files
  - Transparent limitations and honest future roadmap (labeled as future directions, not achievements)
- **Earned EC-Council Certified SOC Analyst (CSA)**:
  - Featured prominently across hero, navigation, experience, credentials, and resume
  - Completely purged outdated "Aspiring" references
- **ATS-Optimized Resume Suite**:
  - Live interactive web resume view at `/resume`
  - Pixel-perfect, single-column **ATS-tested PDF** (`/public/Navinjith_K_Resume.pdf`)
  - Genuine **editable DOCX** file (`/public/Navinjith_K_Resume.docx`)
  - Both generated from a single typed source of truth (`src/data/portfolioData.ts`)
- **Cybersecurity Dark UI**:
  - Charcoal/navy palette (`#080c14`, `#0f172a`, `#1e293b`) with restrained cyan/teal accents
  - Lightweight decorative defensive topology diagram (explicitly labeled decorative)
  - Accessible focus states, keyboard navigation, and `prefers-reduced-motion` compliance
  - Interactive navigation console (`Ctrl+K`) for rapid command-line jump navigation
  - Zero-latency email copy button with visual confirmation

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Generate or Update Resume Files (PDF & DOCX)
If you update `src/data/portfolioData.ts`, regenerate the synchronized PDF and DOCX files by running:
```bash
python scripts/generate_resume.py
```
To verify the extracted text integrity:
```bash
python scripts/verify_integrity.py
```

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Architecture

```
navinjith portfolio/
├── public/
│   ├── Navinjith_K_Resume.pdf      # ATS-friendly 1-page PDF
│   └── Navinjith_K_Resume.docx     # Standard editable DOCX resume
├── scripts/
│   ├── generate_resume.py          # Synchronized PDF & DOCX generator
│   └── verify_integrity.py         # Text extraction and fact-checking test
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind CSS & theme styling
│   │   ├── layout.tsx              # Root layout & SEO metadata
│   │   ├── page.tsx                # Portfolio homepage
│   │   ├── projects/
│   │   │   └── secureloop-ai/
│   │   │       └── page.tsx        # Dedicated deep-dive Case Study
│   │   └── resume/
│   │       └── page.tsx            # Web ATS resume view & download hub
│   ├── components/
│   │   ├── Header.tsx              # Navigation & mobile menu
│   │   ├── Hero.tsx                # Hero section with earned CSA banner
│   │   ├── ExperienceSection.tsx   # RedTeam Hacker Academy internship details
│   │   ├── ProjectsSection.tsx     # SecureLoop AI homepage feature card
│   │   ├── SkillsSection.tsx       # SIEM, monitoring, and forensic competencies
│   │   ├── EducationSection.tsx    # BCA Cyber Forensics & MCA in progress
│   │   ├── CertificationsSection.tsx # EC-Council CSA, CICSA, IBM certs
│   │   ├── AboutSection.tsx        # Personal introduction & philosophy
│   │   ├── ContactSection.tsx      # Email copy, LinkedIn, and GitHub links
│   │   ├── Footer.tsx              # Ethics disclaimer & navigation
│   │   └── QuickCommandPalette.tsx # Ctrl+K command line navigator
│   └── data/
│       └── portfolioData.ts        # Single factual source of truth
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔒 Confidentiality & Deployment Readiness

- No connection strings, secret tokens, or private target addresses are exposed.
- All code and pages compile statically with zero build errors.
