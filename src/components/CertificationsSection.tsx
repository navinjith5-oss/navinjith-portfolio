"use client";

import React from "react";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, HelpCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Industry Certifications &amp; Training
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Industry certifications and specialized training programs in Security Operations Center workflows, SIEM analysis, and threat detection.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-xl flex flex-col justify-between transition-all shadow-xl ${
                cert.featured
                  ? "bg-[#0c1629] border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] relative"
                  : "bg-[#0f172a] border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cert.featured && (
                <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-wide">
                  Featured &bull; Industry Credential
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500">
                  {cert.category}
                </span>

                {cert.verificationAvailable && cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-mono text-xs flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1" title="Official digital verification link pending provider upload">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                    <span>Credential on File</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
