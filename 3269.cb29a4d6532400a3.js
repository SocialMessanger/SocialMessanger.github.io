"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3269],{3269:(G,A,g)=>{g.r(A),g.d(A,{startInputShims:()=>Y});var w=g(5861),y=g(6642),v=g(5730);
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */const L=new WeakMap,b=(e,n,t,o=0)=>{L.has(e)!==t&&(t?B(e,n,o):M(e,n))},I=e=>e===e.getRootNode().activeElement,B=(e,n,t)=>{const o=n.parentNode,s=n.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,o.appendChild(s),L.set(e,s);const r="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${r}px,${t}px,0) scale(0)`},M=(e,n)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",F=function(){var e=(0,w.Z)(function*(n,t,o,s,i){if(!o&&!s)return;const r=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,i=e.bottom,r=n.top,a=r+15,f=.75*Math.min(n.bottom,o-t)-i,S=a-s,d=Math.round(f<0?-f:S>0?-S:0),c=Math.min(d,s-r),m=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:t,inputSafeY:4-(s-a)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,i);if(o&&Math.abs(r.scrollAmount)<4)t.focus();else if(b(n,t,!0,r.inputSafeY),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let u;const a=function(){var f=(0,w.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield(0,y.c)(o,0,r.scrollAmount,r.scrollDuration)),b(n,t,!1,r.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield(0,y.g)(o);if(r.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(r.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(u=setTimeout(a,1e3))}a()}});return function(t,o,s,i,r){return e.apply(this,arguments)}}(),T="$ionPaddingTimer",P=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const s=(0,y.f)(e);if(null===s)return;const i=s[T];i&&clearTimeout(i),n>0?s.style.setProperty("--keyboard-offset",`${n}px`):s[T]=setTimeout(()=>{s.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),i=e.getBoolean("inputBlurring",!0),r=e.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var d=(0,w.Z)(function*(c){yield new Promise(_=>(0,v.c)(c,_));const D=c.shadowRoot||c,m=D.querySelector("input")||D.querySelector("textarea"),h=(0,y.f)(c),C=h?null:c.closest("ion-footer");if(m){if(h&&s&&!a.has(c)){const _=((e,n,t)=>{if(!t||!n)return()=>{};const o=u=>{I(n)&&b(e,n,u)},s=()=>b(e,n,!1),i=()=>o(!0),r=()=>o(!1);return(0,v.a)(t,"ionScrollStart",i),(0,v.a)(t,"ionScrollEnd",r),n.addEventListener("blur",s),()=>{(0,v.b)(t,"ionScrollStart",i),(0,v.b)(t,"ionScrollEnd",r),n.addEventListener("ionBlur",s)}})(c,m,h);a.set(c,_)}if("date"!==m.type&&"datetime-local"!==m.type&&(h||C)&&o&&!l.has(c)){const _=((e,n,t,o,s)=>{let i;const r=a=>{i=(0,v.p)(a)},u=a=>{if(!i)return;const l=(0,v.p)(a);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,s=n.y-t.y;return o*o+s*s>e*e}return!1})(6,i,l)&&!I(n)&&F(e,n,t,o,s)};return e.addEventListener("touchstart",r,{capture:!0,passive:!0}),e.addEventListener("touchend",u,!0),()=>{e.removeEventListener("touchstart",r,!0),e.removeEventListener("touchend",u,!0)}})(c,m,h,C,t);l.set(c,_)}}});return function(D){return d.apply(this,arguments)}}();i&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",r=>{if(n)return void(n=!1);const u=t.activeElement;if(!u||u.matches(p))return;const a=r.target;a!==u&&(a.matches(p)||a.closest(p)||(e=!1,setTimeout(()=>{e||u.blur()},50)))},!1)})(),r&&(e=>{const n=document;n.addEventListener("focusin",s=>{P(s.target,e)}),n.addEventListener("focusout",s=>{P(s.target,0)})})(t);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(s){const c=a.get(d);c&&c(),a.delete(d)}if(o){const c=l.get(d);c&&c(),l.delete(d)}})(d.detail)})}}}]);