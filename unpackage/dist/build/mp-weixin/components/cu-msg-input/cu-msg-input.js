"use strict";var e=require("../../common/vendor.js");if(!Array){e.resolveComponent("cu-button")()}Math;const t={__name:"cu-msg-input",props:{comment:{type:String,default:""},placeholder:{type:String,default:"请输入"},detail:{type:Boolean,default:!0}},emits:["update:value","submit"],setup(t,{emit:o}){const a={width:"120rpx",height:"70rpx",lineHeight:"70rpx",fontSize:"28rpx"},r=e.ref(0),u=e=>{o("update:value",e.detail.value)},i=()=>{o("submit")},l=e=>{r.value=e.detail.height};return(o,n)=>({a:t.comment,b:t.placeholder,c:e.o(u),d:e.o(l),e:e.o(i),f:e.p({text:"发送",customStyle:a}),g:r.value+"px"})}};wx.createComponent(t);
