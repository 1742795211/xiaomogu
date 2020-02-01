import Vue from 'vue'
import VueRoter from 'vue-router'

//2.安装插件
Vue.use(VueRoter)

//2.创建router
//2.1懒加载
const  catr = () => import ('../views/cart/cart')
const  category = () => import ('../views/category/fenlie')
const  home = () => import ('../views/home/home')
const  profil = () => import ('../views/profil/profil.vue')
const  detail = () => import ('../views/detail/detail.vue')

const roeter = new VueRoter({
    routes: [
        {
          path:'',
          //redirect重定向  默认路径
          redirect:'/home'
        },
        {
         path:'/cart',
         component:catr,
        },
        {
         path:'/category',
         component:category,
        },
        {
         path:'/home',
         component:home,
        },
        {
         path:'/profil',
         component:profil,
        },
        {
          path:'/detail/:id',
          component:detail,
         },
    
      ],
      mode:'history',


})

//导出

export default roeter