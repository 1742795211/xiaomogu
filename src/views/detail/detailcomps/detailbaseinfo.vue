
<template>
    <div v-if="Object.keys(goods).length !==0" class="base-info">
        <div class="info-title">{{goods.title}}</div>

        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>

        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span class="sc">{{goods.columns[1]}}</span>
            <span class="yf">{{goods.sevices[goods.sevices.length-1].name}}</span>
        </div>

        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.sevices.length-1" :key="index">
                    <img :src="goods.sevices[index-1].icon">
                    <span>{{goods.sevices[index-1].name}}</span>
            </span>
        </div>


    </div>


</template>
<script>


export default {

  name: 'detailbaseinfo',
   props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
            
        }

  },
  }
  

</script>
<style  scoped>
  .base-info{
    height: 160px;
    width: 100%;
    border-bottom:  2px solid rgba(100,100,100,.2)
  }
   .info-title{
       height: 50px; 
        margin: 10px 10px 0px 10px;
  }
  .info-price{
       margin: 0px 10px 0px 10px;
       height: 40px;
      
  }

 .n-price{
      line-height: 30px;
     font-size: 22px;
     margin-right: 5px;
     color: var(--color-tint)
 }
 .o-price{
      line-height: 30px;
    font-size: 12px;
    text-decoration:line-through;
     margin-right:2px;
 }
   .discount{
     
    
      font-size: 13px;
      background-color: var(--color-tint);
      border-radius: 4px;
      color:azure;

  }
  .info-other{
      display: flex;
      padding-bottom: 4px;
       margin: 0px 10px 0px 10px;
      border-bottom:  1px solid rgba(100,100,100,.2)

  }
  .info-other span {
      flex: 1;
      font-size: 13px;
      color: #A8A8A8;
  }
  .info-other  .sc{
      text-align: center;

  }
   .info-other  .yf{
      text-align: right;

  }
  .info-service{
      display: flex;
      height: 50px;
      line-height: 50px;
       margin: 0px 10px 0px 10px;
    font-size: 13px;

  }
    .info-service-item{
        flex: 1;
    }
  .info-service-item img {
      width: 13px;
  }
  .info-service-item:nth-child(2){
    text-align: center;
  }
  .info-service-item:nth-child(3){
    text-align: center;
  }
  .info-service-item:first-child{
      text-align: left;
  }
  .info-service-item:last-child{
     text-align: right;
     overflow: hidden;
  }
</style>
