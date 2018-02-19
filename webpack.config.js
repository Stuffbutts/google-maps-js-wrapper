const webpack = require('webpack');
const path = require('path');

let config = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.js$/, use: [ 'babel-loader' ], exclude: /node_modules/ }
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'GoogleApi.js',
        library: 'GoogleApi',
        libraryTarget: 'umd'
    },
    externals: {
        google: 'google'
    },
    resolve: {
    	symlinks: false
    },
    devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: true
        }),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ]
}

module.exports = config;