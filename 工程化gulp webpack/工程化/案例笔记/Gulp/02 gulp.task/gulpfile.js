// 引入gulp
var gulp = require("gulp");

// 定义任务 第一种，第二个参数是函数
// gulp.task("default", function() {
//     console.log("任务执行");
// });


// 定义任务 第二种，第二个参数是数组
gulp.task("default", ["a", "b", "c"]);

gulp.task("a", function() {
    console.log("a");
});
gulp.task("b", function() {
    console.log("b");
});
gulp.task("c", function() {
    console.log("c");
});
