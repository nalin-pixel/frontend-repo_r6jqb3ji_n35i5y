import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0E0E52] text-white">
      {/* Animated gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,207,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,117,160,0.25),transparent_60%)]" />

      {/* Floating clouds/cherry petals */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 2 === 0 ? 'rgba(255,117,160,0.6)' : 'rgba(100,207,246,0.6)',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex h-[100vh] max-w-7xl flex-col items-center px-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Copy */}
        <div className="z-10 max-w-2xl pt-24 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide text-[#64CFF6] ring-1 ring-white/20">
              Futuristic • Japanese Minimalism • Cyber-Ghibli
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
              Hi, I’m <span className="text-[#FF75A0]">Kira Sato</span>,
              <br /> a UX/UI Designer who crafts
              <br /> pixel-perfect experiences with heart.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Minimalist interfaces infused with anime charm — soft gradients, glowing edges, and motion that feels alive.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center rounded-xl bg-[#64CFF6] px-6 py-3 font-semibold text-[#0E0E52] shadow-[0_0_20px_rgba(100,207,246,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(100,207,246,0.75)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FF75A0] hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative mt-10 h-[60vh] w-full max-w-2xl md:mt-0 md:h-[80vh] md:max-w-3xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1E1E80]/40 to-transparent ring-1 ring-white/10" />
          <Spline
            scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Glow overlays */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0E0E52] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
