/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F2',
        ink: '#20201E',
        muted: '#77766F',
        line: '#D9D5CA',
        accent: '#9A7653',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 48px rgba(32, 32, 30, 0.08)',
      },
    },
  },
  plugins: [],
}
