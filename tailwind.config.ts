import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "#1b47fa",
        foregroundDark: "white",
        background: "white",
        secondaryBackground: "#F9FAFF",
        backgroundDark: "#090E34",
        secondaryBackgroundDark: "#0B113A",
        dropMenu: "#E7ECFF",
        dropMenuDark: "#1D2144",
        text: "#090E34",
        textDark: "white",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
