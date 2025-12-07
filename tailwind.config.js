/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pantone: {
          // PANTONE 11-4201 Cloud Dancer
          DEFAULT: '#F0EEE9', 
          50: '#FCFCFB',
          100: '#F8F7F5',
          200: '#F0EEE9', // Base: Cloud Dancer
          300: '#DCDAD5',
          400: '#BDBBB7',
          500: '#9E9C98',
          600: '#757471',
          700: '#52514F',
          800: '#333231',
          900: '#1A1A1A', // Primary Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bounce-slight': 'bounceSlight 0.3s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSlight: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        }
      },
      boxShadow: {
          'soft': '0 4px 20px -2px rgba(240, 238, 233, 0.5)',
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    }
  },
  plugins: [],
}