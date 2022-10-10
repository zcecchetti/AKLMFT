(()=>{"use strict";var n,e,t,r,i,o,a,c,s,l,u,d,p,f,h={747:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),c=t(667),s=t.n(c),l=new URL(t(943),t.b),u=a()(i()),d=s()(l);u.push([n.id,":root {\n    background-color: whitesmoke;\n    font-size: 16px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.biggerHeader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: sticky;\n    top: -10vh;\n    height: 20vh;\n}\n\n.header {\n    display: flex;\n    position: sticky;\n    top: 0;\n    background-color: whitesmoke;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    width: 100%;\n}\n\n.logo {\n    font-size: 2rem;\n}\n\n.links {\n    display: flex;\n    flex-direction: row;\n    width: 30vw;\n}\n\n.link {\n    transition: .3s;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\na:link, a:visited {\n    color: black;\n    text-decoration: none;\n}\n\na:hover, a:active {\n    color: rgb(79, 78, 78);\n}\n\n.text {\n    font-size: 1.25rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    line-height: 1.5;\n    color: #1C3A13;\n}\n\n.intro {\n    display: flex;\n    flex-direction: row;\n    height: 85vh;\n}\n\n.infoBlock {\n    padding: 5rem;\n}\n\n.introText {\n    width: 55vw;\n}\n\n.introImage {\n    background-image: url("+d+");\n    width: 45vw;\n    height: 85vh;\n    background-attachment: fixed;\n    background-position: 30vw -35vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/* img {\n    max-height: 100%;\n    object-fit: cover;\n} */\n\n/* #sereneImage {\n    height: 100vh;\n    width: 40vw;\n    z-index: -1;\n    position: absolute;\n    top: 10vh;\n    left: 80vw;\n    transform: translate(-50%,0);\n    pointer-events: none\n} */\n\n.quote {\n    height: 30vh;\n    background-color: #B86F52;\n}\n\n.aboutMe {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 85vh;\n}\n\n.clinicianImage {\n    background-color: rgb(213, 167, 232);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.clinicianInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n.clinicianName {\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n.clinicianSummary {\n    height: 100%;\n    font-size: 1.25rem;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.therapyTypes {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 66vh;\n    background-color: rgb(236, 242, 242);\n}\n\n.specialty {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 22vh;\n}\n\n.specialtyTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 100%;\n    transition: .3s;\n}\n\n.specialtyText {\n    width: 100%;\n    height: 100%;\n    transition: .3s;\n}\n\n.specialtyTitle:hover, .specialtyText:hover {\n    background-color: rgb(219, 224, 224);\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},943:(n,e,t)=>{n.exports=t.p+"f80975663de0af6856a6.jpeg"}},g={};function v(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,v),t.exports}v.m=h,v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),i=v(569),o=v.n(i),a=v(565),c=v.n(a),s=v(216),l=v.n(s),u=v(589),d=v.n(u),p=v(747),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();