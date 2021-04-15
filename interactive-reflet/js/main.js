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

    function zoomin(item){
        const rect = item.getBoundingClientRect(); // 해당 element의 위치 정보를 받아옴

		const dx = window.innerWidth/2 - (rect.x + rect.width/2);
		const dy = window.innerHeight/2 - (rect.y + rect.height/2);

        let angle = 0;

		switch (item.parentNode.parentNode.parentNode.dataset.page*1) {
			case 1:
				angle = -30;
				break;
			case 2:
				angle = 0;
				break;
			case 3:
				angle = 30;
				break;
		}

        console.log(item.parentNode.parentNode.parentNode.dataset.page);
        document.body.classList.add('zoom-in');
        reflet.style.transform = `translate3d(${dx}px, ${dy}px, 50vw) rotateY(${angle}deg)`;
        currentMenu = item;
        currentMenu.classList.add('current-menu');
    }

    function zoomout(){
        reflet.style.transform = `translate3d(0px, 0px, 0px)`;
        if(currentMenu){
            document.body.classList.remove('zoom-in');
            currentMenu.classList.remove('current-menu');
            currentMenu = null;
        }
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
            zoomout();
        }

        let menuItemElem = getTarget(e.target, 'menu-item');
        if(menuItemElem){
            zoomin(menuItemElem);
        }
        let backBtn = getTarget(e.target, 'back-btn');
        if(backBtn){
            zoomout();
        }

    })
})();