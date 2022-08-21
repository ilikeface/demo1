// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"


// 这里需要重写编程时路由跳转的replace和push方法。给其增加一个成功的回调和一个失败的回调，不然的话多次点击（当参数不变的时候，会发生错误）。
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;

VueRouter.prototype.push=function(location ,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{ },()=>{ });
    }

}
VueRouter.prototype.replace=function(location ,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{ },()=>{ });
    }

}


// 配置路由（路由的接口需要暴露出来）
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            // 路由元信息
            meta:{show:true},
        },
        {
            name:"search",
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false},
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false},
        },
        // 路由重定向，一进来的时候访问的是home页面
        {
            path:"/",
            redirect:"/home",
        },
        {
            path:"/detail/:skuId",
            component:Detail,
            // 路由元信息
            meta:{show:true},
        },
        {
            path: '/addcartsuccess',
            // component: () => import('@/pages/AddCartSuccess'),
            component:AddCartSuccess,
            meta: { show: true },
            name: "addcartsuccess"
        },
   ],

    //    滚动行为
    //滚动行为的设置
    scrollBehavior(to, from, savedPosition) {
        //设置Y轴的起点【y属性值没有负数】
        //当然滚动行为也可以设置x轴的
        return { y: 0 }
    }

});