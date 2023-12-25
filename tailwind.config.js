/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': 'url(./assets/hero-image-wr.jpg)'
      }
    },
    colors: {
      'container': '#1C1D1F',
      'input': '#282B30',
      'sky-blue': '#4E80EE',
      'slate-gray': '#6C727F',
      'silver': '#D2D5DA',
    }
  },
  plugins: [],
}

