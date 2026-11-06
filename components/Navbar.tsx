"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/data";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#carta", label: "Carta" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-coal/90 shadow-lg shadow-black/30 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Inicio"><Logo /></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-sm font-medium text-cream/80 transition hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-ember after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={waLink()} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ember-2 sm:flex">
            <WhatsAppIcon className="h-4 w-4" /> Pedir ahora
          </a>
          <button onClick={() => setOpen(!open)} className="relative h-10 w-10 rounded-full border border-white/10 lg:hidden" aria-label="Menú" aria-expanded={open}>
            <span className={`absolute left-3 right-3 h-0.5 bg-cream transition-all ${open ? "top-1/2 rotate-45" : "top-[14px]"}`} />
            <span className={`absolute left-3 right-3 top-1/2 h-0.5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-3 right-3 h-0.5 bg-cream transition-all ${open ? "top-1/2 -rotate-45" : "bottom-[13px]"}`} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100dvh" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden bg-coal lg:hidden">
            <ul className="flex flex-col gap-2 px-6 pt-6">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-4 font-display text-3xl text-cream">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pt-8">
              <a href={waLink()} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 font-semibold text-white">
                <WhatsAppIcon /> Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
