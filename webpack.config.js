const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './lib/index.ts',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map', // Or alternatively: `inline-source-map`
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    /** @see https://www.npmjs.com/package/ts-loader */
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        /** @see http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin */
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ]
};
