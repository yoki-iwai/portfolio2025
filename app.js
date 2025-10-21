console.log("aaaa");
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var upBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
//console.log("rotateValu");
var rotateSum;

// 下ボタンの方をクリックすると動いてしまう様になっている↓改善する
upBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";

    circle.style.transform = rotateSum;
    rotateValue = rotateSum;


};
// うまく動いていない
downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";

    circle.style.transform = rotateSum;
    rotateValue = rotateSum;


};







