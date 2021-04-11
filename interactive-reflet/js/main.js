(()=>{
    const reflet = document.querySelector('.reflet');

    function getTarget(elem, className){
        while(!elem.classList.contains(className)){
            elem = elem.parentNode;

            if(elem.nodeName == 'BODY'){
                elem = null;
                return;
            }
        }

        return elem;
    }

    reflet.addEventListener('click', e => {
        let pageElem = getTarget(e.target, 'page');
        if(pageElem){
            pageElem.classList.add('page_flipped')
        }
    })
})();