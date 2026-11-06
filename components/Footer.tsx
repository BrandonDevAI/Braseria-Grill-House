import { site, waLink } from "@/lib/data";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-smoke">{site.slogan}. Cocina a la leña, parrillas y sabor familiar.</p>
        </div>
        <div className="text-sm text-smoke">
          <h4 className="mb-3 font-semibold text-cream">Contacto</h4>
          <p>{site.address}</p>
          <p className="mt-1">Tel. {site.phone} · WhatsApp {site.whatsappDisplay}</p>
          <p className="mt-1">{site.hours[0].days}: {site.hours[0].time}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-cream">Síguenos</h4>
          <div className="flex gap-3">
            {[{ h: site.instagram, i: <InstagramIcon />, l: "Instagram" }, { h: site.facebook, i: <FacebookIcon />, l: "Facebook" }, { h: waLink(), i: <WhatsAppIcon />, l: "WhatsApp" }].map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener" aria-label={s.l}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition hover:border-ember hover:bg-ember">
                {s.i}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-smoke/70">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
