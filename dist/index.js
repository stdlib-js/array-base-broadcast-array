"use strict";var u=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}}};var p=u(function(w,m){"use strict";var i=require("@stdlib/array-base-copy-indexed"),l=require("@stdlib/array-base-zeros"),f=require("@stdlib/string-format");function y(n,e,a){var t,o,d,s,h,c,r,v;if(s=a.length,h=e.length,s<h)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(t=n,r=h;r<s;r++)t=[t];for(d=l(s),r=s-1;r>=0;r--)if(v=h-s+r,!(v<0)){if(c=e[v],o=a[r],o!==0&&o<c)throw new Error(f("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",i(e).join(", "),i(a).join(", "),r));if(c===o)d[r]=1;else if(c===1)d[r]=0;else throw new Error(f("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",i(e).join(", "),i(a).join(", "),r))}return{ref:n,data:t,shape:i(a),strides:d}}m.exports=y});var b=p();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
