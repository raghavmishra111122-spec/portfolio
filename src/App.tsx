import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AIFocus } from './components/AIFocus';
import { GitHubSection } from './components/GitHubSection';
import { LinkedInSection } from './components/LinkedInSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'ai-focus', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const offsetTop = sectionEl.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Interactive AI Neural Canvas */}
      <BackgroundCanvas />

      {/* Header / Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero
          onExploreClick={() => scrollToSection('projects')}
          onConnectClick={() => scrollToSection('contact')}
        />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <AIFocus />
        <GitHubSection />
        <LinkedInSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
