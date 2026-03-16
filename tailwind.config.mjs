/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'campana-morado': '#53237E',
        'campana-lima': '#C9D82D',
        'campana-verde': '#108E51',
      },
    },
  },
  plugins: [],
};
