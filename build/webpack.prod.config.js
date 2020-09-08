const PATHS = require('./globals');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')


const {
  merge
} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',


  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-templates-loader',
          options: {
            beautify: true
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CleanWebpackPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})