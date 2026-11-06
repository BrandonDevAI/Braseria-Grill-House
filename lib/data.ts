// Datos del restaurante. Edita este archivo para actualizar textos, precios y contacto.

export const site = {
  name: "La Brasería Grill House",
  short: "La Brasería",
  tagline: "Pasión por las brasas",
  slogan: "El mejor pollo a la leña de San Juan de Lurigancho",
  address: "Av. Gran Chimú 959, San Juan de Lurigancho, Lima",
  phone: "01 363 8345",
  whatsapp: "51972410144", // formato internacional sin "+"
  whatsappDisplay: "972 410 144",
  hours: [
    { days: "Lunes a Domingo", time: "12:00 m. – 11:00 p.m." },
  ],
  rating: 4.8,
  reviews: 260,
  instagram: "https://www.instagram.com/la.braseria.grillhouse/",
  facebook: "https://www.facebook.com/la.braseria.grillhouse/",
  mapsQuery: "La Braseria Grill House, Av. Gran Chimu 959, San Juan de Lurigancho, Lima",
};

export const waLink = (text = "¡Hola La Brasería! Quiero hacer un pedido 🔥") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=75`;

export const images = {
  hero: u("photo-1544025162-d76694265947"),
  chicken: u("photo-1598103442097-8b74394b95c6"),
  grill: u("photo-1555939594-58d7cb561ad1"),
  steak: u("photo-1546964124-0cce460f38ef"),
  anticucho: u("photo-1529193591184-b1d58069ecdd"),
  fries: u("photo-1573080496219-bb080dd4f877"),
  salad: u("photo-1512621776951-a57141f2eefd"),
  drink: u("photo-1513558161293-cdaf765ed2fd"),
  dessert: u("photo-1551024506-0bccd828d307"),
  ambience: u("photo-1414235077428-338989a2e8c0"),
  fire: u("photo-1475070929565-c985b496cb9f"),
};

export type Dish = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  img?: string;
};

export type MenuCategory = { id: string; label: string; icon: string; items: Dish[] };

export const featured: Dish[] = [
  {
    name: "Pollo a la Leña",
    desc: "Nuestro clásico: marinado 24 horas y dorado lentamente al fuego de leña. Con papas fritas, ensalada y cremas.",
    price: 64,
    tag: "La estrella",
    img: images.chicken,
  },
  {
    name: "Parrilla Grill House",
    desc: "Bife, chorizo, pollo, anticucho y chinchulín a la brasa, con papas doradas y chimichurri de la casa.",
    price: 89,
    tag: "Para compartir",
    img: images.grill,
  },
  {
    name: "Anticuchos de Corazón",
    desc: "Brochetas de corazón en ají panca, con papa dorada y choclo. Un clásico peruano a la brasa.",
    price: 28,
    tag: "Tradición",
    img: images.anticucho,
  },
];

export const menu: MenuCategory[] = [
  {
    id: "pollos",
    label: "Pollos a la leña",
    icon: "🔥",
    items: [
      { name: "1/4 Pollo a la leña", desc: "Con papas fritas, ensalada fresca y cremas.", price: 19, img: images.chicken },
      { name: "1/2 Pollo a la leña", desc: "Con papas fritas, ensalada fresca y cremas.", price: 36, img: images.chicken },
      { name: "1 Pollo a la leña", desc: "Papas familiares, ensalada y cremas de la casa.", price: 64, tag: "Más pedido", img: images.chicken },
      { name: "Combo Familiar Brasero", desc: "1 pollo + papas + ensalada + chaufa + gaseosa 1.5 L.", price: 82, tag: "Familiar", img: images.chicken },
    ],
  },
  {
    id: "parrillas",
    label: "Parrillas",
    icon: "🥩",
    items: [
      { name: "Parrilla Personal", desc: "Bife, chorizo, pollo y anticucho con papas y ensalada.", price: 45, img: images.grill },
      { name: "Parrilla Grill House (2 pers.)", desc: "Bife, chorizo, pollo, anticucho, chinchulín y morcilla.", price: 89, tag: "Para compartir", img: images.grill },
      { name: "Bife Angosto 350 g", desc: "Corte jugoso a la brasa con papas doradas y chimichurri.", price: 58, img: images.steak },
      { name: "Chuleta de Cerdo a la Brasa", desc: "Con papas fritas, ensalada y salsa BBQ.", price: 34, img: images.steak },
    ],
  },
  {
    id: "brasa",
    label: "A la brasa",
    icon: "🍢",
    items: [
      { name: "Anticuchos de Corazón", desc: "3 palitos con papa dorada y choclo.", price: 28, img: images.anticucho },
      { name: "Pechuga a la Parrilla", desc: "Filete de pechuga con ensalada y papas.", price: 29, img: images.grill },
      { name: "Mollejitas a la Brasa", desc: "Con papas doradas y crema de rocoto.", price: 24, img: images.anticucho },
      { name: "Alitas BBQ (8 und.)", desc: "Glaseadas en BBQ ahumada, con papas.", price: 27, img: images.chicken },
    ],
  },
  {
    id: "acompanamientos",
    label: "Piqueos",
    icon: "🍟",
    items: [
      { name: "Salchipapa Brasera", desc: "Papas nativas, hot dog ahumado y cremas.", price: 18, img: images.fries },
      { name: "Porción de Papas", desc: "Papas fritas crocantes.", price: 10, img: images.fries },
      { name: "Ensalada de la Casa", desc: "Lechuga, tomate, pepino, palta y vinagreta.", price: 12, img: images.salad },
      { name: "Chaufa de Pollo", desc: "Arroz salteado al wok con pollo a la leña.", price: 16, img: images.salad },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas y postres",
    icon: "🥤",
    items: [
      { name: "Chicha Morada (1 L)", desc: "Preparada en casa con maíz morado y frutas.", price: 14, img: images.drink },
      { name: "Limonada Frozen (1 L)", desc: "Limón, hierbabuena y hielo frappé.", price: 16, img: images.drink },
      { name: "Inca Kola / Coca-Cola 1.5 L", desc: "Bien helada.", price: 12, img: images.drink },
      { name: "Torta de Chocolate", desc: "Húmeda, con fudge casero.", price: 12, img: images.dessert },
    ],
  },
];

// TEXTOS DE MUESTRA para el demo: reemplazar por reseñas reales de Google Maps antes de publicar.
export const testimonials = [
  {
    name: "Rosa M.",
    initials: "RM",
    text: "El pollo a la leña tiene un sabor ahumado espectacular, la piel crocante y la carne jugosa. Ambiente familiar y atención rápida.",
    stars: 5,
  },
  {
    name: "Carlos T.",
    initials: "CT",
    text: "La parrilla para dos alcanza de sobra. Las cremas de la casa son buenísimas, sobre todo la de rocoto.",
    stars: 5,
  },
  {
    name: "Daniela P.",
    initials: "DP",
    text: "Pedí delivery por WhatsApp y llegó caliente y a tiempo. Ya es nuestro lugar fijo para el fin de semana.",
    stars: 5,
  },
  {
    name: "Jorge R.",
    initials: "JR",
    text: "Muy buen ambiente para venir en familia. Los anticuchos y la chicha morada, recomendadísimos.",
    stars: 4,
  },
];

export const values = [
  { title: "Fuego de leña", text: "Cocinamos con leña seleccionada para lograr ese aroma ahumado que nos distingue.", icon: "🔥" },
  { title: "Marinado artesanal", text: "Nuestra receta se macera por 24 horas con especias y un toque secreto de la casa.", icon: "🌿" },
  { title: "Ambiente familiar", text: "Un espacio cálido para compartir con los tuyos, como en casa.", icon: "🏡" },
  { title: "Delivery", text: "Pide por WhatsApp y recibe tu pedido caliente en la puerta de tu casa.", icon: "🛵" },
];
