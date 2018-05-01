const path = require("path")

module.exports = {
    mode: "development",
    entry: './src/app.js',
	output: {
		path: path.join(__dirname, "public"),
		filename: 'bundle.js'
	},
    module: {
        rules: [{
            test: /\.js$/,
            use: {
    			loader: 'babel-loader',
    			options: {
                    presets: ['babel-preset-env', 'react']
                }
			},
            exclude: '/node_modules/'
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
	},
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
}
