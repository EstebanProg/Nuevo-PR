import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FiZoomIn } from 'react-icons/fi'
import { siteConfig } from '../config/site.config'

export default function Gallery() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [zoomed, setZoomed] = useState(null)

  const categories = useMemo(() => {
    const cats = [...new Set(siteConfig.gallery.map((g) => g.category))]
    return ['all', ...cats]
  }, [])

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? siteConfig.gallery
        : siteConfig.gallery.filter((g) => g.category === activeFilter),
    [activeFilter]
  )

  return (
    <section id="gallery" className="bg-bg-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-alt border border-brand-pink/30 text-brand-pink-light text-sm font-medium mb-5">
            {t('gallery.tag')}
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-brand-violet to-brand-pink text-white shadow-lg shadow-brand-violet/30'
                  : 'bg-bg-alt border border-white/10 text-text-muted hover:text-text-primary hover:border-white/20'
              }`}
            >
              {cat === 'all' ? t('gallery.all') : t(cat)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              onClick={() => setZoomed(item)}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer border border-white/5 hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3">
                  <FiZoomIn size={18} className="text-white" />
                </div>
                <p className="text-white font-semibold text-sm text-center px-4">{t(item.titleKey)}</p>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white/70 text-xs">
                {t(item.category)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setZoomed(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {zoomed.image ? (
              <img src={zoomed.image} alt={t(zoomed.titleKey)} className="w-full object-contain max-h-[80vh]" />
            ) : (
              <div className={`w-full aspect-video bg-gradient-to-br ${zoomed.gradient} flex items-center justify-center`}>
                <span className="text-white/30 text-lg font-medium">{t(zoomed.titleKey)}</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">{t(zoomed.titleKey)}</p>
              <p className="text-white/50 text-sm">{t(zoomed.category)}</p>
            </div>
            <button
              onClick={() => setZoomed(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
