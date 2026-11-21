/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF8F5',
        card: '#FFFFFF',
        borderNeutral: '#E8E4DC',
        borderSubtle: '#F0ECE4',
        navy: {
          DEFAULT: '#162737',
          light: '#233748',
          dark: '#0D1A25',
        },
        cobalt: {
          DEFAULT: '#0B63E5',
          hover: '#094EB8',
          light: '#EBF2FE',
        },
        butter: {
          DEFAULT: '#FDF1D0',
          dark: '#F6DF9C',
          light: '#FFF9EA',
        },
        powder: {
          DEFAULT: '#DCE8F9',
          dark: '#B8D4F7',
          light: '#F0F6FE',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
      },
      boxShadow: {
        'warm-xs': '0 1px 2px rgba(30, 25, 20, 0.03)',
        'warm-sm': '0 1px 3px rgba(30, 25, 20, 0.05)',
        'warm-md': '0 4px 14px rgba(30, 25, 20, 0.06)',
        'warm-lg': '0 10px 30px rgba(30, 25, 20, 0.08)',
      },
    },
  },
  plugins: [],
};
