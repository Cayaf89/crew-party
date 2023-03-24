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
            boxShadow: {
                'xs': '0px 2px 2px #00000029',
                'sm': '3px 3px 6px #00000029',
                'md': '8px 8px 6px #00000029',
                'lg': '16px 16px 6px #0000002F',
                'xl': '18px 18px 16px #0000002F',
                'top': '0px -5px 8px #0000002F',
                'bottom': '0px 5px 8px #0000002F',
            },
            colors: {
                primary: '#ee7404',
                'primary-light': 'rgba(238, 116, 4, .4)',
                white: '#fff',
                black: '#000',
                light: '#f4f5f8',
            },
        },
    },
    plugins: [],
}
