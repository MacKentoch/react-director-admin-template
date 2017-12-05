const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDir       = path.resolve(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const indexFile       = path.resolve(__dirname, 'src/app/index.js');

const SPLIT_STYLE = true;

const config = {
  devtool: '#source-map',
  entry: {
    app: [
      'babel-polyfill',
      indexFile
    ],
    vendor: [
      'prop-types',
      'react',
      'react-bootstrap',
      'react-collapse',
      'react-dom',
      'react-height',
      'react-highlight',
      'react-motion',
      'react-notification',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'react-svg-morph',
      'react-tap-event-plugin',
      'redux',
      'redux-thunk',
      'axios',
      'babel-polyfill',
      'better-react-spinkit',
      'jquery',
      'bootstrap/dist/js/bootstrap.min.js',
      'chart.js',
      'classnames',
      'history',
      'js-base64',
      'moment',
      'smoothscroll-polyfill'
    ]
  },
  output: {
    path:     assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        exclude:  [nodeModulesDir],
        loader:   'babel-loader'
      },
      {
        test: /\.css$/,
        use:  SPLIT_STYLE
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: { importLoaders: 1 }},
              'postcss-loader'
            ]
          })
          : [
            'style-loader',
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader'
          ]
      },
      {
        test: /\.scss$/,
        use:  SPLIT_STYLE
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: { importLoaders: 1 }},
              'postcss-loader',
              'sass-loader'
            ]
          })
          : [
            'style-loader',
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              publicPath: '/public/assets/',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:     'vendor',
      filename: 'app.vendor.bundle.js'
    })
  ]
};

/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $:      'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

module.exports = config;
