/** @type {import('tailwindcss').Config} */
/*eslint-disable*/
export default {
  content: ["./index.html", "./src/**/*.{js,tsx,jsx,ts}"],
  theme: {
    fontFamily: { sans: ["Roboto Mono,Monospace"] },
    extend: {
      backgroundImage: {
        stars: "url('./asset/images/image-4.jpg')",
      },
      keyframes: {
        refine: {
          "0%": { transform: "scale(50%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      animation: {
        "bounce-1": "refine 0.2s linear",
        "bounce-2": "refine 0.3s linear",
        "bounce-3": "refine 0.4s linear",
        "bounce-4": "refine 0.5s linear",
        "bounce-5": "refine 0.6s linear",
        "bounce-6": "refine 0.7s linear",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
