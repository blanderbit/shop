let methodLove = {
    modalLove:function(){
        let basketModal = document.querySelector('#modalLikes')
        let basketContent = document.querySelector('.LikesContent')
        if(love.length <= 2) {
            basketContent.style.height = "530px"
            basketModal.style.overflowY = 'hidden'
        }else if(love.length > 2){
            basketContent.style.height = "auto"
        }
        if(window.innerHeight <= 630){
            basketModal.style.overflowY = 'scroll'
        }
        if(window.innerWidth <= 500 && love.length > 1){
            basketContent.style.height = "auto"
        }
    }
}