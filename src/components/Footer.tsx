import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080f] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200 text-sm">
                {portfolioData.profile.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-850">
                EC-Council CSA
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              Entry-Level &amp; Tier 1 SOC Analyst Portfolio &bull; Kozhikode, Kerala, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Overview
            </Link>
            <Link href="/experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </Link>
            <Link href="/projects/secureloop-ai" className="hover:text-cyan-400 transition-colors">
              SecureLoop AI
            </Link>
            <Link href="/skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="/certifications" className="hover:text-cyan-400 transition-colors">
              Certifications
            </Link>
            <Link href="/education" className="hover:text-cyan-400 transition-colors">
              Education
            </Link>
            <Link href="/resume" className="hover:text-cyan-400 transition-colors">
              ATS Resume
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

        </div>

        {/* Responsible Security & Ethics Disclaimer */}
        <div className="text-[11px] text-slate-500 space-y-1 leading-relaxed">
          <p>
            <strong>Security &amp; Responsible Disclosure Notice:</strong> All security tools and assessment scripts (including SecureLoop AI) are strictly designed for authorized lab environments and defensive security research. Scans require explicit confirmation of testing authorization.
          </p>
          <p>
            Simulated findings in local development are clearly marked as simulated test records. No private target data, credentials, or proprietary client records are hosted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-500 text-[11px] font-mono">
          <div>
            &copy; {currentYear} Navinjith K. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Navinjith_K_Resume.pdf"
              download="Navinjith_K_Resume.pdf"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume PDF</span>
            </a>
            <span>&bull;</span>
            <a
              href="/Navinjith_K_Resume.docx"
              download="Navinjith_K_Resume.docx"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume DOCX</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
