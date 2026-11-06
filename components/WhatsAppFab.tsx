"use client";
import { motion } from "framer-motion";
import { waLink } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFab() {
  return (
    <motion.a href={waLink()} target="_blank" rel="noopener" aria-label="Pedir por WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
      className="pulse-ring group fixed bottom-5 right-5 z-50 isolate flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/40 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16">
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-coal-2 px-4 py-2 text-sm text-cream opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        ¿Pedimos? 🔥
      </span>
    </motion.a>
  );
}
