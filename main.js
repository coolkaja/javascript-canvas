var canvas = document.createElement('canvas');
canvas.id     = "Canvas";
canvas.width  = 640;
canvas.height = 640;
canvas.style.zIndex   = 8;
canvas.style.position = "absolute";
canvas.style.left = "0px"
canvas.style.top = "0px"
canvas.style.border   = "1px solid";

document.body.appendChild(canvas);

var context =  canvas.getContext("2d");

function createImageOnCanvas(imageId) {
    //canvas.style.display = "block";
    //document.getElementById("images").style.overflowY = "hidden";
    //var img = new Image(300, 300);
    //img.src = document.getElementById(imageId).src;
    //context.drawImage(img, (0), (0)); //onload....
}

function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = "#000000";
    context.fillRect(posx-2, posy-2, 4, 4);
}
window.addEventListener('mousemove', draw, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

