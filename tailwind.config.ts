import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

// primary: "#ea8c2d",
// secondary: "#219ebc",

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'nato-blue': '#122f45',
      'eastern-blue': {
        DEFAULT: '#219EBC',
        50: '#A5E1EF',
        100: '#94DBEC',
        200: '#71D0E6',
        300: '#4FC4E0',
        400: '#2CB8DA',
        500: '#219EBC',
        600: '#19768C',
        700: '#104E5D',
        800: '#08262D',
        900: '#000000',
        950: '#000000',
      },
      'fire-bush': {
        DEFAULT: '#EA8C2D',
        50: '#FBE7D4',
        100: '#F9DDC1',
        200: '#F5C99C',
        300: '#F1B577',
        400: '#EEA052',
        500: '#EA8C2D',
        600: '#CB7014',
        700: '#98540F',
        800: '#65380A',
        900: '#321B05',
        950: '#180D02',
      },
      timeless: '#ebe9e8',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      indigo: colors.indigo,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        //sm: '2rem',
        lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
      },
    },
    extend: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
