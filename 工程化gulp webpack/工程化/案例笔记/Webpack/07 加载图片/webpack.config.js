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
            // 匹配加载图片的加载机
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=" + 1024 * 10
            }
        ]
    },
    mode: "development"
}