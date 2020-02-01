<template>

<van-swipe :autoplay="3000"    indicator-color ="#F45874">
  <van-swipe-item v-for="(image, index) in banners"    :key="index">
    <a :href="image.link"> <img  v-lazy="image.image" @load="imgload" /></a>
  </van-swipe-item>

</van-swipe>

</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);;



export default {
  name: 'swiper',
  props:["banners"],
    data(){
    return{
      isload:false
    }

  },
  methods:{
    imgload(){
      
      this.$emit('swiperimgload')
    
          
         
     
        

    }
    
  },

}
</script>

<style  scoped>
 img{
     max-width: 100%;
 }



</style>