export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src="/logo.svg" alt="" className="h-10 w-10 flicker" />
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-wide text-cream sm:text-xl">
          La Brasería
        </span>
        {!compact && (
          <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
            Grill House
          </span>
        )}
      </span>
    </span>
  );
}
