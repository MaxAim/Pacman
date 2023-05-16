const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;


let speed = 2;
ball.style.left = 0;
ball.style.top = 0;

function animate(){
  let ballX = parseInt(ball.style.left);
  let ballY = parseInt(ball.style.top);
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  if(Math.abs(distX) > 10){
    if(ballX >= mouseX){
      ball.style.left = ballX - speed + "px";
      ball.style.animationName = "chompLeft"
    }
    else{
      ball.style.left = ballX + speed  + "px";
      ball.style.animationName = "chompRight"
    }
  }
  else{
    if(ballY >= mouseY){
      ball.style.top = ballY - speed  + "px";
      ball.style.animationName = "chompUp"
    }
    else{
      ball.style.top = ballY + speed  + "px";
      ball.style.animationName = "chompDown"
    }
  }

  //requestAnimationFrame(animate);
}
setInterval(() => {
  animate()
}, 10); ;

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})