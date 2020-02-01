<template>
 <div id="detail">
    <detailnarbar id="detailnarb" @titleclick="titleclick" ref="detailnarbar"></detailnarbar>
    

    <scroll class="conten"   ref="scroll"  @scroll="contscroll"  :probetype="3">
         <detailswiper :topimages="topImages" ></detailswiper>
         <detailbaseinfo :goods="goods"></detailbaseinfo>
         <detailshop :shop='shop'></detailshop>
         <detailgoods :detailIfo="detailIfo" @imageLoad="imageLoad"></detailgoods>
         <detailparami :paraminfo="paraminfo" ref="detailparami"></detailparami>
         <detailcommentinfo :commentinfo="commentinfo" ref="commentinfo"></detailcommentinfo>
         <goodslist :goods="recommend"  ref="goodslist"></goodslist>
    </scroll>
    <detailbouttombar    @addtocart="addtocart"></detailbouttombar>
    <backtop @click.native="backclick"  v-show="isshowbacktop" ></backtop>
 </div>


</template>
<script>
import detailnarbar from './detailcomps/detailnarbar'
import {getdetail,getRecommend,Goods,Shop,DetailIfo,GoodsParam}  from '../../network/detail'
import detailswiper from './detailcomps/detailswiper'
import detailbaseinfo from './detailcomps/detailbaseinfo'
import detailshop from './detailcomps/detailshop'
import detailgoods from './detailcomps/detailgoods'
import detailparami  from './detailcomps/detailparami'
import detailcommentinfo from './detailcomps/detailcommentinfo'
import  goodsitme  from '../../components/content/goods/goodsitme'
import goodslist from  '../../components/content/goods/goodslist'
import detailbouttombar from './detailcomps/detailbouttombar'
import backtop  from '../../components/content/backTop/backtop'

import  scroll  from '../../components/common/scroll/scroll'

export default {

  name: 'detail',
  data(){
      return{
        id:null,
        topImages:[],
        goods:{},
        shop:{},
        detailIfo:{},
        paraminfo:{},
        commentinfo:{},
        recommend:[],
        themetop:[],
        currentIndex:0,
        isshowbacktop:false,

      }
  },
  components:{
    detailnarbar,
    detailswiper,
    detailbaseinfo,
    detailshop,
    scroll,
    detailgoods,
    detailparami,
    detailcommentinfo,
    goodslist,
    detailbouttombar,
    backtop
    
    

  },
  methods:{
    imageLoad(){ 
      const refresh=this.debounce( this.$refs.scroll.refresh,0)
      refresh()

      this.themetop = []
      this.themetop.push(0);
      this.themetop.push(this.$refs.detailparami.$el.offsetTop);
      this.themetop.push(this.$refs.commentinfo.$el.offsetTop);
      this.themetop.push(this.$refs.goodslist.$el.offsetTop); 



    },
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
    titleclick(index){
     
    
    this.$refs.scroll.scroll.scrollTo(0, -this.themetop[index], 100)

    },
    contscroll(position){
     
       
      //获取Y值
      const  positionY = -position.y
      this.isshowbacktop = (positionY) > 700
      let length = this.themetop.length
      for(let i=0; i<length; i++){
          
          if(this.currentIndex  !== i  &&((i <length-1 && positionY  > this.themetop[i] && positionY < this.themetop[i+1])||(i===length-1  && positionY > this.themetop[i] ))){
      
       this.currentIndex = i;
        this.$refs.detailnarbar.itmeindex= this.currentIndex
        console.log(this.currentIndex+" "+"this.currentIndex")

          }
      }

      //根据获取的y值和主题的y值对比



    },
    backclick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
            
        },
    
    addtocart(){
      //获取购物车需要展示的信息
      const  product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.lowNowPrice = this.goods.lowNowPrice
      product.desc = this.goods.des
      product.id = this.id
      product.checked =false
     
     



      //将商品添加到购物车
      this.$store.dispatch('addcart',product).then(res => {
        console.log(res)
      })
      
    }         
             
              
       
   
  },

  created(){
      //传入保存的id
     this.id = this.$route.params.id 
    //根据id获取数据
    getdetail(this.id).then(res =>{
        //获取轮播数据

        console.log(res)
        const data = res.data.result 
        this.topImages = data.itemInfo.topImages
         

         //获取商品信息  构造函数进行整合到一起
         this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

          //获取商铺信息对象
        this.shop = new Shop(data.shopInfo)

        //获取商品详细信息
        this.detailIfo = new  DetailIfo(data.detailInfo)
        
        //获取商品参数
        this.paraminfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //获取评论信息
        if(data.rate.cRate !== 0){
          
          this.commentinfo =data.rate.list[0]
         
        }

        this.$nextTick(()=>{//页面都渲染完回调   但不包含图片
              
              //this.themetop = []
              //this.themetop.push(0);
              //this.themetop.push(this.$refs.detailparami.$el.offsetTop);
              //this.themetop.push(this.$refs.commentinfo.$el.offsetTop);
              //this.themetop.push(this.$refs.goodslist.$el.offsetTop); 
        })

        
    })

    //获取recommendr  推荐页数据
    getRecommend().then(res =>{
      
      this.recommend = res.data.data.list
  })
    //this.getthemetopy = this.debounce(this.$refs.scroll.refresh,200)

  },
   mounted(){
          // 监听itme图片加载完成
          const refresh=this.debounce( this.$refs.scroll.refresh,200)
          this.$bus.$on('homeimteingload',()=>{
          refresh()
         
        })
       
        
      },
    updated(){
       



    }
  

  }

</script>

<style  scoped>
 #detail{
  
 
    z-index: 2;
   background-color: #fff;
    padding-top: 44px;
    height: 100vh;
    position: relative;
 }
  #detailnarb{
     position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 3;
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