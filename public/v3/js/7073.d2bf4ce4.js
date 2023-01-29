"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[7073],{7073:(e,s,t)=>{t.r(s),t.d(s,{default:()=>F});var a=t(9835),r=t(6970);const o={class:"row q-mx-md"},i={class:"col-12"},n={class:"row q-mx-md q-mt-md"},l={class:"col-12"},u=(0,a._)("div",{class:"text-h6"},"Info for new piggy bank",-1),c={class:"row"},d={class:"col-12 q-mb-xs"},m={class:"row"},b={class:"col-12 q-mb-xs"},h={class:"row"},g={class:"col-12 q-mb-xs"},p={class:"row q-mx-md"},_={class:"col-12"},f={class:"row"},w={class:"col-12 text-right"},v={class:"row"},k={class:"col-12 text-right"},q=(0,a._)("br",null,null,-1);function y(e,s,t,y,E,x){const I=(0,a.up)("q-btn"),V=(0,a.up)("q-banner"),S=(0,a.up)("q-card-section"),C=(0,a.up)("q-input"),W=(0,a.up)("q-select"),P=(0,a.up)("q-card"),R=(0,a.up)("q-checkbox"),Z=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Z,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",i,[""!==E.errorMessage?((0,a.wg)(),(0,a.j4)(V,{key:0,class:"bg-orange text-white","inline-actions":"",rounded:""},{action:(0,a.w5)((()=>[(0,a.Wm)(I,{flat:"",label:"Dismiss",onClick:x.dismissBanner},null,8,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(E.errorMessage)+" ",1)])),_:1})):(0,a.kq)("",!0)])]),(0,a._)("div",n,[(0,a._)("div",l,[(0,a.Wm)(P,{bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",d,[(0,a.Wm)(C,{modelValue:E.name,"onUpdate:modelValue":s[0]||(s[0]=e=>E.name=e),disable:x.disabledInput,error:E.hasSubmissionErrors.name,"error-message":E.submissionErrors.name,label:e.$t("form.name"),"bottom-slots":"",clearable:"",outlined:"",type:"text"},null,8,["modelValue","disable","error","error-message","label"])])]),(0,a._)("div",m,[(0,a._)("div",b,[(0,a.Wm)(W,{modelValue:E.account_id,"onUpdate:modelValue":s[1]||(s[1]=e=>E.account_id=e),disable:x.disabledInput,error:E.hasSubmissionErrors.account_id,"error-message":E.submissionErrors.account_id,options:E.accounts,"bottom-slots":"",class:"q-pr-xs","emit-value":"",label:"Asset account","map-options":"",outlined:""},null,8,["modelValue","disable","error","error-message","options"])])]),(0,a._)("div",h,[(0,a._)("div",g,[(0,a.Wm)(C,{modelValue:E.target_amount,"onUpdate:modelValue":s[2]||(s[2]=e=>E.target_amount=e),disable:x.disabledInput,error:E.hasSubmissionErrors.target_amount,"error-message":E.submissionErrors.target_amount,label:e.$t("firefly.target_amount"),mask:E.balance_input_mask,"bottom-slots":"",clearable:"","fill-mask":"0",hint:"Expects #.##",outlined:"","reverse-fill-mask":""},null,8,["modelValue","disable","error","error-message","label","mask"])])])])),_:1})])),_:1})])]),(0,a._)("div",p,[(0,a._)("div",_,[(0,a.Wm)(P,{class:"q-mt-xs"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a._)("div",w,[(0,a.Wm)(I,{disable:x.disabledInput,color:"primary",label:"Submit",onClick:x.submitPiggyBank},null,8,["disable","onClick"])])]),(0,a._)("div",v,[(0,a._)("div",k,[(0,a.Wm)(R,{modelValue:E.doReturnHere,"onUpdate:modelValue":s[3]||(s[3]=e=>E.doReturnHere=e),disable:x.disabledInput,label:"Return here to create another one","left-label":""},null,8,["modelValue","disable"]),q,(0,a.Wm)(R,{modelValue:E.doResetForm,"onUpdate:modelValue":s[4]||(s[4]=e=>E.doResetForm=e),disable:!E.doReturnHere||x.disabledInput,label:"Reset form after submission","left-label":""},null,8,["modelValue","disable"])])])])),_:1})])),_:1})])])])),_:1})}var E=t(1569);class x{post(e){let s="/api/v1/piggy_banks";return E.api.post(s,e)}}var I=t(3836);const V={name:"Create",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",balance_input_mask:"#.##",accounts:[],name:"",account_id:null,target_amount:""}},watch:{account_id:function(e){for(let s in this.accounts)if(this.accounts.hasOwnProperty(s)){let t=this.accounts[s];if(t.value===e){let e="#";this.balance_input_mask="#."+e.repeat(t.decimal_places)}}}},computed:{disabledInput:function(){return this.submitting}},created(){this.resetForm(),this.getAccounts()},methods:{resetForm:function(){this.name="",this.account_id="",this.target_amount="",this.resetErrors()},getAccounts:function(){this.getAccountPage(1)},getAccountPage:function(e){(new I.Z).list("asset",e,this.getCacheKey).then((s=>{let t=parseInt(s.data.meta.pagination.total_pages);e<t&&this.getAccountPage(e+1);for(let e in s.data.data)if(s.data.data.hasOwnProperty(e)){let t=s.data.data[e];this.accounts.push({value:parseInt(t.id),label:t.attributes.name,decimal_places:parseInt(t.attributes.currency_decimal_places)})}}))},resetErrors:function(){this.submissionErrors={name:"",account_id:"",target_amount:""},this.hasSubmissionErrors={name:!1,account_id:!1,target_amount:!1}},submitPiggyBank:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildPiggyBank();(new x).post(e).catch(this.processErrors).then(this.processSuccess)},buildPiggyBank:function(){return{name:this.name,account_id:this.account_id,target_amount:this.target_amount}},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(!e)return;this.submitting=!1;let s={level:"success",text:"I am new piggy",show:!0,action:{show:!0,text:"Go to piggy",link:{name:"piggy-banks.show",params:{id:parseInt(e.data.data.id)}}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var S=t(1639),C=t(9885),W=t(7128),P=t(8879),R=t(4458),Z=t(3190),B=t(6611),Q=t(7887),A=t(1221),H=t(9984),M=t.n(H);const U=(0,S.Z)(V,[["render",y]]),F=U;M()(V,"components",{QPage:C.Z,QBanner:W.Z,QBtn:P.Z,QCard:R.Z,QCardSection:Z.Z,QInput:B.Z,QSelect:Q.Z,QCheckbox:A.Z})}}]);