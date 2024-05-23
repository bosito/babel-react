/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(-60deg, #09B6A2, #6BF8E7, #09B6A2)',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 0%',
      },
      transitionTimingFunction: {
        'ease-custom': 'ease 0.3s',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
        },
      },
      animation: {
        'glow-sm': 'glow 1s ease-in-out infinite',
        'glow-md': 'glow 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['hover'],
      animation: ['hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}

