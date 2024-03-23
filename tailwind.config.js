/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primer: "#364F6B",
        primerLatar: "#FFFFFF",
        primerAksen: "#181616",
        sekunder: "#3FC1C9",
        sekunderLatar: "#F8F8F8",
        sekunderAksen: "#333333",
        tersier: "#FC5185",
        tersierLatar: "#FAFAFA",
        tersierAksen: "#727272",
        tersierText: "#898989",
      },
      boxShadow: {
        custom: "0 4px 0 0 rgba(51, 51, 51, 0.1)",
      },
    },
  },
  plugins: [],
};
