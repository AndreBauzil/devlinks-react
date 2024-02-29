/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/assets/background/bg-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

