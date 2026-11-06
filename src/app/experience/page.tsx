import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  FileText, 
  Layers, 
  Search,
  ExternalLink
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Experience | Navinjith K - Cybersecurity & SOC Internship",
  description: "Practical Security Operations Center (SOC) experience and cybersecurity internship at RedTeam Hacker Academy for Navinjith K.",
};

export default function ExperiencePage() {
  const exp = portfolioData.experience[0];

  return (
    <div className="pt-24 pb-20 bg-[#080c14] min-h-screen text-slate-100">
      
      {/* Top Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Main Content with Entrance Animation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 page-enter">
        
        {/* Header Hero Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[90px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                Practical Security Experience
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {exp.role} &ndash; {exp.organization}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {exp.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Duration: 8 Months (Aug 2024 &ndash; Mar 2025)
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                Focus: SOC Tier 1 Monitoring &amp; Telemetry
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Sections */}
        <div className="space-y-8">
          
          {/* 1. Core Verified Responsibilities */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span>Verified Operational Responsibilities</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Grounded tasks performed during the internship without exaggerated metrics:
            </p>

            <ul className="space-y-3 pt-2">
              {exp.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-850 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. SIEM & Security Tooling Matrix */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>SIEM &amp; Security Tools Handled</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Practical application of detection platforms and network investigation toolsets:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {exp.toolsUsed.map((tool) => (
                <div key={tool} className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                  <span className="font-mono text-sm font-bold text-cyan-300">
                    {tool}
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {tool === "Splunk" && "Log parsing, search processing language (SPL), dashboard monitoring."}
                    {tool === "IBM QRadar" && "Offense triage, event log correlation, rule evaluation."}
                    {tool === "Microsoft Sentinel" && "Cloud SIEM telemetry, KQL search, incident tracking."}
                    {tool === "Wireshark" && "TCP/UDP packet capture inspection and anomaly analysis."}
                    {tool === "Nessus" && "Vulnerability baseline scanning and CVE severity triage."}
                    {tool === "Kali Linux" && "Defensive testing and network security audit toolkit."}
                    {tool === "Maltego" && "OSINT link analysis and domain reconnaissance."}
                    {tool === "SpiderFoot" && "Automated threat intelligence asset footprinting."}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic">
              * Note: Tool exposure reflects lab simulations, training exercises, and operational tasks during the internship period.
            </p>
          </div>

          {/* 3. Triage & Analytical Methodology */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-cyan-400" />
              <span>Defensive Triage Workflow</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">1. Ingestion &amp; Alert Intake</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Observing real-time SIEM alerts generated from authentication endpoints, firewall logs, and network sensors.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">2. Telemetry Verification</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cross-referencing source/destination IPs, packet traces, and host event logs to filter false positives from actionable indicators.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">3. Reporting &amp; Escalation</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Drafting structured assessment notes with timestamps, matched evidence, and severity rating for tier-2 escalation.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Executive Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/projects/secureloop-ai"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              Explore SecureLoop AI &rarr;
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors"
            >
              Download Resume
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
