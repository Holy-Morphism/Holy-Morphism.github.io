/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primary: "#070F2B",
      Secodary: "#1B1A55",
      TertiaryColor1: "#535C91",
      TertiaryColor2: "#9290C3",
    },
    extend: {
      fontFamily: {
        JetBrainsMono: ["JetBrainsMono", "monospace"],
      },
    },
  },
  plugins: [],
};
