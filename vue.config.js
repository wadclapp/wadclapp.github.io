/* eslint-disable */

const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  // ... other options
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/contact',
        ],
      }),
    ],
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // sass-loader also supports a data option which allows you to share common variables among all processed files without having to explicit import them
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/styles/_import.scss";`,
      },
    },
  },
}
