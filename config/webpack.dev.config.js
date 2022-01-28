const { merge } = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.config.js');
const { HotModuleReplacementPlugin, IgnorePlugin } = require('webpack');

var devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        port: 8080,
        open: true,
        compress: true,
    },
    plugins: [
        new IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HotModuleReplacementPlugin(), //热模块替换
    ]
});


module.exports = () => {
    console.log(`当前执行开发环境....`);
    return devWebpackConfig;
}