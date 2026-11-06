# La Brasería Grill House — Demo web

Landing page (demo) para **La Brasería Grill House** · Av. Gran Chimú 959, San Juan de Lurigancho, Lima.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Three.js (@react-three/fiber, brasas animadas en el hero) · Framer Motion · WhatsApp (enlaces `wa.me` con mensaje precargado).

## Desarrollo
```bash
npm install
npm run dev   # http://localhost:3000
```

## Editar contenido
Todo el contenido (contacto, horarios, carta, precios, testimonios, fotos) está en `lib/data.ts`.
> Los precios y testimonios son referenciales para el demo: reemplazarlos por la carta y reseñas reales.

## Deploy en Vercel
1. vercel.com → **Add New → Project** → importar este repositorio.
2. Framework: Next.js (auto). Deploy.
3. En **Settings → Domains** usar p. ej. `la-braseria-grill-house.vercel.app`.
