const webpack = require('webpack');
var shell = require('shelljs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = {
    entry: {
        build: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin('output.css', {allChunks: true})
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }
                    ],
                    fallback: 'style-loader',
                    publicPath: path.resolve(__dirname, 'dist')
                })
            },
            {
                test: /\.css$/,
                use: [{ loader: 'css-loader' }]
            }
        ]
    }
}


webpack(config, (err, stats) => {
    if (err) {
        throw err;
    }
    console.log('构建成功')
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }))
    // a、修改变量
    shell.cd('style')
    shell.ls('*.less').forEach((file) => {
        shell.sed('-i', 'temp-vars', 'vars', file)
    })
})