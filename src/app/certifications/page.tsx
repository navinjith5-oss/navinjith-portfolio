"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  FileText, 
  BookOpen, 
  Calendar, 
  Layers, 
  Sparkles,
  Building,
  Check
} from "lucide-react";
import { portfolioData, Certification } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

function SilverMedalIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="14" r="7" fill="url(#silverGrad)" stroke="#e2e8f0" strokeWidth="1.2" />
      <path d="M8.21 13.89L7 21l5-3 5 3-1.21-7.11" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="12 11 13.2 13.6 16 14 14 15.9 14.5 18.7 12 17.3 9.5 18.7 10 15.9 8 14 10.8 13.6 12 11" fill="#ffffff" />
      <defs>
        <linearGradient id="silverGrad" x1="5" y1="7" x2="19" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="0.5" stopColor="#cbd5e1" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CertificationsPage() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certSyllabus: { [key: string]: string[] } = {
    csa: [
      "SOC Architecture & Operations Fundamentals",
      "Network Security Monitoring & Event Correlation",
      "SIEM Configuration, Rule Parsing, and Log Triage",
      "Incident Handling & Escalation Procedures",
      "Threat Intelligence Concepts & MITRE ATT&CK Mapping"
    ],
    cicsa: [
      "Enterprise IT Infrastructure Defense",
      "Network Packet Inspection & Protocol Anomaly Detection",
      "Endpoint Telemetry Monitoring & Antivirus Log Review",
      "Tier 1 SOC Workflow Drills & Alert Prioritization"
    ],
    "ibm-cyber": [
      "Enterprise Threat Landscapes & Cyber Attack Vectors",
      "Defensive Security Controls & Cryptographic Principles",
      "Incident Response Frameworks (NIST / SANS)",
      "Cybersecurity Compliance & Risk Mitigation Models"
    ],
    "nptel-python": [
      "Python Syntax, Control Flow, Functions & Recursion",
      "Data Structures: Lists, Tuples, Sets, Dictionaries",
      "Algorithmic Problem Solving & Computational Thinking",
      "File Handling, Exception Handling & Module Design",
      "Applications in Cryptography, Automation & Data Processing"
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
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials Gallery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industry Certifications &amp; Credentials
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Industry credentials and specialized training programs in Security Operations Center workflows, threat detection, and computational problem solving. Click any card to inspect full competency details.
          </p>
        </div>
      </motion.div>

      {/* Interactive Certifications Cards Grid (Responsive 2-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => {
          const isSilver = cert.achievement && cert.achievement.includes("Silver");

          return (
            <TiltCard
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all ${
                cert.featured
                  ? "bg-gradient-to-b from-[#0c1629] to-[#070c17] border-2 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.18)]"
                  : isSilver
                  ? "bg-gradient-to-b from-[#0c1322] to-[#080d1a] border border-slate-700/80 hover:border-slate-300/60 shadow-xl hover:shadow-[0_0_25px_rgba(203,213,225,0.15)]"
                  : "bg-[#0f172a] border border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              <div className="space-y-4">
                
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {cert.featured ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Flagship Credential</span>
                    </div>
                  ) : isSilver ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-slate-200/20 via-slate-300/10 to-slate-200/20 border border-slate-300/60 text-slate-100 text-[11px] font-mono font-bold shadow-[0_0_15px_rgba(226,232,240,0.2)]">
                      <SilverMedalIcon className="w-3.5 h-3.5" />
                      <span>{cert.achievement}</span>
                    </div>
                  ) : (
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {cert.issuer}
                    </span>
                  )}

                  <div className="flex items-center gap-1.5">
                    {cert.score && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-semibold shadow-sm">
                        Score: {cert.score}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{cert.status}</span>
                    </span>
                  </div>
                </div>

                {/* Subtitle Issuer / Institution */}
                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                  {cert.institution && (
                    <>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-slate-300 font-medium">{cert.institution}</span>
                    </>
                  )}
                  {cert.session && (
                    <>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-slate-400">{cert.session}</span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white leading-snug">
                  {cert.title}
                </h2>

                {/* Recruiter Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-400">
                  {cert.category}
                </span>
                <span className="text-cyan-400 font-mono text-xs flex items-center gap-1 group-hover:underline">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Modal / Detail Drawer for Selected Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-[#0c1426] border border-cyan-500/50 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full" />

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-cyan-400 font-bold">
                      {selectedCert.issuer}
                    </span>
                    {selectedCert.institution && (
                      <>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-300 font-semibold">{selectedCert.institution}</span>
                      </>
                    )}
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-slate-400">
                      {selectedCert.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white pt-1">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors shrink-0"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status & Highlight Badges */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedCert.status} Qualification</span>
                  </span>
                </div>

                {selectedCert.achievement && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Achievement:</span>
                    <span className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-100 border border-slate-300/40 font-bold flex items-center gap-1.5 shadow-sm">
                      <SilverMedalIcon className="w-3.5 h-3.5" />
                      <span>{selectedCert.achievement}</span>
                      {selectedCert.score && (
                        <span className="text-cyan-300 font-mono ml-1">({selectedCert.score})</span>
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">
                  Certification Overview &amp; Scope
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Course Meta Details (Session, Year, Type) */}
              {(selectedCert.session || selectedCert.year || selectedCert.certificateType) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-850 text-xs font-mono">
                  {selectedCert.certificateType && (
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Certificate Type</span>
                      <span className="text-slate-200 font-semibold">{selectedCert.certificateType}</span>
                    </div>
                  )}
                  {selectedCert.session && (
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Course Session</span>
                      <span className="text-cyan-300">{selectedCert.session}</span>
                    </div>
                  )}
                  {selectedCert.year && (
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Academic Year</span>
                      <span className="text-slate-300">{selectedCert.year}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Syllabus Breakdown */}
              {certSyllabus[selectedCert.id] && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">
                    Evaluated Competency Domains
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {certSyllabus[selectedCert.id].map((topic, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-850 text-xs text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Action Bar: Certificate View & Verification */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] font-mono text-slate-400">
                  {selectedCert.certificateFile ? (
                    <a
                      href={selectedCert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </a>
                  ) : selectedCert.credentialUrl ? (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold flex items-center gap-1.5 hover:bg-cyan-500/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify Certificate</span>
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Official certificate verified on record</span>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 transition-colors w-full sm:w-auto"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
