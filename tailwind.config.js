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
        darkGreen: '#082C1B',
        darkGreenHover: '#0D4028',
        lime: '#8BF03B',
        limeHover: '#7CE428',
        sageBg: '#F0F1EA',
        sageCard: '#FFFFFF',
        sageBorder: '#E2E3D8',
        sageMuted: '#4D534E',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'paid': '0 2px 8px rgba(8, 44, 27, 0.06)',
        'paid-lg': '0 8px 24px rgba(8, 44, 27, 0.12)',
      }
    },
  },
  plugins: [],
};
