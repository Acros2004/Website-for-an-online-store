<template>
    <div class="Orders_base">
        <div class="wrapper order">
        <div class="Phones_images">
            <img :src="Phones">
        </div>
        <div class="right last">
            <div class="right_top_button">{{right_top_button}}</div>
            <div class="right_text_one">{{right_text_one}}</div>
            <div class="right_text_two">{{right_text_two}}</div>
            <div class="right_bottom">
                <div>
                    <img :src="AppStore">
                </div>
                <div>
                    <img :src="GooglePlay">
                </div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>

export default{
    name: 'Orders',
    props: ["ForOrders"],
    data()  {
      return  {
        Phones: this.ForOrders.left_side_phones,
        AppStore: this.ForOrders.AppStore,
        GooglePlay: this.ForOrders.GooglePlay,

        right_top_button: this.ForOrders.right_top_button,
        right_text_one: this.ForOrders.right_text_one,
        right_text_two: this.ForOrders.right_text_two
      }
 }
}

</script>

<style>
.wrapper.order{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 100px;

    display: flex;
        justify-content: center;
}
    .wrapper{
        padding-top: 92px;
        width: 1200px;
        position: relative;
    }
    /* *{
        font-family: DM Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #555555;
    } */

    .Orders_base{
        display: flex;
        justify-content: center;
    }

    .right.last{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        
    }

    .right_top_button{
        width: 170px;
        height: 40px;

        background: #F3FBF8;
        border-radius: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right_text_one{
        font-family: Rosario;
        font-size: 70px;
        font-weight: 700;
        line-height: 90px;
        letter-spacing: 0em;
        text-align: left;

        color: #222222;

        width: 671px;
    }

    .right_text_two{
        line-height: 30px;
        width: 600px;
    }

    .right_bottom{
        margin-top: 30px;
        display: flex;
        width: 250px;
        justify-content: space-between;
    }
    .Phones_images{
        width: 400px;
        padding-left: 5%;
    }

</style>