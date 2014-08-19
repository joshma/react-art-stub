var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./index",
    output: {
        filename: "build.js",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ]
};
