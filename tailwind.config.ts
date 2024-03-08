import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky: 'var(--sky)',
        bubble: 'var(--bubble)',
        darkgreen: 'var(--darkgreen)',
        lightgreen: 'var(--lightgreen)',
        brown: 'var(--brown)',
        gold: 'var(--gold)',
        bluegray: 'var(--bluegray)',
        gray: 'var(--gray)',
        white: 'var(--white)',
        darksky: 'var(--darksky)',
        darkbubble: 'var(--darkbubble)',
        purple: 'var(--purple)',
        lightPurple: 'var(--lightPurple)',
        text: 'var(--text)',
        hoverPrimary: 'var(--hoverPrimary)',
        goldHover: 'var(--goldHover)',
        brownHover: 'var(--brownHover)',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
};
export default config;
