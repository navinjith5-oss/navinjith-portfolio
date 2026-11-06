"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CyberHeroVisual() {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] flex items-center justify-center select-none pointer-events-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse" />

      {/* Rotating Outer Cyber Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-cyan-500/25"
      />

      {/* Counter-rotating Middle Ring with Segment Marks */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 sm:inset-12 rounded-full border border-slate-700/50"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_12px_#8b5cf6]" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300" />
      </motion.div>

      {/* Third Ring: Pulsating radar sweep */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-16 sm:inset-20 rounded-full border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
      />

      {/* SVG Radar Compass & Telemetry Reticle */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crosshair axes */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Diagonal ticks */}
        <line x1="72" y1="72" x2="100" y2="100" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="328" y1="72" x2="300" y2="100" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="72" y1="328" x2="100" y2="300" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="328" y1="328" x2="300" y2="300" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.4" />

        {/* Circular Degree Marks */}
        <circle cx="200" cy="200" r="160" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.2" />
        <circle cx="200" cy="200" r="120" stroke="#334155" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="75" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.35" />
      </svg>

      {/* Central Defensive Core Monogram / Hologram */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#0c1527] to-[#060913] border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] backdrop-blur-xl flex flex-col items-center justify-center p-3 text-center"
      >
        <div className="text-2xl sm:text-3xl font-mono font-black text-cyan-400 tracking-wider">
          NK
        </div>
        <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
          SEC-OPS // T1
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
          <span className="text-[9px] font-mono text-emerald-400 font-semibold">ACTIVE</span>
        </div>
      </motion.div>
    </div>
  );
}
