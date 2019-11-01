module.exports = {
  module: {
    rules : [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },

          preLoaders: {
            js: '/caminho/personalizado/para/carregador'
          },

          postLoaders: {
            html: 'babel-loader'
          },

          excludedPreLoaders: /(eslint-loader)/
        }
      }
    ]
  }
}