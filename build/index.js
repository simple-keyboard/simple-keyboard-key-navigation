/*!
 * 
 *   simple-keyboard-key-navigation v2.3.14
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SimpleKeyboardKeyNavigation=t():e.SimpleKeyboardKeyNavigation=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(2);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.default=function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"init",(function(e){e.registerModule("keyNavigation",(function(t){t.initMarkerPos=[0,0],t.lastMarkerPos=t.initMarkerPos,t.initVars=function(n){t.markerPosition={row:0,button:0},t.layoutName=n||"",t.step=e.options.keyNavigationStep||1},t.initMarker=function(){var e=t.getButtonAt.apply(t,r(t.lastMarkerPos))?t.lastMarkerPos:t.initMarkerPos;t.setMarker.apply(t,r(e))},t.getButtonAt=function(n,r){var o=t.layoutName;return e.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(o,"-r").concat(n,"b").concat(r,'"]'))},t.setMarker=function(n,r){var o=t.getButtonAt(n,r);return o?(t.markedBtn&&t.markedBtn.classList.remove("hg-keyMarker"),o.classList.add("hg-keyMarker"),t.markedBtn=o,t.lastMarkerPos=[n,r],t.markerPosition={row:n,button:r},!0):(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n,"b").concat(r," doesnt exist!")),!1)},t.up=function(){var e=t.markerPosition.row-t.step,n=t.markerPosition.button;if(!t.getButtonAt(e,n))for(var r=n;0<=r;r--)if(t.getButtonAt(e,r)){n=r;break}t.setMarker(e,n)},t.down=function(){var e=t.markerPosition.row+t.step,n=t.markerPosition.button;if(!t.getButtonAt(e,n))for(var r=n;0<=r;r--)if(t.getButtonAt(e,r)){n=r;break}t.setMarker(e,n)},t.right=function(){var e=t.markerPosition.row,n=t.markerPosition.button+t.step;t.setMarker(e,n)},t.left=function(){var e=t.markerPosition.row,n=t.markerPosition.button-t.step;t.setMarker(e,n)},t.press=function(){t.markedBtn&&(t.markedBtn.onpointerdown?(t.markedBtn.onpointerdown(),t.markedBtn.onpointerup()):t.markedBtn.onclick?t.markedBtn.onclick():t.markedBtn.ontouchdown&&(t.markedBtn.ontouchdown(),t.markedBtn.ontouchup()))},t.init=function(){t.initVars(e.options.layoutName),t.initMarker()},t.fn={},t.fn.onRender=e.onRender,e.onRender=function(){e.options.layoutName!==t.layoutName&&e.options.enableKeyNavigation&&(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),t.init()),t.fn.onRender()},e.options.enableKeyNavigation&&t.init()}))}))}},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,f="".concat(c," ").concat(s);n[c]=s+1;var l=u(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:f,updater:y(d,t),references:1}),r.push(f)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function y(e,t){var n,r,o;if(t.singleton){var i=b++;n=m||(m=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var f=u(n[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!0);o.push([e.i,".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n","",{version:3,sources:["webpack://src/index.css"],names:[],mappings:"AAAA;;EAEE,6BAA6B;EAC7B,kBAAkB;AACpB",sourcesContent:[".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n"],sourceRoot:""}]),t.default=o}])}));
//# sourceMappingURL=index.js.map