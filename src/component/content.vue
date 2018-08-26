<template>
    <div id="content">
        <!--<div class="path"></div>-->
        <div class="allContent">
            <sitebar></sitebar>
            <div class="contentBackgroundColor" >
                <div class="nameBlockShop">Aкционное предложение</div>
                <div class="sale-wrap" v-for="actionOne in actions">
                    <div class="sale-inner"
                         :style="{background: 'url('+actionOne.photo+')',
                         backgroundSize:'270px',
                         backgroundRepeat:'no-repeat',
                         backgroundPosition:'center'}">
                        <div class="sale-block">
                            <h3>{{actionOne.name}}<span>{{ actionOne.information}}</span></h3>
                            <h3><span style="color: lawngreen">{{actionOne.newPrice + '$'}}</span></h3>
                        </div>
                        <div class="action">
                            <a href="" @click="addToBasket(actionOne.name,
                            actionOne.price,
                            actionOne.newPrice,
                            actionOne.number,
                            actionOne.company,
                            actionOne.photo,
                            actionOne.information,
                            actionOne.count)">Купить</a>
                            <ion-icon name="heart" class="heartAdd" @click="addTolove(actionOne.name,
                            actionOne.price,
                            actionOne.newPrice,
                            actionOne.number,
                            actionOne.company,
                            actionOne.photo,
                            actionOne.information,
                            actionOne.count)"></ion-icon>
                        </div>
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
                actions:action
            }
        },
        methods:{
            addToBasket:function(name,price,newPrice,number,company,photo,information,count){
                event.preventDefault()
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
                method.modal()
                all.open('#modalBasket','.basketContent')

            },
            addTolove:function(name,price,newPrice,number,company,photo,information,count){
                event.preventDefault()
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
                love.push(shop)
                methodLove.modalLove()
                all.open('#modalLikes','.LikesContent')
            }
        },
        components:{
            sitebar:sitebar
        }
    }
</script>

<style>

    .contentBackgroundColor{
        background: url('phot/content.jpg');
    }
</style>