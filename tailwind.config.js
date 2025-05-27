// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#EDE6D6',
        forest: '#3A5A40',
        Darkgreen: '#2E8857',
        peach: '#F2D8BF',
        mint: '#A3C9A8',
        brightBeige:'#F9F6EF',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slideIn 3s ease-in-out infinite, slideOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
