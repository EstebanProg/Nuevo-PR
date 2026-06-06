import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { siteConfig } from '../config/site.config'

const socialLinks = [
  { icon: FaWhatsapp, key: 'whatsapp', hoverColor: 'hover:text-green-400 hover:border-green-400/30' },
  { icon: FaInstagram, key: 'instagram', hoverColor: 'hover:text-pink-400 hover:border-pink-400/30' },
  { icon: FaFacebook, key: 'facebook', hoverColor: 'hover:text-blue-400 hover:border-blue-400/30' },
  { icon: FaTiktok, key: 'tiktok', hoverColor: 'hover:text-white hover:border-white/30' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#features' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ]

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-bg-primary/95 backdrop-blur-lg shadow-xl shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo (Z-start: top-left) */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-violet to-brand-pink flex items-center justify-center font-display font-bold text-white text-sm shadow-lg group-hover:shadow-brand-violet/50 transition-all group-hover:scale-105">
              {siteConfig.logo}
            </div>
            <span className="font-display font-bold text-xl text-text-primary group-hover:text-brand-violet-light transition-colors hidden sm:block">
              {siteConfig.name}
            </span>
          </a>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="relative text-text-muted hover:text-text-primary text-sm font-medium transition-colors group py-1"
              >
                {t(key)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-violet to-brand-pink group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right: social icons + lang switcher (Z-end: top-right) */}
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, key, hoverColor }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className={`w-9 h-9 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center text-text-muted transition-all duration-200 hover:scale-110 ${hoverColor}`}
              >
                <Icon size={15} />
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1.5 rounded-full bg-bg-alt border border-white/10 text-text-muted hover:text-text-primary hover:border-brand-violet/50 text-xs font-bold tracking-wider transition-all"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-text-primary rounded-lg hover:bg-bg-alt transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="border-t border-white/5 px-4 pb-6 pt-4 space-y-1">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-text-muted hover:text-text-primary hover:bg-bg-alt font-medium transition-all"
            >
              {t(key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4 mt-2 border-t border-white/5">
            {socialLinks.map(({ icon: Icon, key, hoverColor }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className={`w-10 h-10 rounded-full bg-bg-alt border border-white/10 flex items-center justify-center text-text-muted transition-all ${hoverColor}`}
              >
                <Icon size={17} />
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="ml-auto px-4 py-2 rounded-full bg-bg-alt border border-white/10 text-text-muted text-xs font-bold tracking-wider"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
