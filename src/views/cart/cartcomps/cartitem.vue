<template>
  <div id="shopitem">
    <div class="itemselector">
        <checkbutton class="checkbutton" :checkedvalue='iteminfo.checked'  @click.native="checkbutton"></checkbutton>
    </div>
    <div class="itemimg">
      <img :src="iteminfo.img" alt="商品图片">
    </div>
    <div class="iteminfo">
      <div class="itemtitle">{{iteminfo.title}}</div>
      <div class="itemdesc">商品描述: {{iteminfo.desc}}</div>
      <div class="infobottom">
        <div class="itemprice left">¥{{iteminfo.lowNowPrice}}</div>
        <div class="Calculation">
            <div class="less ">-</div>
                <div class="itemcount">{{iteminfo.count}}</div>
            <div class="add ">+</div>
        </div>
        
      </div>
    </div>
  </div> 
</template>

<script>
  import checkbutton from './button'
  
  export default {
    name: "ShopCartItem",
    props: {
      iteminfo: Object,
      default(){
        return {}
      }
    },
    components:{
      checkbutton

        },
    methods:{
      checkbutton(){
       
        this.iteminfo.checked=!this.iteminfo.checked
       

      }
    }
   
   
  }
</script>

<style scoped>
  #shopitem {
    width: 100%;
    position: relative;
    font-size: 0;
    padding: 5px;
  
  }

  .itemselector {
    width:10%;
    height: 100%;
    float: left;
    justify-content: center;
    align-items: center;
    
  }
  .checkbutton{
    position: relative;
    top: 34px;
    left: 10px;
  }

  .itemtitle{
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    height: 20%;
	word-break:break-all;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
	overflow:hidden;
  }

  .itemimg {

    float: left;
    width:  20%;
    height: 100%;
    
   
  }

  .itemimg img {
   
    width: 90%;
    height: 90%;
    margin-left: 5%;
    margin-top: 5%;
    border-radius: 5px;
  }

  .iteminfo {
    
    width:70%;
    height: 100%;
    float: left;
    font-size: 12px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  
  }

  .itemnfo  {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
   
  }
  .itemdesc{
    margin-top: 5px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .infobottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .infobottom .itemprice {
    color: orangered;
  }
  .Calculation{
      
      width: 53px;
      height: 15px;
      position: absolute;
      right: 5px;
      bottom: 0px;
      text-align: center;
  }
  .less{
      width: 15px;
      height: 15px;
      background-color:var(--color-tint);
      float: left;
      margin-right: 2px;
  }
  .itemcount{
        width: 15px;
      height: 15px;
    
       float: left;
       margin-right: 2px;
  }
  .add{
      width: 15px;
      height: 15px;
      background-color:var(--color-tint); 
       float: left;
  }
</style>
