/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tutor: {
          bg: '#0D1B2A',
          card: '#1B263B',
          accent: '#4DA8DA',
          hover: '#00B4D8',
          text: '#E0E1DD',
          dark: '#0a1623'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(34, 197, 94, 0.15)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.2)',
        'glow-lg': '0 0 50px rgba(168, 85, 247, 0.25)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}