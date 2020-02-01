<template>

<van-swipe :autoplay="3000"  class="detail-swipe"   indicator-color ="#F45874">
  <van-swipe-item v-for="(image, index) in topimages"    :key="index">
     <img  v-lazy="image" @load="imgload" />
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
  name: 'detailswiper',
  props:{
        topimages:{
            type:Array,
            default(){
                return []
            }
        }

  },
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
.detail-swipe{
  height: 250px;
  overflow: hidden;
}


</style>