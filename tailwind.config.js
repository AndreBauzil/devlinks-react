/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/assets/background/bg-mobile.jpg')",
        switch: "url(./assets/utils/moon-stars.svg);"
      },
      colors: {
        stroke: "#ffffff80",
        surface: "#ffffff0d",
        surfaceHover: "#00000005",
        highlight: "#ffffff33",
        text: "white",
      }
    },
  },
  plugins: [],
}

