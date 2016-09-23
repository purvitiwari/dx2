module.exports = {
  entry: "./main.js",
  output: {
      path: './',
      filename: "index.js"
  },
   module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:
        {
          presets:['react', 'es2015',  'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties']
        }
      }
    ]
  }
}
