import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#282828",
      foreground: "#53ed38",
      dark: {
        background: "#3f1ad2",
        foreground: "#661fc3",
      },
    },
    extend: {
      colors: {
      },
      
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
