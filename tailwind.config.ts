import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        text: 'var(--text)',
        contrast: 'var(--contrast)',
        white: 'var(--white)',
        bg: 'var(--bg)',
        'bg-contrast': 'var(--bg-contrast)',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
