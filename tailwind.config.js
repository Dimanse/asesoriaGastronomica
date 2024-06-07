/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*html',
    './src/js/**/*.js',
  ],
  theme: {

    fontFamily: {
      
      'serif': ["PT Serif", serif,],
      'sans': ["Lobster", sans-serif,],
      
    },

    extend: {
      backgroundImage: {
        'header': "url('./src/img/header.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
      

    }
  },

  plugins: [],
}

