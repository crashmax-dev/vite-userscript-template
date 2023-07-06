// ==UserScript==
// @name        vite-userscript-template
// @version     0.0.0
// @author      crashmax <userscript@crashmax.ru>
// @license     MIT
// @homepage    https://crashmax-dev.github.io/vite-userscript-template/
// @match       http://localhost:3000
// @match       https://example.com
// @grant       GM_addStyle
// @updateURL   https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.meta.js
// @downloadURL https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.user.js
// ==/UserScript==

(function(){"use strict";function n(a,t,...r){const e=document.createElement(a);return t instanceof Node?e.append(t):typeof t=="string"?e.append(o(t)):Array.isArray(t)?e.append(...t):(Object.assign(e,t),Object.assign(e.style,t?.style)),e.append(...r),e}function o(a){return document.createTextNode(a)}const d="",c=n("div",{className:"card"},n("h1",{className:"title"},"Hello World"),n("p","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."),n("a",{href:"https://google.com",target:"_blank"},"Link"));document.body.appendChild(c),GM_addStyle(".card{color:#fff;background-color:#333}.card .title{text-decoration:underline}.card a{color:#637fff}")})();
