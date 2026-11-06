"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu, waLink } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import SmartImage from "./SmartImage";
import { WhatsAppIcon } from "./Icons";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === active)!;

  return (
    <section id="carta" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="La carta" title={<>Directo de la <span className="text-fire">brasa</span> a tu mesa</>}
          text="Elige tu favorito y pídelo en un clic por WhatsApp." />

        <div className="-mx-4 mb-10 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
          <div role="tablist" className="mx-auto flex w-max gap-2 rounded-full border border-white/10 bg-coal-2 p-1.5">
            {menu.map((c) => (
              <button key={c.id} role="tab" aria-selected={active === c.id} onClick={() => setActive(c.id)}
                className={`relative whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition sm:px-5 ${active === c.id ? "text-white" : "text-smoke hover:text-cream"}`}>
                {active === c.id && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-ember" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                <span className="relative">{c.icon} {c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
            className="grid gap-4 md:grid-cols-2">
            {cat.items.map((d) => (
              <div key={d.name} className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-coal-2 p-3 transition hover:border-ember/40 sm:gap-5 sm:p-4">
                <SmartImage src={d.img} alt={d.name} className="h-20 w-20 shrink-0 rounded-xl sm:h-24 sm:w-24" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-cream">{d.name}</h3>
                    <span className="hidden flex-1 border-b border-dashed border-white/15 sm:block" />
                    <span className="ml-auto whitespace-nowrap font-display text-lg font-bold text-flame">S/ {d.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-1 text-sm text-smoke">{d.desc}</p>
                  <div className="mt-2 flex items-center gap-3">
                    {d.tag && <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-gold">{d.tag}</span>}
                    <a href={waLink(`¡Hola! Quiero pedir: ${d.name} (S/ ${d.price.toFixed(2)})`)} target="_blank" rel="noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25d366] opacity-90 hover:opacity-100">
                      <WhatsAppIcon className="h-3.5 w-3.5" /> Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <p className="mt-8 text-center text-xs text-smoke/70">Precios en soles (S/). Incluyen IGV. Sujetos a cambios sin previo aviso.</p>
      </div>
    </section>
  );
}
