module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname,
    filename:"bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015'],
        },
       }
    ]
  }
};