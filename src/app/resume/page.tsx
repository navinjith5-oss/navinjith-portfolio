import React from "react";
import Link from "next/link";
import { ArrowLeft, FileDown, FileText, Printer, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "ATS Resume | Navinjith K - EC-Council Certified SOC Analyst",
  description: "ATS-friendly, single-column cybersecurity resume for Navinjith K. EC-Council Certified SOC Analyst, Cyber Forensics graduate, RedTeam Hacker Academy intern, and SecureLoop AI developer.",
};

export default function ResumePage() {
  const { profile, certifications, experience, featuredProject, skills, education, languages } = portfolioData;

  return (
    <div className="pt-24 pb-20 bg-[#080c14] min-h-screen text-slate-100">
      
      {/* Top action bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Home</span>
        </Link>

        {/* Download Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Navinjith_K_Resume.pdf"
            download="Navinjith_K_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <FileDown className="w-4 h-4" />
            <span>Download PDF (ATS-Tested)</span>
          </a>

          <a
            href="/Navinjith_K_Resume.docx"
            download="Navinjith_K_Resume.docx"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-2 transition-colors"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download DOCX (Editable)</span>
          </a>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
        <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>ATS-Optimized Formatting:</strong> Single-column linear layout, standard headings, no parsing tables, no text-boxes, no non-standard symbols.
            </span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-slate-500">
            Target: SOC Analyst &bull; Cybersecurity Analyst
          </span>
        </div>
      </div>

      {/* Printable / ATS-Engineered Resume Paper Simulation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <article className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl space-y-6 font-sans text-sm leading-normal">
          
          {/* 1. Header: Name & Contact Information */}
          <header className="border-b border-slate-300 pb-4 text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
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

        </article>
      </div>

    </div>
  );
}
