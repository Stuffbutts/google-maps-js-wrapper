const webpack = require('webpack');

let config = {
    entry: './src/index',
    module: {
        rules: [
            { test: /\.js$/, use: [ 'babel-loader' ], exclude: /node_modules/ }
        ]
    },
    output: {
        library: 'GoogleApi',
        libraryTarget: 'umd'
    },
    externals: {
        google: 'google'
    },
    resolve: {
    	symlinks: false
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ]
}

module.exports = config;