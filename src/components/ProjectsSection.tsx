"use client";

import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight, ExternalLink, Code2, ShieldAlert, Cpu, Database, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const project = portfolioData.featuredProject;

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED CYBERSECURITY PROJECT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Practical Security Research &amp; Tooling
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on prototype development focused on vulnerability assessment, automated finding normalization, and security operations efficiency.
          </p>
        </div>

        {/* Featured Project Card: SecureLoop AI */}
        <div className="rounded-xl bg-[#0f172a] border border-slate-800 hover:border-cyan-500/40 transition-all shadow-2xl overflow-hidden group">
          
          {/* Card Top Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#10192e] to-slate-900 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Flagship Prototype
                </span>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {project.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Personal Research &amp; Academic Exploration
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-cyan-400 font-mono mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-mono font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Public Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <Link
                href={`/projects/${project.slug}`}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-500 hover:bg-cyan-400 rounded-lg flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Grounded Summary */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Architecture Separation Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Box 1: Public Scanner Implementation */}
              <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Public Scanner Implementation</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  FastAPI service requiring explicit scan authorization confirmation, asynchronous task dispatching, Nuclei scanner execution with JSONL streaming, and a React interface with severity filtering and Docker lab container lifecycle controls.
                </p>
                <div className="text-[11px] font-mono text-cyan-300/80 pt-1">
                  Stack: Python, FastAPI, Nuclei, React, Vite, Docker, HTTPX
                </div>
              </div>

              {/* Box 2: Separate AI Prototype Workflow */}
              <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Separate AI Analysis Prototype</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Experimental research iteration exploring rule-based CWE attack-chain mapping, Groq LLM-generated explanations and remediation suggestions for human analyst review, and PostgreSQL state storage.
                </p>
                <div className="text-[11px] font-mono text-emerald-300/80 pt-1">
                  Stack: Python, Groq LLM API, PostgreSQL, SQLAlchemy, CWE Rules
                </div>
              </div>

            </div>

            {/* Verified Key Contributions / Bullets */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                Key Technical Contributions
              </h4>
              <ul className="space-y-2.5">
                {project.resumeBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:underline underline-offset-4"
              >
                <span>View Architecture &amp; Code Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
