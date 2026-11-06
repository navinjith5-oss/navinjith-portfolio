import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldAlert, 
  Cpu, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  FileCode, 
  Terminal, 
  Layers, 
  Server, 
  Info,
  GitBranch,
  ShieldCheck,
  Activity
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "SecureLoop AI Case Study | Navinjith K",
  description: "Technical case study of SecureLoop AI: web security assessment prototype, FastAPI & Nuclei public scanner, and separate AI-assisted attack-chain analysis iteration.",
};

export default function SecureLoopAICaseStudy() {
  const project = portfolioData.featuredProject;

  return (
    <div className="pt-24 pb-20 bg-[#080c14] min-h-screen text-slate-100">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Projects</span>
        </Link>
      </div>

      {/* Case Study Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                Flagship Case Study
              </span>
              <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Status: {project.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Author: {portfolioData.profile.name} (EC-Council CSA)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* Links and repo */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-mono font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              >
                <GitBranch className="w-4 h-4" />
                <span>View Public Scanner Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/navinjith5-oss/secureloop-ai1/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-mono text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>README &amp; Setup Docs</span>
              </a>
            </div>

            {/* Important Architectural Clarification Alert */}
            <div className="mt-6 p-4 rounded-lg bg-slate-950/80 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-medium block mb-1">
                  Scope &amp; Architecture Separation Notice:
                </strong>
                This project represents two reviewed implementations of the same initiative. The public repository contains the operational <strong>FastAPI/Nuclei scanner</strong>, Docker lab manager, and React dashboard. A separate private research iteration investigates <strong>rule-based CWE attack-chain mapping</strong> and Groq-generated remediation suggestions with PostgreSQL. AI features are not conflated into the public scanner.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 1: The Objective & Problem Context */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-cyan-400 text-xs font-mono">
            <span>01 / CONTEXT &amp; OBJECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Unifying Vulnerability Scans and Evidence Triage
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              In traditional web vulnerability assessments, security teams frequently execute command-line scanner tools that generate massive, unstructured text logs or raw output streams. Correlating raw template output, validating user permissions, organizing request/response payloads, and summarizing risks for junior analysts creates substantial operational drag.
            </p>
            <p className="p-4 rounded-lg bg-slate-900/80 border-l-4 border-cyan-500 text-slate-200">
              <strong>Core Objective:</strong> {project.objective}
            </p>
          </div>
        </section>

        {/* SECTION 2: Public Scanner Implementation & Architecture */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-cyan-400 text-xs font-mono">
            <span>02 / PUBLIC SCANNER ARCHITECTURE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Public Scanner Implementation
            </h2>
            <span className="text-xs font-mono text-cyan-400">
              Repository: navinjith5-oss/secureloop-ai1
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.publicScanner.summary}
          </p>

          {/* Architecture Flow Diagram */}
          <div className="p-6 rounded-xl bg-[#0d1424] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                Public Scanner Flow Diagram
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                FastAPI &bull; Nuclei &bull; JSONL &bull; React
              </span>
            </div>

            {/* Architecture Steps Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
              {project.publicScanner.architecture.map((node) => (
                <div key={node.step} className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-mono font-bold">
                      {node.step}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-100">
                      {node.component}
                    </div>
                    <p className="text-[12px] text-slate-400 leading-normal">
                      {node.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 font-mono">
              <strong>Execution Pipeline:</strong> React UI (Target Submission &amp; User Authorization Assertion) &rarr; FastAPI Backend (/api/scan/start &amp; UUID assignment) &rarr; Subprocess Dispatch (Nuclei CLI -jsonl) &amp; Docker Lab Control &rarr; JSONL Output Parser &rarr; React Results Interface (Severity Filters &amp; Full-Text Search).
            </div>
          </div>

          {/* Code-Supported Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              Code-Supported Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.publicScanner.features.map((feat, i) => (
                <li key={i} className="p-3.5 rounded-lg bg-[#0e1628] border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Genuine Code Walkthrough from Repository */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCode className="w-5 h-5 text-cyan-400" />
              <span>Verified Source Code Snippets</span>
            </h3>
            <p className="text-xs text-slate-400">
              Directly inspected from public repository files. Links open the exact GitHub source lines.
            </p>

            <div className="space-y-6">
              {project.publicScanner.codeSnippets.map((snip, idx) => (
                <div key={idx} className="rounded-xl bg-[#080d18] border border-slate-800 overflow-hidden">
                  <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-xs font-mono text-slate-200 font-semibold">
                        {snip.title}
                      </span>
                    </div>
                    <a
                      href={snip.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>{snip.filePath}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 bg-slate-950/90 font-mono text-xs overflow-x-auto text-slate-300">
                    <pre><code>{snip.code}</code></pre>
                  </div>

                  <div className="px-4 py-2.5 bg-slate-900/50 border-t border-slate-800/80 text-xs text-slate-400">
                    <strong>Architectural Note:</strong> {snip.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Separate AI Analysis Prototype */}
        <section className="space-y-6 pt-4 border-t border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-emerald-400 text-xs font-mono">
            <span>03 / SEPARATE RESEARCH ITERATION</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              AI Analysis &amp; Remediation Prototype
            </h2>
            <span className="text-xs font-mono text-emerald-400">
              Private Iteration &bull; Human-in-the-Loop
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.aiPrototype.summary}
          </p>

          {/* AI Prototype Architecture Diagram */}
          <div className="p-6 rounded-xl bg-[#0a1520] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wider uppercase">
                AI Prototype Pipeline Topology
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Rule-Based CWE &bull; Groq LLM &bull; PostgreSQL
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
              {project.aiPrototype.architecture.map((node) => (
                <div key={node.step} className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 relative flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-xs font-mono font-bold">
                      {node.step}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-100">
                      {node.component}
                    </div>
                    <p className="text-[12px] text-slate-400 leading-normal">
                      {node.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 font-mono">
              <strong>Workflow:</strong> Findings Ingestion &rarr; Deterministic CWE Attack-Chain Rule Evaluation &rarr; Prompt Synthesis to Groq API (Requesting Technical Explanation + OWASP Reference) &rarr; Persisted to PostgreSQL via SQLAlchemy &rarr; Human Analyst Review Gate.
            </div>
          </div>

          {/* Features and Boundaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Researched Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.aiPrototype.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>AI Prototype Boundaries</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.aiPrototype.boundaries.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: Limitations & Grounded Reality */}
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-amber-400 text-xs font-mono">
            <span>04 / IMPLEMENTATION BOUNDARIES &amp; LIMITATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Honest Engineering Boundaries
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            In alignment with SOC integrity, these constraints define the current prototypes without exaggerated or unsupported claims:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.limitations.map((lim, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Constraint #{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lim}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Lessons & Future Work */}
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-cyan-400 text-xs font-mono">
            <span>05 / FUTURE WORK &amp; ROADMAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Future Research &amp; Architectural Work
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Explicitly planned development directions (distinguished from completed features):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.futureWork.map((fw, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Planned Direction #{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {fw}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action & Links */}
        <section className="pt-8 pb-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Interested in discussing the implementation or SOC applications?
            </h3>
            <p className="text-xs text-slate-400">
              Open to Tier 1 SOC Analyst and Cybersecurity Analyst opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:navinjith5@gmail.com"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              Contact Navinjith
            </a>
            <Link
              href="/resume"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors"
            >
              View Resume
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
