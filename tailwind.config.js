/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 2.5s forwards",
        scale_card: "scale_card 1s forwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scale_card: {
          "0%": {
            transform: "translateY(-9vw) scale(1)",
          },
          "100%": {
            transform: "translateY(-12vw) scale(1.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
