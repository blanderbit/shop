<template>
    <div id="modalLikes" class="close" @click="close">
        <div class="LikesContent">
            <div class="Likesname">Понравившийся заказов<ion-icon name="close-circle" class="close-circle" @click="close"></ion-icon></div>
            <div v-if="loves.length == 0?true:false" class="Likesname" style="border-bottom: none;color: rebeccapurple;">
                Вам ничего не нравится
            </div>
            <div class="ordersLikes">
                <div v-for="(loveone,index) in loves" class="orderLikes" :id="index + 'i'">
                    <div style="position: absolute;left:10px;font-size: 24px;letter-spacing: 2px;">{{index + 1}}.</div>
                    <img :src="loveone.photo" width="150px">
                    <div class="orderInformationLikes">
                        <h4>{{loveone.name}}</h4>
                        <div>{{loveone.number}}</div>
                        <div v-if="loveone.company == ''|| loveone.company==null?false:true">
                            {{ 'Компания:'+loveone.company}}
                        </div>
                    </div>
                    <div class="countOrderLikes">
                        <h4>Количество</h4>
                        <div class="countLikes">
                            <input type="button" value="+" @click="amount(0,100, 1,loveone.price,
                                     loveone.count,loveone.newPrice,index + 'i')"/>
                            <input class="amountLikes" type="text" value="1" />
                            <input type="button" value="-" @click="amount(0,100,-1,-loveone.price,
                                     loveone.count,loveone.newPrice,index + 'i')"/>
                        </div><br>
                        <div><div class="priceLikes" style="display: inline-block">{{loveone.price}}</div>$</div>
                    </div>
                    <div class="costLikes">
                        <h4>Заказать</h4>
                        <div style="display: inline-block">Сумма</div>
                        <span class="allpriceLikes">{{loveone.price}}</span>$
                        <div class="buttonsLikes">
                            <a href="#" class="button7 newButton7" @click.prevent="remove(index)">Убать из списка Like</a>
                            <a href="#" class="button7" @click.prevent="sendToBasket(loveone.name,
                            loveone.price,
                            loveone.newPrice,
                            loveone.number,
                            loveone.company,
                            loveone.photo,
                            loveone.information,
                            loveone.count,
                            index)">Добавить в корзину</a>
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
                loves: love.reverse()
            }
        },
        methods: {
            close:function(){
                if(event.target.classList.contains('close-circle')){
                    let target =  event.target.parentNode.parentNode.parentNode
                    all.modalClose(target)
                    return
                }
                all.modalClose(event.target)
            },amount:function(min, max, step,price,count,newPrice,index) {
                all.counts(min, max, step,price,count,newPrice,index,'.amountLikes','.priceLikes','.allpriceLikes')
            },
            remove:function(index){
                love.splice(index,1)
                methodLove.modalLove()
            },
            sendToBasket:function(name,price,newPrice,number,company,photo,information,count,index){
                let shop= {
                    name:name,
                    photo:photo,
                    information:information,
                    price:price,
                    count:count,
                    newPrice:newPrice,
                    number:number,
                    company:company
                }
                basket.push(shop)

                love.splice(index,1)
                methodLove.modalLove()
                alert('Вы успешно отправили данные в корзину')
            }
        },
        mounted(){
            methodLove.modalLove()
        },
    }
</script>

