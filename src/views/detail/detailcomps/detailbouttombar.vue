<template>
   <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="./../../../assets/img/detail/kefu.png">
        <div class="text">客服</div>
      </div>
      <div>
        <img src="./../../../assets/img/detail/dianpu.png">
        <div class="text">店铺</div>
      </div>
      <div>
         <img src="./../../../assets/img/detail/shoucang.png">
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'detailbouttombar',
 
  methods:{
      addToCart(){
            this.$emit('addtocart')
             
      }
  }
 
  
  }

</script>

<style  scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
     box-shadow: 0px 2px 4px rgba(100,100,100,.9);
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
    position: relative;
  }
 .text{
     font-size: 13px;
     border-top: 3px;
 }
  



  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #FF9402;
    color: #fff;
  }

  .bar-right .buy {
    background-color: #f69;
  }
  img{
      width: 28px;
      margin-top: 6px;
  }
  .bar-right{
      letter-spacing:2px;
  }
 
</style>