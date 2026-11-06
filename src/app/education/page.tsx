import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  GraduationCap, 
  Calendar, 
  Building, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Academic Background | Navinjith K - Cyber Forensics & MCA",
  description: "Formal academic history in Cyber Forensics (Yenepoya University) and Master of Computer Applications (Adi Shankara Institute) for Navinjith K.",
};

export default function EducationPage() {
  const { education } = portfolioData;

  const academicFocus: { [key: string]: string[] } = {
    mca: [
      "Software Engineering & Architecture",
      "Advanced Database Systems & Data Structures",
      "Object-Oriented Programming & Web Applications",
      "Distributed Systems & Enterprise Systems Engineering"
    ],
    bca: [
      "Digital Forensics & Incident Investigation",
      "File System Structures & Digital Evidence Recovery",
      "Network Security Protocols & Cryptography Basics",
      "Operating System Internals (Windows & Linux)",
      "Cyber Law, Ethics, and Chain of Custody Standards"
    ]
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
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Formal Education
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Forensics and computer application background providing deep grounding in digital investigation, software systems, and data structures.
            </p>
          </div>
        </div>

        {/* Detailed Education Cards */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      {edu.institution}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h2>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-mono font-medium flex items-center gap-1.5 ${
                      edu.status === "In Progress"
                        ? "bg-amber-950/60 text-amber-300 border border-amber-800/50"
                        : "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50"
                    }`}
                  >
                    {edu.status === "In Progress" ? (
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    <span>{edu.status}</span>
                  </span>

                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {edu.dates}
                  </span>
                </div>
              </div>

              {edu.notes && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.notes}
                </p>
              )}

              {academicFocus[edu.id] && (
                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">
                    Curriculum &amp; Technical Coverage
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {academicFocus[edu.id].map((topic, i) => (
                      <div key={i} className="p-2.5 rounded bg-slate-950/70 border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              href="/contact"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              Get in Touch &rarr;
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
