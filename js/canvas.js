// 1 get canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var lineWidth = 5;

var eraserEnable = false;
var using = false;
var lastPoint = {};

autoSetCanvasSize();

pen.onclick = function () {
  pen.classList.add("active");
  eraser.classList.remove("active");
  eraserEnable = false;
};
eraser.onclick = function () {
  eraser.classList.add("active");
  pen.classList.remove("active");
  eraserEnable = true;
};
clear.onclick = function () {
  context.fillStyle = "#f4b68e";
  context.beginPath();
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.closePath();
};
down.onclick = function () {
  var url = canvas.toDataURL("image/png");
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.href = url;
  a.download = "my image";
  a.click();
};
thin.onclick = function () {
  lineWidth = 5;
};
thick.onclick = function () {
  lineWidth = 10;
};

// 切换颜色
red.onclick = function () {
  this.classList.add("active");
  blue.classList.remove("active");
  green.classList.remove("active");
  context.strokeStyle = "red";
};
green.onclick = function () {
  this.classList.add("active");
  red.classList.remove("active");
  blue.classList.remove("active");
  context.strokeStyle = "green";
};
blue.onclick = function () {
  this.classList.add("active");
  red.classList.remove("active");
  green.classList.remove("active");
  context.strokeStyle = "blue";
};

if ("ontouchstart" in document.body) {
  canvas.ontouchstart = function (ev) {
    using = true;
    var x = ev.touches[0].clientX;
    var y = ev.touches[0].clientY;
    if (eraserEnable) {
      context.clearRect(x - 10, y - 10, 20, 20);
    } else {
      lastPoint = { x: x, y: y };
    }
  };
  canvas.ontouchmove = function (ev) {
    var x = ev.touches[0].clientX;
    var y = ev.touches[0].clientY;
    console.log(using);
    if (using) {
      if (eraserEnable) {
        context.clearRect(x - 10, y - 10, 20, 20);
      } else {
        var newPoint = { x: x, y: y };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    }
  };
  canvas.ontouchend = function () {
    using = false;
  };
} else {
  canvas.onmousedown = function (ev) {
    using = true;
    var x = ev.clientX;
    var y = ev.clientY;
    if (eraserEnable) {
      context.clearRect(x - 10, y - 10, 20, 20);
    } else {
      lastPoint = { x: x, y: y };
    }
  };
  canvas.onmousemove = function (ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    if (using) {
      if (eraserEnable) {
        context.clearRect(x - 10, y - 10, 20, 20);
      } else {
        var newPoint = { x: x, y: y };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    }
  };
  canvas.onmouseup = function () {
    using = false;
  };
}

function drawLine(x1, y1, x2, y2) {
  console.log(lineWidth);
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineWidth = lineWidth;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function autoSetCanvasSize() {
  setCanvasSize();
  window.onresize = function () {
    setCanvasSize();
  };
}

function setCanvasSize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}
