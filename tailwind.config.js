/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#FCD34D',
        'gray-2': '#EFF0F5',
        'gray-4': '#707070',
        'gray-6': '#434343',
        'gray-7': '#2E2E2E',
      },
    },
  },
  plugins: [],
};
