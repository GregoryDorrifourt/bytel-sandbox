!function(e,t){"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof exports?module.exports=t():e.svg4everybody=t()}(this,function(){function e(e,t){if(t){var n=!e.getAttribute("viewBox")&&t.getAttribute("viewBox"),i=document.createDocumentFragment(),o=t.cloneNode(!0);for(n&&e.setAttribute("viewBox",n);o.childNodes.length;)i.appendChild(o.firstChild);e.appendChild(i)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=document.createElement("x");n.innerHTML=t.responseText,t.s.splice(0).map(function(t){e(t[0],n.querySelector("#"+t[1].replace(/(\W)/g,"\\$1")))})}},t.onreadystatechange()}function n(n){function i(){for(var n,l,u=0;u<o.length;)if(n=o[u],l=n.parentNode,l&&/svg/i.test(l.nodeName)){var c=n.getAttribute("xlink:href");if(r&&(!a||a(c,l,n))){var f=c.split("#"),g=f[0],v=f[1];if(l.removeChild(n),g.length){var p=d[g]=d[g]||new XMLHttpRequest;p.s||(p.s=[],p.open("GET",g),p.send()),p.s.push([l,v]),t(p)}else e(l,document.getElementById(v))}}else u+=1;s(i,17)}n=n||{};var o=document.getElementsByTagName("use"),r="polyfill"in n?n.polyfill:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,a=n.validate,s=window.requestAnimationFrame||setTimeout,d={};r&&i()}return console.log("svg4everybody v2.0.0"),n});

;
//# sourceMappingURL=scripts.js.map