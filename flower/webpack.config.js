const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackplugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const list = require("./src/data/list.json");
module.exports = {
    mode: "production",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 4000
                }
            },
            {
                test: /\.(ttf|eot|svg|woff2?)$/,
                loader: "file-loader",
                options: {
                    name: "./font/[name].[ext]"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackplugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        host: "localhost",
        hot: true,
        open: true,
        before(app) {
            app.get("/api/list", (req, res, next) => {
                res.send({
                    code: 1,
                    data: list
                })
            })
        }
    }
}