const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.02;


function animate(){
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  
  if(distX < 0 && Math.abs(distX) > Math.abs(distY)){
    ball.style.animationName = "chompLeft"
  }
  else if(distX > 0 && Math.abs(distX) > Math.abs(distY)){
    ball.style.animationName = "chompRight"
  }
  else if(distY < 0){
    ball.style.animationName = "chompUp"
  }
  else{
    ball.style.animationName = "chompDown"
  }

  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})


