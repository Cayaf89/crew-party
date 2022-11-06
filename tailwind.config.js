/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,vue}", "./theme/**/*.{css,scss}"],
  safelist: [
    'uppercase',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#EE7404',
        'primary-light': 'rgba(238, 116, 4, .4)',
        white: '#FFF',
        black: '#000',
        light: '#f4f5f8',
      },
    },
  },
  plugins: [],
}
