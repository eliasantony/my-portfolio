/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#00C795', // A nice teal/green
          light: '#66FFD9',
          dark: '#008F6B',
        },
        dark: {
          100: '#121212',
          200: '#282828',
          300: '#3f3f3f',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "fade-in": 'fade-in 1s ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}