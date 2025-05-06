/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366f1",   // indigo‑500
          dark:   "#818cf8",   // indigo‑400
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

