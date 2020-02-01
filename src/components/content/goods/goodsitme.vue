<template>
    <div class="goodsitme">
       <img   :src="showImage" alt=""  @load="imgload" @click="itemClick">
        <div  class="goodsinfo">
            <p>{{goodsitme.title}}</p>
            <span class="price">¥{{goodsitme.price}}</span>
            <span class="collect">{{goodsitme.cfav}}</span>
        </div>
    </div>

</template>
<script>


export default {

  name: 'goodsitme',
    props:{
        goodsitme:{
            type:Object,
            default(){
                return{}
            }

        }


    },
    computed:{
        showImage(){
            return    this.goodsitme.img || this.goodsitme.image ||  this.goodsitme.show.img  
        }
    },
    methods:{
         imgload(){//监听图片刷新
            if (this.goodsitme.image){
                this.$bus.$emit('detailimteingload')
               
                
                
            }else if (this.goodsitme.img){
                 this.$bus.$emit('detailimteingload')
            }
           
            else if (this.goodsitme.show.img){
                 this.$bus.$emit('homeimteingload')//发射图片更新事件  首页监听
                //.$bus  是一个空事件 在main.js  中添加原型
            }
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsitme.iid)
        }

    }

  }

</script>

<style  scoped>
 .goodsitme{
     width: 47%;
     float: left;
     margin-left: 2%;
     position: relative;
     height: 300px;
    
 }   
.goodsitme  img{
 
 height: 80%;
 width: 100%;
border-radius: 5px;

}
.goodsinfo{
    height: 40px;
    font-size: 12px;
    position: absolute;
    
    bottom: 10px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
   

}
.goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
     
}
.price{

color: var(--color-tint);
margin-right: 20px;


}
.collect{
        position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("./../../../assets/img/common/collect.svg")0 0/14px 14px;
}
</style>