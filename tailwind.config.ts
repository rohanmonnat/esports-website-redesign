import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wooden-pattern': "url('/wooden-pattern.png')",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        'linear-progress': {
          '0%': {
            width: '0',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        'linear-progress': 'linear-progress 4s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
