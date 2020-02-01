import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

//创建实例对象
const store = new Vuex.Store({
    state:{
        caetList:[]
    },
    mutations:{//mutations就是为了修改state中的数据

       addcounter(state,payload){
           payload.count++
       },


       addtocart(state,payload){
        state.caetList.push(payload)
       }
    },
    actions:{
        addcart(context,payload){

            return new Promise ((resolve,teject) => {
            
                 //判断购物车里是否已经有商品
            let oldproduct = context.state.caetList.find(item => item.id === payload.id)
            
            
             if(oldproduct){
                context.commit('addcounter',oldproduct)
                resolve('商品数量加一')
               
             }else{
                payload.count = 1  //给购物中商品数量赋值1
                context.commit('addtocart',payload)
                resolve('添加了新的商品')
                
             }


            })



            
            
        }
    }
})
//挂载Vue实例上
export  default store
