import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, ShieldCheck, Database, Layers, CheckCircle2, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>01. IDENTITY &amp; CORE FOCUS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          About Me
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          AI, systems, and problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Concise Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="p-4 rounded-xl bg-dark-900/60 border border-slate-850">
            I am an <strong className="text-white font-semibold">AI &amp; LLM professional</strong> currently working as an <span className="text-cyan-300 font-medium">LLM Post Training Expert L1 at Ethara AI</span>. My work centers on improving, evaluating, and shaping intelligent AI systems through structured post-training workflows, rubric-driven evaluation, and quality-focused feedback cycles.
          </p>

          <p>
            Beyond LLM post-training and prompt alignment, I bring hands-on software engineering discipline. I design and build reliable software systems—such as policy-gated AI recovery architectures and containerized database applications—ensuring intelligent recommendations are bounded by deterministic safeguards and transactional integrity.
          </p>

          {/* Key Competency Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-lg bg-dark-900/80 border border-slate-800 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">LLM Post-Training &amp; Alignment</div>
                <div className="text-xs text-slate-400 mt-0.5">Shaping model behavior via feedback loops &amp; prompt governance.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-dark-900/80 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">AI Evaluation &amp; Quality</div>
                <div className="text-xs text-slate-400 mt-0.5">Synthetic testing, confusion matrices, and rubric scoring.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-dark-900/80 border border-slate-800 flex items-start gap-3">
              <Database className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">System Architecture</div>
                <div className="text-xs text-slate-400 mt-0.5">Deterministic policy gating, HMAC security, idempotency.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-dark-900/80 border border-slate-800 flex items-start gap-3">
              <Layers className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Practical Problem Solving</div>
                <div className="text-xs text-slate-400 mt-0.5">Translating theoretical concepts into production-grade systems.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive AI Profile Terminal Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-dark-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">ai_profile_spec.json</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                ACTIVE
              </span>
            </div>

            {/* Profile Fields */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start justify-between border-b border-slate-850 pb-2.5">
                <span className="text-slate-400">Name</span>
                <span className="text-white font-semibold text-right">{PERSONAL_INFO.name}</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-850 pb-2.5">
                <span className="text-slate-400">Current Role</span>
                <span className="text-cyan-300 font-semibold text-right">{PERSONAL_INFO.currentRole}</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-850 pb-2.5">
                <span className="text-slate-400">Company</span>
                <span className="text-white font-semibold text-right">{PERSONAL_INFO.company}</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-850 pb-2.5">
                <span className="text-slate-400">Previous Experience</span>
                <span className="text-slate-300 text-right">Cube N Square — Intern</span>
              </div>

              <div className="flex items-start justify-between border-b border-slate-850 pb-2.5">
                <span className="text-slate-400">Core Focus</span>
                <span className="text-cyan-200 text-right">AI / LLM / Post-Training / Evaluation</span>
              </div>

              <div className="flex items-start justify-between pt-1">
                <span className="text-slate-400">Verification</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 text-right">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Truthful &amp; Verified</span>
                </span>
              </div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
