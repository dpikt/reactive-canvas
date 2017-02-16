
module.exports = {
  entry: './example/index.js',
  output: {
    path: __dirname + '/example',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
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
