const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/main.ts', //入口文件配置
    output: {
        path: path.resolve(__dirname, '../dist'), //打包输入出文件夹
        // process.env 是node api返回的用户环境信息的对象
        filename: process.env.NODE_ENV != 'production' ? 'js/[name].js' : 'js/[name].[hash:8].js',
        // 线上发布对应的静态资源加载路径的前缀目录配置
        publicPath: process.env.__STATIC__
    },
    plugins: [
        new CleanWebpackPlugin(), //清除打包后的文件
        new HtmlWebpackPlugin({
            title: '欣悦信息化管理平台',
            template: 'index.html',
        }),
        new VueLoaderPlugin()

    ],
    module: {
        rules: [
            // babel使用runtime，避免将不需要的代码注入
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            ['import', {
                                "libraryName": "antd",
                                "style": true,   // or 'css'
                            }, 'antd']
                        ]
                    }
                }],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 指定特定的ts编译配置，为了区分脚本的ts配置
                            configFile: path.resolve(__dirname, '../tsconfig.json'),
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    publicPath: process.env.__STATIC__,
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [
                    {loader: 'file-loader', options: {name: 'fonts/[name].[hash:8].[ext]'}}//项目设置打包到dist下的fonts文件夹下
                ]
            },
            {
                test: /\.(css|scss|sass|less)$/,
                use: [
                    // 判断是否是prod环境
                    process.env.NODE_ENV === 'production' ?
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    }:'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#4608e2',
                                    'link-color': '#4608e2',
                                    'border-radius-base': '20px',
                                },
                                javascriptEnabled: true,
                            }
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js','.json'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'config': path.resolve(__dirname, '../config'),
            'pages': path.resolve(__dirname, '../src/pages'),
        }
    },
    //性能如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。
    performance: {
        hints: false
    },
};
