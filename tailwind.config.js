/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}"
  ],
  theme: {
    fontFamily: {
      'custom': ['IBM Plex Mono', 'sans-serif'],
      'familjen': ['Familjen Grotesk', 'sans-serif'],
      'darker': ['Darker Grotesque', 'sans-serif'],
      'kdam': ["'Kdam Thmors', sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
