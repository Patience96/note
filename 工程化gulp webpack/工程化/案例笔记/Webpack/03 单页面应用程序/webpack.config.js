console.log(__dirname);
module.exports = {
    entry: "./modules/main.js",
    output: {
        // path可以不配置 如果不配置会使用默认的值 path如果要配置 必须是绝对路径
        // path: __dirname + "/aaaaa",
        filename: "ab.js"
    }
}