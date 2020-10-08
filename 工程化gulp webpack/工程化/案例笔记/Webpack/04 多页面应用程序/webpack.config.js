// 当前的项目中有两个页面（多页面）
// index.html中有一堆逻辑代码 second.html中也有一堆逻辑代码
// 此时，需要给将index.html中所执行的代码打包成一个文件， 需要给second.html中所执行的代码打包成一个文件
// 也就是需要打包两个文件。
module.exports = {
    // 所以此时entry就不能再是一个字符串 而应该是多个字符串 
    entry: {
        // 此时key就表示打包之后的文件的名称
        // value表示入口
        "index": "./modules/index/main.js",
        "second": "./modules/second/main.js"
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    }
}