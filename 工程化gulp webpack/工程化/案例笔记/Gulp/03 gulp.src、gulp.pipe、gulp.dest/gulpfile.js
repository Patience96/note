// 引入gulp
var gulp = require("gulp");

// 定义默认任务
// gulp.task("default", function() {
//     // 第一种 单个文件路径
//     gulp.src("./origin/a.js")
//     // pipe是管道的意思，gulp执行任务时，使用的是管道流，比如一个工程化任务包含：压缩、合并、重命名这三方面
//     // pipe会建立三个管道也就是调用三次pipe方法 第一个pipe里放的是压缩任务 第二个pipe里放的是合并任务 第三个pipe里放的是重命名任务
//     // 每一个pipe的输出 作为下一个pipe的输入。
//     .pipe(gulp.dest("./publish"));
//     // 这里的执行结果是 在publish下只有被选中的a.js
// });

// gulp.task("default", function() {
//     // 第二种 数组 数组的成员还是文件路径
//     gulp.src(["./origin/a.js", "./origin/b.js"])
//     .pipe(gulp.dest("./publish"));
//     // 这里的执行结果是 在publish下有a.js和b.js
// });

// gulp.task("default", function() {
//     gulp.src("./origin/**/*.js")
//     .pipe(gulp.dest("./publish"));
//     // 这里的执行结果是 在publish下有a.js和b.js 还有js目录下的两个文件
// });