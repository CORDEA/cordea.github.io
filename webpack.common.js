const HandlebarsPlugin = require('handlebars-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.join(src, 'index.js'),
    output: {
        path: dist,
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: 'index.bundle.css',
        }),
        new HandlebarsPlugin({
            entry: path.join(src, 'index.hbs'),
            output: path.join(dist, '[name].html'),
            data: path.join(src, 'data.json'),
        }),
    ],
};
