(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,t,e){"use strict";e.r(t);e("JBxO"),e("FdtR");var o=function(n){return new Promise((function(t){setTimeout((function(){t(n)}),n)}))},a=function(n){return console.log("Resolved after "+n+"ms")};o(2e3).then(a),o(1e3).then(a),o(1500).then(a);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){return new Promise((function(t,e){var o,a,i=(o=200,a=500,Math.floor(Math.random()*(a-o+1)+o));setTimeout((function(){Math.random()>.3?t({id:n.id,time:i}):e(n.id)}),i)}))},s=function(n){var t=n.id,e=n.time;console.log("Transaction "+t+" processed in "+e+"ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a43e1a6c9899a17ce610.js.map