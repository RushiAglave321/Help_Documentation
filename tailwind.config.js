/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // required for dark mode switching
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // 👈 needed for shadcn animations
    require("@tailwindcss/typography"),
  ],
}
