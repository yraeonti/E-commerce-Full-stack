module.exports = {
  content: ["./public/index.html","./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
      maxWidth: {
        mainwidth: '85rem',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};


