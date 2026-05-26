/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3F52FB",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
