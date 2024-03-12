<template>
<div class="root" id="stockId">
    <div class="wrapper stocksPage">
        <img class="backImage Bottom" :src="foliage"/>
        <div class="container conf">
            <div class="fruct">
                <img  :src="fruct"/>
            </div>
            <div>
                <p class="mainHeading Stocks">{{ StocksHeading }}</p>
                <p class="mainText">{{ StocksText }}</p>
                <div class="button Second">
                <p>{{ secondBottonText }}</p>
                <div class="unionImg ellipseMustAnimate" v-on:click="EllipseClick2" @click="emitMyEvent2">
                    <img :src="ellipse"/>
                    <img :src="arrow"/>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default{
    props:['allForStocks'],
    name: 'StocksComponent',
    data(){
        return{
            ellipse: this.allForStocks.allSrc.ellipse,
            arrow:this.allForStocks.allSrc.arrow,
            foliage:this.allForStocks.allSrc.foliage,
            secondBottonText:this.allForStocks.allText.secondBottonText,
            fruct:this.allForStocks.allSrc.fruct,
            StocksHeading:this.allForStocks.allText.StocksHeading,
            StocksText:this.allForStocks.allText.StocksText
        }
    },
    computed:{
        EllipseClick2:function(){
            let box = document.querySelector('.ellipseMustAnimate');
            box.addEventListener("click", function() {
            box.classList.add('box_animate_6');
            });
            box.addEventListener("animationend", AnimationHandler, false);
            function AnimationHandler () {
            box.classList.remove('box_animate_6');
            
            }
        }
    },
    methods:{
        emitMyEvent2(){
            this.emitter.emit('myProductShow', {'eventContent': 'String changed'})
        }
    }
}
</script>

<style>
.box_animate_6 {
  animation: 2s animateForEllipse forwards;
}
@keyframes animateForEllipse{
    0%{
       transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
.wrapper.stockPage{
    padding-bottom: 30px;
}
.backImage.Bottom{
    left: auto;
    top: auto;
    bottom: 0;
    right: 0;
    width: 320px;
    height: 280px;
}
.button.Second{
    justify-content: left;
}
.container.conf{
    gap: 50px;
}
.mainHeading.Stocks{
    width: 550px;
    text-align: left;
}
</style>
