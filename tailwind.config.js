/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#12151C',
        paper: '#EEF0F4',
        panel: '#181C25',
        gold: '#C9971F',
        teal: '#255C55',
        muted: '#5B6472',
        line: '#D8DBE2',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
