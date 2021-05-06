const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        21: '5.25rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        42: '10.5rem',
        45: '11.25rem',
        46: '11.5rem',
        47: '11.75rem',
        49: '12.25rem',
        50: '12.5rem',
        58: '14.5rem',
        62: '15.5rem',
        82: '20.5rem',
        84: '21rem',
        86: '21.5rem',
        88: '22rem',
        98: '27rem',
        100: '30rem',
        102: '32rem',
        '8xl': '85rem',
        '9xl': '90rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '2/4': '50%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
      },
      width: {
        100: '100%',
        200: '200%',
        300: '300%',
        400: '400%',
        500: '500%',
        600: '600%',
        700: '700%',
        800: '800%',
        900: '900%',
        1000: '1000%',
        1100: '1100%',
        1200: '1200%',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('height'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        base: {
          dark: '#070E27',
          main: {
            DEFAULT: '#181B32',
            80: 'rgba(24,27,50,0.8)',
          },
          light: {
            'dark-mode': '#2C2F48',
          },
          lighter: {
            DEFAULT: '#878FB8',
            'dark-mode': '#393C57',
            16: 'rgba(135, 143, 184, 0.16)',
            24: 'rgba(135,143,184,0.24)',
          },
        },
        primary: {
          primary: '#181B32',
          lighter: '#9c86f9',
          light: '#6f4ef6',
          main: '#4b22f4',
          dark: '#3417aa',
        },
        secondary: {
          lighter: '#D2FAF6',
          light: '#49F2D2',
          main: '#0BD4C1',
          dark: '#0B756F',
        },
      },
      borderRadius: {
        circle: '50%',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      objectFit: ['hover', 'focus'],
      objectPosition: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],
      width: ['hover', 'focus', 'before', 'after'],
      height: ['hover', 'focus', 'before', 'after'],
      inset: ['group-hover', 'hover'],
      scale: ['group-hover', 'hover'],
      fontSize: ['hover', 'focus'],
      textColor: ['disabled'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled', 'active', 'checked'],
      borderWidth: ['hover', 'focus', 'disabled'],
      borderRadius: ['disabled', 'active', 'checked'],
      borderColor: ['disabled', 'active', 'checked'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.empty-content': {
          content: "''",
        },
      };

      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      });
    }),
  ],
};
