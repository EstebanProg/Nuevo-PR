import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { siteConfig } from '../config/site.config'

const socialButtons = [
  {
    icon: FaWhatsapp,
    key: 'whatsapp',
    labelKey: 'contact.whatsapp',
    bg: 'from-green-600 to-green-500',
    shadow: 'hover:shadow-green-500/30',
  },
  {
    icon: FaInstagram,
    key: 'instagram',
    labelKey: 'contact.instagram',
    bg: 'from-pink-600 via-purple-600 to-orange-500',
    shadow: 'hover:shadow-pink-500/30',
  },
  {
    icon: FaFacebook,
    key: 'facebook',
    labelKey: 'contact.facebook',
    bg: 'from-blue-700 to-blue-500',
    shadow: 'hover:shadow-blue-500/30',
  },
  {
    icon: FaTiktok,
    key: 'tiktok',
    labelKey: 'contact.tiktok',
    bg: 'from-gray-800 to-gray-700',
    shadow: 'hover:shadow-white/10',
  },
]

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-bg-primary py-20 lg:py-28">
      {/* Top gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-violet/50 to-transparent mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-alt border border-brand-pink/30 text-brand-pink-light text-sm font-medium mb-5">
            {t('contact.tag')}
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            {t('contact.title')}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Social media buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
          {socialButtons.map(({ icon: Icon, key, labelKey, bg, shadow }) => (
            <a
              key={key}
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${bg} text-white font-semibold shadow-lg ${shadow} hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/10`}
            >
              <Icon size={28} />
              <span className="text-sm">{t(labelKey)}</span>
            </a>
          ))}
        </div>

        {/* Direct contact info */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-center text-text-muted text-sm uppercase tracking-widest mb-8 font-medium">
            {t('contact.directContact')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center group-hover:border-brand-violet/40 transition-colors">
                <FiMail size={16} />
              </span>
              <span className="text-sm">{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center group-hover:border-brand-violet/40 transition-colors">
                <FiPhone size={16} />
              </span>
              <span className="text-sm">{siteConfig.contact.phone}</span>
            </a>
            <div className="flex items-center gap-3 text-text-muted">
              <span className="w-10 h-10 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center">
                <FiMapPin size={16} />
              </span>
              <span className="text-sm">{siteConfig.contact.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
