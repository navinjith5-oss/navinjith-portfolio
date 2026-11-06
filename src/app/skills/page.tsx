import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Wrench, 
  Shield, 
  Terminal, 
  Search, 
  Cpu, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Technical Skills Matrix | Navinjith K - SOC & Cybersecurity",
  description: "Comprehensive skills matrix and toolset proficiencies in SOC monitoring, SIEM log analysis, network inspection, and defensive frameworks.",
};

export default function SkillsPage() {
  const { skills } = portfolioData;

  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Security Operations & Monitoring": <Shield className="w-5 h-5 text-cyan-400" />,
    "Security Tools & Platforms": <Wrench className="w-5 h-5 text-cyan-400" />,
    "Frameworks & Security Foundations": <Search className="w-5 h-5 text-cyan-400" />,
    "Development & Systems": <Cpu className="w-5 h-5 text-cyan-400" />,
  };

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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 page-enter">
        
        {/* Header Hero Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[90px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 text-xs font-mono">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full Technical Matrix</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cybersecurity &amp; SOC Capabilities
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Grounded proficiencies mapped directly to academic forensics training, hands-on internship operations, and custom security tooling development. All proficiency levels preserve realistic qualifiers without inflated ratings or progress percentages.
            </p>
          </div>
        </div>

        {/* 4 Deep Category Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  {categoryIcons[category.title] || <Shield className="w-5 h-5 text-cyan-400" />}
                  <div>
                    <h2 className="font-bold text-white text-lg">
                      {category.title}
                    </h2>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {category.skills.length} Validated Areas
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-3 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((sk) => (
                    <div
                      key={sk.name}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-850 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="flex items-start gap-2.5 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-slate-100">{sk.name}</span>
                          {sk.context && (
                            <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                              {sk.context}
                            </span>
                          )}
                        </div>
                      </div>

                      {sk.proficiencyNote && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
                          {sk.proficiencyNote}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>Directly applied in labs &amp; internships</span>
                <span className="text-slate-600">&bull;</span>
                <span>Verified</span>
              </div>
            </div>
          ))}
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
              href="/certifications"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              View Certifications &rarr;
            </Link>
            <Link
              href="/experience"
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
