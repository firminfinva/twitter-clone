/** @type {import('tailwindcss').Config} */

const sidebarWidth = '22.5vw'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '77.5vw': '72.5vw',
      },
      width: {
        [sidebarWidth]: `${sidebarWidth}`,
      },
      width:{
        '2rem': '2rem',
      },
      margin: {
        [sidebarWidth]: `${sidebarWidth}`,
      },
      colors: {
        customBlue: '#202327',
      },
    },
  },
  plugins: [],
}

