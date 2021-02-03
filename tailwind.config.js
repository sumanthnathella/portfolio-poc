const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xs: "200px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
      blueHeading: '#1A63D0'
    },
    background: {
      blue: '#1A63D9',
      black: '#000000',
      work1: '#26CFA7',
      work2: '#0E5AFF',
      work3: '#672CC0'
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      serif: ["Roboto", ...defaultTheme.fontFamily.serif],
    },
    listStyleType: {
      disc: 'disc',
      hyphen: '-'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '1/4': '20%',
      '1/3': '32%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
