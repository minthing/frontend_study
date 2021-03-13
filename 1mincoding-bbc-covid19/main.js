(()=>{
  const stepElem = document.querySelectorAll('.step');
  const graphicElem = document.querySelectorAll('.graphic-item');
  let currentItem = graphicElem[0];
  
  for(let i=0; i < stepElem.length; i++){
    stepElem[i].setAttribute('data-index', i);
    graphicElem[i].setAttribute('data-index', i);
    //stepElem[i].dataset.index = i
  }
  
  function activate(){
   currentItem.classList.add('visible'); 
  }
  
  function inactivate(){
    currentItem.classList.remove('visible'); 
  }
  
  
  window.addEventListener('scroll', () =>{
    let step;
    let boundingRect;
    for(let i = 0; i < stepElem.length; i++){
      step = stepElem[i];
      boundingRect = step.getBoundingClientRect();
      
      if((boundingRect.top > window.innerHeight * 0.1)&&
        (boundingRect.top < window.innerHeight * 0.8)){
        inactivate();
        currentItem = graphicElem[step.dataset.index];
        activate();
      }
    }
  })
  activate();
})();