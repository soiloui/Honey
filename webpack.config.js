const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build',
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			favicon: './src/assets/favicon/apple-touch-icon.png',
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
};
