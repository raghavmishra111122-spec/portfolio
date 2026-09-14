import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, ArrowUpRight, Network } from 'lucide-react';

export const LinkedInSection: React.FC = () => {
  return (
    <section id="linkedin-cta" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/40 via-dark-900 to-indigo-950/40 border border-cyan-500/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300">
            <Network className="w-3.5 h-3.5" />
            <span>PROFESSIONAL NETWORKING</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Let's Connect
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in AI, LLMs, intelligent systems, or potential opportunities? Let's connect.
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            <Linkedin className="w-4 h-4 text-dark-950" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-dark-950" />
          </a>
        </div>
      </div>
    </section>
  );
};
