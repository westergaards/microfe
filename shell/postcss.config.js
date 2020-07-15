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
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
}
