/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif'],
            },
            boxShadow: {
                'black': '4px 4px 0 #000000',
                'white': '6px 6px 0 #000000',
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
        },
    },
    darkMode: 'selector',
    plugins: [],
}