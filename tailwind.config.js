/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxxs':{'min': '250px','max': '299px'},
      'xxs': {'min': '300px', 'max': '479px'},
      'xs': {'min': '480px', 'max': '575px'},
      'sm': {'min': '576px', 'max': '767px'}, 
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
      },
    extend: {
      fontSize:{
        "xxs":"8px",
        "xms":"10px",
      },
    },
  },
  plugins: [],
}

