<template>
    <div class="root footer" id="footerId">
        <div class="wrapper footer_base">
            <div class="one">
                <div class="one_icon" ><img :src="planet" ></div>
                <div class="one_text">{{ one_text }}</div>
            </div>
            <div class="two">
                <div class="two_one">{{ two_one }}</div>
                <div class="two_two">{{ two_two }}</div>
                <div class="two_three">{{ two_three }}</div>
                <div class="two_four">{{ two_four }}</div>
            </div>
            <div class="three">
                <div class="three_one">{{ three_one }}</div>
                <div class="three_two">{{ three_two }}</div>
                <div class="three_three">{{ three_three }}</div>
                <div class="three_four">{{ three_four }}</div>
            </div>
            <div class="four">
                <div class="three_one">{{ contact }}</div>
                <div class="three_two">{{ email }}</div>
                <div class="three_three">
                    <div><img :src="facebook"></div>
                    <div><img :src="twitter"></div>
                    <div><img :src="insta"></div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>

export default{
    name: 'FooterComponent',
    props: ['ForFooterComponent'],
    data()  {
      return  {
        planet: this.ForFooterComponent.one.icon,
        one_text: this.ForFooterComponent.one.text,

        two_one: this.ForFooterComponent.two.first_tekst,
        two_two: this.ForFooterComponent.two.second_tekst,
        two_three: this.ForFooterComponent.two.three_tekst,
        two_four: this.ForFooterComponent.two.four_tekst,

        three_one: this.ForFooterComponent.three.first_tekst,
        three_two: this.ForFooterComponent.three.second_tekst,
        three_three: this.ForFooterComponent.three.three_tekst,
        three_four: this.ForFooterComponent.three.four_tekst,

        contact: this.ForFooterComponent.four.first_tekst,
        email: this.ForFooterComponent.four.second_tekst,
        facebook: this.ForFooterComponent.four.first_icon,
        twitter: this.ForFooterComponent.four.second_icon,
        insta: this.ForFooterComponent.four.three_icon
      }
 }
}
</script>

<style>
    /* *{
        font-family: DM Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #555555;
    } */
   .root.footer{
    background-color: white;
   }
    .one_icon > img{
        width: 100%;
        height: 100%;
    }
    .one_icon{
        width: 60px;
        height: 60px;
       
    }
    .wrapper.footer_base{
        padding-top: 0px;
        display: flex;
        justify-content: space-between;
    }
    
    .one{
        padding-top: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
    }   
    .one_text{
        width: 20em;
    }

    .two{
        padding-top: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .two_one{
        font-size: 24px;
        color: #222222;
    }

    .three{
        padding-top: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .three_one{
        font-size: 24px;
        color: #222222;
    }
    .three_three{
        display: flex;
        justify-content: space-between;
    }

    .four{
        padding-top: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    

</style>