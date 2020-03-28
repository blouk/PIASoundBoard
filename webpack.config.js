const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(scss)$/,
                use: [{

                        loader: 'style-loader'
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }

                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000
                    }
                }]
            },


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.ejs',
            filename: 'index.html',
            chunks: ['index'],

        }),
        new CopyPlugin([{
            from: 'src/sound/',
            to: path.resolve(__dirname, 'dist/sound'),
        }, {
            from: 'src/img/',
            to: path.resolve(__dirname, 'dist/img'),
        }]),
    ],
};
