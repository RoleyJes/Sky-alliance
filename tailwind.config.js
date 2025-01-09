/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['"Abhaya Libre"', "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#0F1219",
        darkGrey: "#1c1e2f",
        neutral100: "#E4E3E6",
        neutral200: "#D1D1D6",
        neutral300: "#babac1",
        neutral400: "#8d8c98",
        pink: "#c108f1",
        neutral100: "#e4e3e6",
        grey200: "#CBCDD2",
        grey300: "#777f8a",
        success: "#2e8e33",
      },
      backgroundImage: {
        "sub-hero": "url('./src/assets/home/lineBg.svg')",
        "coming-soon": "url('./src/assets/Bg.svg')",
        "newsletter-landing-page": "url(./src/assets/Home/newsletterBg.webp)",
      },
    },
  },
  plugins: [],
};
