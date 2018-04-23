var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function (env, options) {
    const isProduction = options.mode === 'production';

    return {
        devtool: isProduction ? 'source-map' : 'eval-source-map',

        entry: {
            'app': './src/main.jsx'
        },

        resolve: {
            extensions: ['.jsx', '.js', '.less']
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },

        devServer: {
            port: 9000,
            contentBase: 'dist/'
        },

        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader?caseSensitive=true'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: 'body'
            })
        ]
    };
};
