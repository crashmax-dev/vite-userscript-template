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

(function(){"use strict";function n(o,e,...r){const t=document.createElement(o);return e instanceof Node?t.append(e):typeof e=="string"?t.append(a(e)):Array.isArray(e)?t.append(...e):(Object.assign(t,e),Object.assign(t.style,e?.style)),t.append(...r),t}function a(o){return document.createTextNode(o)}const d="",c=n("div",{className:"card"},n("h1",{className:"title"},"Hello World"),n("p","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."),n("a",{href:"https://google.com",target:"_blank"},"Link"));document.body.appendChild(c),GM_addStyle(".card{color:#fff;background-color:#333}.card .title{text-decoration:underline}.card a{color:#637fff}")})();
