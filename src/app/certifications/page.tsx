import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: "Certifications & Credentials | Navinjith K",
  description: "EC-Council Certified SOC Analyst (CSA), CICSA, and IBM Advanced Cybersecurity certifications for Navinjith K.",
};

export default function CertificationsPage() {
  const { certifications } = portfolioData;

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
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Industry Certifications &amp; Credentials
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Industry credentials and specialized training in Security Operations Center workflows, SIEM analysis, and threat detection.
            </p>
          </div>
        </div>

        {/* Detailed Certification Cards */}
        <div className="space-y-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-8 rounded-xl transition-all shadow-xl ${
                cert.featured
                  ? "bg-[#0c1629] border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] relative"
                  : "bg-[#0f172a] border border-slate-800"
              }`}
            >
              {cert.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-mono font-bold uppercase tracking-wide mb-4">
                  Flagship Industry Certification
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">&bull;</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {cert.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {cert.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-800/50 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.status}</span>
                  </span>
                </div>
              </div>

              {/* Description & Syllabus breakdown */}
              <div className="pt-4 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {certSyllabus[cert.id] && (
                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">
                      Core Competency Domains Evaluated
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {certSyllabus[cert.id].map((topic, i) => (
                        <div key={i} className="p-2.5 rounded bg-slate-950/70 border border-slate-850 text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
              href="/education"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              View Education &rarr;
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
