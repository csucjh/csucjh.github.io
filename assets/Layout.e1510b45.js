var Ee=Object.defineProperty,He=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ve=(n,e,t)=>e in n?Ee(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,X=(n,e)=>{for(var t in e||(e={}))Ae.call(e,t)&&ve(n,t,e[t]);if(he)for(var t of he(e))Me.call(e,t)&&ve(n,t,e[t]);return n},Y=(n,e)=>He(n,Ne(e));import{r as A,o as l,b as d,f as k,d as T,i as P,j as _,k as pe,g as a,F as E,l as M,e as b,t as C,m as L,n as W,p as J,q as x,w as B,s as _e,v as w,h as j,x as U,y as De,z as Ie,A as Pe,B as Q,C as Z,D,E as q,G as me,H as fe,u as ge,a as H,T as be,I as O,J as Re,K as V,L as G,M as Oe,N as ze,O as ee,P as ke,Q as ye,c as Fe,R as $e,S as We,U as K,V as te,W as je,X as Ue,Y as qe}from"./app.ad394294.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";const Ve={},Ge={class:"theme-default-content custom"};function Ke(n,e){const t=A("Content");return l(),d("div",Ge,[k(t)])}var Xe=ne(Ve,[["render",Ke]]);const Ye={key:0,class:"features"},Je=T({setup(n){const e=P(),t=_(()=>pe(e.value.features)?e.value.features:[]);return(r,s)=>a(t).length?(l(),d("div",Ye,[(l(!0),d(E,null,M(a(t),p=>(l(),d("div",{key:p.title,class:"feature"},[b("h2",null,C(p.title),1),b("p",null,C(p.details),1)]))),128))])):L("",!0)}}),Qe=["innerHTML"],Ze=["textContent"],et=T({setup(n){const e=P(),t=_(()=>e.value.footer),r=_(()=>e.value.footerHtml);return(s,p)=>a(t)?(l(),d(E,{key:0},[a(r)?(l(),d("div",{key:0,class:"footer",innerHTML:a(t)},null,8,Qe)):(l(),d("div",{key:1,class:"footer",textContent:C(a(t))},null,8,Ze))],64)):L("",!0)}}),tt=["href","rel","target","aria-label"],nt=T({inheritAttrs:!1}),I=T(Y(X({},nt),{props:{item:{type:Object,required:!0}},setup(n){const e=n,t=W(),r=Pe(),{item:s}=J(e),p=_(()=>U(s.value.link)),m=_(()=>De(s.value.link)||Ie(s.value.link)),h=_(()=>{if(!m.value){if(s.value.target)return s.value.target;if(p.value)return"_blank"}}),o=_(()=>h.value==="_blank"),i=_(()=>!p.value&&!m.value&&!o.value),u=_(()=>{if(!m.value){if(s.value.rel)return s.value.rel;if(o.value)return"noopener noreferrer"}}),c=_(()=>s.value.ariaLabel||s.value.text),v=_(()=>{const $=Object.keys(r.value.locales);return $.length?!$.some(f=>f===s.value.link):s.value.link!=="/"}),g=_(()=>v.value?t.path.startsWith(s.value.link):!1),y=_(()=>i.value?s.value.activeMatch?new RegExp(s.value.activeMatch).test(t.path):g.value:!1);return($,f)=>{const S=A("RouterLink"),N=A("ExternalLinkIcon");return a(i)?(l(),x(S,_e({key:0,class:{"router-link-active":a(y)},to:a(s).link,"aria-label":a(c)},$.$attrs),{default:B(()=>[w($.$slots,"before"),j(" "+C(a(s).text)+" ",1),w($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(l(),d("a",_e({key:1,class:"external-link",href:a(s).link,rel:a(u),target:a(h),"aria-label":a(c)},$.$attrs),[w($.$slots,"before"),j(" "+C(a(s).text)+" ",1),a(o)?(l(),x(N,{key:0})):L("",!0),w($.$slots,"after")],16,tt))}}})),at={class:"hero"},st={key:0,id:"main-title"},rt={key:1,class:"description"},ot={key:2,class:"actions"},lt=T({setup(n){const e=P(),t=Q(),r=Z(),s=_(()=>r.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),p=_(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),m=_(()=>e.value.heroAlt||p.value||"hero"),h=_(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),o=_(()=>pe(e.value.actions)?e.value.actions.map(({text:u,link:c,type:v="primary"})=>({text:u,link:c,type:v})):[]),i=()=>{if(!s.value)return null;const u=q("img",{src:me(s.value),alt:m.value});return e.value.heroImageDark===void 0?u:q(fe,u)};return(u,c)=>(l(),d("header",at,[k(i),a(p)?(l(),d("h1",st,C(a(p)),1)):L("",!0),a(h)?(l(),d("p",rt,C(a(h)),1)):L("",!0),a(o).length?(l(),d("p",ot,[(l(!0),d(E,null,M(a(o),v=>(l(),x(I,{key:v.text,class:D(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):L("",!0)]))}}),it={class:"home"},ut=T({setup(n){return(e,t)=>(l(),d("main",it,[k(lt),k(Je),k(Xe),k(et)]))}}),ct=T({setup(n){const e=ge(),t=Q(),r=H(),s=Z(),p=_(()=>r.value.home||e.value),m=_(()=>t.value.title),h=_(()=>s.value&&r.value.logoDark!==void 0?r.value.logoDark:r.value.logo),o=()=>{if(!h.value)return null;const i=q("img",{class:"logo",src:me(h.value),alt:m.value});return r.value.logoDark===void 0?i:q(fe,i)};return(i,u)=>{const c=A("RouterLink");return l(),x(c,{to:a(p)},{default:B(()=>[k(o),a(m)?(l(),d("span",{key:0,class:D(["site-name",{"can-hide":a(h)}])},C(a(m)),3)):L("",!0)]),_:1},8,["to"])}}}),Le=T({setup(n){const e=r=>{r.style.height=r.scrollHeight+"px"},t=r=>{r.style.height=""};return(r,s)=>(l(),x(be,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:B(()=>[w(r.$slots,"default")]),_:3}))}}),dt=["aria-label"],ht={class:"title"},vt=b("span",{class:"arrow down"},null,-1),pt=["aria-label"],_t={class:"title"},mt={class:"navbar-dropdown"},ft={class:"navbar-dropdown-subtitle"},gt={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},kt=T({props:{item:{type:Object,required:!0}},setup(n){const e=n,{item:t}=J(e),r=_(()=>t.value.ariaLabel||t.value.text),s=O(!1),p=W();Re(()=>p.path,()=>{s.value=!1});const m=o=>{o.detail===0?s.value=!s.value:s.value=!1},h=(o,i)=>i[i.length-1]===o;return(o,i)=>(l(),d("div",{class:D(["navbar-dropdown-wrapper",{open:s.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(r),onClick:m},[b("span",ht,C(a(t).text),1),vt],8,dt),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(r),onClick:i[0]||(i[0]=u=>s.value=!s.value)},[b("span",_t,C(a(t).text),1),b("span",{class:D(["arrow",s.value?"down":"right"])},null,2)],8,pt),k(Le,null,{default:B(()=>[V(b("ul",mt,[(l(!0),d(E,null,M(a(t).children,u=>(l(),d("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(l(),d(E,{key:0},[b("h4",ft,[u.link?(l(),x(I,{key:0,item:u,onFocusout:c=>h(u,a(t).children)&&u.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(l(),d("span",gt,C(u.text),1))]),b("ul",bt,[(l(!0),d(E,null,M(u.children,c=>(l(),d("li",{key:c.link,class:"navbar-dropdown-subitem"},[k(I,{item:c,onFocusout:v=>h(c,u.children)&&h(u,a(t).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(l(),x(I,{key:1,item:u,onFocusout:c=>h(u,a(t).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,s.value]])]),_:1})],2))}}),Te=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),yt=(n,e)=>{if(e.hash===n)return!0;const t=Te(e.path),r=Te(n);return t===r},we=(n,e)=>n.link&&yt(n.link,e)?!0:n.children?n.children.some(t=>we(t,e)):!1,xe=n=>!U(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,$t={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Lt=({docsRepo:n,editLinkPattern:e})=>{if(e)return e;const t=xe(n);return t!==null?$t[t]:null},Tt=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:r,editLinkPattern:s})=>{if(!r)return null;const p=Lt({docsRepo:n,editLinkPattern:s});return p?p.replace(/:repo/,U(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Oe(`${ze(t)}/${r}`)):null},wt={key:0,class:"navbar-items"},Ce=T({setup(n){const e=()=>{const i=ee(),u=ge(),c=Q(),v=H();return _(()=>{var S,N;const g=Object.keys(c.value.locales);if(g.length<2)return[];const y=i.currentRoute.value.path,$=i.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(N=v.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:g.map(R=>{var re,oe,le,ie,ue,ce;const z=(oe=(re=c.value.locales)==null?void 0:re[R])!=null?oe:{},ae=(ie=(le=v.value.locales)==null?void 0:le[R])!=null?ie:{},se=`${z.lang}`,Se=(ue=ae.selectLanguageName)!=null?ue:se;let F;if(se===c.value.lang)F=$;else{const de=y.replace(u.value,R);i.getRoutes().some(Be=>Be.path===de)?F=de:F=(ce=ae.home)!=null?ce:R}return{text:Se,link:F}})}]})},t=()=>{const i=H(),u=_(()=>i.value.repo),c=_(()=>u.value?xe(u.value):null),v=_(()=>u.value&&!U(u.value)?`https://github.com/${u.value}`:u.value),g=_(()=>v.value?i.value.repoLabel?i.value.repoLabel:c.value===null?"Source":c.value:null);return _(()=>!v.value||!g.value?[]:[{text:g.value,link:v.value}])},r=i=>ke(i)?ye(i):i.children?Y(X({},i),{children:i.children.map(r)}):i,p=(()=>{const i=H();return _(()=>(i.value.navbar||[]).map(r))})(),m=e(),h=t(),o=_(()=>[...p.value,...m.value,...h.value]);return(i,u)=>a(o).length?(l(),d("nav",wt,[(l(!0),d(E,null,M(a(o),c=>(l(),d("div",{key:c.text,class:"navbar-item"},[c.children?(l(),x(kt,{key:0,item:c},null,8,["item"])):(l(),x(I,{key:1,item:c},null,8,["item"]))]))),128))])):L("",!0)}}),xt=["title"],Ct={class:"icon",focusable:"false",viewBox:"0 0 32 32"},St=Fe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Bt=[St],Et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ht=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Nt=[Ht],At=T({setup(n){const e=H(),t=Z(),r=()=>{t.value=!t.value};return(s,p)=>(l(),d("button",{class:"toggle-dark-button",title:a(e).toggleDarkMode,onClick:r},[V((l(),d("svg",Ct,Bt,512)),[[G,!a(t)]]),V((l(),d("svg",Et,Nt,512)),[[G,a(t)]])],8,xt))}}),Mt=["title"],Dt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),It=[Dt],Pt=T({emits:["toggle"],setup(n){const e=H();return(t,r)=>(l(),d("div",{class:"toggle-sidebar-button",title:a(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:r[0]||(r[0]=s=>t.$emit("toggle"))},It,8,Mt))}}),Rt=T({emits:["toggle-sidebar"],setup(n){const e=H(),t=O(null),r=O(null),s=O(0),p=_(()=>s.value?{maxWidth:s.value+"px"}:{}),m=_(()=>e.value.darkMode);$e(()=>{const o=719,i=h(t.value,"paddingLeft")+h(t.value,"paddingRight"),u=()=>{var c;window.innerWidth<=o?s.value=0:s.value=t.value.offsetWidth-i-(((c=r.value)==null?void 0:c.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(o,i){var v,g,y;const u=(y=(g=(v=o==null?void 0:o.ownerDocument)==null?void 0:v.defaultView)==null?void 0:g.getComputedStyle(o,null))==null?void 0:y[i],c=Number.parseInt(u,10);return Number.isNaN(c)?0:c}return(o,i)=>{const u=A("NavbarSearch");return l(),d("header",{ref_key:"navbar",ref:t,class:"navbar"},[k(Pt,{onToggle:i[0]||(i[0]=c=>o.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:r},[k(ct)],512),b("div",{class:"navbar-items-wrapper",style:We(a(p))},[w(o.$slots,"before"),k(Ce,{class:"can-hide"}),w(o.$slots,"after"),a(m)?(l(),x(At,{key:0})):L("",!0),k(u)],4)],512)}}}),Ot={class:"page-meta"},zt={key:0,class:"meta-item edit-link"},Ft={key:1,class:"meta-item last-updated"},Wt={class:"meta-item-label"},jt={class:"meta-item-info"},Ut={key:2,class:"meta-item contributors"},qt={class:"meta-item-label"},Vt={class:"meta-item-info"},Gt=["title"],Kt=j(", "),Xt=T({setup(n){const e=()=>{const o=H(),i=K(),u=P();return _(()=>{var N,R,z;if(!((R=(N=u.value.editLink)!=null?N:o.value.editLink)!=null?R:!0))return null;const{repo:v,docsRepo:g=v,docsBranch:y="main",docsDir:$="",editLinkText:f}=o.value;if(!g)return null;const S=Tt({docsRepo:g,docsBranch:y,docsDir:$,filePathRelative:i.value.filePathRelative,editLinkPattern:(z=u.value.editLinkPattern)!=null?z:o.value.editLinkPattern});return S?{text:f!=null?f:"Edit this page",link:S}:null})},t=()=>{const o=H(),i=K(),u=P();return _(()=>{var g,y,$,f;return!((y=(g=u.value.lastUpdated)!=null?g:o.value.lastUpdated)!=null?y:!0)||!(($=i.value.git)==null?void 0:$.updatedTime)?null:new Date((f=i.value.git)==null?void 0:f.updatedTime).toLocaleString()})},r=()=>{const o=H(),i=K(),u=P();return _(()=>{var v,g,y,$;return((g=(v=u.value.contributors)!=null?v:o.value.contributors)!=null?g:!0)&&($=(y=i.value.git)==null?void 0:y.contributors)!=null?$:null})},s=H(),p=e(),m=t(),h=r();return(o,i)=>{const u=A("ClientOnly");return l(),d("footer",Ot,[a(p)?(l(),d("div",zt,[k(I,{class:"meta-item-label",item:a(p)},null,8,["item"])])):L("",!0),a(m)?(l(),d("div",Ft,[b("span",Wt,C(a(s).lastUpdatedText)+": ",1),k(u,null,{default:B(()=>[b("span",jt,C(a(m)),1)]),_:1})])):L("",!0),a(h)&&a(h).length?(l(),d("div",Ut,[b("span",qt,C(a(s).contributorsText)+": ",1),b("span",Vt,[(l(!0),d(E,null,M(a(h),(c,v)=>(l(),d(E,{key:v},[b("span",{class:"contributor",title:`email: ${c.email}`},C(c.name),9,Gt),v!==a(h).length-1?(l(),d(E,{key:0},[Kt],64)):L("",!0)],64))),128))])])):L("",!0)])}}}),Yt={key:0,class:"page-nav"},Jt={class:"inner"},Qt={key:0,class:"prev"},Zt={key:1,class:"next"},en=T({setup(n){const e=o=>o===!1?null:ke(o)?ye(o):je(o)?o:!1,t=(o,i,u)=>{const c=o.findIndex(v=>v.link===i);if(c!==-1){const v=o[c+u];return(v==null?void 0:v.link)?v:null}for(const v of o)if(v.children){const g=t(v.children,i,u);if(g)return g}return null},r=P(),s=te(),p=W(),m=_(()=>{const o=e(r.value.prev);return o!==!1?o:t(s.value,p.path,-1)}),h=_(()=>{const o=e(r.value.next);return o!==!1?o:t(s.value,p.path,1)});return(o,i)=>a(m)||a(h)?(l(),d("nav",Yt,[b("p",Jt,[a(m)?(l(),d("span",Qt,[k(I,{item:a(m)},null,8,["item"])])):L("",!0),a(h)?(l(),d("span",Zt,[k(I,{item:a(h)},null,8,["item"])])):L("",!0)])])):L("",!0)}}),tn={class:"page"},nn={class:"theme-default-content"},an=T({setup(n){return(e,t)=>{const r=A("Content");return l(),d("main",tn,[w(e.$slots,"top"),b("div",nn,[k(r)]),k(Xt),k(en),w(e.$slots,"bottom")])}}}),sn={class:"sidebar-item-children"},rn=T({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(n){const e=n,{item:t,depth:r}=J(e),s=W(),p=ee(),m=_(()=>we(t.value,s)),h=_(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:m.value,collapsible:t.value.collapsible})),o=O(!0),i=O(void 0);return t.value.collapsible&&(o.value=m.value,i.value=()=>{o.value=!o.value},p.afterEach(()=>{o.value=m.value})),(u,c)=>{var g;const v=A("SidebarItem",!0);return l(),d("li",null,[a(t).link?(l(),x(I,{key:0,class:D(a(h)),item:a(t)},null,8,["class","item"])):(l(),d("p",{key:1,class:D(a(h)),onClick:c[0]||(c[0]=(...y)=>i.value&&i.value(...y))},[j(C(a(t).text)+" ",1),a(t).collapsible?(l(),d("span",{key:0,class:D(["arrow",o.value?"down":"right"])},null,2)):L("",!0)],2)),((g=a(t).children)==null?void 0:g.length)?(l(),x(Le,{key:2},{default:B(()=>[V(b("ul",sn,[(l(!0),d(E,null,M(a(t).children,y=>(l(),x(v,{key:`${a(r)}${y.text}${y.link}`,item:y,depth:a(r)+1},null,8,["item","depth"]))),128))],512),[[G,o.value]])]),_:1})):L("",!0)])}}}),on={key:0,class:"sidebar-items"},ln=T({setup(n){const e=te();return(t,r)=>a(e).length?(l(),d("ul",on,[(l(!0),d(E,null,M(a(e),s=>(l(),x(rn,{key:s.link||s.text,item:s},null,8,["item"]))),128))])):L("",!0)}}),un={class:"sidebar"},cn=T({setup(n){return(e,t)=>(l(),d("aside",un,[k(Ce),w(e.$slots,"top"),k(ln),w(e.$slots,"bottom")]))}}),dn=T({setup(n){const e=K(),t=P(),r=H(),s=_(()=>t.value.navbar!==!1&&r.value.navbar!==!1),p=te(),m=O(!1),h=f=>{m.value=typeof f=="boolean"?f:!m.value},o={x:0,y:0},i=f=>{o.x=f.changedTouches[0].clientX,o.y=f.changedTouches[0].clientY},u=f=>{const S=f.changedTouches[0].clientX-o.x,N=f.changedTouches[0].clientY-o.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&o.x<=80?h(!0):h(!1))},c=_(()=>[{"no-navbar":!s.value,"no-sidebar":!p.value.length,"sidebar-open":m.value},t.value.pageClass]);let v;$e(()=>{v=ee().afterEach(()=>{h(!1)})}),Ue(()=>{v()});const g=qe(),y=g.resolve,$=g.pending;return(f,S)=>(l(),d("div",{class:D(["theme-container",a(c)]),onTouchstart:i,onTouchend:u},[w(f.$slots,"navbar",{},()=>[a(s)?(l(),x(Rt,{key:0,onToggleSidebar:h},{before:B(()=>[w(f.$slots,"navbar-before")]),after:B(()=>[w(f.$slots,"navbar-after")]),_:3})):L("",!0)]),b("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),w(f.$slots,"sidebar",{},()=>[k(cn,null,{top:B(()=>[w(f.$slots,"sidebar-top")]),bottom:B(()=>[w(f.$slots,"sidebar-bottom")]),_:3})]),w(f.$slots,"page",{},()=>[a(t).home?(l(),x(ut,{key:0})):(l(),x(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(y),onBeforeLeave:a($)},{default:B(()=>[(l(),x(an,{key:a(e).path},{top:B(()=>[w(f.$slots,"page-top")]),bottom:B(()=>[w(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});const hn={props:{source:{default:"theme-default-content",type:String}},data(){return{navTreeArr:[],domHead:[],domHeadArray:[],currentIndex:0,realScroll:null,topPadding:-20}},mounted(){this.init(2)},beforeDestroy(){window.removeEventListener("scroll",this.realScroll)},methods:{initScroll(){this.realScroll=this.debouceAndThrotte(this.handleScroll),window.addEventListener("scroll",this.realScroll)},handleScroll(){this.domHeadArray.some((n,e)=>{if(console.log(e),this.checkInScreen(n))return this.currentIndex=e,!0})},debouceAndThrotte(n,e=200,t=666){let r=0,s=null;return function(){const p=new Date().getTime();r===0&&(r=p),p-r<t?(clearTimeout(s),s=setTimeout(()=>{r=p,n()},e)):(r=p,n())}},checkInScreen(n){const e=n.getBoundingClientRect();return e.top>this.topPadding&&e.bottom<window.innerHeight},destroy(){this.navTreeArr=this.domHead=this.domHeadArray=[]},getTop(n,e=0){let t=n.offsetTop,r=n.offsetParent;for(;r!==null;)t+=r.offsetTop,r=r.offsetParent;return e+t},init(n=3){if(this.destroy(),this.container=document.getElementsByClassName(this.source)[0],console.log("navTree init!"),!this.container)return;const e=this.container.getElementsByTagName("h1"),t=this.container.getElementsByTagName("h2"),r=this.container.getElementsByTagName("h3"),s=this.container.getElementsByTagName("h4"),p=this.container.getElementsByTagName("h5"),m=this.container.getElementsByTagName("h6");let h,o,i;if([e,t,r,s,p,m].forEach((c,v)=>{!c.length||(h==null?h="h"+(v+1):o==null?o="h"+(v+1):i==null&&(i="h"+(v+1)))}),!h)return;this.query=[h,o,i].slice(0,n).filter(c=>!!c).join(","),this.domHead=this.container.querySelectorAll(this.query),this.domHeadArray=Array.from(this.domHead);const u={[h]:1,[o]:2,[i]:3};this.domHeadArray.forEach(c=>{this.navTreeArr.push({text:c.innerText.slice(1),level:u[c.tagName.toLowerCase()]})}),this.realScroll||this.initScroll()},getClass(n){return"navTree_indent"+n},scroll(n){this.animateTo(this.getTop(this.domHead[n],0))},animateTo(n){n=this.checkOverBottom(n),window.removeEventListener("scroll",this.realScroll);let e=document.documentElement.scrollTop||document.body.scrollTop;const t=()=>{const r=n-e;e=e+r/5,Math.abs(r)<2?(window.scrollTo(0,n),window.addEventListener("scroll",this.realScroll)):(window.scrollTo(0,e),requestAnimationFrame(t))};t()},checkOverBottom(n){const e=document.getElementById("app"),r=(e.offsetHeight||e.clientHeight)-window.innerHeight;return n>r?r:n}}},vn={key:0,ref:"navTree",class:"navTree"},pn=["onClick"];function _n(n,e,t,r,s,p){return s.navTreeArr.length>1?(l(),d("div",vn,[(l(!0),d(E,null,M(s.navTreeArr,(m,h)=>(l(),d("p",{key:h,class:D([p.getClass(m.level),h===s.currentIndex?"active":""]),onClick:o=>p.scroll(h)},C(m.text),11,pn))),128))],512)):L("",!0)}var mn=ne(hn,[["render",_n],["__scopeId","data-v-2c217d11"]]);const fn={components:{Layout:dn,NavTree:mn}};function gn(n,e,t,r,s,p){const m=A("NavTree"),h=A("Layout",!0);return l(),x(h,null,{"page-bottom":B(()=>[k(m,{id:"navTree"})]),_:1})}var $n=ne(fn,[["render",gn]]);export{$n as default};