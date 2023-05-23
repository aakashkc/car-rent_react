/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding:{
        DEFAULT:'1rem',
        lg:'5rem',

      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors:{
        primary:'#000d6b',
        secondary:'#f9a826',
        tertiary:'#7c8a97',
        parag:'rgba(255, 255, 255, 0.715)'
      },
      backgroundImage: {
        'slide1': "linear-gradient(to right bottom, rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5)),  url('./assets/all-images/slider-img/slider-1.jpg')",
        'slide2': "linear-gradient(to right bottom, rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5)),  url('./assets/all-images/slider-img/slider-2.jpg')",
        'slide3': "linear-gradient(to right bottom, rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5)),  url('./assets/all-images/slider-img/slider-3.jpg')",
        'gradient-primary':
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9))",





      }

    },
  },
  plugins: [],

  // prettier.config.js

  tailwindConfig: './styles/tailwind.config.js',


  
}
