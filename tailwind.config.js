const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{html,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      md: "720px",
      lg: "960px",
      xl: "1320px",
    },
    container: {
      center: true,
      padding: "0.75rem",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "1.5"],
      "base-sm": ["16px", "17px"],
      lg: ["18px", "26px"],
      "lg-sm": ["18px", "19px"],
      xl: ["20px", "29px"],
      "xl-sm": ["20px", "26px"],
      "2xl": ["24px", "35px"],
      "2xl-sm": ["24px", "1"],
      "3xl": ["32px", "46px"],
      "3xl-sm": ["32px", "34px"],
      "4xl": ["36px", "1.5"],
      "5xl": ["48px", "70px"],
      "5xl-sm": ["48px", "50px"],
      "6xl": ["64px", "1.5"],
      "7xl": ["80px", "85px"],
    },
    colors: {
      secondary: "#F0F0F0",
      white: "#FFFFFF",
      darkGray: "#808080",
      black: "#000000",
      lightGray: "#00000029",
      lightGreen: "#53C139",
      primary: "#E6553B",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Fredoka One", "Noto Sans TC", ...defaultTheme.fontFamily.sans],
      noto: ["Noto Sans TC", "sans-serif"],
      paytone: ["Paytone One", "sans-serif"],
    },
    backgroundImage: {
      logo: 'url("../images/logo.svg")',
    },
    extend: {
      brightness: {
        70: "70%",
      },
      opacity: {
        65: "65%",
        85: "85%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("flowbite/plugin")],
};