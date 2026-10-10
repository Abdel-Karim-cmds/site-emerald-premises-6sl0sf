/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldPrimary: '#00ff88',
        editorialGray: '#5e5e5e',
        warmPaper: '#faf8f5',
        obsidian: '#1c1917',
        taupe: '#78716c',
        sandstone: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};