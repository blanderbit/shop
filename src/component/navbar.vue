<template>
    <nav>
        <ion-icon name="menu" class="menu" @click="open"></ion-icon>
        <div>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Магазины</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Товары для бизнеса</a></li>
            <li><a href="#">Зарегистрироваться</a></li>
            <li><a href="#">Вход</a></li>
            <div class="clear"></div>
        </div>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods:{
            open:function(){
                let elem = event.target.nextElementSibling
                let target = event.target
                let style = getComputedStyle(elem).display
                if(style == 'none'){
                    elem.style.display = 'block'
                    target.style.transform = 'rotate(90deg)'
                }else{
                    elem.style.display = 'none'
                    target.style.transform = 'rotate(0deg)'
                }
            }
        }
    }
</script>
