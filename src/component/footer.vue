<template>
    <footer>
            <div class="footerTopColor">
                <div class="footerTop">
                    <ul>
                        <h4>Покупателю</h4>
                        <li><a href="#">как покупать?</a></li>
                        <li><a href="#">Оставить отзыв</a></li>
                        <li><a href="#">Рекомендации</a></li>
                        <li><a href="#">Программа прав потребителей</a></li>
                        <li><a href="#">правила</a></li>
                    </ul>
                    <ul>
                        <h4>Продавцу</h4>
                        <li><a href="#">Тарифы</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Конфедициальность</a></li>
                        <li><a href="#">Правила пользования</a></li>
                        <li><a href="#">Требования</a></li>
                    </ul>
                    <ul>
                        <h4>О нас</h4>
                        <li><a href="#">О Express.UA</a></li>
                        <li><a href="#">Наши отзывы</a></li>
                        <li><a href="#">Реклама</a></li>
                        <li><a href="#">Правила</a></li>
                        <li><a href="#">Обьявления</a></li>
                        <li><a href="#">Администрация</a></li>
                    </ul>
                    <ul>
                        <h4>Другие страны</h4>
                        <li><a href="#">Молдова</a></li>
                        <li><a href="#">Беларусь</a></li>
                        <li><a href="#">Польша</a></li>
                        <li><a href="#">Казахстан</a></li>
                    </ul>
                </div>
            </div>
            <div class="footerBottomColor">
                <div class="footerBottom">
                    <div class="left">&#169 Express.UA</div>
                    <ion-icon name="arrow-round-up" class="arrowTop pointer" @click="toTop"></ion-icon>
                    <div class="right" style="margin-right: 40px">
                        <ion-icon name="logo-vk" class="pointer"></ion-icon>
                        <ion-icon name="logo-facebook" class="pointer"></ion-icon>
                        <ion-icon name="logo-instagram" class="pointer"></ion-icon>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
    </footer>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            toTop:function(){
                window.scrollTo(0,0)
            }
        }
    }
</script>
