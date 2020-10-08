var img = require("./bd_logo1.png");
var img1 = require("./default.jpg");

// 初始化图片元素
var tupian = new Image();
tupian.src = img;
var tupian1 = new Image();
tupian1.src = img1;

document.body.appendChild(tupian);
document.body.appendChild(tupian1);