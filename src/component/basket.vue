<template>
    <div id="modalBasket" class="close" @click="close">
        <div class="basketContent">
            <div class="basketname">Корзина Заказов <ion-icon name="close-circle" class="close-circle" @click="close"></ion-icon></div>
            <div v-if="baskets.length == 0?true:false" class="basketname" style="border-bottom: none;color: rebeccapurple;">Ваша корзина пуста</div>
            <div class="orders">
                <div v-for="(basket,index) in baskets" class="order" :id="index">
                    <div style="position: absolute;left:10px;font-size: 24px;letter-spacing: 2px;">{{index + 1}}.</div>
                    <img :src="basket.photo" width="150px">
                    <div class="orderInformation">
                        <h4>{{basket.name}}</h4>
                        <div>{{basket.number}}</div>
                        <div v-if="basket.company == ''|| basket.company==null?false:true">
                            {{ 'Компания:'+basket.company}}
                        </div>
                    </div>
                    <div class="countOrder">
                        <h4>Количество</h4>
                        <div class="count">
                            <input type="button" value="+" @click="amount(0,100, 1,basket.price,
                                     basket.count,basket.newPrice,index)"/>
                            <input class="amount" type="text" value="1"/>
                            <input type="button" value="-" @click="amount(0,100,-1,-basket.price,
                                     basket.count,basket.newPrice,index)"/>
                        </div><br>
                        <div ><div class="price" style="display: inline-block">{{basket.price}}</div>$</div>
                    </div>
                    <div class="cost">
                        <h4>Заказать</h4>
                        <div style="display: inline-block">Сумма</div><span class="allprice">{{basket.price}}</span>$
                       <div class="buttons">
                           <a href="#" class="button7 newButton7" @click.prevent="remove(index)">Убать из списка заказов</a>
                           <a href="#" class="button7" @click.prevent="sendOrder(basket.name,basket.company,index)">Оформить заказ</a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                baskets:basket.reverse()
            }
        },
        methods:{
            close:function(){
                if(event.target.classList.contains('close-circle')){
                    let target =  event.target.parentNode.parentNode.parentNode
                    all.modalClose(target)
                    return
                }
                all.modalClose(event.target)
            },amount:function(min, max, step,price,count,newPrice,index) {
                all.counts(min, max, step,price,count,newPrice,index,'.amount','.price','.allprice')
            },
            remove:function(index){
                console.log(index)
                basket.splice(index,1)
                method.modal()
            },
            sendOrder:function(name,company,index){
                let obj = document.getElementById(index).querySelector('.allprice');
                alert('Ваш заказ юыл успешно принят: '+name + ', '+ company + ', '+obj.innerText+'$' )
            }
        },
        mounted(){
//            method.modal()
        },

    }
</script>
