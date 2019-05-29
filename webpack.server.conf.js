const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
    //指定 Node 环境，避免非 Node 环境特定 API 报错，如 document 等
    target: 'node',
    entry: {
        server: './entry-server.js'
    },
    output: {
        filename: '[name].js',
        //因为服务器是 Node，所以必须按照 commonjs 规范打包才能被服务器调用。
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ssr.html',
            filename: 'index.ssr.html',
            files: {
                js: "client.js"
            },
            excludeChunks: ['server']
        })
    ]
});
