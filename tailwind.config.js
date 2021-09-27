module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        PrimaryPurple: '#5B21B6',
        PrimaryPurpleLight: '#AA76FB',
        PrimaryPink: '#F472B6',
        PrimaryPinkLight: '#F8A1CE',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      inset: {
        '10p': '10%',
        '20p': '20%',
        '25p': '25%',
        '35p': '35%',
        '40p': '40%',
        '50p': '50%',
        '65p': '65%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
