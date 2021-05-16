const HandlebarsPlugin = require('handlebars-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            }
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new HandlebarsPlugin({
            entry: 'index.hbs',
            output: path.join(path.resolve(__dirname, 'dist'), '[name].html'),
            data: 'data.json',
        }),
    ],
};
