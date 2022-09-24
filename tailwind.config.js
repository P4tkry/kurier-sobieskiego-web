/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ropa-sans': ['Ropa Sans', 'sans-serif'],
        'times-new-roman': ['Times New Roman','Times','serif'],
          'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
