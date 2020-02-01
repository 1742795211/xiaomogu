<template>
 <div  class="detailnarbar">


    <navbar>
        <div slot="left" class="img"  @click="backclick">
                <img src="../../../assets/img/detail/fanhui.png">
        </div>

        <div slot="center" class="title">
                <div v-for="(itme,index) in titles"  :key="index"
                class="title-itme" 
                :class="{active:index === itmeindex}"
                @click="itmeclick(index)"
                    >
                    
                {{itme}}
                </div>
        </div>

    </navbar>
    
 </div>


</template>
<script>
import navbar from '../../../components/common/navbar/navbar'

export default {

  name: 'detailnarbar',
  components:{
       navbar
  },
  data(){
      return{
          titles:['商品','参数','评论','推荐'],
          itmeindex:0
      }
  },
  methods:{
      itmeclick(index){
          this.itmeindex = index
          this.$emit('titleclick',index)
      },
      backclick(){
          this.$router.back()

      }
  }

  }

</script>

<style  scoped>
 .title{
     display: flex;
    
 }
 .title-itme{
     flex: 1;
     font-size: 14px;
 }
 .active{
     color: var(--color-tint)

 }
 .detailnarbar{
     box-shadow: 0px 2px 1px  rgba(100,100,100,.2);
    
     z-index: 9; 
     background-color: #fff;
 }

.img img{

     height: 20px;
     content: counter;
     margin-top: 12px;
     margin-left: 15px;
 }
</style>