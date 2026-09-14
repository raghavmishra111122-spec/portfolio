import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Sparkles, Github, Linkedin, Mail, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onConnectClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient-hero"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-950/40 mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
            {PERSONAL_INFO.statusBadge}
          </span>
        </div>

        {/* Hero Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Primary Role */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 font-mono text-sm sm:text-base font-semibold shadow-inner">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>LLM Post-Training L1</span>
            <span className="text-slate-500">@</span>
            <span className="text-cyan-300 font-bold tracking-wide">Ethara AI</span>
          </div>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 text-balance">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 text-dark-950" />
          </button>

          <button
            onClick={onConnectClick}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 hover:bg-dark-850 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Social & Verification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-800/80 w-full max-w-2xl">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-900/70 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-900/70 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-900/70 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900/40 border border-slate-850 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Policy Gating &amp; Evaluation</span>
          </div>
        </div>

        {/* Mini Terminal Philosophy Bar */}
        <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-dark-950/90 border border-slate-800/80 text-[11px] font-mono text-slate-400 shadow-sm">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-500">core_paradigm:</span>
          <span className="text-slate-200">"AI can recommend. Deterministic policy decides."</span>
        </div>

      </div>
    </section>
  );
};
