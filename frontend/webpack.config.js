'use strict';

var webpack = require('webpack');

process.noDeprecation = true;
module.exports = {
    // This is the "main" file which should include all other modules
    entry: './src/main.js',
    // Where should the compiled file go?
    output: {
        // To the `dist` folder
        path: './assets',
        // With the filename `build.js` so it's dist/build.js
        filename: 'build.js'
    },
    module: {
        // Special compilation rules
        loaders: [
            {
                // Ask webpack to check: If this file ends with .js, then apply some transforms
                test: /\.js$/,
                // Transform it with babel
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        'env'
                    ]
                },
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};