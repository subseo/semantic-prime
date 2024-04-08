/** @type {import('tailwindcss').Config} */
import palette from "./palette.js"

// STANDARD COLORS
const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: "#111111",
    white: "#fbfbfb",

    primary: {
        DEFAULT: palette.magenta,
        dark: palette.magenta['800'],
        darker: palette.magenta['900'],
        light: palette.magenta['600'],
        lighter: palette.magenta['500'],
    },
    accent: {
        DEFAULT: palette.white,
    },
    secondary: {
        DEFAULT: palette.magenta,
        dark: palette.magenta['800'],
        darker: palette.magenta['900'],
        light: palette.magenta['600'],
        lighter: palette.magenta['500'],
    }
}

// LIGHT MODE COLORS
const light = {
    surface: {
        DEFAULT: palette.grey['200'],
        dark: palette.grey['300'],
        darker: palette.grey['400'],
        light: palette.grey['100'],
        lighter: palette.magenta['50'],
    },
    content: {
        DEFAULT: palette.magenta
    }
}

//DARK MODE COLORS
const dark = {
    surface: {
        DEFAULT: palette.grey['800'],
        dark: palette.grey['900'],
        darker: palette.grey['950'],
        light: palette.grey['700'],
        lighter: palette.magenta['600'],
    }
}

module.exports = {
    colors, light, dark
};