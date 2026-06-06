import { useTranslation } from 'react-i18next'
import { FiTarget, FiEye, FiHeart, FiUsers } from 'react-icons/fi'

const cards = [
  { icon: FiTarget, titleKey: 'about.card1Title', descKey: 'about.card1Desc', gradient: 'from-brand-violet to-indigo-500' },
  { icon: FiEye, titleKey: 'about.card2Title', descKey: 'about.card2Desc', gradient: 'from-brand-pink to-purple-500' },
  { icon: FiHeart, titleKey: 'about.card3Title', descKey: 'about.card3Desc', gradient: 'from-indigo-500 to-brand-violet' },
  { icon: FiUsers, titleKey: 'about.card4Title', descKey: 'about.card4Desc', gradient: 'from-purple-500 to-brand-pink' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-bg-surface py-20 lg:py-28 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-alt border border-brand-violet/30 text-brand-violet-light text-sm font-medium mb-5">
            {t('about.tag')}
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-5 max-w-3xl mx-auto">
            {t('about.title')}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, titleKey, descKey, gradient }, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-bg-alt border border-white/5 p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="font-display text-lg font-bold text-text-primary mb-3">
                {t(titleKey)}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{t(descKey)}</p>

              {/* Corner glow on hover */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${gradient}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
