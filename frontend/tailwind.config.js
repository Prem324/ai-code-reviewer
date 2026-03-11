/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        primary: "#6366f1",
        secondary: "#a855f7",
        accent: "#ec4899",
      }
    },
  },
  plugins: [],
}
