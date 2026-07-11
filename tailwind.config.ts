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
        stone: {
          DEFAULT: "#F1EDE4",
        },
        ink: {
          DEFAULT: "#1E2238",
        },
        marigold: {
          DEFAULT: "#DDA23A",
          dark: "#C48A28",
        },
        teal: {
          DEFAULT: "#2F6B5E",
          light: "#3F8272",
        },
        sand: {
          DEFAULT: "#E8E1D2",
        },
        brick: {
          DEFAULT: "#B54B32",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
