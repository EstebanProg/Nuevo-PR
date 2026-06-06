import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import { siteConfig } from '../config/site.config'

export default function Hero() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const touchStartX = useRef(null)
  const slides = siteConfig.carousel

  const goTo = useCallback(
    (index) => {
      if (transitioning) return
      setTransitioning(true)
      setCurrent(index)
      setTimeout(() => setTransitioning(false), 700)
    },
    [transitioning]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, slides.length, goTo])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  const slide = slides[current]

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {s.image ? (
            <img
              src={s.image}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${s.gradient}`} />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Decorative glows */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[80px] pointer-events-none"
            style={{ backgroundColor: s.accentColor }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
            style={{ backgroundColor: s.accentColor2 }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-20 h-full flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-text-accent font-medium mb-6 animate-fade-in"
            >
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              {t(slide.badgeKey)}
            </div>

            <h1
              key={`title-${current}`}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight mb-6 animate-slide-up"
            >
              {t(slide.titleKey)}
            </h1>

            <p
              key={`sub-${current}`}
              className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed max-w-xl animate-slide-up"
            >
              {t(slide.subtitleKey)}
            </p>

            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-brand-violet to-brand-pink text-white font-semibold text-base hover:shadow-2xl hover:shadow-brand-violet/40 hover:scale-105 transition-all duration-300 animate-slide-up"
            >
              {t(slide.ctaKey)}
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Bottom bar: slide counter + dots */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent pb-6 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between">
          <p className="text-text-muted text-xs uppercase tracking-widest">
            {t('hero.slideLabel')} {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </p>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2 bg-gradient-to-r from-brand-violet to-brand-pink'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
