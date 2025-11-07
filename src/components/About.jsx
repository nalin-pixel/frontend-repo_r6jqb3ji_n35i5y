import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Code, PenTool, Image as ImageIcon } from 'lucide-react';

const skills = [
  { icon: <Figma className="h-6 w-6" />, label: 'Figma' },
  { icon: <PenTool className="h-6 w-6" />, label: 'Adobe XD' },
  { icon: <ImageIcon className="h-6 w-6" />, label: 'Photoshop' },
  { icon: <Code className="h-6 w-6" />, label: 'React' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0E0E52] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,117,160,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold md:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I’m a designer who blends usability with emotion. Fueled by coffee, code, and Studio Ghibli vibes. I design systems
              that are delightful, inclusive, and beautifully engineered.
            </p>
            <p className="mt-4 text-white/70">
              My work balances Japanese minimalism and cyberpunk energy — think soft lighting, dreamy interfaces, and crisp
              micro-interactions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#64CFF6]"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1E1E80] text-[#64CFF6] shadow-[0_0_20px_rgba(100,207,246,0.25)]">
                    {s.icon}
                  </div>
                  <span className="text-lg font-semibold">{s.label}</span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(120px_120px_at_20%_20%, rgba(100,207,246,0.2), transparent), radial-gradient(120px_120px_at_80%_80%, rgba(255,117,160,0.2), transparent)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
