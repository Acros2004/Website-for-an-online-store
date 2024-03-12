<template>
    <div class="header_menu" id="headerId">

        <div class="wrapper phone">

        <div class="left_side">
            <div class="button_1" v-for="item in items" v-bind:key="item"><a :href=item.hr  v-on:click="TestScript">{{ item.button_1 }}</a></div>
        </div>

        <div class="middle_icon">
            <img :src="planet">
        </div>

        <div class="right_side">
            <div class="button_5 search">
                <button type="submit" class="butt" v-on:click="SearchEvent" >
                    <img :src="search" v-on:click="SearchEvent" class="search_img">
                </button>
                <input type="text" class="input" name="search" placeholder="поиск..."/>
                
            </div>
            <div class="button_6" v-on:click="EventBuy" @EventMyProduct="EventMyProduct" >
                <img :src="buy">
                <div class="secret" >{{ countItems }}</div>
            </div>
            <div class="button_7" v-on:click="RegEvent" @click="addAccount">{{button_text}}</div>
        </div>

        </div>

    </div>
</template>

<script>
import { vModelCheckbox } from 'vue';

export default{
    name: 'MyComponent',
    props: ["ForMyComponent"],
    data()  {
      return  {
        items: this.ForMyComponent.items,
        
        planet: this.ForMyComponent.icons.icon_planet,
        
        search: this.ForMyComponent.icons.icon_search,
        buy: this.ForMyComponent.icons.icon_buy,
       
        button_text: this.ForMyComponent.button_text,
        countItems:''
      }
 },
    methods:{
        EventBuy:function(){
            let box = document.querySelector('.button_6');
            let box2 = document.querySelector('.secret');
            
            box.addEventListener("click", function() {
                box2.classList.add('box_animate_4');
            });
            box.addEventListener("animationend", AnimationHandler, false);
            function AnimationHandler () {
                box2.classList.remove('box_animate_4');
            }
           
            if(MyProducts.length > 0){
                for(var product of MyProducts){
                    console.log(`Предмет:${product.name}, количество:${product.countOfProduct}\n`)
                }
                this.countItems = this.$store.state.count
            }
            else{
                this.countItems = "Пусто"
                console.log("Пусто")
            }
           
        },
        addAccount(){
            Accounts.push({
                name:'Nikita',
                secondName:'Karebo'
            })
            for(var account of Accounts){
                console.log(`Аккаунт:Имя${account.name}, Фамилия:${account.secondName}\n`)
            }
            this.$store.commit('increaseAccounts');
            console.log("Успешно "+ this.$store.state.countOfAccounts)
        }
    },
    computed:{
        TestScript: function(){
            const anchors = document.querySelectorAll('a[href*="#"]')
            for (let anchor of anchors){
                anchor.addEventListener("click",function(event){
                    event.preventDefault();
                    const blockID = anchor.getAttribute('href')
                    document.querySelector('' + blockID).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                })
            }
        },
        SearchEvent: function(){
            const butt = document.querySelector('.button_5'); 
            const butt2 = document.querySelector('.butt'); 
            const body = document.querySelector('body');
            butt2.addEventListener('click',function (e){
                e.stopPropagation();
                butt.classList.add('active');
            });
            body.addEventListener('click',function (e){
                console.log(e.target.className);
                if (e.target.className !== 'input') {
                    butt.classList.remove('active');
                }
            });
        },
        RegEvent: function(){
            let box = document.querySelector('.button_7');
            box.addEventListener("click", function() {
            box.classList.add('box_animate_3');
            });
            box.addEventListener("animationend", AnimationHandler, false);
            function AnimationHandler () {
            box.classList.remove('box_animate_3');
            }
            
        },
       
    },
    created (){
    this.emitter.on('my-event', (evt) => {
      MyProducts.push({
        name:'Бананы',
        countOfProduct:120
      })
      this.$store.commit('increase');
    })
    this.emitter.on('myProductShow', (evt) => {
        this.EventBuy()
    })
  }
}
var MyProducts = [];
var Accounts = [];
</script>

<style>
.secret{
    position: absolute;
    top: 100px;
    right: 170px;
    color: #FFFFFF;
    width: 70px;
    height: 20px;
    text-align: center;
   
}
.box_animate_4 {
  animation: 4s animateBlockBuy forwards;
}
@keyframes animateBlockBuy{
    0%{
        color: #FFFFFF;
        border-radius: 0px;
    }
    50%{
        background-color: grey;
        border-radius: 20px;
    }
    75%{
        background-color: grey;
        border-radius: 20px;
    }
    100%{
        color: #FFFFFF;
        border-radius: 0px;
    }
}
.box_animate_3 {
  animation: 2s animateColor forwards;
}
@keyframes animateColor{
    0%{
        background-color: #09A66D;
    }
    20%{
        background-color: orange;
    }
    50%{
        background-color: yellow;
    }
    75%{
        background-color: orange;
    }
    100%{
        background-color: #09A66D;
    }
}
.butt{
    background: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    appearance: none;
    z-index: 2;
    position: absolute;
    right: 3px;
}
.input{
    height: 25px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 black;
    border: none;
    font-size: 12px;
    border-radius: 22px;
    opacity: 0;
    z-index: 1;
    transition-duration: 0.5s;
    transition-property: opacity;
    visibility: hidden;
}
.search_img{
    
    cursor: pointer;
    z-index: 2;
}
.search{
    position: relative;
    
}
.button_5.active .input{
    opacity: 1;
    visibility: visible;
}

.header_menu{
    display: flex;
    justify-content: center;
}

.wrapper.phone{
    height: 149px;
    padding-top: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: space-between;
}
    .left_side{
        align-items: center;
        gap: 2em;
    }

    .button_7{
        width: 160px;
        height: 40px;
        position: relative;
        background: #09A66D;
        border-radius: 8px;
       
        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left_side{
        display: flex;
    }

    .right_side{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
    }

</style>