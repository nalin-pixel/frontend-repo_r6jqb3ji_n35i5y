import React from 'react';
import { motion } from 'framer-motion';

const RobotMascot = () => (
  <motion.svg
    viewBox="0 0 240 260"
    className="h-full w-full"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1E1E80" />
        <stop offset="100%" stopColor="#0E0E52" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF9ABD" />
        <stop offset="100%" stopColor="#FF75A0" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Body */}
    <motion.rect
      x="30"
      y="40"
      rx="22"
      width="180"
      height="160"
      fill="url(#bodyGrad)"
      stroke="#6ea3ff"
      strokeOpacity="0.2"
      strokeWidth="2"
    />

    {/* Screen */}
    <motion.rect
      x="60"
      y="70"
      rx="14"
      width="120"
      height="70"
      fill="url(#screenGrad)"
      filter="url(#glow)"
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Eyes */}
    <motion.circle cx="95" cy="105" r="6" fill="#0E0E52" />
    <motion.circle cx="145" cy="105" r="6" fill="#0E0E52" />

    {/* Smile */}
    <path d="M95 120 Q120 135 145 120" stroke="#0E0E52" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Antenna */}
    <motion.line x1="120" y1="40" x2="120" y2="20" stroke="#64CFF6" strokeWidth="4" strokeLinecap="round" />
    <motion.circle
      cx="120"
      cy="16"
      r="6"
      fill="#64CFF6"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
      filter="url(#glow)"
    />

    {/* Feet */}
    <rect x="60" y="200" width="40" height="20" rx="8" fill="#14145f" />
    <rect x="140" y="200" width="40" height="20" rx="8" fill="#14145f" />

    {/* Power plug */}
    <motion.path
      d="M210 170 q20 10 10 30 t-25 10"
      fill="none"
      stroke="#64CFF6"
      strokeWidth="3"
      strokeLinecap="round"
      animate={{ pathLength: [0.7, 1, 0.7] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </motion.svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0E0E52] text-white">
      {/* Neon gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,207,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,117,160,0.25),transparent_60%)]" />

      {/* Floating particles (sakura/cyan orbs) */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(255,117,160,0.65)' : 'rgba(100,207,246,0.65)',
              filter: 'blur(1px)'
            }}
            animate={{ y: [0, -25, 0], x: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex h-[100vh] max-w-7xl flex-col items-center px-6 md:flex-row md:items-center md:justify-between">
        {/* Copy */}
        <div className="z-10 max-w-2xl pt-24 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide text-[#64CFF6] ring-1 ring-white/20">
              Futuristic • Japanese Minimalism • Cyber-Ghibli
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
              Hi, I’m <span className="text-[#FF75A0]">Kira Sato</span>,
              <br /> a UX/UI Designer & Illustrator
              <br /> crafting stories in pixels and ink.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Minimalist interfaces and luminous illustrations — soft gradients, glowing edges, and motion that feels alive.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center rounded-xl bg-[#64CFF6] px-6 py-3 font-semibold text-[#0E0E52] shadow-[0_0_20px_rgba(100,207,246,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(100,207,246,0.75)]"
              >
                View Illustration
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

        {/* Illustration panel (no 3D) */}
        <div className="relative mt-10 h-[55vh] w-full max-w-2xl md:mt-0 md:h-[70vh] md:max-w-3xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1E1E80]/40 to-transparent ring-1 ring-white/10" />
          <div className="relative h-full w-full p-6">
            <RobotMascot />
          </div>
          {/* Skyline silhouettes */}
          <div className="pointer-events-none absolute inset-x-0 bottom-3 mx-6 h-12 rounded-xl bg-[linear-gradient(0deg,rgba(14,14,82,0.9),rgba(14,14,82,0.0))] opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#64CFF6] via-[#FF75A0] to-[#64CFF6] opacity-60 blur-[2px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
