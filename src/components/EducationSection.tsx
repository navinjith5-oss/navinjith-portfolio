"use client";

import React from "react";
import { GraduationCap, Calendar, Building, CheckCircle2, Clock } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Formal Education
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Forensics and computer application background providing deep grounding in digital investigation, software systems, and data structures.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded-full ${
                      edu.status === "In Progress"
                        ? "bg-amber-950/60 text-amber-300 border border-amber-800/60 flex items-center gap-1"
                        : "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 flex items-center gap-1"
                    }`}
                  >
                    {edu.status === "In Progress" ? (
                      <Clock className="w-3 h-3" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3" />
                    )}
                    {edu.status}
                  </span>

                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.dates}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {edu.degree}
                </h3>

                <p className="text-sm text-cyan-400 font-medium flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span>{edu.institution}</span>
                </p>

                {edu.notes && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {edu.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
