import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD125",
        secondary: "#019843",
        "secondary-dark": "#1A2921",
        light: "#F7F8F8",
        font: "#1C1C1C",
        "background-dark": "#111B16",
        "background-light": "#F7F3E5BF",
      },
    },
  },
  plugins: [],
};
export default config;
