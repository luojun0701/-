"use strict";var e=require("../../common/vendor.js");if(!Array){e.resolveComponent("cu-icon")()}Math;const t={__name:"cu-navbar",props:{height:{type:Number,default:44},bgColor:{type:String,default:"#fff"},leftIcon:{type:String,default:"fanhui"},leftIconColor:{type:String,default:"#000000"},title:String,color:{type:String,default:"#000000"},placeholder:{type:Boolean,default:!0}},setup(t){const o=t,n=e.computed$1((()=>`${o.height+r("statusBarHeight")}px`)),r=t=>e.index.getSystemInfoSync()[t],l=()=>{e.index.navigateBack({delta:1})};return e.onLoad((()=>{})),(o,a)=>e.e({a:`${r("statusBarHeight")}px`,b:t.bgColor,c:t.leftIcon},t.leftIcon?{d:e.p({name:t.leftIcon,color:t.leftIconColor}),e:e.o(l)}:{},{f:e.t(t.title),g:t.color,h:`${t.height}px`,i:t.bgColor,j:e.unref(n),k:t.placeholder},t.placeholder?{l:e.unref(n)}:{})}};wx.createComponent(t);