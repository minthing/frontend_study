(()=>{
    const reflet = document.querySelector('.reflet');
    const pageElems = document.querySelectorAll('.page');
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

    function close(){
        pageElems[2].classList.remove('page_flipped');
        setTimeout(() => {
            pageElems[0].classList.remove('page_flipped');
        }, 650);
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

        let closeBtn = getTarget(e.target, 'close-btn');
        if(closeBtn){
            document.body.classList.remove('reflet-opened');
            count = 0;
            close();
        }

        let menuItemElem = getTarget(e.target, 'menu-item');
        if(menuItemElem){
            zoomin(menuItemElem);
        }

    })
})();