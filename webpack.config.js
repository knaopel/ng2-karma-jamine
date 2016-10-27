var path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
};