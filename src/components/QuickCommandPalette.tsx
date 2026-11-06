"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Terminal, X, CornerDownLeft, Shield, FileText, ArrowRight } from "lucide-react";

export default function QuickCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  const commands = [
    { cmd: "projects", label: "View SecureLoop AI Project", action: () => router.push("/projects/secureloop-ai") },
    { cmd: "resume", label: "View ATS Resume & Downloads", action: () => router.push("/resume") },
    { cmd: "experience", label: "Jump to Cybersecurity Internship", action: () => router.push("/#experience") },
    { cmd: "certifications", label: "View EC-Council CSA Certification", action: () => router.push("/#certifications") },
    { cmd: "skills", label: "View SIEM & Technical Proficiencies", action: () => router.push("/#skills") },
    { cmd: "about", label: "About Navinjith K & Background", action: () => router.push("/#about") },
    { cmd: "contact", label: "Contact Information & Direct Email", action: () => router.push("/#contact") },
  ];

  const filteredCommands = commands.filter((c) =>
    c.cmd.toLowerCase().includes(inputVal.toLowerCase()) ||
    c.label.toLowerCase().includes(inputVal.toLowerCase())
  );

  const executeCommand = (cmdObj: typeof commands[0]) => {
    cmdObj.action();
    setIsOpen(false);
    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredCommands.length > 0) {
      executeCommand(filteredCommands[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Command Palette"
    >
      <div
        className="w-full max-w-lg rounded-xl bg-[#0c1424] border border-cyan-500/40 shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#080d1a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold text-slate-300">
              soc-analyst-terminal &ndash; quick navigation
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <form onSubmit={handleFormSubmit} className="p-3 border-b border-slate-800 flex items-center gap-2 bg-[#0d172c]">
          <span className="text-cyan-400 font-mono text-sm font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a section name (e.g. projects, resume, csa, skills)..."
            className="w-full bg-transparent border-none text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-0"
            autoFocus
          />
          <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">
            Enter
          </span>
        </form>

        {/* Command list */}
        <div className="p-2 max-h-72 overflow-y-auto space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500 font-mono">
              No matching section found. Try typing &ldquo;projects&rdquo;, &ldquo;resume&rdquo;, or &ldquo;certifications&rdquo;.
            </div>
          ) : (
            filteredCommands.map((item, idx) => (
              <button
                key={item.cmd}
                onClick={() => executeCommand(item)}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${
                  idx === 0
                    ? "bg-cyan-950/70 border border-cyan-800/80 text-cyan-300"
                    : "hover:bg-slate-800/60 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    /{item.cmd}
                  </span>
                  <span className="text-xs text-slate-300">
                    {item.label}
                  </span>
                </div>
                <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
              </button>
            ))
          )}
        </div>

        {/* Helper footer */}
        <div className="px-4 py-2 bg-[#080d1a] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate using ordinary links anytime</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
}
