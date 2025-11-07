import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';

const illustrations = [
  {
    title: 'Neon Alley — Character Study',
    tags: ['character', 'neon', 'manga'],
    bg: 'from-[#14145f] via-[#1E1E80] to-[#0E0E52]',
    accent: '#FF75A0',
  },
  {
    title: 'Ghibli Skies — Environment',
    tags: ['environment', 'soft', 'painterly'],
    bg: 'from-[#0E0E52] via-[#1E1E80] to-[#64CFF6]',
    accent: '#64CFF6',
  },
  {
    title: 'Cyber Idol — Poster',
    tags: ['poster', 'character', 'ui sketch'],
    bg: 'from-[#1E1E80] via-[#0E0E52] to-[#14145f]',
    accent: '#FF75A0',
  },
  {
    title: 'Night Tram — City Mood',
    tags: ['environment', 'manga', 'neon'],
    bg: 'from-[#0E0E52] via-[#1E1E80] to-[#0E0E52]',
    accent: '#64CFF6',
  },
  {
    title: 'UI Sketch — Companion App',
    tags: ['ui sketch', 'product', 'wireframe'],
    bg: 'from-[#14145f] via-[#0E0E52] to-[#1E1E80]',
    accent: '#F0E6FF',
  },
  {
    title: 'Starlit Shrine — Vignette',
    tags: ['environment', 'soft'],
    bg: 'from-[#0E0E52] via-[#1E1E80] to-[#0E0E52]',
    accent: '#FF75A0',
  },
];

const PanelFrame = ({ accent }) => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 rounded-2xl border-2 border-white/10" />
    <div className="absolute left-3 top-3 h-6 w-10 rounded border border-white/20" />
    <div className="absolute right-3 bottom-3 h-6 w-6 rotate-45 rounded border border-white/20" />
    <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: `0 0 0 2px ${accent}33 inset` }} />
  </div>
);

const Chip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
      active ? 'bg-white text-[#0E0E52]' : 'bg-white/10 text-white hover:bg-white/20'
    }`}
  >
    <Tag className="h-4 w-4" />
    {label}
  </button>
);

const IllustrationGallery = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const allTags = useMemo(() => {
    const set = new Set();
    illustrations.forEach((i) => i.tags.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === 'All') return illustrations;
    return illustrations.filter((i) => i.tags.includes(activeTag));
  }, [activeTag]);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(-1);

  const showPrev = useCallback(() => {
    if (filtered.length === 0) return;
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const showNext = useCallback(() => {
    if (filtered.length === 0) return;
    setLightboxIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <section id="illustration" className="relative w-full bg-[#0E0E52] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,207,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Illustration Gallery</h2>
            <p className="mt-2 text-white/70">Manga-inspired frames with a soft neon sheen. Click to open the lightbox.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <Chip key={t} label={t} active={activeTag === t} onClick={() => setActiveTag(t)} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <motion.button
              key={item.title}
              onClick={() => openLightbox(idx)}
              whileHover={{ y: -6 }}
              className={`group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.bg} p-0 text-left shadow-[0_0_30px_rgba(14,14,82,0.35)]`}
            >
              <PanelFrame accent={item.accent} />
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-60" style={{
                  background:
                    'radial-gradient(180px_180px_at_20%_20%, rgba(255,117,160,0.25), transparent), radial-gradient(220px_220px_at_80%_80%, rgba(100,207,246,0.25), transparent)'
                }} />
                {/* Faux ink hatching */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 6px)'
                }} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                <div className="inline-block rounded-md bg-black/30 px-2 py-1 text-xs uppercase tracking-wide text-white/80">{item.tags.join(' • ')}</div>
                <h3 className="mt-2 text-lg font-semibold drop-shadow">{item.title}</h3>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                background:
                  'radial-gradient(220px_220px_at_20%_20%, rgba(100,207,246,0.25), transparent), radial-gradient(220px_220px_at_80%_80%, rgba(255,117,160,0.25), transparent)'
              }} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== -1 && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-[92vw] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E52]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${filtered[lightboxIndex]?.bg}`}>
                <PanelFrame accent={filtered[lightboxIndex]?.accent || '#64CFF6'} />
                <div className="absolute inset-0 opacity-60" style={{
                  background:
                    'radial-gradient(260px_260px_at_30%_30%, rgba(255,117,160,0.25), transparent), radial-gradient(280px_280px_at_70%_70%, rgba(100,207,246,0.25), transparent)'
                }} />
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 6px)'
                }} />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <div>
                  <h3 className="text-lg font-semibold">{filtered[lightboxIndex]?.title}</h3>
                  <p className="text-sm text-white/70">{filtered[lightboxIndex]?.tags.join(' • ')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={showPrev} className="rounded-lg border border-white/10 bg-white/10 p-2 hover:bg-white/20" aria-label="Previous">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={showNext} className="rounded-lg border border-white/10 bg-white/10 p-2 hover:bg-white/20" aria-label="Next">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button onClick={closeLightbox} className="rounded-lg border border-white/10 bg-white/10 p-2 hover:bg-white/20" aria-label="Close">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IllustrationGallery;
