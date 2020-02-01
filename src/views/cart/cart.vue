<template>
  <div class="cart">
    <navbar class="navbar">
        <div slot="center">购物车({{length}})</div>
    </navbar>
    <scoll  class="conten"   ref="scoll">
        <!--商品列表-->
        <cartlist  :cartlist='cartlist'>

        </cartlist>
    </scoll>
    
    <!--结算-->
    <cartbar class="cartbar"></cartbar>


  </div>

</template>

<script>
    import navbar from '../../components/common/navbar/navbar'
    import  cartlist from './cartcomps/cartlist'
    import  cartbar from './cartcomps/cartbar'


    import scoll from '../../components/common/scroll/scroll'
    export default{
        name:'cart',
        components:{
          navbar,
          cartlist,
          cartbar,
          scoll
        },
     

        computed:{
          length(){
          
            return this.$store.state.caetList.length
          },
          cartlist(){
            return this.$store.state.caetList
           
          }
        },
        activated(){
          this.$refs.scoll.refresh()
        }
  }

</script>

<style  scoped>
  .cart{
    height:100vh;
    
  }
 .navbar{
      background-color: var(--color-tint);
      color: aliceblue;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1;
   
 }
 .cartbar{
    background-color:white;
     
      position: fixed;
      left: 0;
      right: 0;
      bottom: 49px;
      z-index: 1;
      height: 40px;
 }
  .conten{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #F5F5F5;
  }
</style>
