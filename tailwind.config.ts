import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#D4AF37',
                    darkGold: '#B8941E',
                    cream: '#F5F5DC',
                    brown: '#5C4033',
                    darkBrown: '#3E2723',
                }
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
                cormorant: ['var(--font-cormorant)', 'serif'],
                orbitron: ['var(--font-orbitron)', 'sans-serif'],
                allura: ['var(--font-allura)', 'cursive'],
            },
        },
    },
    plugins: [],
}
export default config
