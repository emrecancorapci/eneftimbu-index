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
      spacing: {
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
