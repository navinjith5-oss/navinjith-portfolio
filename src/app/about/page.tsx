"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Shield, 
  UserCheck, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Search, 
  FileText,
  Building,
  GraduationCap
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";

export default function AboutPage() {
  const { profile } = portfolioData;

  const corePillars = [
    {
      title: "Cyber Forensics Foundation",
      description: "Trained in digital evidence recovery, file system artifacts, network packet investigation, and strict chain of custody protocols at Yenepoya University (2021–2024).",
      icon: <Search className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "SOC Operations & Triage",
      description: "Supported real-time alert triage, SIEM correlation (Splunk, QRadar, Sentinel), and vulnerability assessments during an 8-month internship at RedTeam Hacker Academy.",
      icon: <Shield className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Systems & Security Tooling",
      description: "Expanding into advanced software architecture through MCA studies at Adi Shankara Institute; creator of the open-source SecureLoop AI assessment prototype.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Defensive Security Ethics",
      description: "Committed to responsible disclosure, repeatable validation, transparent testing authorization, and structured executive and technical incident reporting.",
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />
    }
  ];

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

      {/* Header Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1426] via-[#090e1c] to-[#070b16] border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Profile &amp; Background</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Navinjith K
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Cyber Forensics graduate, MCA student, and EC-Council Certified SOC Analyst specializing in defensive monitoring, SIEM log analysis, and automated security assessment tooling.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Location: Kozhikode, Kerala, India
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-cyan-300">
              EC-Council CSA Certified
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Languages: English, Malayalam, Hindi
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Narrative & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Narrative Article */}
        <div className="lg:col-span-8 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0c1322]/80 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-3 border-b border-slate-800">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>The Investigative &amp; Defensive Journey</span>
          </h2>

          <p>
            My journey in cybersecurity started with an undergraduate specialization in <strong>Cyber Forensics</strong> at Yenepoya University (2021&ndash;2024). Studying the anatomy of file systems, memory artifacts, network packets, and evidence preservation gave me a fundamental appreciation for how digital adversaries interact with modern operating systems.
          </p>

          <p>
            To expand beyond post-incident investigation into software architecture and automated security orchestration, I am currently completing my <strong>Master of Computer Applications (MCA)</strong> at Adi Shankara Institute of Engineering and Technology. This software engineering background bridges the gap between raw defensive telemetry and software development.
          </p>

          <p>
            During my 8-month tenure as a <strong>Cybersecurity Intern at RedTeam Hacker Academy</strong> (August 2024&ndash;March 2025), I participated in daily SOC workflows, alert correlation, and vulnerability scans across enterprise SIEM solutions including Splunk, IBM QRadar, and Microsoft Sentinel.
          </p>

          <p>
            As an <strong>EC-Council Certified SOC Analyst (CSA)</strong>, I channel this combined experience into defensive security operations: improving alert triage speed, reducing analytical fatigue through structured normalization (as built in <strong>SecureLoop AI</strong>), and providing dependable tier-1 incident support.
          </p>

          {/* Quick Quote */}
          <div className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-cyan-500 text-slate-200 text-sm italic">
            &ldquo;Effective defense is built on deep forensic curiosity, disciplined alert correlation, and continuous operational clarity.&rdquo;
          </div>
        </div>

        {/* Side Highlights Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Image
                  src="/profile.jpg"
                  alt="Navinjith K"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Navinjith K</h3>
                <p className="text-xs font-mono text-cyan-400">Certified SOC Analyst</p>
              </div>
            </div>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-slate-400">Industry Credential:</span>
                <span className="text-cyan-300 font-mono font-semibold">EC-Council CSA</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-slate-400">Internship:</span>
                <span className="text-slate-300 font-mono">RedTeam Hacker Academy</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-slate-400">Forensics Degree:</span>
                <span className="text-slate-300 font-mono">Yenepoya University</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Advanced Degree:</span>
                <span className="text-amber-300 font-mono">MCA (In Progress)</span>
              </div>
            </div>

            <Link
              href="/resume"
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View ATS-Friendly Resume</span>
            </Link>
          </div>
        </div>

      </div>

      {/* 4 Pillars Grid with 3D Tilt Hover */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Core Professional Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <TiltCard key={idx} className="p-6 sm:p-8 bg-[#0f172a] border border-slate-800 hover:border-cyan-500/50 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Page-Wise Navigation Footer */}
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
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/skills"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            View Skills Matrix
          </Link>
        </div>
      </div>

    </div>
  );
}
