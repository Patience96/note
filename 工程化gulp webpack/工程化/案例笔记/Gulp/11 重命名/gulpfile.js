// 引入gulp
var gulp = require("gulp");
var rename = require("gulp-rename");
// 定义默认任务
gulp.task("default", function() {
    // 定位资源
    gulp.src("./origin/a.txt")
    // .pipe(rename("b.txt"))
    .pipe(rename({
        prefix: "ickt.",
        suffix: ".min",
        basename: "aaa",
        extname: ".js"
    }))
    .pipe(gulp.dest("./publish"));
});