"use client";

import React from "react";
import { UserCheck, Shield, BookOpen, Terminal, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { profile } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Navinjith K
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              My path in cybersecurity began with a dedicated Bachelor&apos;s degree in <strong>Cyber Forensics</strong> at Yenepoya University (2021&ndash;2024), where I studied the mechanics of file systems, network packet artifacts, chain of custody principles, and digital evidence reconstruction.
            </p>
            <p>
              To expand my technical capabilities into software systems and automated security workflows, I am currently pursuing a <strong>Master of Computer Applications (MCA)</strong> at Adi Shankara Institute of Engineering and Technology. This dual background enables me to evaluate security events from both an investigative forensics lens and a software engineering perspective.
            </p>
            <p>
              During my 8-month internship as a <strong>Cybersecurity Intern at RedTeam Hacker Academy</strong> (August 2024&ndash;March 2025), I supported real-time threat monitoring and incident response procedures. Working with SIEM environments including Splunk, IBM QRadar, and Microsoft Sentinel, I analyzed authentication anomalies, correlated network telemetry, and performed vulnerability assessments.
            </p>
            <p>
              As an <strong>EC-Council Certified SOC Analyst (CSA)</strong>, I focus my efforts on defensive security operations: reducing false positives, conducting disciplined alert triage, and automating assessment parsing as demonstrated in my prototype, <strong>SecureLoop AI</strong>.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Defensive Operations &amp; SIEM Triage</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Forensics &amp; Evidence Reconstruction</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Vulnerability Assessment &amp; Reporting</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Python Security Automation (FastAPI)</span>
              </div>
            </div>
          </div>

          {/* Side Monogram & Quick Facts Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-950 border-2 border-cyan-500/60 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  NK
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Navinjith K
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Certified SOC Analyst
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-850">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200 font-mono">{profile.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-850">
                  <span className="text-slate-400">Primary Certification:</span>
                  <span className="text-cyan-300 font-mono font-semibold">EC-Council CSA</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-850">
                  <span className="text-slate-400">Internship Duration:</span>
                  <span className="text-slate-200 font-mono">8 Months</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Languages:</span>
                  <span className="text-slate-200 font-mono">English, Malayalam, Hindi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
