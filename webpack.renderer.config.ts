import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });
rules.push({
  test: /\.s[ac]ss$/i, // Matches Sass/SCSS files
  use: [
    'style-loader', // Injects CSS directly into the DOM (for development)
    'css-loader', // Converts CSS into CommonJS modules
    'postcss-loader', // Compiles Sass/SCSS to CSS using PostCSS plugins
  ],
});
export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css','.scss'],
  },
};
