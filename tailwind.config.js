/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'sm': '1px 1px 2px black',
        'md': '2px 2px 4px black',
        'lg': '3px 3px 6px black',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px black',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px black',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px black',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
