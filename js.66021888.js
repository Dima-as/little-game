parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{"./..\\img\\rex.png":[["rex.06e07d2c.png","OdPz"],"OdPz"],"./..\\img\\cactus.png":[["cactus.1ec16ab1.png","sLhN"],"sLhN"]}],"QvaY":[function(require,module,exports) {
"use strict";require("../css/styles.css");var e=document.getElementById("dino"),t=document.getElementById("cactus");function s(){"jump"!=e.classList&&e.classList.add("jump"),setTimeout(function(){e.classList.remove("jump")},300)}document.addEventListener("keydown",function(e){s()});var n=setInterval(function(){var s=parseInt(window.getComputedStyle(e).getPropertyValue("top")),n=parseInt(window.getComputedStyle(t).getPropertyValue("left"));n<40&&n>0&&s>=150&&alert("GEME OVER!!")});
},{"../css/styles.css":"krre"}]},{},["QvaY"], null)
//# sourceMappingURL=/little-game/js.66021888.js.map