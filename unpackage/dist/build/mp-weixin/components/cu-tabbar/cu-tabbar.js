"use strict";var e=require("../../common/vendor.js"),t=require("../../utils/index.js");if(!Array){e.resolveComponent("cu-icon")()}Math;const a={__name:"cu-tabbar",props:{router:{type:Boolean,default:!0},list:{type:Array,default:[{icon:"shouye",text:"首页",path:"pages/index/index"},{icon:"faxian",text:"发现",path:"pages/find/find"},{icon:"shequ",text:"任务",path:"pages/task/task"},{icon:"me",text:"我的",path:"pages/me/me"}]}},emits:["change"],setup(a,{emit:n}){const o=a,r=e.ref(0),i=e.getCurrentInstance();e.onMounted((()=>{c()}));const s=e=>getCurrentPages()[0].route==e,c=()=>{t.getRect(".cu-tabbar",!1,i).then((({height:e})=>{r.value=e+"px"}))};return(t,i)=>({a:e.f(a.list,((t,a,r)=>({a:"2d35e6fc-0-"+r,b:e.p({name:t.icon,color:s(t.path)?"#3d7eff":"rgb(125, 126, 128)"}),c:e.t(t.text),d:s(t.path)?1:"",e:e.o((r=>((t,a)=>{o.router&&e.index.switchTab({url:`/${a.path}`}),n("change",{index:t,item:a})})(a,t)))}))),b:e.o(((...e)=>t.noop&&t.noop(...e))),c:r.value})}};wx.createComponent(a);