import React, { useState } from 'react';
import { AI_PIPELINE_STEPS } from '../data/portfolioData';
import { Sparkles, Terminal, Cpu, ShieldCheck, UserCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

export const AIFocus: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(3); // Default on Evaluation

  const activeStepData = AI_PIPELINE_STEPS.find((s) => s.step === selectedStep) || AI_PIPELINE_STEPS[2];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="ai-focus" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>05. AI METHODOLOGY &amp; SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Working With Intelligent Systems
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          Understanding the journey from raw model output to verified, deterministic AI behavior.
        </p>
      </div>

      {/* Interactive 5-Stage Pipeline Rail */}
      <div className="rounded-2xl bg-dark-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        
        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
          {AI_PIPELINE_STEPS.map((step) => {
            const isSelected = selectedStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(step.step)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/80 to-dark-950 border-cyan-400 text-white shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-400/40'
                    : 'bg-dark-950/70 border-slate-850 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`p-2 rounded-lg ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400 group-hover:text-slate-300'
                    }`}
                  >
                    {getStepIcon(step.iconName)}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                    STAGE 0{step.step}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold font-display text-white">
                    {step.name}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 line-clamp-1 mt-0.5">
                    {step.shortDesc}
                  </div>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-slate-800/80">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                STAGE {activeStepData.step}: {activeStepData.name.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeStepData.shortDesc}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              {activeStepData.name} — Architecture &amp; Methodology
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeStepData.detailedDesc}
            </p>

            {/* Key Aspects Chips */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2">KEY METHODOLOGICAL PILLARS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeStepData.keyAspects.map((aspect, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-dark-950 border border-slate-850 text-xs font-mono text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{aspect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mini Execution Visualizer */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-dark-950/90 border border-slate-800 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-850 text-[11px]">
              <span>pipeline_runtime.py</span>
              <span className="text-emerald-400">STATUS: VERIFIED</span>
            </div>

            <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
              <div className="text-slate-500"># Continuous Alignment Cycle</div>
              <div><span className="text-purple-400">def</span> <span className="text-cyan-300">execute_cycle</span>(prompt_ctx, rubric):</div>
              <div className="pl-4">inference = model.generate(prompt_ctx)</div>
              <div className="pl-4">eval_metrics = evaluator.benchmark(inference, rubric)</div>
              <div className="pl-4"><span className="text-purple-400">if not</span> policy.validate(eval_metrics):</div>
              <div className="pl-8 text-amber-400">route_to_human_feedback(inference)</div>
              <div className="pl-4"><span className="text-purple-400">return</span> apply_post_training_tuning(eval_metrics)</div>
            </div>

            <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
              <span>Selected Stage:</span>
              <span className="text-cyan-300 font-semibold">{activeStepData.name} (Step {activeStepData.step}/5)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
