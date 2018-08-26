<template>
    <div id="product">
        <div class="product_content">
            <div class="oneProduct" v-for="oneProduct in product">
                <ion-icon name="heart" class="heartAddShop" @click="addTolove(oneProduct.name,
                oneProduct.price,
                oneProduct.newPrice,
                oneProduct.number,
                oneProduct.company,
                oneProduct.photo,
                oneProduct.information,)"></ion-icon>
                <div style="width: 100%;height: 150px" :style="{background: 'url('+oneProduct.photo+')',
                backgroundSize:'200px',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'}"></div>
                <h4>{{oneProduct.name}}</h4>
                <div>{{oneProduct.price + '$'}}</div><br>
                <div style="width: 100%;" class="content_chop">
                    <div class="shop" @click="addToBasket(oneProduct.name,
                            oneProduct.price,
                            oneProduct.newPrice,
                            oneProduct.number,
                            oneProduct.company,
                            oneProduct.photo,
                            oneProduct.information,)">Купить</div><br><br>
                    <div v-if="oneProduct.number == ''|| oneProduct.number == null?false:true">
                        {{oneProduct.number == ''|| oneProduct.number == null?'':'Номер телефона:' + oneProduct.number}}
                    </div><br>
                    <div>
                        {{oneProduct.company == ''|| oneProduct.company == null?'':'Компания:' + oneProduct.company}}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import sitebar from './sitebar.vue'
    export default {
        name: 'app',
        data () {
            return {
                product:datFruits
            }
        },
        methods:{
            addToBasket:function(name,price,newPrice,number,company,photo,information){
                event.preventDefault()
                let shop= {
                    name:name,
                    photo:photo,
                    information:information,
                    price:price,
                    newPrice:newPrice,
                    number:number,
                    company:company
                }
                basket.push(shop)
                method.modal()
                all.open('#modalBasket','.basketContent')
            }
            ,addTolove:function(name,price,newPrice,number,company,photo,information){
                event.preventDefault()
                let shop= {
                    name:name,
                    photo:photo,
                    information:information,
                    price:price,
                    newPrice:newPrice,
                    number:number,
                    company:company
                }
                love.push(shop)
                methodLove.modalLove()
                all.open('#modalLikes','.LikesContent')
            },
        },
    }
</script>
