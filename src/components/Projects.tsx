import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { RazorpayArchitectureVisualizer } from './RazorpayArchitectureVisualizer';
import { FolderGit2, ArrowUpRight, Github, ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const standardProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>06. VERIFIED SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Selected Work
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          From intelligent AI systems to practical software and data-driven solutions.
        </p>
      </div>

      {/* Flagship Featured AI Project Card (Large Visual Emphasis) */}
      <div className="mb-10 rounded-2xl bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-950 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 relative overflow-hidden group">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              FEATURED FLAGSHIP PROJECT 01
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {featuredProject.category}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>COMPLETED &amp; REPO VERIFIED</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3 mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
            {featuredProject.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {featuredProject.description}
          </p>

          {/* Central Architectural Rule Banner */}
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-200 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>
              <strong>Central Architectural Principle:</strong> "AI can recommend. Deterministic policy decides."
            </span>
          </div>
        </div>

        {/* Embedded Interactive Architecture Pipeline */}
        <div className="mb-6">
          <RazorpayArchitectureVisualizer />
        </div>

        {/* Tech Tags & CTA Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {featuredProject.technologies.map((t, idx) => (
              <span key={idx} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedProject(featuredProject)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <span>Inspect Full Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {featuredProject.githubUrl && (
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Other Projects (Completed + Coming Soon / In Development) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {standardProjects.map((project) => {
          const isCompleted = project.status === 'COMPLETED';
          const isComingSoon = project.status === 'COMING SOON';

          return (
            <div
              key={project.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative group ${
                isCompleted
                  ? 'bg-dark-900/80 border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
                  : 'bg-dark-900/40 border-slate-850 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-500">
                    PROJECT {project.number}
                  </span>
                  
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      isCompleted
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                        : isComingSoon
                        ? 'bg-slate-800 text-slate-400 border-slate-700'
                        : 'bg-amber-950/60 text-amber-300 border-amber-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1">
                  {project.category}
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="tech-badge text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  {isCompleted ? (
                    <>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono font-medium text-cyan-300 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      Card architecture ready for release
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
