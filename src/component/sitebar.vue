<template>
    <div id="sitebar" >
        <ul class="ulOne" @mouseleave="removeOpen('active')">
            <li v-for="arrone in arr">
                <a href="#" @mouseover="open">
                    {{arrone.list_one}}
                    <ion-icon name="arrow-dropright" v-if="arrone.lists_two == null? false:true"></ion-icon>
                </a>
                <ul class="ulTwo" v-if="arrone.lists_two == null? false:true">
                    <li v-for="arrtwo in arrone.lists_two">
                        <a href="#" @mouseover="open2">
                            {{arrtwo.name}}
                            <ion-icon name="arrow-dropright" v-if="arrtwo.list == null? false:true"></ion-icon>
                        </a>
                        <ul class="ulThree" @mouseleave="removeOpen('active2')" v-if="arrtwo.list == null? false:true">
                            <li v-for="arrthree in arrtwo.list">
                                <a href="#" >
                                    {{arrthree.name}}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                arr:rubriks,
            }
        },
        methods:{
            open:function(e){
                let children = event.target.nextElementSibling
                let active = document.querySelectorAll('.active')
                for (let i = 0; i < active.length; i++) {
                    active[i].style.display = 'none'
                }
                if(children == null){
                    let active = document.querySelectorAll('.active')
                    for (let i = 0; i < active.length; i++) {
                        active[i].style.display = 'none'
                    }
                    return
                }
                if(children.classList.contains('active')) {
                    let active2 = document.querySelectorAll('.active2')
                    for (let i = 0; i < active2.length; i++) {
                        active2[i].style.display = 'none'
                    }
                }
                children.classList.add('active')
                children.style.display = 'block'
            },
            removeOpen:function(actives){
                let active = document.querySelectorAll('.'+actives)
                for(let i = 0;i<active.length;i++){
                    active[i].style.display = 'none'
                    active[i].classList.remove(actives)
                }
            },
            open2:function(){
                let children = event.target.nextElementSibling
                if(children == null)return
                if(children.classList.contains('active2')){
                    let active = document.querySelectorAll('.active2')
                    for(let i = 0;i<active.length;i++){
                        active[i].style.display = 'none'
                    }
                }
                children.classList.add('active2')
                children.style.display = 'block'
            }
        }

    }
</script>
