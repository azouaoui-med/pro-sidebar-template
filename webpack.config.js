const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass|less)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
  },
};
