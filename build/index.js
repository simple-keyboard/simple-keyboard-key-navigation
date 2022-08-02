/*!
 * 
 *   simple-keyboard-key-navigation v2.4.201
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SimpleKeyboardKeyNavigation=t():e.SimpleKeyboardKeyNavigation=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(3),i=n.n(a)()(o.a);i.push([e.i,'.simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-list-item.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-close.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n\n.simple-keyboard .hg-candidate-box-close {\n  align-items: center;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  width: 40px;\n}\n\n.simple-keyboard .hg-candidate-box-close::after {\n  content: "X";\n}\n',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;;;EAIE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;AACd",sourcesContent:['.simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-list-item.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-close.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n\n.simple-keyboard .hg-candidate-box-close {\n  align-items: center;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  width: 40px;\n}\n\n.simple-keyboard .hg-candidate-box-close::after {\n  content: "X";\n}\n'],sourceRoot:""}]),t.a=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1;var l=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:m(f,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function y(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,b=0;function m(e,t){var n,r,o;if(t.singleton){var a=b++;n=p||(p=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=y.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var d=c(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=r(e,4),n=t[1],o=t[3];if(!o)return n;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(i," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([c]).join("\n")}return[n].join("\n")}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i={insert:"head",singleton:!1};o()(a.a,i),a.a.locals;function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=d((function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"init",(function(e){e.registerModule("keyNavigation",(function(t){t.initMarkerPos=[0,0],t.lastMarkerPos=t.initMarkerPos,t.initVars=function(n){t.markerPosition={row:0,button:0},t.layoutName=n||"",t.step=e.options.keyNavigationStep||1},t.initMarker=function(){var e=t.getButtonAt.apply(t,c(t.lastMarkerPos))?t.lastMarkerPos:t.initMarkerPos;t.setMarker.apply(t,c(e))},t.getButtonAt=function(n,r){var o=t.layoutName;return e.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(o,"-r").concat(n,"b").concat(r,'"]'))},t.setMarker=function(n,r){var o=t.getButtonAt(n,r);return o?(t.markedBtn&&(t.markedBtn.classList.remove("hg-keyMarker"),e.options.markerColor&&(t.markedBtn.style="")),o.classList.add("hg-keyMarker"),e.options.focusOnNavigation&&o.focus&&o.focus(),e.options.markerColor&&(o.style="box-shadow: 0 0 0 2px ".concat(e.options.markerColor)),t.markedBtn=o,t.lastMarkerPos=[n,r],t.markerPosition={row:n,button:r},!0):(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n,"b").concat(r," doesnt exist!")),!1)},t.up=function(){document.querySelector(".hg-candidate-box")&&e.candidateBox.destroy();var n=t.markerPosition.row-t.step,r=t.markerPosition.button;if(!t.getButtonAt(n,r))for(var o=r;0<=o;o--)if(t.getButtonAt(n,o)){r=o;break}t.setMarker(n,r)},t.down=function(){document.querySelector(".hg-candidate-box")&&e.candidateBox.destroy();var n=t.markerPosition.row+t.step,r=t.markerPosition.button;if(!t.getButtonAt(n,r))for(var o=r;0<=o;o--)if(t.getButtonAt(n,o)){r=o;break}t.setMarker(n,r)},t.right=function(){if(document.querySelector(".hg-candidate-box")){var n=e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").nextElementSibling;if(n)e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").classList.remove("hg-keyMarker"),n.classList.add("hg-keyMarker");else{var r=e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-next.hg-candidate-box-btn-active");r&&(r.click(),t.createCloseButton(),e.candidateBox.candidateBoxElement.querySelector("li").classList.add("hg-keyMarker"))}}else{var o=t.markerPosition.row,a=t.markerPosition.button+t.step;t.setMarker(o,a)}},t.left=function(){if(document.querySelector(".hg-candidate-box")){var n=e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").previousElementSibling;if(n)e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").classList.remove("hg-keyMarker"),n.classList.add("hg-keyMarker");else{var r=e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-prev.hg-candidate-box-btn-active");r&&(r.click(),t.createCloseButton(),e.candidateBox.candidateBoxElement.querySelector("ul li:last-child").classList.add("hg-keyMarker"))}}else{var o=t.markerPosition.row,a=t.markerPosition.button-t.step;t.setMarker(o,a)}},t.press=function(){t.markedBtn&&((!e.candidateBox||!document.querySelector(".hg-candidate-box"))&&(e.options.keyNavigationPressUseClick?t.markedBtn.click():e.handleButtonClicked(t.markedBtn.getAttribute("data-skbtn"),{target:t.markedBtn})),document.querySelector(".hg-candidate-box")&&(e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-close")?e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").click():(t.createCloseButton(),e.candidateBox.candidateBoxElement.querySelector("li").classList.add("hg-keyMarker"))))},t.createCloseButton=function(){var t=document.createElement("li");t.onclick=function(){return e.candidateBox.destroy()},t.className="hg-candidate-box-close",e.candidateBox.candidateBoxElement.querySelector("ul").prepend(t)},t.init=function(){t.initVars(e.options.layoutName),t.initMarker()},t.fn={},t.fn.onRender=e.onRender,t.fn.onInit=e.onInit,e.onRender=function(){(e.options.layoutName!==t.layoutName||e.options.enableKeyNavigation!==t.enableKeyNavigation)&&e.options.enableKeyNavigation&&(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),t.init()),t.fn.onRender()},e.onInit=function(){e.options.enableKeyNavigation&&t.init(),t.fn.onInit()}}))}))}));t.default=l}])}));
//# sourceMappingURL=index.js.map