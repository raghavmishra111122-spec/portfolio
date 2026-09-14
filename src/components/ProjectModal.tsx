import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import { RazorpayArchitectureVisualizer } from './RazorpayArchitectureVisualizer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'results'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-dark-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800/80 bg-dark-900/90">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Title & Tagline */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Central Architectural Rule (if present) */}
          {project.centralMessage && (
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>
                <strong>Core Directive:</strong> {project.centralMessage}
              </span>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview &amp; Problem
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architecture &amp; Flow
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'features'
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                activeTab === 'results'
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tech Stack &amp; Verification
            </button>
          </div>

          {/* Tab 1: Overview & Problem */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-sm text-slate-300 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-dark-900 border border-slate-850">
                <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Project Overview</span>
                </h4>
                <p className="leading-relaxed">{project.description}</p>
              </div>

              {project.problem && (
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-850">
                  <h4 className="text-xs font-mono font-semibold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>Problem Statement &amp; Challenges</span>
                  </h4>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-850">
                  <h4 className="text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>Engineered Solution</span>
                  </h4>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Architecture & Flow */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {project.id === 'ai-revenue-recovery' ? (
                <RazorpayArchitectureVisualizer />
              ) : (
                <div className="p-5 rounded-xl bg-dark-900 border border-slate-800 space-y-4">
                  <h4 className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                    Three-Tier Containerized Architecture
                  </h4>
                  <div className="p-4 rounded-lg bg-dark-950 font-mono text-xs text-slate-300 space-y-2">
                    <div className="text-cyan-400">React Frontend SPA (Vite)</div>
                    <div className="pl-4 text-slate-500">│  (HTTP / OpenAPI Client)</div>
                    <div className="pl-4 text-slate-500">▼</div>
                    <div className="text-indigo-400">FastAPI Backend Engine (Typed REST API &amp; Pydantic)</div>
                    <div className="pl-4 text-slate-500">│  (Atomic SQLAlchemy Transactions)</div>
                    <div className="pl-4 text-slate-500">▼</div>
                    <div className="text-emerald-400">PostgreSQL Relational DB (ACID Unique Indexes &amp; Rollback)</div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Inventory verification and stock deduction happen atomically during order placement. If any stock item is insufficient, the transaction rolls back cleanly without inconsistent records.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Key Features */}
          {activeTab === 'features' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Documented &amp; Verified Features
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features?.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-dark-900 border border-slate-850 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Tech Stack & Results */}
          {activeTab === 'results' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono text-slate-400 mb-2.5 uppercase tracking-wider">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-900 text-slate-200 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.results && (
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-850 space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                    Evaluation &amp; System Results:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {project.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-dark-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Source of Truth: Verified GitHub Repository
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
