<template>
  <div v-if="Object.keys(commentinfo).length !==0" class="commentinfo">
      <div class="infoheader">
        <div class="headertitle">用户评价</div>
        <div class="headertitle1">
          更多
        </div>
      </div>

      <div class="info-user">
        <img :src="commentinfo.user.avatar" alt="">
        <span class="info-username">{{commentinfo.user.uname}}</span>
      </div>

      <div  class="info-content">
        <p>{{commentinfo.content}}</p>
        <div>
          <span class="info-contentstyle">{{commentinfo.created | showDate}}</span>
          <span class="info-contentstyle">{{commentinfo.style}}</span>
        </div>
      </div>
      <div class="infoimgs">
        <img :src="item"  v-for="(item,index) in commentinfo.images" :key="index">
      </div>
      





  </div>


</template>

<script>
 import {formatDate} from '../../../common/utils.js'
export default {

  name: 'detailcommentinfo',
  props:{
        commentinfo:{
            type:Object,
            default(){
                return {}
            }
            
        }

  },
  filters:{ //过滤器
    showDate(value){
          //将时间戳转成Date对象
          const date =new Date (value * 1000)

          //将date进行格式化
          return formatDate(date,'yyyy-MM-dd');

    }
  }
}
</script>

<style  scoped>
.commentinfo{
  background-color: #ffffff;
   padding: 0 15px 0 15px;
   }
.infoheader{
  display: flex;
  height: 55px;
 
  line-height: 55px;
  border-bottom:  1px solid rgba(100,100,100,.2)
}
.headertitle{
  flex: 1;
  text-align: left;

}
.headertitle1{
   flex: 1;
  text-align: right;
  
}
.info-user{
  margin-top: 10px;
  height: 30px;
  margin-bottom: 15px;

}
.info-user img{
  width: 30px;
  margin-right: 10px;
}
.info-username{
 position: relative;
    font-size: 15px;
    top: -10px;
    font-weight:bold;
    
}
.info-content p{
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 2px;
}
.info-contentstyle {
  margin-right: 10px;
  font-size:13px;
}
.infoimgs{
  margin-top: 7px;;
  width: 100%;
  padding-bottom: 10px;
  border-bottom:  1px solid rgba(100,100,100,.2)

}
.infoimgs img {
  width: 44%;
  margin-right: 4%;
}
</style>
 
