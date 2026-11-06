const words = ["Pollo a la leña", "Parrillas", "Anticuchos", "Chicha morada", "Delivery", "Ambiente familiar"];
export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-ember/20 bg-ember py-4">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl font-bold uppercase tracking-wider text-coal sm:text-2xl">
            {w} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
