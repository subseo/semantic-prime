/** @type {import('tailwindcss').Config} */
import {borderRadius, boxShadow} from "./design_system/tokens.js"
import {colors, dark, light} from './design_system/scheme.js'

const {createThemes} = require('tw-colors');


module.exports = {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./demo/**/*.{vue,js,ts,jsx,tsx}",
        "./lib/**/*.{vue,js,ts,jsx,tsx}",
        "./dist/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow,
            borderRadius,
            colors
        },
    },
    plugins: [
        createThemes({light, dark})
    ],
}