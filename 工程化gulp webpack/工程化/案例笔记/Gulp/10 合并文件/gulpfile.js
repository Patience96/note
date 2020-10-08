var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
// 定义默认任务
gulp.task("default", function() {
    // 定位资源
    gulp.src("./origin/*.js")
    .pipe(concat("ickt.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./publish"));
});