<template>
  <div class="cartlist">
      
      <cartitem class="cartitem"  v-for="item in cartlist" :key="item.id" :iteminfo="item"></cartitem>
         
  </div>

</template>

<script>
   import cartitem  from  './cartitem'
    export default{
        name:'cartlist',
        props: {
		    cartlist: {
		    type: Array,
            default() {
		            return []
              }
            }
        },
        components:{
            cartitem

        },
       
        
  }

</script>

<style  scoped>
 .cartitem{
     width: 100%;
     height: 100px;
     background-color: #fff;
     border-left: solid  7px #F5F5F5; 
     border-right: solid  7px #F5F5F5; 
     border-top: solid  7px #F5F5F5; 
     
 }
</style>
