/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    files:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    
  },
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['"Nanum Myeongjo"', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'r-mainblack': '#242424',
        'r-mainwhite': '#eeebdc',
        'r-black100': '#000000',
        'r-black50': '#4E4E4E',
        'r-white100': '#FFFFFF',
        'r-white50': '#ACAAA2',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
  ],
}
