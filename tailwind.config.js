/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },

    extend: {
      colors: {
        primary: {
          purple: 'var(--primary-purple)',
          dustPink: 'var(--primary-dustPink)',
          blue: 'var(--blue)',
        },
        gray: {
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme('colors.gray.900'),
              fontSize: '24px',
            },
          },
        },
        test: {
          css: {
            color: theme('colors.red.900'),
          },
        },
      }),
    },
    boxShadow: {
      DEFAULT: 'var(--box-shadow-default)',
    },
    borderRadius: {
      DEFAULT: 'var(--border-radius-rounded)',
      100: 'var(--border-radius-squared-100)',
      200: 'var(--border-radius-squared-200)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
