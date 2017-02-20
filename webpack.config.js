module.exports = {
  entry: './sandbox/index.js',
  output: {
    path: __dirname + '/sandbox',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: [/node_modules/, /\/sandbox\/js\/examples\/(?!index).*\.js/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: [
              ['transform-react-jsx', {
                'pragma': 'Canvas.create'
              }]
            ]
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'reactive-canvas': __dirname + '/src'
    }
  },
  devtool: 'source-map'
}
