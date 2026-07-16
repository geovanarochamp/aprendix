/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#6ACF68",
        navy: "#1E1F3F",
        yellow: "#FFD43B",
        blue: "#4EA8FF",
        purple: "#A06AFF",
        pink: "#FF6FAE",
        orange: "#FF9F43",
        cream: "#FFF7E6",
      },
      fontFamily: {
        sans: ["Nunito", "ui-rounded", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
