"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function CyberHeroVisual() {
  return (
    <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center select-none">
      
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Rotating Outer Cyber Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 pointer-events-none"
      />

      {/* Counter-rotating Middle Ring with Coordinate Segment Marks */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 sm:inset-8 rounded-full border border-slate-700/60 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_#8b5cf6]" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#06b6d4]" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#06b6d4]" />
      </motion.div>

      {/* SVG Radar Reticle & Axes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="230" y1="15" x2="230" y2="445" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="15" y1="230" x2="445" y2="230" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Diagonal ticks */}
        <line x1="85" y1="85" x2="115" y2="115" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="375" y1="85" x2="345" y2="115" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="85" y1="375" x2="115" y2="345" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="375" y1="375" x2="345" y2="345" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.45" />

        {/* Circular Degree Marks */}
        <circle cx="230" cy="230" r="190" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.25" />
        <circle cx="230" cy="230" r="150" stroke="#334155" strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>

      {/* Central Hero Portrait with Cyber Futuristic Frame */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl p-1 bg-gradient-to-br from-cyan-500/60 via-slate-800 to-violet-500/60 shadow-[0_0_50px_rgba(6,182,212,0.35)]"
      >
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-cyan-500/40 group">
          
          {/* Main Photo Image */}
          <Image
            src="/profile.jpg"
            alt="Navinjith K — Cybersecurity Professional"
            fill
            sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
            priority
            className="object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Futuristic subtle cyber scan line overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-slate-950/80 pointer-events-none" />

          {/* Cyber Corner HUD Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
          <div className="absolute bottom-10 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
          <div className="absolute bottom-10 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

          {/* Floating Lower Telemetry Badge */}
          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex items-center justify-between text-[10px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="text-emerald-400 font-bold">OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-300 font-semibold">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span>EC-Council CSA</span>
            </div>
          </div>

        </div>

        {/* Outer Top Hologram Pill */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#080d1a] border border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.3)] text-[10px] font-mono text-cyan-300 font-semibold tracking-wider uppercase whitespace-nowrap">
          NAVINJITH K // SOC T1
        </div>
      </motion.div>

    </div>
  );
}
