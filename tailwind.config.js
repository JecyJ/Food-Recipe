/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryOne: "#58E6D9",
        milk: "#e7e4df"
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
}

