import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      <div className="rounded-2xl bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-950 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-950 border border-slate-800 text-xs font-mono text-cyan-400">
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB REPOSITORY ARCHIVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Explore My Work
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore my repositories, experiments, and technical projects. All repositories emphasize strict software design patterns, policy gating, and containerized architectures.
            </p>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 transition-all duration-300 shadow-md shadow-cyan-500/20"
              >
                <Github className="w-4 h-4 text-dark-950" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-dark-950" />
              </a>
            </div>
          </div>

          {/* Right Column: Verified Repositories Card */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-dark-950/90 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                  -AI-Revenue-Recovery-System-RazorPay
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Python
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                Policy-gated AI Revenue Recovery architecture with HMAC SHA-256 verification and 500-event synthetic evaluation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/90 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
                  inventory-management-system
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  React / FastAPI
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                Containerized operational dashboard with atomic stock deduction, unique SKU constraints, and Docker Compose.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-dark-950/50 border border-slate-855 text-center">
              <span className="text-[11px] font-mono text-slate-500">
                github.com/raghavmishra111122-spec
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
