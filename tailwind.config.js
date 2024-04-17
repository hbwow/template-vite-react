/** @type {import('tailwindcss').Config} */
export default {
  important: ':root',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
      },
      padding: {
        2: '2px',
        4: '4px',
        16: '16px',
      },
      borderRadius: {
        8: '8px',
      },
    },
  },
  plugins: [],
};
