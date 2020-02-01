<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>

import Bscroll from 'better-scroll'
export default {
  name: 'scroll',
  props:{
      probetype:{
            type:Number,
            default:0
      },
      pullupload:{
          type:Boolean,
          default:false
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      },
     
  },
  data(){
      return  {
          scroll:null,
         
      }
  },
  mounted(){//周期函数/挂载完调用o
      //创建BScroll对象
      this.scroll=new Bscroll(this.$refs.wrapper,{
        click:true,
         probeType:this.probetype,
        pullUpLoad:this.pullupload
      })

      //2.监听滚动的位置
      this.scroll.on('scroll',(position) => {
         this.$emit('scroll',position)
      })
    



      //3.监听上拉事件
        this.scroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
        })
    
  },
  methods:{
      finishPullUp(){
          this.scroll.finishPullUp()
      },
      refresh(){
          // scroll是否挂载
         console.log('图片scroll刷新')
         this.scroll && this.scroll.refresh()//刷新scroll   可以重新计算 scroll可滚动高度 

      },
      getScrollY(){
            return this.scroll ? this.scroll.y : 0

      }
  }


  }

</script>

<style  scoped>
 
</style>