(()=>{

    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [{
        type: 'sticky',
        heightNum:5, // 기기별로 변화에 대응하도록 heightNum * scrollHeight
        scrollHeight:0,
        objs:{
            container:document.querySelector('#scroll_section_0'),
            messageA: document.querySelector('#scroll_section_0 .main_message.one'),
            messageB: document.querySelector('#scroll_section_0 .main_message.two'),
            messageC: document.querySelector('#scroll_section_0 .main_message.three'),
            messageD: document.querySelector('#scroll_section_0 .main_message.four'),
        },
        values:{
            messageA_opacity: [0, 1]
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

    function calcValues(values, currentYOffset){

        let rv
        let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight


        rv = scrollRatio * (values[1] - values[0]) + values[0]

        return rv

    }

    function playAnimation(){
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        let currentYOffset = yOffset - prevScrollHeight;
        switch(currentScene){
            case 0:
                let messageA_opacity_in = calcValues(values.messageA_opacity, currentYOffset);
                objs.messageA.style.opacity = messageA_opacity_in;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }


    function setLayout(){
        for (let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        let totalScrollHeight = 0;
        yOffset = window.pageYOffset;
        for(let i = 0; i < sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){ // 바로 새로고침해도 인식됨
                currentScene = i
                break;
            }
        }
        document.body.setAttribute('id', `show_scene_${currentScene}`);
    }

    function scrollLoop(){
        prevScrollHeight = 0;
        for(let i = 0; i < currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        // scrollHeight:화면 전체의 길이 pageYOffset:내가 스크롤한 만큼의 길이

        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){ // scrollHeight는 미리 지정되어 있음. 더한 값이 pageYOffset(yOffset)과 같아지면 다음 씬으로 넘어간거임!
            currentScene += 1;
        }

        if(yOffset < prevScrollHeight){
            currentScene -=1;
        }
        document.body.setAttribute('id', `show_scene_${currentScene}`);

        playAnimation();
    }
   

    window.addEventListener('resize', setLayout);
    window.addEventListener('load',  setLayout);
    window.addEventListener('scroll', ()=>{
        yOffset = window.pageYOffset;
        scrollLoop();
    })

})();