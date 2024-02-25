// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
// const { generateWebpackConfig } = require('shakapacker')

// const webpackConfig = generateWebpackConfig()

// module.exports = webpackConfig

const { generateWebpackConfig } = require('shakapacker');
const { merge } = require('webpack-merge');

const customConfig = {
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};

const webpackConfig = generateWebpackConfig();
const finalConfig = merge(webpackConfig, customConfig);

module.exports = finalConfig;

