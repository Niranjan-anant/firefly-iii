"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[8135],{8135:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var s=n(9835),u=n(6970);const r=["title"],i=(0,s.Uk)(": "),o=["title"],a={key:0},d=(0,s._)("br",null,null,-1),l=["title"],m=["title"],p={key:0};function c(e,t,n,c,g,h){const f=(0,s.up)("q-item-label"),v=(0,s.up)("q-item-section"),_=(0,s.up)("q-item"),b=(0,s.up)("q-separator"),w=(0,s.up)("q-circular-progress"),y=(0,s.up)("q-card-section"),A=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(A,{bordered:"",flat:""},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s._)("strong",null,(0,u.zw)(e.$t("firefly.left_to_spend")),1)])),_:1})])),_:1})])),_:1}),(0,s.Wm)(b),(0,s.Wm)(y,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{thickness:.22,value:h.percentage,color:"negative",size:"50px","track-color":"positive"},null,8,["thickness","value"])])),_:1}),(0,s.Wm)(b,{vertical:""}),0===g.budgeted.length&&0===g.spent.length?((0,s.wg)(),(0,s.j4)(y,{key:0},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(e.$t("firefly.no_budget")),1)])),_:1})):(0,s.kq)("",!0),g.budgeted.length>0||g.spent.length>0?((0,s.wg)(),(0,s.j4)(y,{key:1},{default:(0,s.w5)((()=>[(0,s._)("span",{title:h.formatAmount(this.currency,this.budgetedAmount)},(0,u.zw)(e.$t("firefly.budgeted")),9,r),i,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.budgeted,((e,t)=>((0,s.wg)(),(0,s.iD)("span",null,[(0,s._)("span",{title:h.formatAmount(e.native_code,e.native_sum)},(0,u.zw)(h.formatAmount(e.code,e.sum)),9,o),t+1!==g.budgeted.length?((0,s.wg)(),(0,s.iD)("span",a," + ")):(0,s.kq)("",!0)])))),256)),d,g.spent.length>0?((0,s.wg)(),(0,s.iD)("span",{key:0,title:h.formatAmount(this.currency,this.spentAmount)},(0,u.zw)(e.$t("firefly.spent"))+": ",9,l)):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.spent,((e,t)=>((0,s.wg)(),(0,s.iD)("span",null,[(0,s._)("span",{title:h.formatAmount(e.native_code,e.native_sum)},(0,u.zw)(h.formatAmount(e.code,e.sum)),9,m),t+1!==g.spent.length?((0,s.wg)(),(0,s.iD)("span",p," + ")):(0,s.kq)("",!0)])))),256))])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1})}var g=n(3555),h=n(1569),f=n(8898);class v{budgeted(e,t){let n="api/v2/budgets/sum/budgeted",s=(0,f.Z)(e,"y-MM-dd"),u=(0,f.Z)(t,"y-MM-dd");return h.api.get(n,{params:{start:s,end:u}})}spent(e,t){let n="api/v2/budgets/sum/spent",s=(0,f.Z)(e,"y-MM-dd"),u=(0,f.Z)(t,"y-MM-dd");return h.api.get(n,{params:{start:s,end:u}})}}const _={data(){return{store:null,budgeted:[],spent:[],currency:"EUR",budgetedAmount:0,spentAmount:0}},name:"SpendInsightBox",computed:{percentage:function(){if(0===this.budgetedAmount)return 100;if(0===this.spentAmount)return 0;const e=this.spentAmount/this.budgetedAmount*100;return e>100?100:e}},mounted(){this.store=(0,g.S)(),this.store.$onAction((({name:e,$store:t,args:n,after:s,onError:u})=>{s((t=>{"setRange"===e&&this.triggerUpdate()}))})),this.triggerUpdate()},methods:{triggerUpdate:function(){if(null!==this.store.getRange.start&&null!==this.store.getRange.end){this.budgeted=[];const e=new Date(this.store.getRange.start),t=new Date(this.store.getRange.end),n=new v;this.currency=this.store.getCurrencyCode,n.budgeted(e,t).then((e=>this.parseBudgetedResponse(e.data))),n.spent(e,t).then((e=>this.parseSpentResponse(e.data)))}},formatAmount:function(e,t){return Intl.NumberFormat(this.store.getLocale,{style:"currency",currency:e}).format(t)},parseBudgetedResponse:function(e){for(let t in e)if(e.hasOwnProperty(t)){const n=e[t],s=n.converted&&n.native_id!==n.id&&0!==parseFloat(n.native_sum);this.budgeted.push({sum:n.sum,code:n.code,native_sum:n.converted?n.native_sum:n.sum,native_code:n.converted?n.native_code:n.code,native:s}),n.converted&&(s||n.native_id===n.id)&&(this.budgetedAmount=this.budgetedAmount+parseFloat(n.native_sum)),n.converted||(this.budgetedAmount=this.budgetedAmount+parseFloat(n.sum))}},parseSpentResponse:function(e){for(let t in e)if(e.hasOwnProperty(t)){const n=e[t],s=n.converted&&n.native_id!==n.id&&0!==parseFloat(n.native_sum);this.spent.push({sum:n.sum,code:n.code,native_sum:n.converted?n.native_sum:n.sum,native_code:n.converted?n.native_code:n.code,native:s}),n.converted&&(s||n.native_id===n.id)&&(this.spentAmount=this.spentAmount+-1*parseFloat(n.native_sum)),n.converted||(this.spentAmount=this.spentAmount+-1*parseFloat(n.sum))}}}};var b=n(1639),w=n(4458),y=n(490),A=n(1233),k=n(3115),q=n(926),Z=n(3190),R=n(3302),D=n(9984),z=n.n(D);const M=(0,b.Z)(_,[["render",c]]),W=M;z()(_,"components",{QCard:w.Z,QItem:y.Z,QItemSection:A.Z,QItemLabel:k.Z,QSeparator:q.Z,QCardSection:Z.Z,QCircularProgress:R.Z})}}]);