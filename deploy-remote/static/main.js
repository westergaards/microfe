(()=>{var e,r,t,o,n={276:e=>{"use strict";e.exports=shell}},a={};function i(e){if(a[e])return a[e].exports;var r=a[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);i.r(t);var o={};if(2&r&&"object"==typeof e&&e)for(const r in e)o[r]=()=>e[r];return o.default=()=>e,i.d(t,o),t},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce((r,t)=>(i.f[t](e,r),r),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},i.l=(r,t,o)=>{if(e[r])e[r].push(t);else{var n,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var u=s[f];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")=="wp5-starter-react:"+o){n=u;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack","wp5-starter-react:"+o),n.src=r),e[r]=[t];var l=t=>{l=()=>{},n.onerror=n.onload=null,clearTimeout(c);var o=e[r];delete e[r],n.parentNode.removeChild(n),o&&o.forEach(e=>e(t))},c=setTimeout(()=>{l({type:"timeout",target:n})},12e4);n.onerror=n.onload=l,a&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="http://microfe-site.com.s3-website-us-east-1.amazonaws.com/",r={},t={485:[485]},o={485:["default","./Shell",276]},i.f.remotes=(e,a)=>{i.o(t,e)&&t[e].forEach(e=>{if(r[e])return a.push(r[e]);var t=o[e],s=o=>{o||(o=new Error("Container missing")),"string"==typeof o.message&&(o.message+='\nwhile loading "'+t[1]+'" from '+t[2]),n[e]=()=>{throw o},r[e]=0},f=(t,o,n,i,f)=>{try{var u=t(o,n);if(!u||!u.then)return i(u,n,f);var l=u.then(e=>i(e,n),s);if(!f)return l;a.push(r[e]=l)}catch(e){s(e)}},u=(e,r,o)=>f(r.get,t[1],r,l,o),l=t=>{r[e]=1,n[e]=e=>{e.exports=t()}};f(i,t[2],1,(e,r,o)=>e?f(i.I,t[0],e,u,o):s(),1)})},(()=>{i.S={};var e={};i.I=r=>{if(e[r])return e[r];e[r]=1,i.o(i.S,r)||(i.S[r]={});var t=i.S[r],o=e=>"undefined"!=typeof console&&console.warn&&console.warn(e),n=(e,r,n,a)=>{r=r||[],a=e;var i=()=>o("Version conflict for shared modules: "+e+" "+(v&&v.join("."))+" <=> "+(r&&r.join("."))),s=()=>{if(t[a]){for(var s=t[a].version||[],f=0;f<r.length&&f<s.length;f++)if(s[f]!=r[f]){if("string"==typeof s[f]||"string"==typeof r[f])return i();if(s[f]>r[f])return;if(s[f]<r[f]){f=-1;break}}if(f>=0&&r.length<=s.length)return;if(t[a].loaded)return o("Ignoring providing of already used shared module: "+e)}t[a]={get:n,version:r}};s(),r.forEach(e=>{a+="`"+e,s()})},a=[];switch(r){case"default":n("react",[16,13,1],()=>i.e(294).then(()=>()=>i(294))),n("react-dom",[16,13,1],()=>Promise.all([i.e(935),i.e(104)]).then(()=>()=>i(935))),(e=>{var t=e=>o("Initialization of sharing external failed: "+e);try{var n=i(e);if(!n)return;var s=e=>e&&e.init&&e.init(i.S[r]);if(n.then)return a.push(n.then(s,t));var f=s(n);if(f&&f.then)a.push(f.catch(t))}catch(e){t(e)}})(276)}return a.length&&(e[r]=Promise.all(a).then(()=>e[r]=1))}})(),(()=>{var e=(e,r)=>{for(var t=0;t<r.length;t++){if(t===e.length)return 1;if(e[t]!=r[t]){if("string"==typeof e[t]||"string"==typeof r[t]||e[t]<r[t])return 1;if(e[t]>r[t])return}}},r=(r,t,o,n)=>{var a,s=t,f=(o=o||[]).map(e=>s+="`"+e);for(f.unshift(t);s=f.shift();)if(i.o(r,s)&&!e(a=r[s].version||[],o))return r[s];var u="Unsatisfied version of shared module "+t+"@"+(a&&a.join("."))+" (required "+t+"@"+o.join(".")+")";if(n)throw new Error(u);"undefined"!=typeof console&&console.warn&&console.warn(u)},t=e=>(e.loaded=1,e.get()),o=(e,o,n,a)=>{i.I(e);var s=i.S[e],f=s&&r(s,o,n);return f?t(f):a()},s={},f={104:()=>o("default","react",["16",13,0],()=>i.e(294).then(()=>()=>i(294))),871:()=>o("default","react-dom",["16",13,0],()=>i.e(935).then(()=>()=>i(935)))},u={104:[104],712:[871]};i.f.consumes=(e,r)=>{i.o(u,e)&&u[e].forEach(e=>{if(i.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,n[e]=t=>{delete a[e],t.exports=r()}},o=r=>{delete s[e],n[e]=t=>{throw delete a[e],r}};try{var u=f[e]();u.then?r.push(s[e]=u.then(t).catch(o)):t(u)}catch(e){o(e)}})}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(104|485)$/.test(r))e[r]=0;else{var n=new Promise((t,n)=>{o=e[r]=[t,n]});t.push(o[2]=n);var a=i.p+i.u(r),s=new Error;i.l(a,t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}},"chunk-"+r)}};var r=window.webpackJsonpwp5_starter_react=window.webpackJsonpwp5_starter_react||[],t=r.push.bind(r);r.push=function(r){for(var t,n,a=r[0],s=r[1],f=r[3],u=0,l=[];u<a.length;u++)n=a[u],i.o(e,n)&&e[n]&&l.push(e[n][0]),e[n]=0;for(t in s)i.o(s,t)&&(i.m[t]=s[t]);for(f&&f(i),o&&o(r);l.length;)l.shift()()};var o=t})(),Promise.all([i.e(104),i.e(712)]).then(i.bind(i,712))})();