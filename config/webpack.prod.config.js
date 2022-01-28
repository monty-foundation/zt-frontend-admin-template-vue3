const { merge } = require("webpack-merge");
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
// js压缩
const TerserPlugin = require('terser-webpack-plugin');
// 压缩 CSS
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// css提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


var prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    // devtool: 'source-map', //是否开启map后缀快速加载css文件和js文件
    devtool: 'inline-source-map',
    optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				// 多进程
				parallel: true,
				//删除注释
				extractComments: false,
				terserOptions: {
					compress: { // 生产环境去除console
						drop_console: true,
						drop_debugger: true,
					},
				},
			}),
			new CssMinimizerPlugin()
		],
        moduleIds: 'hashed',
		// splitChunks: {
		// 	cacheGroups: {
		// 		vendor: {
		// 			test: /[\\/]node_modules[\\/]/,
		// 			name: 'vendors',
		// 			chunks: 'all',
		// 		},
		// 	},
		// }
	},
    plugins: [
        new webpack.ids.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
			filename: './css/[name].[contenthash].css',
			chunkFilename: './css/[id].[contenthash].css',
		})
    ]
});

module.exports = () => {
    console.log(`当前执行正式环境....`);
    return prodWebpackConfig;
}