import { images, waLink } from "@/lib/data";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";

export default function CTA() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.grill})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-ember/95 via-[#b8420f]/90 to-coal/95" />
        <div className="relative">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">¿Antojo de brasa?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/90">Pide tu pollo a la leña por WhatsApp y recíbelo calientito en casa. Delivery en San Juan de Lurigancho.</p>
          <a href={waLink("¡Hola! Quiero hacer un pedido delivery 🛵🔥")} target="_blank" rel="noopener"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-coal px-8 py-4 font-semibold text-cream shadow-2xl transition hover:-translate-y-0.5 hover:bg-black">
            <WhatsAppIcon className="h-6 w-6 text-[#25d366]" /> Hacer mi pedido
          </a>
        </div>
      </Reveal>
    </section>
  );
}
