// 引入gulp
var gulp = require("gulp");
var jslint = require("gulp-jslint");

// 定义默认任务
gulp.task("default", function() {
    gulp.src("./origin/jquery.js")
    .pipe(jslint())
    .pipe(jslint.reporter("default"));
});