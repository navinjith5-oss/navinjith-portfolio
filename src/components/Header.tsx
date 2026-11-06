"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X, FileText, Terminal, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#0b111e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Navinjith K - Portfolio Home"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 transition-colors">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors text-sm sm:text-base leading-tight">
                {portfolioData.profile.name}
              </span>
              <span className="text-[11px] text-cyan-400/90 font-mono flex items-center gap-1">
                <Shield className="w-3 h-3 text-cyan-400" />
                EC-Council Certified SOC Analyst
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Terminal Command Palette Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="px-2.5 py-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 rounded-md flex items-center gap-1.5 transition-colors"
              title="Open Navigation Console (Ctrl+K)"
              aria-label="Open Navigation Console"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Console</span>
              <kbd className="text-[10px] bg-slate-800 px-1 py-0.5 rounded text-slate-400 border border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            {/* Resume Link */}
            <Link
              href="/resume"
              className="px-3.5 py-1.5 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 rounded-md flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.1)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/resume"
              className="p-1.5 text-cyan-300 bg-cyan-950/40 border border-cyan-700/50 rounded-md text-xs flex items-center gap-1"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c1322] border-b border-slate-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-md"
            >
              View ATS Resume
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-command-palette"));
              }}
              className="w-full text-center py-2 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-md flex items-center justify-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Open Terminal Console
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
