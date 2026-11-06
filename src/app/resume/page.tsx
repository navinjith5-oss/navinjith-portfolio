"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  FileDown, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Printer,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MagneticButton from "@/components/MagneticButton";

export default function ResumePage() {
  const { profile, certifications, experience, featuredProject, skills, education } = portfolioData;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      
      {/* Top Breadcrumb & Action Hub */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Download Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <MagneticButton>
            <a
              href="/Navinjith_K_Resume.pdf"
              download="Navinjith_K_Resume.pdf"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download ATS PDF</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/Navinjith_K_Resume.docx"
              download="Navinjith_K_Resume.docx"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download DOCX (Editable)</span>
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-4 rounded-2xl bg-[#0c1426] border border-cyan-500/30 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>ATS Verified Format:</strong> Single-column linear layout, standard headings, zero tables or textboxes, 100% parsable text.
          </span>
        </div>
        <span className="hidden md:inline-block font-mono text-[11px] text-cyan-400">
          Target: SOC Analyst &bull; Cybersecurity Analyst
        </span>
      </div>

      {/* Printable / ATS-Engineered Resume Paper Simulation */}
      <div className="bg-white text-slate-900 p-8 sm:p-14 rounded-2xl shadow-2xl space-y-6 font-sans text-sm leading-normal selection:bg-sky-200 selection:text-slate-950 border border-slate-300">
        
        {/* 1. Header: Name & Contact Information */}
        <header className="border-b border-slate-300 pb-4 text-left">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase font-sans">
            {profile.name}
          </h1>
          <p className="text-sm font-bold text-sky-700 mt-1 uppercase tracking-wide">
            {profile.headline}
          </p>
          <div className="mt-2 text-xs text-slate-700 leading-relaxed font-sans">
            <span>{profile.location}</span>
            <span className="mx-2 text-slate-400">|</span>
            <span>Email: <a href={`mailto:${profile.email}`} className="text-sky-700 underline font-medium">{profile.email}</a></span>
            <span className="mx-2 text-slate-400">|</span>
            <span>Phone: <span className="font-medium">{profile.phone}</span></span>
            <br className="hidden sm:inline" />
            <span className="hidden sm:inline sm:mr-2">|</span>
            <span>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">linkedin.com/in/navinjith-k-871107254</a></span>
            <span className="mx-2 text-slate-400">|</span>
            <span>GitHub: <a href="https://github.com/navinjith5-oss" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">github.com/navinjith5-oss</a></span>
          </div>
        </header>

        {/* 2. Professional Summary */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs text-slate-800 leading-relaxed">
            {profile.summary}
          </p>
        </section>

        {/* 3. Certifications & Credentials */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Certifications &amp; Credentials
          </h2>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
            <li>
              <strong>EC-Council Certified SOC Analyst (CSA)</strong> &ndash; EC-Council
            </li>
            <li>
              <strong>Certified IT Infrastructure and Cyber SOC Analyst (CICSA)</strong> &ndash; RedTeam Hacker Academy
            </li>
            <li>
              <strong>IBM Advanced Cybersecurity Certificate</strong> &ndash; IBM
            </li>
          </ul>
        </section>

        {/* 4. Technical Skills */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-1 text-xs text-slate-800">
            <p>
              <strong>Security Operations (SOC):</strong> SOC Monitoring (Tier 1), Threat Detection &amp; Triage, SIEM Log Analysis, Network Security Monitoring, Incident Response Support, Threat Intelligence, Vulnerability Assessment &amp; Management, Security Reporting.
            </p>
            <p>
              <strong>SIEM &amp; Security Tools:</strong> Splunk, IBM QRadar, Microsoft Sentinel, Wireshark, Nessus, Kali Linux, Maltego, SpiderFoot, Basic Burp Suite knowledge, Nuclei.
            </p>
            <p>
              <strong>Frameworks &amp; Fundamentals:</strong> MITRE ATT&amp;CK (Familiarity), Malware Analysis Fundamentals, Firewall &amp; IDS/IPS Management Fundamentals, Risk Assessment &amp; Mitigation Fundamentals, Disaster Recovery Planning Fundamentals.
            </p>
            <p>
              <strong>Development &amp; Systems:</strong> Python (FastAPI), React, JavaScript, Vite, Docker (Lab/Container Management), JSON/JSONL, HTTPX, Git.
            </p>
          </div>
        </section>

        {/* 5. Cybersecurity Experience */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Cybersecurity Experience
          </h2>
          
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <span className="font-bold text-slate-900">
                Cybersecurity Intern &ndash; RedTeam Hacker Academy
              </span>
              <span className="text-slate-600 italic">
                August 2024 &ndash; March 2025 | Kerala, India
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 pl-1">
              <li>
                Assisted with real-time threat monitoring and Tier 1 incident response procedures within training and simulated SOC environments.
              </li>
              <li>
                Analyzed authentication logs, network event streams, and endpoint telemetry to assist in identifying anomalies and triaging security events.
              </li>
              <li>
                Conducted vulnerability assessments using industry scanners and drafted structured security assessment and incident reports.
              </li>
              <li>
                Gained operational hands-on exposure to SIEM tools (Splunk, IBM QRadar, Microsoft Sentinel) and standard SOC triage workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Featured Project */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Featured Cybersecurity Project
          </h2>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <span className="font-bold text-slate-900">
                SecureLoop AI | Web Security Assessment Prototype &ndash; Open Source
              </span>
              <span className="text-sky-700 underline">
                https://github.com/navinjith5-oss/secureloop-ai1
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 pl-1">
              <li>
                Built a Python/FastAPI prototype integrating Nuclei scanning, JSONL finding normalization, and a React results interface.
              </li>
              <li>
                Implemented scan authorization confirmation, background execution, status tracking, severity filtering, and Docker lab management.
              </li>
              <li>
                Prototyped rule-based CWE attack-chain mapping and Groq-generated explanations and remediation suggestions in a separate workflow with PostgreSQL storage.
              </li>
            </ul>
          </div>
        </section>

        {/* 7. Education */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Education
          </h2>
          <div className="space-y-1 text-xs text-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <span>
                <strong>Master of Computer Applications (MCA)</strong> &ndash; Adi Shankara Institute of Engineering and Technology
              </span>
              <span className="text-slate-600 italic">In Progress</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <span>
                <strong>Bachelor of Computer Applications (BCA) in Cyber Forensics</strong> &ndash; Yenepoya University
              </span>
              <span className="text-slate-600 italic">2021 &ndash; 2024</span>
            </div>
          </div>
        </section>

        {/* 8. Languages */}
        <section className="space-y-1">
          <h2 className="text-xs font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1">
            Languages
          </h2>
          <p className="text-xs text-slate-800">
            English, Malayalam, Hindi
          </p>
        </section>

      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-md"
          >
            <span>Contact Navinjith</span>
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      </div>

    </div>
  );
}
