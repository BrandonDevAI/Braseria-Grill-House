"use client";
import { useState } from "react";

/** Imagen con respaldo visual (degradado de brasas) si la foto no carga. */
export default function SmartImage({ src, alt, className = "", label }: { src?: string; alt: string; className?: string; label?: string }) {
  const [failed, setFailed] = useState(!src);
  return (
    <div className={`relative overflow-hidden bg-coal-3 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,#e8611a_0%,#7a2e0c_35%,#221912_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-60">🔥</div>
      {label && failed && (
        <span className="absolute inset-x-0 bottom-3 text-center font-display text-sm text-cream/80">{label}</span>
      )}
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
    </div>
  );
}
