var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: './index.js',

  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],


  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  }
}
