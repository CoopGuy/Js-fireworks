let canvas;
let ctx;
let refresh;
let particleList = [];
let part = new particle(0, .5, .4, [0,0]);
const draw = () =>{
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.arc(part.location[0],part.location[1],1,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}

const update = () =>{
    part.move();
    part.aForce([0, .0098]);
}

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("page loaded");
}

document.addEventListener("click", (data) =>{
  for (var i = 0; i <= 360; i++) {
    if(i%2 == 1 || i == 0){
      particleList.push(new particle(i, .5, .4, [data.clientX, data.clientY]));
    }
  }
  //part = new particle(0, .5, .4, [data.clientX, data.clientY]);
  console.log(data.clientX + " , " + data.clientY);
});

refresh = setInterval(() =>{
  draw();
  update();
}, 10);
