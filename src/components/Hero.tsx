"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, FileDown, Mail, Terminal, MapPin, CheckCircle2, Server, Eye, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-800/80 cyber-grid">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>EC-Council Certified SOC Analyst (CSA)</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 text-xs font-mono">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-cyan-400 font-mono">
                {profile.headline}
              </p>
            </div>

            {/* Grounded Bio / Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.intro}
            </p>

            {/* Target Role Pills */}
            <div className="pt-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
                <span>Target Focus:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-900/90 text-slate-200 border border-slate-800"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <Link
                href="/projects/secureloop-ai"
                className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                <span>View SecureLoop AI</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-medium text-sm flex items-center gap-2 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF/DOCX)</span>
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-slate-100 border border-slate-800 text-sm font-medium flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Direct Internship Quick-Link */}
            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <span>Experience:</span>
              <Link
                href="/experience"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40"
              >
                Cybersecurity Intern at RedTeam Hacker Academy (Aug 2024 &ndash; Mar 2025) &rarr;
              </Link>
            </div>

          </div>

          {/* Right Column: Abstract Cyber Defense Topology (Clearly Decorative, Non-Deceptive) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md rounded-xl bg-[#0c1322]/90 border border-slate-800 p-5 shadow-2xl backdrop-blur-sm">
              
              {/* Header Label: Transparently marked as decorative schematic */}
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
                    DEFENSIVE WORKFLOW SCHEMATIC
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Decorative
                </span>
              </div>

              {/* Lightweight SVG Topology Diagram */}
              <div className="relative py-2 flex flex-col items-center">
                <svg
                  className="w-full h-44 overflow-visible"
                  viewBox="0 0 360 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Defensive Security Operations Schematic"
                  role="img"
                >
                  <title>Defensive Security Operations Workflow Schematic</title>
                  {/* Grid background dots */}
                  <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#1e293b" />
                  </pattern>
                  <rect width="360" height="170" fill="url(#dotPattern)" opacity="0.4" />

                  {/* Connecting lines */}
                  <path d="M 60 45 L 180 85" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 60 125 L 180 85" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 180 85 L 300 85" stroke="#06b6d4" strokeWidth="2" />

                  {/* Node 1: Log & Telemetry Sources */}
                  <g transform="translate(20, 25)">
                    <rect width="80" height="40" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
                    <text x="40" y="24" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      Auth / Network
                    </text>
                  </g>

                  {/* Node 2: Scanner Findings */}
                  <g transform="translate(20, 105)">
                    <rect width="80" height="40" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
                    <text x="40" y="24" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      Nuclei Scans
                    </text>
                  </g>

                  {/* Node 3: SOC / Triage Engine */}
                  <g transform="translate(140, 65)">
                    <rect width="80" height="42" rx="8" fill="#131d33" stroke="#06b6d4" strokeWidth="1.5" />
                    <text x="40" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                      SIEM &amp; Triage
                    </text>
                    <text x="40" y="34" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      Correlation
                    </text>
                  </g>

                  {/* Node 4: Analyst Reporting */}
                  <g transform="translate(260, 65)">
                    <rect width="80" height="42" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <text x="40" y="22" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                      Incident Report
                    </text>
                    <text x="40" y="34" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      Remediation
                    </text>
                  </g>
                </svg>

                {/* Grounded Summary Checklist */}
                <div className="w-full mt-2 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Certification
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                      EC-Council CSA
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Flagship Prototype
                    </span>
                    <Link
                      href="/projects/secureloop-ai"
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 underline"
                    >
                      SecureLoop AI Scanner &rarr;
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Operational Internship
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      8 Months (Aug 24 &ndash; Mar 25)
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
