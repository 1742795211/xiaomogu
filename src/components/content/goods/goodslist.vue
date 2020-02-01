<template>
    <div class="goodslist">
      
       <goodsitme v-for="(itme,index) in goods"   :goodsitme="itme" :key="index">

       </goodsitme>
        
    </div>

</template>
<script>

import goodsitme from "./goodsitme"
export default {

  name: 'goodlist',
  components:{
      goodsitme
  },
  props:{
      goods:{
          type:Array,
          default(){
              return[]
          }

      }


  }
}
</script>

<style  scoped>
    .goodslist{
      overflow: hidden;
    }

</style>