<template>
        <div id="tab-bar-itme" class="tab-bar-itme"  @click="itmeclick">

            <div v-if="!isActive"><slot name="imte-icom"></slot></div>
            <div  v-else><slot name="imte-icom1"></slot></div>

            <div :style="activeStyle"><slot name="imte-text"></slot></div>
        </div>

</template>

<script>

  export default{

    name:'TabBarItme',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red',


        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1

        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} :{


            }


        }



    },


    data(){
      return{

      }

    },
    methods:{
        itmeclick(){
              this.$router.replace(this.path)

        }


    }



  }




</script>

<style>



  .tab-bar-itme{
    flex: 1;
    align-content: center;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-itme img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  /* .color{
    color: #d4237a
  } */
</style>
