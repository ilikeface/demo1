// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
//因为进度条样式咱们没有引入
import "nprogress/nprogress.css";
//引入Vuex仓库模块
import store from '@/store';

const requests =axios.create({
    // 基础路径，发请求的时候路径会出现api
    baseURL:"/api",
    
    timeout:5000,
});

// 配置请求拦截器，在发送请求之前拦截器可以检测到，可以在请求发出去之前做一些事情

requests.interceptors.request.use((config)=>{
//  config 配置对象，对象里面有一个属性很重要，headers请求头
 //用户身份token
 console.log("beforetoken",store.state.user.token);
 if(store.state.user.token){
    //请求头的这个属性token，和后台老师商量好的了，不能叫做别的名字
    console.log("token");
    config.headers.token = store.state.user.token;
  };
  nProgress.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    // 失败的回调函数
    return Promise.reject(new Error('faile'));
});

export default requests;