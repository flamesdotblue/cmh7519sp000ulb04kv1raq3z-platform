import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function useTiltCube() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const rotateY = (x - 0.5) * 30; // -15..15
      const rotateX = (0.5 - y) * 30; // -15..15
      el.style.setProperty('--rx', `${rotateX}deg`);
      el.style.setProperty('--ry', `${rotateY}deg`);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--rx', `0deg`);
      el.style.setProperty('--ry', `0deg`);
    });
    return () => {
      el.removeEventListener('mousemove', onMove);
    };
  }, []);
  return ref;
}

export default function Hero() {
  const cubeRef = useTiltCube();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0B0D12]/50 to-[#0B0D12] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships & projects
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-white drop-shadow">N Sai Vighnesh</span>
            <span className="block text-emerald-400">Full Stack Developer & AI Engineer</span>
          </h1>
          <p className="max-w-2xl text-zinc-300 text-lg md:text-xl">
            Dynamic and results-oriented developer with strong skills in complex problem-solving, analytics, and building scalable web and AI solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToId('projects')}
              className="px-5 py-3 rounded-lg bg-emerald-500 text-black font-semibold shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-shadow"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="px-5 py-3 rounded-lg border border-emerald-500/50 text-emerald-300 font-semibold hover:bg-emerald-400/10 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative h-[320px] md:h-[420px] lg:h-[500px]"
        >
          {/* Interactive CSS 3D cube with tech logos */}
          <div ref={cubeRef} className="group relative mx-auto h-full w-full max-w-[460px] [perspective:1000px]">
            <div
              className="absolute inset-0 m-auto h-64 w-64 md:h-80 md:w-80 transition-transform duration-300 [transform-style:preserve-3d]"
              style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
            >
              {[
                { face: 'front', label: 'React', color: '#61DAFB' },
                { face: 'back', label: 'Docker', color: '#1D63ED' },
                { face: 'right', label: 'Java', color: '#EA2D2E' },
                { face: 'left', label: 'Python', color: '#FFD43B' },
                { face: 'top', label: 'Spring', color: '#6DB33F' },
                { face: 'bottom', label: 'Django', color: '#0C4B33' },
              ].map((f, i) => (
                <div key={i} className="absolute inset-0 m-auto h-64 w-64 md:h-80 md:w-80 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/60 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)]" style={{ transform: faceTransform(f.face) }}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-extrabold" style={{ color: f.color }}>{f.label}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-zinc-400">Tech Stack</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function faceTransform(face) {
  const t = {
    front: 'translateZ(6rem)',
    back: 'rotateY(180deg) translateZ(6rem)',
    right: 'rotateY(90deg) translateZ(6rem)',
    left: 'rotateY(-90deg) translateZ(6rem)',
    top: 'rotateX(90deg) translateZ(6rem)',
    bottom: 'rotateX(-90deg) translateZ(6rem)',
  };
  return t[face];
}
