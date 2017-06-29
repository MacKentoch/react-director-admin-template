const webpack      = require('webpack');
const path         = require('path');
const autoprefixer = require('autoprefixer');
const precss       = require('precss');

const assetsDir       = path.resolve(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const vendorsDir      = path.resolve(__dirname, 'src/app/vendors');
const srcDir          = path.resolve(__dirname, 'src/app');

const config = {
  devtool: '#eval-source-map', // VSCode debugger + source map = THUMBS UP!
  debug: true,
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'remove-flow-types',
      include: srcDir,
      exclude: [nodeModulesDir, vendorsDir]
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: [nodeModulesDir, vendorsDir]
    }, {
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
  },
  postcss() {
    return [precss, autoprefixer];
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv()
  ]
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
