<template>
    
    <div class="cartbar">
        <div class="checkbuttondiv">
            <checkbutton class="checkbutton"  :checkedvalue="checkbar"  @click.native="checkbutton"></checkbutton>
        </div>
        
        <div class="hj">合计:{{totalprice}}</div>
        <div class="sun">
            <div class="sumdiv">结算({{checlength}})</div>
        </div>
    </div>
</template>

<script>
      import checkbutton from './button'
    export default{
      name:'cartbar',
      components:{
      checkbutton
        },
      data(){
          return{
              check:true,
              caetList:[]
          }
      },
      computed:{
          totalprice(){
              this.caetList =this.$store.state.caetList.filter(item => item.checked )
              let sun = null
              let hj = 0
              for(let i=0;i<this.caetList.length;i++ ){
                sun  = this.caetList[i].count*this.caetList[i].lowNowPrice
                hj +=sun
              }
              

               return   "￥"+hj
          },
          checlength(){
            return this.caetList.length
          },
        checkbar(){
          

               
              let a =this.caetList.filter(item => item.checked).length
              let b =this.$store.state.caetList.length
              let c = 0
              console.log(b)


              if(b===c){
                 return false
                
              }else if(a<b){
                 return false
               }else{
                   return true
               }
           
           
           
        }
      },
    methods:{
      checkbutton(){
            if(this.checkbar){
              this.caetList.forEach(item => item.checked=false)
                   
            }else{
                let c =this.$store.state.caetList
                for(let item of c){
                     item.checked=true
                }
                   console.log(2222222222)
            }
        
       

      }
    }
       
     
  }

</script>

<style  scoped>
.cartbar{
    display: flex;
    width: 100%;
}
.checkbuttondiv{
    width: 55%;
    height: 40px;
}
.checkbutton{
    width:20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 10px;
}
.hj{
    width: 25%;
    text-align:left;
    line-height: 40px;
    font-size: 14px;
}
 .sun{
    width: 20%;
 }
 .sumdiv{
     width: 100%;
     height: 25px;
    
     margin-top: 7px;
     text-align: center;
     line-height: 25px;
     background:var(--color-tint);
     border-radius:10px; 
     font-size: 13px;
     color: #fff;
     letter-spacing:3px;
 }
</style>
