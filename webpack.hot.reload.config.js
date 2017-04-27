const webpack      = require('webpack');
const path         = require('path');
const autoprefixer = require('autoprefixer');
const precss       = require('precss');

const assetsDir   = path.resolve(__dirname, 'public/assets');
const vendorsDir  = path.resolve(__dirname, 'src/app/vendors');

const config = {
  devtool: '#eval-source-map', // 'eval',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: assetsDir,
    filename: 'bundle.js',
    publicPath: '/public/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    getImplicitGlobals(),
    setNodeEnv()
  ],
  postcss() {
    return [precss, autoprefixer];
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: [vendorsDir],
      include: path.join(__dirname, 'src/app')
    },  {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000@name=[name][ext]'
    }]
  }
};
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  });
}

module.exports = config;
