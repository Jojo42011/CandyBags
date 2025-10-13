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
        primary: {
          orange: '#FF6B35',
          purple: '#9B5DE5',
        },
        secondary: {
          black: '#1A1A1A',
          darkPurple: '#2E1B4D',
        },
        accent: {
          neonGreen: '#00FF41',
          white: '#FFFFFF',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 15px #FF6B35',
          },
          '100%': { 
            boxShadow: '0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 30px #FF6B35, 0 0 40px #9B5DE5',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

