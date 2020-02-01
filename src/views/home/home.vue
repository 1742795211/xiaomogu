<template>
  <div id="home">
    <navbar class="home-nav">
        <div slot="center">购物街</div>
    </navbar>
     <tabcontrol v-show=" istabfixed"  class="tabcontrol" :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabcontrol1" ></tabcontrol>
    <scroll class="conten" ref="scroll"   :probetype="3"  :pullupload="true"    @scroll="contentscroll"  @pullingUp="loadmopre"  >
      <swiper  :banners="banners" @swiperimgload='swiperimgload'></swiper>
      <recommend :recommends="recommends"></recommend>
      <popularweek ></popularweek>
      <tabcontrol  class="tabcontrol-tab" :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabcontrol2" ></tabcontrol>
      <goodslist  :goods="goods[currentType].list"></goodslist>
    </scroll>
    
    <backtop @click.native="backclick"  v-show="isshowbacktop"></backtop>

  </div>
  
  


</template>



<script>

import navbar from '../../components/common/navbar/navbar'
import tabcontrol from '../../components/content/tabcontrol/tabcontrol'




import swiper from './homechild/swiper/swiper'
import popularweek from './homechild/popularweek/popularweek'
import recommend from './homechild/recommend/recommend'
import goodslist from '../../components/content/goods/goodslist'
import  scroll  from   '../../components/common/scroll/scroll'
import backtop  from '../../components/content/backTop/backtop'




import 'vant/lib/index.css'
import {getHomeMultidata,gethomGoods} from "../../network/home"


  export default{
      name:"home",

      components:{
        navbar,
        swiper,
        recommend,
        popularweek,
        tabcontrol,
        goodslist,
        scroll,
        backtop
      },

      data(){
        return{
          banners:[],
          recommends:[],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
          

          },
          currentType: 'pop',
          isshowbacktop:false,
          taboffsettop:0,
          istabfixed:false,
          saveY:0,
          position:0,
          positionA:0,

        }


      },

      created(){
        //请求多个数据
            this.getmultidata()

        //请求商品数据
            this.getgoods('pop')
            this.getgoods('new')
            this.getgoods('sell')

        

      },

      mounted(){
          // 监听itme图片加载完成
          const refresh=this.debounce( this.$refs.scroll.refresh,200)
          this.$bus.$on('homeimteingload',()=>{
          refresh()
         
        })
       
        
      },

      methods:{
        //事件监听
        debounce(fun,delay){//防抖动
        
          let timer = null 
          return function (...args){
           if (timer) 
            
           clearTimeout(timer) 
            timer = setTimeout(() => {
               
               fun.apply(this,args)
           }, delay);
          
            
          
          }
        },
        tabClick(index){
            switch (index) {
              case 0:
                this.currentType = 'pop'
                break;
              case 1:
                this.currentType = 'new'
                break;

              case 2:
                this.currentType = 'sell'
                break;
            }
            this.$refs.tabcontrol1.cuttentIndex = index;
            this.$refs.tabcontrol2.cuttentIndex = index;
        },
        backclick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
            
        },
        contentscroll(position){
              this.position= position.y
              this.isshowbacktop = (-this.position) > 1000
              this.istabfixed = (-this.position) >  this.taboffsettop
        },
        loadmopre(){
          this.getgoods(this.currentType)
        },
        //获取tabcontrol 的taboffsettop
        //所有组件都有一个属性   $el;用于获取组件中的元素

    

        swiperimgload(){
        
         this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop;
          
        },




        //网络请求
        getmultidata(){
              getHomeMultidata().then(res =>{
              
                this.banners = res.data.data.banner.list;//把拿到的数据存到rdata
                this.recommends = res.data.data.recommend.list;
          
          })

        },
         getgoods(type){
           const page = this.goods[type].page+1
            gethomGoods(type,page).then(res=>{
              this.goods[type].list.push(...res.data.data.list)//...解析数组   将素组中的数据存入goods[type].list中
              this.goods[type].page +=1//页码加一
              this.$refs.scroll.finishPullUp()
          })

         }


      },
      destroyed(){
        console.log('home destroyed')
      },
      activated(){//活跃调用


              this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
             console.log('活跃调用activated')
              
             this.$refs.scroll.refresh()
            
             
             
            
      },
      deactivated(){//不活跃调用
            this.saveY = this.$refs.scroll.getScrollY
            
            //this.saveY = -500
           
           
      },

  }
</script>

<style scoped>
 #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
    
  }
    .tabcontrol{
    position: relative;
    background-color: #fff;
    z-index:1;
  }
  .home-nav{
      background-color: var(--color-tint);
      color: aliceblue;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1;
      
  }
 
  .tabcontrol-tab{
   
    
    background-color: #fff;

  }
  .conten{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    

  }

</style>
