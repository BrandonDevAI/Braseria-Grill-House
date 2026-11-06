"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, testimonials } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testimonios" className="relative overflow-hidden bg-coal-2 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonios" title={<>Lo que dicen <span className="text-fire">nuestros clientes</span></>} />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-gold/20 bg-coal p-8 text-center">
            <p className="font-display text-7xl font-bold text-fire">{site.rating}</p>
            <div className="mt-2 flex justify-center text-flame">{[...Array(5)].map((_, k) => <StarIcon key={k} className="h-6 w-6" />)}</div>
            <p className="mt-3 text-smoke">Basado en {site.reviews}+ reseñas en Google</p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-cream/70">
              <span className="font-bold"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span> Reviews
            </div>
          </div>

          <div className="relative min-h-[300px] rounded-3xl bg-coal p-8 sm:p-12">
            <span className="absolute right-8 top-2 font-display text-[9rem] leading-none text-ember/15" aria-hidden>“</span>
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45 }}>
                <div className="flex text-flame">{[...Array(5)].map((_, k) => <StarIcon key={k} filled={k < t.stars} />)}</div>
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-cream sm:text-2xl">“{t.text}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ember to-gold font-bold text-coal">{t.initials}</span>
                  <span><b className="block text-cream">{t.name}</b><span className="text-sm text-smoke">Reseña en Google Maps</span></span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Testimonio ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-ember" : "w-2 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
