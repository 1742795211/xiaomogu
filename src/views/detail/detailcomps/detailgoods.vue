
<template>
    <div v-if="Object.keys(detailIfo).length !==0" class="base-info">
        
        <div class="goodinfo">
            <div  class="start"></div>
            <div class="goodinfo-desc" >{{detailIfo.desc}}</div>
            <div   class="end"></div>
        </div>

        <div  class="goodinfo-key">{{detailIfo.detailImage[0].key}}</div>
        
        <div>
            <img 
            v-for="(item,index) in detailIfo.detailImage[0].list" 
            :key="index"
            :src="item"
            @load="imgLoad"
            >
        </div>

    </div>


</template>
<script>


export default {

  name: 'detailgoods',
   props:{
        detailIfo:{
            type:Object,
            default(){
                return {}
            }  
        }
  },
  data(){
      return{
          counter:0,
         
      }
  },
  methods:{
      imgLoad(){//图片发生更新调用  
        this.counter +=1 
        if(this.counter === this.detailIfo.detailImage[0].list.length){   //每次调用时this.counter+1    并判断长度是否等于图片数组长度  所有 图片加载完才 this.$emit('imageLoad')
                 this.$emit('imageLoad') //发生更新就传出一个方法
        }
        
        
         
      },

 
  }
  }
  

</script>
<style  scoped>
 img {
     width: 100%;
 }
  .goodinfo{
      padding: 15px 0;
  }
  .goodinfo-desc{
    padding: 15px 0;
    font-size: 14px;

  }
  .goodinfo-key{
    margin: 10px 15px 10px 15px;
    color: #333;
    font-size: 15px;
    text-align: center;

  }
   .start,  .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .start {
    float: left;
  }

   .end {
    float: right;
  }

  .start::before,  .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

   .end::after {
    right: 0;
  }

  .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

</style>
