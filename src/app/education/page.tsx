"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  GraduationCap, 
  Calendar, 
  Building, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  Sparkles,
  Layers
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

export default function EducationTimelinePage() {
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Timeline</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic Qualifications
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Undergraduate training in Cyber Forensics providing deep grounding in digital investigation, paired with ongoing postgraduate software engineering studies.
          </p>
        </div>
      </motion.div>

      {/* Interactive Academic Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/40 space-y-12">
        {education.map((edu, idx) => (
          <div key={edu.id} className="relative">
            
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_#06b6d4] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            {/* 3D Tilt Card */}
            <TiltCard className="p-8 sm:p-10 bg-[#0f172a] border border-slate-800 hover:border-cyan-500/40 shadow-2xl space-y-6">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{edu.institution}</span>
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

                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-1">
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
                <div className="space-y-2.5 pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400">
                    Core Curriculum &amp; Specialization Topics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {academicFocus[edu.id].map((topic, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 text-xs text-slate-200 flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </TiltCard>
          </div>
        ))}
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
            href="/resume"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
          >
            <span>View Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            Contact Navinjith
          </Link>
        </div>
      </div>

    </div>
  );
}
