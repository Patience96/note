var gulp = require("gulp");
var minify = require("gulp-minify-html");
// 定义默认任务
gulp.task("default", function() {
    gulp.src("./origin/regist.html")
    .pipe(minify()) 
    .pipe(gulp.dest("./publish"));
});