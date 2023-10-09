/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'custom-color': '#171717',
        'custom-menu' : "#2E2E2E",
        'custom-red' : "#F82323"
      },   
      fontFamily: {
        'custom' : 'BrittanySignature',
        'dancing' :'Dancing Script'
      },

    },
  },
  plugins: [],
}
