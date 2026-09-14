import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, ChevronDown, ChevronUp, Cpu, CheckCircle2, Terminal, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  // Default open first experience (Ethara AI)
  const [expandedId, setExpandedId] = useState<string>('ethara-ai');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>02. PROFESSIONAL TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Experience
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          Hands-on roles across LLM post-training, evaluation, and software systems.
        </p>
      </div>

      {/* Interactive System Timeline Rail */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-500 before:to-slate-800">
        {EXPERIENCES.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-6 sm:-left-10 top-5 w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-dark-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/40'
                    : 'bg-dark-950 border-slate-700 text-slate-400 group-hover:border-indigo-400'
                }`}
              >
                {exp.isCurrent ? (
                  <Cpu className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
                ) : (
                  <span className="text-[10px] font-mono font-bold">{index + 1}</span>
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  exp.isCurrent
                    ? 'bg-dark-900/90 border-cyan-500/40 shadow-xl shadow-cyan-950/30'
                    : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header (Clickable) */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isExpanded}
                >
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        EXPERIENCE 0{index + 1}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>Current Role</span>
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                        {exp.company}
                      </h3>
                      <span className="text-slate-400 font-mono text-sm sm:text-base font-medium">
                        — {exp.role}
                      </span>
                    </div>

                    <p className="mt-1 text-xs sm:text-sm text-slate-300">
                      {exp.tagline}
                    </p>
                  </div>

                  {/* Expand Toggle Button */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="text-xs font-mono text-cyan-400 hidden sm:inline">
                      {isExpanded ? 'Collapse Details' : 'Expand Details'}
                    </span>
                    <div className="p-2 rounded-lg bg-dark-950 border border-slate-800 text-slate-300 group-hover:text-white group-hover:border-cyan-500/40 transition-colors">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 animate-in fade-in duration-200">
                    {/* Overview */}
                    <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-850">
                      <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>ROLE OVERVIEW</span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {exp.overview}
                      </p>
                    </div>

                    {/* Responsibilities & Workflows Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Responsibilities */}
                      <div className="p-4 rounded-xl bg-dark-950/60 border border-slate-850">
                        <h4 className="text-xs font-mono font-semibold text-cyan-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Core Responsibilities</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1 font-mono">▸</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Workflows */}
                      <div className="p-4 rounded-xl bg-dark-950/60 border border-slate-850">
                        <h4 className="text-xs font-mono font-semibold text-indigo-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Workflows &amp; Contributions</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.workflows.map((wf, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                              <span className="text-indigo-400 mt-1 font-mono">▸</span>
                              <span>{wf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tools & Verified Competencies */}
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-2">
                        VERIFIED TOOLS &amp; DOMAINS:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-200 border border-slate-800"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
