/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    borderRadius: {
        sm: '4px',
        DEFAULT: '0.5rem',
    },
    boxShadow: {
        DEFAULT: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        sm: 'rgba(50, 50, 93, 0.25) 0px 4px 8px -3px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    fontFamily: {
        sans: ['TeleNeo Thin', 'sans-serif'],
        serif: ['TeleNeo Thin', 'serif'],
    },
}