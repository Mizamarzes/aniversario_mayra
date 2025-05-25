/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'wine': {
          50: '#FCE8EA',
          100: '#F8D1D6',
          200: '#F1A3AD',
          300: '#E97584',
          400: '#E24763',
          500: '#D11D3A',
          600: '#A7162E',
          700: '#7D1022',
          800: '#530A17',
          900: '#2A050B',
        },
        'dark': {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#1A1A1A',
          600: '#151515',
          700: '#101010',
          800: '#0A0A0A',
          900: '#050505',
        },
        'nana-pink': '#FF69B4',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'musicBounce': 'musicBounce 0.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        musicBounce: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        }
      },
    },
  },
  plugins: [],
}