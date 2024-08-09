import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF4F",
        secondary: "#89939E",
        info: "#2194f3",
        text: "#18191F",
        neutral: {
          DEFAULT: "#4D4D4D",
          50: "#F5F7FA",
          100: "#717171",
          200: "#4D4D4D",
          300: "#263238",
        },
      },
      screens: {
        "3xl": "1680px",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
export default config;
