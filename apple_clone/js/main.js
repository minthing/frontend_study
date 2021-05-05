(()=>{

    let currentY = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

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

    console.log(sceneInfo);

    function setLayout(){
        for (let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
    }

    function scrollLoop(){
        prevScrollHeight = 0;
        for(let i = 0; i < currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        console.log(prevScrollHeight); // scrollHeight:화면 전체의 길이 pageYOffset:내가 스크롤한 만큼의 길이

        if(currentY > prevScrollHeight + sceneInfo[currentScene].scrollHeight){ // scrollHeight는 미리 지정되어 있음. 더한 값이 pageYOffset(currentY)과 같아지면 다음 씬으로 넘어간거임!
            currentScene += 1;
        }

        if(currentY < prevScrollHeight){
            currentScene -=1;
        }

        console.log(currentScene);
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', ()=>{
        currentY = window.pageYOffset;
        scrollLoop();
    })
    setLayout();

})();