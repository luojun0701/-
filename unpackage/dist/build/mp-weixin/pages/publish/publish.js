"use strict";var e=require("../../common/vendor.js"),o=require("../../common/db.js");if(!Array){(e.resolveComponent("cu-upload")+e.resolveComponent("cu-empty")+e.resolveComponent("cu-loading")+e.resolveComponent("unicloud-db")+e.resolveComponent("cu-cell")+e.resolveComponent("cu-button"))()}Math||((()=>"../../components/cu-upload/cu-upload.js")+(()=>"../../components/cu-empty/cu-empty.js")+(()=>"../../components/cu-loading/cu-loading.js")+(()=>"../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js")+(()=>"../../components/cu-cell/cu-cell.js")+(()=>"../../components/cu-button/cu-button.js"))();const a={__name:"publish",setup(a){const n=e.ref(null),t={marginTop:"100rpx"},l=e.ref(""),c=e.ref(""),u=e.ref("");var i="";const s=e.ref(!1);e.onShow((()=>{u.value=e.index.getStorageSync("html")||""}));const d=e=>{let o=e.detail.value;s.value=o},r=()=>{e.index.navigateTo({url:"/pages/editorPage/editorPage"})},v=async()=>{var a;if(""==c.value)return void e.index.showToast({title:"内容不能为空",icon:"none"});if(""==i)return void e.index.showToast({title:"请选择话题",icon:"none"});let t=await(null==(a=n.value)?void 0:a.upload());e.index.showLoading({title:"发布中..."}),o.addDb("articles",{content:c.value,img_list:t,user_id:getApp().globalData.userinfo._id,category_id:i}).then((({success:o,result:a})=>{e.index.showToast({title:o?"发布成功":"发布失败,请重试",icon:"none"}),o&&e.index.navigateBack()}))};return(o,a)=>e.e({a:s.value},s.value?e.e({b:u.value},u.value?{c:u.value,d:e.o(r)}:{e:e.o(r)}):{f:c.value,g:e.o((e=>c.value=e.detail.value))},{h:e.sr(n,"ca1e2ac8-0",{k:"upload"}),i:e.w((({data:o,loading:a,error:n,options:t,hasMore:c},u,s)=>e.e({a:n},n?{b:"ca1e2ac8-2-"+s+",ca1e2ac8-1",c:e.p({mode:"fail"})}:a?{e:"ca1e2ac8-3-"+s+",ca1e2ac8-1"}:{},{d:a,f:e.f(o,((o,a,n)=>({a:e.t(o.name),b:l.value==a?1:"",c:e.o((e=>((e,o)=>{i=o,l.value=e})(a,o._id)))}))),g:s,h:u})),{name:"d",path:"i",vueId:"ca1e2ac8-1"}),j:e.p({collection:"articles-categories"}),k:s.value,l:e.o(d),m:e.p({title:s.value?"富文本内容":"普通内容"}),n:e.o(v),o:e.p({text:"一键发布",customStyle:t})})}};wx.createPage(a);
