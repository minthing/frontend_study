(()=>{

    let currentY = 0;

    const sceneInfo = [{
        type: 'sticky',
        heightNum:5, // 기기별로 변화에 대응하도록 heightNum * scrollHeight
        scrollHeight:0,
        objs:{
            container:document.querySelector('#scroll_section_0')
        }
    },
    {
        type: 'normal',
        heightNum:5,
        scrollHeight:0,
        objs:{
            container:document.querySelector('#scroll_section_1')
        }
    },
    {
        type: 'sticky',
        heightNum:5,
        scrollHeight:0,
        objs:{
            container:document.querySelector('#scroll_section_2')
        }
    },
    {
        type: 'sticky',
        heightNum:5,
        scrollHeight:0,
        objs:{
            container:document.querySelector('#scroll_section_3')
        }
    }];

    function setLayout(){
        for (let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
    }

    function scrollLoop(){
        console.log(currentY); // scrollHeight:화면 전체의 길이 pageYOffset:내가 스크롤한 만큼의 길이
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', ()=>{
        currentY = window.pageYOffset;
        scrollLoop();
    })
    setLayout();

})();