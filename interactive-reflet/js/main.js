(()=>{
    const reflet = document.querySelector('.reflet');
    let count = 0;

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
            count ++;
            pageElem.classList.add('page_flipped');
        }
        if(count == 2){
            document.body.classList.add('reflet-opened');
        }
    })
})();