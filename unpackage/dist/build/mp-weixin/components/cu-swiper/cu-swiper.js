"use strict";var e=require("../../common/vendor.js");const t={__name:"cu-swiper",props:{list:{type:Array,default:[]},autoplay:{type:Boolean,default:!0},current:{type:Number,default:0},interval:{type:Number,default:3e3},duration:{type:Number,default:300},indicator:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},acceleration:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1},keyName:{type:String,default:"url"},height:{type:String,default:"260rpx"}},setup(t){const a=e.ref(0),l=e=>{a.value=e.detail.current};return(r,i)=>e.e({a:e.f(t.list,((a,l,r)=>e.e({a:a[t.keyName]},t.showTitle?{b:e.t(a.title)}:{},{c:e.o((t=>(({link:t})=>{let a=null;a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t)?`/pages/webview/webview?url=${t}`:t,e.index.navigateTo({url:a})})(a)))}))),b:t.showTitle,c:t.current,d:t.autoplay,e:t.interval,f:t.duration,g:t.circular,h:t.acceleration,i:e.o(l),j:t.indicator&&!t.showTitle},t.indicator&&!t.showTitle?{k:e.f(t.list.length,((t,l,r)=>({a:e.n({"cu-swiper-indicator-item-active":a.value==l})})))}:{},{l:t.height})}};wx.createComponent(t);
