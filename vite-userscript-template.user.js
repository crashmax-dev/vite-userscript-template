// ==UserScript==
// @name        vite-userscript-template
// @version     0.0.2
// @author      crashmax <userscript@crashmax.ru>
// @license     MIT
// @homepage    https://crashmax-dev.github.io/vite-userscript-template/
// @match       http://localhost:3000
// @match       https://example.com
// @grant       GM_addStyle
// @updateURL   https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.meta.js
// @downloadURL https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.user.js
// ==/UserScript==

(function(){"use strict";function n(c,t,...o){const e=document.createElement(c);return typeof t=="string"?e.append(r(t)):Array.isArray(t)?e.append(...t):(Object.assign(e,t),Object.assign(e.style,t?.style)),o.length&&e.append(...o),e}function r(c){return document.createTextNode(c)}const d="",a=n("div",{className:"card"},n("h1",{className:"title"},"Hello World"),n("p","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."),n("a",{href:"https://google.com",target:"_blank"},"Link"));document.body.appendChild(a),GM_addStyle(".card{color:#fff;background-color:#333}.card .title{text-decoration:underline}.card a{color:#637fff}")})();
