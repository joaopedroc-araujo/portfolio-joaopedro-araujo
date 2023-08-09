/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx,css}',
];
export const theme = {
  extend: {
    colors: {
      'light-bg': '#f9fafb',
      'light-text': '#1f2937',
      'dark-bg': '#090C10',
      'dark-text': '#f9fafb',
    },
  },
  fontFamily: {
    epilogue: ['Epilogue', 'sans-serif'],
  },
  screens: {
    sm: '394px',
    md: '768px',
    lg: '1024px',
  },
};
export const plugins = [];