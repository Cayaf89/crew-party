var T=Object.defineProperty;var L=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var j=(o,t,l)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,M=(o,t)=>{for(var l in t||(t={}))B.call(t,l)&&j(o,l,t[l]);if(L)for(var l of L(t))O.call(t,l)&&j(o,l,t[l]);return o};import{d as I,R as z,r as S,o as n,c as i,a as s,b as v,w as b,e as V,f as p,g,u as W,h as D,F as h,i as c,v as m,j as q,t as f,n as $,k as y,l as A,m as H,p as F,q as J,s as X,x as K}from"./vendor.ebc51f3d.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}};G();const x=I({id:"auth",state:()=>({token:"",isAuthenticated:!1}),getters:{},actions:{setToken(o,t){this.token=o,sessionStorage.setItem("token",o),t&&localStorage.setItem("token",o),axios.defaults.headers.common.Authorization="Bearer "+o,this.isAuthenticated=!0},removeToken(){this.token="",localStorage.removeItem("token"),sessionStorage.removeItem("token"),delete axios.defaults.headers.common.Authorization,this.isAuthenticated=!1}}});var Q="/assets/teaching-tomster.e39e3e1f.png",_=(o,t)=>{const l=o.__vccOpts||o;for(const[u,e]of t)l[u]=e;return l};const Y={name:"MenuBar",components:{RouterLink:z},data(){return{authStore:x()}},methods:{logout(){axios.post("/logout").then(()=>{this.authStore.removeToken(),this.$router.push({name:"home"})})}}},Z={class:"navbar"},ee={class:"container mx-auto flex flex-row justify-between h-full"},se={class:"flex"},te=s("img",{src:Q,class:"h-14 my-auto"},null,-1),oe=s("div",null,"Dashboard",-1),re={key:0,class:"flex"},ne={class:"flex items-center"},ie=g(" Se connecter "),ae={class:"flex items-center"},le=g(" S'inscrire "),de={key:1,class:"flex"},ce={class:"dropdown"},ue=s("a",{href:"#",class:"nav-link"},[s("div",null,"Mon profil")],-1),me={class:"dropdown-menu"},he=g(" Modifier mon profil ");function pe(o,t,l,u,e,a){const d=S("router-link");return n(),i("nav",Z,[s("div",ee,[s("div",se,[v(d,{to:{name:e.authStore.isAuthenticated?"dashboard":"home"},class:"mr-8 h-full flex justify-center"},{default:b(()=>[te]),_:1},8,["to"]),e.authStore.isAuthenticated?(n(),V(d,{key:0,to:{name:"dashboard"},class:"nav-link"},{default:b(()=>[oe]),_:1})):p("",!0)]),e.authStore.isAuthenticated?(n(),i("div",de,[s("div",ce,[ue,s("div",me,[s("div",null,[v(d,{to:{name:"profile"},class:"dropdown-item"},{default:b(()=>[he]),_:1})]),s("div",null,[s("a",{href:"#",class:"dropdown-item text-red-400",onClick:t[0]||(t[0]=(...r)=>a.logout&&a.logout(...r))}," Se d\xE9connecter ")])])])])):(n(),i("div",re,[s("div",ne,[v(d,{to:{name:"login"},class:"btn"},{default:b(()=>[ie]),_:1})]),s("div",ae,[v(d,{to:{name:"register"},class:"btn btn-primary mx-3"},{default:b(()=>[le]),_:1})])]))])])}var fe=_(Y,[["render",pe]]);const _e={class:"margin-navbar"},ve={setup(o){return(t,l)=>(n(),i(h,null,[s("header",null,[v(fe)]),s("div",_e,[v(W(D))])],64))}};function P(o,t){return x().isAuthenticated}const ge={name:"HomeView"},be={class:"w-full flex flex-col items-center justify-center h-screen"},ye=s("h2",{class:"text-3xl font-bold"},"Welcome to Crew Party",-1),xe=s("p",null,"We hope you find exactly what you're looking for in a place to stay.",-1),we=[ye,xe];function ke(o,t,l,u,e,a){return n(),i("div",be,we)}var $e=_(ge,[["render",ke]]);const w=I({id:"user",state:()=>({firstname:"",lastname:"",username:"",email:""}),getters:{fullname:o=>o.firstname+" "+o.lastname},actions:{setUser(o){this.firstname=o.firstname,this.lastname=o.lastname,this.username=o.username,this.email=o.email,localStorage.setItem("user",JSON.stringify(o))}}});const Se={},Ve={class:"spinner-grow text-gray-500",role:"status","aria-hidden":"true"},Me=s("span",{class:"visually-hidden"},"Loading...",-1),Ae=[Me];function Ue(o,t){return n(),i("div",Ve,Ae)}var U=_(Se,[["render",Ue]]);const Ne={name:"LoginView",components:{Loader:U},data(){return{authStore:x(),userStore:w(),email:"",password:"",rememberMe:!1,errorMessage:"",loading:!1}},mounted(){this.authStore.isAuthenticated&&R.push({name:"dashboard"})},methods:{login(){this.loading=!0,axios.post("/login",{email:this.email,password:this.password}).then(o=>{this.authStore.setToken(o.data.token,this.rememberMe),this.userStore.setUser(o.data.user),this.$router.push({name:"dashboard"})}).finally(()=>{this.loading=!1})}}},Le={class:"w-100 flex justify-center pt-5"},je={class:"form-container p-5"},Pe=s("h1",{class:"text-center text-2xl font-bold mb-4"},"Connectez-vous !",-1),Ce={class:"mb-3"},Ee=s("label",{for:"email"},"Adresse E-Mail :",-1),Ie={class:"mb-3"},Re=s("label",{for:"password",class:"form-label"},"Mot de passe",-1),Te={class:"mb-3 form-check"},Be=s("label",{for:"remember-me",class:"form-check-label"},"Se souvenir de moi",-1),Oe={class:"flex justify-center"},ze=g(" Se connecter "),We={key:0,class:"d-flex"},De={class:"alert alert-danger"};function qe(o,t,l,u,e,a){const d=S("loader");return n(),i("div",Le,[s("div",je,[Pe,s("div",Ce,[Ee,c(s("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=r=>e.email=r),class:"form-input",id:"email",placeholder:"Adresse E-Mail"},null,512),[[m,e.email]])]),s("div",Ie,[Re,c(s("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=r=>e.password=r),class:"form-input",id:"password",placeholder:"*******"},null,512),[[m,e.password]])]),s("div",Te,[c(s("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=r=>e.rememberMe=r),class:"mr-3",id:"remember-me"},null,512),[[q,e.rememberMe]]),Be]),s("div",Oe,[s("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...r)=>a.login&&a.login(...r))},[e.loading?(n(),V(d,{key:0})):(n(),i(h,{key:1},[ze],64))])]),e.errorMessage?(n(),i("div",We,[s("div",De,f(e.errorMessage),1)])):p("",!0)])])}var He=_(Ne,[["render",qe]]);const Fe={name:"RegisterView",components:{Loader:U},data(){return{username:"",email:"",password:"",confirmPassword:"",errors:{username:[],email:[],password:[]},loading:!1}},methods:{register(){this.loading=!0,axios.post("/register",{username:this.username,email:this.email,password:this.password,password_confirmation:this.confirmPassword}).then(o=>{this.errors={username:[],email:[],password:[]},x().setToken(o.data.token),w().setUser(o.data.user),this.$router.push("dashboard")}).catch(o=>{this.errors=o.response.data.errors}).finally(()=>{this.loading=!1})}},watch:{username(){this.errors.username.length>0&&(this.errors.username=[])},email(){this.errors.email.length>0&&(this.errors.email=[])},password(){this.errors.password.length>0&&(this.errors.password=[])}}},Je={class:"w-100 flex justify-center pt-5"},Xe={class:"form-container p-5"},Ke=s("h1",{class:"text-center text-2xl font-bold mb-4"},"Inscrivez-vous !",-1),Ge={class:"mb-3"},Qe=s("label",{for:"username"},"Nom d'utilisateur :",-1),Ye={key:0,class:"invalid-feedback"},Ze={class:"d-flex"},es={class:"mb-3"},ss=s("label",{for:"email"},"Adresse E-Mail :",-1),ts={key:0,class:"invalid-feedback"},os={class:"d-flex"},rs={class:"mb-3"},ns=s("label",{for:"password"},"Mot de passe",-1),is={key:0,class:"invalid-feedback"},as={class:"d-flex"},ls={class:"mb-3"},ds=s("label",{for:"confirm-password"},"Confirmer le mot de passe",-1),cs={class:"flex justify-center"},us=g(" S'inscrire ");function ms(o,t,l,u,e,a){const d=S("loader");return n(),i("div",Je,[s("div",Xe,[Ke,s("div",Ge,[Qe,c(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>e.username=r),placeholder:"Nom d'utilisateur",autocomplete:"username",id:"username",class:$(["form-input",{invalid:e.errors.username.length>0}])},null,2),[[m,e.username]]),e.errors.username.length>0?(n(),i("div",Ye,[(n(!0),i(h,null,y(e.errors.username,r=>(n(),i("div",Ze,f(r),1))),256))])):p("",!0)]),s("div",es,[ss,c(s("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=r=>e.email=r),class:$(["form-input",{invalid:e.errors.email.length>0}]),id:"email",placeholder:"Adresse E-Mail",autocomplete:"email"},null,2),[[m,e.email]]),e.errors.email.length>0?(n(),i("div",ts,[(n(!0),i(h,null,y(e.errors.email,r=>(n(),i("div",os,f(r),1))),256))])):p("",!0)]),s("div",rs,[ns,c(s("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=r=>e.password=r),class:$(["form-input",{invalid:e.errors.password.length>0}]),id:"password",placeholder:"*******"},null,2),[[m,e.password]]),e.errors.password.length>0?(n(),i("div",is,[(n(!0),i(h,null,y(e.errors.password,r=>(n(),i("div",as,f(r),1))),256))])):p("",!0)]),s("div",ls,[ds,c(s("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=r=>e.confirmPassword=r),class:"form-input",id:"confirm-password",placeholder:"*******"},null,512),[[m,e.confirmPassword]])]),s("div",cs,[s("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=(...r)=>a.register&&a.register(...r))},[e.loading?(n(),V(d,{key:0})):(n(),i(h,{key:1},[us],64))])])])])}var hs=_(Fe,[["render",ms]]);const ps={name:"DashboardView",data(){return{userStore:w()}}},fs={class:"w-full flex flex-col items-center justify-center h-screen"},_s={class:"text-3xl font-bold"},vs=s("p",null,"We hope you find exactly what you're looking for in a place to stay.",-1);function gs(o,t,l,u,e,a){return n(),i("div",fs,[s("h2",_s,"Welcome to your dashboard "+f(e.userStore.username),1),vs])}var bs=_(ps,[["render",gs]]);const ys={name:"ProfileView",components:{Loader:U},data(){return{userStore:w(),firstname:"",lastname:"",username:"",email:"",errors:{username:[],email:[]},saving:!1}},mounted(){this.firstname=this.userStore.firstname,this.lastname=this.userStore.lastname,this.username=this.userStore.username,this.email=this.userStore.email},methods:{save(){this.saving=!0,A.post("/api/user",{firstname:this.firstname,lastname:this.lastname,username:this.username,email:this.email}).then(o=>{this.userStore.setUser(o.data.user)}).catch(o=>{this.errors=M(M({},this.errors),o.response.data.errors)}).finally(()=>{this.saving=!1})}}},xs={class:"w-100 flex justify-center pt-5"},ws={class:"form-container p-5"},ks=s("h1",{class:"text-center text-2xl font-bold mb-4"},"Modifiez votre profil",-1),$s={class:"columns-2"},Ss={class:"w-full mb-3"},Vs=s("label",{for:"firstname"},"Pr\xE9nom :",-1),Ms={class:"w-full mb-3"},As=s("label",{for:"lastname"},"Nom :",-1),Us={class:"mb-3"},Ns=s("label",{for:"username"},"Nom d'utilisateur :",-1),Ls={key:0,class:"invalid-feedback"},js={class:"d-flex"},Ps={class:"mb-3"},Cs=s("label",{for:"email"},"Adresse E-Mail :",-1),Es={key:0,class:"invalid-feedback"},Is={class:"d-flex"},Rs={class:"flex justify-center"},Ts=g(" Enregistrer ");function Bs(o,t,l,u,e,a){const d=S("loader");return n(),i("div",xs,[s("div",ws,[ks,s("div",$s,[s("div",Ss,[Vs,c(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>e.firstname=r),placeholder:"Pr\xE9nom",autocomplete:"firstname",id:"firstname",class:"form-input"},null,512),[[m,e.firstname]])]),s("div",Ms,[As,c(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=r=>e.lastname=r),placeholder:"Nom",autocomplete:"lastname",id:"lastname",class:"form-input"},null,512),[[m,e.lastname]])])]),s("div",Us,[Ns,c(s("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=r=>e.username=r),placeholder:"Nom d'utilisateur",autocomplete:"username",id:"username",class:$(["form-input",{"is-invalid":e.errors.username.length>0}])},null,2),[[m,e.username]]),e.errors.username.length>0?(n(),i("div",Ls,[(n(!0),i(h,null,y(e.errors.username,r=>(n(),i("div",js,f(r),1))),256))])):p("",!0)]),s("div",Ps,[Cs,c(s("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=r=>e.email=r),class:"form-input",id:"email",placeholder:"Adresse E-Mail"},null,512),[[m,e.email]]),e.errors.email.length>0?(n(),i("div",Es,[(n(!0),i(h,null,y(e.errors.email,r=>(n(),i("div",Is,f(r),1))),256))])):p("",!0)]),s("div",Rs,[s("button",{type:"button",class:"btn btn-primary flex",onClick:t[4]||(t[4]=(...r)=>a.save&&a.save(...r))},[e.saving?(n(),V(d,{key:0,class:"self-center"})):(n(),i(h,{key:1},[Ts],64))])])])])}var Os=_(ys,[["render",Bs]]);const R=H({history:F("/"),routes:[{path:"/",name:"dashboard",component:bs,beforeEnter:[P]},{path:"/profile",name:"profile",component:Os,beforeEnter:[P]},{path:"/",name:"home",component:$e},{path:"/login",name:"login",component:He},{path:"/register",name:"register",component:hs}]});window.axios=A;A.defaults.baseURL="http://127.0.0.1:8000/";window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";window.axios.defaults.headers.common.Accept="application/json";window.axios.interceptors.response.use(function(o){return o},function(o){return o.response&&o.response.status==401&&o.response.data.message=="Unauthenticated."&&J().push({name:"login"}),Promise.reject(o)});const N=X(ve);N.use(K());N.use(R);const k=localStorage.getItem("token"),C=sessionStorage.getItem("token");(k||C)&&x().setToken(k!=null?k:C);const E=localStorage.getItem("user");E&&w().setUser(JSON.parse(E));N.mount("#app");