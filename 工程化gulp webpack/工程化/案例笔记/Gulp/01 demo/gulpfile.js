// 引入gulp
var gulp = require("gulp");

// 定义任务
gulp.task("default", function() {
    gulp.src("./origin/*.js")
    .pipe(gulp.dest("./publish"));
});