<template>
    <div>
      <div class="icon-selector" :class="{'selector-active':checkedvalue}" >
        <img src="../../../assets/img/detail/zhengque.png" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "checkbutton",
    props: {
		checkedvalue: {
		type: Boolean,
        
      }
    },
    
    methods: {
    },
    
	}
</script>

<style scoped>
  .icon-selector {
    position: absolute;
   
    
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  img{
    width: 18px;
   
    position: absolute;
    left:-2px;
    top: 2px;
  
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>