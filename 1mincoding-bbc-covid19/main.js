(()=>{

  const actions = {
    birdFlies(key){
      if(key){
      document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px`;
      }else{
         document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
      }
    },

    birdFlies2(key){
      if(key){
      document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, -${window.innerHeight * 0.7}px)`;
      }else{
         document.querySelector('[data-index="5"] .bird').style.transform = `translate(-100%)`;
      }
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

  function inactivate(action){
    currentItem.classList.remove('visible');
    if (action) {
			actions[action](false); //객체의 메서드 호출
		}
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
        inactivate(currentItem.dataset.action);
        currentItem = graphicElem[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  })
  activate();


  window.addEventListener('load', ()=>{
    setTimeout(() => scrollTo(0, 0), 100); //setTimeout 안하면 텍스트 스크롤 이벤트가 동작 안함
  })
})();
