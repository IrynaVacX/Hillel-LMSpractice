const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, 'dist'), // Directory for output files
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Processing SCSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extracting CSS into files
                    'css-loader', // Converting CSS to CommonJS
                    'sass-loader', // Compiling Sass to CSS
                ],
            },
            {
                test: /\.css$/, // Processing CSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extracting CSS into files
                    'css-loader', // Converting CSS to CommonJS
                ],
            },
            {
                test: /\.js$/, // Processing JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpiling JavaScript using Babel
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Processing image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                    'image-webpack-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Name of the output CSS file
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serving content from the 'dist' directory
        },
        compress: true, // Enabling gzip compression
        port: 3000, // Port to run the server
    },
};
