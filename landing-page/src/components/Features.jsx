import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FiCheck } from 'react-icons/fi'
import { siteConfig } from '../config/site.config'

function FeatureBlock({ feature, index }) {
  const { t } = useTranslation()
  const isEven = index % 2 === 0
  const Icon = feature.icon

  return (
    <div
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-10 lg:gap-20 items-center py-16 lg:py-24`}
    >
      {/* Visual panel */}
      <div className="w-full lg:flex-1">
        <div
          className={`relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-2xl border border-white/5 bg-gradient-to-br ${feature.gradient}`}
          style={
            feature.image
              ? {
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        >
          {/* Placeholder icon when no image */}
          {!feature.image && (
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10">
              <Icon size={48} className="text-white/30" />
            </div>
          )}

          {/* Glowing corner accent */}
          <div
            className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-48 h-48 rounded-full opacity-40 blur-3xl pointer-events-none`}
            style={{ backgroundColor: feature.accentColor }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 opacity-20 blur-2xl pointer-events-none"
            style={{ backgroundColor: feature.accentColor }}
          />

          {/* "Add image here" instruction */}
          {!feature.image && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-white/40 text-xs whitespace-nowrap">
              Reemplaza con tu imagen en site.config.js
            </div>
          )}
        </div>
      </div>

      {/* Text content */}
      <div className="w-full lg:flex-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-alt border border-white/10 text-text-accent text-xs font-semibold uppercase tracking-wider mb-5">
          <Icon size={13} />
          {t(feature.tagKey)}
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-4 leading-tight">
          {t(feature.titleKey)}
        </h2>

        <p className="text-text-muted text-base lg:text-lg leading-relaxed mb-7">
          {t(feature.descKey)}
        </p>

        <ul className="space-y-3">
          {feature.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-brand-violet to-brand-pink"
              >
                <FiCheck size={10} className="text-white" />
              </span>
              <span className="text-text-muted text-sm leading-relaxed">{t(point)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center pt-20 pb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-alt border border-brand-violet/30 text-brand-violet-light text-sm font-medium mb-5">
            {t('features.tag')}
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Z-pattern feature blocks */}
        <div className="divide-y divide-white/5">
          {siteConfig.features.map((feature, index) => (
            <FeatureBlock key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
