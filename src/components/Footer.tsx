import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-900 bg-dark-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Role */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <BrandLogo showText={false} />
          <div>
            <div className="text-sm font-bold text-white font-display">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs font-mono text-slate-400">
              {PERSONAL_INFO.currentRole} @ {PERSONAL_INFO.company}
            </div>
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
        <div>
          © 2026 Raghav Mishra. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>AI / LLM Post-Training &amp; Systems</span>
          <span>•</span>
          <span className="text-slate-400">Production Portfolio</span>
        </div>
      </div>
    </footer>
  );
};
