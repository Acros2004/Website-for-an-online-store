<template>
    <div class="root rew" id="About">

        <div class="wrapper Rewiews">
            <div class="left">
                <div class="left_TopText">{{left_TopText}}</div>
                <div class="left_MiddleText">{{left_MiddleText}}</div>
                <div class="left_bottom">
                    <div class="left_bottom_left">
                        <div class="left_bottom_left_text">{{left_bottom_left_text}}</div>
                        <div class="left_bottom_left_stars">
                            <img :src="stars">
                        </div>
                    </div>
                    <div class="left_bottom_right">
                        <div>
                            <img :src="LeftButton">
                        </div>
                        <div>
                            <img :src="RightButton">
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <img class="right_man" :src="right_man">
                <img class="right_anderman" :src="right_anderman">
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
    props:['allForRewiews'],
    name: 'Rewiews',
    data()  {
      return  {
        stars: this.allForRewiews.allSrc.stars,
        LeftButton: this.allForRewiews.allSrc.LeftButton,
        RightButton:this.allForRewiews.allSrc.RightButton,
        right_man:this.allForRewiews.allSrc.right_man,
        right_anderman:this.allForRewiews.allSrc.right_anderman,

        left_TopText:this.allForRewiews.allText.left_TopText,
        left_MiddleText:this.allForRewiews.allText.left_MiddleText,
        left_bottom_left_text:this.allForRewiews.allText.left_bottom_left_text 
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
    .root.rew{
        align-items: center;
        background-color: white;
    }
    .wrapper.Rewiews{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 112px;
    }

    .left{
        display: flex;
        flex-direction: column;

        gap: 30px;

        justify-content: space-between;
    }

    .left_TopText{
        width: 700px;

        font-family: Rosario;
        font-size: 70px;
        font-weight: 700;
        line-height: 90px;
        letter-spacing: 0em;
        text-align: left;
        color: #222222;
    }

    .left_MiddleText{
        width: 600px;

        font-family: DM Sans;
font-size: 18px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

    }



    .left_bottom{
        display: flex;
        gap: 174px;
    }

    .left_bottom_left_text{
        font-family: DM Sans;
font-size: 30px;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
text-align: left;

color:#222222;
    }

    .left_bottom_right{
        display: flex;
        gap: 26px;
    }

    .right{
        position: relative;
        width: 500px;
        height: 500px;
    }

    .right_anderman{
        position: absolute;
        top: 350px;
        right: 250px;
    }

</style>