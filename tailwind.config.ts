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
        background: 'var(--background)',
        accentPrimary: 'var(--accentPrimary)',
        text: 'var(--text)',
        title: 'var(--title)',
        link: 'var(--link)',
        hoverPrimary: 'var(--hoverPrimary)',
        shadow: 'var(--shadow)',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
};
export default config;
