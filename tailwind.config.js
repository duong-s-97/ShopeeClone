/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
        gray: {
          100: '#f5f5f5'
        },
        red: {
          100: '#d20504'
        }
      },
      height: {
        84: '84px'
      },
      width: {
        1200: '1200px'
      },
      minWidth: {
        1200: '1200px'
      }
    }
  },
  plugins: []
}
