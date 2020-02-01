<template>
   <div class="toast">
        <div>{{message}}</div>
   </div>

</template>
<script>


export default {

  name: 'toast',
    props:{
        message:{
            type:String,
            default:''
            
            

        }


    },
    
    }

  

</script>

<style  scoped>
 
</style>