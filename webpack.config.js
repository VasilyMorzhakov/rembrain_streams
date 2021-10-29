const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'example/index.html'),
  filename: './index.html'
})

const mode = process.env.NODE_ENV

const output = {
  filename: 'index.js',
  path: path.resolve('dist'),
  library: {
    name: 'rembrain_streams',
    type: 'umd'
  }
}
const plugins = [htmlWebpackPlugin]
const devServer = {
  port: 9000
}

const settings = {
  entry: path.join(
    __dirname,
    mode === 'development' ? 'example/index.tsx' : 'src/index.tsx'
  ),
  devtool: 'inline-source-map',
  mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      },

      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
}

if (mode === 'production') {
  settings.output = output
} else {
  settings.devServer = devServer
  settings.plugins = plugins
}

module.exports = settings
