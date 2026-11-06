"use client";

import React from "react";
import { Wrench, Shield, Search, Terminal, Cpu, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Security Operations & Monitoring": <Shield className="w-4 h-4 text-cyan-400" />,
    "Security Tools & Platforms": <Wrench className="w-4 h-4 text-cyan-400" />,
    "Frameworks & Security Foundations": <Search className="w-4 h-4 text-cyan-400" />,
    "Development & Systems": <Cpu className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Cybersecurity &amp; SOC Capabilities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Grounded skills mapped directly to academic forensics training, internship operational tasks, and SecureLoop AI prototype development.
            Proficiency levels preserve realistic qualifiers without inflated ratings.
          </p>
        </div>

        {/* 4-Column Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-[#0f172a]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80">
                  {categoryIcons[cat.title] || <Shield className="w-4 h-4 text-cyan-400" />}
                  <h3 className="font-bold text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mt-2 mb-4">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.skills.map((sk) => (
                    <div
                      key={sk.name}
                      className="p-2 rounded bg-slate-950/60 border border-slate-850 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2 text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-medium">{sk.name}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {sk.proficiencyNote && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                            {sk.proficiencyNote}
                          </span>
                        )}
                        {sk.context && (
                          <span className="hidden sm:inline-block text-[11px] text-slate-500 font-mono">
                            {sk.context}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
                Verified through internship, EC-Council CSA, and prototype code.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
