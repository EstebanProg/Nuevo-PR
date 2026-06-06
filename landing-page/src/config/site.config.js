import { FiZap, FiLayers, FiShield } from 'react-icons/fi'

// ============================================================
// CONFIGURACION PRINCIPAL DEL SITIO
// Edita este archivo para personalizar toda la landing page
// ============================================================

export const siteConfig = {
  // --- IDENTIDAD ---
  name: 'Tu Empresa',       // Nombre de la app/empresa
  logo: 'TE',               // Iniciales para el logo (max 2 chars)
  year: 2025,               // Año de fundacion (para el footer)

  // --- REDES SOCIALES ---
  // Reemplaza los enlaces con los de tu empresa
  social: {
    whatsapp: 'https://wa.me/+50700000000',
    instagram: 'https://instagram.com/tuempresa',
    facebook: 'https://facebook.com/tuempresa',
    tiktok: 'https://tiktok.com/@tuempresa',
  },

  // --- CONTACTO ---
  contact: {
    email: 'contacto@tuempresa.com',
    phone: '+507 000-0000',
    address: 'Ciudad de Panamá, Panamá',
  },

  // --- CARRUSEL HERO ---
  // image: ruta a la imagen (ej: '/images/slide1.jpg')
  // Si no hay imagen, se usa el gradiente de fondo
  carousel: [
    {
      gradient: 'from-violet-950 via-[#0A0B14] to-indigo-950',
      accentColor: '#7C3AED',
      accentColor2: '#4F46E5',
      badgeKey: 'hero.slide1.badge',
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      ctaKey: 'hero.slide1.cta',
      ctaHref: '#features',
      image: null,
    },
    {
      gradient: 'from-[#0A0B14] via-purple-950 to-pink-950',
      accentColor: '#EC4899',
      accentColor2: '#9333EA',
      badgeKey: 'hero.slide2.badge',
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      ctaKey: 'hero.slide2.cta',
      ctaHref: '#gallery',
      image: null,
    },
    {
      gradient: 'from-indigo-950 via-[#0A0B14] to-violet-950',
      accentColor: '#4F46E5',
      accentColor2: '#7C3AED',
      badgeKey: 'hero.slide3.badge',
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      ctaKey: 'hero.slide3.cta',
      ctaHref: '#contact',
      image: null,
    },
    {
      gradient: 'from-pink-950 via-[#0A0B14] to-purple-950',
      accentColor: '#DB2777',
      accentColor2: '#7C3AED',
      badgeKey: 'hero.slide4.badge',
      titleKey: 'hero.slide4.title',
      subtitleKey: 'hero.slide4.subtitle',
      ctaKey: 'hero.slide4.cta',
      ctaHref: '#about',
      image: null,
    },
  ],

  // --- CARACTERÍSTICAS (sección Z-pattern) ---
  features: [
    {
      icon: FiZap,
      tagKey: 'features.item1.tag',
      titleKey: 'features.item1.title',
      descKey: 'features.item1.desc',
      points: [
        'features.item1.p1',
        'features.item1.p2',
        'features.item1.p3',
      ],
      gradient: 'from-violet-900 to-indigo-900',
      accentColor: '#7C3AED',
      image: null,
    },
    {
      icon: FiLayers,
      tagKey: 'features.item2.tag',
      titleKey: 'features.item2.title',
      descKey: 'features.item2.desc',
      points: [
        'features.item2.p1',
        'features.item2.p2',
        'features.item2.p3',
      ],
      gradient: 'from-pink-900 to-purple-900',
      accentColor: '#EC4899',
      image: null,
    },
    {
      icon: FiShield,
      tagKey: 'features.item3.tag',
      titleKey: 'features.item3.title',
      descKey: 'features.item3.desc',
      points: [
        'features.item3.p1',
        'features.item3.p2',
        'features.item3.p3',
      ],
      gradient: 'from-indigo-900 to-violet-900',
      accentColor: '#4F46E5',
      image: null,
    },
  ],

  // --- ESTADÍSTICAS ---
  stats: [
    { valueKey: 'stats.s1.value', labelKey: 'stats.s1.label' },
    { valueKey: 'stats.s2.value', labelKey: 'stats.s2.label' },
    { valueKey: 'stats.s3.value', labelKey: 'stats.s3.label' },
    { valueKey: 'stats.s4.value', labelKey: 'stats.s4.label' },
  ],

  // --- GALERÍA DE IMÁGENES ---
  // category: clave de traducción para la categoría
  // image: ruta a la imagen (ej: '/images/gallery/photo1.jpg')
  // Si no hay imagen, se muestra gradiente de placeholder
  gallery: [
    { category: 'gallery.cat1', titleKey: 'gallery.img1', gradient: 'from-violet-900 to-indigo-900', image: null },
    { category: 'gallery.cat2', titleKey: 'gallery.img2', gradient: 'from-pink-900 to-purple-900', image: null },
    { category: 'gallery.cat1', titleKey: 'gallery.img3', gradient: 'from-indigo-900 to-blue-900', image: null },
    { category: 'gallery.cat3', titleKey: 'gallery.img4', gradient: 'from-purple-900 to-pink-900', image: null },
    { category: 'gallery.cat2', titleKey: 'gallery.img5', gradient: 'from-violet-900 to-purple-900', image: null },
    { category: 'gallery.cat3', titleKey: 'gallery.img6', gradient: 'from-indigo-900 to-violet-900', image: null },
    { category: 'gallery.cat1', titleKey: 'gallery.img7', gradient: 'from-pink-900 to-rose-900', image: null },
    { category: 'gallery.cat2', titleKey: 'gallery.img8', gradient: 'from-purple-900 to-indigo-900', image: null },
  ],

  // --- FOOTER LINKS ---
  footerLinks: [
    { key: 'footer.link1', href: '#hero' },
    { key: 'footer.link2', href: '#about' },
    { key: 'footer.link3', href: '#features' },
    { key: 'footer.link4', href: '#gallery' },
    { key: 'footer.link5', href: '#contact' },
  ],
}
