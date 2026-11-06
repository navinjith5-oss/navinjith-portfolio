"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Linkedin, 
  Github, 
  MapPin, 
  ShieldCheck, 
  FileText 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

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
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Professional Channels</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get in Touch with Navinjith K
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Actively available for Tier 1 SOC Analyst, Entry-Level SOC Analyst, and Cybersecurity Analyst opportunities. Direct email or LinkedIn connections are welcomed.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {profile.location}
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                Primary Inbox Response: &lt; 24h
              </span>
            </div>
          </div>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Direct Email Card with One-Click Copy */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">
                Professional Email
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Direct route to primary personal inbox.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-200 border border-slate-850 break-all select-all">
                {profile.email}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${profile.email}?subject=Cybersecurity%20Opportunity%20-%20Navinjith%20K`}
                className="w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.2)]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-sans">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. LinkedIn Profile */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Linkedin className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">
                LinkedIn Profile
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect professionally, review credentials, or initiate chat.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
                navinjith-k-871107254
              </div>
            </div>

            <div className="pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 3. GitHub Profile */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <Github className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">
                GitHub Repositories
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Inspect public SecureLoop AI code, commits, and tests.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
                navinjith5-oss
              </div>
            </div>

            <div className="pt-2">
              <a
                href={portfolioData.featuredProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>View SecureLoop AI Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Target Profile Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0c1322] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">
              Ready for Technical Interviews &amp; SOC Assessments
            </h3>
            <p className="text-xs text-slate-400">
              Target roles: Tier 1 SOC Analyst &bull; Entry-Level SOC Analyst &bull; Cybersecurity Analyst
            </p>
          </div>

          <Link
            href="/resume"
            className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-semibold flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <FileText className="w-4 h-4" />
            <span>View &amp; Download ATS Resume</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
