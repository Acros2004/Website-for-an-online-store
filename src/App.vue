<script>
import MainPages from './components/MainPages.vue';
import AdvantagesComp from './components/AdvantagesComp.vue' 
import StocksComponent from './components/StocksComponent.vue';
import MyComponent from './components/MyComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import Rewiews from './components/Rewiews.vue';
import Orders from './components/Orders.vue'
import { VueElement } from 'vue';
export default{
  name: 'App',
  components:{
    MyComponent,
    MainPages,
    AdvantagesComp,
    StocksComponent,
    FooterComponent,
    Rewiews,
    Orders
  },
  data(){
    return {

      allForMain:{
        allTextForMain:{
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley...',
          heading:'Organic Fruit & Vegetables',
          buttonText: 'Order Now'
        },
        items:[
                  {imageOne:{src:"./src/components/image/EllipseStat.svg"}, imageTwo:{src:"./src/components/image/user.svg"},statisticFirstHeading:'30K',statisticFirstText:'User Order'},
                  {imageOne:{src:"./src/components/image/EllipseStat.svg"}, imageTwo:{src:"./src/components/image/Star.svg"},statisticFirstHeading:'20K',statisticFirstText:'Reviews(4.8)'},
                  {imageOne:{src:"./src/components/image/EllipseStat.svg"}, imageTwo:{src:"./src/components/image/harvest.svg"},statisticFirstHeading:'300',statisticFirstText:'items'}
              ],
        allSrcForMain:{
          foliage:"./src/components/image/foliage.png",
          image:"./src/components/image/veg.png",
          ellipse:"./src/components/image/Ellipse 133.png",
          arrow:"./src/components/image/Arrow 6.svg"
        }
      },
      allForAdvantages:{
        items:[
                {ellipseAdvSecond:{src:"./src/components/image/EllipseAdvFirst.svg"},note:{src:"./src/components/image/scuter.svg"},advFirstHeading:'Online order Service',advFirstText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {ellipseAdvSecond:{src:"./src/components/image/EllipseAdvSecond.svg"},note:{src:"./src/components/image/note.svg"},advFirstHeading:'Online order Service',advFirstText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {ellipseAdvSecond:{src:"./src/components/image/EllipseAdvFirst.svg"},note:{src:"./src/components/image/speed.svg"},advFirstHeading:'Online order Service',advFirstText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            ],
        allText:{
          mainHeading:'Why We Aer The Best?',
          mainText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley...'
        },
        allSrc:{
          courier:'./src/components/image/Сourier.svg',
          line:'./src/components/image/line.png'
        }
      },
      allForStocks:{
        allText:{
          secondBottonText:'Explor Now',
          StocksHeading:'Explor Our Special Items',
          StocksText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer...'
        },
        allSrc:{
          ellipse:'./src/components/image/Ellipse 133.png',
          arrow:'./src/components/image/Arrow 6.svg',
          fruct:'./src/components/image/fruct.svg',
          foliage:'./src/components/image/foliage.png'
        }
      },
      allForRewiews:{
        allText:{
          left_TopText:'What Our Customers About Us saying',
          left_MiddleText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis',
          left_bottom_left_text:'Ahmed Hridoy'
        },
        allSrc:{
          stars:'./src/components/image/Stars.svg',
          LeftButton:'./src/components/image/LeftButton.svg',
          RightButton:'./src/components/image/RightButton.svg',
          right_man:'./src/components/image/ManIcon.svg',
          right_anderman:'./src/components/image/AnderManIcon.svg'
        }
      },
      //////
      ForMyComponent:{
        items: [
            {button_1:"About Us",hr:"#About"},
            {button_1:"Service",hr:"#AdvId"},
            {button_1:"Menu",hr:"#stockId"},
            {button_1:"Contact",hr:"#footerId"},
            {button_1:"Regestar Now",hr:"#headerId"},
        ],

      icons:{
        icon_planet:"./src/components/image/planet-earth.svg",
        icon_search:"./src/components/image/Search.svg",
        icon_buy:"./src/components/image/Buy.svg"
      }, 

      button_text:"Register Now"
        
      },


      ForFooterComponent:{
        one:{
          icon:"./src/components/image/planet-earth.svg",
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer...",
        },

        two:{
          first_tekst:"Navigation",
          second_tekst:"About Us",
          three_tekst:"Service",
          four_tekst:"Menu"
        },

        three:{
          first_tekst:"Navigation",
          second_tekst:"About Us",
          three_tekst:"Service",
          four_tekst:"Menu"
        },

        four:{
          first_tekst:"Contact Us",
          second_tekst:"Email: oyasim@email.com",

          first_icon:"./src/components/image/FacebookIcon.svg",
          second_icon:"./src/components/image/InstagramIcon.svg",
          three_icon:"./src/components/image/TwitterIcon.svg",
        }
      },
      
      ForOrders:{
        left_side_phones:"./src/components/image/PhonesGroup.svg",

        right_top_button: "Download App",
        right_text_one: "Simple Way To Order Your Organic Fruit",
        right_text_two: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...",
        AppStore: "./src/components/image/App Store.svg",
        GooglePlay: "./src/components/image/Google Play.svg"
      }
    }
  }
}


</script>

<template> 
 <div id='app'>
  <MyComponent :ForMyComponent="ForMyComponent"/>
 <MainPages :allForMain="allForMain"/>
 <AdvantagesComp :allForAdvantages="allForAdvantages"/>
 <StocksComponent :allForStocks="allForStocks"/>
 <Rewiews :allForRewiews="allForRewiews"/>
 <Orders :ForOrders="ForOrders"/> 
 <FooterComponent :ForFooterComponent="ForFooterComponent"/>

 </div>
</template>

