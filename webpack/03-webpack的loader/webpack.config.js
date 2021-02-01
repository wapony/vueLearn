const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // url-loader 使用的时候 资源图片 比如图片的话，大于limit的时候 要打包该图片，会自动生成到dist目录下，所以这里要加上此属性，在前面拼接dist目录
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责帮你加载css文件
                // style-loader 只负责将样式添加到DOM中
                // 使用多个loader时，是从右向左依次加载
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                // 加载图片
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit的时候，会将图片编译成base64字符串形式
                            // 当加载的图片，大于limit的时候，会使用file-loader模块进行加载
                            limit: 13000,

                            // img是目录
                            // name是名字要用[]包括, names是个变量 用原有的名字
                            // hash值 截取8位
                            // [ext] 保留的原有的扩展名
                            name: 'img/[name].[hash:8].[ext]'
                        },
                        
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude：排除
                // include：包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    resolve: {
        // 解决vue 默认使用 runtime-only版本的问题， 指定使用vue.esm.js 这个runtime-compiler版本
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
