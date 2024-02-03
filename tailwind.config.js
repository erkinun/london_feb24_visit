/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "london-blue": "#0071bc", // You can adjust the color as per your preference
        "london-bg": "#1f2532", // You can adjust the color as per your preference
        "uk-red": "#C8102E",
        "uk-blue": "#012169",
      },
    },
  },
  plugins: [],
};
