"use client";

import React, { useState } from "react";
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(true);
  const exp = portfolioData.experience[0]; // RedTeam Hacker Academy Internship

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Cybersecurity Internship
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on Security Operations Center (SOC) monitoring and defensive support experience. 
            All descriptions represent verifiable responsibilities without inflated metrics or fabricated incident statistics.
          </p>
        </div>

        {/* Experience Card */}
        <div className="rounded-xl bg-[#0f172a]/90 border border-slate-800 hover:border-slate-700/80 transition-all shadow-xl overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="p-6 sm:p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {exp.type}
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
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {exp.role}
              </h3>
              <p className="text-base text-cyan-400 font-medium mt-0.5">
                {exp.organization}
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700 self-start md:self-center transition-colors"
              aria-expanded={expanded}
              aria-controls="internship-details"
            >
              <span>{expanded ? "Hide Details" : "Show Full Scope"}</span>
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expanded Content Area */}
          {expanded && (
            <div id="internship-details" className="p-6 sm:p-8 space-y-6">
              
              {/* Context Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
                  Scope &amp; Daily Focus
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Supported Bullet Points */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                  Verified Responsibilities &amp; Tasks
                </h4>
                <ul className="space-y-3">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used (Hands-On Exposure) */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                  SIEM &amp; Security Tools Handled
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2 italic">
                  * Note: Tools reflect practical training, lab simulations, and operational exercises during the internship period.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
