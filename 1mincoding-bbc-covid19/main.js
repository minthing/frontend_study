(()=>{

  const actions = { 
    birdFlies(){
      document.querySelector('[data-index="2"] .bird').style.transform = `translate(${window.innerWidth}px`;
    }
  };
  const stepElem = document.querySelectorAll('.step');
  const graphicElem = document.querySelectorAll('.graphic-item');
  let currentItem = graphicElem[0];
  let io_index;

  const io = new IntersectionObserver((entries, observer)=>{
   io_index = entries[0].target.dataset.index * 1; // 나타나거나 사라지는거
  });

  for(let i=0; i < stepElem.length; i++){
    io.observe(stepElem[i]); //관찰대상등록
    stepElem[i].setAttribute('data-index', i);
    graphicElem[i].setAttribute('data-index', i);
    //stepElem[i].dataset.index = i
  }

  function activate(action){
   currentItem.classList.add('visible');
    if (action) {
			actions[action](true); //객체의 메서드 호출
		}
  }

  function inactivate(){
    currentItem.classList.remove('visible');
  }


  window.addEventListener('scroll', () =>{
    let step;
    let boundingRect;
    let temp = 0;
    for(let i = io_index-1; i < io_index+1; i++){
      step = stepElem[i];
      if(!step) continue;
      boundingRect = step.getBoundingClientRect();
      temp++;

      if((boundingRect.top > window.innerHeight * 0.1)&&
        (boundingRect.top < window.innerHeight * 0.8)){
        inactivate();
        currentItem = graphicElem[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  })
  activate();
})();
