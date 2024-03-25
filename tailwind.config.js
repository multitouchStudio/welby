/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

module.exports = {
  content: [
    "./**/*.{js,json,liquid}",
  ],
  theme: {
    extend: {
      height: {
        '94':'22rem'
      }
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    })
  ],
}
