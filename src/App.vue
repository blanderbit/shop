<template>
  <div id="app" @resize="hendleResize($event)">
      <basket></basket>
      <headerMain></headerMain>
      <contents></contents>
      <product></product>
      <mainFooter></mainFooter>
      <love></love>
  </div>
</template>

<script>
  import header from './component/header.vue'
  import footer from './component/footer.vue'
  import content from './component/content.vue'
  import product from './component/product.vue'
  import basket from './component/basket.vue'
  import love from './component/love.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
    components:{
        headerMain:header,
        mainFooter: footer,
        contents:content,
        product:product,
        basket:basket,
        love:love
    },methods: {
        hendleResize: function () {
            let oneNavDiv = document.querySelector('nav > div')
            let oneMenuSitebar = document.querySelector('.menuSitebar')
            let oneSitebar = document.querySelector('#sitebar')

            if(window.innerWidth > 724){
                oneNavDiv.style.display = 'block'
            }else{
                oneNavDiv.style.display = 'none'
            }

            if(window.innerWidth <= 924){
                oneMenuSitebar.style.display = 'block'
                oneSitebar.style.display = 'none'
            }else{
                oneMenuSitebar.style.display = 'none'
                oneSitebar.style.display = 'block'
            }

            let basketModal = document.querySelector('#modalBasket')
            let basketContent = document.querySelector('.basketContent')
            let modalLikes = document.querySelector('#modalLikes')
            let likesContent = document.querySelector('.LikesContent')
            if(window.innerHeight <= 630){
                basketModal.style.overflowY = 'scroll'
            }
            if(window.innerWidth <= 720 && love.length > 1){
                basketContent.style.height = "auto"
            }
            if(window.innerHeight <= 630){
                modalLikes.style.overflowY = 'scroll'
            }
            if(window.innerWidth <= 720 && love.length > 1){
                likesContent.style.height = "auto"
            }
        }
    },
    mounted(){
        window.addEventListener('resize',this.hendleResize)
         let oneNavDiv = document.querySelector('nav > div')
        let oneMenuSitebar = document.querySelector('.menuSitebar')
        let oneSitebar = document.querySelector('#sitebar')
        if(window.innerWidth > 724){
            oneNavDiv.style.display = 'block'
        }else{
            oneNavDiv.style.display = 'none'
        }

        if(window.innerWidth <= 924){
            oneMenuSitebar.style.display = 'block'
            oneSitebar.style.display = 'none'
        }else{
            oneMenuSitebar.style.display = 'none'
            oneSitebar.style.display = 'block'
        }
    }
}
</script>

<style>
  body{
    padding: 0px;
    margin:0px;
      overflow-x: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

</style>
