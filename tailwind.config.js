/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx,css}',
];
export const theme = {
  extend: {
    keyframes: {
      'animar-cursor': {
        '0%': {
          color: 'rgb(30, 64, 175)',
        },
        '100%': {
          color: 'rgb(255, 255, 255)',
        },
      },
    },
    animation: {
      'animar-cursor': 'animar-cursor .8s infinite',
    },
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