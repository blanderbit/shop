<template>
    <header>
        <div class="mainHead">
            <div class="headLeft">Express.UA</div>
            <div class="headCenter">
                <form action="" class="search">
                    <input type="search"  placeholder="Найти продукцию" class="input" />
                    <input type="submit"  value="" class="submit" />
                </form>
            </div>
            <div class="headRight">
                <div class="headRightMEnu">
                    <div class="headRightList pointer" @click="openListMenu">
                        <div :title="city">
                            {{city.length <= 10?city:simvols}}
                        </div>
                        <ion-icon name="arrow-dropdown" class="arrow"></ion-icon>
                    </div>
                    <div class="containerCity" style="z-index: 1200;" @mouseleave="leaved">
                        <div class="searchCity">
                            <input type="search" v-model="search"  placeholder="Найти город" class="input" />
                        </div>
                        <hr style="width:100%;height: 1px; background: gainsboro;margin-top: -3px">
                        <div class="city">
                            <div v-for="district in filterBy(districts,search)">
                                <h4>{{district.name}}</h4>
                                <div v-for="city in filterBy(district.city,search)"
                                    class="activeCity pointer" @click="changeCity(city.name)">{{city.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="headRightIcon">
                    <ion-icon name="heart-empty" class="icon heart" @click="openLoves"></ion-icon>
                    <span :style="{opacity:loves==''||loves==null?0:1}" class="right">{{loves.length}}</span>
                    <ion-icon name="basket" class="icon basket" @click="openBasket"></ion-icon>
                    <span :style="{opacity:baskets==''||baskets==null?0:1}">{{baskets.length}}</span>
                </div>
            </div>
        </div>
        <div class="navbar">
            <navbar></navbar>
        </div>

            <ion-icon name="reorder" class="menuSitebar" @click="open"></ion-icon>

    </header>
</template>

<script>
    import nav from './navbar.vue'
    import Vue from 'vue'
    import VueFilters from 'vue2-filters'
    Vue.use(VueFilters)
    export default {
        name: 'app',
        data () {
            return {
                loves:love,
                baskets:basket,
                city:'Киев',
                districts: district,
                simvols: '',
                search:''
            }
        },
        components:{
            navbar:nav
        },
        methods:{
            openListMenu:function(){
                let elem = document.querySelector('.containerCity')
                let ion = document.querySelector('.arrow')
                let style = window.getComputedStyle(elem).display
                if(style == 'none'){
                    elem.style.display = 'block'
                    ion.style.transform = 'rotate(180deg)'
                }else{
                    elem.style.display = 'none'
                    ion.style.transform = 'rotate(0deg)'
                }
            },
            changeCity:function(name){
                this.city = name
                this.simvols = this.city.length <= 10?'':
                    this.city.substr(0,9).indexOf('-') <= 8?this.city.substr(0,7) + '...':this.city.substr(0,9)

            },
            leaved:function(){
                let elem = document.querySelector('.containerCity')
                elem.style.display = 'none'
            },
            openBasket:function(){
                all.open('#modalBasket','.basketContent')
            },
            openLoves:function () {
                all.open('#modalLikes','.LikesContent')
            },
            open:function(){
                let oneMenuSitebar = document.querySelector('#sitebar')
                let style = getComputedStyle(oneMenuSitebar).display
                let target = event.target
                if(style == 'none'){
                    oneMenuSitebar.style.display = 'block'
                    target.style.color = 'yellow'
                }else{
                    oneMenuSitebar.style.display = 'none'
                    target.style.color = 'white'
                }
            }
        },
    }
</script>

<style>

    .navbar{
        width: 100%;
        background-image: url("phot/disco.png");
        background-size: cover;
    }

    @media screen and (max-width: 1324px){
        .allContent{
            width: 1154px;
            display: flex;
            justify-content: space-between;
        }
        .contentBackgroundColor{
            width: 800px;
        }
        .product_content{
            width: auto;
        }
        .product_content > div {
            width: 260px;
        }
        .shop{
            width: 235px;
        }
        .footerTop,
        .footerBottom{
            width: auto;
        }
    }
@media screen and (max-width: 1224px){
    .allContent{
        width: 1054px;
        display: flex;
        justify-content: space-between;
    }
    .contentBackgroundColor{
        width: 700px;
    }
    .product_content{
        width: auto;
    }
    .product_content > div {
        width: 230px;
    }
    .shop{
        width: 205px;
    }
}
    @media screen and (max-width: 1124px){
        nav ,.mainHead{
            width: 1000px;
        }
        nav li{
            padding: 18px;
            margin-left: -30px;
        }
        nav li a {
            padding: 18px;
        }
        .headCenter{
            width: 350px;
        }
        .allContent{
            width: 1000px;
            display: flex;
            justify-content: space-between;
        }
        .contentBackgroundColor{
            width: 650px;
        }
    }
    @media screen and (max-width: 1024px){
        nav ,.mainHead{
            width: 900px;
        }
        nav li{
            padding: 16px;
            margin-left: -30px;
        }
        nav li a {
            padding: 16px;
        }
        .headCenter{
            width: 320px;
        }
        .allContent{
            width: 910px;
            display: flex;
            justify-content: space-between;
        }
        .contentBackgroundColor{
            width: 580px;
        }
    }
    @media screen and (max-width: 924px){
        nav ,.mainHead{
            width: 824px;
        }
        nav li{
            padding: 14px;
            margin-left: -30px;
        }
        nav li a {
            padding: 15px;
            font-size: 13px;
        }
        .headCenter{
            width: 300px;
        }
        .allContent{
            width: auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .contentBackgroundColor{
            width: 920px;margin-right: 20px;
            margin-left: 20px;
        }
        #sitebar{
            width: 300px;
            margin-left: auto;
            margin-right: auto;
        }
        .ulTwo{
            background: white;
            position: static;
            display: none;
            margin-left: 20px;
            list-style: circle;
            text-align: left;
            height: auto;
            box-shadow: none;
        }
        .ulTwo li a{
            color:red;
        }
        #sitebar > ul{
            width: 100%;
        }
        .ulThree{
            background: white;
            position: static;
            display: none;
            width:auto;
            margin-left: 20px;
            list-style: circle;
            text-align: left;
            height: auto;
            box-shadow: none;
        }
        .ulThree li a{
            color:crimson;
        }
        .menuSitebar{
            display: block;
        }
        #sitebar{
            display:none
        }
        .product_content{
            width: auto;
            flex-wrap: wrap;
        }
        .product_content > div {
            width: 200px;
        }
        .shop  {
            width: 175px;
        }
        .content_chop{
            font-size: 14px;
        }
        .basketContent{
            width: 800px;
        }
        .cost{
            width: 200px;
        }
        .buttons{
            font-size: 14px;
        }
        LikesContent{
            width: 800px;
        }
        .costLikes{
            width: 200px;
        }
        .buttonsLikes{
            font-size: 14px;
        }
    }
@media screen and (max-width: 824px){
    nav ,.mainHead{
        width: 724px;
    }
    nav li{
        padding: 14px;
        margin-left: -30px;
    }
    nav li a {
        padding: 15px;
        font-size: 12px;
    }
    .headCenter{
        width: 250px;
    }
    .headRight{
        width: 325px;
    }
    .footerTop,
    .footerBottom{
        font-size: 15px;
    }
    .order{
        font-size: 14px;
    }
    .order img{
        width: 130px;
    }
    .basketContent{
        width: 700px;
    }
    .cost{
        width: 150px;
    }
    .buttons{
        font-size: 13px;
    }.LikesContent{
        width: 700px;
    }
    .costLikes{
        width: 150px;
    }
    .buttonsLikes{
        font-size: 13px;
    }
}
@media screen and (max-width: 724px){
    nav,.mainHead{
        width: auto;
    }
    nav{
        position: relative;
    }
    nav > div{
        display: none;
        position: absolute;
        left: 0px;
        top:50px;
        z-index: 1200;
        width: 100%;
        background-image: url("phot/disco.png");
    }
    nav  li{
        float:none;
        text-align: left;
        padding: 0px;
    }
    nav  li a{
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
    }
    nav li{
        margin-left: 0px;
    }
    nav .menu{
        display: block;transition: all 1s;
    }
    nav li:nth-child(6),
    nav li:nth-child(5){
        float: none;
        margin-left:0px
    }
    nav li:nth-child(6):after{
        content: '';
        width: 0px;
        height: 0px;
    }
    .headCenter{
        width: 220px;
    }
    .mainHead{
        flex-wrap: wrap;
    }
    .headRight{
        width:300px;
    }
    .footerTop,
    .footerBottom{
        font-size: 13px;
    }
    .order{
        font-size: 10px;
    }
    .order img{
        width: 100px;
    }
    .basketContent{
        width: 600px;
    }
    .cost{
        width: 100%;
    }
    .buttons{
        font-size: 11px;
    }.orderLikes{
        font-size: 10px;
    }
    .orderLikes img{
        width: 100px;
    }
    .LikesContent{
        width: 600px;
    }
    .costLikes{
        width: 100%;
    }
    .buttonsLikes{
        font-size: 11px;
    }
}
@media screen and (max-width: 654px){
    .headCenter{
        width: 300px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .headRight .containerCity{
       left: 0px;
    }
    .footerTop,
    .footerBottom{
        flex-wrap: wrap;
        font-size: 15px;
    }
    .footerTop ul{
        width: 200px;
    }
    .order{
        font-size: 15px;
        flex-wrap: wrap;
    }
    .order img{
        width: 100px;
    }
    .basketContent{
        width: 500px;
    }
    .cost{
        width: 100%;
    }
    .buttons{
        font-size: 11px;
    } .orderLikes{
        font-size: 15px;
        flex-wrap: wrap;
    }
    .orderLikes img{
        width: 100px;
    }
    .LikesContent{
        width: 500px;
    }
    .costLikes{
        width: 100%;
    }
    .buttonsLikes{
        font-size: 11px;
    }
}
    @media screen and (max-width: 554px){
        .footerTop,
        .footerBottom{
flex-wrap: wrap;
            font-size: 15px;
        }
        .footerTop ul{
            width: 200px;
        }
        .order{
            font-size: 15px;
            flex-wrap: wrap;
        }
        .order img{
            width: 100px;
        }
        .basketContent{
            width: 400px;
        }
        .cost{
            width: 100%;
        }
        .buttons{
            font-size: 11px;
        }.orderLikes{
            font-size: 15px;
            flex-wrap: wrap;
        }
        .orderLikes img{
            width: 100px;
        }
        .LikesContent{
            width: 400px;
        }
        .costLikes{
            width: 100%;
        }
        .buttonsLikes{
            font-size: 11px;
        }
    }
    @media screen and (max-width: 424px){
        .sale-wrap{
            width: 220px;
            height: 180px;
        }
        .sale-inner{
          background-size: 200px!important;
        }
        .sale-block h3 {
            font-size: 14px;
            color: #f9f7f6;
        }
        .sale-block span {
            font-size: 10px;
        }
        .contentBackgroundColor{
            height: 300px;
        }
        .action{
            display: none;
            position: absolute;
            bottom:40px;
        }
        .action a,
        .action ion-icon{
            padding: 10px 10px;
            margin: 10px 10px;
            font-size: 10px;
        }
        .footerTop{
            flex-wrap: wrap;
            font-size: 12px;
        }

        .footerBottom{
            font-size: 10px;
        }
        .footerTop ul{
            width:150px;
            margin-left: auto;
            margin-right: auto;
        }
       .right{
           margin-right: 0px!important;
           flex-wrap: nowrap;
       }
        .order{
            font-size: 15px;
            flex-wrap: wrap;
        }
        .order img{
            width: 100px;
        }
        .basketContent{
            width: 100%;
        }
        .cost{
            width: 100%;
        }
        .buttons{
            font-size: 11px;
        }.orderLikes{
            font-size: 15px;
            flex-wrap: wrap;
        }
        .orderLikes img{
            width: 100px;
        }
        .LikesContent{
            width: 100%;
        }
        .costLikes{
            width: 100%;
        }
        .buttonsLikes{
            font-size: 11px;
        }
    }
</style>