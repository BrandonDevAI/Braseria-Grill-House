import { images, values } from "@/lib/data";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="grid grid-cols-5 gap-4">
            <SmartImage src={images.fire} alt="Fuego de leña" className="col-span-3 aspect-[3/4] rounded-3xl" />
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <SmartImage src={images.chicken} alt="Pollo a la leña" className="aspect-square rounded-3xl" />
              <SmartImage src={images.ambience} alt="Ambiente del restaurante" className="aspect-[3/4] rounded-3xl" />
            </div>
          </div>
          <div className="ember-glow absolute -bottom-6 left-6 rounded-2xl bg-coal-2 px-6 py-5 sm:left-10">
            <p className="font-display text-4xl font-bold text-fire">★ 4.8</p>
            <p className="text-sm text-smoke">+260 reseñas en Google</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-2">Nuestra historia</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              El sabor del fuego, <span className="text-fire">la calidez de casa</span>
            </h2>
            <p className="mt-6 text-lg text-smoke">
              En La Brasería Grill House creemos que la buena comida nace del fuego. Por eso cocinamos nuestro pollo
              lentamente sobre leña natural, con una receta de marinado artesanal que perfeccionamos día a día.
            </p>
            <p className="mt-4 text-smoke">
              <b className="text-cream">Nuestra visión:</b> ser el punto de encuentro favorito de las familias de San Juan de Lurigancho,
              ofreciendo el mejor pollo a la leña y parrillas de la zona, con atención cercana y precios justos.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/5 bg-coal-2 p-5 transition hover:border-ember/40">
                  <div className="mb-3 text-2xl">{v.icon}</div>
                  <h3 className="font-semibold text-cream">{v.title}</h3>
                  <p className="mt-1 text-sm text-smoke">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
