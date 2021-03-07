//초기세팅
let cookie;
let background;
let logo;

let x = 0;
let y = 0;
let cursorItem;
let mouseX = 0;
let mouseY = 0;
let speed = 0.009;

  window.onload = function(){
  cookie = document.getElementsByClassName("cookie")[0];
  churro = document.getElementsByClassName("wave1")[0];
  wave = document.getElementsByClassName("wave2")[0];
  logo = document.getElementsByClassName("logo")[0];
  background = document.getElementsByClassName("background")[0];
  window.addEventListener("mousemove", mouseFunction, false);
    
  function mouseFunction(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
  }
  loop();
  }
  
  function loop(){
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;
    cookie.style.transform = "translate("+ (mouseX/9) +"px," + (mouseY/9) +"px)";
    churro.style.transform = "translate("+ -(mouseX/5) +"px," + (mouseY/7) +"px)";
    wave.style.transform = "translate("+ (mouseX/5) +"px," + (mouseY/7) +"px)";
    background.style.transform = "translate("+ -(mouseX/8) +"px," + -(mouseY/8) +"px)";
    logo.style.transform = "translate3d("+ -(mouseX/2) +"px," + -(mouseY/2) +"px,0) rotate3d(0,1,0,"+ -mouseX / 50 +"deg)";
    window.requestAnimationFrame(loop); //무한루프
  }