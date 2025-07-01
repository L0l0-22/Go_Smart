// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#000066',
        sec: "#00cccc" , 
        third:"#767FFF", 
        forth: '#005BFF'
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
