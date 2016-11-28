const webpack = require('webpack');
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './dist')

module.exports = {
  context: sourcePath,
  entry: {
    js: './index.js',
    vendor: ['react', 'react-dom', 'react-router']
    // 'babel-polyfill',
  },
  devtool: 'source-map',
  output: {
    path: staticsPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // include: [path.resolve(__dirname, 'src')],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react']},
        }],
      },
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/, use: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
}
