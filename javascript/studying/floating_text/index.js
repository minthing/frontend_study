

let x = 0;
let y = 0;
let cursorItem;
let mouseX = 0;
let mouseY = 0;
let speed = 0.03;

  window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
    cursorItem = document.getElementsByClassName("person")[0];
    background = document.getElementsByClassName("background")[0];
    window.addEventListener("mousemove", mouseFunction, false);
      
    function mouseFunction(e){
      x = (e.clientX - window.innerWidth /2);
      y = (e.clientY - window.innerHeight/2);
      h1.innerHTML = "x: " + x + "y:" + y;
      cursorItem.style.transform = "translate(" + x + "px," + y + "px)";
    }
    loop();
  }
  
    let i = 0
    function loop(){
      mouseX += (x - mouseX) * speed; // 부드럽게 움직이게 해주는 공식!
      mouseY += (y - mouseY) * speed;
      cursorItem.style.transform = "translate(" + -(mouseX/6) + "px," + -(mouseY/6) + "px)"; //실제보다 6배 적게 움직임
      background.style.transform = "translate(" + (mouseX/6) + "px," + (mouseY/6) + "px)";
      window.requestAnimationFrame(loop); //모니터의 주사율과 맞춰서 실행 주기가 결정
    }