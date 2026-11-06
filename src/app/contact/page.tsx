"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Linkedin, 
  Github, 
  MapPin, 
  ShieldCheck, 
  FileText,
  Clock,
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
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
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries &amp; Hiring Channels</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get in Touch with Navinjith K
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Actively available for Tier 1 SOC Analyst, Entry-Level SOC Analyst, and Cybersecurity Analyst opportunities. Direct email or LinkedIn connections receive prompt response.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {profile.location}
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Response SLA: Within 24 Hours
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3 Interactive Contact Cards with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Direct Email Card */}
        <TiltCard className="p-8 bg-[#0f172a] border border-slate-800 hover:border-cyan-500/50 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Professional Email
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Direct route to primary personal inbox.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-slate-200 border border-slate-850 break-all select-all">
              {profile.email}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <a
              href={`mailto:${profile.email}?subject=Cybersecurity%20Opportunity%20-%20Navinjith%20K`}
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Launch Mail Client</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-sans font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </TiltCard>

        {/* 2. LinkedIn Profile */}
        <TiltCard className="p-8 bg-[#0f172a] border border-slate-800 hover:border-blue-500/50 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/60 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                LinkedIn Network
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Connect professionally, review endorsements, or send a direct InMail.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
              navinjith-k-871107254
            </div>
          </div>

          <div className="pt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </TiltCard>

        {/* 3. GitHub Profile */}
        <TiltCard className="p-8 bg-[#0f172a] border border-slate-800 hover:border-violet-500/50 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-violet-950/70 border border-violet-800/60 flex items-center justify-center text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                GitHub Repositories
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Inspect SecureLoop AI public scanner codebase, commits, and unit tests.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
              navinjith5-oss
            </div>
          </div>

          <div className="pt-2">
            <a
              href={portfolioData.featuredProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>View SecureLoop AI Code</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </TiltCard>

      </div>

      {/* Target Focus Callout */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1322] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-white text-base">
            Actively Available for Immediate Opportunities
          </h3>
          <p className="text-xs text-slate-400">
            Target Focus: Tier 1 SOC Analyst &bull; Entry-Level SOC Analyst &bull; Cybersecurity Analyst
          </p>
        </div>

        <Link
          href="/resume"
          className="px-5 py-2.5 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/25 text-xs font-semibold flex items-center gap-2 transition-all self-start md:self-auto"
        >
          <FileText className="w-4 h-4" />
          <span>View ATS Resume &amp; Downloads</span>
        </Link>
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
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/resume"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </div>

    </div>
  );
}
