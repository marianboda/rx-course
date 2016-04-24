module.exports = {
  entry: './index.js',
  output: {
    path: './static',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './static',
    inline: true,
    port: 3333,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://lcoalhost:3000',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

}
