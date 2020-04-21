
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const glob = require('glob');

const projectRoot = process.cwd();

const setMPA = () => {
  const entry = {};
  const entrtyfiles = glob.sync(path.resolve(projectRoot, './src/*/index.js'));
  const htmlwebpackplugins = [];
  entrtyfiles.map((currentValue) => {
    let pagename = currentValue.match(/src\/(.*)\/index\.js$/);
    pagename = pagename && pagename[1];
    entry[pagename] = currentValue;
    (pagename) && htmlwebpackplugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(projectRoot, `./src/${pagename}/index.html`),
        filename: `${pagename}.html`,
        chunks: [pagename],
        inject: true,
      })
    );
  });
  return {
    entry,
    htmlwebpackplugins,
  };
};

const { entry, htmlwebpackplugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
              ],
            },
          },
        ],
      }, {
        test: /.(png|.jpg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8]',
          },
        }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new OptimizeCssAssets({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
    new FriendlyErrorsWebpackPlugin(),
  ].concat(htmlwebpackplugins),
};
