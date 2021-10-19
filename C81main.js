canvas = document.getElementById("My_canvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",drawCircle);
function drawCircle(e){
    color = document.getElementById("text").value;
    mousex = e.clientX-canvas.offsetLeft;
    mousey = e.clientY-canvas.offsetTop;
    Circle(mousex,mousey);
}
function Circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mousex, mousey, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function clearing(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}