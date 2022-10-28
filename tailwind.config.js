/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      keyframes: {
        wave: {
          '1%': { transform: 'rotate(-1deg)' },
          '2%': { transform: 'rotate(-1eg)' },
          '3%': { transform: 'rotate(-2deg)' },
          '4%': { transform: 'rotate(-2deg)' },
          '5%': { transform: 'rotate(-3deg)' },
          '6%': { transform: 'rotate(-3deg)' },
          '7%': { transform: 'rotate(-4deg)' },
          '8%': { transform: 'rotate(-4deg)' },
          '9%': { transform: 'rotate(-5deg)' },
          '10%': { transform: 'rotate(-5deg)' },
          '11%': { transform: 'rotate(-4deg)' },
          '12%': { transform: 'rotate(-4deg)' },
          '13%': { transform: 'rotate(-3deg)' },
          '14%': { transform: 'rotate(-3deg)' },
          '15%': { transform: 'rotate(-2deg)' },
          '16%': { transform: 'rotate(-2deg)' },
          '17%': { transform: 'rotate(-1deg)' },
          '18%': { transform: 'rotate(-1deg)' },
          '19%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(0deg)' },

        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}
