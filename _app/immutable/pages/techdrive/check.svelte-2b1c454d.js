import{S as M,i as V,s as G,e as w,k as I,c as m,a as g,d as v,m as b,b as y,g as S,J as f,K as O,t as C,h as W,j as N,n as T,X as R,Y as q,Z as z,x as A,y as K,z as X,_ as Y,r as Z,p as B,C as F}from"../../chunks/index-d07380d5.js";function J(i,e,n){const s=i.slice();return s[5]=e[n],s}function L(i){let e,n,s=i[0]===i[5].index?"&check;":"",u,a,h=i[5].value+"",l,t,o;function r(){return i[4](i[5])}return{c(){e=w("div"),n=w("span"),u=I(),a=w("p"),l=I(),this.h()},l(c){e=m(c,"DIV",{class:!0});var d=g(e);n=m(d,"SPAN",{class:!0});var k=g(n);k.forEach(v),u=b(d),a=m(d,"P",{class:!0});var j=g(a);j.forEach(v),l=b(d),d.forEach(v),this.h()},h(){y(n,"class","check svelte-1in9jeh"),y(a,"class","text"),y(e,"class","option svelte-1in9jeh")},m(c,d){S(c,e,d),f(e,n),n.innerHTML=s,f(e,u),f(e,a),a.innerHTML=h,f(e,l),t||(o=O(e,"click",r),t=!0)},p(c,d){i=c,d&1&&s!==(s=i[0]===i[5].index?"&check;":"")&&(n.innerHTML=s)},d(c){c&&v(e),t=!1,o()}}}function Q(i){let e,n,s,u,a,h=i[2],l=[];for(let t=0;t<h.length;t+=1)l[t]=L(J(i,h,t));return{c(){e=w("div"),n=w("h4"),s=C(i[1]),u=I(),a=w("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=m(t,"DIV",{class:!0});var o=g(e);n=m(o,"H4",{class:!0});var r=g(n);s=W(r,i[1]),r.forEach(v),u=b(o),a=m(o,"DIV",{class:!0});var c=g(a);for(let d=0;d<l.length;d+=1)l[d].l(c);c.forEach(v),o.forEach(v),this.h()},h(){y(n,"class","svelte-1in9jeh"),y(a,"class","options svelte-1in9jeh"),y(e,"class","radio-group svelte-1in9jeh")},m(t,o){S(t,e,o),f(e,n),f(n,s),f(e,u),f(e,a);for(let r=0;r<l.length;r+=1)l[r].m(a,null)},p(t,[o]){if(o&2&&N(s,t[1]),o&5){h=t[2];let r;for(r=0;r<h.length;r+=1){const c=J(t,h,r);l[r]?l[r].p(c,o):(l[r]=L(c),l[r].c(),l[r].m(a,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=h.length}},i:T,o:T,d(t){t&&v(e),R(l,t)}}}function U(i,e,n){let{value:s=0}=e,{options:u=[]}=e,{title:a=""}=e,h=u.map((t,o)=>({value:t,index:o,element:null}));const l=t=>n(0,s=t.index);return i.$$set=t=>{"value"in t&&n(0,s=t.value),"options"in t&&n(3,u=t.options),"title"in t&&n(1,a=t.title)},[s,a,h,u,l]}class x extends M{constructor(e){super(),V(this,e,U,Q,G,{value:0,options:3,title:1})}}function $(i){let e,n,s,u,a,h,l,t,o,r,c,d,k;function j(p){i[4](p)}let H={options:i[2],title:"Device Condition"};return i[0]!==void 0&&(H.value=i[0]),t=new x({props:H}),q.push(()=>z(t,"value",j)),{c(){e=w("section"),n=w("h2"),s=C("Can I donate my device?"),u=I(),a=w("p"),h=C("Just a simple check to see where your device will end up."),l=I(),A(t.$$.fragment),r=I(),c=w("p"),d=C(i[1]),this.h()},l(p){e=m(p,"SECTION",{id:!0});var _=g(e);n=m(_,"H2",{});var E=g(n);s=W(E,"Can I donate my device?"),E.forEach(v),u=b(_),a=m(_,"P",{});var D=g(a);h=W(D,"Just a simple check to see where your device will end up."),D.forEach(v),l=b(_),K(t.$$.fragment,_),r=b(_),c=m(_,"P",{});var P=g(c);d=W(P,i[1]),P.forEach(v),_.forEach(v),this.h()},h(){y(e,"id","check")},m(p,_){S(p,e,_),f(e,n),f(n,s),f(e,u),f(e,a),f(a,h),f(e,l),X(t,e,null),f(e,r),f(e,c),f(c,d),k=!0},p(p,[_]){const E={};!o&&_&1&&(o=!0,E.value=p[0],Y(()=>o=!1)),t.$set(E),(!k||_&2)&&N(d,p[1])},i(p){k||(Z(t.$$.fragment,p),k=!0)},o(p){B(t.$$.fragment,p),k=!1},d(p){p&&v(e),F(t)}}}function ee(i,e,n){let s,u;const a=["It is in functional condition.","It works in a way.","It is smashed or broken.","It is iCloud&trade; locked, but functional.","It needs an OS, Windows product key, or something similar."],h=o=>{switch(o){case 0:return"We will see if we can use it. If not, we will wipe it and recycle it for free!";case 1:return"We will see if we can use it. If not, we will wipe it and recycle it for free!";case 2:return"We will see if we can use it. If not, we will wipe it and recycle it for free!";case 3:return"We will do our best to unlock it, and then see if we can use it. If not, we will wipe it and recycle it for free!";case 4:return"We will see if we can use it. If not, we will wipe it and recycle it for free!";default:return"We will see if we can use it. If not, we will wipe it and recycle it for free!"}};function t(o){s=o,n(0,s)}return i.$$.update=()=>{i.$$.dirty&1&&n(1,u=h(s))},n(0,s=0),[s,u,a,!0,t]}class ne extends M{constructor(e){super(),V(this,e,ee,$,G,{prerender:3})}get prerender(){return this.$$.ctx[3]}}export{ne as default};