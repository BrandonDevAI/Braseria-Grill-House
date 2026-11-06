import { mapsEmbed, mapsLink, site, waLink } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Location() {
  const items = [
    { icon: <PinIcon />, title: "Dirección", body: site.address, href: mapsLink, cta: "Cómo llegar" },
    { icon: <ClockIcon />, title: "Horario", body: site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ") },
    { icon: <PhoneIcon />, title: "Teléfono", body: site.phone, href: `tel:01${site.phone.replace(/\D/g, "").slice(2)}`, cta: "Llamar" },
    { icon: <WhatsAppIcon />, title: "WhatsApp / Delivery", body: site.whatsappDisplay, href: waLink(), cta: "Escribir" },
  ];
  return (
    <section id="ubicacion" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Visítanos" title={<>Te esperamos en <span className="text-fire">San Juan de Lurigancho</span></>} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="grid gap-4">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-coal-2 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-ember-2">{it.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-cream">{it.title}</h3>
                    <p className="mt-0.5 text-sm text-smoke">{it.body}</p>
                  </div>
                  {it.href && (
                    <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                      className="self-center whitespace-nowrap rounded-full border border-ember/40 px-4 py-2 text-xs font-semibold text-ember-2 transition hover:bg-ember hover:text-white">
                      {it.cta}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="overflow-hidden rounded-3xl border border-white/10">
            <iframe title="Mapa de La Brasería Grill House" src={mapsEmbed} className="h-[380px] w-full grayscale-[60%] invert-[90%] hue-rotate-180 lg:h-full lg:min-h-[460px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
