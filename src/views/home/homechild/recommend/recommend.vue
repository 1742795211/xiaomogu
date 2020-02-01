<template>
    <div class="recommend">
        <div  class="recommendchild"   v-for="(item, index) in recommends"    :key="index">
            <a :href="item.link">
                <img    :src="item.image" alt="" >
                <div>{{item.title}}</div>
            </a>
        </div>

    </div>



</template>
<script>




export default {
  name: 'recommend',

  props:{
      recommends:{
        type:Array,
        default(){
            return[]
        }


      }
  },

}
</script>

<style  scoped>
.recommend{
    display: flex;

    padding-top: 10px;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 10px solid #eee;
   
  

}
img{
    max-width: 68px;
    margin-bottom: 3px;


}
.recommendchild{
    flex: 1;
    
    font-size: 12px;
    text-align: center;
}


</style>