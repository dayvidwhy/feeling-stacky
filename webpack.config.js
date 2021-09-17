const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = (env, argv) => {
    const prod = argv.mode === "production";
    return {
        entry: {
            main: "./src/main.js",
        },
        mode: prod ? "production" : "development",
        output: {
            filename: '[name].[contenthash:8].js',
            path: path.resolve(__dirname, "dist"),
            chunkFilename: "[name].[contenthash:8].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                },
                {
                    test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name][contenthash:8].[ext]",
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name][contenthash:8].[ext]",
                        outputPath: "assets/img",
                        esModule: false,
                    },
                },
                {
                    test: /\.s?css$/,
                    use: [
                        prod ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [autoprefixer()],
                            },
                        },
                        "sass-loader"
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash:8].css",
                chunkFilename: "[name].[contenthash:8].css"
            }),
            new htmlWebpackPlugin({
                favicon: "./public/favicon.ico",
                "meta": {
                    "charset": {"charset": "utf-8"},
                    "http-equiv": {"http-equiv": "X-UA-Compatible", "content": "IE=edge"},
                    "viewport": "width=device-width, initial-scale=1",
                    "description": "I'm Feeling Stacky! When you can't be bothered searching stack overflow yourself, just enter what you want to learn about, and hope you get back the right thing.",
                    "keywords": "im, feeling, stacky",
                    "robots": "index,follow",
                    "property-og-title": {"property": "og:title", content: "I'm Feeling Stacky"},
                    "property-og-description": {"property": "og:description", content: "I'm Feeling Stacky! When you can't be bothered searching stack overflow yourself, just enter what you want to learn about, and hope you get back the right thing."},
                    "twitter:site": "dayvidwhy"
                },
                "title": "Feeling Stacky",
                "templateContent": `
                    <!DOCTYPE html>
                    <html lang="en">
                        <body>
                            <noscript>
                                <strong>We're sorry but feeling stacky doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
                            </noscript>
                            <div id="app"></div>
                        </body>
                    </html>
                `
            }),
        ],
        resolve: {
            alias: {
                vue$: "vue/dist/vue.runtime.esm.js",
                "@": path.resolve(__dirname, 'src')
            },
            extensions: ["*", ".js", ".vue", ".json"],
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        priority: -10,
                        chunks: "all",
                    },
                },
            },
        },
        devServer: {
            historyApiFallback: true,
        },
    }
};