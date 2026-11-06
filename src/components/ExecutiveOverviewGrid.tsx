"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  FolderGit2, 
  Wrench, 
  Award, 
  GraduationCap, 
  FileText, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Shield,
  Activity,
  Terminal,
  FileDown
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExecutiveOverviewGrid() {
  const { profile, experience, featuredProject, certifications, skills, education } = portfolioData;
  const exp = experience[0];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#080d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-cyan-400 text-xs font-mono mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>COMMAND CENTER &bull; PAGE-WISE EXPLORATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Professional Competencies &amp; Evidence
            </h2>
            <p className="mt-1 text-slate-400 text-sm max-w-2xl">
              Click any section below to open its dedicated page with complete operational details, code walkthroughs, and syllabus breakdowns.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Select any card to navigate</span>
          </div>
        </div>

        {/* 6 High-Impact Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* CARD 1: Experience */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 card-hover flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                  {exp.period}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {exp.type}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {exp.role}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {exp.organization}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Real-time threat monitoring &amp; Tier 1 incident triage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>SIEM log analysis (Splunk, QRadar, Sentinel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Vulnerability assessments &amp; structured audit reporting</span>
                </li>
              </ul>
            </div>

            <Link
              href="/experience"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Explore Full Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CARD 2: Flagship Project SecureLoop AI */}
          <div className="p-6 rounded-xl bg-[#0c1629] border border-cyan-500/40 card-hover flex flex-col justify-between space-y-4 relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-900/60 border border-cyan-600/60 flex items-center justify-center text-cyan-300">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700/60 uppercase font-semibold">
                  Flagship Prototype
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Security Assessment Prototype
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  SecureLoop AI
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  FastAPI &bull; Nuclei &bull; JSONL &bull; React &bull; Docker
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Automated web vulnerability assessment prototype with explicit scan authorization, JSONL finding normalization, and a separate AI attack-chain iteration.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["FastAPI", "Nuclei", "React", "Docker"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/projects/secureloop-ai"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-300 hover:text-white font-semibold group"
            >
              <span>Read Deep-Dive Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CARD 3: Technical Skills Matrix */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 card-hover flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                  4 Core Domains
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Defensive Capabilities
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  SIEM &amp; Security Tooling
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Splunk &bull; QRadar &bull; Sentinel &bull; Wireshark
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 text-xs text-slate-300 flex items-center justify-between">
                  <span>SIEM Platforms</span>
                  <span className="font-mono text-[11px] text-cyan-300">Splunk, QRadar, Sentinel</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 text-xs text-slate-300 flex items-center justify-between">
                  <span>Traffic &amp; Scanners</span>
                  <span className="font-mono text-[11px] text-cyan-300">Wireshark, Nessus, Nuclei</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 text-xs text-slate-300 flex items-center justify-between">
                  <span>Recon &amp; OSINT</span>
                  <span className="font-mono text-[11px] text-cyan-300">Maltego, SpiderFoot</span>
                </div>
              </div>
            </div>

            <Link
              href="/skills"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
            >
              <span>View Full Skills Matrix</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CARD 4: Certifications */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 card-hover flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Verified
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Industry Credentials
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  EC-Council CSA &amp; Training
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  EC-Council &bull; RedTeam Hacker Academy &bull; IBM
                </p>
              </div>

              <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-100">EC-Council Certified SOC Analyst</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>CICSA (RedTeam Hacker Academy)</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-850 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>IBM Advanced Cybersecurity Certificate</span>
                </div>
              </div>
            </div>

            <Link
              href="/certifications"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Inspect Credential Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CARD 5: Formal Education */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 card-hover flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                  Forensics &amp; MCA
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Academic Foundation
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Cyber Forensics &amp; Software
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Yenepoya University &bull; Adi Shankara
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-slate-950/70 border border-slate-850">
                  <div className="font-semibold text-slate-200">BCA in Cyber Forensics</div>
                  <div className="text-[11px] text-slate-400 font-mono">Yenepoya University (2021 &ndash; 2024)</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950/70 border border-slate-850">
                  <div className="font-semibold text-slate-200">Master of Computer Applications (MCA)</div>
                  <div className="text-[11px] text-amber-400 font-mono">Adi Shankara Institute (In Progress)</div>
                </div>
              </div>
            </div>

            <Link
              href="/education"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
            >
              <span>View Academic History</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* CARD 6: Direct Inquiries & ATS Resume */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 card-hover flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Active
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Direct Inquiries &amp; Resume
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Get in Touch
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Email &bull; LinkedIn &bull; ATS PDF / DOCX
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-slate-950/70 border border-slate-850">
                  <span className="font-mono text-slate-300 truncate">{profile.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-cyan-400 hover:text-cyan-300"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex gap-2">
                  <a
                    href="/Navinjith_K_Resume.pdf"
                    download="Navinjith_K_Resume.pdf"
                    className="flex-1 py-1.5 px-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1"
                  >
                    <FileDown className="w-3 h-3 text-cyan-400" />
                    <span>PDF Resume</span>
                  </a>
                  <a
                    href="/Navinjith_K_Resume.docx"
                    download="Navinjith_K_Resume.docx"
                    className="flex-1 py-1.5 px-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1"
                  >
                    <FileDown className="w-3 h-3 text-cyan-400" />
                    <span>DOCX Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Open Contact Channels</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
