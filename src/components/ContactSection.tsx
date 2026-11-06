"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ExternalLink, Linkedin, Github, FileText, ShieldAlert } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
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
    <section id="contact" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#080d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Actively available for Tier 1 SOC Analyst, Entry-Level SOC Analyst, and Cybersecurity Analyst opportunities. 
            Direct email or LinkedIn is preferred.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card with Copy Action */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                Professional Email
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct route to primary inbox.
              </p>
              <div className="mt-3 p-2.5 rounded bg-slate-950 font-mono text-xs text-slate-200 border border-slate-850 break-all select-all">
                {profile.email}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={`mailto:${profile.email}?subject=Cybersecurity%20Opportunity%20-%20Navinjith%20K`}
                className="flex-1 py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs text-center transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-sans">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Connect professionally, inspect endorsements, and message directly.
              </p>
              <div className="mt-3 p-2.5 rounded bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
                navinjith-k-871107254
              </div>
            </div>

            <div className="pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* GitHub Profile */}
          <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-3">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                GitHub Repositories
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Inspect SecureLoop AI public scanner codebase, commits, and tests.
              </p>
              <div className="mt-3 p-2.5 rounded bg-slate-950 font-mono text-xs text-slate-300 border border-slate-850 truncate">
                navinjith5-oss
              </div>
            </div>

            <div className="pt-2">
              <a
                href={portfolioData.featuredProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open SecureLoop AI Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Public site phone setting note */}
        {profile.showPhoneOnPublicSite && (
          <div className="mt-6 p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Direct Phone: <strong className="text-slate-200 font-mono">{profile.phone}</strong></span>
            <span className="text-[11px] text-slate-500 font-mono">IST Timezone (+5:30 GMT)</span>
          </div>
        )}

      </div>
    </section>
  );
}
