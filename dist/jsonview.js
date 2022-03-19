!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.jsonview=n():e.jsonview=n()}(self,(function(){return(()=>{"use strict";var e={767:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'.json-container{font-family:"Roboto",sans-serif;font-size:16px;background-color:#fff;color:gray;box-sizing:border-box}.dark-mode{background-color:#1e1e1e;color:#dadada}.line{margin:4px 0;display:flex;justify-content:flex-start}.caret-icon{width:18px;text-align:center;cursor:pointer}.empty-icon{width:18px}.json-type{margin-right:4px;margin-left:4px}.json-key{color:#444;margin-right:4px;margin-left:4px}.json-key-dark{color:#e9e8e8;margin-right:4px;margin-left:4px}.json-index{margin-right:4px;margin-left:4px}.json-value{margin-left:8px}.json-number{color:#f9ae58}.json-boolean{color:#ec5f66}.json-string{color:#86b25c}.json-number-dark{color:#0651a7}.json-boolean-dark{color:#13a099}.json-string-dark{color:#794da3}.json-size{margin-right:4px;margin-left:4px}.hidden{display:none}.fas{display:inline-block;border-style:solid;width:0;height:0}.fa-caret-down{border-width:6px 5px 0 5px;border-color:gray transparent}.fa-caret-right{border-width:5px 0 5px 6px;border-color:transparent transparent transparent gray}.fa-caret-down-dark{border-width:6px 5px 0 5px;border-color:#d1d1d1 transparent}.fa-caret-right-dark{border-width:5px 0 5px 6px;border-color:transparent transparent transparent #d1d1d1}',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{collapse:()=>_,create:()=>P,createWithInitial:()=>D,default:()=>F,destroy:()=>R,expand:()=>q,expandDepth:()=>J,render:()=>Z,renderJSON:()=>H});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),d=t.n(c),l=t(216),p=t.n(l),u=t(589),f=t.n(u),v=t(767),h={};function y(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function m(e){return document.createElement(e)}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var x=0,g=!1;const b="hidden",k="fa-caret-right",j="fa-caret-down",E="fa-caret-down-dark",w="fa-caret-right-dark";function L(e={}){const{key:n,size:t}=e;return`\n    <div class="line">\n      <div class="caret-icon"><i class="fas fa-caret-right${g?"-dark":""}"></i></div>\n      <div class="json-key${g?"-dark":""}">${n}</div>\n      <div class="json-size">${t}</div>\n    </div>\n  `}function S(e){e.children.forEach((e=>{e.el.classList.add(b),e.isExpanded&&S(e)}))}function T(e){e.children.forEach((e=>{e.el.classList.remove(b),e.isExpanded&&T(e)}))}function M(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&(n.classList.replace(k,j),g&&n.classList.replace(w,E))}}function N(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&(n.classList.replace(j,k),g&&n.classList.replace(E,w))}}function C(e){e.isExpanded?(e.isExpanded=!1,N(e),S(e)):(e.isExpanded=!0,M(e),T(e))}function $(e,n){n(e),e.children.length>0&&e.children.forEach((e=>{$(e,n)}))}function O(e,n,t){n(e),e.children.length>0&&t>0&&(1==t&&(n=function(e){e.el.classList.remove(b),e.isExpanded=!1,N(e)}),e.children.forEach((e=>{O(e,n,t-1)})))}function I(e={}){return{key:e.key||null,parent:e.parent||null,value:e.hasOwnProperty("value")?e.value:null,isExpanded:e.isExpanded||!1,type:e.type||null,children:e.children||[],el:e.el||null,depth:e.depth||0,dispose:null}}function z(e,n){if("object"==typeof e)for(let t in e){const r=I({value:e[t],key:t,depth:n.depth+1,type:y(e[t]),parent:n});n.children.push(r),z(e[t],r)}}function A(e){return"string"==typeof e?JSON.parse(e):e}function P(e){const n=A(e),t=I({value:n,key:"Documents",type:y(n)});return z(n,t),t}function D(e,n,t){const r=A(e);x=n,g=t;const o=I({value:r,key:"Documents",type:y(r)});return z(r,o),o}function H(e,n){const t=A(e),r=createTree(t);return Z(r,n),r}function Z(e,n){const t=function(){const e=m("div");return e.className="json-container",g&&(e.className="json-container dark-mode"),e}();$(e,(function(e){e.el=function(e){let n=m("div");const t=e=>{const n=e.children.length;return"array"===e.type?`[${n} documents]`:"object"===e.type?`{${n} fields}`:null};if(e.children.length>0){1==e.depth?n.innerHTML=L({key:"document "+Number(Number(e.key)+x),size:t(e)}):n.innerHTML=L({key:e.key,size:t(e)});const r=n.querySelector(".caret-icon");e.dispose=function(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}(r,"click",(()=>C(e)))}else n.innerHTML=function(e={}){const{key:n,value:t,type:r}=e;return`\n    <div class="line">\n      <div class="empty-icon"></div>\n      <div class="json-key${g?"-dark":""}">${n}</div>\n      <div class="json-separator">:</div>\n      <div class="json-value json-${r}${g?"-dark":""} ">${t}</div>\n    </div>\n  `}({key:e.key,value:e.value,type:typeof e.value});const r=n.children[0];return null!==e.parent&&r.classList.add(b),r.style="margin-left: "+18*e.depth+"px;",r}(e),t.appendChild(e.el)})),n.appendChild(t)}function q(e){$(e,(function(e){e.el.classList.remove(b),e.isExpanded=!0,M(e)}))}function J(e,n){O(e,(function(e){e.el.classList.remove(b),e.isExpanded=!0,M(e)}),n)}function _(e){$(e,(function(n){n.isExpanded=!1,n.depth>e.depth&&n.el.classList.add(b),N(n)}))}function R(e){var n;$(e,(e=>{e.dispose&&e.dispose()})),(n=e.el.parentNode).parentNode.removeChild(n)}const F={render:Z,create:P,createWithInitial:D,renderJSON:H,expand:q,expandDepth:J,collapse:_,traverse:$,destroy:R}})(),r})()}));