import React, { useState } from 'react';
import { SKILL_CATEGORIES, KNOWLEDGE_GRAPH_NODES } from '../data/portfolioData';
import { Code2, Network, CheckCircle2, Info, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai-core');

  const activeNode = KNOWLEDGE_GRAPH_NODES.find((n) => n.id === activeNodeId) || KNOWLEDGE_GRAPH_NODES[0];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>04. CAPABILITIES &amp; ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Skills &amp; Capabilities
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base font-normal">
          Disciplined expertise spanning LLM post-training, full-stack systems, and analytical rigor.
        </p>
      </div>

      {/* Interactive AI Knowledge Graph Visualizer */}
      <div className="mb-14 rounded-2xl bg-dark-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Network className="w-4 h-4" />
              <span>INTERACTIVE AI KNOWLEDGE GRAPH</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display mt-1">
              Neural Alignment &amp; Evaluation Topology
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Select any node to inspect semantic connections</span>
          </div>
        </div>

        {/* Graph Nodes Canvas / Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Node Selector Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {KNOWLEDGE_GRAPH_NODES.map((node) => {
              const isSelected = activeNodeId === node.id;
              const isConnected = activeNode?.connections.includes(node.id);

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 border relative ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-lg shadow-cyan-900/40 ring-1 ring-cyan-400/50'
                      : isConnected
                      ? 'bg-slate-900/90 border-indigo-500/50 text-slate-200'
                      : 'bg-dark-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected
                          ? 'bg-cyan-400 animate-pulse'
                          : isConnected
                          ? 'bg-indigo-400'
                          : 'bg-slate-600'
                      }`}
                    />
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {node.category}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold tracking-tight">
                    {node.label}
                  </div>
                  {isConnected && !isSelected && (
                    <span className="text-[10px] font-mono text-indigo-300 mt-1 block">
                      Connected Link
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-dark-950/90 border border-slate-800 relative">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>NODE SPECIFICATION</span>
            </div>
            <h4 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-2">
              <span>{activeNode.label}</span>
              <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                {activeNode.category.toUpperCase()}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {activeNode.description}
            </p>

            <div className="border-t border-slate-850 pt-3">
              <div className="text-xs font-mono text-slate-400 mb-2">Connected Topology:</div>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.connections.map((connId) => {
                  const target = KNOWLEDGE_GRAPH_NODES.find((n) => n.id === connId);
                  return (
                    <button
                      key={connId}
                      onClick={() => setActiveNodeId(connId)}
                      className="text-xs font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 hover:border-cyan-500/50 transition-colors"
                    >
                      → {target ? target.label : connId}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Skill Cards (No arbitrary percentages) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-dark-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  CATEGORY 0{idx + 1}
                </span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                {category.title}
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                {category.subtitle}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-dark-950/80 border border-slate-850 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-slate-200 font-mono flex items-center justify-between">
                      <span>{skill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-normal">
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
