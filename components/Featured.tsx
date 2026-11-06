import { featured, waLink } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import SmartImage from "./SmartImage";
import { WhatsAppIcon } from "./Icons";

export default function Featured() {
  return (
    <section id="especialidades" className="relative bg-coal-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Especialidades" title={<>Nuestros <span className="text-fire">imperdibles</span></>}
          text="Los platos que nos hicieron famosos en el barrio. Recién salidos de la brasa." />
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-coal transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ember/20">
                <SmartImage src={d.img} alt={d.name} label={d.name} className="aspect-[4/3]" />
                {d.tag && <span className="absolute left-4 top-4 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white">{d.tag}</span>}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                    <span className="whitespace-nowrap font-display text-2xl font-bold text-flame">S/ {d.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-smoke">{d.desc}</p>
                  <a href={waLink(`¡Hola! Quiero pedir: ${d.name} (S/ ${d.price}) 🔥`)} target="_blank" rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-2 transition hover:text-flame">
                    <WhatsAppIcon className="h-4 w-4" /> Pedir este plato →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
