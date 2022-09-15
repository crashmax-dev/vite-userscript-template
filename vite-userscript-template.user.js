// ==UserScript==
// @name        vite-userscript-template
// @version     0.0.1
// @license     MIT
// @homepage    https://crashmax-dev.github.io/vite-userscript-template/
// @match       https://example.com
// @grant       GM_addStyle
// @updateURL   https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.meta.js
// @downloadURL https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.user.js
// ==/UserScript==

(function(){"use strict";function A(n,e){var r=E(n),i=r.tag,o=r.id,t=r.className,l=e?document.createElementNS(e,i):document.createElement(i);return o&&(l.id=o),t&&(e?l.setAttribute("class",t):l.className=t),l}function E(n){for(var e=n.split(/([.#])/),r="",i="",o=1;o<e.length;o+=2)switch(e[o]){case".":r+=" "+e[o+1];break;case"#":i=e[o+1]}return{className:r.trim(),tag:e[0]||"div",id:i}}function C(n,e,r){var i=e.__redom_lifecycle;if(g(i)){e.__redom_lifecycle={};return}var o=r;for(e.__redom_mounted&&d(e,"onunmount");o;){var t=o.__redom_lifecycle||{};for(var l in i)t[l]&&(t[l]-=i[l]);g(t)&&(o.__redom_lifecycle=null),o=o.parentNode}}function g(n){if(n==null)return!0;for(var e in n)if(n[e])return!1;return!0}var T=["onmount","onremount","onunmount"],D=typeof window<"u"&&"ShadowRoot"in window;function b(n,e,r,i){var o=c(n),t=c(e);e===t&&t.__redom_view&&(e=t.__redom_view),e!==t&&(t.__redom_view=e);var l=t.__redom_mounted,a=t.parentNode;if(l&&a!==o&&C(e,t,a),r!=null)if(i){var f=c(r);f.__redom_mounted&&d(f,"onunmount"),o.replaceChild(t,f)}else o.insertBefore(t,c(r));else o.appendChild(t);return L(e,t,o,a),e}function d(n,e){e==="onmount"||e==="onremount"?n.__redom_mounted=!0:e==="onunmount"&&(n.__redom_mounted=!1);var r=n.__redom_lifecycle;if(r){var i=n.__redom_view,o=0;i&&i[e]&&i[e]();for(var t in r)t&&o++;if(o)for(var l=n.firstChild;l;){var a=l.nextSibling;d(l,e),l=a}}}function L(n,e,r,i){for(var o=e.__redom_lifecycle||(e.__redom_lifecycle={}),t=r===i,l=!1,a=0,f=T;a<f.length;a+=1){var s=f[a];t||n!==e&&s in n&&(o[s]=(o[s]||0)+1),o[s]&&(l=!0)}if(!l){e.__redom_lifecycle={};return}var u=r,v=!1;for((t||u&&u.__redom_mounted)&&(d(e,t?"onremount":"onmount"),v=!0);u;){var p=u.parentNode,x=u.__redom_lifecycle||(u.__redom_lifecycle={});for(var y in o)x[y]=(x[y]||0)+o[y];if(v)break;(u.nodeType===Node.DOCUMENT_NODE||D&&u instanceof ShadowRoot||p&&p.__redom_mounted)&&(d(u,t?"onremount":"onmount"),v=!0),u=p}}function M(n,e,r){var i=c(n);if(typeof e=="object")for(var o in e)h(i,o,e[o]);else h(i,e,r)}function h(n,e,r){n.style[e]=r??""}var w="http://www.w3.org/1999/xlink";function N(n,e,r,i){var o=c(n),t=typeof e=="object";if(t)for(var l in e)N(o,l,e[l],i);else{var a=o instanceof SVGElement,f=typeof r=="function";if(e==="style"&&typeof r=="object")M(o,r);else if(a&&f)o[e]=r;else if(e==="dataset")j(o,r);else if(!a&&(e in o||f)&&e!=="list")o[e]=r;else{if(a&&e==="xlink"){S(o,r);return}i&&e==="class"&&(r=o.className+" "+r),r==null?o.removeAttribute(e):o.setAttribute(e,r)}}}function S(n,e,r){if(typeof e=="object")for(var i in e)S(n,i,e[i]);else r!=null?n.setAttributeNS(w,e,r):n.removeAttributeNS(w,e,r)}function j(n,e,r){if(typeof e=="object")for(var i in e)j(n,i,e[i]);else r!=null?n.dataset[e]=r:delete n.dataset[e]}function O(n){return document.createTextNode(n??"")}function k(n,e,r){for(var i=0,o=e;i<o.length;i+=1){var t=o[i];if(!(t!==0&&!t)){var l=typeof t;l==="function"?t(n):l==="string"||l==="number"?n.appendChild(O(t)):R(c(t))?b(n,t):t.length?k(n,t,r):l==="object"&&N(n,t,null,r)}}}function c(n){return n.nodeType&&n||!n.el&&n||c(n.el)}function R(n){return n&&n.nodeType}function _(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i,o=typeof n;if(o==="string")i=A(n);else if(o==="function"){var t=n;i=new(Function.prototype.bind.apply(t,[null].concat(e)))}else throw new Error("At least one argument required");return k(c(i),e,!0),i}var m=_;_.extend=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];return _.bind.apply(_,[this].concat(n))};const F="";function B(){return m("div",{className:"card"},m("h1",{className:"title"},"Hello World"),m("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."),m("a",{href:"https://google.com",target:"_blank"},"Link"))}b(document.body,new B),GM_addStyle(".card{color:#fff;background-color:#333}.card .title{text-decoration:underline}.card a{color:#637fff}")})();
