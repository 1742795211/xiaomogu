<template>
  <div class="paraminfo" v-if="Object.keys(paraminfo).length !==0">
    
      <table  class="sizes-table" v-for="(table,index) in paraminfo.sizes " :key="index">
        <tr  class="table-tr"     v-for="(tr,inde) in table " :key="inde">
          <td class="sizes-table-td" v-for="(td,ind) in tr " :key="ind">{{td}}</td>

        </tr>
      </table>
    <table class="info-param">
      <tr   v-for="(info, index) in paraminfo.infos" :key="index">
        <td  class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
     <div class="info-img" v-if="paraminfo.image">
      <img :src="paraminfo.image" alt="">
    </div>

  </div>
</template>

<script>

export default {
  name: 'detailparam',
  props:{
        paraminfo:{
            type:Object,
            default(){
                return {}
            }
            
        }

  },
}
</script>

<style  scoped>
    .paraminfo {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    background: #fff;
  }
  .paraminfo table{
     width: 100%;
    border-collapse: collapse;
  }
  .table-tr{
    height: 42px;
  }
  .sizes-table-td{
    text-align: center;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
   table-tr:not(:first-child){
    font-size: 7px;
  }
   .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }
  .info-param tr{
    height: 42px;
  }
   .info-param td{
     text-align: center;
    border-bottom: 1px solid rgba(100,100,100,.1);
   }

</style>
 
