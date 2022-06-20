var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

var points = [];
var drag = false;
var p;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i < points.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(points[i].anchorPoint.x, points[i].anchorPoint.y, points[i].anchorPoint.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#e36646';
    ctx.beginPath();
    ctx.arc(points[i].angleLeft.x, points[i].angleLeft.y, points[i].angleLeft.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(points[i].angleRight.x, points[i].angleRight.y, points[i].angleRight.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  drawBezier();
}

function drawBezier() {
  ctx.fillStyle = '#b3198f';
  if (points.length > 1) {
    for (i = 0; i < points.length-1; i++) {
      for (t = 0; t < 1; t+=0.01) {
        part1 = {
          x: Math.pow((1-t),3)*points[i].anchorPoint.x,
          y: Math.pow((1-t),3)*points[i].anchorPoint.y
        }
        part2 = {
          x: 3*Math.pow((1-t),2)*t*points[i].angleRight.x,
          y: 3*Math.pow((1-t),2)*t*points[i].angleRight.y
        }
        part3 = {
          x: 3*(1-t)*Math.pow(t,2)*points[i+1].angleLeft.x,
          y: 3*(1-t)*Math.pow(t,2)*points[i+1].angleLeft.y
        }
        part4 = {
          x: Math.pow(t,3)*points[i+1].anchorPoint.x,
          y: Math.pow(t,3)*points[i+1].anchorPoint.y
        }
        point1TempX = part1.x + part2.x + part3.x + part4.x;
        point1TempY = part1.y + part2.y + part3.y + part4.y;
  
        tt = t+0.01
  
        part1 = {
          x: Math.pow((1-tt),3)*points[i].anchorPoint.x,
          y: Math.pow((1-tt),3)*points[i].anchorPoint.y
        }
        part2 = {
          x: 3*Math.pow((1-tt),2)*tt*points[i].angleRight.x,
          y: 3*Math.pow((1-tt),2)*tt*points[i].angleRight.y
        }
        part3 = {
          x: 3*(1-tt)*Math.pow(tt,2)*points[i+1].angleLeft.x,
          y: 3*(1-tt)*Math.pow(tt,2)*points[i+1].angleLeft.y
        }
        part4 = {
          x: Math.pow(tt,3)*points[i+1].anchorPoint.x,
          y: Math.pow(tt,3)*points[i+1].anchorPoint.y
        }
        point2TempX = part1.x + part2.x + part3.x + part4.x;
        point2TempY = part1.y + part2.y + part3.y + part4.y;
  
  
        ctx.beginPath();
        ctx.moveTo(point1TempX, point1TempY);
        ctx.lineTo(point2TempX, point2TempY);
        ctx.stroke();
        ctx.closePath();
  
        point1TempX = point2TempX;
        point1TempY = point2TempY;
      }
    }
  }
}

pointErased = false;
ctrlPressed = false;

function init() {
  window.addEventListener('keydown', function(e) {
    if (e.code == "ControlLeft") {
      ctrlPressed = true;
    }

    if (e.code == "KeyZ" && ctrlPressed == true && pointErased == false) {
      points.pop();
      pointErased = true;
    }
    draw();
  }, false);
  window.addEventListener('keyup', function(e) {
    if (e.code == "ControlLeft") {
      ctrlPressed = false;
    }

    if (e.code == "KeyZ") {
      pointErased = false;
    }
    draw();
  }, false);

  ctx.canvas.addEventListener("mousedown", function(e) {
    for (i = 0; i < points.length; i++) {
      colidiu = points[i].colides(e.offsetX, e.offsetY);
      if (colidiu) {
        p = {
          key: i,
          value: colidiu
        }
        drag = true;
        return;
      }
    }

    points.push(new Anchor(e.offsetX, e.offsetY))    
    
    console.log(points.length)
    draw();
  });

  ctx.canvas.addEventListener("mousemove", function(e) {
    if (drag) {
      points[p.key][p.value].movePoint(e.offsetX, e.offsetY);
    }
    draw();
  });

  ctx.canvas.addEventListener("mouseup", function(e) {
    drag = false;
    draw();
  });
}

init();