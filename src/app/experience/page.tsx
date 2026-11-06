"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
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
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

export default function ExperiencePage() {
  const exp = portfolioData.experience[0];

  const toolsDetail = [
    { name: "Splunk", desc: "Querying authentication and event logs with SPL, monitoring SOC dashboards, identifying brute force patterns." },
    { name: "IBM QRadar", desc: "Reviewing offenses, correlating event flows, inspecting rule triggers for anomalies." },
    { name: "Microsoft Sentinel", desc: "Analyzing cloud telemetry, executing KQL queries, triaging endpoint security incidents." },
    { name: "Wireshark", desc: "Packet capture inspection, protocol stream dissection (TCP/UDP/DNS/HTTP), anomalous traffic analysis." },
    { name: "Nessus", desc: "Executing authenticated and unauthenticated vulnerability scans, drafting CVE remediation prioritization." },
    { name: "Kali Linux", desc: "Hands-on utilization of defensive testing toolsets within simulated network labs." },
    { name: "Maltego & SpiderFoot", desc: "Open-source intelligence (OSINT) footprinting and adversary infrastructure mapping." },
    { name: "Burp Suite", desc: "Basic web proxy traffic interception and HTTP request/response inspection." }
  ];

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
            <Building2 className="w-3.5 h-3.5" />
            <span>Operational Experience Timeline</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cybersecurity &amp; SOC Experience
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Practical Security Operations Center (SOC) threat monitoring, log triage, and vulnerability assessment experience completed during an 8-month intensive internship.
          </p>
        </div>
      </motion.div>

      {/* Interactive Experience Timeline Node */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/40 space-y-10">
        
        {/* Glowing Node Marker */}
        <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_#06b6d4] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
        </div>

        {/* Main Experience Card with 3D Tilt */}
        <TiltCard className="p-8 sm:p-10 bg-[#0f172a] border border-slate-800 hover:border-cyan-500/40 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {exp.type}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.location}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {exp.role}
              </h2>
              <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                {exp.organization}
              </p>
            </div>

            <div className="shrink-0 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
              Duration: 8 Months
            </div>
          </div>

          {/* Scope Overview */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400">
              Operational Scope
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {exp.summary}
            </p>
          </div>

          {/* Verified Responsibilities */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400">
              Core Responsibilities &amp; Daily Triage
            </h3>
            <div className="space-y-3">
              {exp.bulletPoints.map((bullet, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

      </div>

      {/* Tooling Deep-Dive Section */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Security Platforms Handled in Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolsDetail.map((t) => (
            <div key={t.name} className="p-5 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
              <span className="font-mono text-sm font-bold text-cyan-300 block">
                {t.name}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
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
            href="/education"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
          >
            <span>View Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/resume"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </div>

    </div>
  );
}
