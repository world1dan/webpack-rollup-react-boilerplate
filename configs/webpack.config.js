const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "cheap-source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },

    resolve: { extensions: ["*", ".js", ".jsx"] },

    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "bundle.js"
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        port: 4200,
        compress: true,
        open: true
    },
    
    plugins: [new MiniCssExtractPlugin({filename: "style.css"})]
}