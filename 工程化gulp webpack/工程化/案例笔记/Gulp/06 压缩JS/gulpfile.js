// 引入gulp
var gulp = require("gulp");

// 引入压缩插件
var uglify = require("gulp-uglify");

// 定义默认任务
gulp.task("default", function() {
    // 定位文件
    gulp.src("./origin/jquery.js")
    // 第一根管道 
    .pipe(uglify())
    // 第二根管道
    .pipe(gulp.dest("./publish"));
});