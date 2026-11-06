"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Code2, 
  ShieldAlert, 
  Cpu, 
  Database, 
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

export default function ProjectsGalleryPage() {
  const project = portfolioData.featuredProject;
  const [filter, setFilter] = useState("all");

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1426] via-[#090e1c] to-[#070b16] border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Interactive Security Research Gallery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cybersecurity Projects &amp; Tooling
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Practical security automation prototypes developed to streamline vulnerability assessment, finding normalization, and security operations analysis.
          </p>
        </div>
      </motion.div>

      {/* Projects Showcase Area */}
      <div className="space-y-8">
        
        {/* Flagship Project Card: SecureLoop AI with 3D Tilt */}
        <TiltCard className="p-8 sm:p-10 bg-gradient-to-br from-[#0c152a] via-[#0a1020] to-[#060a14] border-2 border-cyan-500/40 hover:border-cyan-400 shadow-2xl relative overflow-hidden group">
          <div className="space-y-6">
            
            {/* Top Meta Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Flagship Prototype
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
                  Category: Vulnerability Assessment &amp; AI
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Status: {project.status}
                </span>
              </div>

              {/* Repo action */}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700/80 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Title & Core Description */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400">
                {project.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                {project.shortDescription}
              </p>
            </div>

            {/* Architecture Separation Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Public Scanner Implementation</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  FastAPI backend requiring scan authorization assertion, asynchronous Nuclei execution, normalized JSONL findings, React UI with severity filtering, and Docker target lab container controls.
                </p>
                <div className="text-[11px] font-mono text-cyan-300/80 pt-1">
                  Stack: Python, FastAPI, Nuclei, React, Vite, Docker, HTTPX
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Separate AI Analysis Prototype</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Research iteration utilizing deterministic CWE grouping, Groq LLM-generated explanations and remediation suggestions for human analyst review, and PostgreSQL schema storage.
                </p>
                <div className="text-[11px] font-mono text-violet-300/80 pt-1">
                  Stack: Python, Groq LLM API, PostgreSQL, SQLAlchemy, CWE Rules
                </div>
              </div>

            </div>

            {/* Tech Badges & Detail CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] shrink-0"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </TiltCard>

      </div>

      {/* Page Navigation Footer */}
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
            href="/skills"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
          >
            <span>View Skills Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/experience"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            View Experience
          </Link>
        </div>
      </div>

    </div>
  );
}
