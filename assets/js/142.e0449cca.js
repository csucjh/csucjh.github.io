"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[142],{5142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(6252),o=n(3293),l=n(3577);const i={key:0,ref:"navTree",class:"navTree"},s=["onClick"],a={props:{source:{default:"theme-default-content",type:String}},data:()=>({navTreeArr:[],domHead:[],domHeadArray:[],currentIndex:0,realScroll:null,topPadding:-20}),mounted(){this.init(2)},beforeDestroy(){window.removeEventListener("scroll",this.realScroll)},methods:{initScroll(){this.realScroll=this.debouceAndThrotte(this.handleScroll),window.addEventListener("scroll",this.realScroll)},handleScroll(){this.domHeadArray.some(((e,t)=>{if(console.log(t),this.checkInScreen(e))return this.currentIndex=t,!0}))},debouceAndThrotte(e,t=200,n=666){let r=0,o=null;return function(){const l=(new Date).getTime();0===r&&(r=l),l-r<n?(clearTimeout(o),o=setTimeout((()=>{r=l,e()}),t)):(r=l,e())}},checkInScreen(e){const t=e.getBoundingClientRect();return t.top>this.topPadding&&t.bottom<window.innerHeight},destroy(){this.navTreeArr=this.domHead=this.domHeadArray=[]},getTop(e,t=0){let n=e.offsetTop,r=e.offsetParent;for(;null!==r;)n+=r.offsetTop,r=r.offsetParent;return t+n},init(e=3){if(this.destroy(),this.container=document.getElementsByClassName(this.source)[0],console.log("navTree init!"),!this.container)return;let t,n,r;if([this.container.getElementsByTagName("h1"),this.container.getElementsByTagName("h2"),this.container.getElementsByTagName("h3"),this.container.getElementsByTagName("h4"),this.container.getElementsByTagName("h5"),this.container.getElementsByTagName("h6")].forEach(((e,o)=>{e.length&&(null==t?t="h"+(o+1):null==n?n="h"+(o+1):null==r&&(r="h"+(o+1)))})),!t)return;this.query=[t,n,r].slice(0,e).filter((e=>!!e)).join(","),this.domHead=this.container.querySelectorAll(this.query),this.domHeadArray=Array.from(this.domHead);const o={[t]:1,[n]:2,[r]:3};this.domHeadArray.forEach((e=>{this.navTreeArr.push({text:e.innerText.slice(1),level:o[e.tagName.toLowerCase()]})})),this.realScroll||this.initScroll()},getClass:e=>"navTree_indent"+e,scroll(e){this.animateTo(this.getTop(this.domHead[e],0))},animateTo(e){e=this.checkOverBottom(e),window.removeEventListener("scroll",this.realScroll);let t=document.documentElement.scrollTop||document.body.scrollTop;const n=()=>{const r=e-t;t+=r/5,Math.abs(r)<2?(window.scrollTo(0,e),window.addEventListener("scroll",this.realScroll)):(window.scrollTo(0,t),requestAnimationFrame(n))};n()},checkOverBottom(e){const t=document.getElementById("app"),n=(t.offsetHeight||t.clientHeight)-window.innerHeight;return e>n?n:e}}};var c=n(3744);const h=(0,c.Z)(a,[["render",function(e,t,n,o,a,c){return a.navTreeArr.length>1?((0,r.wg)(),(0,r.iD)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.navTreeArr,((e,t)=>((0,r.wg)(),(0,r.iD)("p",{key:t,class:(0,l.C_)([c.getClass(e.level),t===a.currentIndex?"active":""]),onClick:e=>c.scroll(t)},(0,l.zw)(e.text),11,s)))),128))],512)):(0,r.kq)("",!0)}],["__scopeId","data-v-57bf1616"]]),d={components:{Layout:o.Z,NavTree:h}},m=(0,c.Z)(d,[["render",function(e,t,n,o,l,i){const s=(0,r.up)("NavTree"),a=(0,r.up)("Layout",!0);return(0,r.wg)(),(0,r.j4)(a,null,{"page-bottom":(0,r.w5)((()=>[(0,r.Wm)(s,{id:"navTree"})])),_:1})}]])}}]);