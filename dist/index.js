"use strict";var x=function(n,u){return function(){return u||n((u={exports:{}}).exports,u),u.exports}};var p=x(function(Q,_){
var A=require('@stdlib/blas-base-saxpy/dist').ndarray,B=require('@stdlib/blas-base-sscal/dist').ndarray,e=require('@stdlib/number-float64-base-to-float32/dist'),c=5;function C(n,u,q,o,t,v,r,f,j){var a,i,m,s;if(n<=0)return r;if(u===0)return B(n,v,r,f,j);if(v===1)return A(n,u,q,o,t,r,f,j);if(a=t,i=j,o===1&&f===1){if(m=n%c,m>0)for(s=0;s<m;s++)r[i]=e(e(u*q[a])+e(v*r[i])),a+=o,i+=f;if(n<c)return r;for(s=m;s<n;s+=c)r[i]=e(e(u*q[a])+e(v*r[i])),r[i+1]=e(e(u*q[a+1])+e(v*r[i+1])),r[i+2]=e(e(u*q[a+2])+e(v*r[i+2])),r[i+3]=e(e(u*q[a+3])+e(v*r[i+3])),r[i+4]=e(e(u*q[a+4])+e(v*r[i+4])),a+=c,i+=c;return r}for(s=0;s<n;s++)r[i]=e(e(u*q[a])+e(v*r[i])),a+=o,i+=f;return r}_.exports=C
});var O=x(function(S,M){
var E=require('@stdlib/strided-base-stride2offset/dist'),D=p();function F(n,u,q,o,t,v,r){return D(n,u,q,o,E(n,o),t,v,r,E(n,r))}M.exports=F
});var w=x(function(T,k){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=O(),H=p();G(g,"ndarray",H);k.exports=g
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=w(),R,z=J(I(__dirname,"./native.js"));K(z)?R=L:R=z;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
