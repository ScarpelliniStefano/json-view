!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.jsonview=n():e.jsonview=n()}(self,(function(){return(()=>{"use strict";var e={767:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'.json-container{font-family:"Open Sans";font-size:16px;background-color:#fff;color:gray;box-sizing:border-box}.json-container .line{margin:4px 0;display:flex;justify-content:flex-start}.json-container .caret-icon{width:18px;text-align:center;cursor:pointer}.json-container .empty-icon{width:18px}.json-container .json-type{margin-right:4px;margin-left:4px}.json-container .json-key{color:#444;margin-right:4px;margin-left:4px}.json-container .json-index{margin-right:4px;margin-left:4px}.json-container .json-value{margin-left:8px}.json-container .json-number{color:#f9ae58}.json-container .json-boolean{color:#ec5f66}.json-container .json-string{color:#86b25c}.json-container .json-size{margin-right:4px;margin-left:4px}.json-container .hidden{display:none}.json-container .fas{display:inline-block;border-style:solid;width:0;height:0}.json-container .fa-caret-down{border-width:6px 5px 0 5px;border-color:gray transparent}.json-container .fa-caret-right{border-width:5px 0 5px 6px;border-color:transparent transparent transparent gray}',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{collapse:()=>q,create:()=>z,createWithInitial:()=>A,default:()=>_,destroy:()=>J,expand:()=>H,expandDepth:()=>Z,render:()=>$,renderJSON:()=>P});var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),d=t(216),u=t.n(d),p=t(589),f=t.n(p),v=t(767),h={};function y(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function m(e){return document.createElement(e)}h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var x=0;const g="hidden",j="fa-caret-right",b="fa-caret-down";function E(e={}){const{key:n,size:t}=e;return`\n    <div class="line">\n      <div class="caret-icon"><i class="fas fa-caret-right"></i></div>\n      <div class="json-key">${n}</div>\n      <div class="json-size">${t}</div>\n    </div>\n  `}function k(e){e.children.forEach((e=>{e.el.classList.add(g),e.isExpanded&&k(e)}))}function S(e){e.children.forEach((e=>{e.el.classList.remove(g),e.isExpanded&&S(e)}))}function w(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&n.classList.replace(j,b)}}function L(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&n.classList.replace(b,j)}}function T(e){e.isExpanded?(e.isExpanded=!1,L(e),k(e)):(e.isExpanded=!0,w(e),S(e))}function M(e,n){n(e),e.children.length>0&&e.children.forEach((e=>{M(e,n)}))}function N(e,n,t){console.log(n.isExpanded),n(e),e.children.length>0&&t>0&&(1==t&&(n=function(e){e.el.classList.remove(g),e.isExpanded=!0,L(e)}),e.children.forEach((e=>{N(e,n,t-1)})))}function C(e={}){return{key:e.key||null,parent:e.parent||null,value:e.hasOwnProperty("value")?e.value:null,isExpanded:e.isExpanded||!1,type:e.type||null,children:e.children||[],el:e.el||null,depth:e.depth||0,dispose:null}}function O(e,n){if("object"==typeof e)for(let t in e){const r=C({value:e[t],key:t,depth:n.depth+1,type:y(e[t]),parent:n});n.children.push(r),O(e[t],r)}}function I(e){return"string"==typeof e?JSON.parse(e):e}function z(e){const n=I(e),t=C({value:n,key:"document",type:y(n)});return O(n,t),t}function A(e,n){const t=I(e);x=n;const r=C({value:t,key:"document",type:y(t)});return O(t,r),r}function P(e,n){const t=I(e),r=createTree(t);return $(r,n),r}function $(e,n){const t=function(){const e=m("div");return e.className="json-container",e}();M(e,(function(e){e.el=function(e){let n=m("div");const t=e=>{const n=e.children.length;return"array"===e.type?`[${n} fields]`:"object"===e.type?`{${n} fields}`:null};if(e.children.length>0){1==e.depth?n.innerHTML=E({key:Number(Number(e.key)+x),size:t(e)}):n.innerHTML=E({key:e.key,size:t(e)});const r=n.querySelector(".caret-icon");e.dispose=function(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}(r,"click",(()=>T(e)))}else n.innerHTML=function(e={}){const{key:n,value:t,type:r}=e;return`\n    <div class="line">\n      <div class="empty-icon"></div>\n      <div class="json-key">${n}</div>\n      <div class="json-separator">:</div>\n      <div class="json-value json-${r}">${t}</div>\n    </div>\n  `}({key:e.key,value:e.value,type:typeof e.value});const r=n.children[0];return null!==e.parent&&r.classList.add(g),r.style="margin-left: "+18*e.depth+"px;",r}(e),t.appendChild(e.el)})),n.appendChild(t)}function H(e){M(e,(function(e){e.el.classList.remove(g),e.isExpanded=!0,w(e)}))}function Z(e,n){N(e,(function(e){e.el.classList.remove(g),e.isExpanded=!0,w(e)}),n)}function q(e){M(e,(function(n){n.isExpanded=!1,n.depth>e.depth&&n.el.classList.add(g),L(n)}))}function J(e){var n;M(e,(e=>{e.dispose&&e.dispose()})),(n=e.el.parentNode).parentNode.removeChild(n)}const _={render:$,create:z,createWithInitial:A,renderJSON:P,expand:H,expandDepth:Z,collapse:q,traverse:M,destroy:J}})(),r})()}));