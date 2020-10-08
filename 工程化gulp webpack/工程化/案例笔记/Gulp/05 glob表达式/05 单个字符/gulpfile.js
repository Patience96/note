// 引入gulp
var gulp = require("gulp");

// 定义任务
gulp.task("default", function() {
    // 选中所有的origin下的js文件
    gulp.src("./origin/?.js")
    .pipe(gulp.dest("./publish"));
});