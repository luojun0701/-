"use strict";var e=require("./vendor.js");exports.login=function(i){e.index.showLoading({title:"正在登录...",mask:!0});let n=e.index.getStorageSync("userinfo");if(n)return i.globalData.userinfo=n,i.globalData.isLogin=!0,void e.index.hideLoading();e.index.login({provider:"weixin",success:({code:n})=>{e.pn.callFunction({name:"login",data:{code:n}}).then((({result:n})=>{i.globalData.userinfo=n,i.globalData.isLogin=!0,e.index.setStorageSync("userinfo",n),e.index.hideLoading()}))}})};
