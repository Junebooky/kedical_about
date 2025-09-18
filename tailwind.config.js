/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          300: '#C6A9FF',
          600: '#7600D7',
          700: '#6200B3',
          800: '#4E0090',
        },
        navy: '#1A1A2E',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '50': '50px',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 16px 0px rgba(0,0,0,0.16)',
      },
      animation: {
        'infinite-loop-carousel-slide': 'infinite-loop-carousel 30s linear infinite',
      },
      keyframes: {
        'infinite-loop-carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
