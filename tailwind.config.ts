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
        primary: '#6F61C0',
        secondary: '#A084E8',
        tertiary: '#8BE8E5',
        quaternary: '#D5FFE4'
      }
    },
  },
  plugins: [],
};
export default config;
