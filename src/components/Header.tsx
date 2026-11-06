"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, FileText, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Certifications", href: "/certifications" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b16]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Navinjith K - Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:border-cyan-400 transition-all transform group-hover:scale-105">
              NK
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-500/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base leading-tight">
                {portfolioData.profile.name}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono flex items-center gap-1 font-medium">
                <Shield className="w-3 h-3 text-cyan-400" />
                EC-Council Certified SOC Analyst
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Sliding Indicator */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-950/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    active ? "text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 to-blue-950/90 border border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.25)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Terminal Command Palette Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/50 rounded-lg flex items-center gap-2 transition-all shadow-sm"
              title="Open Command Console (Ctrl+K)"
              aria-label="Open Command Console"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Console</span>
              <kbd className="text-[10px] bg-slate-800/90 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            {/* Resume Action */}
            <Link
              href="/resume"
              className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                pathname === "/resume"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/25 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/resume"
              className="p-2 text-cyan-300 bg-cyan-950/60 border border-cyan-700/60 rounded-lg text-xs"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-[#070b16]/95 backdrop-blur-2xl border-b border-slate-800 px-5 pt-3 pb-6 space-y-1 shadow-2xl"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 font-semibold"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold bg-cyan-500 text-slate-950 rounded-lg shadow-md"
              >
                View ATS Resume (PDF/DOCX)
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-command-palette"));
                }}
                className="w-full text-center py-2.5 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Launch Command Console
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
