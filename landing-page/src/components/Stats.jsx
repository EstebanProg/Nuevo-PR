import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/site.config'

function StatCard({ stat, index }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const colors = [
    'from-brand-violet to-brand-violet-light',
    'from-brand-pink to-brand-pink-light',
    'from-brand-violet to-brand-pink',
    'from-indigo-500 to-brand-violet',
  ]

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`font-display text-5xl lg:text-6xl font-black mb-2 bg-gradient-to-r ${colors[index % colors.length]} bg-clip-text text-transparent`}
      >
        {t(stat.valueKey)}
      </div>
      <p className="text-text-muted text-sm lg:text-base font-medium">{t(stat.labelKey)}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-bg-surface border-y border-white/5 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {siteConfig.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
