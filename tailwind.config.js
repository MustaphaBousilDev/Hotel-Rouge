/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#06b6d4',
        primaryLight:'#dee8fd',
        bgDashboard:'rgb(237, 240, 240)',
        grayDashboard:'rgb(212, 208, 208)',
        grayLight:'rgb(248, 248, 248)',
        grayText:'rgb(190, 184, 184)',
        green:'rgb(133, 247, 148)',
        greenLight:'rgb(216, 255, 221)',
        greenDefault:'rgb(76, 233, 97)',
        greenText:'rgb(10, 212, 37)'
      },
      linearGradientColors: {
        'primary-primaryLight':['#06b6d4','#3b82f6'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1450px',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),//hide sidebar
    require('tailwind-scrollbar'),
  ],
}
