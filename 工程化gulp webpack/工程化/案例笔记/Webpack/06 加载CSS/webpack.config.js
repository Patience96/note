module.exports = {
    entry: "./modules/main.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    // 配置加载机的配置项
    module: {
        // 配置加载机的规则 对应的是一个数组 每一个数组成员是一个配置对象 用于配置一个加载机
        rules: [
            {
                // test配置项 是一个正则表达式 用于匹配文件名
                test: /\.css$/,
                // 加载css文件所需的模块  
                loaders: "style-loader!css-loader"
            }
        ]
    },
    mode: "development"
}