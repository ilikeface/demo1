import Vue from 'vue'
import App from './App.vue'

import router from "@/router"
// 组测全局组件
import TypeNav from "@/components/TypeNav"
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

// 引入仓库
import store from './store'

//引入先关的mock数据的文件【需要代码执行一次】
import "@/mock/serve";
//引入swiper需要使用的样式[项目当中用到swiper的地方很多，样式引入一次即可
import "swiper/css/swiper.css"
//注册全局的轮播图组件
import Carousel from '@/components/Carousel';
Vue.component(Carousel.name, Carousel);
// 分页器组测为全局组件
import Pagination from '@/components/Pagination';
Vue.component(Pagination.name,Pagination)


new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //把全部的请求函数：作为Vue.prototype的属性，组件实例可以获取
    //请求函数只需要注册一次，可以在组件当中使用。
    // Vue.prototype.$API = API;
  }
  ,
  // 地下写法  kv一致 神略了v
  router,
  // 注册仓库，组件实例圣上会多一个$store
  store,
})
