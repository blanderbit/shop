let all ={
    modalClose:function(target){
        let app = document.body
        let modalBasket = target
        if(modalBasket.classList.contains('close')) {
            modalBasket.style.display = 'none'
            app.style.overflowY = 'scroll'
        }
    },
    counts:function(min, max, step,price,count,newPrice,index,ob,ob2,ob3) {
        let obj = document.getElementById(index).querySelector(ob);
        if(obj.value == 0 && step == -1)return
        let obj2 = document.getElementById(index).querySelector(ob2);
        let obj3 = document.getElementById(index).querySelector(ob3);
        if (+obj.value == count && obj2.innerText == newPrice && obj3.innerText == newPrice){
            if (step == -1) {
                obj2.innerText = -1*price * +obj.value
                obj3.innerText = -1*price * +obj.value
            } else {
                obj2.innerText = price * +obj.value
                obj3.innerText = price * +obj.value
            }
        }
        let tmp = +obj.value + step;
        let tmp2 = +obj2.innerText + +price;
        if (tmp<min) tmp=min;
        if (tmp>max) tmp=max;
        obj2.style.color = 'black'
        if(tmp == count){
            tmp2 = newPrice
            obj2.style.color = 'green'
            obj3.style.color = 'green'
        }
        obj.value = tmp;
        obj2.innerText = tmp2
        obj3.innerText = tmp2
    },
    open:function(nameModal,nameContent){
        let modal = document.querySelector(nameModal)
        let app = document.body
        let content = document.querySelector(nameContent)
        app.style.overflowY = 'hidden'
        modal.style.display = 'block'
        modal.style.top = window.pageYOffset + 'px'
        modal.style.overflowY = 'scroll'
        if(nameModal == "#modalBasket"){console.log(basket.length)
            if(basket.length <= 2) {
                content.style.height = "530px"
                modal.style.overflowY = 'hidden'
            }else {
                content.style.height = "auto"
            }
            console.log('window.innerWidth <= 720 && basket.length > 1',window.innerWidth <= 720 && basket.length > 1)
            if(window.innerHeight <= 630){
                modal.style.overflowY = 'scroll'
            }

            if(window.innerWidth <= 720 && basket.length > 1){
                content.style.height = "auto"
                modal.style.overflowY = 'scroll'
            }
        }else{
            if(love.length <= 2) {
                content.style.height = "530px"
                modal.style.overflowY = 'hidden'
            }else {
                content.style.height = "auto"
            }
            if(window.innerHeight <= 630){
                modal.style.overflowY = 'scroll'
            }
            if(window.innerWidth <= 720 && love.length > 1){
                content.style.height = "auto"
                modal.style.overflowY = 'scroll'
            }
        }
    }
}