// ==UserScript==
// @name        vite-userscript-template
// @version     0.0.1
// @author      crashmax <userscript@crashmax.ru>
// @license     MIT
// @homepage    https://crashmax-dev.github.io/vite-userscript-template/
// @match       http://localhost:3000
// @match       https://example.com
// @grant       GM_addStyle
// @updateURL   https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.meta.js
// @downloadURL https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.user.js
// ==/UserScript==

(function(){"use strict";function o(c,e,...l){const n=document.createElement(c);return typeof e=="string"?n.append(t(e)):Array.isArray(e)?n.append(...e):(Object.assign(n,e),Object.assign(n.style,e?.style)),l.length&&n.append(...l),n}function t(c){return document.createTextNode(c)}const a="",d=o("div",{className:"card"},o("h1",{className:"title"},"Hello World"),o("p","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."),o("a",{href:"https://google.com",target:"_blank"},"Link"));document.body.appendChild(d),GM_addStyle(".card{color:#fff;background-color:#333}.card .title{text-decoration:underline}.card a{color:#637fff}")})();
