// 当前这个模块进行api的统一管理

import request from "./request";
import mockRequest from "./mockRequest"
// 三级联动的接口
// 发请求：axios发请求返回的是promise对象

export const reqCategoryList=()=>{
    // ????
    return request({url:'/product/getBaseCategoryList',method:'get'});
}

//获取banner数据的接口函数
export const reqGetBannerList = ()=>mockRequest({url:'/banner',method:'get'});

//获取floor数据的接口函数
export const reqFloorList = ()=>mockRequest({url:'/floor',method:'get'});

//搜索产品的接口[真实的接口]
//URL:/api/list   method:post    参数：需要携带
//这个接口【携带参数：最多十个，十个属性可以传递，也可以不传递，但是至少给给服务器携带一个空对象】
export const reqGetSearchInfo = (params)=>request({url:"/list", method:'post', data:params});

//获取产品详情的接口
///api/item/{skuId}  get
export const reqDetailList = (skuId)=>request({url:`/item/${skuId}`,method:'get'});

//添加到购物车(对已有 物品进行数量 改动)
///api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

//用户获取到验证码的接口
///api/user/passport/sendCode/{phone}  get 
export const reqCode = (phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'get'});

//注册用户接口
//api/user/passport/register  post  phone code password
export const reqRegister = (phone,code,password)=>request({url:`/user/passport/register`,method:'post',data:{phone,code,password}});

//登录接口
///api/user/passport/login  post phone password
export const reqLogin = (phone,password)=>request({url:`/user/passport/login`,method:'post',data:{phone,password}});


//获取用户信息的接口
//api/user/passport/auth/getUserInfo  get
export const reqUserInfo = ()=>request({url:`/user/passport/auth/getUserInfo`,method:'get'});


//退出登录的接口【通知服务器销毁当前token身份】
///api/user/passport/logout  get 
export const reqLogout = ()=>request({url:`/user/passport/logout`,method:'get'});


//获取用户地址信息
export const reqAddressInfo = ()=>request({url:`/user/userAddress/auth/findUserAddressList`,method:'get'});

