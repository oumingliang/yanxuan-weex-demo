// { "framework": "Vue"} 

!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=99)}({26:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});weex.requireModule("modal");e.default={computed:{testCS:function(){return"home"==this.pIndexKey?"color:#b4282d;":""}},data:function(){return{pIndexKey:"home"}},mounted:function(){},methods:{tabTo:function(t){this.pIndexKey!=t&&(this.pIndexKey=t,this.$emit("tabTo",{status:"tabTo",data:{key:t}}))}}}},34:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},wrapper:{position:"fixed",bottom:0,left:0,right:0,height:90,flexWrap:"nowrap",flexDirection:"row",justifyContent:"space-around",borderTopWidth:1,borderTopColor:"#d9d9d9",backgroundColor:"#fafafa"},"bar-item":{flex:1},"bar-txt":{color:"#666666",textAlign:"center",fontSize:22,paddingTop:2},"bar-ic":{color:"#666666",textAlign:"center",paddingTop:14,fontSize:38},"bar-active":{color:"#b4282d"}}},41:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["bar-item"],on:{click:function(e){t.tabTo("home")}}},[o("text",{staticClass:["bar-ic","iconfont"],style:t.testCS},[t._v("")]),o("text",{staticClass:["bar-txt"]},[t._v("首页")])]),o("div",{staticClass:["bar-item"],on:{click:function(e){t.tabTo("topic")}}},[o("text",{staticClass:["bar-ic","iconfont"]},[t._v("")]),o("text",{staticClass:["bar-txt"]},[t._v("专题")])]),o("div",{staticClass:["bar-item","act"],on:{click:function(e){t.tabTo("class")}}},[o("text",{staticClass:["bar-ic","iconfont"]},[t._v("")]),o("text",{staticClass:["bar-txt"]},[t._v("分类")])]),o("div",{staticClass:["bar-item"],on:{click:function(e){t.tabTo("shop")}}},[o("text",{staticClass:["bar-ic","iconfont"]},[t._v("")]),o("text",{staticClass:["bar-txt"]},[t._v("购物车")])]),o("div",{staticClass:["bar-item"],on:{click:function(e){t.tabTo("my")}}},[o("text",{staticClass:["bar-ic","iconfont"]},[t._v("")]),o("text",{staticClass:["bar-txt"]},[t._v("个人")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},99:function(t,e,o){var n,r,i=[];i.push(o(34)),n=o(26);var a=o(41);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/components/tabBar.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-fc111b5c",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=n,t.exports.el="true",new Vue(t.exports)}});