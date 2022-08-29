# vite-userscript-template

> This template is based on [Vite](https://vitejs.dev) and [vite-userscript-plugin](https://github.com/crashmax-dev/vite-userscript-plugin).

## Usage

### Install a userscript manager

> To use user scripts you need to first install a user script manager. Which user script manager you can use depends on which browser you use.

* Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
* Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/), [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/), or [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
* Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) or [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)
* Microsoft Edge: [Tampermonkey](https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s)
* Opera: [Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/) or [Violentmonkey](https://violentmonkey.github.io/get-it/)
* Maxthon: [Violentmonkey](http://extension.maxthon.com/detail/index.php?view_id=1680)
* Dolphin: [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)
* UC: [Tampermonkey](https://www.tampermonkey.net/?browser=ucweb&ext=dhdg)

### Install this userscript

> [vite-userscript-template.user.js](https://crashmax-dev.github.io/vite-userscript-template/vite-userscript-template.user.js)

## Development

### Change settings of Google Chrome

* Navigate to `chrome://flags/#allow-insecure-localhost`, enable insecure localhost
* Navigate to `chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo` (Chrome manage extensions page of `Tampermonkey`) and enable `Allow access to file URLs` (you need to manual reload page when dev userscript, see [#475](https://github.com/Tampermonkey/tampermonkey/issues/475#issuecomment-348594785) for more detail)
* `pnpm install`
* `pnpm dev`
* After it starts up, it open browser for install the proxy script.
