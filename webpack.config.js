const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'babel-loader',
                    'awesome-typescript-loader' // https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack#answer-38321269
                ]
            }
        ]
    }
};
