<template>
<div class="root second" id="AdvId">
    <div class="wrapper">
        <img class="backImage line" :src="line"/>
        <h1 class="blockHeading">{{ mainHeading }}</h1>
        <div class="blockText"><p>{{ mainText }}</p></div>
        <div class="blockContainer">
            <div class="blockAdvantages">
                <div class="getColor">
                    <div class="blockItem" v-for="item in items" v-bind:key="item" v-on:mouseenter="itemEnter" v-on:mouseout="itemOut">
                    <div class="unionImg Adv">
                        <img v-bind="item.ellipseAdvSecond" v-on:mouseenter="itemEnter"/>
                        <img v-bind="item.note" v-on:mouseenter="itemEnter"/>
                    </div>
                    <div class="ItemText" v-on:mouseenter="itemEnter">
                        <p v-on:mouseenter="itemEnter">{{ item.advFirstHeading }}</p>
                        <p v-on:mouseenter="itemEnter">{{ item.advFirstText }}</p>
                    </div>
                    </div>
                </div>
                
                
            </div>
            <div class="ItemImage">
                <img :src="courier"/>
            </div>
        </div>
    </div>
</div>
</template>



<script>
export default{
    props:['allForAdvantages'],
    name: 'AdvantagesComp',
    data(){
        return{
            items:this.allForAdvantages.items,
            mainHeading:this.allForAdvantages.allText.mainHeading,
            mainText:this.allForAdvantages.allText.mainText,
            line:this.allForAdvantages.allSrc.line,
            courier:this.allForAdvantages.allSrc.courier
        }
    },
    computed:{
        itemEnter:function(){
            const blocks = document.querySelectorAll(".blockItem");
            for (let block of blocks){
                block.addEventListener('mouseenter',function (){
                block.setAttribute('id','blockItem-active');
            });
            }
           
        },
        itemOut:function(){
            const blocks = document.querySelectorAll(".blockItem");
            for (let block of blocks){
                block.addEventListener('mouseout',function (){
                block.removeAttribute('id','blockItem-none');
            });
            }
        }
    }
}
</script>

<style>
#blockItem-active{
    background-color: burlywood;
    border-radius: 20px;
}
.blockItem:nth-child(odd){
    background-color: white;
}
.backImage.line{
    left: auto;
    right: 0;
    width: 750px;
    height: 400px;
}
.ItemImage{
    width: 600px;
    height: 600px;
    margin-top: -2%;
}
.ItemText > p:first-child{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

}
.ItemText > p:last-child{
    width: 277px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}
.unionImg.Adv{
    width: 80px;
    height: 80px;
    margin-right: 24px;

}
.unionImg.Adv > img:first-child{
    width: 100%;
    height: 100%;
}
.unionImg.Adv > img:last-child{
    width: 28px;
    height: 40px;
    margin-left: 33%;
    margin-top: 25%;
}
.root.second{
    background-color: white;
}
.blockItem{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 150px;
    background-color: #F3FBF8;
    transition-duration: 1s;
    transition-property: background-color,border-radius;
}
.blockContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 100px;
}
.blockText > p{
    width: 600px;
}
.blockText{
    line-height: 30px;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    text-align: left;
}
.blockHeading{
    font-size: 70px;
    line-height: 90px;
    text-align:left;
    position:relative;
    margin-bottom: 20px;
}
</style>