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
  library: 'rembrain_streams',
  libraryTarget: 'umd',
  globalObject: 'this'
}
const devServer = {
  port: 9000
}

const settings = {
  entry: [
    '@babel/polyfill',
    path.join(
      __dirname,
      mode === 'development' ? 'example/index.tsx' : 'src/index.tsx'
    )
  ],
  devtool: 'inline-source-map',
  mode,
  plugins: [],
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
  externals: {
    // Use external version of React
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
}
settings.output = output
if (mode !== 'production') {
  settings.devServer = devServer
  settings.plugins.push(htmlWebpackPlugin)
}

module.exports = settings
