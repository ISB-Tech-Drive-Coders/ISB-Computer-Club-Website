import{S as l,i as c,s as d,e as m,T as u,c as h,d as o,b as r,K as p,n as i}from"../chunks/index-b679d4ad.js";function f(s){let t,e;return document.title=t="Error "+s[0].split(":").shift(),{c(){e=m("meta"),this.h()},l(n){const a=u('[data-svelte="svelte-15j5ugm"]',document.head);e=h(a,"META",{name:!0,content:!0}),a.forEach(o),this.h()},h(){r(e,"name","description"),r(e,"content","Svelte demo app")},m(n,a){p(document.head,e)},p(n,[a]){a&1&&t!==(t="Error "+n[0].split(":").shift())&&(document.title=t)},i,o:i,d(n){o(e)}}}function v({error:s,status:t}){return{props:{title:`${t}: ${s.message}`}}}function _(s,t,e){let{title:n}=t;return s.$$set=a=>{"title"in a&&e(0,n=a.title)},[n]}class E extends l{constructor(t){super(),c(this,t,_,f,d,{title:0})}}export{E as default,v as load};