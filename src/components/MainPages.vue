<template>
    <div class="root">
        <div class="wrapper">
            <img class="backImage" :src="foliage"/>
            <h1 class="mainHeading">{{ heading }}</h1>
            <div class="mainText"><p>{{ text }}</p></div>
            <div class="button">
                <p>{{ buttonText }}</p>
                <div class="unionImg" v-on:click="EllipseClick" @click="emitMyEvent">
                    <img :src="ellipse" />
                    <img :src="arrow" class="MyAnimation"/>
                </div>
            </div>
            <div class="container" >
                <div class="imageDiv">
                    <img class="imageVeg" :src="image"/>
                </div>
                <div class="statistic">

                    <div class="block" v-on:mouseenter="blockEnter" v-on:mouseout="blockOut" v-for="item in items" v-bind:key="item">
                        <div class="unionImg stat" v-on:mouseenter="blockEnter">
                            <img v-bind="item.imageOne"/>
                            <img v-bind="item.imageTwo"/>
                        </div>
                        <div class="first" v-on:mouseenter="blockEnter">
                            <p>{{ item.statisticFirstHeading }}</p>
                            <p>{{ item.statisticFirstText }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['allForMain'],
    name: 'MainPages',
    data(){
        return{
            items: this.allForMain.items,
            foliage:this.allForMain.allSrcForMain.foliage,
            ellipse:this.allForMain.allSrcForMain.ellipse,
            arrow:this.allForMain.allSrcForMain.arrow,
            buttonText: this.allForMain.allTextForMain.buttonText,
            heading: this.allForMain.allTextForMain.heading,
            image: this.allForMain.allSrcForMain.image,
            text: this.allForMain.allTextForMain.text
        }
    },
    computed:{
        blockEnter:function(){
            const blocks = document.querySelectorAll(".block");
            for (let block of blocks){
                block.addEventListener('mouseenter',function (){
                block.classList.add('block-active');
            });
            }
           
        },
        blockOut:function(){
            const blocks = document.querySelectorAll(".block");
            for (let block of blocks){
                block.addEventListener('mouseout',function (){
                block.classList.remove('block-active');
            });
            }
        },
        EllipseClick:function(){
            let box = document.querySelector('.MyAnimation');
            box.addEventListener("click", function() {
            box.classList.add('box_animate_2');
            });
            box.addEventListener("animationend", AnimationHandler, false);
            function AnimationHandler () {
            box.classList.remove('box_animate_2');
            
            
            }
        }
    },
    methods:{
        emitMyEvent(){
            this.emitter.emit('my-event', {'eventContent': 'String changed'})
        }
        
    }
}

</script>
<style>
.wrapper :not(.backImage){
    z-index: 1;
}
.backImage{
    position: absolute;
    height: 408px;
    width: 550px;
    top: 0;
    left: 0;
    z-index: 0;
}
.statistic .block-active{
    background-color: grey;
    border-radius: 20px;
}
.box_animate_2 {
  animation: 2s animate_2 forwards;
}
@keyframes animate_2{
    0%{
       transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}

.block{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 20px;
    height: 100px;
    background-color: white;
    transition-duration: 0.5s;
    transition-property: background-color,border-radius;
}
.wrapper{
    padding-top: 92px;
    width: 1200px;
    position: relative;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.unionImg.stat{
    width: 54px;
    height: 54px;
}
.unionImg{
    width: 64px;
    height: 64px;
    position: relative;
}
.unionImg > img{
    height: 100%;
    width: 100%;
    position: absolute;
}
.unionImg > img:last-child{
    width: 80%;
    margin-left: 7%;
}
.first > p:first-child{
    margin: 10px 0;
    font-weight: 400;
    font-size: 48px;
}
.container{
    display: flex;
    justify-content: space-around;
}
.root{
    display: flex;
    justify-content: center;
    background-color: #F3FBF8;
    padding-bottom: 50px;
}
.mainText{
    display: flex;
    justify-content: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 40px;
}
.mainText > p{
    text-align: center;
    width: 600px;
}
.mainHeading{
    font-size: 70px;
    line-height: 90px;
    text-align: center;
    position:relative;
    margin-bottom: 20px;
}
.imageVeg{
    width: 862px;
    height: 465px;
}
</style>