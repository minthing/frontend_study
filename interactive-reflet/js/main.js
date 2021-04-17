(()=>{
    const reflet = document.querySelector('.reflet');
    const pageElems = document.querySelectorAll('.page');
    const hand = document.querySelector('.hand');
    let count = 0;

    const handPosition = {x:0, y:0}; // 손 위치
    const targetPosition = {x:0, y:0}; // 마우스 위치
    let distanceX = 0;
    let distanceY = 0;

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

    function render(){
        distanceX = targetPosition.x - handPosition.x;
        distanceY = targetPosition.y - handPosition.y;
        handPosition.x = handPosition.x + distanceX*0.1;
        handPosition.y = handPosition.y + distanceY*0.1;
        hand.style.transform = `translate(${handPosition.x-60}px, ${handPosition.y+30}px)`;
        console.log("으아악 멈추지않아!");
        console.log(handPosition.x);
        requestAnimationFrame(render);
    }
    
    render();

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


    reflet.addEventListener('animationend', () => {
        reflet.style.animation = 'none'; // 애니메이션 충돌 회피
    })

    window.addEventListener('mousemove', e => {
        targetPosition.x = e.clientX - window.innerWidth*0.7; // hand의 초기 포지션 만큼 빼줌
        targetPosition.y = e.clientY -  window.innerHeight*0.7;
        console.log(targetPosition);
    })
})();