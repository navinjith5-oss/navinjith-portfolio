import React from "react";
import Hero from "@/components/Hero";
import ExecutiveOverviewGrid from "@/components/ExecutiveOverviewGrid";
import Link from "next/link";
import { Shield, ArrowRight, UserCheck, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="page-enter">
      <Hero />
      <ExecutiveOverviewGrid />

      {/* Brief Philosophical Summary Banner */}
      <section className="py-16 bg-[#060a12] border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0c1424] border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono">
                <Shield className="w-3 h-3" />
                <span>Defensive Operations Focus</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Bridging Cyber Forensics &amp; SOC Threat Monitoring
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combining a degree in Cyber Forensics with ongoing MCA study and 8 months of internship experience at RedTeam Hacker Academy. Dedicated to disciplined alert triage, telemetry analysis, and reproducible vulnerability assessments.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects/secureloop-ai"
                className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>SecureLoop AI Prototype</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs flex items-center justify-center transition-colors"
              >
                Direct Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
