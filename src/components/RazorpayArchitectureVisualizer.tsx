import React, { useState } from 'react';
import { RAZORPAY_ARCHITECTURE_STEPS } from '../data/portfolioData';
import { Shield, Key, Cpu, ShieldAlert, GitBranch, BarChart3, Database, AlertTriangle } from 'lucide-react';

export const RazorpayArchitectureVisualizer: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('ai-recommendation');

  const activeStep = RAZORPAY_ARCHITECTURE_STEPS.find((s) => s.id === activeStepId) || RAZORPAY_ARCHITECTURE_STEPS[3];

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'webhook':
        return <GitBranch className="w-4 h-4 text-cyan-400" />;
      case 'security':
        return <Key className="w-4 h-4 text-amber-400" />;
      case 'idempotency':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'ai-recommendation':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'policy-engine':
        return <ShieldAlert className="w-4 h-4 text-purple-400" />;
      case 'action-router':
        return <GitBranch className="w-4 h-4 text-indigo-400" />;
      case 'outcome-eval':
        return <BarChart3 className="w-4 h-4 text-cyan-400" />;
      case 'metrics-audit':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <div className="rounded-2xl bg-dark-950/90 border border-slate-800 p-5 sm:p-6 shadow-inner space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
        <div>
          <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE PIPELINE ARCHITECTURE</span>
          </div>
          <h4 className="text-base font-bold text-white font-display mt-0.5">
            8-Stage Deterministic Policy Gating Pipeline
          </h4>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Click any step to inspect technical constraints
        </div>
      </div>

      {/* 8-Stage Flow Grid / Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {RAZORPAY_ARCHITECTURE_STEPS.map((step, idx) => {
          const isSelected = activeStepId === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`p-3 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-400 text-white ring-1 ring-cyan-400/50 shadow-md'
                  : 'bg-dark-900/80 border-slate-850 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-dark-950 border border-slate-800">
                  {getStepIcon(step.id)}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  0{idx + 1}
                </span>
              </div>

              <div className="text-[11px] font-semibold tracking-tight line-clamp-2 leading-tight">
                {step.title}
              </div>

              {step.highlight && (
                <span className="text-[9px] font-mono text-cyan-300 mt-1 block">
                  ● Critical Gate
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep Dive */}
      <div className="p-4 sm:p-5 rounded-xl bg-dark-900/90 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              STAGE 0{activeStep.stepNumber}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Tech: <strong className="text-slate-200">{activeStep.tech}</strong>
            </span>
          </div>

          <h5 className="text-base font-bold text-white font-display">
            {activeStep.title} — {activeStep.subtitle}
          </h5>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeStep.description}
          </p>

          {activeStep.rule && (
            <div className="mt-2 p-2.5 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-cyan-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-slate-300">Deterministic Enforcement:</strong> {activeStep.rule}
              </span>
            </div>
          )}
        </div>

        {/* Central Architecture Message Reminder */}
        <div className="md:w-64 p-4 rounded-lg bg-dark-950 border border-slate-800 text-center flex-shrink-0">
          <div className="text-[10px] font-mono text-slate-500 uppercase">Core Architectural Rule</div>
          <div className="text-xs font-mono font-bold text-cyan-300 mt-1">
            "AI can recommend.<br />Deterministic policy decides."
          </div>
          <div className="text-[10px] text-slate-400 mt-2">
            No unvalidated LLM output touches financial execution.
          </div>
        </div>
      </div>
    </div>
  );
};
