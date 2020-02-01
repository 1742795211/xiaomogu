import axios from 'axios'


export function request(config){


       // 1.创建axios的实例
       const instance = axios.create({
         baseURL:'http://123.207.32.32:8000/api/hy',
       
         timeout:5000
       })

//        //axios拦截器
//        //请求拦截
         instance.interceptors.request.use(function(config){
           return config;//返回释放config
         },
       function(err){//发出请求失败调用
          

         }
        )

        //响应拦截
        instance.interceptors.response.use(res =>{            
         
           return res;
          }, err =>{//响应失败
           

          })
 

       // 发送真正的网络请求
         return   instance(config)





 }


