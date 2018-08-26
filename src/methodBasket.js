let method = {
    modal:function(){
        let basketModal = document.querySelector('#modalBasket')
        let basketContent = document.querySelector('.basketContent')
        if(basket.length <= 2) {
            basketContent.style.height = "530px"
            basketModal.style.overflowY = 'hidden'
        }else{
            console.log(basket.length)
            basketContent.style.height = "auto"
        }
        if(window.innerHeight <= 630){
            basketModal.style.overflowY = 'scroll'
        }
        if(window.innerWidth <= 500 && basket.length > 1){
            basketContent.style.height = "auto"
        }
    }
}