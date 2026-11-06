"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  Terminal, 
  Sparkles,
  MapPin,
  ChevronDown
} from "lucide-react";
import CyberHeroVisual from "@/components/CyberHeroVisual";
import MagneticButton from "@/components/MagneticButton";

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Central Screen: Minimalist, Cinematic Visual Composition */}
      <div className="max-w-7xl mx-auto w-full my-auto py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Primary Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>EC-Council Certified SOC Analyst (CSA)</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-mono">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Kozhikode, India</span>
              </div>
            </motion.div>

            {/* Dominant Name Element */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase font-sans leading-[1.02]">
                NAVINJITH <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">K</span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl font-semibold text-cyan-300 font-mono tracking-wide pt-1">
                Cybersecurity Professional | Security Operations | AI-Powered Security Projects
              </p>
            </motion.div>

            {/* Short Impactful Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Exploring the intersection of cybersecurity, intelligent automation, and secure digital systems.
            </motion.p>

            {/* Two Primary Action Buttons */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/projects"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/resume"
                  className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Fast Jump Shortcut Bar */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <span className="text-cyan-400">&gt;</span> Direct navigation:
              </span>
              <Link href="/about" className="text-slate-400 hover:text-cyan-300 underline underline-offset-4 decoration-slate-800 transition-colors">
                About
              </Link>
              <Link href="/skills" className="text-slate-400 hover:text-cyan-300 underline underline-offset-4 decoration-slate-800 transition-colors">
                Skills
              </Link>
              <Link href="/certifications" className="text-slate-400 hover:text-cyan-300 underline underline-offset-4 decoration-slate-800 transition-colors">
                Certifications
              </Link>
              <Link href="/experience" className="text-slate-400 hover:text-cyan-300 underline underline-offset-4 decoration-slate-800 transition-colors">
                Experience
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Elegant Animated Cyber Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center py-4 lg:py-0"
          >
            <CyberHeroVisual />
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Ambient Telemetry Bar */}
      <div className="max-w-7xl mx-auto w-full pt-4 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>CYBER FORENSICS (BCA) &bull; MASTER OF COMPUTER APPLICATIONS (MCA)</span>
        </div>
        <div className="flex items-center gap-3">
          <span>FLAGSHIP: SECURELOOP AI</span>
          <span>&bull;</span>
          <Link href="/contact" className="text-cyan-400/80 hover:text-cyan-300 transition-colors">
            CONTACT NAVINJITH &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
