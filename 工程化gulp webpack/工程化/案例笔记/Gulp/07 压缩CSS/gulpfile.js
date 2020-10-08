var gulp = require("gulp");

var clean = require("gulp-clean-css");

// 定义默认任务
gulp.task("default", function() {
    gulp.src("./origin/bootstrap.css")
    .pipe(clean())
    .pipe(gulp.dest("./publish"));
});