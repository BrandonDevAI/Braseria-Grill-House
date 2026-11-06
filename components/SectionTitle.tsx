import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text, center = true }: { eyebrow: string; title: React.ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ember-2">
        <span className="h-px w-8 bg-ember" /> {eyebrow} <span className="h-px w-8 bg-ember" />
      </span>
      <h2 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base text-smoke sm:text-lg">{text}</p>}
    </Reveal>
  );
}
