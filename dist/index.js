"use strict";var u=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var p=u(function(w,m){
var i=require('@stdlib/array-base-copy-indexed/dist'),l=require('@stdlib/array-base-zeros/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function y(n,e,s){var t,o,d,a,h,c,r,v;if(a=s.length,h=e.length,a<h)throw new Error(format('null0Z'));for(t=n,r=h;r<a;r++)t=[t];for(d=l(a),r=a-1;r>=0;r--)if(v=h-a+r,!(v<0)){if(c=e[v],o=s[r],o!==0&&o<c)throw new Error(f('null5F',i(e).join(", "),i(s).join(", "),r));if(c===o)d[r]=1;else if(c===1)d[r]=0;else throw new Error(f('null5G',i(e).join(", "),i(s).join(", "),r))}return{ref:n,data:t,shape:i(s),strides:d}}m.exports=y
});var b=p();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
