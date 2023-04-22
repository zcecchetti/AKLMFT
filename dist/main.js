(()=>{"use strict";var n,e,t,i,r,o,a,c,l,s,d,f,u,g,p={747:(n,e,t)=>{t.d(e,{Z:()=>p});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),c=t(667),l=t.n(c),s=new URL(t(484),t.b),d=new URL(t(906),t.b),f=a()(r()),u=l()(s),g=l()(d);f.push([n.id,":root {\n    background-color: #f4f2f1;\n    font-size: 16px;\n    font-family: Verdana, Tahoma, sans-serif;\n    color: #4b4d48;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#logo {\n    color: #f4f2f1;\n}\n\n.links {\n    display: flex;\n    flex-direction: row;\n}\n\n.link {\n    transition: .3s;\n    width: 100%;\n}\n\na:link, a:visited {\n    color: #f4f2f1;\n    text-decoration: none;\n}\n\n#header {\n    background-color: #f4f2f100;\n    display: flex;\n    top: 0;\n    justify-content: space-around;\n    padding: 0 5rem;\n    align-items: center;\n    width: 100vw;\n    font-family: Verdana, Tahoma, sans-serif;\n}\n\na:hover, a:active {\n    color: #6E452F;\n}\n\n.text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* text-align: justify; */\n    line-height: 1.3;\n    font-family: 'Trebuchet MS', Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n}\n\n.introText {\n    height: 80%;\n    color: white;\n}\n\n#intro {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n}\n\n#takeAStepButton {\n    width: 10rem;\n    height: 2rem;\n    font-size: 1.25rem;\n    transition: 0.3s;\n    color: #f4f2f1;\n    border: none;\n}\n\n.infoContainer {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 2px;\n}\n\n@media screen and (max-width: 600px) {\n\n    #header {\n        height: 100%;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 1.5rem 0rem;\n        gap: 1rem;\n    }\n    .biggerHeader {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: flex-start;\n        top: -5vh;\n        height: 37vh;\n        /* width: 100vw; */\n    }\n\n    #logo {\n        font-size: 1.3rem;\n    }\n\n    .links {\n        width: 90vw;\n        font-size: 1rem;\n        justify-content: space-evenly;\n        /* padding: 0rem 1rem; */\n    }\n\n    .link {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n    }\n\n    #introContainer {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        height: 63vh;\n        margin: 0 2rem;\n    }\n\n    #backgroundImageHolder {\n        background: \n        linear-gradient(\n          rgba(0, 0, 0, 0.3),\n          rgba(0, 0, 0, 0.3)\n        ), url("+u+");\n        background-size: cover;\n        right: 10vw;\n        /* width: 100vw; */\n        /* background-position: 0 -5vh; */\n    }\n\n    .text {\n        font-size: 12px;\n    }\n\n    #intro {\n        gap: 15rem;\n    }\n\n    .introText {\n        font-size: 1.1rem;\n    }\n    \n    #takeAStepButton {\n        background-color: #546a20;\n    }\n\n    .infoContainer {\n        height: 80vh;\n    }\n\n    .clinicianImage {\n        width: auto;\n        height: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        float: left;\n    }\n\n    #clinicianAK {\n        height: 13rem;\n        width: auto;\n        padding: 0px 0rem 0 1rem;\n    }\n\n    /* .aboutMeContainer {\n        padding: 0px 0rem 0 .5rem;\n    } */\n\n    .clinicianSummary {\n        padding: 0px 1rem 0 1rem;\n    }\n\n}\n\n@media screen and (min-width: 600px) {\n\n    .biggerHeader {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        top: -5vh;\n        height: 15vh;\n        /* width: 100vw; */\n    }\n    #backgroundImageHolder {\n        background: \n        linear-gradient(\n        rgba(0, 0, 0, 0.3),\n        rgba(0, 0, 0, 0.3)\n        ), url("+u+");\n        background-size: cover;\n        /* background-position: 0 -30vh; */\n    }\n\n    #header {\n        height: 10vh;\n        flex-direction: row;\n    }\n\n    #logo {\n        font-size: 2rem;\n        width: 100%;\n    }\n\n    .links {\n        width: 35vw;\n    }\n\n    .link {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    .text {\n        font-size: 18px;\n        /* display: flex;\n        justify-content: center;\n        align-items: center;\n        line-height: 1.5;\n        font-family: 'Trebuchet MS', Arial, sans-serif;\n        -webkit-font-smoothing: antialiased; */\n    }\n\n    #introContainer {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        height: 85vh;\n        width: 100vw;\n    }\n\n    #practiceContainer {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        height: 30vh;\n        width: 100vw;\n    }\n\n    #intro {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border-radius: 2px;\n    }\n\n    #practiceImageHolder {\n        background: \n        linear-gradient(\n        rgba(0, 0, 0, 0.3),\n        rgba(0, 0, 0, 0.3)\n        ), url("+g+");\n        background-size: cover;\n        background-position: 0 -30vh;\n    }\n\n    #practice {\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border-radius: 2px;\n    }\n\n    .infoBlock {\n        padding: 0 max(5rem, 5vw);\n    }\n\n    .introText {\n        font-size: 1.5rem;\n    }\n\n    #takeAStepButton {\n        /* width: 10rem;\n        height: 2rem;\n        font-size: 1.25rem; */\n        background-color: #67822836;\n        /* transition: 0.3s;\n        color: #f4f2f1;\n        border: none; */\n    }\n\n    #takeAStepButton:hover {\n        background-color: #546a20;\n    }\n\n    #takeAStepButton:active {\n        background-color: #678228;\n        transition: 0.1s;\n    }\n\n    .introImage {\n        background-image: url("+u+");\n        width: 50vw;\n        height: 70vh;\n        background-attachment: fixed;\n        background-position: 30vw -15vh;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n    .quote {\n        margin: auto;\n        height: 15vh;\n        width: 100vw;\n        background-color: #bec494;\n        border-radius: 2px;\n    }\n\n    .infoContainer {\n        height: 95vh;\n    }\n\n    .practiceContainer {\n        height: 65vh;\n        width: 100vw;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 2px;\n    }\n\n    .aboutMeContainer {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        background-color: #EBEEEBff;\n    }\n\n    #practiceInfoContainer {\n        display: grid;\n        height: 90%;\n        width: 75vw;\n        align-items: flex-start;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 2fr 2fr 3fr;\n    }\n\n    .listText {\n        font-size: 18px;\n        margin-left: 33%;\n        font-family: 'Trebuchet MS', Arial, sans-serif;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    ul {\n        margin: 2px;\n        list-style-type:circle;\n    }\n\n    #practiceSummary {\n        grid-row: 1 / 2;\n        grid-column: 1 / 3;\n    }\n\n    #specialities {\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n\n    #ages {\n        grid-row: 2 / 3;\n        grid-column: 2 / 3;\n    }\n\n    #issues {\n        grid-row: 3 / 4;\n        grid-column: 1 / 2;\n    }\n\n    #communities {\n        grid-row: 3 / 4;\n        grid-column: 2 / 3;\n    }\n\n    .clinicianImage {\n        width: 90%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #clinicianAK {\n        height: 90%;\n        width: auto;\n    }\n\n    .clinicianInfo {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 90%;\n        overflow-y: scroll;\n    }\n\n    #contactMe {\n        height: calc(55vh - 1.25rem);\n        width: 100vw;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        background-color: #f4f2f1;\n    }\n\n    .floatingInfo {\n        position: absolute;\n        z-index: 1;\n        display: grid;\n        grid-template-rows: 1fr 1fr;\n        width: 95vw;\n        height: 40%;\n    }\n\n    #callToAction {\n        grid-row: 1 / 2;\n        align-self: flex-start;\n        justify-self: flex-start;\n        padding: 3rem 10rem;\n        font-size: 2rem;\n    }\n\n    #action {\n        grid-row: 2 / 2;\n        padding: 0rem 10rem;\n        align-self: flex-start;\n        justify-self: flex-end;\n    }\n\n    #formContainer {\n        grid-column: 2 / 3;\n        align-self: flex-start;\n        justify-self: flex-start;\n        width: 90%;\n    }\n\n    #contactForm {\n        display: grid;\n        width: 100%;\n        height: 300px;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 3.25rem 3.25rem 1fr 1.5rem;\n        column-gap: 8px;\n        row-gap: 8px;\n        padding: 3rem 0;\n    }\n\n    #firstContainer {\n        display: flex;\n        flex-direction: column;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n    }\n\n    #lastContainer {\n        display: flex;\n        flex-direction: column;\n        grid-column: 2 / 3;\n        grid-row: 1 / 2;\n    }\n\n    #phoneContainer {\n        display: flex;\n        flex-direction: column;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n    }\n\n    #emailContainer {\n        display: flex;\n        flex-direction: column;\n        grid-column: 2 / 3;\n        grid-row: 2 / 3;\n    }\n\n    #messageContainer {\n        display: flex;\n        flex-direction: column;\n        grid-column: 1 / 3;\n        grid-row: 3 / 4;\n        height: 100%;\n    }\n\n    .labelContainer {\n        gap: 4px;\n    }\n\n    input {\n        height: 100%;\n        padding: 0 8px;\n        font-family: 'Trebuchet MS', Arial, sans-serif;\n        font-size: 1rem;\n    }\n\n    label {\n        font-family: 'Trebuchet MS', Arial, sans-serif;\n    }\n\n    #patientMessage {\n        height: 90%;\n        padding: 8px;\n        font-family: 'Trebuchet MS', Arial, sans-serif;\n        font-size: 1rem;\n    }\n\n    #contactFormSubmit {\n        grid-column: 1 / 3;\n        grid-row: 4 / 5;\n        width: 100px;\n        justify-self: center;\n        align-self: center;\n    }\n\n    .contactMeImage {\n        height: calc(75vh - 1.25rem);\n        width: 100vw;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n    .footer {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 1.25rem;\n    }\n}\n",""]);const p=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],c=0;c<n.length;c++){var l=n[c],s=i.base?l[0]+i.base:l[0],d=o[s]||0,f="".concat(s," ").concat(d);o[s]=d+1;var u=t(f),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=r(g,i);i.byIndex=c,e.splice(c,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var l=i(n,r),s=0;s<o.length;s++){var d=t(o[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},906:(n,e,t)=>{n.exports=t.p+"9ca8c9e7281423826523.jpeg"},484:(n,e,t)=>{n.exports=t.p+"bd02f4294f74339de504.jpeg"}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return p[n](t,t.exports,m),t.exports}m.m=p,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),i=m.n(t),r=m(569),o=m.n(r),a=m(565),c=m.n(a),l=m(216),s=m.n(l),d=m(589),f=m.n(d),u=m(747),(g={}).styleTagTransform=f(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=s(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals})();