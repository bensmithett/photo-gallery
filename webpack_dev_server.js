const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const path = require('path')

const compiler = webpack(config)

new WebpackDevServer(compiler, {
  contentBase: path.resolve('./build'),
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    colors: true
  }
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log('Webpack dev server started at http://localhost:8080')
})
