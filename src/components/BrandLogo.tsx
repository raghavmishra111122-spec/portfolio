import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-8 h-8', showText = true }) => {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className={`relative ${className} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full transform transition-transform duration-300 group-hover:scale-105" fill="none">
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          {/* Outer border */}
          <rect width="96" height="96" x="2" y="2" rx="22" className="fill-dark-900 stroke-slate-800 transition-colors duration-300 group-hover:stroke-cyan-500/50" strokeWidth="2.5" />
          
          {/* Monogram Path: R */}
          <path
            d="M 28 70 V 30 H 42 C 49 30 53 34 53 39 C 53 45 49 49 42 49 H 28 M 40 49 L 53 70"
            stroke="url(#logo-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Monogram Path: M */}
          <path
            d="M 54 70 V 38 L 66 54 L 78 38 V 70"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing Node dot */}
          <circle cx="78" cy="30" r="3.5" className="fill-cyan-400 animate-pulse" />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Raghav Mishra
          </span>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider">
            AI / LLM Post-Training
          </span>
        </div>
      )}
    </div>
  );
};
