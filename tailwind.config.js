/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '50%': { transform: 'translateY(-10px) translateX(-50%)' },
        },
        glow: {
          '0%': { transform: 'translate(5%, 5%) rotate(0deg)' },
          '100%': { transform: 'translate(-5%, -5%) rotate(360deg)' },
        },
        'glow-button': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow-slow': 'glow 15s linear infinite',
        'glow-slow-reverse': 'glow 15s linear infinite reverse',
        'glow-button': 'glow-button 4s linear infinite',
        'glow-button-fast': 'glow-button 2s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
