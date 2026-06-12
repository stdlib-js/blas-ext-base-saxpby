"use strict";var x=function(n,u){return function(){try{return u||n((u={exports:{}}).exports,u),u.exports}catch(v){throw (u=0, v)}};};var p=x(function(Q,_){
var A=require('@stdlib/blas-base-saxpy/dist').ndarray,B=require('@stdlib/blas-base-sscal/dist').ndarray,e=require('@stdlib/number-float64-base-to-float32/dist'),c=5;function C(n,u,v,o,t,a,r,f,j){var q,i,m,s;if(n<=0)return r;if(u===0)return B(n,a,r,f,j);if(a===1)return A(n,u,v,o,t,r,f,j);if(q=t,i=j,o===1&&f===1){if(m=n%c,m>0)for(s=0;s<m;s++)r[i]=e(e(u*v[q])+e(a*r[i])),q+=o,i+=f;if(n<c)return r;for(s=m;s<n;s+=c)r[i]=e(e(u*v[q])+e(a*r[i])),r[i+1]=e(e(u*v[q+1])+e(a*r[i+1])),r[i+2]=e(e(u*v[q+2])+e(a*r[i+2])),r[i+3]=e(e(u*v[q+3])+e(a*r[i+3])),r[i+4]=e(e(u*v[q+4])+e(a*r[i+4])),q+=c,i+=c;return r}for(s=0;s<n;s++)r[i]=e(e(u*v[q])+e(a*r[i])),q+=o,i+=f;return r}_.exports=C
});var O=x(function(S,M){
var E=require('@stdlib/strided-base-stride2offset/dist'),D=p();function F(n,u,v,o,t,a,r){return D(n,u,v,o,E(n,o),t,a,r,E(n,r))}M.exports=F
});var w=x(function(T,k){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=O(),H=p();G(g,"ndarray",H);k.exports=g
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=w(),R,z=J(I(__dirname,"./native.js"));K(z)?R=L:R=z;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
