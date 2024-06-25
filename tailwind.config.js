/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				headerBg: "#FFF8F5",
				primary :"#12463A",
        white:"#ffffff",
        secondary:"#FFB91D",
        dark:"#714E00",
			},
      backgroundImage: {
        hero: "url('../src/assets/bg.png')",
      },
      fontFamily: {
        'dela': ['"Dela Gothic One"', "sans-serif"],
        
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
              marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
    },
  },
  plugins: [],
}

