"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { images, site, waLink } from "@/lib/data";
import { StarIcon, WhatsAppIcon } from "./Icons";

const EmberScene = dynamic(() => import("./EmberScene"), { ssr: false });

export default function Hero() {
  return (
    <section id="inicio" className="grain relative flex min-h-[100svh] items-center overflow-hidden">
      {/* foto de fondo */}
      <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-coal/70 via-coal/60 to-coal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(232,97,26,.45),transparent_60%)]" />
      {/* brasas 3D */}
      <div className="absolute inset-0"><EmberScene /></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-coal/50 px-4 py-2 text-xs text-cream/90 backdrop-blur sm:text-sm">
            <span className="flex text-flame">{[...Array(5)].map((_, i) => <StarIcon key={i} className="h-3.5 w-3.5" />)}</span>
            <span><b>{site.rating}</b> en Google · {site.reviews}+ reseñas</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl lg:text-8xl">
            Pasión por <br /><span className="text-fire">las brasas</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-cream/80 sm:text-xl">
            {site.slogan}. Pollo marinado 24 horas, parrillas jugosas y el sabor ahumado de la leña, en un ambiente familiar.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener"
              className="ember-glow group inline-flex items-center justify-center gap-3 rounded-full bg-ember px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ember-2">
              <WhatsAppIcon /> Pide por WhatsApp
            </a>
            <a href="#carta" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-base font-semibold text-cream transition hover:border-gold hover:text-gold">
              Ver la carta →
            </a>
          </motion.div>

          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[["24h", "de marinado"], ["100%", "leña natural"], ["12–23h", "todos los días"]].map(([a, b]) => (
              <div key={a}><dt className="font-display text-2xl font-bold text-flame sm:text-3xl">{a}</dt><dd className="text-xs text-smoke sm:text-sm">{b}</dd></div>
            ))}
          </motion.dl>
        </div>
      </div>

      <a href="#nosotros" aria-label="Bajar" className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <span className="flex h-12 w-7 justify-center rounded-full border border-cream/30 pt-2">
          <motion.span animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-2 w-1 rounded-full bg-ember" />
        </span>
      </a>
    </section>
  );
}
