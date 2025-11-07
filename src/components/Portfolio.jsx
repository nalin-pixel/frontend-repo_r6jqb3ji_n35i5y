import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Wallet UI',
    bg: 'from-[#1E1E80] to-[#0E0E52]'
  },
  {
    title: 'Forest Meditation App',
    bg: 'from-[#64CFF6] to-[#F0E6FF]'
  },
  {
    title: 'Manga Reader Concept',
    bg: 'from-[#FF75A0] to-[#F0E6FF]'
  },
  {
    title: 'Futuristic Lab Dashboard',
    bg: 'from-[#0E0E52] to-[#1E1E80]'
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative w-full bg-[#0E0E52] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,207,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/70">A gallery of case studies displayed like collectible cards.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${p.bg} p-4 shadow-[0_0_30px_rgba(14,14,82,0.4)]`}
              whileHover={{ y: -6 }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/10">
                <div className="h-full w-full bg-[radial-gradient(120px_120px_at_30%_30%,rgba(255,117,160,0.25),transparent),radial-gradient(140px_140px_at_70%_70%,rgba(100,207,246,0.25),transparent)]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <a href="#" className="rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur hover:bg-white/20">View Case Study</a>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                background:
                  'radial-gradient(200px_200px_at_20%_20%, rgba(100,207,246,0.25), transparent), radial-gradient(200px_200px_at_80%_80%, rgba(255,117,160,0.25), transparent)'
              }} />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Parallax skyline */}
      <div className="pointer-events-none relative mt-20 h-32 w-full">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,rgba(255,255,255,0.06)_8px,transparent_16px)] bg-[length:16px_100%] opacity-20" />
      </div>
    </section>
  );
};

export default Portfolio;
