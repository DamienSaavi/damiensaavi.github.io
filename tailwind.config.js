module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      'sm': '620px'
    },
    screens: {
      'xs': '460px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    rotate: {
      '135': '135deg',
      '-135': '-135deg',
      '45': '45deg',
      '-45': '-45deg',
      '90': '90deg',
      '-90': '-90deg',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      main: '4px 4px 15px rgba(0, 0, 0, 0.7)'
    },
    extend: {
      spacing: {
        '102': '500px'
      },
      colors: {
        'main': 'rgb(223, 223, 223)',
        'accent': '#DCC579',
        'accent-light': '#E3D093',
        'highlight': '#B86D5B',
        'subtle': '#85A27C',
        'subtle-dark': '#4C5058',
        'base-dark': '#393D46',
        'base-light': '#73758D',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'active'],
      translate: ['active']
    },
  },
  plugins: [],
}
