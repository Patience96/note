var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

// 定义默认任务
gulp.task("default", function () {
    // 定位资源
    gulp.src(["./origin/bd_logo1.png", "./origin/default.jpg"])
    .pipe(imagemin()) 
    .pipe(gulp.dest("./publish")); 
});