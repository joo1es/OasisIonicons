var nt=Object.defineProperty,st=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var Ve=(s,e,t)=>e in s?nt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,x=(s,e)=>{for(var t in e||(e={}))qe.call(e,t)&&Ve(s,t,e[t]);if(de)for(var t of de(e))ze.call(e,t)&&Ve(s,t,e[t]);return s},re=(s,e)=>st(s,rt(e));var Je=(s,e)=>{var t={};for(var r in s)qe.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&de)for(var r of de(s))e.indexOf(r)<0&&ze.call(s,r)&&(t[r]=s[r]);return t};import{s as et,n as ve,S as it,i as at,e as ot,c as ct,a as lt,d as V,b as $e,f as B,g as q,t as ft,h as ut,j as dt,k as pt,l as I,m as ht,o as G,p as T,q as M,r as C,u as _t,v as mt,w as Re,x as z,y as ae,z as J,A as oe,B as ce,C as K,D as le,E as Ke}from"./chunks/index-193874f1.js";import{i as gt,s as wt,a as bt}from"./chunks/singletons-1b661bce.js";const H=[];function pe(s,e=ve){let t;const r=new Set;function l(n){if(et(s,n)&&(s=n,t)){const i=!H.length;for(const a of r)a[1](),H.push(a,s);if(i){for(let a=0;a<H.length;a+=2)H[a][0](H[a+1]);H.length=0}}}function c(n){l(n(s))}function f(n,i=ve){const a=[n,i];return r.add(a),r.size===1&&(t=e(l)||ve),n(s),()=>{r.delete(a),r.size===0&&(t(),t=null)}}return{set:l,update:c,subscribe:f}}function yt(s){let e,t,r;const l=[s[1]||{}];var c=s[0][0];function f(n){let i={};for(let a=0;a<l.length;a+=1)i=le(i,l[a]);return{props:i}}return c&&(e=new c(f())),{c(){e&&z(e.$$.fragment),t=I()},l(n){e&&ae(e.$$.fragment,n),t=I()},m(n,i){e&&J(e,n,i),q(n,t,i),r=!0},p(n,i){const a=i&2?oe(l,[ce(n[1]||{})]):{};if(c!==(c=n[0][0])){if(e){G();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),M()}c?(e=new c(f()),z(e.$$.fragment),C(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){r||(e&&C(e.$$.fragment,n),r=!0)},o(n){e&&T(e.$$.fragment,n),r=!1},d(n){n&&V(t),e&&K(e,n)}}}function vt(s){let e,t,r;const l=[s[1]||{}];var c=s[0][0];function f(n){let i={$$slots:{default:[Rt]},$$scope:{ctx:n}};for(let a=0;a<l.length;a+=1)i=le(i,l[a]);return{props:i}}return c&&(e=new c(f(s))),{c(){e&&z(e.$$.fragment),t=I()},l(n){e&&ae(e.$$.fragment,n),t=I()},m(n,i){e&&J(e,n,i),q(n,t,i),r=!0},p(n,i){const a=i&2?oe(l,[ce(n[1]||{})]):{};if(i&525&&(a.$$scope={dirty:i,ctx:n}),c!==(c=n[0][0])){if(e){G();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),M()}c?(e=new c(f(n)),z(e.$$.fragment),C(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){r||(e&&C(e.$$.fragment,n),r=!0)},o(n){e&&T(e.$$.fragment,n),r=!1},d(n){n&&V(t),e&&K(e,n)}}}function $t(s){let e,t,r;const l=[s[2]||{}];var c=s[0][1];function f(n){let i={};for(let a=0;a<l.length;a+=1)i=le(i,l[a]);return{props:i}}return c&&(e=new c(f())),{c(){e&&z(e.$$.fragment),t=I()},l(n){e&&ae(e.$$.fragment,n),t=I()},m(n,i){e&&J(e,n,i),q(n,t,i),r=!0},p(n,i){const a=i&4?oe(l,[ce(n[2]||{})]):{};if(c!==(c=n[0][1])){if(e){G();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),M()}c?(e=new c(f()),z(e.$$.fragment),C(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){r||(e&&C(e.$$.fragment,n),r=!0)},o(n){e&&T(e.$$.fragment,n),r=!1},d(n){n&&V(t),e&&K(e,n)}}}function Et(s){let e,t,r;const l=[s[2]||{}];var c=s[0][1];function f(n){let i={$$slots:{default:[kt]},$$scope:{ctx:n}};for(let a=0;a<l.length;a+=1)i=le(i,l[a]);return{props:i}}return c&&(e=new c(f(s))),{c(){e&&z(e.$$.fragment),t=I()},l(n){e&&ae(e.$$.fragment,n),t=I()},m(n,i){e&&J(e,n,i),q(n,t,i),r=!0},p(n,i){const a=i&4?oe(l,[ce(n[2]||{})]):{};if(i&521&&(a.$$scope={dirty:i,ctx:n}),c!==(c=n[0][1])){if(e){G();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),M()}c?(e=new c(f(n)),z(e.$$.fragment),C(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){r||(e&&C(e.$$.fragment,n),r=!0)},o(n){e&&T(e.$$.fragment,n),r=!1},d(n){n&&V(t),e&&K(e,n)}}}function kt(s){let e,t,r;const l=[s[3]||{}];var c=s[0][2];function f(n){let i={};for(let a=0;a<l.length;a+=1)i=le(i,l[a]);return{props:i}}return c&&(e=new c(f())),{c(){e&&z(e.$$.fragment),t=I()},l(n){e&&ae(e.$$.fragment,n),t=I()},m(n,i){e&&J(e,n,i),q(n,t,i),r=!0},p(n,i){const a=i&8?oe(l,[ce(n[3]||{})]):{};if(c!==(c=n[0][2])){if(e){G();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),M()}c?(e=new c(f()),z(e.$$.fragment),C(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else c&&e.$set(a)},i(n){r||(e&&C(e.$$.fragment,n),r=!0)},o(n){e&&T(e.$$.fragment,n),r=!1},d(n){n&&V(t),e&&K(e,n)}}}function Rt(s){let e,t,r,l;const c=[Et,$t],f=[];function n(i,a){return i[0][2]?0:1}return e=n(s),t=f[e]=c[e](s),{c(){t.c(),r=I()},l(i){t.l(i),r=I()},m(i,a){f[e].m(i,a),q(i,r,a),l=!0},p(i,a){let d=e;e=n(i),e===d?f[e].p(i,a):(G(),T(f[d],1,1,()=>{f[d]=null}),M(),t=f[e],t?t.p(i,a):(t=f[e]=c[e](i),t.c()),C(t,1),t.m(r.parentNode,r))},i(i){l||(C(t),l=!0)},o(i){T(t),l=!1},d(i){f[e].d(i),i&&V(r)}}}function Be(s){let e,t=s[5]&&We(s);return{c(){e=ot("div"),t&&t.c(),this.h()},l(r){e=ct(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=lt(e);t&&t.l(l),l.forEach(V),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(r,l){q(r,e,l),t&&t.m(e,null)},p(r,l){r[5]?t?t.p(r,l):(t=We(r),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(r){r&&V(e),t&&t.d()}}}function We(s){let e;return{c(){e=ft(s[6])},l(t){e=ut(t,s[6])},m(t,r){q(t,e,r)},p(t,r){r&64&&dt(e,t[6])},d(t){t&&V(e)}}}function Lt(s){let e,t,r,l,c;const f=[vt,yt],n=[];function i(d,S){return d[0][1]?0:1}e=i(s),t=n[e]=f[e](s);let a=s[4]&&Be(s);return{c(){t.c(),r=pt(),a&&a.c(),l=I()},l(d){t.l(d),r=ht(d),a&&a.l(d),l=I()},m(d,S){n[e].m(d,S),q(d,r,S),a&&a.m(d,S),q(d,l,S),c=!0},p(d,[S]){let k=e;e=i(d),e===k?n[e].p(d,S):(G(),T(n[k],1,1,()=>{n[k]=null}),M(),t=n[e],t?t.p(d,S):(t=n[e]=f[e](d),t.c()),C(t,1),t.m(r.parentNode,r)),d[4]?a?a.p(d,S):(a=Be(d),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},i(d){c||(C(t),c=!0)},o(d){T(t),c=!1},d(d){n[e].d(d),d&&V(r),a&&a.d(d),d&&V(l)}}}function St(s,e,t){let{stores:r}=e,{page:l}=e,{components:c}=e,{props_0:f=null}=e,{props_1:n=null}=e,{props_2:i=null}=e;_t("__svelte__",r),mt(r.page.notify);let a=!1,d=!1,S=null;return Re(()=>{const k=r.page.subscribe(()=>{a&&(t(5,d=!0),t(6,S=document.title||"untitled page"))});return t(4,a=!0),k}),s.$$set=k=>{"stores"in k&&t(7,r=k.stores),"page"in k&&t(8,l=k.page),"components"in k&&t(0,c=k.components),"props_0"in k&&t(1,f=k.props_0),"props_1"in k&&t(2,n=k.props_1),"props_2"in k&&t(3,i=k.props_2)},s.$$.update=()=>{s.$$.dirty&384&&r.page.set(l)},[c,f,n,i,a,d,S,r,l]}class Ut extends it{constructor(e){super(),at(this,e,St,Lt,et,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const At="modulepreload",Ye={},Ot="/OasisIonicons/_app/immutable/",Z=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${Ot}${r}`,r in Ye)return;Ye[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":At,l||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),l)return new Promise((n,i)=>{f.addEventListener("load",n),f.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Pt={},he=[()=>Z(()=>import("./pages/__layout.svelte-c8970327.js"),["pages/__layout.svelte-c8970327.js","assets/pages/__layout.svelte-e8aba412.css","chunks/index-193874f1.js","chunks/singletons-1b661bce.js"]),()=>Z(()=>import("./error.svelte-06d9d23c.js"),["error.svelte-06d9d23c.js","chunks/index-193874f1.js"]),()=>Z(()=>import("./pages/components/icon/demo/basic.md-b1746536.js"),["pages/components/icon/demo/basic.md-b1746536.js","chunks/index-193874f1.js","chunks/Add-71d8c1b3.js","assets/Add-6a613f34.css"]),()=>Z(()=>import("./pages/components/icon/index.md-251607af.js"),["pages/components/icon/index.md-251607af.js","chunks/index-193874f1.js","pages/components/icon/demo/basic.md-b1746536.js","chunks/Add-71d8c1b3.js","assets/Add-6a613f34.css"]),()=>Z(()=>import("./pages/index.svelte-2f7f163a.js"),["pages/index.svelte-2f7f163a.js","assets/pages/index.svelte-6e4a67ff.css","chunks/index-193874f1.js","chunks/Add-71d8c1b3.js","assets/Add-6a613f34.css"]),()=>Z(()=>import("./pages/quickstart.md-5081bb08.js"),["pages/quickstart.md-5081bb08.js","chunks/index-193874f1.js"])],Nt={"":[[0,4],[1]],quickstart:[[0,5],[1]],"components/icon":[[0,3],[1]],"components/icon/demo/basic":[[0,2],[1]]};function Ge(s){return s instanceof Error||s&&s.name&&s.message?s:new Error(JSON.stringify(s))}function Me(s){if(s.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in s)throw new Error("maxage should be replaced with cache: { maxage }");const e=s.status&&s.status>=400&&s.status<=599&&!s.redirect;if(s.error||e){const t=s.status;if(!s.error&&e)return{status:t||500,error:new Error};const r=typeof s.error=="string"?new Error(s.error):s.error;return r instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:r}):{status:t,error:r}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof r}"`)}}if(s.redirect){if(!s.status||Math.floor(s.status/100)!==3)throw new Error('"redirect" property returned from load() must be accompanied by a 3xx status code');if(typeof s.redirect!="string")throw new Error('"redirect" property returned from load() must be a string')}if(s.dependencies&&(!Array.isArray(s.dependencies)||s.dependencies.some(t=>typeof t!="string")))throw new Error('"dependencies" property returned from load() must be of type string[]');if(s.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return s}function xt(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function Fe(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function Le(){return{x:pageXOffset,y:pageYOffset}}function Xe(s){return s.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function He(s){return s instanceof SVGAElement?new URL(s.href.baseVal,document.baseURI):new URL(s.href)}function Ze(s){const e=pe(s);let t=!0;function r(){t=!0,e.update(f=>f)}function l(f){t=!1,e.set(f)}function c(f){let n;return e.subscribe(i=>{(n===void 0||t&&i!==n)&&f(n=i)})}return{notify:r,set:l,subscribe:c}}function It(){const{set:s,subscribe:e}=pe(!1),t="1653981951201";let r;async function l(){clearTimeout(r);const f=await fetch(`${bt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(f.ok){const{version:n}=await f.json(),i=n!==t;return i&&(s(!0),clearTimeout(r)),i}else throw new Error(`Version check failed: ${f.status}`)}return{subscribe:e,check:l}}function Tt(s){let e=5381,t=s.length;if(typeof s=="string")for(;t;)e=e*33^s.charCodeAt(--t);else for(;t;)e=e*33^s[--t];return(e>>>0).toString(36)}const Se=window.fetch;function Ct(s,e){let r=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(r+=`[sveltekit\\:data-body="${Tt(e.body)}"]`);const l=document.querySelector(r);if(l&&l.textContent){const c=JSON.parse(l.textContent),{body:f}=c,n=Je(c,["body"]);return Promise.resolve(new Response(f,n))}return Se(s,e)}const Dt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function jt(s){const e=[],t=[];let r=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${decodeURIComponent(s).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((c,f,n)=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(i)return e.push(i[1]),t.push(i[2]),"(?:/(.*))?";const a=f===n.length-1;return c&&"/"+c.split(/\[(.+?)\]/).map((d,S)=>{if(S%2){const[,k,Q,F]=Dt.exec(d);return e.push(Q),t.push(F),k?"(.*?)":"([^/]+?)"}return a&&d.includes(".")&&(r=!1),d.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${r?"/?":""}$`),names:e,types:t}}function Vt(s,e,t,r){const l={};for(let c=0;c<e.length;c+=1){const f=e[c],n=t[c],i=s[c+1]||"";if(n){const a=r[n];if(!a)throw new Error(`Missing "${n}" param matcher`);if(!a(i))return}l[f]=i}return l}function qt(s,e,t){return Object.entries(e).map(([l,[c,f,n]])=>{const{pattern:i,names:a,types:d}=jt(l);return{id:l,exec:S=>{const k=i.exec(S);if(k)return Vt(k,a,d,t)},a:c.map(S=>s[S]),b:f.map(S=>s[S]),has_shadow:!!n}})}const tt="sveltekit:scroll",W="sveltekit:index",Ee=qt(he,Nt,Pt),zt=he[0](),Jt=he[1](),Qe={};let ie={};try{ie=JSON.parse(sessionStorage[tt])}catch{}function ke(s){ie[s]=Le()}function Kt({target:s,session:e,base:t,trailing_slash:r}){var De;const l=new Map,c=[],f={url:Ze({}),page:Ze({}),navigating:pe(null),session:pe(e),updated:It()},n={id:null,promise:null},i={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,session_id:0,stuff:Qe,url:null},d=!1,S=!0,k=!1,Q=1,F=null,Ue,Ae,Oe=!1;f.session.subscribe(async o=>{Ae=o,Oe&&(Q+=1,we(new URL(location.href),[],!0))}),Oe=!0;let X=!0,D=(De=history.state)==null?void 0:De[W];D||(D=Date.now(),history.replaceState(re(x({},history.state),{[W]:D}),"",location.href));const _e=ie[D];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let me=!1,ge,Pe;async function Ne(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:u=!1,state:h={}},w){const $=new URL(o,Fe(document));if(X)return ye({url:$,scroll:p?Le():null,keepfocus:u,redirect_chain:w,details:{state:h,replaceState:g},accepted:()=>{},blocked:()=>{}});await ne($)}async function xe(o){const p=Ce(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n.promise=Te(p,!1),n.id=p.id,n.promise}async function we(o,p,g,u,h){var R,U,A;const w=Ce(o),$=Pe={};let _=w&&await Te(w,g);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await te({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await ne(o),!1;if(Pe!==$)return!1;if(c.length=0,_.redirect)if(p.length>10||p.includes(o.pathname))_=await te({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return X?Ne(new URL(_.redirect,o).href,{},[...p,o.pathname]):await ne(new URL(_.redirect,location.href)),!1;else((U=(R=_.props)==null?void 0:R.page)==null?void 0:U.status)>=400&&await f.updated.check()&&await ne(o);if(k=!0,u&&u.details){const{details:y}=u,v=y.replaceState?0:1;y.state[W]=D+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(d?(a=_.state,_.props.page&&(_.props.page.url=o),Ue.$set(_.props)):Ie(_),u){const{scroll:y,keepfocus:v}=u;if(!v){const b=document.body,E=b.getAttribute("tabindex");(A=getSelection())==null||A.removeAllRanges(),b.tabIndex=-1,b.focus({preventScroll:!0}),E!==null?b.setAttribute("tabindex",E):b.removeAttribute("tabindex")}if(await Ke(),S){const b=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):b?b.scrollIntoView():scrollTo(0,0)}}else await Ke();n.promise=null,n.id=null,S=!0,_.props.page&&(ge=_.props.page);const m=_.state.branch[_.state.branch.length-1];X=(m==null?void 0:m.module.router)!==!1,h&&h(),k=!1}function Ie(o){a=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),ge=o.props.page,Ue=new Ut({target:s,props:re(x({},o.props),{stores:f}),hydrate:!0}),X){const g={from:null,to:new URL(location.href)};i.after_navigate.forEach(u=>u(g))}d=!0}async function be({url:o,params:p,stuff:g,branch:u,status:h,error:w,routeId:$}){var v,b;const _=u.filter(Boolean),m=_.find(E=>{var O;return(O=E.loaded)==null?void 0:O.redirect}),R={redirect:(v=m==null?void 0:m.loaded)==null?void 0:v.redirect,state:{url:o,params:p,branch:u,error:w,stuff:g,session_id:Q},props:{components:_.map(E=>E.module.default)}};for(let E=0;E<_.length;E+=1){const O=_[E].loaded;R.props[`props_${E}`]=O?await O.props:null}if(!a.url||o.href!==a.url.href||a.error!==w||a.stuff!==g){R.props.page={error:w,params:p,routeId:$,status:h,stuff:g,url:o};const E=(O,L)=>{Object.defineProperty(R.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${L}`)}})};E("origin","origin"),E("path","pathname"),E("query","searchParams")}const A=_[_.length-1],y=(b=A==null?void 0:A.loaded)==null?void 0:b.cache;if(y){const E=o.pathname+o.search;let O=!1;const L=()=>{l.get(E)===R&&l.delete(E),N(),clearTimeout(P)},P=setTimeout(L,y.maxage*1e3),N=f.session.subscribe(()=>{O&&L()});O=!0,l.set(E,R)}return R}async function ee({status:o,error:p,module:g,url:u,params:h,stuff:w,props:$,routeId:_}){const m={module:g,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:w};function R(y){const{href:v}=new URL(y,u);m.uses.dependencies.add(v)}$&&m.uses.dependencies.add(u.href);const U={};for(const y in h)Object.defineProperty(U,y,{get(){return m.uses.params.add(y),h[y]},enumerable:!0});const A=Ae;if(g.load){const y={routeId:_,params:U,props:$||{},get url(){return m.uses.url=!0,new Proxy(u,{get:(b,E)=>{if(E==="hash")throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.");return Reflect.get(b,E,b)}})},get session(){return m.uses.session=!0,A},get stuff(){return m.uses.stuff=!0,x({},w)},async fetch(b,E){let O;typeof b=="string"?O=b:(O=b.url,E=x({body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal},E));const L=new URL(O,u).href;return R(L),d?Se(L,E):Ct(O,E)},status:o!=null?o:null,error:p!=null?p:null};let v;if(v=await g.load.call(null,y),!v)throw new Error("load function must return a value");m.loaded=Me(v),m.loaded.stuff&&(m.stuff=m.loaded.stuff),m.loaded.dependencies&&m.loaded.dependencies.forEach(R)}else $&&(m.loaded=Me({props:$}));return m}async function Te({id:o,url:p,params:g,route:u},h){var b,E,O;if(n.id===o&&n.promise)return n.promise;if(!h){const L=l.get(o);if(L)return L}const{a:w,b:$,has_shadow:_}=u,m=a.url&&{url:o!==a.url.pathname+a.url.search,params:Object.keys(g).filter(L=>a.params[L]!==g[L]),session:Q!==a.session_id};let R=[],U=Qe,A=!1,y=200,v=null;w.forEach(L=>L().catch(()=>{}));e:for(let L=0;L<w.length;L+=1){let P;try{if(!w[L])continue;const N=await w[L](),j=a.branch[L];if(!j||N!==j.module||m.url&&j.uses.url||m.params.some(Y=>j.uses.params.has(Y))||m.session&&j.uses.session||Array.from(j.uses.dependencies).some(Y=>c.some(ue=>ue(Y)))||A&&j.uses.stuff){let Y={};const ue=_&&L===w.length-1;if(ue){const se=await Se(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-load":"true"}});if(se.ok){const je=se.headers.get("x-sveltekit-location");if(je)return{redirect:je,props:{},state:a};Y=se.status===204?{}:await se.json()}else y=se.status,v=new Error("Failed to load data")}if(v||(P=await ee({module:N,url:p,params:g,props:Y,stuff:U,routeId:u.id})),P&&(ue&&(P.uses.url=!0),P.loaded)){if(P.loaded.error&&(y=P.loaded.status,v=P.loaded.error),P.loaded.redirect)return{redirect:P.loaded.redirect,props:{},state:a};P.loaded.stuff&&(A=!0)}}else P=j}catch(N){y=500,v=Ge(N)}if(v){for(;L--;)if($[L]){let N,j,fe=L;for(;!(j=R[fe]);)fe-=1;try{if(N=await ee({status:y,error:v,module:await $[L](),url:p,params:g,stuff:j.stuff,routeId:u.id}),(b=N==null?void 0:N.loaded)!=null&&b.error)continue;(E=N==null?void 0:N.loaded)!=null&&E.stuff&&(U=x(x({},U),N.loaded.stuff)),R=R.slice(0,fe+1).concat(N);break e}catch{continue}}return await te({status:y,error:v,url:p,routeId:u.id})}else(O=P==null?void 0:P.loaded)!=null&&O.stuff&&(U=x(x({},U),P.loaded.stuff)),R.push(P)}return await be({url:p,params:g,stuff:U,branch:R,status:y,error:v,routeId:u.id})}async function te({status:o,error:p,url:g,routeId:u}){var _,m;const h={},w=await ee({module:await zt,url:g,params:h,stuff:{},routeId:u}),$=await ee({status:o,error:p,module:await Jt,url:g,params:h,stuff:w&&w.loaded&&w.loaded.stuff||{},routeId:u});return await be({url:g,params:h,stuff:x(x({},(_=w==null?void 0:w.loaded)==null?void 0:_.stuff),(m=$==null?void 0:$.loaded)==null?void 0:m.stuff),branch:[w,$],status:o,error:p,routeId:u})}function Ce(o){if(o.origin!==location.origin||!o.pathname.startsWith(t))return;const p=decodeURI(o.pathname.slice(t.length)||"/");for(const g of Ee){const u=g.exec(p);if(u)return{id:o.pathname+o.search,route:g,params:u,url:o}}}async function ye({url:o,scroll:p,keepfocus:g,redirect_chain:u,details:h,accepted:w,blocked:$}){const _=a.url;let m=!1;const R={from:_,to:o,cancel:()=>m=!0};if(i.before_navigate.forEach(y=>y(R)),m){$();return}const U=xt(o.pathname,r),A=new URL(o.origin+U+o.search+o.hash);ke(D),w(),d&&f.navigating.set({from:a.url,to:A}),await we(A,u,!1,{scroll:p,keepfocus:g,details:h},()=>{const y={from:_,to:A};i.after_navigate.forEach(v=>v(y)),f.navigating.set(null)})}function ne(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{Re(()=>(i.after_navigate.push(o),()=>{const p=i.after_navigate.indexOf(o);i.after_navigate.splice(p,1)}))},before_navigate:o=>{Re(()=>(i.before_navigate.push(o),()=>{const p=i.before_navigate.indexOf(o);i.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(k||!d)&&(S=!1)},goto:(o,p={})=>Ne(o,p,[]),invalidate:o=>{if(typeof o=="function")c.push(o);else{const{href:p}=new URL(o,location.href);c.push(g=>g===p)}return F||(F=Promise.resolve().then(async()=>{await we(new URL(location.href),[],!0),F=null})),F},prefetch:async o=>{const p=new URL(o,Fe(document));await xe(p)},prefetch_routes:async o=>{const g=(o?Ee.filter(u=>o.some(h=>u.exec(h))):Ee).map(u=>Promise.all(u.a.map(h=>h())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let h=!1;const w={from:a.url,to:null,cancel:()=>h=!0};i.before_navigate.forEach($=>$(w)),h?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(D);try{sessionStorage[tt]=JSON.stringify(ie)}catch{}}});const o=u=>{const h=Xe(u);h&&h.href&&h.hasAttribute("sveltekit:prefetch")&&xe(He(h))};let p;const g=u=>{clearTimeout(p),p=setTimeout(()=>{var h;(h=u.target)==null||h.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",u=>{if(!X||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const h=Xe(u);if(!h||!h.href)return;const w=h instanceof SVGAElement,$=He(h);if(!w&&$.origin==="null")return;const _=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||_.includes("external")||h.hasAttribute("sveltekit:reload")||(w?h.target.baseVal:h.target))return;const[m,R]=$.href.split("#");if(R!==void 0&&m===location.href.split("#")[0]){me=!0,ke(D),f.page.set(re(x({},ge),{url:$})),f.page.notify();return}ye({url:$,scroll:h.hasAttribute("sveltekit:noscroll")?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:$.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&X){if(u.state[W]===D)return;ye({url:new URL(location.href),scroll:ie[u.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{D=u.state[W]},blocked:()=>{const h=D-u.state[W];history.go(h)}})}}),addEventListener("hashchange",()=>{me&&(me=!1,history.replaceState(re(x({},history.state),{[W]:++D}),"",location.href))})},_hydrate:async({status:o,error:p,nodes:g,params:u,routeId:h})=>{const w=new URL(location.href),$=[];let _={},m,R;try{for(let U=0;U<g.length;U+=1){const A=U===g.length-1;let y;if(A){const b=document.querySelector('script[sveltekit\\:data-type="props"]');b&&(y=JSON.parse(b.textContent))}const v=await ee({module:await he[g[U]](),url:w,params:u,stuff:_,status:A?o:void 0,error:A?p:void 0,props:y,routeId:h});if(y&&(v.uses.dependencies.add(w.href),v.uses.url=!0),$.push(v),v&&v.loaded)if(v.loaded.error){if(p)throw v.loaded.error;R={status:v.loaded.status,error:v.loaded.error,url:w,routeId:h}}else v.loaded.stuff&&(_=x(x({},_),v.loaded.stuff))}m=R?await te(R):await be({url:w,params:u,stuff:_,branch:$,status:o,error:p,routeId:h})}catch(U){if(p)throw U;m=await te({status:500,error:Ge(U),url:w,routeId:h})}m.redirect&&await ne(new URL(m.redirect,location.href)),Ie(m)}}}async function Gt({paths:s,target:e,session:t,route:r,spa:l,trailing_slash:c,hydrate:f}){const n=Kt({target:e,session:t,base:s.base,trailing_slash:c});gt({client:n}),wt(s),f&&await n._hydrate(f),r&&(l&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Gt as start};
