<template>
  <div id="category">
    <navbar class="nav-bar"><div slot="center">商品分类</div></navbar>
    <div class="mid" >

        <tabmenu :categories="categories"
                 @selectItem='selectItem'>
        </tabmenu>

        <scroll id="tabmid"  :data="[categoryData]">
          <div>
              <tabmidtop id="abcc" :subcategories="showSubcategory">
              </tabmidtop>

              <tabcontrol :titles="['综合', '新品', '销量']"
                           @tabClick="tabClick">

              </tabcontrol>
              
              <tabcontendata :categorydetail="showCategoryDetail">

              </tabcontendata>

          </div>

        </scroll>
    </div>

  </div>

</template>

<script>
  import navbar from '../../components/common/navbar/navbar'
  import tabmenu from './category/tabmenu'
  import scroll from '../../components/common/scroll/scroll'
  import tabmidtop from './category/tabmidtop'
  import tabcontrol from '../../components/content/tabcontrol/tabcontrol'
  import tabcontendata from './category/tabcontendata'

  import {POP, SELL, NEW} from "../../common/const";
  import {getCategory,getSubcategory, getCategoryDetail} from "../../network/fenlie";


  export default{
      name:"fenlie",
      components: {
      navbar,
      tabmenu,
      scroll,
      tabmidtop,
      tabcontrol,
      tabcontendata
     
    },
    data(){
      return {
        categories:[],
        categoryData: {
        },//分类子数据
         currentIndex: -1,
         currentType:POP
      }
    },
    created(){
      //1.请求数据
      this.getcategory()

    },
    computed:{
      showSubcategory(){
        if(this.currentIndex ===-1 ){
          return {}
        }else{
           
          return this.categoryData[this.currentIndex].subcategories
        }
      },
       showCategoryDetail() {
        if (this.currentIndex === -1) return []
        console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType])
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
        
      }
    },
    methods:{
      getcategory(){
        
          
         getCategory().then(res =>  {
           
           //1.获取分类数据
           this.categories = res.data.data.category.list
          //2.初始化分类子数据
            for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
           // 3.请求第一个分类的数据
          this.getsubcategories(0)
         })

        
      },

    getsubcategories(index){
      this.currentIndex =index ;
      const mailKey = this.categories[index].maitKey;
     
      getSubcategory(mailKey).then(res => {

       
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getcategoryDetail(POP)
        this.getcategoryDetail(SELL)
        this.getcategoryDetail(NEW)
      })

        },
    
    getcategoryDetail(type){
      //1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
     
      //2.发送请求，传入miniWallkey和type
      getCategoryDetail(miniWallkey,type).then(res =>{
        //3.将获取的数据保存下来
        
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })

    },
    /***
     * 事件响应相关的方法
     * 
     */
    selectItem(index){
        this.getsubcategories(index)//向getsubcategories(index)方法中传入index值
    },
    tabClick(index){
            switch (index) {
              case 0:
                this.currentType = POP
                break;
              case 1:
                this.currentType = SELL
                break;

              case 2:
                this.currentType = NEW
                break;
            }
           
        },

    }

  }
  
</script>

<style  scoped>
.nav-bar{
      background-color: var(--color-tint);
      color: aliceblue;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1;
      height: 44px;
      text-align: center;
      line-height: 44px;
      
  }
   .mid {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }
  #tabmid{
    height: 100%;
    flex: 1;
  }
</style>
