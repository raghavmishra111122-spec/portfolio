import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GraduationCap, Sparkles, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>03. ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Education
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          Formal engineering and scientific training in Computer Science &amp; Artificial Intelligence.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 via-slate-700 before:to-slate-800">
        {EDUCATION_ITEMS.map((edu, index) => {
          return (
            <div key={edu.id} className="relative group">
              {/* Timeline Node */}
              <div
                className={`absolute -left-6 sm:-left-10 top-5 w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  edu.highlight
                    ? 'bg-dark-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/30'
                    : 'bg-dark-950 border-slate-700 text-slate-400'
                }`}
              >
                {edu.highlight ? (
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400" />
                ) : (
                  <BookOpen className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-slate-400" />
                )}
              </div>

              {/* Education Card */}
              <div
                className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                  edu.highlight
                    ? 'bg-gradient-to-br from-dark-900/95 via-dark-900/90 to-dark-850/80 border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                    : 'bg-dark-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded ${
                        edu.highlight
                          ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                          : 'bg-slate-800/80 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {edu.highlight ? 'PRIMARY EDUCATION' : `EDUCATION 0${index + 1}`}
                    </span>

                    {edu.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Currently Pursuing</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3
                    className={`font-display font-bold text-lg sm:text-xl ${
                      edu.highlight ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {edu.institution}
                  </h3>

                  <div
                    className={`font-mono text-sm sm:text-base ${
                      edu.highlight ? 'text-cyan-300 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    {edu.degree}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Kanpur, Uttar Pradesh, India</span>
                  </div>

                  {edu.description && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
