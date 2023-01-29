"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[2306],{2306:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var s=a(9835);const o={key:0},l={key:1};function n(e,t,a,n,i,r){const c=(0,s.up)("NewUser"),u=(0,s.up)("Dashboard"),d=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[0===e.assetCount?((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(c,{onCreatedAccounts:e.refreshThenCount},null,8,["onCreatedAccounts"])])):(0,s.kq)("",!0),e.assetCount>0?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(u)])):(0,s.kq)("",!0)])),_:1})}var i=a(3836),r=a(3555);const c={class:"row"},u={class:"col-xl-4 col-lg-4 col-md-6 q-pr-sm"},d={class:"col-xl-4 col-lg-4 col-md-6 q-px-sm"},m={class:"col-xl-4 col-lg-4 col-md-6 q-pl-sm"},p={class:"row"},h={class:"col-12 q-pt-sm q-pb-sm"},f={class:"row"},g={class:"col"},b={class:"row"},w={class:"col"},_=(0,s._)("div",{class:"col"}," Category box ",-1),v=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col"}," Expense Box "),(0,s._)("div",{class:"col"}," Revenue Box ")],-1),y=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col"}," Piggy box "),(0,s._)("div",{class:"col"}," Bill box ")],-1);function C(e,t,a,o,l,n){const i=(0,s.up)("BillInsightBox"),r=(0,s.up)("SpendInsightBox"),C=(0,s.up)("NetWorthInsightBox"),x=(0,s.up)("AccountChart"),q=(0,s.up)("TransactionLists"),W=(0,s.up)("BudgetBox"),B=(0,s.up)("q-fab-action"),A=(0,s.up)("q-fab"),P=(0,s.up)("q-page-sticky"),k=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(k,{class:"q-ma-md"},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",u,[(0,s.Wm)(i)]),(0,s._)("div",d,[(0,s.Wm)(r)]),(0,s._)("div",m,[(0,s.Wm)(C)])]),(0,s._)("div",p,[(0,s._)("div",h,[(0,s.Wm)(x)])]),(0,s._)("div",f,[(0,s._)("div",g,[(0,s.Wm)(q)])]),(0,s._)("div",b,[(0,s._)("div",w,[(0,s.Wm)(W)]),_]),v,y,(0,s.Wm)(P,{offset:[18,18],position:"bottom-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{color:"green",direction:"up",icon:"fas fa-chevron-up",label:"Actions","label-position":"left",square:"","vertical-actions-align":"right"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{label:e.$t("firefly.new_budget"),to:{name:"budgets.create"},color:"primary",icon:"fas fa-chart-pie",square:""},null,8,["label","to"]),(0,s.Wm)(B,{label:e.$t("firefly.new_asset_account"),to:{name:"accounts.create",params:{type:"asset"}},color:"primary",icon:"far fa-money-bill-alt",square:""},null,8,["label","to"]),(0,s.Wm)(B,{label:e.$t("firefly.newTransfer"),to:{name:"transactions.create",params:{type:"transfer"}},color:"primary",icon:"fas fa-exchange-alt",square:""},null,8,["label","to"]),(0,s.Wm)(B,{label:e.$t("firefly.newDeposit"),to:{name:"transactions.create",params:{type:"deposit"}},color:"primary",icon:"fas fa-long-arrow-alt-right",square:""},null,8,["label","to"]),(0,s.Wm)(B,{label:e.$t("firefly.newWithdrawal"),to:{name:"transactions.create",params:{type:"withdrawal"}},color:"primary",icon:"fas fa-long-arrow-alt-left",square:""},null,8,["label","to"])])),_:1})])),_:1})])),_:1})}const x={name:"Dashboard",components:{TransactionLists:(0,s.RC)((()=>a.e(936).then(a.bind(a,936)))),AccountChart:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(7700)]).then(a.bind(a,7700)))),NetWorthInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(4777)]).then(a.bind(a,4777)))),BillInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(7889)]).then(a.bind(a,7889)))),SpendInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(8135)]).then(a.bind(a,8135)))),BudgetBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(7886)]).then(a.bind(a,8482))))}};var q=a(1639),W=a(9885),B=a(3388),A=a(9361),P=a(935),k=a(9984),Z=a.n(k);const I=(0,q.Z)(x,[["render",C]]),R=I;Z()(x,"components",{QPage:W.Z,QPageSticky:B.Z,QFab:A.Z,QFabAction:P.Z});const $=(0,s.aZ)({name:"PageIndex",components:{Dashboard:R,NewUser:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(3064),a.e(5389)]).then(a.bind(a,5389))))},data(){return{assetCount:1,$store:null}},mounted(){this.countAssetAccounts()},methods:{refreshThenCount:function(){this.$store=(0,r.S)(),this.$store.refreshCacheKey(),this.countAssetAccounts()},countAssetAccounts:function(){let e=new i.Z;e.list("asset",1,this.getCacheKey).then((e=>{this.assetCount=parseInt(e.data.meta.pagination.total)}))}}}),T=(0,q.Z)($,[["render",n]]),D=T;Z()($,"components",{QPage:W.Z})}}]);