/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0B14',
          surface: '#12141F',
          alt: '#1A1D2E',
        },
        brand: {
          violet: '#7C3AED',
          'violet-light': '#9D5FFF',
          pink: '#EC4899',
          'pink-light': '#F472B6',
          amber: '#F59E0B',
        },
        text: {
          primary: '#F8FAFC',
          muted: '#8892A4',
          accent: '#C4B5FD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-right': 'slideRight 0.7s ease-out',
        'slide-left': 'slideLeft 0.7s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideRight: { from: { opacity: '0', transform: 'translateX(-40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
