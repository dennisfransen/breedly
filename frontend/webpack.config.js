const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: { '^/api': '' },
        target: 'http://localhost:3000'
      }
    }
  },
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [{
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}