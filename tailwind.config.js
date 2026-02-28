/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a26',
          600: '#252533',
          500: '#2d2d3d',
        },
        accent: {
          cyan: '#22d3ee',
          'cyan-dim': '#0e7490',
          violet: '#a78bfa',
          'violet-dim': '#6d28d9',
          emerald: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['clamp(3rem, 10vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'gradient-flow': 'gradientFlow 5s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'gradient-shift': '200% 200%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(165deg, #050508 0%, #0a0a0f 30%, #12121a 60%, #0a0a0f 100%)',
        'gradient-mesh-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.12), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(167, 139, 250, 0.08), transparent), linear-gradient(180deg, #0a0a0f 0%, #050508 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.4)',
        'glow-cyan-lg': '0 0 60px -15px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 40px -10px rgba(167, 139, 250, 0.3)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 24px 48px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-glow': '0 0 0 1px rgba(34, 211, 238, 0.15), 0 20px 50px -20px rgba(0, 0, 0, 0.5)',
      },
      maxWidth: {
        'content': '72rem',
      },
    },
  },
  plugins: [],
}
