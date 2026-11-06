"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Wrench, 
  Shield, 
  Terminal, 
  Search, 
  Cpu, 
  CheckCircle2, 
  Filter,
  Layers,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

export default function SkillsDashboardPage() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "Security Operations & Monitoring", label: "Security Operations" },
    { id: "Security Tools & Platforms", label: "SIEM & Security Tools" },
    { id: "Frameworks & Security Foundations", label: "Frameworks & Forensics" },
    { id: "Development & Systems", label: "Programming & Automation" },
  ];

  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Security Operations & Monitoring": <Shield className="w-5 h-5 text-cyan-400" />,
    "Security Tools & Platforms": <Wrench className="w-5 h-5 text-cyan-400" />,
    "Frameworks & Security Foundations": <Search className="w-5 h-5 text-cyan-400" />,
    "Development & Systems": <Cpu className="w-5 h-5 text-cyan-400" />,
  };

  const filteredCategories = skills
    .filter((cat) => activeCategory === "all" || cat.title === activeCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.context && s.context.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (s.proficiencyNote && s.proficiencyNote.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

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
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive SOC Skills Dashboard</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cybersecurity &amp; SOC Capabilities
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Grounded proficiencies mapped directly to academic forensics training, hands-on internship operations, and custom security tooling development. Realistic qualifiers without inflated percentages.
          </p>
        </div>
      </motion.div>

      {/* Interactive Controls Bar: Category Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-lg">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === c.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Quick Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills (e.g. Splunk, Wireshark)..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="space-y-8">
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0c1322] border border-slate-800 text-slate-400 text-sm font-mono">
            No matching skills found for &ldquo;{searchQuery}&rdquo;. Try clearing your filter.
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center">
                  {categoryIcons[category.title] || <Shield className="w-5 h-5 text-cyan-400" />}
                </div>
                <div>
                  <h2 className="font-bold text-white text-xl">
                    {category.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.skills.map((sk) => (
                  <TiltCard
                    key={sk.name}
                    className="p-3.5 bg-slate-950/70 border border-slate-850 hover:border-cyan-500/50 flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-100 text-xs sm:text-sm">
                          {sk.name}
                        </span>
                      </div>
                      {sk.proficiencyNote && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                          {sk.proficiencyNote}
                        </span>
                      )}
                    </div>

                    {sk.context && (
                      <span className="text-[11px] text-slate-400 font-mono block pl-6">
                        {sk.context}
                      </span>
                    )}
                  </TiltCard>
                ))}
              </div>
            </div>
          ))
        )}
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
            href="/certifications"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
          >
            <span>View Certifications</span>
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
