import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import IllustrationGallery from './components/IllustrationGallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0E0E52] font-sans text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0E0E52]/60 px-4 py-2 backdrop-blur">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="h-3 w-3 rounded-full bg-[#64CFF6] shadow-[0_0_10px_rgba(100,207,246,0.8)]" />
            <span className="font-semibold tracking-wide">Kira Studio</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#work" className="text-white/80 hover:text-white">Work</a>
            <a href="#illustration" className="text-white/80 hover:text-white">Illustration</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <IllustrationGallery />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-[#0E0E52] py-10 text-center text-white/70">
        <p>© {new Date().getFullYear()} Kira Sato — Designed with pastel neon and love.</p>
      </footer>
    </div>
  );
};

export default App;
