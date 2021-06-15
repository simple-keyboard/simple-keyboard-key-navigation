/*!
 * 
 *   simple-keyboard-key-navigation v2.3.224
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardKeyNavigation=e():t.SimpleKeyboardKeyNavigation=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n.n(a)()(o.a);i.push([t.i,".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;EAEE,6BAA6B;EAC7B,kBAAkB;AACpB",sourcesContent:[".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n"],sourceRoot:""}]),e.a=i},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function u(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],s=n[c]||0,f="".concat(c," ").concat(s);n[c]=s+1;var l=u(f),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(d)):i.push({identifier:f,updater:b(d,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,y=0;function b(t,e){var n,r,o;if(e.singleton){var a=y++;n=m||(m=s(e)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var a=c(t,e),s=0;s<n.length;s++){var f=u(n[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=a}}}},function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var e=r(t,4),n=e[1],o=e[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),u="/*# ".concat(i," */"),c=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(c).concat([u]).join("\n")}return[n].join("\n")}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(0),i={insert:"head",singleton:!1};o()(a.a,i),a.a.locals;function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}e.default=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"init",(function(t){t.registerModule("keyNavigation",(function(e){e.initMarkerPos=[0,0],e.lastMarkerPos=e.initMarkerPos,e.initVars=function(n){e.markerPosition={row:0,button:0},e.layoutName=n||"",e.step=t.options.keyNavigationStep||1},e.initMarker=function(){var t=e.getButtonAt.apply(e,u(e.lastMarkerPos))?e.lastMarkerPos:e.initMarkerPos;e.setMarker.apply(e,u(t))},e.getButtonAt=function(n,r){var o=e.layoutName;return t.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(o,"-r").concat(n,"b").concat(r,'"]'))},e.setMarker=function(n,r){var o=e.getButtonAt(n,r);return o?(e.markedBtn&&(e.markedBtn.classList.remove("hg-keyMarker"),t.options.markerColor&&(e.markedBtn.style="")),o.classList.add("hg-keyMarker"),t.options.markerColor&&(o.style="box-shadow: 0 0 0 2px ".concat(t.options.markerColor)),e.markedBtn=o,e.lastMarkerPos=[n,r],e.markerPosition={row:n,button:r},!0):(t.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n,"b").concat(r," doesnt exist!")),!1)},e.up=function(){var t=e.markerPosition.row-e.step,n=e.markerPosition.button;if(!e.getButtonAt(t,n))for(var r=n;0<=r;r--)if(e.getButtonAt(t,r)){n=r;break}e.setMarker(t,n)},e.down=function(){var t=e.markerPosition.row+e.step,n=e.markerPosition.button;if(!e.getButtonAt(t,n))for(var r=n;0<=r;r--)if(e.getButtonAt(t,r)){n=r;break}e.setMarker(t,n)},e.right=function(){var t=e.markerPosition.row,n=e.markerPosition.button+e.step;e.setMarker(t,n)},e.left=function(){var t=e.markerPosition.row,n=e.markerPosition.button-e.step;e.setMarker(t,n)},e.press=function(){e.markedBtn&&(e.markedBtn.onpointerdown?(e.markedBtn.onpointerdown(),e.markedBtn.onpointerup()):e.markedBtn.onclick?e.markedBtn.onclick():e.markedBtn.ontouchdown&&(e.markedBtn.ontouchdown(),e.markedBtn.ontouchup()))},e.init=function(){e.initVars(t.options.layoutName),e.initMarker()},e.fn={},e.fn.onRender=t.onRender,e.fn.onInit=t.onInit,t.onRender=function(){(t.options.layoutName!==e.layoutName||t.options.enableKeyNavigation!==e.enableKeyNavigation)&&t.options.enableKeyNavigation&&(t.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),e.init()),e.fn.onRender()},t.onInit=function(){t.options.enableKeyNavigation&&e.init(),e.fn.onInit()}}))}))}}])}));
//# sourceMappingURL=index.js.map