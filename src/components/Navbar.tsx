import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Selected Work' },
  { id: 'ai-focus', label: 'AI Focus' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-dark-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram & Name */}
        <button
          onClick={() => scrollToSection('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg text-left"
          aria-label="Raghav Mishra - Home"
        >
          <BrandLogo />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-dark-900/60 backdrop-blur-md border border-slate-800/70 shadow-inner" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold bg-cyan-950/60 border border-cyan-500/30 shadow-sm shadow-cyan-900/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="relative group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-dark-950 fill-dark-950 transition-transform group-hover:rotate-12" />
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-dark-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-dark-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-dark-950/95 backdrop-blur-2xl border-b border-slate-800/90 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-dark-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-dark-950 bg-gradient-to-r from-cyan-400 to-indigo-300"
              >
                <Sparkles className="w-4 h-4 text-dark-950" />
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-dark-950" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
