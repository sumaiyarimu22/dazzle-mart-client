/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        light: "#F4F4F4",
        dark: "#21242B",
        accent1: "#DD868C",
      },
    },
  },
  plugins: [],
};
