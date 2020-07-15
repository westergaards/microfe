// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//       // require('@fullhuman/postcss-purgecss')({
//       //   content: ['./src/**/*', './public/index.html'],
//       //   defaultExtractor: (content) => content.match(/[A-Za-z0-9_:/]+/g) || []
//       // })
//   ]
// }

module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss')('./tailwind.js'), require('autoprefixer')]
}
