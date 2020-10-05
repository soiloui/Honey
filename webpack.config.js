const path = require('path');

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
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
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
