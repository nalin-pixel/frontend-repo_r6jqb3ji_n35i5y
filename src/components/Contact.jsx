import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! I will get back soon.');
  };

  return (
    <section id="contact" className="relative w-full bg-[#0E0E52] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,117,160,0.15),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 -z-[0] h-40 w-40 rounded-full bg-[#64CFF6]/20 blur-2xl" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#1E1E80] to-[#0E0E52] ring-1 ring-white/10" />
              <div>
                <div className="flex items-center gap-2 text-[#64CFF6]">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-wide">Assistant Bot</span>
                </div>
                <p className="mt-1 text-white/80">"Let’s connect under neon skies. Plug in your details — I’ll beam it to Kira."</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-[#0E0E52]/40 px-4 py-3 outline-none ring-0 placeholder:text-white/50 focus:border-[#64CFF6]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-white/10 bg-[#0E0E52]/40 px-4 py-3 outline-none ring-0 placeholder:text-white/50 focus:border-[#FF75A0]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="rounded-xl border border-white/10 bg-[#0E0E52]/40 px-4 py-3 outline-none ring-0 placeholder:text-white/50 focus:border-white"
              required
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF75A0] px-6 py-3 font-semibold text-[#0E0E52] shadow-[0_0_20px_rgba(255,117,160,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,117,160,0.75)]"
            >
              <Send className="h-5 w-5 transition group-hover:translate-x-0.5" /> Send
            </button>
            {status && <p className="text-sm text-[#64CFF6]">{status}</p>}
          </div>
        </motion.form>
      </div>

      {/* Stars background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(240,230,255,0.2),transparent_60%)]" />
    </section>
  );
};

export default Contact;
