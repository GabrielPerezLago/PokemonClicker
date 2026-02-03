/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'peq': '1rem',
        'med': '1.5rem',
        'grande': '2rem',
        'gigante': '5rem'
      },
      fontFamily: {
        'frijole': ['frijole', 'sans-serif']
      }
    },
  },
  plugins: [],
};
