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
  Sparkles
} from "lucide-react";
import { portfolioData, Certification } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

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
            Industry credentials and specialized training programs in Security Operations Center workflows, SIEM analysis, and threat detection. Click any card to inspect full competency details.
          </p>
        </div>
      </motion.div>

      {/* Interactive Certifications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <TiltCard
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className={`p-6 sm:p-8 flex flex-col justify-between transition-all ${
              cert.featured
                ? "bg-gradient-to-b from-[#0c1629] to-[#070c17] border-2 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.18)]"
                : "bg-[#0f172a] border border-slate-800 hover:border-slate-700 shadow-xl"
            }`}
          >
            <div className="space-y-4">
              {cert.featured && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Flagship Credential</span>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  {cert.issuer}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{cert.status}</span>
                </span>
              </div>

              <h2 className="text-xl font-bold text-white leading-snug">
                {cert.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {cert.description}
              </p>
            </div>

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
        ))}
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {selectedCert.issuer}
                    </span>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedCert.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status & Verification Info */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Credential Status:</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedCert.status} Qualification</span>
                </span>
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">
                  Credential Scope
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

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

              {/* Modal Action Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Official certificate on record
                </span>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 transition-colors"
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
