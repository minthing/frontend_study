

let x = 0;
let y = 0;
let cursorItem;
let mouseX = 0;
let mouseY = 0;
let speed = 0.03;

  window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
    cursorItem = document.getElementsByClassName("cursor")[0];
    window.addEventListener("mousemove", mouseFunction, false);
      
    function mouseFunction(e){
      x = e.clientX;
      y = e.clientY;
      h1.innerHTML = "x: " + x + "y:" + y;
    }
    loop();
  }
  
    let i = 0
    function loop(){
      mouseX += (x - mouseX) * speed;
      mouseY += (y - mouseY) * speed;
      cursorItem.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";
      window.requestAnimationFrame(loop);
    }