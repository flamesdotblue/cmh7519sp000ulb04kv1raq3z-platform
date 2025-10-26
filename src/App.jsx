import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

function App() {
  // Smooth scroll behavior for in-page anchors (in case of future anchor usage)
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    // Polyfill minimal smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-zinc-100 antialiased">
      <Hero />
      <About />
      <Skills />
      <Showcase />
    </div>
  );
}

export default App;
