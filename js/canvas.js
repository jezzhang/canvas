
// find canvas element
var canvas = document.querySelector("#myCanvas");
var picker = document.querySelector("#picker");
// create drawing object, specifically 2d
var ctx = canvas.getContext("2d");
//initialize starting color
var color = 'black';
// set up responsive dimensions of canvas element
canvas.width = (0.8 * window.innerWidth);
canvas.height = (0.8* window.innerHeight);

var drawing = true;

function draw(posX, posY){
  console.log("I'm gonna draw");
  if (drawing == true) {
    ctx.fillStyle = color;
    ctx.beginPath();
    //arc(x-coordinate, y-coordinate, radius, starting angle, ending angle)
    ctx.arc(posX, posY, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

myCanvas.addEventListener("mousemove", function (e) {
  console.log(e.x);
  console.log(e.y);
  draw(e.x, e.y);

})

window.addEventListener("keydown", function(e) {
  console.log(e);

  // if r key clicked
  if (e.keyCode == 82) {
    color = "red";
  }
  // if y key clicked
  if (e.keyCode == 89) {
    color = "yellow";
  }
  // if g key clicked
  if (e.keyCode == 71) {
    color = "green";
  }
  // if b key clicked
  if (e.keyCode == 66) {
    color = "blue";
  }
  // if space bar clicked
  if (e.keyCode == 32) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  // if up arrow key clicked
  if(e.keyCode == 38) {
    drawing = false;
  }
  // if down arrow key clicked
  if(e.keyCode == 40) {
    drawing = true;
  }
})

// change color based on picker value
picker.addEventListener("input", function() {
  color = picker.value;
})
