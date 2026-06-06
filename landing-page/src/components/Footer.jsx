import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { siteConfig } from '../config/site.config'

const socialIcons = [
  { icon: FaWhatsapp, key: 'whatsapp', hoverColor: 'hover:text-green-400' },
  { icon: FaInstagram, key: 'instagram', hoverColor: 'hover:text-pink-400' },
  { icon: FaFacebook, key: 'facebook', hoverColor: 'hover:text-blue-400' },
  { icon: FaTiktok, key: 'tiktok', hoverColor: 'hover:text-white' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-bg-surface border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-brand-violet via-brand-pink to-brand-violet" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-violet to-brand-pink flex items-center justify-center font-display font-bold text-white text-sm group-hover:shadow-brand-violet/40 group-hover:shadow-lg transition-shadow">
                {siteConfig.logo}
              </div>
              <span className="font-display font-bold text-lg text-text-primary">{siteConfig.name}</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, key, hoverColor }) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className={`w-9 h-9 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center text-text-muted transition-all hover:scale-110 hover:border-white/20 ${hoverColor}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">
              {t('footer.followUs')}
            </h4>
            <ul className="space-y-3">
              {socialIcons.map(({ icon: Icon, key, hoverColor }) => (
                <li key={key}>
                  <a
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-text-muted text-sm transition-colors ${hoverColor}`}
                  >
                    <Icon size={14} />
                    <span className="capitalize">{key}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-text-muted hover:text-text-primary text-sm transition-colors group"
                >
                  <FiMail size={14} className="mt-0.5 flex-shrink-0 group-hover:text-brand-violet transition-colors" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-text-muted hover:text-text-primary text-sm transition-colors group"
                >
                  <FiPhone size={14} className="mt-0.5 flex-shrink-0 group-hover:text-brand-violet transition-colors" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <FiMapPin size={14} className="mt-0.5 flex-shrink-0" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {siteConfig.year} {siteConfig.name}. {t('footer.rights')}.
          </p>
          <div className="h-px flex-1 mx-8 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden sm:block" />
          <div className="flex items-center gap-1">
            <span className="text-text-muted text-xs">Made in</span>
            <span className="text-base">🇵🇦</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
