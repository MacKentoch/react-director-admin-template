const webpack           = require('webpack');
const path              = require('path');
const autoprefixer      = require('autoprefixer');
const precss            = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDir       = path.resolve(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const vendorsDir      = path.resolve(__dirname, 'src/app/vendors');
const srcDir          = path.resolve(__dirname, 'src/app');

const SPLIT_STYLE = true;

const config = {
  entry: {
    app: path.resolve(__dirname, 'src/app/index.js'),
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-router-redux',
      'redux-logger',
      'redux-thunk',
      'react-tap-event-plugin',
      'jquery',
      'bootstrap/dist/js/bootstrap.min.js',
      path.resolve(__dirname, 'src/app/vendors/js/jquery-ui-1.10.3.min.js'),
      path.resolve(__dirname, 'src/app/vendors/js/plugins/fullcalendar/fullcalendar.js')
    ]
  },
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
      exclude: [nodeModulesDir, vendorsDir],
      loader: 'babel'
    },  {
      test: /\.css$/,
      loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') : 'style!css!postcss'
    }, {
      test: /\.scss$/,
      loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') : 'style!css!postcss!sass'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    }
  ]},
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'app.vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    uglify()
  ],
  postcss() {
    return [precss, autoprefixer];
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
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

function uglify() {
  return new webpack.optimize.UglifyJsPlugin({
    // Don't beautify output (enable for neater output)
    beautify: false,
    // Eliminate comments
    comments: true,
    // Compression specific options
    compress: {
      warnings: false,
      // Drop `console` statements
      'drop_console': true
    },
    // Mangling specific options
    mangle: {
      // Don't mangle $
      except: ['$'],
      // Don't care about IE8
      'screw_ie8': true,
      // Don't mangle function names
      'keep_fnames': false
    }
  });
}

module.exports = config;
