// 当前是webpack.config.js
// webpack是一个模块化打包工具。 
// 模块化的规范？ 遵循的是CommonJS规范。因为它是一个NodeJS第三方模块。
module.exports = {
    // 入口
    entry: "./js/main.js",
    // 出口
    output: {
        path: __dirname,
        filename: "./abcd.js"
    }
}