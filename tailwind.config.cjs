/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '567px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          dark: '#009076',
          DEFAULT: '#41EEEA',
        },
        darker: '#1D1D1D',
        gray: '#A0A0A0',
      },
      spacing: {
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    fontFamily: {
      sans: ['Chivo', 'sans-serif'],
      display: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
};
