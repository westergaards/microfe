var shell;shell=(()=>{"use strict";var e,r,t,o,n={860:(e,r,t)=>{var o={"./Shell":()=>Promise.all([t.e(105),t.e(751)]).then(()=>()=>t(751))},n=e=>t.o(o,e)?o[e]():Promise.resolve().then(()=>{throw new Error('Module "'+e+'" does not exist in container.')}),a=e=>{var r=t.S.default;if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S.default=e,t.I("default")};t.d(r,{get:()=>n,init:()=>a})},352:e=>{e.exports=remote}},a={};function i(e){if(a[e])return a[e].exports;var r=a[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}return i.m=n,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);i.r(t);var o={};if(2&r&&"object"==typeof e&&e)for(const r in e)o[r]=()=>e[r];return o.default=()=>e,i.d(t,o),t},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce((r,t)=>(i.f[t](e,r),r),[])),i.u=e=>e+"."+{105:"19a6",143:"e1b8",149:"192d",378:"e372",542:"a9da",602:"61c6",740:"4395",751:"af8f",953:"659a"}[e]+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},i.l=(r,t,o)=>{if(e[r])e[r].push(t);else{var n,a;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")=="microfe-shell:"+o){n=f;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack","microfe-shell:"+o),n.src=r),e[r]=[t];var u=t=>{u=()=>{},n.onerror=n.onload=null,clearTimeout(h);var o=e[r];delete e[r],n.parentNode.removeChild(n),o&&o.forEach(e=>e(t))},h=setTimeout(()=>{u({type:"timeout",target:n})},12e4);n.onerror=n.onload=u,a&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="http://microfe-shell.com.s3-website-us-east-1.amazonaws.com/",r={},t={143:[143]},o={143:["default","./RemoteWidget",352]},i.f.remotes=(e,a)=>{i.o(t,e)&&t[e].forEach(e=>{if(r[e])return a.push(r[e]);var t=o[e],s=o=>{o||(o=new Error("Container missing")),"string"==typeof o.message&&(o.message+='\nwhile loading "'+t[1]+'" from '+t[2]),n[e]=()=>{throw o},r[e]=0},l=(t,o,n,i,l)=>{try{var f=t(o,n);if(!f||!f.then)return i(f,n,l);var u=f.then(e=>i(e,n),s);if(!l)return u;a.push(r[e]=u)}catch(e){s(e)}},f=(e,r,o)=>l(r.get,t[1],r,u,o),u=t=>{r[e]=1,n[e]=e=>{e.exports=t()}};l(i,t[2],1,(e,r,o)=>e?l(i.I,t[0],e,f,o):s(),1)})},(()=>{i.S={};var e={};i.I=r=>{if(e[r])return e[r];e[r]=1,i.o(i.S,r)||(i.S[r]={});var t=i.S[r],o=e=>"undefined"!=typeof console&&console.warn&&console.warn(e),n=(e,r,n,a)=>{r=r||[],a=e;var i=()=>o("Version conflict for shared modules: "+e+" "+(v&&v.join("."))+" <=> "+(r&&r.join("."))),s=()=>{if(t[a]){for(var s=t[a].version||[],l=0;l<r.length&&l<s.length;l++)if(s[l]!=r[l]){if("string"==typeof s[l]||"string"==typeof r[l])return i();if(s[l]>r[l])return;if(s[l]<r[l]){l=-1;break}}if(l>=0&&r.length<=s.length)return;if(t[a].loaded)return o("Ignoring providing of already used shared module: "+e)}t[a]={get:n,version:r}};s(),r.forEach(e=>{a+="`"+e,s()})},a=[];switch(r){case"default":n("react",[16,13,1],()=>i.e(378).then(()=>()=>i(378))),n("react-dom",[16,13,1],()=>Promise.all([i.e(542),i.e(105)]).then(()=>()=>i(542))),n("react-router",[6,0,"0-alpha",5],()=>Promise.all([i.e(105),i.e(740)]).then(()=>()=>i(740))),n("react-router-dom",[6,0,"0-alpha",5],()=>Promise.all([i.e(105),i.e(602)]).then(()=>()=>i(602))),(e=>{var t=e=>o("Initialization of sharing external failed: "+e);try{var n=i(e);if(!n)return;var s=e=>e&&e.init&&e.init(i.S[r]);if(n.then)return a.push(n.then(s,t));var l=s(n);if(l&&l.then)a.push(l.catch(t))}catch(e){t(e)}})(352)}return a.length&&(e[r]=Promise.all(a).then(()=>e[r]=1))}})(),(()=>{var e=(e,r)=>{for(var t=0;t<r.length;t++){if(t===e.length)return 1;if(e[t]!=r[t]){if("string"==typeof e[t]||"string"==typeof r[t]||e[t]<r[t])return 1;if(e[t]>r[t])return}}},r=(r,t,o,n)=>{var a,s=t,l=(o=o||[]).map(e=>s+="`"+e);for(l.unshift(t);s=l.shift();)if(i.o(r,s)&&!e(a=r[s].version||[],o))return r[s];var f="Unsatisfied version of shared module "+t+"@"+(a&&a.join("."))+" (required "+t+"@"+o.join(".")+")";if(n)throw new Error(f);"undefined"!=typeof console&&console.warn&&console.warn(f)},t=e=>(e.loaded=1,e.get()),o=(e,o,n,a)=>{i.I(e);var s=i.S[e],l=s&&r(s,o,n);return l?t(l):a()},s={},l={105:()=>o("default","react",["16",13,0],()=>i.e(378).then(()=>()=>i(378))),328:()=>o("default","react-router-dom",["6","0","0-alpha","5"],()=>i.e(149).then(()=>()=>i(602))),330:()=>o("default","react-router",["6","0","0-alpha","5"],()=>i.e(953).then(()=>()=>i(740)))},f={105:[105],149:[330],602:[330],751:[328]};i.f.consumes=(e,r)=>{i.o(f,e)&&f[e].forEach(e=>{if(i.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,n[e]=t=>{delete a[e],t.exports=r()}},o=r=>{delete s[e],n[e]=t=>{throw delete a[e],r}};try{var f=l[e]();f.then?r.push(s[e]=f.then(t).catch(o)):t(f)}catch(e){o(e)}})}})(),(()=>{var e={204:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^1(05|43)$/.test(r))e[r]=0;else{var n=new Promise((t,n)=>{o=e[r]=[t,n]});t.push(o[2]=n);var a=i.p+i.u(r),s=new Error;i.l(a,t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}},"chunk-"+r)}};var r=window.webpackJsonpmicrofe_shell=window.webpackJsonpmicrofe_shell||[],t=r.push.bind(r);r.push=function(r){for(var t,n,a=r[0],s=r[1],l=r[3],f=0,u=[];f<a.length;f++)n=a[f],i.o(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(t in s)i.o(s,t)&&(i.m[t]=s[t]);for(l&&l(i),o&&o(r);u.length;)u.shift()()};var o=t})(),i(860)})();
//# sourceMappingURL=remoteEntry.js.map