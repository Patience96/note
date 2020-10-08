var gulp = require("gulp");

gulp.task("default", function() {});


// 监视./origin/a.js文件 每当它发生变化的时候就发布到publish下
gulp.watch("./origin/a.js", function() {
   gulp.src("./origin/a.js")
   .pipe(gulp.dest("./publish")); 
});