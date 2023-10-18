var bT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var K5=bT((_t,wt)=>{function PT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},ju={},r0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),RT=Symbol.for("react.portal"),OT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),AT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),MT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),FT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),wg=Symbol.iterator;function UT(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=Ds.prototype;function Yh(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}var Qh=Yh.prototype=new a0;Qh.constructor=Yh;s0(Qh,Ds.prototype);Qh.isPureReactComponent=!0;var Eg=Array.isArray,l0=Object.prototype.hasOwnProperty,Xh={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:Xh.current}}function zT(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function BT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BT(""+t.key):e.toString(36)}function ul(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case RT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xc(o,0):r,Eg(i)?(n="",t!=null&&(n=t.replace(Sg,"$&/")+"/"),ul(i,e,n,"",function(u){return u})):i!=null&&(Jh(i)&&(i=zT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Eg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xc(s,a);o+=ul(s,e,n,l,i)}else if(l=UT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xc(s,a++),o+=ul(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return ul(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},cl={transition:null},WT={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Xh};K.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ds;K.Fragment=OT;K.Profiler=AT;K.PureComponent=Yh;K.StrictMode=NT;K.Suspense=$T;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!u0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:LT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DT,_context:t},t.Consumer=t};K.createElement=c0;K.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:MT,render:t}};K.isValidElement=Jh;K.lazy=function(t){return{$$typeof:jT,_payload:{_status:-1,_result:t},_init:VT}};K.memo=function(t,e){return{$$typeof:FT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return nt.current.useCallback(t,e)};K.useContext=function(t){return nt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};K.useEffect=function(t,e){return nt.current.useEffect(t,e)};K.useId=function(){return nt.current.useId()};K.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return nt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};K.useRef=function(t){return nt.current.useRef(t)};K.useState=function(t){return nt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return nt.current.useTransition()};K.version="18.2.0";r0.exports=K;var C=r0.exports;const ct=qh(C),HT=PT({__proto__:null,default:ct},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT=C,KT=Symbol.for("react.element"),qT=Symbol.for("react.fragment"),YT=Object.prototype.hasOwnProperty,QT=GT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YT.call(e,r)&&!XT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KT,type:t,key:s,ref:o,props:i,_owner:QT.current}}ju.Fragment=qT;ju.jsx=d0;ju.jsxs=d0;n0.exports=ju;var E=n0.exports,df={},f0={exports:{}},It={},h0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,$){var F=P.length;P.push($);e:for(;0<F;){var J=F-1>>>1,Z=P[J];if(0<i(Z,$))P[J]=$,P[F]=Z,F=J;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],F=P.pop();if(F!==$){P[0]=F;e:for(var J=0,Z=P.length,Rt=Z>>>1;J<Rt;){var Fe=2*(J+1)-1,Je=P[Fe],Ve=Fe+1,We=P[Ve];if(0>i(Je,F))Ve<Z&&0>i(We,Je)?(P[J]=We,P[Ve]=F,J=Ve):(P[J]=Je,P[Fe]=F,J=Fe);else if(Ve<Z&&0>i(We,F))P[J]=We,P[Ve]=F,J=Ve;else break e}}return $}function i(P,$){var F=P.sortIndex-$.sortIndex;return F!==0?F:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=P)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function w(P){if(v=!1,y(P),!g)if(n(l)!==null)g=!0,yn(x);else{var $=n(u);$!==null&&it(w,$.startTime-P)}}function x(P,$){g=!1,v&&(v=!1,m(R),R=-1),p=!0;var F=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||P&&!B());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var Z=J(d.expirationTime<=$);$=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),y($)}else r(l);d=n(l)}if(d!==null)var Rt=!0;else{var Fe=n(u);Fe!==null&&it(w,Fe.startTime-$),Rt=!1}return Rt}finally{d=null,f=F,p=!1}}var I=!1,T=null,R=-1,z=5,D=-1;function B(){return!(t.unstable_now()-D<z)}function Pt(){if(T!==null){var P=t.unstable_now();D=P;var $=!0;try{$=T(!0,P)}finally{$?oe():(I=!1,T=null)}}else I=!1}var oe;if(typeof h=="function")oe=function(){h(Pt)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,gn=mt.port2;mt.port1.onmessage=Pt,oe=function(){gn.postMessage(null)}}else oe=function(){_(Pt,0)};function yn(P){T=P,I||(I=!0,oe())}function it(P,$){R=_(function(){P(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,yn(x))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var F=f;f=$;try{return P()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=f;f=P;try{return $()}finally{f=F}},t.unstable_scheduleCallback=function(P,$,F){var J=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,P={id:c++,callback:$,priorityLevel:P,startTime:F,expirationTime:Z,sortIndex:-1},F>J?(P.sortIndex=F,e(u,P),n(l)===null&&P===n(u)&&(v?(m(R),R=-1):v=!0,it(w,F-J))):(P.sortIndex=Z,e(l,P),g||p||(g=!0,yn(x))),P},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(P){var $=f;return function(){var F=f;f=$;try{return P.apply(this,arguments)}finally{f=F}}}})(p0);h0.exports=p0;var JT=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=C,Ct=JT;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,No={};function _i(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(No[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},Tg={};function eI(t){return ff.call(Tg,t)?!0:ff.call(Cg,t)?!1:ZT.test(t)?Tg[t]=!0:(Cg[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ep);Be[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ep);Be[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ep);Be[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tp(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Jc;function oo(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var Zc=!1;function ed(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function rI(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Mi:return"Portal";case hf:return"Profiler";case np:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=w0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=sI(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&tp(t,"checked",e,!1)}function vf(t,e){S0(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ao(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function C0(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=x0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,es=null,ts=null;function Rg(t){if(t=va(t)){if(typeof If!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Wu(e),If(t.stateNode,t.type,e))}}function b0(t){es?ts?ts.push(t):ts=[t]:es=t}function P0(){if(es){var t=es,e=ts;if(ts=es=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function R0(t,e){return t(e)}function O0(){}var td=!1;function N0(t,e,n){if(td)return t(e,n);td=!0;try{return R0(t,e,n)}finally{td=!1,(es!==null||ts!==null)&&(O0(),P0())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var xf=!1;if(Rn)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){xf=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{xf=!1}function lI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yo=!1,Nl=null,Al=!1,kf=null,uI={onError:function(t){yo=!0,Nl=t}};function cI(t,e,n,r,i,s,o,a,l){yo=!1,Nl=null,lI.apply(uI,arguments)}function dI(t,e,n,r,i,s,o,a,l){if(cI.apply(this,arguments),yo){if(yo){var u=Nl;yo=!1,Nl=null}else throw Error(k(198));Al||(Al=!0,kf=u)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(wi(t)!==t)throw Error(k(188))}function fI(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Og(i),t;if(s===r)return Og(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function D0(t){return t=fI(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var M0=Ct.unstable_scheduleCallback,Ng=Ct.unstable_cancelCallback,hI=Ct.unstable_shouldYield,pI=Ct.unstable_requestPaint,Se=Ct.unstable_now,mI=Ct.unstable_getCurrentPriorityLevel,op=Ct.unstable_ImmediatePriority,$0=Ct.unstable_UserBlockingPriority,Dl=Ct.unstable_NormalPriority,gI=Ct.unstable_LowPriority,F0=Ct.unstable_IdlePriority,Uu=null,un=null;function yI(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:wI,vI=Math.log,_I=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(vI(t)/_I|0)|0}var Ba=64,Va=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=lo(a):(s&=o,s!==0&&(r=lo(s)))}else o=n&~i,o!==0?r=lo(o):s!==0&&(r=lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=EI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function CI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,lp,B0,V0,W0,Pf=!1,Wa=[],nr=null,rr=null,ir=null,Lo=new Map,Mo=new Map,Gn=[],TI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ag(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=va(e),e!==null&&lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function II(t,e,n,r,i){switch(e){case"focusin":return nr=Ys(nr,t,e,n,r,i),!0;case"dragenter":return rr=Ys(rr,t,e,n,r,i),!0;case"mouseover":return ir=Ys(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Ys(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Ys(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function H0(t){var e=Hr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=A0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){B0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=va(n),e!==null&&lp(e),t.blockedOn=n,!1;e.shift()}return!0}function Dg(t,e,n){dl(t)&&n.delete(e)}function xI(){Pf=!1,nr!==null&&dl(nr)&&(nr=null),rr!==null&&dl(rr)&&(rr=null),ir!==null&&dl(ir)&&(ir=null),Lo.forEach(Dg),Mo.forEach(Dg)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,xI)))}function $o(t){function e(i){return Qs(i,t)}if(0<Wa.length){Qs(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Qs(nr,t),rr!==null&&Qs(rr,t),ir!==null&&Qs(ir,t),Lo.forEach(e),Mo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&Gn.shift()}var ns=$n.ReactCurrentBatchConfig,Ml=!0;function kI(t,e,n,r){var i=te,s=ns.transition;ns.transition=null;try{te=1,up(t,e,n,r)}finally{te=i,ns.transition=s}}function bI(t,e,n,r){var i=te,s=ns.transition;ns.transition=null;try{te=4,up(t,e,n,r)}finally{te=i,ns.transition=s}}function up(t,e,n,r){if(Ml){var i=Rf(t,e,n,r);if(i===null)fd(t,e,r,$l,n),Ag(t,r);else if(II(i,t,e,n,r))r.stopPropagation();else if(Ag(t,r),e&4&&-1<TI.indexOf(t)){for(;i!==null;){var s=va(i);if(s!==null&&z0(s),s=Rf(t,e,n,r),s===null&&fd(t,e,r,$l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fd(t,e,r,null,n)}}var $l=null;function Rf(t,e,n,r){if($l=null,t=sp(r),t=Hr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function G0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case op:return 1;case $0:return 4;case Dl:case gI:return 16;case F0:return 536870912;default:return 16}default:return 16}}var Zn=null,cp=null,fl=null;function K0(){if(fl)return fl;var t,e=cp,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Lg(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:Lg,this.isPropagationStopped=Lg,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dp=xt(Ls),ya=_e({},Ls,{view:0,detail:0}),PI=xt(ya),rd,id,Xs,zu=_e({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(rd=t.screenX-Xs.screenX,id=t.screenY-Xs.screenY):id=rd=0,Xs=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),Mg=xt(zu),RI=_e({},zu,{dataTransfer:0}),OI=xt(RI),NI=_e({},ya,{relatedTarget:0}),sd=xt(NI),AI=_e({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),DI=xt(AI),LI=_e({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MI=xt(LI),$I=_e({},Ls,{data:0}),$g=xt($I),FI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UI[t])?!!e[t]:!1}function fp(){return zI}var BI=_e({},ya,{key:function(t){if(t.key){var e=FI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VI=xt(BI),WI=_e({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fg=xt(WI),HI=_e({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),GI=xt(HI),KI=_e({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),qI=xt(KI),YI=_e({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QI=xt(YI),XI=[9,13,27,32],hp=Rn&&"CompositionEvent"in window,vo=null;Rn&&"documentMode"in document&&(vo=document.documentMode);var JI=Rn&&"TextEvent"in window&&!vo,q0=Rn&&(!hp||vo&&8<vo&&11>=vo),jg=String.fromCharCode(32),Ug=!1;function Y0(t,e){switch(t){case"keyup":return XI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fi=!1;function ZI(t,e){switch(t){case"compositionend":return Q0(e);case"keypress":return e.which!==32?null:(Ug=!0,jg);case"textInput":return t=e.data,t===jg&&Ug?null:t;default:return null}}function ex(t,e){if(Fi)return t==="compositionend"||!hp&&Y0(t,e)?(t=K0(),fl=cp=Zn=null,Fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q0&&e.locale!=="ko"?null:e.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tx[t.type]:e==="textarea"}function X0(t,e,n,r){b0(r),e=Fl(e,"onChange"),0<e.length&&(n=new dp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Fo=null;function nx(t){l1(t,0)}function Bu(t){var e=zi(t);if(E0(e))return t}function rx(t,e){if(t==="change")return e}var J0=!1;if(Rn){var od;if(Rn){var ad="oninput"in document;if(!ad){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),ad=typeof Bg.oninput=="function"}od=ad}else od=!1;J0=od&&(!document.documentMode||9<document.documentMode)}function Vg(){_o&&(_o.detachEvent("onpropertychange",Z0),Fo=_o=null)}function Z0(t){if(t.propertyName==="value"&&Bu(Fo)){var e=[];X0(e,Fo,t,sp(t)),N0(nx,e)}}function ix(t,e,n){t==="focusin"?(Vg(),_o=e,Fo=n,_o.attachEvent("onpropertychange",Z0)):t==="focusout"&&Vg()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(Fo)}function ox(t,e){if(t==="click")return Bu(e)}function ax(t,e){if(t==="input"||t==="change")return Bu(e)}function lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:lx;function jo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Wg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hg(t,e){var n=Wg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wg(n)}}function e1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t1(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=t1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e1(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hg(n,s);var o=Hg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cx=Rn&&"documentMode"in document&&11>=document.documentMode,ji=null,Of=null,wo=null,Nf=!1;function Gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||ji==null||ji!==Ol(r)||(r=ji,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&jo(wo,r)||(wo=r,r=Fl(Of,"onSelect"),0<r.length&&(e=new dp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},ld={},n1={};Rn&&(n1=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Vu(t){if(ld[t])return ld[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n1)return ld[t]=e[n];return t}var r1=Vu("animationend"),i1=Vu("animationiteration"),s1=Vu("animationstart"),o1=Vu("transitionend"),a1=new Map,Kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){a1.set(t,e),_i(e,[t])}for(var ud=0;ud<Kg.length;ud++){var cd=Kg[ud],dx=cd.toLowerCase(),fx=cd[0].toUpperCase()+cd.slice(1);br(dx,"on"+fx)}br(r1,"onAnimationEnd");br(i1,"onAnimationIteration");br(s1,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(o1,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dI(r,e,void 0,t),t.currentTarget=null}function l1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}}}if(Al)throw t=kf,Al=!1,kf=null,t}function ce(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var r=t+"__bubble";n.has(r)||(u1(e,t,2,!1),n.add(r))}function dd(t,e,n){var r=0;e&&(r|=4),u1(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[Ka]){t[Ka]=!0,g0.forEach(function(n){n!=="selectionchange"&&(hx.has(n)||dd(n,!1,t),dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,dd("selectionchange",!1,e))}}function u1(t,e,n,r){switch(G0(e)){case 1:var i=kI;break;case 4:i=bI;break;default:i=up}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}N0(function(){var u=s,c=sp(n),d=[];e:{var f=a1.get(t);if(f!==void 0){var p=dp,g=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":p=VI;break;case"focusin":g="focus",p=sd;break;case"focusout":g="blur",p=sd;break;case"beforeblur":case"afterblur":p=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=OI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GI;break;case r1:case i1:case s1:p=DI;break;case o1:p=qI;break;case"scroll":p=PI;break;case"wheel":p=QI;break;case"copy":case"cut":case"paste":p=MI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fg}var v=(e&4)!==0,_=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Do(h,m),w!=null&&v.push(zo(h,w,y)))),_)break;h=h.return}0<v.length&&(f=new p(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Tf&&(g=n.relatedTarget||n.fromElement)&&(Hr(g)||g[On]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Hr(g):null,g!==null&&(_=wi(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Mg,w="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Fg,w="onPointerLeave",m="onPointerEnter",h="pointer"),_=p==null?f:zi(p),y=g==null?f:zi(g),f=new v(w,h+"leave",p,n,c),f.target=_,f.relatedTarget=y,w=null,Hr(c)===u&&(v=new v(m,h+"enter",g,n,c),v.target=y,v.relatedTarget=_,w=v),_=w,p&&g)t:{for(v=p,m=g,h=0,y=v;y;y=Ni(y))h++;for(y=0,w=m;w;w=Ni(w))y++;for(;0<h-y;)v=Ni(v),h--;for(;0<y-h;)m=Ni(m),y--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ni(v),m=Ni(m)}v=null}else v=null;p!==null&&Yg(d,f,p,v,!1),g!==null&&_!==null&&Yg(d,_,g,v,!0)}}e:{if(f=u?zi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var x=rx;else if(zg(f))if(J0)x=ax;else{x=sx;var I=ix}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=ox);if(x&&(x=x(t,u))){X0(d,x,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&_f(f,"number",f.value)}switch(I=u?zi(u):window,t){case"focusin":(zg(I)||I.contentEditable==="true")&&(ji=I,Of=u,wo=null);break;case"focusout":wo=Of=ji=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,Gg(d,n,c);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":Gg(d,n,c)}var T;if(hp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Fi?Y0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(q0&&n.locale!=="ko"&&(Fi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Fi&&(T=K0()):(Zn=c,cp="value"in Zn?Zn.value:Zn.textContent,Fi=!0)),I=Fl(u,R),0<I.length&&(R=new $g(R,t,null,n,c),d.push({event:R,listeners:I}),T?R.data=T:(T=Q0(n),T!==null&&(R.data=T)))),(T=JI?ZI(t,n):ex(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(c=new $g("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}l1(d,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Do(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Do(n,s),l!=null&&o.unshift(zo(n,l,a))):i||(l=Do(n,s),l!=null&&o.push(zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(px,`
`).replace(mx,"")}function qa(t,e,n){if(e=Qg(e),Qg(t)!==e&&n)throw Error(k(425))}function jl(){}var Af=null,Df=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(t){return Xg.resolve(null).then(t).catch(vx)}:Mf;function vx(t){setTimeout(function(){throw t})}function hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$o(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ms,Bo="__reactProps$"+Ms,On="__reactContainer$"+Ms,$f="__reactEvents$"+Ms,_x="__reactListeners$"+Ms,wx="__reactHandles$"+Ms;function Hr(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jg(t);t!==null;){if(n=t[ln])return n;t=Jg(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[ln]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Wu(t){return t[Bo]||null}var Ff=[],Bi=-1;function Pr(t){return{current:t}}function pe(t){0>Bi||(t.current=Ff[Bi],Ff[Bi]=null,Bi--)}function ue(t,e){Bi++,Ff[Bi]=t.current,t.current=e}var Er={},Qe=Pr(Er),dt=Pr(!1),si=Er;function ps(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ul(){pe(dt),pe(Qe)}function Zg(t,e,n){if(Qe.current!==Er)throw Error(k(168));ue(Qe,e),ue(dt,n)}function c1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,iI(t)||"Unknown",i));return _e({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,si=Qe.current,ue(Qe,t),ue(dt,dt.current),!0}function ey(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=c1(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(Qe),ue(Qe,t)):pe(dt),ue(dt,n)}var Sn=null,Hu=!1,pd=!1;function d1(t){Sn===null?Sn=[t]:Sn.push(t)}function Ex(t){Hu=!0,d1(t)}function Rr(){if(!pd&&Sn!==null){pd=!0;var t=0,e=te;try{var n=Sn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Hu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),M0(op,Rr),i}finally{te=e,pd=!1}}return null}var Vi=[],Wi=0,Bl=null,Vl=0,Nt=[],At=0,oi=null,Cn=1,Tn="";function Fr(t,e){Vi[Wi++]=Vl,Vi[Wi++]=Bl,Bl=t,Vl=e}function f1(t,e,n){Nt[At++]=Cn,Nt[At++]=Tn,Nt[At++]=oi,oi=t;var r=Cn;t=Tn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-Xt(e)+i|n<<i|r,Tn=s+t}else Cn=1<<s|n<<i|r,Tn=t}function mp(t){t.return!==null&&(Fr(t,1),f1(t,1,0))}function gp(t){for(;t===Bl;)Bl=Vi[--Wi],Vi[Wi]=null,Vl=Vi[--Wi],Vi[Wi]=null;for(;t===oi;)oi=Nt[--At],Nt[At]=null,Tn=Nt[--At],Nt[At]=null,Cn=Nt[--At],Nt[At]=null}var Et=null,vt=null,ge=!1,Gt=null;function h1(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ty(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,vt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Cn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,vt=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(ge){var e=vt;if(e){var n=e;if(!ty(t,e)){if(jf(t))throw Error(k(418));e=sr(n.nextSibling);var r=Et;e&&ty(t,e)?h1(r,n):(t.flags=t.flags&-4097|2,ge=!1,Et=t)}}else{if(jf(t))throw Error(k(418));t.flags=t.flags&-4097|2,ge=!1,Et=t}}}function ny(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Ya(t){if(t!==Et)return!1;if(!ge)return ny(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=vt)){if(jf(t))throw p1(),Error(k(418));for(;e;)h1(t,e),e=sr(e.nextSibling)}if(ny(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Et?sr(t.stateNode.nextSibling):null;return!0}function p1(){for(var t=vt;t;)t=sr(t.nextSibling)}function ms(){vt=Et=null,ge=!1}function yp(t){Gt===null?Gt=[t]:Gt.push(t)}var Sx=$n.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wl=Pr(null),Hl=null,Hi=null,vp=null;function _p(){vp=Hi=Hl=null}function wp(t){var e=Wl.current;pe(Wl),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Hl=t,vp=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(vp!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(Hl===null)throw Error(k(308));Hi=t,Hl.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var Gr=null;function Ep(t){Gr===null?Gr=[t]:Gr.push(t)}function m1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ep(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ep(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}function ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=_e({},d,f);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=d}}function iy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var y1=new m0.Component().refs;function Bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=lr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Jt(e,t,i,r),pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=lr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Jt(e,t,i,r),pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=lr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Jt(e,t,r,n),pl(e,t,r))}};function sy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function v1(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=ft(e)?si:Qe.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=y1,Sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=ft(e)?si:Qe.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gu.enqueueReplaceState(i,i.state,null),Gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===y1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ay(t){var e=t._init;return e(t._payload)}function _1(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=ur(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,w){return h===null||h.tag!==6?(h=Ed(y,m.mode,w),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,w){var x=y.type;return x===$i?c(m,h,y.props.children,w,y.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wn&&ay(x)===h.type)?(w=i(h,y.props),w.ref=Js(m,h,y),w.return=m,w):(w=wl(y.type,y.key,y.props,null,m.mode,w),w.ref=Js(m,h,y),w.return=m,w)}function u(m,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Sd(y,m.mode,w),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function c(m,h,y,w,x){return h===null||h.tag!==7?(h=Jr(y,m.mode,w,x),h.return=m,h):(h=i(h,y),h.return=m,h)}function d(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ed(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ja:return y=wl(h.type,h.key,h.props,null,m.mode,y),y.ref=Js(m,null,h),y.return=m,y;case Mi:return h=Sd(h,m.mode,y),h.return=m,h;case Wn:var w=h._init;return d(m,w(h._payload),y)}if(ao(h)||Ks(h))return h=Jr(h,m.mode,y,null),h.return=m,h;Qa(m,h)}return null}function f(m,h,y,w){var x=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return y.key===x?l(m,h,y,w):null;case Mi:return y.key===x?u(m,h,y,w):null;case Wn:return x=y._init,f(m,h,x(y._payload),w)}if(ao(y)||Ks(y))return x!==null?null:c(m,h,y,w,null);Qa(m,y)}return null}function p(m,h,y,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(h,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ja:return m=m.get(w.key===null?y:w.key)||null,l(h,m,w,x);case Mi:return m=m.get(w.key===null?y:w.key)||null,u(h,m,w,x);case Wn:var I=w._init;return p(m,h,y,I(w._payload),x)}if(ao(w)||Ks(w))return m=m.get(y)||null,c(h,m,w,x,null);Qa(h,w)}return null}function g(m,h,y,w){for(var x=null,I=null,T=h,R=h=0,z=null;T!==null&&R<y.length;R++){T.index>R?(z=T,T=null):z=T.sibling;var D=f(m,T,y[R],w);if(D===null){T===null&&(T=z);break}t&&T&&D.alternate===null&&e(m,T),h=s(D,h,R),I===null?x=D:I.sibling=D,I=D,T=z}if(R===y.length)return n(m,T),ge&&Fr(m,R),x;if(T===null){for(;R<y.length;R++)T=d(m,y[R],w),T!==null&&(h=s(T,h,R),I===null?x=T:I.sibling=T,I=T);return ge&&Fr(m,R),x}for(T=r(m,T);R<y.length;R++)z=p(T,m,R,y[R],w),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?R:z.key),h=s(z,h,R),I===null?x=z:I.sibling=z,I=z);return t&&T.forEach(function(B){return e(m,B)}),ge&&Fr(m,R),x}function v(m,h,y,w){var x=Ks(y);if(typeof x!="function")throw Error(k(150));if(y=x.call(y),y==null)throw Error(k(151));for(var I=x=null,T=h,R=h=0,z=null,D=y.next();T!==null&&!D.done;R++,D=y.next()){T.index>R?(z=T,T=null):z=T.sibling;var B=f(m,T,D.value,w);if(B===null){T===null&&(T=z);break}t&&T&&B.alternate===null&&e(m,T),h=s(B,h,R),I===null?x=B:I.sibling=B,I=B,T=z}if(D.done)return n(m,T),ge&&Fr(m,R),x;if(T===null){for(;!D.done;R++,D=y.next())D=d(m,D.value,w),D!==null&&(h=s(D,h,R),I===null?x=D:I.sibling=D,I=D);return ge&&Fr(m,R),x}for(T=r(m,T);!D.done;R++,D=y.next())D=p(T,m,R,D.value,w),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?R:D.key),h=s(D,h,R),I===null?x=D:I.sibling=D,I=D);return t&&T.forEach(function(Pt){return e(m,Pt)}),ge&&Fr(m,R),x}function _(m,h,y,w){if(typeof y=="object"&&y!==null&&y.type===$i&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:e:{for(var x=y.key,I=h;I!==null;){if(I.key===x){if(x=y.type,x===$i){if(I.tag===7){n(m,I.sibling),h=i(I,y.props.children),h.return=m,m=h;break e}}else if(I.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wn&&ay(x)===I.type){n(m,I.sibling),h=i(I,y.props),h.ref=Js(m,I,y),h.return=m,m=h;break e}n(m,I);break}else e(m,I);I=I.sibling}y.type===$i?(h=Jr(y.props.children,m.mode,w,y.key),h.return=m,m=h):(w=wl(y.type,y.key,y.props,null,m.mode,w),w.ref=Js(m,h,y),w.return=m,m=w)}return o(m);case Mi:e:{for(I=y.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Sd(y,m.mode,w),h.return=m,m=h}return o(m);case Wn:return I=y._init,_(m,h,I(y._payload),w)}if(ao(y))return g(m,h,y,w);if(Ks(y))return v(m,h,y,w);Qa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=Ed(y,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return _}var gs=_1(!0),w1=_1(!1),_a={},cn=Pr(_a),Vo=Pr(_a),Wo=Pr(_a);function Kr(t){if(t===_a)throw Error(k(174));return t}function Cp(t,e){switch(ue(Wo,e),ue(Vo,t),ue(cn,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}pe(cn),ue(cn,e)}function ys(){pe(cn),pe(Vo),pe(Wo)}function E1(t){Kr(Wo.current);var e=Kr(cn.current),n=Ef(e,t.type);e!==n&&(ue(Vo,t),ue(cn,n))}function Tp(t){Vo.current===t&&(pe(cn),pe(Vo))}var ye=Pr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function Ip(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var ml=$n.ReactCurrentDispatcher,gd=$n.ReactCurrentBatchConfig,ai=0,ve=null,xe=null,Ae=null,ql=!1,Eo=!1,Ho=0,Cx=0;function He(){throw Error(k(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(ai=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?kx:bx,t=n(r,i),Eo){s=0;do{if(Eo=!1,Ho=0,25<=s)throw Error(k(301));s+=1,Ae=xe=null,e.updateQueue=null,ml.current=Px,t=n(r,i)}while(Eo)}if(ml.current=Yl,e=xe!==null&&xe.next!==null,ai=0,Ae=xe=ve=null,ql=!1,e)throw Error(k(300));return t}function bp(){var t=Ho!==0;return Ho=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function $t(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Ae===null?ve.memoizedState:Ae.next;if(e!==null)Ae=e,xe=t;else{if(t===null)throw Error(k(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ae===null?ve.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Go(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=$t(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ve.lanes|=c,li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vd(t){var e=$t(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S1(){}function C1(t,e){var n=ve,r=$t(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Pp(x1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Ko(9,I1.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(k(349));ai&30||T1(n,e,i)}return i}function T1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I1(t,e,n,r){e.value=n,e.getSnapshot=r,k1(e)&&b1(t)}function x1(t,e,n){return n(function(){k1(e)&&b1(t)})}function k1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function b1(t){var e=Nn(t,1);e!==null&&Jt(e,t,1,-1)}function ly(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,ve,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P1(){return $t().memoizedState}function gl(t,e,n,r){var i=sn();ve.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&xp(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function uy(t,e){return gl(8390656,8,t,e)}function Pp(t,e){return Ku(2048,8,t,e)}function R1(t,e){return Ku(4,2,t,e)}function O1(t,e){return Ku(4,4,t,e)}function N1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A1(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,N1.bind(null,e,t),n)}function Rp(){}function D1(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L1(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M1(t,e,n){return ai&21?(tn(n,e)||(n=j0(),ve.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function Tx(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{te=n,gd.transition=r}}function $1(){return $t().memoizedState}function Ix(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(t))j1(e,n);else if(n=m1(t,e,n,r),n!==null){var i=tt();Jt(n,t,r,i),U1(n,e,r)}}function xx(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(t))j1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ep(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=m1(t,e,i,r),n!==null&&(i=tt(),Jt(n,t,r,i),U1(n,e,r))}}function F1(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function j1(t,e){Eo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}var Yl={readContext:Mt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},kx={readContext:Mt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,N1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ix.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:ly,useDebugValue:Rp,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=ly(!1),e=t[0];return t=Tx.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=sn();if(ge){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Me===null)throw Error(k(349));ai&30||T1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uy(x1.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,I1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Me.identifierPrefix;if(ge){var n=Tn,r=Cn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bx={readContext:Mt,useCallback:D1,useContext:Mt,useEffect:Pp,useImperativeHandle:A1,useInsertionEffect:R1,useLayoutEffect:O1,useMemo:L1,useReducer:yd,useRef:P1,useState:function(){return yd(Go)},useDebugValue:Rp,useDeferredValue:function(t){var e=$t();return M1(e,xe.memoizedState,t)},useTransition:function(){var t=yd(Go)[0],e=$t().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:C1,useId:$1,unstable_isNewReconciler:!1},Px={readContext:Mt,useCallback:D1,useContext:Mt,useEffect:Pp,useImperativeHandle:A1,useInsertionEffect:R1,useLayoutEffect:O1,useMemo:L1,useReducer:vd,useRef:P1,useState:function(){return vd(Go)},useDebugValue:Rp,useDeferredValue:function(t){var e=$t();return xe===null?e.memoizedState=t:M1(e,xe.memoizedState,t)},useTransition:function(){var t=vd(Go)[0],e=$t().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:C1,useId:$1,unstable_isNewReconciler:!1};function vs(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function z1(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,eh=r),Wf(t,e)},n}function B1(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wx.bind(null,t,e,n),e.then(t,t))}function dy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var Ox=$n.ReactCurrentOwner,at=!1;function Ze(t,e,n,r){e.child=t===null?w1(e,null,n,r):gs(e,t.child,n,r)}function hy(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=kp(t,e,n,r,s,i),n=bp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&n&&mp(e),e.flags|=1,Ze(t,e,r,i),e.child)}function py(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V1(t,e,s,r,i)):(t=wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function V1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,An(t,e,i)}return Hf(t,e,n,r,i)}function W1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ki,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Ki,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Ki,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Ki,yt),yt|=r;return Ze(t,e,i,n),e.child}function H1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hf(t,e,n,r,i){var s=ft(n)?si:Qe.current;return s=ps(e,s),rs(e,i),n=kp(t,e,n,r,s,i),r=bp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&r&&mp(e),e.flags|=1,Ze(t,e,n,i),e.child)}function my(t,e,n,r,i){if(ft(n)){var s=!0;zl(e)}else s=!1;if(rs(e,i),e.stateNode===null)yl(t,e),v1(e,n,r),Vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ft(n)?si:Qe.current,u=ps(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&oy(e,o,r,u),Hn=!1;var f=e.memoizedState;o.state=f,Gl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||dt.current||Hn?(typeof c=="function"&&(Bf(e,n,c,r),l=e.memoizedState),(a=Hn||sy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ft(n)?si:Qe.current,l=ps(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&oy(e,o,r,l),Hn=!1,f=e.memoizedState,o.state=f,Gl(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||dt.current||Hn?(typeof p=="function"&&(Bf(e,n,p,r),g=e.memoizedState),(u=Hn||sy(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Gf(t,e,n,r,s,i)}function Gf(t,e,n,r,i,s){H1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ey(e,n,!1),An(t,e,s);r=e.stateNode,Ox.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,a,s)):Ze(t,e,a,s),e.memoizedState=r.state,i&&ey(e,n,!0),e.child}function G1(t){var e=t.stateNode;e.pendingContext?Zg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zg(t,e.context,!1),Cp(t,e.containerInfo)}function gy(t,e,n,r,i){return ms(),yp(i),e.flags|=256,Ze(t,e,n,r),e.child}var Kf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function K1(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ye,i&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qu(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Kf,t):Op(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Nx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kf,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Op(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&yp(r),gs(e,t.child,null,n),t=Op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_d(Error(k(422))),Xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Kf,s);if(!(e.mode&1))return Xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=_d(s,r,void 0),Xa(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Jt(r,t,i,-1))}return $p(),r=_d(Error(k(421))),Xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Hx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=sr(i.nextSibling),Et=e,ge=!0,Gt=null,t!==null&&(Nt[At++]=Cn,Nt[At++]=Tn,Nt[At++]=oi,Cn=t.id,Tn=t.overflow,oi=e),e=Op(e,r.children),e.flags|=4096,e)}function yy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function q1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yy(t,n,e);else if(t.tag===19)yy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wd(e,!0,n,null,s);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ax(t,e,n){switch(e.tag){case 3:G1(e),ms();break;case 5:E1(e);break;case 1:ft(e.type)&&zl(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?K1(t,e,n):(ue(ye,ye.current&1),t=An(t,e,n),t!==null?t.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,W1(t,e,n)}return An(t,e,n)}var Y1,Yf,Q1,X1;Y1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};Q1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(cn.current);var s=null;switch(n){case"input":i=yf(t,i),r=yf(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=wf(t,i),r=wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}Sf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};X1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Dx(t,e,n){var r=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ft(e.type)&&Ul(),Ge(e),null;case 3:return r=e.stateNode,ys(),pe(dt),pe(Qe),Ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(rh(Gt),Gt=null))),Yf(t,e),Ge(e),null;case 5:Tp(e);var i=Kr(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Q1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ge(e),null}if(t=Kr(cn.current),Ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<uo.length;i++)ce(uo[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":xg(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":bg(r,s),ce("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ua(r),kg(r,s,!0);break;case"textarea":Ua(r),Pg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Bo]=r,Y1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cf(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<uo.length;i++)ce(uo[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":xg(t,r),i=yf(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ce("invalid",t);break;case"textarea":bg(t,r),i=wf(t,r),ce("invalid",t);break;default:i=r}Sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?k0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&tp(t,s,l,o))}switch(n){case"input":Ua(t),kg(t,r,!1);break;case"textarea":Ua(t),Pg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)X1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Kr(Wo.current),Kr(cn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))p1(),ms(),e.flags|=98560,s=!1;else if(s=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[ln]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Gt!==null&&(rh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Pe===0&&(Pe=3):$p())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return ys(),Yf(t,e),t===null&&Uo(e.stateNode.containerInfo),Ge(e),null;case 10:return wp(e.type._context),Ge(e),null;case 17:return ft(e.type)&&Ul(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>_s&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ge(e),null}else 2*Se()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Lx(t,e){switch(gp(e),e.tag){case 1:return ft(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),pe(dt),pe(Qe),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return ys(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Ja=!1,qe=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,N=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Qf(t,e,n){try{n()}catch(r){we(t,e,r)}}var vy=!1;function $x(t,e){if(Af=Ml,t=t1(),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},Ml=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Wt(e.type,v),_);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){we(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=vy,vy=!1,g}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qf(e,n,s)}i=i.next}while(i!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J1(t){var e=t.alternate;e!==null&&(t.alternate=null,J1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Bo],delete e[$f],delete e[_x],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z1(t){return t.tag===5||t.tag===3||t.tag===4}function _y(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var je=null,Ht=!1;function zn(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:qe||Gi(n,e);case 6:var r=je,i=Ht;je=null,zn(t,e,n),je=r,Ht=i,je!==null&&(Ht?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ht?(t=je,n=n.stateNode,t.nodeType===8?hd(t.parentNode,n):t.nodeType===1&&hd(t,n),$o(t)):hd(je,n.stateNode));break;case 4:r=je,i=Ht,je=n.stateNode.containerInfo,Ht=!0,zn(t,e,n),je=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qf(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!qe&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,zn(t,e,n),qe=r):zn(t,e,n);break;default:zn(t,e,n)}}function wy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mx),e.forEach(function(r){var i=Gx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Ht=!1;break e;case 3:je=a.stateNode.containerInfo,Ht=!0;break e;case 4:je=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(je===null)throw Error(k(160));ew(s,o,i),je=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),rn(t),r&4){try{So(3,t,t.return),qu(3,t)}catch(v){we(t,t.return,v)}try{So(5,t,t.return)}catch(v){we(t,t.return,v)}}break;case 1:zt(e,t),rn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(zt(e,t),rn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{Ao(i,"")}catch(v){we(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(i,s),Cf(a,o);var u=Cf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?k0(i,d):c==="dangerouslySetInnerHTML"?I0(i,d):c==="children"?Ao(i,d):tp(i,c,d,u)}switch(a){case"input":vf(i,s);break;case"textarea":C0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bo]=s}catch(v){we(t,t.return,v)}}break;case 6:if(zt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){we(t,t.return,v)}}break;case 3:if(zt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(v){we(t,t.return,v)}break;case 4:zt(e,t),rn(t);break;case 13:zt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dp=Se())),r&4&&wy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,zt(e,t),qe=u):zt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(f=N,p=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:Gi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:Gi(f,f.return);break;case 22:if(f.memoizedState!==null){Sy(d);continue}}p!==null?(p.return=f,N=p):Sy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",o))}catch(v){we(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){we(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(e,t),rn(t),r&4&&wy(t);break;case 21:break;default:zt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var s=_y(t);Zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_y(t);Jf(t,a,o);break;default:throw Error(k(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fx(t,e,n){N=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ja;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=Ja;var u=qe;if(Ja=o,(qe=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Cy(i):l!==null?(l.return=o,N=l):Cy(i);for(;s!==null;)N=s,nw(s),s=s.sibling;N=i,Ja=a,qe=u}Ey(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Ey(t)}}function Ey(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}qe||e.flags&512&&Xf(e)}catch(f){we(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Sy(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Cy(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Xf(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Xf(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var jx=Math.ceil,Ql=$n.ReactCurrentDispatcher,Np=$n.ReactCurrentOwner,Lt=$n.ReactCurrentBatchConfig,Y=0,Me=null,Te=null,ze=0,yt=0,Ki=Pr(0),Pe=0,qo=null,li=0,Yu=0,Ap=0,Co=null,st=null,Dp=0,_s=1/0,wn=null,Xl=!1,eh=null,ar=null,Za=!1,er=null,Jl=0,To=0,th=null,vl=-1,_l=0;function tt(){return Y&6?Se():vl!==-1?vl:vl=Se()}function lr(t){return t.mode&1?Y&2&&ze!==0?ze&-ze:Sx.transition!==null?(_l===0&&(_l=j0()),_l):(t=te,t!==0||(t=window.event,t=t===void 0?16:G0(t.type)),t):1}function Jt(t,e,n,r){if(50<To)throw To=0,th=null,Error(k(185));ga(t,n,r),(!(Y&2)||t!==Me)&&(t===Me&&(!(Y&2)&&(Yu|=n),Pe===4&&Kn(t,ze)),ht(t,r),n===1&&Y===0&&!(e.mode&1)&&(_s=Se()+500,Hu&&Rr()))}function ht(t,e){var n=t.callbackNode;SI(t,e);var r=Ll(t,t===Me?ze:0);if(r===0)n!==null&&Ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ng(n),e===1)t.tag===0?Ex(Ty.bind(null,t)):d1(Ty.bind(null,t)),yx(function(){!(Y&6)&&Rr()}),n=null;else{switch(U0(r)){case 1:n=op;break;case 4:n=$0;break;case 16:n=Dl;break;case 536870912:n=F0;break;default:n=Dl}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(vl=-1,_l=0,Y&6)throw Error(k(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Ll(t,t===Me?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=Y;Y|=2;var s=sw();(Me!==t||ze!==e)&&(wn=null,_s=Se()+500,Xr(t,e));do try{Bx();break}catch(a){iw(t,a)}while(1);_p(),Ql.current=s,Y=i,Te!==null?e=0:(Me=null,ze=0,e=Pe)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=nh(t,i))),e===1)throw n=qo,Xr(t,0),Kn(t,r),ht(t,Se()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ux(i)&&(e=Zl(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=nh(t,s))),e===1))throw n=qo,Xr(t,0),Kn(t,r),ht(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:jr(t,st,wn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Dp+500-Se(),10<e)){if(Ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mf(jr.bind(null,t,st,wn),e);break}jr(t,st,wn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jx(r/1960))-r,10<r){t.timeoutHandle=Mf(jr.bind(null,t,st,wn),r);break}jr(t,st,wn);break;case 5:jr(t,st,wn);break;default:throw Error(k(329))}}}return ht(t,Se()),t.callbackNode===n?rw.bind(null,t):null}function nh(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=st,st=n,e!==null&&rh(e)),t}function rh(t){st===null?st=t:st.push.apply(st,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Ap,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(Y&6)throw Error(k(327));is();var e=Ll(t,0);if(!(e&1))return ht(t,Se()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=nh(t,r))}if(n===1)throw n=qo,Xr(t,0),Kn(t,e),ht(t,Se()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,st,wn),ht(t,Se()),null}function Lp(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(_s=Se()+500,Hu&&Rr())}}function ui(t){er!==null&&er.tag===0&&!(Y&6)&&is();var e=Y;Y|=1;var n=Lt.transition,r=te;try{if(Lt.transition=null,te=1,t)return t()}finally{te=r,Lt.transition=n,Y=e,!(Y&6)&&Rr()}}function Mp(){yt=Ki.current,pe(Ki)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gx(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:ys(),pe(dt),pe(Qe),Ip();break;case 5:Tp(r);break;case 4:ys();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:wp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(Me=t,Te=t=ur(t.current,null),ze=yt=e,Pe=0,qo=null,Ap=Yu=li=0,st=Co=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function iw(t,e){do{var n=Te;try{if(_p(),ml.current=Yl,ql){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(ai=0,Ae=xe=ve=null,Eo=!1,Ho=0,Np.current=null,n===null||n.return===null){Pe=1,qo=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=dy(o);if(p!==null){p.flags&=-257,fy(p,o,a,s,e),p.mode&1&&cy(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){cy(s,u,e),$p();break e}l=Error(k(426))}}else if(ge&&a.mode&1){var _=dy(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fy(_,o,a,s,e),yp(vs(l,a));break e}}s=l=vs(l,a),Pe!==4&&(Pe=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=z1(s,l,e);ry(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ar===null||!ar.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=B1(s,a,e);ry(s,w);break e}}s=s.return}while(s!==null)}aw(n)}catch(x){e=x,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function sw(){var t=Ql.current;return Ql.current=Yl,t===null?Yl:t}function $p(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Me===null||!(li&268435455)&&!(Yu&268435455)||Kn(Me,ze)}function Zl(t,e){var n=Y;Y|=2;var r=sw();(Me!==t||ze!==e)&&(wn=null,Xr(t,e));do try{zx();break}catch(i){iw(t,i)}while(1);if(_p(),Y=n,Ql.current=r,Te!==null)throw Error(k(261));return Me=null,ze=0,Pe}function zx(){for(;Te!==null;)ow(Te)}function Bx(){for(;Te!==null&&!hI();)ow(Te)}function ow(t){var e=uw(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?aw(t):Te=e,Np.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lx(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Te=null;return}}else if(n=Dx(n,e,yt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Pe===0&&(Pe=5)}function jr(t,e,n){var r=te,i=Lt.transition;try{Lt.transition=null,te=1,Vx(t,e,n,r)}finally{Lt.transition=i,te=r}return null}function Vx(t,e,n,r){do is();while(er!==null);if(Y&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CI(t,s),t===Me&&(Te=Me=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,cw(Dl,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=te;te=1;var a=Y;Y|=4,Np.current=null,$x(t,n),tw(n,t),ux(Df),Ml=!!Af,Df=Af=null,t.current=n,Fx(n),pI(),Y=a,te=o,Lt.transition=s}else t.current=n;if(Za&&(Za=!1,er=t,Jl=i),s=t.pendingLanes,s===0&&(ar=null),yI(n.stateNode),ht(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=eh,eh=null,t;return Jl&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===th?To++:(To=0,th=t):To=0,Rr(),null}function is(){if(er!==null){var t=U0(Jl),e=Lt.transition,n=te;try{if(Lt.transition=null,te=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Jl=0,Y&6)throw Error(k(331));var i=Y;for(Y|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:So(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var f=c.sibling,p=c.return;if(J1(c),c===u){N=null;break}if(f!==null){f.return=p,N=f;break}N=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qu(9,a)}}catch(x){we(a,a.return,x)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(Y=i,Rr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{te=n,Lt.transition=e}}return!1}function Iy(t,e,n){e=vs(n,e),e=z1(t,e,1),t=or(t,e,1),e=tt(),t!==null&&(ga(t,1,e),ht(t,e))}function we(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=vs(n,t),t=B1(e,t,1),e=or(e,t,1),t=tt(),e!==null&&(ga(e,1,t),ht(e,t));break}}e=e.return}}function Wx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(ze&n)===n&&(Pe===4||Pe===3&&(ze&130023424)===ze&&500>Se()-Dp?Xr(t,0):Ap|=n),ht(t,e)}function lw(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=tt();t=Nn(t,e),t!==null&&(ga(t,e,n),ht(t,n))}function Hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lw(t,n)}function Gx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),lw(t,n)}var uw;uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,Ax(t,e,n);at=!!(t.flags&131072)}else at=!1,ge&&e.flags&1048576&&f1(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var i=ps(e,Qe.current);rs(e,n),i=kp(null,e,r,t,i,n);var s=bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sp(e),i.updater=Gu,e.stateNode=i,i._reactInternals=e,Vf(e,r,t,n),e=Gf(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&mp(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qx(r),t=Wt(r,t),i){case 0:e=Hf(null,e,r,t,n);break e;case 1:e=my(null,e,r,t,n);break e;case 11:e=hy(null,e,r,t,n);break e;case 14:e=py(null,e,r,Wt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Hf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),my(t,e,r,i,n);case 3:e:{if(G1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g1(t,e),Gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(k(423)),e),e=gy(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(k(424)),e),e=gy(t,e,r,n,i);break e}else for(vt=sr(e.stateNode.containerInfo.firstChild),Et=e,ge=!0,Gt=null,n=w1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=An(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return E1(e),t===null&&Uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lf(r,i)?o=null:s!==null&&Lf(r,s)&&(e.flags|=32),H1(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return K1(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),hy(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Wl,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!dt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=Mt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),py(t,e,r,i,n);case 15:return V1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),yl(t,e),e.tag=1,ft(r)?(t=!0,zl(e)):t=!1,rs(e,n),v1(e,r,i),Vf(e,r,i,n),Gf(null,e,r,!0,t,n);case 19:return q1(t,e,n);case 22:return W1(t,e,n)}throw Error(k(156,e.tag))};function cw(t,e){return M0(t,e)}function Kx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new Kx(t,e,n,r)}function Fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return Fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===ip)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return Jr(n.children,i,s,e);case np:o=8,i|=8;break;case hf:return t=Dt(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case pf:return t=Dt(13,n,e,i),t.elementType=pf,t.lanes=s,t;case mf:return t=Dt(19,n,e,i),t.elementType=mf,t.lanes=s,t;case _0:return Qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:o=10;break e;case v0:o=9;break e;case rp:o=11;break e;case ip:o=14;break e;case Wn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,r,i,s,o,a,l){return t=new Yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sp(s),t}function Qx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dw(t){if(!t)return Er;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(ft(n))return c1(t,n,e)}return e}function fw(t,e,n,r,i,s,o,a,l){return t=jp(n,r,!0,t,i,s,o,a,l),t.context=dw(null),n=t.current,r=tt(),i=lr(n),s=bn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,ga(t,i,r),ht(t,r),t}function Xu(t,e,n,r){var i=e.current,s=tt(),o=lr(i);return n=dw(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Jt(t,i,o,s),pl(t,i,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){xy(t,e),(t=t.alternate)&&xy(t,e)}function Xx(){return null}var hw=typeof reportError=="function"?reportError:function(t){console.error(t)};function zp(t){this._internalRoot=t}Ju.prototype.render=zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Xu(t,e,null,null)};Ju.prototype.unmount=zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Xu(null,t,null,null)}),e[On]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=V0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&H0(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function Jx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=eu(o);s.call(u)}}var o=fw(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=o,t[On]=o.current,Uo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=eu(l);a.call(u)}}var l=jp(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=l,t[On]=l.current,Uo(t.nodeType===8?t.parentNode:t),ui(function(){Xu(e,l,n,r)}),l}function ec(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=eu(o);a.call(l)}}Xu(e,o,t,i)}else o=Jx(n,e,t,i,r);return eu(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(ap(e,n|1),ht(e,Se()),!(Y&6)&&(_s=Se()+500,Rr()))}break;case 13:ui(function(){var r=Nn(t,1);if(r!==null){var i=tt();Jt(r,t,1,i)}}),Up(t,1)}};lp=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=tt();Jt(e,t,134217728,n)}Up(t,134217728)}};B0=function(t){if(t.tag===13){var e=lr(t),n=Nn(t,e);if(n!==null){var r=tt();Jt(n,t,e,r)}Up(t,e)}};V0=function(){return te};W0=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};If=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wu(r);if(!i)throw Error(k(90));E0(r),vf(r,i)}}}break;case"textarea":C0(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};R0=Lp;O0=ui;var Zx={usingClientEntryPoint:!1,Events:[va,zi,Wu,b0,P0,Lp]},eo={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ek={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Uu=el.inject(ek),un=el}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(k(200));return Qx(t,e,null,n)};It.createRoot=function(t,e){if(!Bp(t))throw Error(k(299));var n=!1,r="",i=hw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,Uo(t.nodeType===8?t.parentNode:t),new zp(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return ui(t)};It.hydrate=function(t,e,n){if(!Zu(e))throw Error(k(200));return ec(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fw(e,null,t,1,n??null,i,!1,s,o),t[On]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ju(e)};It.render=function(t,e,n){if(!Zu(e))throw Error(k(200));return ec(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Zu(t))throw Error(k(40));return t._reactRootContainer?(ui(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};It.unstable_batchedUpdates=Lp;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return ec(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(t){console.error(t)}}pw(),f0.exports=It;var mw=f0.exports,by=mw;df.createRoot=by.createRoot,df.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Py="popstate";function tk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ih("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tu(i)}return rk(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nk(){return Math.random().toString(36).substr(2,8)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function ih(t,e,n,r){return n===void 0&&(n=null),Yo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$s(e):e,{state:n,key:e&&e.key||r||nk()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=tr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Yo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=tr.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:m})}function f(_,m){a=tr.Push;let h=ih(v.location,_,m);n&&n(h,_),u=c()+1;let y=Ry(h,u),w=v.createHref(h);try{o.pushState(y,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function p(_,m){a=tr.Replace;let h=ih(v.location,_,m);n&&n(h,_),u=c();let y=Ry(h,u),w=v.createHref(h);o.replaceState(y,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function g(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof _=="string"?_:tu(_);return Ie(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Py,d),l=_,()=>{i.removeEventListener(Py,d),l=null}},createHref(_){return e(i,_)},createURL:g,encodeLocation(_){let m=g(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(_){return o.go(_)}};return v}var Oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oy||(Oy={}));function ik(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?$s(e):e,i=Wp(r.pathname||"/",n);if(i==null)return null;let s=gw(t);sk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=pk(s[a],yk(i));return o}function gw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:fk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of yw(s.path))i(s,o,l)}),e}function yw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ok=/^:\w+$/,ak=3,lk=2,uk=1,ck=10,dk=-2,Ny=t=>t==="*";function fk(t,e){let n=t.split("/"),r=n.length;return n.some(Ny)&&(r+=dk),e&&(r+=lk),n.filter(i=>!Ny(i)).reduce((i,s)=>i+(ok.test(s)?ak:s===""?uk:ck),r)}function hk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=mk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:Ek(cr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function mk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=vk(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function gk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yk(t){try{return decodeURI(t)}catch(e){return Vp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vk(t,e){try{return decodeURIComponent(t)}catch(n){return Vp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Wp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function _k(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$s(t):t;return{pathname:n?n.startsWith("/")?n:wk(n,e):e,search:Sk(r),hash:Ck(i)}}function wk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _w(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$s(t):(i=Yo({},t),Ie(!i.pathname||!i.pathname.includes("?"),Cd("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Cd("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Cd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=_k(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),Ek=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Sk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ck=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Tk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ww=["post","put","patch","delete"];new Set(ww);const Ik=["get",...ww];new Set(Ik);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}const Hp=C.createContext(null),Ew=C.createContext(null),Ei=C.createContext(null),tc=C.createContext(null),Or=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Sw=C.createContext(null);function xk(t,e){let{relative:n}=e===void 0?{}:e;wa()||Ie(!1);let{basename:r,navigator:i}=C.useContext(Ei),{hash:s,pathname:o,search:a}=Gp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function wa(){return C.useContext(tc)!=null}function Ea(){return wa()||Ie(!1),C.useContext(tc).location}function Cw(t){C.useContext(Ei).static||C.useLayoutEffect(t)}function kk(){let{isDataRoute:t}=C.useContext(Or);return t?Bk():bk()}function bk(){wa()||Ie(!1);let t=C.useContext(Hp),{basename:e,navigator:n}=C.useContext(Ei),{matches:r}=C.useContext(Or),{pathname:i}=Ea(),s=JSON.stringify(vw(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return Cw(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=_w(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:cr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Pk=C.createContext(null);function Rk(t){let e=C.useContext(Or).outlet;return e&&C.createElement(Pk.Provider,{value:t},e)}function Gp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Or),{pathname:i}=Ea(),s=JSON.stringify(vw(r).map(o=>o.pathnameBase));return C.useMemo(()=>_w(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Ok(t,e){return Nk(t,e)}function Nk(t,e,n){wa()||Ie(!1);let{navigator:r}=C.useContext(Ei),{matches:i}=C.useContext(Or),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ea(),u;if(e){var c;let v=typeof e=="string"?$s(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ie(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=ik(t,{pathname:f}),g=$k(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:cr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:cr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?C.createElement(tc.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tr.Pop}},g):g}function Ak(){let t=zk(),e=Tk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const Dk=C.createElement(Ak,null);class Lk extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Or.Provider,{value:this.props.routeContext},C.createElement(Sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mk(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Hp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Or.Provider,{value:e},r)}function $k(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ie(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Dk);let f=e.concat(s.slice(0,u+1)),p=()=>{let g;return c?g=d:l.route.Component?g=C.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,C.createElement(Mk,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(Lk,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var Tw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Tw||{}),ru=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ru||{});function Fk(t){let e=C.useContext(Hp);return e||Ie(!1),e}function jk(t){let e=C.useContext(Ew);return e||Ie(!1),e}function Uk(t){let e=C.useContext(Or);return e||Ie(!1),e}function Iw(t){let e=Uk(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function zk(){var t;let e=C.useContext(Sw),n=jk(ru.UseRouteError),r=Iw(ru.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Bk(){let{router:t}=Fk(Tw.UseNavigateStable),e=Iw(ru.UseNavigateStable),n=C.useRef(!1);return Cw(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nu({fromRouteId:e},s)))},[t,e])}function Vk(t){return Rk(t.context)}function co(t){Ie(!1)}function Wk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1}=t;wa()&&Ie(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=$s(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default"}=r,g=C.useMemo(()=>{let v=Wp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:p},navigationType:i}},[a,u,c,d,f,p,i]);return g==null?null:C.createElement(Ei.Provider,{value:l},C.createElement(tc.Provider,{children:n,value:g}))}function Hk(t){let{children:e,location:n}=t;return Ok(sh(e),n)}new Promise(()=>{});function sh(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,sh(r.props.children,s));return}r.type!==co&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},iu.apply(this,arguments)}function xw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Kk(t,e){return t.button===0&&(!e||e==="_self")&&!Gk(t)}const qk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Yk=["aria-current","caseSensitive","className","end","style","to","children"],Qk="startTransition",Ay=HT[Qk];function Xk(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=tk({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(d=>{u&&Ay?Ay(()=>l(d)):l(d)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(Wk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eb=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=xw(e,qk),{basename:f}=C.useContext(Ei),p,g=!1;if(typeof u=="string"&&Zk.test(u)&&(p=u,Jk))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=Wp(y.pathname,f);y.origin===h.origin&&w!=null?u=w+y.search+y.hash:g=!0}catch{}let v=xk(u,{relative:i}),_=tb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(h){r&&r(h),h.defaultPrevented||_(h)}return C.createElement("a",iu({},d,{href:p||v,onClick:g||s?r:m,ref:n,target:l}))}),Td=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=xw(e,Yk),d=Gp(l,{relative:c.relative}),f=Ea(),p=C.useContext(Ew),{navigator:g}=C.useContext(Ei),v=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,_=f.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(_=_.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let h=_===v||!o&&_.startsWith(v)&&_.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=h?r:void 0,x;typeof s=="function"?x=s({isActive:h,isPending:y}):x=[s,h?"active":null,y?"pending":null].filter(Boolean).join(" ");let I=typeof a=="function"?a({isActive:h,isPending:y}):a;return C.createElement(eb,iu({},c,{"aria-current":w,className:x,ref:n,style:I,to:l}),typeof u=="function"?u({isActive:h,isPending:y}):u)});var Dy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Dy||(Dy={}));var Ly;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ly||(Ly={}));function tb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=kk(),l=Ea(),u=Gp(t,{relative:o});return C.useCallback(c=>{if(Kk(c,n)){c.preventDefault();let d=r!==void 0?r:tu(l)===tu(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const nb="/assets/ukraine-f011b98c.svg";var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function Kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function su(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var de="-ms-",Io="-moz-",X="-webkit-",kw="comm",nc="rule",qp="decl",rb="@import",bw="@keyframes",ib="@layer",sb=Math.abs,Yp=String.fromCharCode,oh=Object.assign;function ob(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function Pw(t){return t.trim()}function En(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,n){return t.replace(e,n)}function El(t,e){return t.indexOf(e)}function De(t,e){return t.charCodeAt(e)|0}function ws(t,e,n){return t.slice(e,n)}function an(t){return t.length}function Rw(t){return t.length}function fo(t,e){return e.push(t),t}function ab(t,e){return t.map(e).join("")}function My(t,e){return t.filter(function(n){return!En(n,e)})}var rc=1,Es=1,Ow=0,Ft=0,Ce=0,Fs="";function ic(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:rc,column:Es,length:o,return:"",siblings:a}}function Vn(t,e){return oh(ic("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ai(t){for(;t.root;)t=Vn(t.root,{children:[t]});fo(t,t.siblings)}function lb(){return Ce}function ub(){return Ce=Ft>0?De(Fs,--Ft):0,Es--,Ce===10&&(Es=1,rc--),Ce}function Zt(){return Ce=Ft<Ow?De(Fs,Ft++):0,Es++,Ce===10&&(Es=1,rc++),Ce}function Zr(){return De(Fs,Ft)}function Sl(){return Ft}function sc(t,e){return ws(Fs,t,e)}function ah(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cb(t){return rc=Es=1,Ow=an(Fs=t),Ft=0,[]}function db(t){return Fs="",t}function Id(t){return Pw(sc(Ft-1,lh(t===91?t+2:t===40?t+1:t)))}function fb(t){for(;(Ce=Zr())&&Ce<33;)Zt();return ah(t)>2||ah(Ce)>3?"":" "}function hb(t,e){for(;--e&&Zt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return sc(t,Sl()+(e<6&&Zr()==32&&Zt()==32))}function lh(t){for(;Zt();)switch(Ce){case t:return Ft;case 34:case 39:t!==34&&t!==39&&lh(Ce);break;case 40:t===41&&lh(t);break;case 92:Zt();break}return Ft}function pb(t,e){for(;Zt()&&t+Ce!==47+10;)if(t+Ce===42+42&&Zr()===47)break;return"/*"+sc(e,Ft-1)+"*"+Yp(t===47?t:Zt())}function mb(t){for(;!ah(Zr());)Zt();return sc(t,Ft)}function gb(t){return db(Cl("",null,null,null,[""],t=cb(t),0,[0],t))}function Cl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,p=0,g=0,v=1,_=1,m=1,h=0,y="",w=i,x=s,I=r,T=y;_;)switch(g=h,h=Zt()){case 40:if(g!=108&&De(T,d-1)==58){El(T+=V(Id(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:T+=Id(h);break;case 9:case 10:case 13:case 32:T+=fb(g);break;case 92:T+=hb(Sl()-1,7);continue;case 47:switch(Zr()){case 42:case 47:fo(yb(pb(Zt(),Sl()),e,n,l),l);break;default:T+="/"}break;case 123*v:a[u++]=an(T)*m;case 125*v:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+c:m==-1&&(T=V(T,/\f/g,"")),p>0&&an(T)-d&&fo(p>32?Fy(T+";",r,n,d-1,l):Fy(V(T," ","")+";",r,n,d-2,l),l);break;case 59:T+=";";default:if(fo(I=$y(T,e,n,u,c,i,a,y,w=[],x=[],d,s),s),h===123)if(c===0)Cl(T,e,I,I,w,s,d,a,x);else switch(f===99&&De(T,3)===110?100:f){case 100:case 108:case 109:case 115:Cl(t,I,I,r&&fo($y(t,I,I,0,0,i,a,y,i,w=[],d,x),x),i,x,d,a,r?w:x);break;default:Cl(T,I,I,I,[""],x,0,a,x)}}u=c=p=0,v=m=1,y=T="",d=o;break;case 58:d=1+an(T),p=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&ub()==125)continue}switch(T+=Yp(h),h*v){case 38:m=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(an(T)-1)*m,m=1;break;case 64:Zr()===45&&(T+=Id(Zt())),f=Zr(),c=d=an(y=T+=mb(Sl())),h++;break;case 45:g===45&&an(T)==2&&(v=0)}}return s}function $y(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,p=i===0?s:[""],g=Rw(p),v=0,_=0,m=0;v<r;++v)for(var h=0,y=ws(t,f+1,f=sb(_=o[v])),w=t;h<g;++h)(w=Pw(_>0?p[h]+" "+y:V(y,/&\f/g,p[h])))&&(l[m++]=w);return ic(t,e,n,i===0?nc:a,l,u,c,d)}function yb(t,e,n,r){return ic(t,e,n,kw,Yp(lb()),ws(t,2,-2),0,r)}function Fy(t,e,n,r,i){return ic(t,e,n,qp,ws(t,0,r),ws(t,r+1,-1),r,i)}function Nw(t,e,n){switch(ob(t,e)){case 5103:return X+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+t+t;case 4789:return Io+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return X+t+Io+t+de+t+t;case 5936:switch(De(t,e+11)){case 114:return X+t+de+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return X+t+de+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return X+t+de+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return X+t+de+t+t;case 6165:return X+t+de+"flex-"+t+t;case 5187:return X+t+V(t,/(\w+).+(:[^]+)/,X+"box-$1$2"+de+"flex-$1$2")+t;case 5443:return X+t+de+"flex-item-"+V(t,/flex-|-self/g,"")+(En(t,/flex-|baseline/)?"":de+"grid-row-"+V(t,/flex-|-self/g,""))+t;case 4675:return X+t+de+"flex-line-pack"+V(t,/align-content|flex-|-self/g,"")+t;case 5548:return X+t+de+V(t,"shrink","negative")+t;case 5292:return X+t+de+V(t,"basis","preferred-size")+t;case 6060:return X+"box-"+V(t,"-grow","")+X+t+de+V(t,"grow","positive")+t;case 4554:return X+V(t,/([^-])(transform)/g,"$1"+X+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+t+t;case 4200:if(!En(t,/flex-|baseline/))return de+"grid-column-align"+ws(t,e)+t;break;case 2592:case 3360:return de+V(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,En(r.props,/grid-\w+-end/)})?~El(t+(n=n[e].value),"span")?t:de+V(t,"-start","")+t+de+"grid-row-span:"+(~El(n,"span")?En(n,/\d+/):+En(n,/\d+/)-+En(t,/\d+/))+";":de+V(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return En(r.props,/grid-\w+-start/)})?t:de+V(V(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,X+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Io+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~El(t,"stretch")?Nw(V(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return V(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return de+i+":"+s+u+(o?de+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return V(t,":",":"+X)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return V(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(De(t,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+de+"$2box$3")+t;case 100:return V(t,":",":"+de)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(t,"scroll-","scroll-snap-")+t}return t}function ou(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function vb(t,e,n,r){switch(t.type){case ib:if(t.children.length)break;case rb:case qp:return t.return=t.return||t.value;case kw:return"";case bw:return t.return=t.value+"{"+ou(t.children,r)+"}";case nc:if(!an(t.value=t.props.join(",")))return""}return an(n=ou(t.children,r))?t.return=t.value+"{"+n+"}":""}function _b(t){var e=Rw(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function wb(t){return function(e){e.root||(e=e.return)&&t(e)}}function Eb(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case qp:t.return=Nw(t.value,t.length,n);return;case bw:return ou([Vn(t,{value:V(t.value,"@","@"+X)})],r);case nc:if(t.length)return ab(n=t.props,function(i){switch(En(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(Vn(t,{props:[V(i,/:(read-\w+)/,":"+Io+"$1")]})),Ai(Vn(t,{props:[i]})),oh(t,{props:My(n,r)});break;case"::placeholder":Ai(Vn(t,{props:[V(i,/:(plac\w+)/,":"+X+"input-$1")]})),Ai(Vn(t,{props:[V(i,/:(plac\w+)/,":"+Io+"$1")]})),Ai(Vn(t,{props:[V(i,/:(plac\w+)/,de+"input-$1")]})),Ai(Vn(t,{props:[i]})),oh(t,{props:My(n,r)});break}return""})}}var Sb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ss=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qp=typeof window<"u"&&"HTMLElement"in window,Cb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),oc=Object.freeze([]),Cs=Object.freeze({});function Tb(t,e,n){return n===void 0&&(n=Cs),t.theme!==n.theme&&t.theme||e||n.theme}var Aw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ib=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xb=/(^-|-$)/g;function jy(t){return t.replace(Ib,"-").replace(xb,"")}var kb=/(a)(d)/gi,Uy=function(t){return String.fromCharCode(t+(t>25?39:97))};function uh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Uy(e%52)+n;return(Uy(e%52)+n).replace(kb,"$1-$2")}var xd,qi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Dw=function(t){return qi(5381,t)};function bb(t){return uh(Dw(t)>>>0)}function Pb(t){return t.displayName||t.name||"Component"}function kd(t){return typeof t=="string"&&!0}var Lw=typeof Symbol=="function"&&Symbol.for,Mw=Lw?Symbol.for("react.memo"):60115,Rb=Lw?Symbol.for("react.forward_ref"):60112,Ob={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$w={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ab=((xd={})[Rb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xd[Mw]=$w,xd);function zy(t){return("type"in(e=t)&&e.type.$$typeof)===Mw?$w:"$$typeof"in t?Ab[t.$$typeof]:Ob;var e}var Db=Object.defineProperty,Lb=Object.getOwnPropertyNames,By=Object.getOwnPropertySymbols,Mb=Object.getOwnPropertyDescriptor,$b=Object.getPrototypeOf,Vy=Object.prototype;function Fw(t,e,n){if(typeof e!="string"){if(Vy){var r=$b(e);r&&r!==Vy&&Fw(t,r,n)}var i=Lb(e);By&&(i=i.concat(By(e)));for(var s=zy(t),o=zy(e),a=0;a<i.length;++a){var l=i[a];if(!(l in Nb||n&&n[l]||o&&l in o||s&&l in s)){var u=Mb(e,l);try{Db(t,l,u)}catch{}}}}return t}function Ts(t){return typeof t=="function"}function Xp(t){return typeof t=="object"&&"styledComponentId"in t}function qr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Wy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Qo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ch(t,e,n){if(n===void 0&&(n=!1),!n&&!Qo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ch(t[r],e[r]);else if(Qo(e))for(var r in e)t[r]=ch(t[r],e[r]);return t}function Jp(t,e){Object.defineProperty(t,"toString",{value:e})}function Sa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Fb=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Sa(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Tl=new Map,au=new Map,bd=1,tl=function(t){if(Tl.has(t))return Tl.get(t);for(;au.has(bd);)bd++;var e=bd++;return Tl.set(t,e),au.set(e,t),e},jb=function(t,e){Tl.set(t,e),au.set(e,t)},Ub="style[".concat(Ss,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),zb=new RegExp("^".concat(Ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bb=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Vb=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(zb);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(jb(c,u),Bb(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Wb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ss,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ss,"active"),r.setAttribute("data-styled-version","6.0.8");var o=Wb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Hb=function(){function t(e){this.element=jw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Sa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Gb=function(){function t(e){this.element=jw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Kb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Hy=Qp,qb={isServer:!Qp,useCSSOMInjection:!Cb},Uw=function(){function t(e,n,r){e===void 0&&(e=Cs),n===void 0&&(n={});var i=this;this.options=lt(lt({},qb),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Qp&&Hy&&(Hy=!1,function(s){for(var o=document.querySelectorAll(Ub),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ss)!=="active"&&(Vb(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Jp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(m){return au.get(m)}(d);if(f===void 0)return"continue";var p=s.names.get(f),g=o.getGroup(d);if(p===void 0||g.length===0)return"continue";var v="".concat(Ss,".g").concat(d,'[id="').concat(f,'"]'),_="";p!==void 0&&p.forEach(function(m){m.length>0&&(_+="".concat(m,","))}),l+="".concat(g).concat(v,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return tl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Kb(i):r?new Hb(i):new Gb(i)}(this.options),new Fb(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(tl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(tl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(tl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Yb=/&/g,Qb=/^\s*\/\/.*$/gm;function zw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zw(n.children,e)),n})}function Xb(t){var e,n,r,i=t===void 0?Cs:t,s=i.options,o=s===void 0?Cs:s,a=i.plugins,l=a===void 0?oc:a,u=function(f,p,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===nc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Yb,n).replace(r,u))}),o.prefix&&c.push(Eb),c.push(vb);var d=function(f,p,g,v){p===void 0&&(p=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var _=f.replace(Qb,""),m=gb(g||p?"".concat(g," ").concat(p," { ").concat(_," }"):_);o.namespace&&(m=zw(m,o.namespace));var h=[];return ou(m,_b(c.concat(wb(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,p){return p.name||Sa(15),qi(f,p.name)},5381).toString():"",d}var Jb=new Uw,dh=Xb(),Bw=ct.createContext({shouldForwardProp:void 0,styleSheet:Jb,stylis:dh});Bw.Consumer;ct.createContext(void 0);function Gy(){return C.useContext(Bw)}var Zb=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=dh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Jp(this,function(){throw Sa(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=dh),this.name+e.hash},t}(),e2=function(t){return t>="A"&&t<="Z"};function Ky(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;e2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Vw=function(t){return t==null||t===!1||t===""},Ww=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Vw(s)&&(Array.isArray(s)&&s.isCss||Ts(s)?r.push("".concat(Ky(i),":"),s,";"):Qo(s)?r.push.apply(r,su(su(["".concat(i," {")],Ww(s),!1),["}"],!1)):r.push("".concat(Ky(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Sb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ei(t,e,n,r){if(Vw(t))return[];if(Xp(t))return[".".concat(t.styledComponentId)];if(Ts(t)){if(!Ts(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ei(i,e,n,r)}var s;return t instanceof Zb?n?(t.inject(n,r),[t.getName(r)]):[t]:Qo(t)?Ww(t):Array.isArray(t)?Array.prototype.concat.apply(oc,t.map(function(o){return ei(o,e,n,r)})):[t.toString()]}function t2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ts(n)&&!Xp(n))return!1}return!0}var n2=Dw("6.0.8"),r2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&t2(e),this.componentId=n,this.baseHash=qi(n2,n),this.baseStyle=r,Uw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qr(i,this.staticRulesId);else{var s=Wy(ei(this.rules,e,n,r)),o=uh(qi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=qr(i,o),this.staticRulesId=o}else{for(var l=qi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Wy(ei(d,e,n,r));l=qi(l,f+c),u+=f}}if(u){var p=uh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=qr(i,p)}}return i},t}(),Hw=ct.createContext(void 0);Hw.Consumer;var Pd={};function i2(t,e,n){var r=Xp(t),i=t,s=!kd(t),o=e.attrs,a=o===void 0?oc:o,l=e.componentId,u=l===void 0?function(y,w){var x=typeof y!="string"?"sc":jy(y);Pd[x]=(Pd[x]||0)+1;var I="".concat(x,"-").concat(bb("6.0.8"+x+Pd[x]));return w?"".concat(w,"-").concat(I):I}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return kd(y)?"styled.".concat(y):"Styled(".concat(Pb(y),")")}(t);var d=e.displayName&&e.componentId?"".concat(jy(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;p=function(y,w){return g(y,w)&&v(y,w)}}else p=g}var _=new r2(n,d,r?i.componentStyle:void 0);function m(y,w){return function(x,I,T){var R=x.attrs,z=x.componentStyle,D=x.defaultProps,B=x.foldedComponentIds,Pt=x.styledComponentId,oe=x.target,mt=ct.useContext(Hw),gn=Gy(),yn=x.shouldForwardProp||gn.shouldForwardProp,it=function(Rt,Fe,Je){for(var Ve,We=lt(lt({},Fe),{className:void 0,theme:Je}),Oi=0;Oi<Rt.length;Oi+=1){var Mr=Ts(Ve=Rt[Oi])?Ve(We):Ve;for(var Ut in Mr)We[Ut]=Ut==="className"?qr(We[Ut],Mr[Ut]):Ut==="style"?lt(lt({},We[Ut]),Mr[Ut]):Mr[Ut]}return Fe.className&&(We.className=qr(We.className,Fe.className)),We}(R,I,Tb(I,mt,D)||Cs),P=it.as||oe,$={};for(var F in it)it[F]===void 0||F[0]==="$"||F==="as"||F==="theme"||(F==="forwardedAs"?$.as=it.forwardedAs:yn&&!yn(F,P)||($[F]=it[F]));var J=function(Rt,Fe){var Je=Gy(),Ve=Rt.generateAndInjectStyles(Fe,Je.styleSheet,Je.stylis);return Ve}(z,it),Z=qr(B,Pt);return J&&(Z+=" "+J),it.className&&(Z+=" "+it.className),$[kd(P)&&!Aw.has(P)?"class":"className"]=Z,$.ref=T,C.createElement(P,$)}(h,y,w)}var h=ct.forwardRef(m);return h.attrs=f,h.componentStyle=_,h.shouldForwardProp=p,h.foldedComponentIds=r?qr(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:t,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(w){for(var x=[],I=1;I<arguments.length;I++)x[I-1]=arguments[I];for(var T=0,R=x;T<R.length;T++)ch(w,R[T],!0);return w}({},i.defaultProps,y):y}}),Jp(h,function(){return".".concat(h.styledComponentId)}),s&&Fw(h,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function qy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Yy=function(t){return Object.assign(t,{isCss:!0})};function s2(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ts(t)||Qo(t)){var r=t;return Yy(ei(qy(oc,su([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ei(i):Yy(ei(qy(i,e)))}function fh(t,e,n){if(n===void 0&&(n=Cs),!e)throw Sa(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,s2.apply(void 0,su([i],s,!1)))};return r.attrs=function(i){return fh(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fh(t,e,lt(lt({},n),i))},r}var Gw=function(t){return fh(i2,t)},A=Gw;Aw.forEach(function(t){A[t]=Gw(t)});const o2=A.div`
display: flex;
gap: 8px;
align-items: center;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: calc(24/ 20);
letter-spacing: -0.4px;
`,a2=()=>E.jsxs(o2,{children:[E.jsx("img",{src:nb,alt:"LogoUkraine"}),E.jsx("p",{children:"LearnLingo"})]}),l2=A.div`
display: flex;
gap: 28px;
align-items: center;

`;var Kw={exports:{}},qw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=C;function u2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var c2=typeof Object.is=="function"?Object.is:u2,d2=Is.useState,f2=Is.useEffect,h2=Is.useLayoutEffect,p2=Is.useDebugValue;function m2(t,e){var n=e(),r=d2({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return h2(function(){i.value=n,i.getSnapshot=e,Rd(i)&&s({inst:i})},[t,n,e]),f2(function(){return Rd(i)&&s({inst:i}),t(function(){Rd(i)&&s({inst:i})})},[t]),p2(n),n}function Rd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!c2(t,n)}catch{return!0}}function g2(t,e){return e()}var y2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g2:m2;qw.useSyncExternalStore=Is.useSyncExternalStore!==void 0?Is.useSyncExternalStore:y2;Kw.exports=qw;var v2=Kw.exports,Yw={exports:{}},Qw={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=C,_2=v2;function w2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var E2=typeof Object.is=="function"?Object.is:w2,S2=_2.useSyncExternalStore,C2=ac.useRef,T2=ac.useEffect,I2=ac.useMemo,x2=ac.useDebugValue;Qw.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=C2(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=I2(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return d=g}return d=p}if(g=d,E2(c,p))return g;var v=r(p);return i!==void 0&&i(g,v)?g:(c=p,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=S2(t,s[0],s[1]);return T2(function(){o.hasValue=!0,o.value=a},[a]),x2(a),a};Yw.exports=Qw;var k2=Yw.exports;function b2(t){t()}let Xw=b2;const P2=t=>Xw=t,R2=()=>Xw,Qy=Symbol.for("react-redux-context"),Xy=typeof globalThis<"u"?globalThis:{};function O2(){var t;if(!C.createContext)return{};const e=(t=Xy[Qy])!=null?t:Xy[Qy]=new Map;let n=e.get(C.createContext);return n||(n=C.createContext(null),e.set(C.createContext,n)),n}const Sr=O2();function Zp(t=Sr){return function(){return C.useContext(t)}}const Jw=Zp(),N2=()=>{throw new Error("uSES not initialized!")};let Zw=N2;const A2=t=>{Zw=t},D2=(t,e)=>t===e;function L2(t=Sr){const e=t===Sr?Jw:Zp(t);return function(r,i={}){const{equalityFn:s=D2,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:d,noopCheck:f}=e();C.useRef(!0);const p=C.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o]),g=Zw(u.addNestedSub,l.getState,c||l.getState,p,s);return C.useDebugValue(g),g}}const eE=L2();var tE={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,em=$e?Symbol.for("react.element"):60103,tm=$e?Symbol.for("react.portal"):60106,lc=$e?Symbol.for("react.fragment"):60107,uc=$e?Symbol.for("react.strict_mode"):60108,cc=$e?Symbol.for("react.profiler"):60114,dc=$e?Symbol.for("react.provider"):60109,fc=$e?Symbol.for("react.context"):60110,nm=$e?Symbol.for("react.async_mode"):60111,hc=$e?Symbol.for("react.concurrent_mode"):60111,pc=$e?Symbol.for("react.forward_ref"):60112,mc=$e?Symbol.for("react.suspense"):60113,M2=$e?Symbol.for("react.suspense_list"):60120,gc=$e?Symbol.for("react.memo"):60115,yc=$e?Symbol.for("react.lazy"):60116,$2=$e?Symbol.for("react.block"):60121,F2=$e?Symbol.for("react.fundamental"):60117,j2=$e?Symbol.for("react.responder"):60118,U2=$e?Symbol.for("react.scope"):60119;function kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case em:switch(t=t.type,t){case nm:case hc:case lc:case cc:case uc:case mc:return t;default:switch(t=t&&t.$$typeof,t){case fc:case pc:case yc:case gc:case dc:return t;default:return e}}case tm:return e}}}function nE(t){return kt(t)===hc}ne.AsyncMode=nm;ne.ConcurrentMode=hc;ne.ContextConsumer=fc;ne.ContextProvider=dc;ne.Element=em;ne.ForwardRef=pc;ne.Fragment=lc;ne.Lazy=yc;ne.Memo=gc;ne.Portal=tm;ne.Profiler=cc;ne.StrictMode=uc;ne.Suspense=mc;ne.isAsyncMode=function(t){return nE(t)||kt(t)===nm};ne.isConcurrentMode=nE;ne.isContextConsumer=function(t){return kt(t)===fc};ne.isContextProvider=function(t){return kt(t)===dc};ne.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===em};ne.isForwardRef=function(t){return kt(t)===pc};ne.isFragment=function(t){return kt(t)===lc};ne.isLazy=function(t){return kt(t)===yc};ne.isMemo=function(t){return kt(t)===gc};ne.isPortal=function(t){return kt(t)===tm};ne.isProfiler=function(t){return kt(t)===cc};ne.isStrictMode=function(t){return kt(t)===uc};ne.isSuspense=function(t){return kt(t)===mc};ne.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===lc||t===hc||t===cc||t===uc||t===mc||t===M2||typeof t=="object"&&t!==null&&(t.$$typeof===yc||t.$$typeof===gc||t.$$typeof===dc||t.$$typeof===fc||t.$$typeof===pc||t.$$typeof===F2||t.$$typeof===j2||t.$$typeof===U2||t.$$typeof===$2)};ne.typeOf=kt;tE.exports=ne;var z2=tE.exports,rE=z2,B2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iE={};iE[rE.ForwardRef]=B2;iE[rE.Memo]=V2;var ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=Symbol.for("react.element"),im=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),W2=Symbol.for("react.server_context"),Cc=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),H2=Symbol.for("react.offscreen"),sE;sE=Symbol.for("react.module.reference");function jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case rm:switch(t=t.type,t){case vc:case wc:case _c:case Tc:case Ic:return t;default:switch(t=t&&t.$$typeof,t){case W2:case Sc:case Cc:case kc:case xc:case Ec:return t;default:return e}}case im:return e}}}ie.ContextConsumer=Sc;ie.ContextProvider=Ec;ie.Element=rm;ie.ForwardRef=Cc;ie.Fragment=vc;ie.Lazy=kc;ie.Memo=xc;ie.Portal=im;ie.Profiler=wc;ie.StrictMode=_c;ie.Suspense=Tc;ie.SuspenseList=Ic;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(t){return jt(t)===Sc};ie.isContextProvider=function(t){return jt(t)===Ec};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===rm};ie.isForwardRef=function(t){return jt(t)===Cc};ie.isFragment=function(t){return jt(t)===vc};ie.isLazy=function(t){return jt(t)===kc};ie.isMemo=function(t){return jt(t)===xc};ie.isPortal=function(t){return jt(t)===im};ie.isProfiler=function(t){return jt(t)===wc};ie.isStrictMode=function(t){return jt(t)===_c};ie.isSuspense=function(t){return jt(t)===Tc};ie.isSuspenseList=function(t){return jt(t)===Ic};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===vc||t===wc||t===_c||t===Tc||t===Ic||t===H2||typeof t=="object"&&t!==null&&(t.$$typeof===kc||t.$$typeof===xc||t.$$typeof===Ec||t.$$typeof===Sc||t.$$typeof===Cc||t.$$typeof===sE||t.getModuleId!==void 0)};ie.typeOf=jt;function G2(){const t=R2();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Jy={notify(){},get:()=>[]};function K2(t,e){let n,r=Jy,i=0,s=!1;function o(v){c();const _=r.subscribe(v);let m=!1;return()=>{m||(m=!0,_(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=G2())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Jy)}function f(){s||(s=!0,c())}function p(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return g}const q2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y2=q2?C.useLayoutEffect:C.useEffect;function Q2({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=C.useMemo(()=>{const u=K2(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=C.useMemo(()=>t.getState(),[t]);Y2(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Sr;return C.createElement(l.Provider,{value:o},n)}function oE(t=Sr){const e=t===Sr?Jw:Zp(t);return function(){const{store:r}=e();return r}}const X2=oE();function J2(t=Sr){const e=t===Sr?X2:oE(t);return function(){return e().dispatch}}const sm=J2();A2(k2.useSyncExternalStoreWithSelector);P2(mw.unstable_batchedUpdates);const aE=()=>{const{name:t,email:e,token:n,id:r}=eE(i=>i.user.user);return{isAuth:!!e,name:t,email:e,token:n,id:r}},Z2=()=>{const{isAuth:t}=aE();return console.log(t),E.jsxs(l2,{children:[E.jsx(Td,{to:"/",children:"Home"}),E.jsx(Td,{to:"teachers",children:"Teachers"}),t&&E.jsx(Td,{to:"favorites",children:"Favorites"})]})};var lE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zy=ct.createContext&&ct.createContext(lE),dr=globalThis&&globalThis.__assign||function(){return dr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},dr.apply(this,arguments)},eP=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function uE(t){return t&&t.map(function(e,n){return ct.createElement(e.tag,dr({key:n},e.attr),uE(e.child))})}function Ca(t){return function(e){return ct.createElement(tP,dr({attr:dr({},t.attr)},e),uE(t.child))}}function tP(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=eP(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ct.createElement("svg",dr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:dr(dr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ct.createElement("title",null,s),t.children)};return Zy!==void 0?ct.createElement(Zy.Consumer,null,function(n){return e(n)}):e(lE)}function nP(t){return Ca({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{points:"10 17 15 12 10 7"}},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"}}]})(t)}function rP(t){return Ca({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}const iP=A.div`
max-width: 1184px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px auto 10px auto;
/* margin-left: auto;
margin-right: auto; */
`,sP=A.div`
display: flex;
gap: 16px;
align-items: center;
`,oP=A.button`
max-width: 166px;
padding: 14px 39px;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 700;
line-height: calc(20 / 16); 
background-color: var(--main-text-color);
color: var(--main-bgr-color);
border-radius: 12px;
outline: none;
cursor: pointer;
transition: transform var(--hover-transition);

&:hover {
   transform: scale(1.05);
}
`,ev=A.button`
padding-top: 14px;
padding-bottom: 14px;
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
outline: none;
border: none;
cursor: pointer;
background-color: transparent;
font-size: 16px;
font-weight: 700;
line-height: calc(20 / 16); 
transition: transform var(--hover-transition);

&:hover,
&:hover .icon {
   transform: scale(1.05);
}

`,aP=A(nP)`
color: var(--orange);
font-size: 1.5rem;
`,lP=A(rP)`
color: var(--orange);
font-size: 1.5rem;
`;var uP=function(e){return cP(e)&&!dP(e)};function cP(t){return!!t&&typeof t=="object"}function dP(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||pP(t)}var fP=typeof Symbol=="function"&&Symbol.for,hP=fP?Symbol.for("react.element"):60103;function pP(t){return t.$$typeof===hP}function mP(t){return Array.isArray(t)?[]:{}}function lu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Xo(mP(t),t,e):t}function gP(t,e,n){return t.concat(e).map(function(r){return lu(r,n)})}function yP(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=lu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=lu(e[i],n):r[i]=Xo(t[i],e[i],n)}),r}function Xo(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||gP,n.isMergeableObject=n.isMergeableObject||uP;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):yP(t,e,n):lu(e,n)}Xo.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Xo(r,i,n)},{})};var hh=Xo,vP=typeof global=="object"&&global&&global.Object===Object&&global;const cE=vP;var _P=typeof self=="object"&&self&&self.Object===Object&&self,wP=cE||_P||Function("return this")();const mn=wP;var EP=mn.Symbol;const Cr=EP;var dE=Object.prototype,SP=dE.hasOwnProperty,CP=dE.toString,to=Cr?Cr.toStringTag:void 0;function TP(t){var e=SP.call(t,to),n=t[to];try{t[to]=void 0;var r=!0}catch{}var i=CP.call(t);return r&&(e?t[to]=n:delete t[to]),i}var IP=Object.prototype,xP=IP.toString;function kP(t){return xP.call(t)}var bP="[object Null]",PP="[object Undefined]",tv=Cr?Cr.toStringTag:void 0;function Si(t){return t==null?t===void 0?PP:bP:tv&&tv in Object(t)?TP(t):kP(t)}function fE(t,e){return function(n){return t(e(n))}}var RP=fE(Object.getPrototypeOf,Object);const om=RP;function Ci(t){return t!=null&&typeof t=="object"}var OP="[object Object]",NP=Function.prototype,AP=Object.prototype,hE=NP.toString,DP=AP.hasOwnProperty,LP=hE.call(Object);function nv(t){if(!Ci(t)||Si(t)!=OP)return!1;var e=om(t);if(e===null)return!0;var n=DP.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&hE.call(n)==LP}var rv=Array.isArray,iv=Object.keys,MP=Object.prototype.hasOwnProperty,$P=typeof Element<"u";function ph(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=rv(t),r=rv(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!ph(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=iv(t);if(s=d.length,s!==iv(e).length)return!1;for(i=s;i--!==0;)if(!MP.call(e,d[i]))return!1;if($P&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!ph(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var FP=function(e,n){try{return ph(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Ur=qh(FP);var jP=!0;function UP(t,e){if(!jP){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function zP(){this.__data__=[],this.size=0}function pE(t,e){return t===e||t!==t&&e!==e}function bc(t,e){for(var n=t.length;n--;)if(pE(t[n][0],e))return n;return-1}var BP=Array.prototype,VP=BP.splice;function WP(t){var e=this.__data__,n=bc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():VP.call(e,n,1),--this.size,!0}function HP(t){var e=this.__data__,n=bc(e,t);return n<0?void 0:e[n][1]}function GP(t){return bc(this.__data__,t)>-1}function KP(t,e){var n=this.__data__,r=bc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Fn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Fn.prototype.clear=zP;Fn.prototype.delete=WP;Fn.prototype.get=HP;Fn.prototype.has=GP;Fn.prototype.set=KP;function qP(){this.__data__=new Fn,this.size=0}function YP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function QP(t){return this.__data__.get(t)}function XP(t){return this.__data__.has(t)}function Ta(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var JP="[object AsyncFunction]",ZP="[object Function]",eR="[object GeneratorFunction]",tR="[object Proxy]";function mE(t){if(!Ta(t))return!1;var e=Si(t);return e==ZP||e==eR||e==JP||e==tR}var nR=mn["__core-js_shared__"];const Od=nR;var sv=function(){var t=/[^.]+$/.exec(Od&&Od.keys&&Od.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function rR(t){return!!sv&&sv in t}var iR=Function.prototype,sR=iR.toString;function Ti(t){if(t!=null){try{return sR.call(t)}catch{}try{return t+""}catch{}}return""}var oR=/[\\^$.*+?()[\]{}|]/g,aR=/^\[object .+?Constructor\]$/,lR=Function.prototype,uR=Object.prototype,cR=lR.toString,dR=uR.hasOwnProperty,fR=RegExp("^"+cR.call(dR).replace(oR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function hR(t){if(!Ta(t)||rR(t))return!1;var e=mE(t)?fR:aR;return e.test(Ti(t))}function pR(t,e){return t==null?void 0:t[e]}function Ii(t,e){var n=pR(t,e);return hR(n)?n:void 0}var mR=Ii(mn,"Map");const Jo=mR;var gR=Ii(Object,"create");const Zo=gR;function yR(){this.__data__=Zo?Zo(null):{},this.size=0}function vR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _R="__lodash_hash_undefined__",wR=Object.prototype,ER=wR.hasOwnProperty;function SR(t){var e=this.__data__;if(Zo){var n=e[t];return n===_R?void 0:n}return ER.call(e,t)?e[t]:void 0}var CR=Object.prototype,TR=CR.hasOwnProperty;function IR(t){var e=this.__data__;return Zo?e[t]!==void 0:TR.call(e,t)}var xR="__lodash_hash_undefined__";function kR(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Zo&&e===void 0?xR:e,this}function ci(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ci.prototype.clear=yR;ci.prototype.delete=vR;ci.prototype.get=SR;ci.prototype.has=IR;ci.prototype.set=kR;function bR(){this.size=0,this.__data__={hash:new ci,map:new(Jo||Fn),string:new ci}}function PR(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Pc(t,e){var n=t.__data__;return PR(e)?n[typeof e=="string"?"string":"hash"]:n.map}function RR(t){var e=Pc(this,t).delete(t);return this.size-=e?1:0,e}function OR(t){return Pc(this,t).get(t)}function NR(t){return Pc(this,t).has(t)}function AR(t,e){var n=Pc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Nr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nr.prototype.clear=bR;Nr.prototype.delete=RR;Nr.prototype.get=OR;Nr.prototype.has=NR;Nr.prototype.set=AR;var DR=200;function LR(t,e){var n=this.__data__;if(n instanceof Fn){var r=n.__data__;if(!Jo||r.length<DR-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Nr(r)}return n.set(t,e),this.size=n.size,this}function js(t){var e=this.__data__=new Fn(t);this.size=e.size}js.prototype.clear=qP;js.prototype.delete=YP;js.prototype.get=QP;js.prototype.has=XP;js.prototype.set=LR;function MR(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var $R=function(){try{var t=Ii(Object,"defineProperty");return t({},"",{}),t}catch{}}();const ov=$R;function gE(t,e,n){e=="__proto__"&&ov?ov(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var FR=Object.prototype,jR=FR.hasOwnProperty;function yE(t,e,n){var r=t[e];(!(jR.call(t,e)&&pE(r,n))||n===void 0&&!(e in t))&&gE(t,e,n)}function Rc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?gE(n,a,l):yE(n,a,l)}return n}function UR(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var zR="[object Arguments]";function av(t){return Ci(t)&&Si(t)==zR}var vE=Object.prototype,BR=vE.hasOwnProperty,VR=vE.propertyIsEnumerable,WR=av(function(){return arguments}())?av:function(t){return Ci(t)&&BR.call(t,"callee")&&!VR.call(t,"callee")};const HR=WR;var GR=Array.isArray;const Ia=GR;function KR(){return!1}var _E=typeof _t=="object"&&_t&&!_t.nodeType&&_t,lv=_E&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,qR=lv&&lv.exports===_E,uv=qR?mn.Buffer:void 0,YR=uv?uv.isBuffer:void 0,QR=YR||KR;const wE=QR;var XR=9007199254740991,JR=/^(?:0|[1-9]\d*)$/;function ZR(t,e){var n=typeof t;return e=e??XR,!!e&&(n=="number"||n!="symbol"&&JR.test(t))&&t>-1&&t%1==0&&t<e}var eO=9007199254740991;function EE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=eO}var tO="[object Arguments]",nO="[object Array]",rO="[object Boolean]",iO="[object Date]",sO="[object Error]",oO="[object Function]",aO="[object Map]",lO="[object Number]",uO="[object Object]",cO="[object RegExp]",dO="[object Set]",fO="[object String]",hO="[object WeakMap]",pO="[object ArrayBuffer]",mO="[object DataView]",gO="[object Float32Array]",yO="[object Float64Array]",vO="[object Int8Array]",_O="[object Int16Array]",wO="[object Int32Array]",EO="[object Uint8Array]",SO="[object Uint8ClampedArray]",CO="[object Uint16Array]",TO="[object Uint32Array]",fe={};fe[gO]=fe[yO]=fe[vO]=fe[_O]=fe[wO]=fe[EO]=fe[SO]=fe[CO]=fe[TO]=!0;fe[tO]=fe[nO]=fe[pO]=fe[rO]=fe[mO]=fe[iO]=fe[sO]=fe[oO]=fe[aO]=fe[lO]=fe[uO]=fe[cO]=fe[dO]=fe[fO]=fe[hO]=!1;function IO(t){return Ci(t)&&EE(t.length)&&!!fe[Si(t)]}function am(t){return function(e){return t(e)}}var SE=typeof _t=="object"&&_t&&!_t.nodeType&&_t,xo=SE&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,xO=xo&&xo.exports===SE,Nd=xO&&cE.process,kO=function(){try{var t=xo&&xo.require&&xo.require("util").types;return t||Nd&&Nd.binding&&Nd.binding("util")}catch{}}();const xs=kO;var cv=xs&&xs.isTypedArray,bO=cv?am(cv):IO;const PO=bO;var RO=Object.prototype,OO=RO.hasOwnProperty;function CE(t,e){var n=Ia(t),r=!n&&HR(t),i=!n&&!r&&wE(t),s=!n&&!r&&!i&&PO(t),o=n||r||i||s,a=o?UR(t.length,String):[],l=a.length;for(var u in t)(e||OO.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ZR(u,l)))&&a.push(u);return a}var NO=Object.prototype;function lm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||NO;return t===n}var AO=fE(Object.keys,Object);const DO=AO;var LO=Object.prototype,MO=LO.hasOwnProperty;function $O(t){if(!lm(t))return DO(t);var e=[];for(var n in Object(t))MO.call(t,n)&&n!="constructor"&&e.push(n);return e}function TE(t){return t!=null&&EE(t.length)&&!mE(t)}function um(t){return TE(t)?CE(t):$O(t)}function FO(t,e){return t&&Rc(e,um(e),t)}function jO(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var UO=Object.prototype,zO=UO.hasOwnProperty;function BO(t){if(!Ta(t))return jO(t);var e=lm(t),n=[];for(var r in t)r=="constructor"&&(e||!zO.call(t,r))||n.push(r);return n}function cm(t){return TE(t)?CE(t,!0):BO(t)}function VO(t,e){return t&&Rc(e,cm(e),t)}var IE=typeof _t=="object"&&_t&&!_t.nodeType&&_t,dv=IE&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,WO=dv&&dv.exports===IE,fv=WO?mn.Buffer:void 0,hv=fv?fv.allocUnsafe:void 0;function HO(t,e){if(e)return t.slice();var n=t.length,r=hv?hv(n):new t.constructor(n);return t.copy(r),r}function xE(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function GO(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function kE(){return[]}var KO=Object.prototype,qO=KO.propertyIsEnumerable,pv=Object.getOwnPropertySymbols,YO=pv?function(t){return t==null?[]:(t=Object(t),GO(pv(t),function(e){return qO.call(t,e)}))}:kE;const dm=YO;function QO(t,e){return Rc(t,dm(t),e)}function bE(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var XO=Object.getOwnPropertySymbols,JO=XO?function(t){for(var e=[];t;)bE(e,dm(t)),t=om(t);return e}:kE;const PE=JO;function ZO(t,e){return Rc(t,PE(t),e)}function RE(t,e,n){var r=e(t);return Ia(t)?r:bE(r,n(t))}function eN(t){return RE(t,um,dm)}function tN(t){return RE(t,cm,PE)}var nN=Ii(mn,"DataView");const mh=nN;var rN=Ii(mn,"Promise");const gh=rN;var iN=Ii(mn,"Set");const yh=iN;var sN=Ii(mn,"WeakMap");const vh=sN;var mv="[object Map]",oN="[object Object]",gv="[object Promise]",yv="[object Set]",vv="[object WeakMap]",_v="[object DataView]",aN=Ti(mh),lN=Ti(Jo),uN=Ti(gh),cN=Ti(yh),dN=Ti(vh),zr=Si;(mh&&zr(new mh(new ArrayBuffer(1)))!=_v||Jo&&zr(new Jo)!=mv||gh&&zr(gh.resolve())!=gv||yh&&zr(new yh)!=yv||vh&&zr(new vh)!=vv)&&(zr=function(t){var e=Si(t),n=e==oN?t.constructor:void 0,r=n?Ti(n):"";if(r)switch(r){case aN:return _v;case lN:return mv;case uN:return gv;case cN:return yv;case dN:return vv}return e});const fm=zr;var fN=Object.prototype,hN=fN.hasOwnProperty;function pN(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&hN.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var mN=mn.Uint8Array;const wv=mN;function hm(t){var e=new t.constructor(t.byteLength);return new wv(e).set(new wv(t)),e}function gN(t,e){var n=e?hm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var yN=/\w*$/;function vN(t){var e=new t.constructor(t.source,yN.exec(t));return e.lastIndex=t.lastIndex,e}var Ev=Cr?Cr.prototype:void 0,Sv=Ev?Ev.valueOf:void 0;function _N(t){return Sv?Object(Sv.call(t)):{}}function wN(t,e){var n=e?hm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var EN="[object Boolean]",SN="[object Date]",CN="[object Map]",TN="[object Number]",IN="[object RegExp]",xN="[object Set]",kN="[object String]",bN="[object Symbol]",PN="[object ArrayBuffer]",RN="[object DataView]",ON="[object Float32Array]",NN="[object Float64Array]",AN="[object Int8Array]",DN="[object Int16Array]",LN="[object Int32Array]",MN="[object Uint8Array]",$N="[object Uint8ClampedArray]",FN="[object Uint16Array]",jN="[object Uint32Array]";function UN(t,e,n){var r=t.constructor;switch(e){case PN:return hm(t);case EN:case SN:return new r(+t);case RN:return gN(t,n);case ON:case NN:case AN:case DN:case LN:case MN:case $N:case FN:case jN:return wN(t,n);case CN:return new r;case TN:case kN:return new r(t);case IN:return vN(t);case xN:return new r;case bN:return _N(t)}}var Cv=Object.create,zN=function(){function t(){}return function(e){if(!Ta(e))return{};if(Cv)return Cv(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const BN=zN;function VN(t){return typeof t.constructor=="function"&&!lm(t)?BN(om(t)):{}}var WN="[object Map]";function HN(t){return Ci(t)&&fm(t)==WN}var Tv=xs&&xs.isMap,GN=Tv?am(Tv):HN;const KN=GN;var qN="[object Set]";function YN(t){return Ci(t)&&fm(t)==qN}var Iv=xs&&xs.isSet,QN=Iv?am(Iv):YN;const XN=QN;var JN=1,ZN=2,eA=4,OE="[object Arguments]",tA="[object Array]",nA="[object Boolean]",rA="[object Date]",iA="[object Error]",NE="[object Function]",sA="[object GeneratorFunction]",oA="[object Map]",aA="[object Number]",AE="[object Object]",lA="[object RegExp]",uA="[object Set]",cA="[object String]",dA="[object Symbol]",fA="[object WeakMap]",hA="[object ArrayBuffer]",pA="[object DataView]",mA="[object Float32Array]",gA="[object Float64Array]",yA="[object Int8Array]",vA="[object Int16Array]",_A="[object Int32Array]",wA="[object Uint8Array]",EA="[object Uint8ClampedArray]",SA="[object Uint16Array]",CA="[object Uint32Array]",ae={};ae[OE]=ae[tA]=ae[hA]=ae[pA]=ae[nA]=ae[rA]=ae[mA]=ae[gA]=ae[yA]=ae[vA]=ae[_A]=ae[oA]=ae[aA]=ae[AE]=ae[lA]=ae[uA]=ae[cA]=ae[dA]=ae[wA]=ae[EA]=ae[SA]=ae[CA]=!0;ae[iA]=ae[NE]=ae[fA]=!1;function Il(t,e,n,r,i,s){var o,a=e&JN,l=e&ZN,u=e&eA;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Ta(t))return t;var c=Ia(t);if(c){if(o=pN(t),!a)return xE(t,o)}else{var d=fm(t),f=d==NE||d==sA;if(wE(t))return HO(t,a);if(d==AE||d==OE||f&&!i){if(o=l||f?{}:VN(t),!a)return l?ZO(t,VO(o,t)):QO(t,FO(o,t))}else{if(!ae[d])return i?t:{};o=UN(t,d,a)}}s||(s=new js);var p=s.get(t);if(p)return p;s.set(t,o),XN(t)?t.forEach(function(_){o.add(Il(_,e,n,_,t,s))}):KN(t)&&t.forEach(function(_,m){o.set(m,Il(_,e,n,m,t,s))});var g=u?l?tN:eN:l?cm:um,v=c?void 0:g(t);return MR(v||t,function(_,m){v&&(m=_,_=t[m]),yE(o,m,Il(_,e,n,m,t,s))}),o}var TA=4;function xv(t){return Il(t,TA)}function DE(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var IA="[object Symbol]";function pm(t){return typeof t=="symbol"||Ci(t)&&Si(t)==IA}var xA="Expected a function";function mm(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(xA);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(mm.Cache||Nr),n}mm.Cache=Nr;var kA=500;function bA(t){var e=mm(t,function(r){return n.size===kA&&n.clear(),r}),n=e.cache;return e}var PA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,RA=/\\(\\)?/g,OA=bA(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(PA,function(n,r,i,s){e.push(i?s.replace(RA,"$1"):r||n)}),e});const NA=OA;var AA=1/0;function DA(t){if(typeof t=="string"||pm(t))return t;var e=t+"";return e=="0"&&1/t==-AA?"-0":e}var LA=1/0,kv=Cr?Cr.prototype:void 0,bv=kv?kv.toString:void 0;function LE(t){if(typeof t=="string")return t;if(Ia(t))return DE(t,LE)+"";if(pm(t))return bv?bv.call(t):"";var e=t+"";return e=="0"&&1/t==-LA?"-0":e}function MA(t){return t==null?"":LE(t)}function ME(t){return Ia(t)?DE(t,DA):pm(t)?[t]:xE(NA(MA(t)))}function Oe(){return Oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oe.apply(this,arguments)}function $E(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Oc=C.createContext(void 0);Oc.displayName="FormikContext";Oc.Provider;Oc.Consumer;function $A(){var t=C.useContext(Oc);return t||UP(!1),t}var Bt=function(e){return typeof e=="function"},Nc=function(e){return e!==null&&typeof e=="object"},FA=function(e){return String(Math.floor(Number(e)))===e},Ad=function(e){return Object.prototype.toString.call(e)==="[object String]"},Dd=function(e){return Nc(e)&&Bt(e.then)};function gt(t,e,n,r){r===void 0&&(r=0);for(var i=ME(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function ti(t,e,n){for(var r=xv(t),i=r,s=0,o=ME(e);s<o.length-1;s++){var a=o[s],l=gt(t,o.slice(0,s+1));if(l&&(Nc(l)||Array.isArray(l)))i=i[a]=xv(l);else{var u=o[s+1];i=i[a]=FA(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function FE(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];Nc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},FE(a,e,n,r[o])):r[o]=e}return r}function jA(t,e){switch(e.type){case"SET_VALUES":return Oe({},t,{values:e.payload});case"SET_TOUCHED":return Oe({},t,{touched:e.payload});case"SET_ERRORS":return Ur(t.errors,e.payload)?t:Oe({},t,{errors:e.payload});case"SET_STATUS":return Oe({},t,{status:e.payload});case"SET_ISSUBMITTING":return Oe({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Oe({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Oe({},t,{values:ti(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Oe({},t,{touched:ti(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Oe({},t,{errors:ti(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Oe({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Oe({},t,{touched:FE(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return Oe({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Oe({},t,{isSubmitting:!1});default:return t}}var $r={},nl={};function UA(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=$E(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Oe({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),p=C.useRef(f.initialValues),g=C.useRef(f.initialErrors||$r),v=C.useRef(f.initialTouched||nl),_=C.useRef(f.initialStatus),m=C.useRef(!1),h=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=C.useState(0),w=y[1],x=C.useRef({values:f.initialValues,errors:f.initialErrors||$r,touched:f.initialTouched||nl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),I=x.current,T=C.useCallback(function(S){var O=x.current;x.current=jA(O,S),O!==x.current&&w(function(L){return L+1})},[]),R=C.useCallback(function(S,O){return new Promise(function(L,M){var W=f.validate(S,O);W==null?L($r):Dd(W)?W.then(function(ee){L(ee||$r)},function(ee){M(ee)}):L(W)})},[f.validate]),z=C.useCallback(function(S,O){var L=f.validationSchema,M=Bt(L)?L(O):L,W=O&&M.validateAt?M.validateAt(O,S):BA(S,M);return new Promise(function(ee,Re){W.then(function(){ee($r)},function(vn){vn.name==="ValidationError"?ee(zA(vn)):Re(vn)})})},[f.validationSchema]),D=C.useCallback(function(S,O){return new Promise(function(L){return L(h.current[S].validate(O))})},[]),B=C.useCallback(function(S){var O=Object.keys(h.current).filter(function(M){return Bt(h.current[M].validate)}),L=O.length>0?O.map(function(M){return D(M,gt(S,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(L).then(function(M){return M.reduce(function(W,ee,Re){return ee==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ee&&(W=ti(W,O[Re],ee)),W},{})})},[D]),Pt=C.useCallback(function(S){return Promise.all([B(S),f.validationSchema?z(S):{},f.validate?R(S):{}]).then(function(O){var L=O[0],M=O[1],W=O[2],ee=hh.all([L,M,W],{arrayMerge:VA});return ee})},[f.validate,f.validationSchema,B,R,z]),oe=Ot(function(S){return S===void 0&&(S=I.values),T({type:"SET_ISVALIDATING",payload:!0}),Pt(S).then(function(O){return m.current&&(T({type:"SET_ISVALIDATING",payload:!1}),T({type:"SET_ERRORS",payload:O})),O})});C.useEffect(function(){o&&m.current===!0&&Ur(p.current,f.initialValues)&&oe(p.current)},[o,oe]);var mt=C.useCallback(function(S){var O=S&&S.values?S.values:p.current,L=S&&S.errors?S.errors:g.current?g.current:f.initialErrors||{},M=S&&S.touched?S.touched:v.current?v.current:f.initialTouched||{},W=S&&S.status?S.status:_.current?_.current:f.initialStatus;p.current=O,g.current=L,v.current=M,_.current=W;var ee=function(){T({type:"RESET_FORM",payload:{isSubmitting:!!S&&!!S.isSubmitting,errors:L,touched:M,status:W,values:O,isValidating:!!S&&!!S.isValidating,submitCount:S&&S.submitCount&&typeof S.submitCount=="number"?S.submitCount:0}})};if(f.onReset){var Re=f.onReset(I.values,vg);Dd(Re)?Re.then(ee):ee()}else ee()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);C.useEffect(function(){m.current===!0&&!Ur(p.current,f.initialValues)&&u&&(p.current=f.initialValues,mt(),o&&oe(p.current))},[u,f.initialValues,mt,o,oe]),C.useEffect(function(){u&&m.current===!0&&!Ur(g.current,f.initialErrors)&&(g.current=f.initialErrors||$r,T({type:"SET_ERRORS",payload:f.initialErrors||$r}))},[u,f.initialErrors]),C.useEffect(function(){u&&m.current===!0&&!Ur(v.current,f.initialTouched)&&(v.current=f.initialTouched||nl,T({type:"SET_TOUCHED",payload:f.initialTouched||nl}))},[u,f.initialTouched]),C.useEffect(function(){u&&m.current===!0&&!Ur(_.current,f.initialStatus)&&(_.current=f.initialStatus,T({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var gn=Ot(function(S){if(h.current[S]&&Bt(h.current[S].validate)){var O=gt(I.values,S),L=h.current[S].validate(O);return Dd(L)?(T({type:"SET_ISVALIDATING",payload:!0}),L.then(function(M){return M}).then(function(M){T({type:"SET_FIELD_ERROR",payload:{field:S,value:M}}),T({type:"SET_ISVALIDATING",payload:!1})})):(T({type:"SET_FIELD_ERROR",payload:{field:S,value:L}}),Promise.resolve(L))}else if(f.validationSchema)return T({type:"SET_ISVALIDATING",payload:!0}),z(I.values,S).then(function(M){return M}).then(function(M){T({type:"SET_FIELD_ERROR",payload:{field:S,value:gt(M,S)}}),T({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),yn=C.useCallback(function(S,O){var L=O.validate;h.current[S]={validate:L}},[]),it=C.useCallback(function(S){delete h.current[S]},[]),P=Ot(function(S,O){T({type:"SET_TOUCHED",payload:S});var L=O===void 0?i:O;return L?oe(I.values):Promise.resolve()}),$=C.useCallback(function(S){T({type:"SET_ERRORS",payload:S})},[]),F=Ot(function(S,O){var L=Bt(S)?S(I.values):S;T({type:"SET_VALUES",payload:L});var M=O===void 0?n:O;return M?oe(L):Promise.resolve()}),J=C.useCallback(function(S,O){T({type:"SET_FIELD_ERROR",payload:{field:S,value:O}})},[]),Z=Ot(function(S,O,L){T({type:"SET_FIELD_VALUE",payload:{field:S,value:O}});var M=L===void 0?n:L;return M?oe(ti(I.values,S,O)):Promise.resolve()}),Rt=C.useCallback(function(S,O){var L=O,M=S,W;if(!Ad(S)){S.persist&&S.persist();var ee=S.target?S.target:S.currentTarget,Re=ee.type,vn=ee.name,Yc=ee.id,Qc=ee.value,xT=ee.checked,q5=ee.outerHTML,_g=ee.options,kT=ee.multiple;L=O||vn||Yc,M=/number|range/.test(Re)?(W=parseFloat(Qc),isNaN(W)?"":W):/checkbox/.test(Re)?HA(gt(I.values,L),xT,Qc):_g&&kT?WA(_g):Qc}L&&Z(L,M)},[Z,I.values]),Fe=Ot(function(S){if(Ad(S))return function(O){return Rt(O,S)};Rt(S)}),Je=Ot(function(S,O,L){O===void 0&&(O=!0),T({type:"SET_FIELD_TOUCHED",payload:{field:S,value:O}});var M=L===void 0?i:L;return M?oe(I.values):Promise.resolve()}),Ve=C.useCallback(function(S,O){S.persist&&S.persist();var L=S.target,M=L.name,W=L.id,ee=L.outerHTML,Re=O||M||W;Je(Re,!0)},[Je]),We=Ot(function(S){if(Ad(S))return function(O){return Ve(O,S)};Ve(S)}),Oi=C.useCallback(function(S){Bt(S)?T({type:"SET_FORMIK_STATE",payload:S}):T({type:"SET_FORMIK_STATE",payload:function(){return S}})},[]),Mr=C.useCallback(function(S){T({type:"SET_STATUS",payload:S})},[]),Ut=C.useCallback(function(S){T({type:"SET_ISSUBMITTING",payload:S})},[]),Kc=Ot(function(){return T({type:"SUBMIT_ATTEMPT"}),oe().then(function(S){var O=S instanceof Error,L=!O&&Object.keys(S).length===0;if(L){var M;try{if(M=_T(),M===void 0)return}catch(W){throw W}return Promise.resolve(M).then(function(W){return m.current&&T({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(m.current)throw T({type:"SUBMIT_FAILURE"}),W})}else if(m.current&&(T({type:"SUBMIT_FAILURE"}),O))throw S})}),vT=Ot(function(S){S&&S.preventDefault&&Bt(S.preventDefault)&&S.preventDefault(),S&&S.stopPropagation&&Bt(S.stopPropagation)&&S.stopPropagation(),Kc().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),vg={resetForm:mt,validateForm:oe,validateField:gn,setErrors:$,setFieldError:J,setFieldTouched:Je,setFieldValue:Z,setStatus:Mr,setSubmitting:Ut,setTouched:P,setValues:F,setFormikState:Oi,submitForm:Kc},_T=Ot(function(){return c(I.values,vg)}),wT=Ot(function(S){S&&S.preventDefault&&Bt(S.preventDefault)&&S.preventDefault(),S&&S.stopPropagation&&Bt(S.stopPropagation)&&S.stopPropagation(),mt()}),ET=C.useCallback(function(S){return{value:gt(I.values,S),error:gt(I.errors,S),touched:!!gt(I.touched,S),initialValue:gt(p.current,S),initialTouched:!!gt(v.current,S),initialError:gt(g.current,S)}},[I.errors,I.touched,I.values]),ST=C.useCallback(function(S){return{setValue:function(L,M){return Z(S,L,M)},setTouched:function(L,M){return Je(S,L,M)},setError:function(L){return J(S,L)}}},[Z,Je,J]),CT=C.useCallback(function(S){var O=Nc(S),L=O?S.name:S,M=gt(I.values,L),W={name:L,value:M,onChange:Fe,onBlur:We};if(O){var ee=S.type,Re=S.value,vn=S.as,Yc=S.multiple;ee==="checkbox"?Re===void 0?W.checked=!!M:(W.checked=!!(Array.isArray(M)&&~M.indexOf(Re)),W.value=Re):ee==="radio"?(W.checked=M===Re,W.value=Re):vn==="select"&&Yc&&(W.value=W.value||[],W.multiple=!0)}return W},[We,Fe,I.values]),qc=C.useMemo(function(){return!Ur(p.current,I.values)},[p.current,I.values]),TT=C.useMemo(function(){return typeof a<"u"?qc?I.errors&&Object.keys(I.errors).length===0:a!==!1&&Bt(a)?a(f):a:I.errors&&Object.keys(I.errors).length===0},[a,qc,I.errors,f]),IT=Oe({},I,{initialValues:p.current,initialErrors:g.current,initialTouched:v.current,initialStatus:_.current,handleBlur:We,handleChange:Fe,handleReset:wT,handleSubmit:vT,resetForm:mt,setErrors:$,setFormikState:Oi,setFieldTouched:Je,setFieldValue:Z,setFieldError:J,setStatus:Mr,setSubmitting:Ut,setTouched:P,setValues:F,submitForm:Kc,validateForm:oe,validateField:gn,isValid:TT,dirty:qc,unregisterField:it,registerField:yn,getFieldProps:CT,getFieldMeta:ET,getFieldHelpers:ST,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return IT}function zA(t){var e={};if(t.inner){if(t.inner.length===0)return ti(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;gt(e,o.path)||(e=ti(e,o.path,o.message))}}return e}function BA(t,e,n,r){n===void 0&&(n=!1);var i=_h(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function _h(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||nv(i)?_h(i):i!==""?i:void 0}):nv(t[r])?e[r]=_h(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function VA(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?hh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=hh(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function WA(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function HA(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var GA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function Ot(t){var e=C.useRef(t);return GA(function(){e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var KA=C.forwardRef(function(t,e){var n=t.action,r=$E(t,["action"]),i=n??"#",s=$A(),o=s.handleReset,a=s.handleSubmit;return C.createElement("form",Oe({onSubmit:a,ref:e,onReset:o,action:i},r))});KA.displayName="Form";function qA(t){return Ca({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}function YA(t){return Ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(t)}function QA(t){return Ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(t)}A(QA)`
  position: absolute;
  top: 20px;
  right: 20px;
`;const XA=A.form`
  display: flex;
  gap: 18px;
  flex-direction: column;
`,Ld=A.div`
  max-width: 438px;
  position: relative;
  width: 100%;
`,Md=A.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(22 / 16);

  &.valid {
    border-color: green;
  }

  &.invalid {
    border-color: red;
  }
`,JA=A(YA)`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`,$d=A.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #da1414;
  margin-left: 24px;
`,ZA=A.button`
  max-width: 438px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: var(--hover-transition);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;

  &:hover {
    background-color: var(--orange-hover);
  }
`;function xi(t){this._maxSize=t,this.clear()}xi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};xi.prototype.get=function(t){return this._values[t]};xi.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var eD=/[^.^\]^[]+|(?=\[\]|\.\.)/g,jE=/^\d+$/,tD=/^\d/,nD=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,rD=/^\s*(['"]?)(.*?)(\1)\s*$/,gm=512,Pv=new xi(gm),Rv=new xi(gm),Ov=new xi(gm),ni={Cache:xi,split:wh,normalizePath:Fd,setter:function(t){var e=Fd(t);return Rv.get(t)||Rv.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Fd(t);return Ov.get(t)||Ov.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(ym(n)||jE.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){iD(Array.isArray(t)?t:wh(t),e,n)}};function Fd(t){return Pv.get(t)||Pv.set(t,wh(t).map(function(e){return e.replace(rD,"$2")}))}function wh(t){return t.match(eD)||[""]}function iD(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(aD(i)&&(i='"'+i+'"'),a=ym(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function ym(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function sD(t){return t.match(tD)&&!t.match(jE)}function oD(t){return nD.test(t)}function aD(t){return!ym(t)&&(sD(t)||oD(t))}const lD=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ac=t=>t.match(lD)||[],Dc=t=>t[0].toUpperCase()+t.slice(1),vm=(t,e)=>Ac(t).join(e).toLowerCase(),UE=t=>Ac(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),uD=t=>Dc(UE(t)),cD=t=>vm(t,"_"),dD=t=>vm(t,"-"),fD=t=>Dc(vm(t," ")),hD=t=>Ac(t).map(Dc).join(" ");var jd={words:Ac,upperFirst:Dc,camelCase:UE,pascalCase:uD,snakeCase:cD,kebabCase:dD,sentenceCase:fD,titleCase:hD},_m={exports:{}};_m.exports=function(t){return zE(pD(t),t)};_m.exports.array=zE;function zE(t,e){var n=t.length,r=new Array(n),i={},s=n,o=mD(e),a=gD(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),c=p.length){d.add(u);do{var g=p[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function pD(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function mD(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function gD(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var yD=_m.exports;const vD=qh(yD),_D=Object.prototype.toString,wD=Error.prototype.toString,ED=RegExp.prototype.toString,SD=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",CD=/^Symbol\((.*)\)(.*)$/;function TD(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Nv(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return TD(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return SD.call(t).replace(CD,"Symbol($1)");const r=_D.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+wD.call(t)+"]":r==="RegExp"?ED.call(t):null}function fr(t,e){let n=Nv(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Nv(this[r],e);return s!==null?s:i},2)}function BE(t){return t==null?[]:[].concat(t)}let VE,ID=/\$\{\s*(\w+)\s*\}/g;VE=Symbol.toStringTag;class ot extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(ID,(i,s)=>fr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[VE]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],BE(e).forEach(o=>{if(ot.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ot)}}let on={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${fr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${fr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${fr(n,!0)}\``+i}},Vt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},xD={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Eh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},kD={isValue:"${path} field must be ${value}"},Sh={noUnknown:"${path} field has unspecified keys: ${unknown}"},bD={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},PD={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${fr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${fr(n,!0)}\``}return ot.formatError(on.notType,t)}};Object.assign(Object.create(null),{mixed:on,string:Vt,number:xD,date:Eh,object:Sh,array:bD,boolean:kD,tuple:PD});const wm=t=>t&&t.__isYupSchema__;class uu{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new uu(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!wm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const rl={context:"$",value:"."};class ki{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===rl.context,this.isValue=this.key[0]===rl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?rl.context:this.isValue?rl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ni.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}ki.prototype.__isYupRef=!0;const Yr=t=>t==null;function Di(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:p}=t;let{parent:g,context:v,abortEarly:_=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(B){return ki.isRef(B)?B.getValue(n,g,v):B}function y(B={}){var Pt;const oe=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},d,B.params);for(const gn of Object.keys(oe))oe[gn]=h(oe[gn]);const mt=new ot(ot.formatError(B.message||f,oe),n,oe.path,B.type||u,(Pt=B.disableStackTrace)!=null?Pt:m);return mt.params=oe,mt}const w=_?a:l;let x={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const I=B=>{ot.isError(B)?w(B):B?l(null):w(y())},T=B=>{ot.isError(B)?w(B):a(B)};if(p&&Yr(n))return I(!0);let z;try{var D;if(z=c.call(x,n,x),typeof((D=z)==null?void 0:D.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(z).then(I,T)}}catch(B){T(B);return}I(z)}return e.OPTIONS=t,e}function RD(t,e,n,r=n){let i,s,o;return e?(ni.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class cu extends Set{describe(){const e=[];for(const n of this.values())e.push(ki.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new cu(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Yi(t,e=new Map){if(wm(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=Yi(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,Yi(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(Yi(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=Yi(i,e)}else throw Error(`Unable to clone ${t}`);return n}class pn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new cu,this._blacklist=new cu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(on.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Yi(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&Yr(s))return s;let o=fr(e),a=fr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,p=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const _=s[v];_(g,c,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&d(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,p)=>this.resolve(c)._validate(u,c,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ot.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ot(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ot(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ot.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ot.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Yi(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Di({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Di({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=on.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=on.notNull){return this.nullability(!1,e)}required(e=on.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=on.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Di(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=BE(e).map(s=>new ki(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new uu(i,n):uu.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Di({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=on.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Di({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=on.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Di({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}pn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])pn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=RD(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])pn.prototype[t]=pn.prototype.oneOf;for(const t of["not","nope"])pn.prototype[t]=pn.prototype.notOneOf;let OD=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ND=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,AD=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,DD=t=>Yr(t)||t===t.trim(),LD={}.toString();function ss(){return new WE}class WE extends pn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===LD?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||on.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Vt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Vt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Vt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Vt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Vt.email){return this.matches(OD,{name:"email",message:e,excludeEmptyString:!0})}url(e=Vt.url){return this.matches(ND,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Vt.uuid){return this.matches(AD,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Vt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:DD})}lowercase(e=Vt.lowercase){return this.transform(n=>Yr(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Yr(n)||n===n.toLowerCase()})}uppercase(e=Vt.uppercase){return this.transform(n=>Yr(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Yr(n)||n===n.toUpperCase()})}}ss.prototype=WE.prototype;const MD=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function _n(t,e=0){return Number(t)||e}function $D(t){const e=MD.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:_n(e[1]),month:_n(e[2],1)-1,day:_n(e[3],1),hour:_n(e[4]),minute:_n(e[5]),second:_n(e[6]),millisecond:e[7]?_n(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:_n(e[10]),minuteOffset:_n(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let FD=new Date(""),jD=t=>Object.prototype.toString.call(t)==="[object Date]";class Lc extends pn{constructor(){super({type:"date",check(e){return jD(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=$D(e),isNaN(e)?Lc.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(ki.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Eh.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Eh.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Lc.INVALID_DATE=FD;Lc.prototype;function UD(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ni.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),ki.isRef(a)&&a.isSibling?s(a.path,o):wm(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return vD.array(Array.from(r),n).reverse()}function Av(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function HE(t){return(e,n)=>Av(t,e)-Av(t,n)}const zD=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function xl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=xl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=xl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(xl)}):"optional"in t?t.optional():t}const BD=(t,e)=>{const n=[...ni.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=ni.getter(ni.join(n),!0)(t);return!!(i&&r in i)};let Dv=t=>Object.prototype.toString.call(t)==="[object Object]";function VD(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const WD=HE([]);function Em(t){return new GE(t)}class GE extends pn{constructor(e){super({type:"object",check(n){return Dv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=WD,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],p=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let _=f instanceof pn?f.spec:void 0,m=_==null?void 0:_.strict;if(_!=null&&_.strip){c=c||d in i;continue}g=!n.__validating||!m?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else p&&!o&&(l[d]=i[d]);(p!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Dv(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||ki.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=UD(e,n),r._sortErrors=HE(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return xl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=ni.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return BD(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(zD)}noUnknown(e=!0,n=Sh.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=VD(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Sh.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(jd.camelCase)}snakeCase(){return this.transformKeys(jd.snakeCase)}constantCase(){return this.transformKeys(e=>jd.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Em.prototype=GE.prototype;const KE=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,HD=Em().shape({name:ss().required("Required"),email:ss().email("Please enter a valid email").required("Required"),password:ss().min(5).matches(KE,{message:"please create a stronger password"}).required("Required")}),GD=Em().shape({email:ss().email("Please enter a valid email").required("Required"),password:ss().min(5).matches(KE,{message:"please create a stronger password"}).required("Required")}),KD=({view:t,user:e,closeModal:n})=>{const{values:r,touched:i,errors:s,handleBlur:o,handleChange:a,handleSubmit:l,isSubmitting:u}=UA({initialValues:{name:"",email:"",password:""},validationSchema:t==="loginView"?GD:HD,onSubmit:(c,d)=>{console.log(c),e(c),d.resetForm(),n()}});return E.jsxs(XA,{onSubmit:l,children:[t==="registrationModal"&&E.jsx(Md,{type:"text",name:"name",value:r.name,onChange:a,onBlur:o,placeholder:"Name",className:i.name&&!s.name?"valid":s.name&&i.name?"invalid":""}),i.name&&s.name&&E.jsx($d,{className:"error",children:s.name}),E.jsxs(Ld,{children:[E.jsx(Md,{type:"email",name:"email",value:r.email,onChange:a,onBlur:o,placeholder:"Email",className:i.email&&!s.email?"valid":s.email&&i.email?"invalid":""}),i.email&&s.email&&E.jsx($d,{className:"error",children:s.email})]}),E.jsxs(Ld,{children:[E.jsxs(Ld,{children:[E.jsx(Md,{type:"password",name:"password",value:r.password,onChange:a,onBlur:o,placeholder:"Password",className:i.password&&!s.password?"valid":s.password&&i.password?"invalid":""}),i.password&&s.password&&E.jsx($d,{className:"error",children:s.password})]}),E.jsx(JA,{})]}),E.jsx(ZA,{disabled:u,type:"submit",children:t==="loginView"?"Log In":"Sign Up"})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+qE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new YD;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QE=function(t){const e=YE(t);return Sm.encodeByteArray(e,!0)},du=function(t){return QE(t).replace(/\./g,"")},fu=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return XE(void 0,t)}function XE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XD(n)||(t[n]=XE(t[n],e[n]));return t}function XD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=()=>JD().__FIREBASE_DEFAULTS__,eL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fu(t[1]);return e&&JSON.parse(e)},Cm=()=>{try{return ZD()||eL()||tL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JE=t=>{var e,n;return(n=(e=Cm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nL=t=>{const e=JE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=Cm())===null||t===void 0?void 0:t.config},eS=t=>{var e;return(e=Cm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[du(JSON.stringify(n)),du(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function iL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sL(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nS(){return qE.NODE_ADMIN===!0}function oL(){try{return typeof indexedDB=="object"}catch{return!1}}function aL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="FirebaseError";class Ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lL,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xa.prototype.create)}}class xa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ar(i,a,r)}}function uL(t,e){return t.replace(cL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ea(fu(s[0])||""),n=ea(fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dL=function(t){const e=rS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fL=function(t){const e=rS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ch(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lv(s)&&Lv(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function pL(t,e){const n=new mL(t,e);return n.subscribe.bind(n)}class mL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}function iS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wL(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_L(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _L(t){return t===Br?void 0:t}function wL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const SL={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},CL=re.INFO,TL={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},IL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xm{constructor(e){this.name=e,this._logLevel=CL,this._logHandler=IL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const xL=(t,e)=>e.some(n=>t instanceof n);let Mv,$v;function kL(){return Mv||(Mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bL(){return $v||($v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sS=new WeakMap,Th=new WeakMap,oS=new WeakMap,zd=new WeakMap,km=new WeakMap;function PL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sS.set(n,t)}).catch(()=>{}),km.set(e,t),e}function RL(t){if(Th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OL(t){Ih=t(Ih)}function NL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return oS.set(r,e.sort?e.sort():[e]),hr(r)}:bL().includes(t)?function(...e){return t.apply(Bd(this),e),hr(sS.get(this))}:function(...e){return hr(t.apply(Bd(this),e))}}function AL(t){return typeof t=="function"?NL(t):(t instanceof IDBTransaction&&RL(t),xL(t,kL())?new Proxy(t,Ih):t)}function hr(t){if(t instanceof IDBRequest)return PL(t);if(zd.has(t))return zd.get(t);const e=AL(t);return e!==t&&(zd.set(t,e),km.set(e,t)),e}const Bd=t=>km.get(t);function DL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const LL=["get","getKey","getAll","getAllKeys","count"],ML=["put","add","delete","clear"],Vd=new Map;function Fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ML.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vd.set(e,s),s}OL(t=>({...t,get:(e,n,r)=>Fv(e,n)||t.get(e,n,r),has:(e,n)=>!!Fv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",jv="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new xm("@firebase/app"),jL="@firebase/app-compat",UL="@firebase/analytics-compat",zL="@firebase/analytics",BL="@firebase/app-check-compat",VL="@firebase/app-check",WL="@firebase/auth",HL="@firebase/auth-compat",GL="@firebase/database",KL="@firebase/database-compat",qL="@firebase/functions",YL="@firebase/functions-compat",QL="@firebase/installations",XL="@firebase/installations-compat",JL="@firebase/messaging",ZL="@firebase/messaging-compat",eM="@firebase/performance",tM="@firebase/performance-compat",nM="@firebase/remote-config",rM="@firebase/remote-config-compat",iM="@firebase/storage",sM="@firebase/storage-compat",oM="@firebase/firestore",aM="@firebase/firestore-compat",lM="firebase",uM="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="[DEFAULT]",cM={[xh]:"fire-core",[jL]:"fire-core-compat",[zL]:"fire-analytics",[UL]:"fire-analytics-compat",[VL]:"fire-app-check",[BL]:"fire-app-check-compat",[WL]:"fire-auth",[HL]:"fire-auth-compat",[GL]:"fire-rtdb",[KL]:"fire-rtdb-compat",[qL]:"fire-fn",[YL]:"fire-fn-compat",[QL]:"fire-iid",[XL]:"fire-iid-compat",[JL]:"fire-fcm",[ZL]:"fire-fcm-compat",[eM]:"fire-perf",[tM]:"fire-perf-compat",[nM]:"fire-rc",[rM]:"fire-rc-compat",[iM]:"fire-gcs",[sM]:"fire-gcs-compat",[oM]:"fire-fst",[aM]:"fire-fst-compat","fire-js":"fire-js",[lM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,bh=new Map;function dM(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(bh.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of mu.values())dM(n,t);return!0}function bm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new xa("app","Firebase",fM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=uM;function aS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=ZE()),!n)throw pr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new EL(i);for(const l of bh.values())o.addComponent(l);const a=new hM(n,r,o);return mu.set(i,a),a}function lS(t=kh){const e=mu.get(t);if(!e&&t===kh&&ZE())return aS();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){var r;let i=(r=cM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}bs(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM="firebase-heartbeat-database",mM=1,ta="firebase-heartbeat-store";let Wd=null;function uS(){return Wd||(Wd=DL(pM,mM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ta)}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Wd}async function gM(t){try{return await(await uS()).transaction(ta).objectStore(ta).get(cS(t))}catch(e){if(e instanceof Ar)fi.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function Uv(t,e){try{const r=(await uS()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,cS(t)),await r.done}catch(n){if(n instanceof Ar)fi.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function cS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=1024,vM=30*24*60*60*1e3;class _M{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zv(),{heartbeatsToSend:n,unsentEntries:r}=wM(this._heartbeatsCache.heartbeats),i=du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zv(){return new Date().toISOString().substring(0,10)}function wM(t,e=yM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oL()?aL().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gM(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bv(t){return du(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){bs(new di("platform-logger",e=>new $L(e),"PRIVATE")),bs(new di("heartbeat",e=>new _M(e),"PRIVATE")),mr(xh,jv,t),mr(xh,jv,"esm2017"),mr("fire-js","")}SM("");function Vv(t){return t!==void 0&&t.enterprise!==void 0}class CM{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function dS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TM=dS,fS=new xa("auth","Firebase",dS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new xm("@firebase/auth");function IM(t,...e){gu.logLevel<=re.WARN&&gu.warn(`Auth (${Bs}): ${t}`,...e)}function kl(t,...e){gu.logLevel<=re.ERROR&&gu.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Pm(t,...e)}function dn(t,...e){return Pm(t,...e)}function xM(t,e,n){const r=Object.assign(Object.assign({},TM()),{[e]:n});return new xa("auth","Firebase",r).create(e,{appName:t.name})}function Pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fS.create(t,...e)}function U(t,e,...n){if(!t)throw Pm(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function Dn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kM(){return Wv()==="http:"||Wv()==="https:"}function Wv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kM()||iL()||"connection"in navigator)?navigator.onLine:!0}function PM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Im()||tS()}get(){return bM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=new ka(3e4,6e4);function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,r,i={}){return pS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hS.fetch()(mS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RM),e);try{const i=new NM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw il(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xM(t,c,u);nn(t,c)}}catch(i){if(i instanceof Ar)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function ba(t,e,n,r,i={}){const s=await Dr(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}class NM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),OM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}async function AM(t,e){return Dr(t,"GET","/v2/recaptchaConfig",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function LM(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MM(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Om(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(Hd(i.auth_time)),issuedAtTime:ko(Hd(i.iat)),expirationTime:ko(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function Om(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=fu(n);return i?JSON.parse(i):(kl("Failed to decode base64 JWT payload"),null)}catch(i){return kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $M(t){const e=Om(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ar&&FM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ps(t,LM(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BM(s.providerUserInfo):[],a=zM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function UM(t){const e=bt(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BM(t){return t.map(e=>{var{providerId:n}=e,r=Kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VM(t,e){const n=await pS(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$M(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new na;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new na,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MM(this,e)}reload(){return UM(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ps(this,DM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:x,providerData:I,stsTokenManager:T}=n;U(y&&T,e,"internal-error");const R=na.fromJSON(this.name,T);U(typeof y=="string",e,"internal-error"),Bn(d,e.name),Bn(f,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof x=="boolean",e,"internal-error"),Bn(p,e.name),Bn(g,e.name),Bn(v,e.name),Bn(_,e.name),Bn(m,e.name),Bn(h,e.name);const z=new ri({uid:y,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:x,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:h});return I&&Array.isArray(I)&&(z.providerData=I.map(D=>Object.assign({},D))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new na;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function xn(t){Dn(t instanceof Function,"Expected a class definition");let e=Hv.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yS.type="NONE";const Gv=yS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(xn(Gv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xn(Gv);const o=bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ri._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SS(e))return"Blackberry";if(CS(e))return"Webos";if(Nm(e))return"Safari";if((e.includes("chrome/")||_S(e))&&!e.includes("edge/"))return"Chrome";if(ES(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vS(t=Xe()){return/firefox\//i.test(t)}function Nm(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _S(t=Xe()){return/crios\//i.test(t)}function wS(t=Xe()){return/iemobile/i.test(t)}function ES(t=Xe()){return/android/i.test(t)}function SS(t=Xe()){return/blackberry/i.test(t)}function CS(t=Xe()){return/webos/i.test(t)}function $c(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WM(t=Xe()){var e;return $c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HM(){return sL()&&document.documentMode===10}function TS(t=Xe()){return $c(t)||ES(t)||CS(t)||SS(t)||/windows phone/i.test(t)||wS(t)}function GM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e=[]){let n;switch(t){case"Browser":n=Kv(Xe());break;case"Worker":n=`${Kv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e={}){return Dr(t,"GET","/v2/passwordPolicy",bi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=6;class QM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qv(this),this.idTokenSubscription=new qv(this),this.beforeStateQueue=new KM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qM(this),n=new QM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return bt(t)}class qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=pL(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JM().appendChild(r)})}function ZM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const e3="https://www.google.com/recaptcha/enterprise.js?render=",t3="recaptcha-enterprise",n3="NO_RECAPTCHA";class r3{constructor(e){this.type=t3,this.auth=Pi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{AM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new CM(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(n3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xS(e3+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vu(t,e,n,r=!1){const i=new r3(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(t,e){const n=bm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function s3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o3(t,e,n){const r=Pi(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kS(e),{host:o,port:a}=a3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||l3()}function kS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a3(t){const e=kS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yv(o)}}}function Yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function u3(t,e){return Dr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c3(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}async function d3(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Am{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await vu(e,r,"signInWithPassword");return Gd(e,i)}else return Gd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await vu(e,r,"signInWithPassword");return Gd(e,s)}else return Promise.reject(i)});case"emailLink":return c3(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return u3(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d3(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3="http://localhost";class hi extends Am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Kp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:f3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p3(t){const e=ho(po(t)).link,n=e?ho(po(e)).deep_link_id:null,r=ho(po(t)).deep_link_id;return(r?ho(po(r)).link:null)||r||n||e||t}class Dm{constructor(e){var n,r,i,s,o,a;const l=ho(po(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=h3((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p3(e);try{return new Dm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dm.parseLink(n);return U(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends bS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Pa{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Pa{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Pa{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(t,e){return ba(t,"POST","/v1/accounts:signUp",bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=Qv(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qv(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends Ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _u(e,n,r,i)}}function PS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,s,e,r):s})}async function m3(t,e,n=!1){const r=await Ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g3(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ps(t,PS(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Om(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e,n=!1){const r="signIn",i=await PS(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function y3(t,e){return RS(Pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t){const e=Pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v3(t,e,n){var r;const i=Pi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await vu(i,s,"signUpPassword");o=Kd(i,u)}else o=Kd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await vu(i,s,"signUpPassword");return Kd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&OS(t),u}),l=await pi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function _3(t,e,n){return y3(bt(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OS(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(t,e){return Dr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=bt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ps(r,w3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function S3(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function C3(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T3(){const t=Xe();return Nm(t)||$c(t)}const I3=1e3,x3=10;class AS extends NS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=T3()&&GM(),this.fallbackToPolling=TS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,x3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},I3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AS.type="LOCAL";const k3=AS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends NS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DS.type="SESSION";const LS=DS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await b3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function R3(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function O3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A3(){return MS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebaseLocalStorageDb",D3=1,Eu="firebaseLocalStorage",FS="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function L3(){const t=indexedDB.deleteDatabase($S);return new Ra(t).toPromise()}function Rh(){const t=indexedDB.open($S,D3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:FS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await L3(),e(await Rh()))})})}async function Xv(t,e,n){const r=jc(t,!0).put({[FS]:e,value:n});return new Ra(r).toPromise()}async function M3(t,e){const n=jc(t,!1).get(e),r=await new Ra(n).toPromise();return r===void 0?null:r.value}function Jv(t,e){const n=jc(t,!0).delete(e);return new Ra(n).toPromise()}const $3=800,F3=3;class jS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(A3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O3(),!this.activeServiceWorker)return;this.sender=new P3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await Xv(e,wu,"1"),await Jv(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new Ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jS.type="LOCAL";const j3=jS;new ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t,e){return e?xn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm extends Am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z3(t){return RS(t.auth,new Mm(t),t.bypassAuthState)}function B3(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),g3(n,new Mm(t),t.bypassAuthState)}async function V3(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),m3(n,new Mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z3;case"linkViaPopup":case"linkViaRedirect":return V3;case"reauthViaPopup":case"reauthViaRedirect":return B3;default:nn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3=new ka(2e3,1e4);class Qi extends US{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W3.get())};e()}}Qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3="pendingRedirect",Pl=new Map;class G3 extends US{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pl.get(this.auth._key());if(!e){try{const r=await K3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pl.set(this.auth._key(),e)}return this.bypassAuthState||Pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K3(t,e){const n=Q3(e),r=Y3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function q3(t,e){Pl.set(t._key(),e)}function Y3(t){return xn(t._redirectPersistence)}function Q3(t){return bl(H3,t.config.apiKey,t.name)}async function X3(t,e,n=!1){const r=Pi(t),i=U3(r,e),o=await new G3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=10*60*1e3;class Z3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J3&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(e))}saveEventToCache(e){this.cachedEventUids.add(Zv(e)),this.lastProcessedEventTime=Date.now()}}function Zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t$(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r$=/^https?/;async function i$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await t$(t);for(const n of e)try{if(s$(n))return}catch{}nn(t,"unauthorized-domain")}function s$(t){const e=Ph(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!r$.test(n))return!1;if(n$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$=new ka(3e4,6e4);function e_(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function a$(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(dn(t,"network-request-failed"))},timeout:o$.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const a=ZM("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},xS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function l$(t){return Rl=Rl||a$(t),Rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u$=new ka(5e3,15e3),c$="__/auth/iframe",d$="emulator/auth/iframe",f$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p$(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,d$):`https://${t.config.authDomain}/${c$}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},i=h$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function m$(t){const e=await l$(t),n=fn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:p$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{s(o)},u$.get());function l(){fn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y$=500,v$=600,_$="_blank",w$="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E$(t,e,n,r=y$,i=v$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},g$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=_S(u)?_$:n),vS(u)&&(e=e||w$,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(WM(u)&&a!=="_self")return S$(e||"",a),new t_(null);const d=window.open(e||"",a,c);U(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function S$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$="__/auth/handler",T$="emulator/auth/handler",I$=encodeURIComponent("fac");async function n_(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:i};if(e instanceof bS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ch(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Pa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${I$}=${encodeURIComponent(l)}`:"";return`${x$(t)}?${zs(a).slice(1)}${u}`}function x$({config:t}){return t.emulator?Rm(t,T$):`https://${t.authDomain}/${C$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class k${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LS,this._completeRedirectFn=X3,this._overrideRedirectResult=q3}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,Ph(),i);return E$(e,o,Lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n_(e,n,r,Ph(),i);return R3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await m$(e),r=new Z3(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qd,{type:qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qd];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TS()||Nm()||$c()}}const b$=k$;var r_="@firebase/auth",i_="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function O$(t){bs(new di("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IS(t)},u=new XM(r,i,s,l);return s3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new di("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new P$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(r_,i_,R$(t)),mr(r_,i_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=5*60,A$=eS("authIdTokenMaxAge")||N$;let s_=null;const D$=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A$)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function L$(t=lS()){const e=bm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i3(t,{popupRedirectResolver:b$,persistence:[j3,k3,LS]}),r=eS("authTokenSyncURL");if(r){const s=D$(r);C3(n,s,()=>s(n.currentUser)),S3(n,o=>s(o))}const i=JE("auth");return i&&o3(n,`http://${i}`),n}O$("Browser");const M$=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out;
`,$$=A.div`
  position: relative;
  width: 566px;
  background-color: var(--main-bgr-color);
  padding: 64px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  text-align: left;
`,F$=A.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`,j$=A(qA)`
  position: absolute;
  top: 20px;
  right: 20px;
`,o_=A.p`
  font-size: 16px;
  line-height: 1.375;
  margin-bottom: 40px;
`;function Kt(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Tr(t){return!!t&&!!t[me]}function Ln(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===q$}(t)||Array.isArray(t)||!!t[h_]||!!(!((e=t.constructor)===null||e===void 0)&&e[h_])||$m(t)||Fm(t))}function mi(t,e,n){n===void 0&&(n=!1),Ws(t)===0?(n?Object.keys:us)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Ws(t){var e=t[me];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:$m(t)?2:Fm(t)?3:0}function ls(t,e){return Ws(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function U$(t,e){return Ws(t)===2?t.get(e):t[e]}function BS(t,e,n){var r=Ws(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function VS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function $m(t){return G$&&t instanceof Map}function Fm(t){return K$&&t instanceof Set}function Vr(t){return t.o||t.t}function jm(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=HS(t);delete e[me];for(var n=us(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Um(t,e){return e===void 0&&(e=!1),zm(t)||Tr(t)||!Ln(t)||(Ws(t)>1&&(t.set=t.add=t.clear=t.delete=z$),Object.freeze(t),e&&mi(t,function(n,r){return Um(r,!0)},!0)),t}function z$(){Kt(2)}function zm(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function hn(t){var e=Dh[t];return e||Kt(18,t),e}function B$(t,e){Dh[t]||(Dh[t]=e)}function Oh(){return ia}function Yd(t,e){e&&(hn("Patches"),t.u=[],t.s=[],t.v=e)}function Su(t){Nh(t),t.p.forEach(V$),t.p=null}function Nh(t){t===ia&&(ia=t.l)}function a_(t){return ia={p:[],l:ia,h:t,m:!0,_:0}}function V$(t){var e=t[me];e.i===0||e.i===1?e.j():e.g=!0}function Qd(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||hn("ES5").S(e,t,r),r?(n[me].P&&(Su(e),Kt(4)),Ln(t)&&(t=Cu(e,t),e.l||Tu(e,t)),e.u&&hn("Patches").M(n[me].t,t,e.u,e.s)):t=Cu(e,n,[]),Su(e),e.u&&e.v(e.u,e.s),t!==WS?t:void 0}function Cu(t,e,n){if(zm(e))return e;var r=e[me];if(!r)return mi(e,function(a,l){return l_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Tu(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=jm(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),mi(s,function(a,l){return l_(t,r,i,a,l,n,o)}),Tu(t,i,!1),n&&t.u&&hn("Patches").N(r,n,t.u,t.s)}return r.o}function l_(t,e,n,r,i,s,o){if(Tr(i)){var a=Cu(t,i,s&&e&&e.i!==3&&!ls(e.R,r)?s.concat(r):void 0);if(BS(n,r,a),!Tr(a))return;t.m=!1}else o&&n.add(i);if(Ln(i)&&!zm(i)){if(!t.h.D&&t._<1)return;Cu(t,i),e&&e.A.l||Tu(t,i)}}function Tu(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Um(e,n)}function Xd(t,e){var n=t[me];return(n?Vr(n):t)[e]}function u_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Jn(t){t.P||(t.P=!0,t.l&&Jn(t.l))}function Jd(t){t.o||(t.o=jm(t.t))}function Ah(t,e,n){var r=$m(e)?hn("MapSet").F(e,n):Fm(e)?hn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Oh(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=sa;o&&(l=[a],u=mo);var c=Proxy.revocable(l,u),d=c.revoke,f=c.proxy;return a.k=f,a.j=d,f}(e,n):hn("ES5").J(e,n);return(n?n.A:Oh()).p.push(r),r}function W$(t){return Tr(t)||Kt(22,t),function e(n){if(!Ln(n))return n;var r,i=n[me],s=Ws(n);if(i){if(!i.P&&(i.i<4||!hn("ES5").K(i)))return i.t;i.I=!0,r=c_(n,s),i.I=!1}else r=c_(n,s);return mi(r,function(o,a){i&&U$(i.t,o)===a||BS(r,o,e(a))}),s===3?new Set(r):r}(t)}function c_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return jm(t)}function H$(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[me];return sa.get(l,s)},set:function(l){var u=this[me];sa.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][me];if(!a.P)switch(a.i){case 5:r(a)&&Jn(a);break;case 4:n(a)&&Jn(a)}}}function n(s){for(var o=s.t,a=s.k,l=us(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==me){var d=o[c];if(d===void 0&&!ls(o,c))return!0;var f=a[c],p=f&&f[me];if(p?p.t!==d:!VS(f,d))return!0}}var g=!!o[me];return l.length!==us(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};B$("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,d){if(c){for(var f=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(f,""+p,t(p,!0));return f}var g=HS(d);delete g[me];for(var v=us(g),_=0;_<v.length;_++){var m=v[_];g[m]=t(m,c||!!g[m].enumerable)}return Object.create(Object.getPrototypeOf(d),g)}(a,s),u={i:a?5:4,A:o?o.A:Oh(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,me,{value:u,writable:!0}),l},S:function(s,o,a){a?Tr(o)&&o[me].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[me];if(c){var d=c.t,f=c.k,p=c.R,g=c.i;if(g===4)mi(f,function(y){y!==me&&(d[y]!==void 0||ls(d,y)?p[y]||l(f[y]):(p[y]=!0,Jn(c)))}),mi(d,function(y){f[y]!==void 0||ls(f,y)||(p[y]=!1,Jn(c))});else if(g===5){if(r(c)&&(Jn(c),p.length=!0),f.length<d.length)for(var v=f.length;v<d.length;v++)p[v]=!1;else for(var _=d.length;_<f.length;_++)p[_]=!0;for(var m=Math.min(f.length,d.length),h=0;h<m;h++)f.hasOwnProperty(h)||(p[h]=!0),p[h]===void 0&&l(f[h])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var d_,ia,Bm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",G$=typeof Map<"u",K$=typeof Set<"u",f_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",WS=Bm?Symbol.for("immer-nothing"):((d_={})["immer-nothing"]=!0,d_),h_=Bm?Symbol.for("immer-draftable"):"__$immer_draftable",me=Bm?Symbol.for("immer-state"):"__$immer_state",q$=""+Object.prototype.constructor,us=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,HS=Object.getOwnPropertyDescriptors||function(t){var e={};return us(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Dh={},sa={get:function(t,e){if(e===me)return t;var n=Vr(t);if(!ls(n,e))return function(i,s,o){var a,l=u_(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Ln(r)?r:r===Xd(t.t,e)?(Jd(t),t.o[e]=Ah(t.A.h,r,t)):r},has:function(t,e){return e in Vr(t)},ownKeys:function(t){return Reflect.ownKeys(Vr(t))},set:function(t,e,n){var r=u_(Vr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Xd(Vr(t),e),s=i==null?void 0:i[me];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(VS(n,i)&&(n!==void 0||ls(t.t,e)))return!0;Jd(t),Jn(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Xd(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Jd(t),Jn(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Vr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){Kt(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Kt(12)}},mo={};mi(sa,function(t,e){mo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),mo.deleteProperty=function(t,e){return mo.set.call(this,t,e,void 0)},mo.set=function(t,e,n){return sa.set.call(this,t[0],e,n,t[0])};var Y$=function(){function t(n){var r=this;this.O=f_,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(v){var _=this;v===void 0&&(v=a);for(var m=arguments.length,h=Array(m>1?m-1:0),y=1;y<m;y++)h[y-1]=arguments[y];return l.produce(v,function(w){var x;return(x=s).call.apply(x,[_,w].concat(h))})}}var u;if(typeof s!="function"&&Kt(6),o!==void 0&&typeof o!="function"&&Kt(7),Ln(i)){var c=a_(r),d=Ah(r,i,void 0),f=!0;try{u=s(d),f=!1}finally{f?Su(c):Nh(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Yd(c,o),Qd(v,c)},function(v){throw Su(c),v}):(Yd(c,o),Qd(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===WS&&(u=void 0),r.D&&Um(u,!0),o){var p=[],g=[];hn("Patches").M(i,u,p,g),o(p,g)}return u}Kt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(d))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ln(n)||Kt(8),Tr(n)&&(n=W$(n));var r=a_(this),i=Ah(this,n,void 0);return i[me].C=!0,Nh(r),i},e.finishDraft=function(n,r){var i=n&&n[me],s=i.A;return Yd(s,r),Qd(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!f_&&Kt(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=hn("Patches").$;return Tr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Tt=new Y$,GS=Tt.produce;Tt.produceWithPatches.bind(Tt);Tt.setAutoFreeze.bind(Tt);Tt.setUseProxies.bind(Tt);Tt.applyPatches.bind(Tt);Tt.createDraft.bind(Tt);Tt.finishDraft.bind(Tt);function oa(t){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oa(t)}function Q$(t,e){if(oa(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(oa(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function X$(t){var e=Q$(t,"string");return oa(e)==="symbol"?e:String(e)}function J$(t,e,n){return e=X$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function m_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p_(Object(n),!0).forEach(function(r){J$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ke(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var g_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Zd=function(){return Math.random().toString(36).substring(7).split("").join(".")},Iu={INIT:"@@redux/INIT"+Zd(),REPLACE:"@@redux/REPLACE"+Zd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Zd()}};function Z$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function KS(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ke(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ke(1));return n(KS)(t,e)}if(typeof t!="function")throw new Error(Ke(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(Ke(3));return s}function d(v){if(typeof v!="function")throw new Error(Ke(4));if(l)throw new Error(Ke(5));var _=!0;return u(),a.push(v),function(){if(_){if(l)throw new Error(Ke(6));_=!1,u();var h=a.indexOf(v);a.splice(h,1),o=null}}}function f(v){if(!Z$(v))throw new Error(Ke(7));if(typeof v.type>"u")throw new Error(Ke(8));if(l)throw new Error(Ke(9));try{l=!0,s=i(s,v)}finally{l=!1}for(var _=o=a,m=0;m<_.length;m++){var h=_[m];h()}return v}function p(v){if(typeof v!="function")throw new Error(Ke(10));i=v,f({type:Iu.REPLACE})}function g(){var v,_=d;return v={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(Ke(11));function y(){h.next&&h.next(c())}y();var w=_(y);return{unsubscribe:w}}},v[g_]=function(){return this},v}return f({type:Iu.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:p},r[g_]=g,r}function eF(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Iu.INIT});if(typeof r>"u")throw new Error(Ke(12));if(typeof n(void 0,{type:Iu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ke(13))})}function tF(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{eF(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},f=0;f<s.length;f++){var p=s[f],g=n[p],v=l[p],_=g(v,u);if(typeof _>"u")throw u&&u.type,new Error(Ke(14));d[p]=_,c=c||_!==v}return c=c||s.length!==Object.keys(l).length,c?d:l}}function xu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function nF(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ke(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=xu.apply(void 0,a)(i.dispatch),m_(m_({},i),{},{dispatch:s})}}}function qS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var YS=qS();YS.withExtraArgument=qS;const y_=YS;var QS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),rF=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Rs=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},iF=Object.defineProperty,sF=Object.defineProperties,oF=Object.getOwnPropertyDescriptors,v_=Object.getOwnPropertySymbols,aF=Object.prototype.hasOwnProperty,lF=Object.prototype.propertyIsEnumerable,__=function(t,e,n){return e in t?iF(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},gr=function(t,e){for(var n in e||(e={}))aF.call(e,n)&&__(t,n,e[n]);if(v_)for(var r=0,i=v_(e);r<i.length;r++){var n=i[r];lF.call(e,n)&&__(t,n,e[n])}return t},ef=function(t,e){return sF(t,oF(e))},uF=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},cF=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xu:xu.apply(null,arguments)};function dF(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}function yr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return gr(gr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}var fF=function(t){QS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Rs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Rs([void 0],n.concat(this))))},e}(Array),hF=function(t){QS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Rs([void 0],n[0].concat(this)))):new(e.bind.apply(e,Rs([void 0],n.concat(this))))},e}(Array);function Lh(t){return Ln(t)?GS(t,function(){}):t}function pF(t){return typeof t=="boolean"}function mF(){return function(e){return gF(e)}}function gF(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck,t.actionCreatorCheck;var r=new fF;return n&&(pF(n)?r.push(y_):r.push(y_.withExtraArgument(n.extraArgument))),r}var yF=!0;function vF(t){var e=mF(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,f=d===void 0?void 0:d,p;if(typeof i=="function")p=i;else if(dF(i))p=tF(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var v=nF.apply(void 0,g),_=xu;l&&(_=cF(gr({trace:!yF},typeof l=="object"&&l)));var m=new hF(v),h=m;Array.isArray(f)?h=Rs([v],f):typeof f=="function"&&(h=f(m));var y=_.apply(void 0,h);return KS(p,c,y)}function XS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(!a)throw new Error("`builder.addCase` cannot be called with an empty action type");if(a in e)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function _F(t){return typeof t=="function"}function wF(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?XS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(_F(t))l=function(){return Lh(t())};else{var u=Lh(t);l=function(){return u}}function c(d,f){d===void 0&&(d=l());var p=Rs([s[f.type]],o.filter(function(g){var v=g.matcher;return v(f)}).map(function(g){var v=g.reducer;return v}));return p.filter(function(g){return!!g}).length===0&&(p=[a]),p.reduce(function(g,v){if(v)if(Tr(g)){var _=g,m=v(_,f);return m===void 0?g:m}else{if(Ln(g))return GS(g,function(h){return v(h,f)});var m=v(g,f);if(m===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return g},d)}return c.getInitialState=l,c}function EF(t,e){return t+"/"+e}function JS(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Lh(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],f=EF(e,c),p,g;"reducer"in d?(p=d.reducer,g=d.prepare):p=d,s[c]=p,o[f]=p,a[c]=g?yr(f,g):yr(f)});function l(){var c=typeof t.extraReducers=="function"?XS(t.extraReducers):[t.extraReducers],d=c[0],f=d===void 0?{}:d,p=c[1],g=p===void 0?[]:p,v=c[2],_=v===void 0?void 0:v,m=gr(gr({},f),o);return wF(n,function(h){for(var y in m)h.addCase(y,m[y]);for(var w=0,x=g;w<x.length;w++){var I=x[w];h.addMatcher(I.matcher,I.reducer)}_&&h.addDefaultCase(_)})}var u;return{name:e,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var SF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",CF=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=SF[Math.random()*64|0];return e},TF=["name","message","stack","code"],tf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),w_=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),IF=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=TF;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=yr(e+"/fulfilled",function(u,c,d,f){return{payload:u,meta:ef(gr({},f||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),s=yr(e+"/pending",function(u,c,d){return{payload:void 0,meta:ef(gr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=yr(e+"/rejected",function(u,c,d,f,p){return{payload:f,error:(r&&r.serializeError||IF)(u||"Rejected"),meta:ef(gr({},p||{}),{arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,f){var p=r!=null&&r.idGenerator?r.idGenerator(u):CF(),g=new a,v;function _(h){v=h,g.abort()}var m=function(){return uF(this,null,function(){var h,y,w,x,I,T,R;return rF(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),x=(h=r==null?void 0:r.condition)==null?void 0:h.call(r,u,{getState:d,extra:f}),kF(x)?[4,x]:[3,2];case 1:x=z.sent(),z.label=2;case 2:if(x===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(D,B){return g.signal.addEventListener("abort",function(){return B({name:"AbortError",message:v||"Aborted"})})}),c(s(p,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:p,arg:u},{getState:d,extra:f}))),[4,Promise.race([I,Promise.resolve(n(u,{dispatch:c,getState:d,extra:f,requestId:p,signal:g.signal,abort:_,rejectWithValue:function(D,B){return new tf(D,B)},fulfillWithValue:function(D,B){return new w_(D,B)}})).then(function(D){if(D instanceof tf)throw D;return D instanceof w_?i(D.payload,p,u,D.meta):i(D,p,u)})])];case 3:return w=z.sent(),[3,5];case 4:return T=z.sent(),w=T instanceof tf?o(null,p,u,T.payload,T.meta):o(T,p,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&o.match(w)&&w.meta.condition,R||c(w),[2,w]}})})}();return Object.assign(m,{abort:_,requestId:p,arg:u,unwrap:function(){return m.then(xF)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function xF(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function kF(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Vm="listenerMiddleware";yr(Vm+"/add");yr(Vm+"/removeAll");yr(Vm+"/remove");var E_;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);H$();const bF={user:{name:"",email:"",id:""},token:null},ZS=JS({name:"auth",initialState:bF,reducers:{setUser(t,{payload:e}){t.user.name=e.name,t.user.email=e.email,t.user.id=e.id,t.token=e.token},removeUser(t){t.user.name="",t.user.email="",t.user.id="",t.token=null}}}),PF=ZS.reducer,{setUser:S_,removeUser:RF}=ZS.actions,OF=({view:t,closeModal:e})=>{const n=sm(),r=L$(),i=({name:s,email:o,password:a})=>{console.log(s,o,a),t==="loginView"?_3(r,o,a).then(({user:l})=>{n(S_({name:l.displayName,email:l.email,token:l.accessToken,id:l.uid}))}).catch(l=>{l.code,l.message}):v3(r,o,a).then(l=>{const u=l.user,c=s;console.log(u,c),E3(u,{displayName:c}).then(()=>{n(S_({name:u.displayName,email:u.email,token:u.accessToken,id:u.uid}))}).catch(d=>{})}).catch(l=>{l.code,l.message})};return E.jsx(M$,{children:E.jsxs($$,{children:[E.jsx(F$,{children:t==="loginView"?"Log In":"Registration"}),E.jsx(j$,{onClick:e}),t==="loginView"?E.jsxs(o_,{children:[" ","Welcome back! Please enter your credentials to access your account and continue your search for an teacher."]}):E.jsx(o_,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),E.jsx(KD,{view:t,user:i,closeModal:e})]})})},NF=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(!1),{isAuth:i}=aE(),s=sm(),o=l=>{e(l),r(!0)},a=()=>{e(""),r(!1)};return E.jsxs(iP,{children:[E.jsx(a2,{}),E.jsx(Z2,{}),E.jsxs(sP,{children:[i?E.jsxs(ev,{onClick:()=>s(RF()),children:[E.jsx(lP,{}),"Log Out"]}):E.jsxs(ev,{onClick:()=>o("loginView"),children:[E.jsx(aP,{}),"Log in"]}),E.jsx(oP,{onClick:()=>o("registrationModal"),children:"Registration"})]}),n&&E.jsx(OF,{view:t,closeModal:a})]})},AF=()=>E.jsxs("div",{children:[E.jsx(NF,{}),E.jsx("main",{children:E.jsx(Vk,{})})]}),DF=A.div`
margin: 0 auto;
padding: 20px 64px;
width: 100%; 
max-width: 1440px;
`,eC=({children:t})=>E.jsx(DF,{children:t}),LF="/assets/plug-c30ed349.png",MF=A.div`
display: flex;
gap: 24px;
max-width: 1312px;
align-items: center;
justify-content: center;

`,$F=A.h1`
font-weight: 500;
font-size: 48px;
line-height: 1,16;
letter-spacing: -0.96px;
margin-bottom: 32px;

`,FF=A.span`
background-color: var(--secondary-text-color);
width: 195px;
height: 40px;
border-radius: 8px;
font-style: italic;
font-weight: 500;

`,jF=A.p`
font-size: 16px;
line-height: 1.38; 
letter-spacing: -0.32px;
margin-bottom: 64px;


`,UF=A.div`
width: 720px;
max-height: 530px;
background-color: var(--secondary-bgr-color);
border-radius: 30px;
padding: 98px 64px;
text-align: left;

`,zF=A.div`
max-width: 568px;
max-height: 530px;
flex-shrink: 0;
`,BF=A.button`
display: inline-flex;
padding: 16px 88px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: var(--secondary-text-color);
border: none;
font-size: 18px;
font-weight: 700;
line-height: 1.55;
cursor: pointer;
transition: var(--hover-transition);

&:hover {
    background-color: var(--green-hover);
}

`,VF=()=>E.jsxs(MF,{children:[E.jsxs(UF,{children:[E.jsxs($F,{children:["Unlock your potential with ",E.jsx("br",{})," the best  ",E.jsx(FF,{children:"language"})," tutors"]}),E.jsxs(jF,{children:["Embark on an Exciting Language Journey with Expert Language ",E.jsx("br",{}),"Tutors: Elevate your language proficiency to new heights by ",E.jsx("br",{}),"connecting with highly qualified and experienced tutors."]}),E.jsx(BF,{children:"Get started"})]}),E.jsx(zF,{children:E.jsx("img",{src:LF,alt:"image"})})]}),WF=A.ul`
max-width: 1312px;
display: flex;
gap: 100px;
align-items: center;
justify-content: center;
border-radius: 30px;
border: 2px dashed var(--orange);
border-image: url('dotted-line.png') 10 round;
margin-top: 24px;
padding: 40px ;

`,HF=A.li`
display: flex;
gap: 16px;
align-items: center;

`,GF=A.span`
font-size: 28px;
font-weight: 500;
line-height: 1.14; 
letter-spacing: -0.56px;
`,KF=A.span`
width: 96px;
font-size: 14px;
text-align: left;
color: var(--secondary-text-color);
line-height: 1,28px; 
letter-spacing: -0.28px;

`,qF=[{title:"Experienced tutors",quantity:"32000 +"},{title:"5-star tutor reviews",quantity:"300000 +"},{title:"Subjects taught",quantity:"120 +"},{title:"Tutor nationalities",quantity:"200 +"}],YF=()=>E.jsxs(eC,{children:[E.jsx(VF,{}),E.jsx(WF,{children:qF.map(({title:t,quantity:e})=>E.jsxs(HF,{children:[E.jsx(GF,{children:`${e}`}),E.jsx(KF,{children:`${t}`})]},e))})]}),C_="@firebase/database",T_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tC="";function QF(t){tC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XF(e)}}catch{}return new JF},Qr=nC("localStorage"),Mh=nC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new xm("@firebase/database"),ZF=function(){let t=1;return function(){return t++}}(),rC=function(t){const e=yL(t),n=new hL;n.update(e);const r=n.digest();return Sm.encodeByteArray(r)},Oa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Oa.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let ii=null,I_=!0;const e4=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=re.VERBOSE,ii=cs.log.bind(cs),e&&Mh.set("logging_enabled",!0)):typeof t=="function"?ii=t:(ii=null,Mh.remove("logging_enabled"))},Ye=function(...t){if(I_===!0&&(I_=!1,ii===null&&Mh.get("logging_enabled")===!0&&e4(!0)),ii){const e=Oa.apply(null,t);ii(e)}},Na=function(t){return function(...e){Ye(t,...e)}},$h=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oa(...t);cs.error(e)},Mn=function(...t){const e=`FIREBASE FATAL ERROR: ${Oa(...t)}`;throw cs.error(e),new Error(e)},St=function(...t){const e="FIREBASE WARNING: "+Oa(...t);cs.warn(e)},t4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},n4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Os="[MIN_NAME]",gi="[MAX_NAME]",Hs=function(t,e){if(t===e)return 0;if(t===Os||e===gi)return-1;if(e===Os||t===gi)return 1;{const n=x_(t),r=x_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},r4=function(t,e){return t===e?0:t<e?-1:1},no=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Wm=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=Wm(t[e[r]]);return n+="}",n},sC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const oC=function(t){b(!iC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},i4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const a4=new RegExp("^-?(0*)\\d{1,10}$"),l4=-2147483648,u4=2147483647,x_=function(t){if(a4.test(t)){const e=Number(t);if(e>=l4&&e<=u4)return e}return null},Aa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw St("Exception was thrown by user callback.",n),e},Math.floor(0))}},c4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="5",aC="v",lC="s",uC="r",cC="f",dC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fC="ls",hC="p",Fh="ac",pC="websocket",mC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function h4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yC(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===pC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);h4(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.counters_={}}incrementCounter(e,n=1){jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return QD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={},rf={};function Gm(t){const e=t.toString();return nf[e]||(nf[e]=new p4),nf[e]}function m4(t,e){const n=t.toString();return rf[n]||(rf[n]=e()),rf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Aa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="start",y4="close",v4="pLPCommand",_4="pRTLPCB",vC="id",_C="pw",wC="ser",w4="cb",E4="seg",S4="ts",C4="d",T4="dframe",EC=1870,SC=30,I4=EC-SC,x4=25e3,k4=3e4;class Xi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Na(e),this.stats_=Gm(n),this.urlFn=l=>(this.appCheckToken&&(l[Fh]=this.appCheckToken),yC(n,mC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new g4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(k4)),n4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Km((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===k_)this.id=a,this.password=l;else if(o===y4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[k_]="t",r[wC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[w4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aC]=Hm,this.transportSessionId&&(r[lC]=this.transportSessionId),this.lastSessionId&&(r[fC]=this.lastSessionId),this.applicationId&&(r[hC]=this.applicationId),this.appCheckToken&&(r[Fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&dC.test(location.hostname)&&(r[uC]=cC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xi.forceAllow_=!0}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){return Xi.forceAllow_?!0:!Xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!i4()&&!s4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QE(n),i=sC(r,I4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[T4]="t",r[vC]=e,r[_C]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Km{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZF(),window[v4+this.uniqueCallbackIdentifier]=e,window[_4+this.uniqueCallbackIdentifier]=n,this.myIFrame=Km.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vC]=this.myID,e[_C]=this.myPW,e[wC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SC+r.length<=EC;){const o=this.pendingSegs.shift();r=r+"&"+E4+i+"="+o.seg+"&"+S4+i+"="+o.ts+"&"+C4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(x4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=16384,P4=45e3;let ku=null;typeof MozWebSocket<"u"?ku=MozWebSocket:typeof WebSocket<"u"&&(ku=WebSocket);class qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Na(this.connId),this.stats_=Gm(n),this.connURL=qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[aC]=Hm,typeof location<"u"&&location.hostname&&dC.test(location.hostname)&&(o[uC]=cC),n&&(o[lC]=n),r&&(o[fC]=r),i&&(o[Fh]=i),s&&(o[hC]=s),yC(e,pC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qr.set("previous_websocket_failure",!0);try{let r;nS(),this.mySock=new ku(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ku!==null&&!qt.forceDisallow_}static previouslyFailed(){return Qr.isInMemoryStorage||Qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sC(n,b4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xi,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qt&&qt.isAvailable();let r=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qt];else{const i=this.transports_=[];for(const s of aa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);aa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}aa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4=6e4,O4=5e3,N4=10*1024,A4=100*1024,sf="t",b_="d",D4="s",P_="r",L4="e",R_="o",O_="a",N_="n",A_="p",M4="h";class $4{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Na("c:"+this.id+":"),this.transportManager_=new aa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>A4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sf in e){const n=e[sf];n===O_?this.upgradeIfSecondaryHealthy_():n===P_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===R_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=no("t",e),r=no("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:A_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:O_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:N_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=no("t",e),r=no("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=no(sf,e);if(b_ in e){const r=e[b_];if(n===M4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===N_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===D4?this.onConnectionShutdown_(r):n===P_?this.onReset_(r):n===L4?$h("Server Error: "+r):n===R_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$h("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hm!==r&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:A_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends TC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Im()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bu}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=32,L_=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ir(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function IC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function et(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return et(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bC(t,e){if(Ir(t)!==Ir(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ir(t)>Ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class j4{constructor(e,n){this.errorPrefix_=n,this.parts_=xC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Mc(this.parts_[r]);PC(this)}}function U4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Mc(e),PC(t)}function z4(t){const e=t.parts_.pop();t.byteLength_-=Mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function PC(t){if(t.byteLength_>L_)throw new Error(t.errorPrefix_+"has a key path longer than "+L_+" bytes ("+t.byteLength_+").");if(t.parts_.length>D_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+D_+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends TC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qm}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=1e3,B4=60*5*1e3,M_=30*1e3,V4=1.3,W4=3e4,H4="server_kill",$_=3;class Pn extends CC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pn.nextPersistentConnectionId_++,this.log_=Na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ro,this.maxReconnectDelay_=B4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Tm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jn(e,"w")){const r=ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fL(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=M_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dL(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$h("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W4&&(this.reconnectDelay_=ro),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*V4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new $4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{St(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(H4)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&St(d),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ch(this.interruptReasons_)&&(this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Wm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$_&&(this.reconnectDelay_=M_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tC.replace(/\./g,"-")]=1,Im()?e["framework.cordova"]=1:tS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bu.getInstance().currentlyOnline();return Ch(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Os,e),i=new H(Os,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl;class RC extends Uc{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return Hs(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(gi,sl)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,sl)}toString(){return".key"}}const fs=new RC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class G4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new G4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t,e){return Hs(t.name,e.name)}function Ym(t,e){return Hs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;function q4(t){jh=t}const OC=function(t){return typeof t=="number"?"number:"+oC(t):"string:"+t},NC=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jn(e,".sv"),"Priority must be a string or number.")}else b(t===jh||t.isEmpty(),"priority of unexpected type.");b(t===jh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F_;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NC(this.priorityNode_)}static set __childrenNodeConstructor(e){F_=e}static get __childrenNodeConstructor(){return F_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+OC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=oC(this.value_):e+=this.value_,this.lazyHash_=rC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AC,DC;function Y4(t){AC=t}function Q4(t){DC=t}class X4 extends Uc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(gi,new Ne("[PRIORITY-POST]",DC))}makePost(e,n){const r=AC(e);return new H(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new X4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=Math.log(2);class Z4{constructor(e){const n=s=>parseInt(Math.log(s)/J4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Le(f,d.node,Le.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),v=i(p+1,u);return d=t[p],f=n?n(d):d,new Le(f,d.node,Le.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,v){const _=d-g,m=d;d-=g;const h=i(_+1,m),y=t[_],w=n?n(y):y;p(new Le(w,y.node,v,null,h))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));v?f(_,Le.BLACK):(f(_,Le.BLACK),f(_,Le.RED))}return c},o=new Z4(t.length),a=s(o);return new ut(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const Li={};class kn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Li&&Ee,"ChildrenNode.ts has not been loaded"),of=of||new kn({".priority":Li},{".priority":Ee}),of}get(e){const n=ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return jn(this.indexSet_,e.toString())}addIndex(e,n){b(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Pu(r,e.getCompare()):a=Li;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new kn(c,u)}addToIndexes(e,n){const r=hu(this.indexes_,(i,s)=>{const o=ks(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Pu(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=hu(this.indexes_,i=>{if(i===Li)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new kn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NC(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return io||(io=new j(new ut(Ym),null,kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||io}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?io:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?io:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{b(q(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+OC(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Da?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class e6 extends j{constructor(){super(new ut(Ym),j.EMPTY_NODE,kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Da=new e6;Object.defineProperties(H,{MIN:{value:new H(Os,j.EMPTY_NODE)},MAX:{value:new H(gi,Da)}});RC.__EMPTY_NODE=j.EMPTY_NODE;Ne.__childrenNodeConstructor=j;q4(Da);Q4(Da);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t6=!0;function Ue(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Ue(e))}if(!(t instanceof Array)&&t6){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Pu(n,K4,o=>o.name,Ym);if(r){const o=Pu(n,Ee.getCompare());return new j(s,Ue(e),new kn({".priority":o},{".priority":Ee}))}else return new j(s,Ue(e),kn.Default)}else{let n=j.EMPTY_NODE;return pt(t,(r,i)=>{if(jn(t,r)&&r.substring(0,1)!=="."){const s=Ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ue(e))}}Y4(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6 extends Uc{constructor(e){super(),this.indexPath_=e,b(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hs(e.name,n.name):s}makePost(e,n){const r=Ue(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Da);return new H(gi,e)}toString(){return xC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6 extends Uc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Ue(e);return new H(n,r)}toString(){return".value"}}const i6=new r6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function la(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ua(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function s6(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(la(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,r)):o.trackChildChange(ua(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(la(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ua(i,s,o))}else r.trackChildChange(Ns(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.indexedFilter_=new Qm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ca.getStartPost_(e),this.endPost_=ca.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ca(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ua(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(la(n,d));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ns(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(la(u.name,u.node)),s.trackChildChange(Ns(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Os}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Xm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function a6(t){return t.loadsAllData()?new Qm(t.getIndex()):t.hasLimit()?new o6(t):new ca(t)}function j_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===i6?n="$value":t.index_===fs?n="$key":(b(t.index_ instanceof n6,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function U_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends CC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Na("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ru.getListenId_(e,r),a={};this.listens_[o]=a;const l=j_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ks(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ru.getListenId_(e,n);delete this.listens_[r]}get(e){const n=j_(e._queryParams),r=e._path.toString(),i=new Tm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{St("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){return{value:null,children:new Map}}function MC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Ou());const i=t.children.get(r);e=le(e),MC(i,e,n)}}function Uh(t,e,n){t.value!==null?n(e,t.value):u6(t,(r,i)=>{const s=new se(e.toString()+"/"+r);Uh(i,s,n)})}function u6(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=10*1e3,d6=30*1e3,f6=5*60*1e3;class h6{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new c6(e);const r=z_+(d6-z_)*Math.random();bo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&jn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*f6))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function $C(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=$C()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Nu(Q(),n,this.revert)}}else return b(q(this.path)===e,"operationForChild called for unrelated child."),new Nu(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new da(this.source,Q()):new da(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return G(this.path)?new yi(this.source,Q(),this.snap.getImmediateChild(e)):new yi(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new yi(this.source,Q(),n.value):new fa(this.source,Q(),n)}else return b(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fa(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function m6(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(s6(o.childName,o.snapshotNode))}),so(t,i,"child_removed",e,r,n),so(t,i,"child_added",e,r,n),so(t,i,"child_moved",s,r,n),so(t,i,"child_changed",e,r,n),so(t,i,"value",e,r,n),i}function so(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>y6(t,a,l)),o.forEach(a=>{const l=g6(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function g6(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function y6(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){return{eventCache:t,serverCache:e}}function Po(t,e,n,r){return zc(new xr(e,n,r),t.serverCache)}function FC(t,e,n,r){return zc(t.eventCache,new xr(e,n,r))}function Au(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;const v6=()=>(af||(af=new ut(r4)),af);class he{constructor(e,n=v6()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return pt(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(G(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:be(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new he(null)}}set(e,n){if(G(e))return new he(n,this.children);{const r=q(e),s=(this.children.get(r)||new he(null)).set(le(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(G(e))return n;{const r=q(e),s=(this.children.get(r)||new he(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(le(e),be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),be(n,i),r):new he(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new he(null))}}function Ro(t,e,n){if(G(e))return new en(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=et(i,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function B_(t,e,n){let r=t;return pt(n,(i,s)=>{r=Ro(r,be(e,i),s)}),r}function V_(t,e){if(G(e))return en.empty();{const n=t.writeTree_.setTree(e,new he(null));return new en(n)}}function zh(t,e){return Ri(t,e)!=null}function Ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(et(n.path,e)):null}function W_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function vr(t,e){if(G(e))return t;{const n=Ri(t,e);return n!=null?new en(new he(n)):new en(t.writeTree_.subtree(e))}}function Bh(t){return t.writeTree_.isEmpty()}function As(t,e){return jC(Q(),t.writeTree_,e)}function jC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=jC(be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){return VC(e,t)}function _6(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ro(t.visibleWrites,e,n)),t.lastWriteId=r}function w6(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function E6(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&S6(a,r.path)?i=!1:Yt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return C6(t),!0;if(r.snap)t.visibleWrites=V_(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=V_(t.visibleWrites,be(r.path,l))})}return!0}else return!1}function S6(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(be(t.path,n),e))return!0;return!1}function C6(t){t.visibleWrites=UC(t.allWrites,T6,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function T6(t){return t.visible}function UC(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Yt(n,o)?(a=et(n,o),r=Ro(r,a,s.snap)):Yt(o,n)&&(a=et(o,n),r=Ro(r,Q(),s.snap.getChild(a)));else if(s.children){if(Yt(n,o))a=et(n,o),r=B_(r,a,s.children);else if(Yt(o,n))if(a=et(o,n),G(a))r=B_(r,Q(),s.children);else{const l=ks(s.children,q(a));if(l){const u=l.getChild(le(a));r=Ro(r,Q(),u)}}}else throw Us("WriteRecord should have .snap or .children")}}return r}function zC(t,e,n,r,i){if(!r&&!i){const s=Ri(t.visibleWrites,e);if(s!=null)return s;{const o=vr(t.visibleWrites,e);if(Bh(o))return n;if(n==null&&!zh(o,Q()))return null;{const a=n||j.EMPTY_NODE;return As(o,a)}}}else{const s=vr(t.visibleWrites,e);if(!i&&Bh(s))return n;if(!i&&n==null&&!zh(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Yt(u.path,e)||Yt(e,u.path))},a=UC(t.allWrites,o,e),l=n||j.EMPTY_NODE;return As(a,l)}}}function I6(t,e,n){let r=j.EMPTY_NODE;const i=Ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vr(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=As(vr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),W_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vr(t.visibleWrites,e);return W_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function x6(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(zh(t.visibleWrites,s))return null;{const o=vr(t.visibleWrites,s);return Bh(o)?i.getChild(n):As(o,i.getChild(n))}}function k6(t,e,n,r){const i=be(e,n),s=Ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,i);return As(o,r.getNode().getImmediateChild(n))}else return null}function b6(t,e){return Ri(t.visibleWrites,e)}function P6(t,e,n,r,i,s,o){let a;const l=vr(t.visibleWrites,e),u=Ri(l,Q());if(u!=null)a=u;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&c.length<i;)d(p,r)!==0&&c.push(p),p=f.getNext();return c}else return[]}function R6(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Du(t,e,n,r){return zC(t.writeTree,t.treePath,e,n,r)}function eg(t,e){return I6(t.writeTree,t.treePath,e)}function H_(t,e,n,r){return x6(t.writeTree,t.treePath,e,n,r)}function Lu(t,e){return b6(t.writeTree,be(t.treePath,e))}function O6(t,e,n,r,i,s){return P6(t.writeTree,t.treePath,e,n,r,i,s)}function tg(t,e,n){return k6(t.writeTree,t.treePath,e,n)}function BC(t,e){return VC(be(t.treePath,e),t.writeTree)}function VC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N6{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ua(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,la(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ns(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ua(r,e.snapshotNode,i.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const WC=new A6;class ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vi(this.viewCache_),s=O6(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D6(t){return{filter:t}}function L6(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function M6(t,e,n,r,i){const s=new N6;let o,a;if(n.type===Qt.OVERWRITE){const u=n;u.source.fromUser?o=Vh(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Mu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const u=n;u.source.fromUser?o=F6(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const u=n;u.revert?o=z6(t,e,u.path,r,i,s):o=j6(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=U6(t,e,n.path,r,s);else throw Us("Unknown operation type: "+n.type);const l=s.getChanges();return $6(e,o,l),{viewCache:o,changes:l}}function $6(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Au(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(LC(Au(e)))}}function HC(t,e,n,r,i,s){const o=e.eventCache;if(Lu(r,n)!=null)return e;{let a,l;if(G(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vi(e),c=u instanceof j?u:j.EMPTY_NODE,d=eg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Du(r,vi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){b(Ir(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=H_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=le(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=H_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=tg(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Po(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Mu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=q(n);if(!l.isCompleteForPath(n)&&Ir(n)>1)return e;const g=le(n),_=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),p,_,g,WC,null)}const d=FC(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new ng(i,d,s);return HC(t,d,n,i,f,a)}function Vh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new ng(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Po(e,u,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Po(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=le(n),p=a.getNode().getImmediateChild(d);let g;if(G(f))g=r;else{const v=c.getCompleteChild(d);v!=null?IC(f)===".priority"&&v.getChild(kC(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=j.EMPTY_NODE}if(p.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Po(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function G_(t,e){return t.eventCache.isCompleteForChild(e)}function F6(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=be(n,l);G_(e,q(c))&&(a=Vh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=be(n,l);G_(e,q(c))||(a=Vh(t,a,c,u,i,s,o))}),a}function K_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=K_(t,p,f);l=Mu(t,l,new se(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),v=K_(t,g,f);l=Mu(t,l,new se(d),v,i,s,o,a)}}),l}function j6(t,e,n,r,i,s,o){if(Lu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new he(null);return l.getNode().forEachChild(fs,(c,d)=>{u=u.set(new se(c),d)}),Wh(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const f=be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Wh(t,e,n,u,i,s,a,o)}}function U6(t,e,n,r,i){const s=e.serverCache,o=FC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return HC(t,o,n,r,WC,i)}function z6(t,e,n,r,i,s){let o;if(Lu(r,n)!=null)return e;{const a=new ng(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Du(r,vi(e));else{const d=e.serverCache.getNode();b(d instanceof j,"serverChildren would be complete if leaf node"),c=eg(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=q(n);let d=tg(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,le(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,le(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Du(r,vi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Lu(r,Q())!=null,Po(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Qm(r.getIndex()),s=a6(r);this.processor_=D6(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new xr(l,o.isFullyInitialized(),i.filtersNodes()),d=new xr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zc(d,c),this.eventGenerator_=new p6(this.query_)}get query(){return this.query_}}function V6(t){return t.viewCache_.serverCache.getNode()}function W6(t){return Au(t.viewCache_)}function H6(t,e){const n=vi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function q_(t){return t.eventRegistrations_.length===0}function G6(t,e){t.eventRegistrations_.push(e)}function Y_(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Q_(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(b(vi(t.viewCache_),"We should always have a full cache before handling merges"),b(Au(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=M6(t.processor_,i,e,n,r);return L6(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,GC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function K6(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Ns(s,o))}),n.isFullyInitialized()&&r.push(LC(n.getNode())),GC(t,r,n.getNode(),e)}function GC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return m6(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;class KC{constructor(){this.views=new Map}}function q6(t){b(!$u,"__referenceConstructor has already been defined"),$u=t}function Y6(){return b($u,"Reference.ts has not been loaded"),$u}function Q6(t){return t.views.size===0}function rg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),Q_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Q_(o,e,n,r));return s}}function qC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Du(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=eg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=zc(new xr(a,l,!1),new xr(r,i,!1));return new B6(e,u)}return o}function X6(t,e,n,r,i,s){const o=qC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),G6(o,n),K6(o,n)}function J6(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Y_(u,n,r)),q_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Y_(l,n,r)),q_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kr(t)&&s.push(new(Y6())(e._repo,e._path)),{removed:s,events:o}}function YC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _r(t,e){let n=null;for(const r of t.views.values())n=n||H6(r,e);return n}function QC(t,e){if(e._queryParams.loadsAllData())return Vc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function XC(t,e){return QC(t,e)!=null}function kr(t){return Vc(t)!=null}function Vc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;function Z6(t){b(!Fu,"__referenceConstructor has already been defined"),Fu=t}function ej(){return b(Fu,"Reference.ts has not been loaded"),Fu}let tj=1;class X_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=R6(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nj(t,e,n,r,i){return _6(t.pendingWriteTree_,e,n,r,i),i?Ma(t,new yi($C(),e,n)):[]}function Ji(t,e,n=!1){const r=w6(t.pendingWriteTree_,e);if(E6(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(Q(),!0):pt(r.children,o=>{s=s.set(new se(o),!0)}),Ma(t,new Nu(r.path,s,n))}else return[]}function La(t,e,n){return Ma(t,new yi(Jm(),e,n))}function rj(t,e,n){const r=he.fromObject(n);return Ma(t,new fa(Jm(),e,r))}function ij(t,e){return Ma(t,new da(Jm(),e))}function sj(t,e,n){const r=ig(t,n);if(r){const i=sg(r),s=i.path,o=i.queryId,a=et(s,e),l=new da(Zm(o),a);return og(t,s,l)}else return[]}function JC(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||XC(o,e))){const l=J6(o,e,n,r);Q6(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>kr(p));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=uj(f);for(let g=0;g<p.length;++g){const v=p[g],_=v.query,m=rT(t,v);t.listenProvider_.startListening(Oo(_),ha(t,_),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Oo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Wc(f));t.listenProvider_.stopListening(Oo(f),p)}))}cj(t,u)}return a}function ZC(t,e,n,r){const i=ig(t,r);if(i!=null){const s=sg(i),o=s.path,a=s.queryId,l=et(o,e),u=new yi(Zm(a),l,n);return og(t,o,u)}else return[]}function oj(t,e,n,r){const i=ig(t,r);if(i){const s=sg(i),o=s.path,a=s.queryId,l=et(o,e),u=he.fromObject(n),c=new fa(Zm(a),l,u);return og(t,o,c)}else return[]}function aj(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=et(f,i);s=s||_r(p,g),o=o||kr(p)});let a=t.syncPointTree_.get(i);a?(o=o||kr(a),s=s||_r(a,Q())):(a=new KC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=_r(g,Q());v&&(s=s.updateImmediateChild(p,v))}));const u=XC(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Wc(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=dj();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const c=Bc(t.pendingWriteTree_,i);let d=X6(a,e,n,c,s,l);if(!u&&!o&&!r){const f=QC(a,e);d=d.concat(fj(t,e,f))}return d}function eT(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=et(o,e),u=_r(a,l);if(u)return u});return zC(i,e,s,n,!0)}function lj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=et(u,n);r=r||_r(c,d)});let i=t.syncPointTree_.get(n);i?r=r||_r(i,Q()):(i=new KC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new xr(r,!0,!1):null,a=Bc(t.pendingWriteTree_,e._path),l=qC(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return W6(l)}function Ma(t,e){return tT(e,t.syncPointTree_,null,Bc(t.pendingWriteTree_,Q()))}function tT(t,e,n,r){if(G(t.path))return nT(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=_r(i,Q()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=BC(r,o);s=s.concat(tT(a,l,u,c))}return i&&(s=s.concat(rg(i,t,r,n))),s}}function nT(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=_r(i,Q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=BC(r,o),c=t.operationForChild(o);c&&(s=s.concat(nT(c,a,l,u)))}),i&&(s=s.concat(rg(i,t,r,n))),s}function rT(t,e){const n=e.query,r=ha(t,n);return{hashFn:()=>(V6(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?sj(t,n._path,r):ij(t,n._path);{const s=o4(i,n);return JC(t,n,null,s)}}}}function ha(t,e){const n=Wc(e);return t.queryToTagMap.get(n)}function Wc(t){return t._path.toString()+"$"+t._queryIdentifier}function ig(t,e){return t.tagToQueryMap.get(e)}function sg(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function og(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=Bc(t.pendingWriteTree_,e);return rg(r,n,i,null)}function uj(t){return t.fold((e,n,r)=>{if(n&&kr(n))return[Vc(n)];{let i=[];return n&&(i=YC(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Oo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ej())(t._repo,t._path):t}function cj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function dj(){return tj++}function fj(t,e,n){const r=e._path,i=ha(t,e),s=rT(t,n),o=t.listenProvider_.startListening(Oo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!kr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&kr(c))return[Vc(c).query];{let f=[];return c&&(f=f.concat(YC(c).map(p=>p.query))),pt(d,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Oo(c),ha(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ag(n)}node(){return this.node_}}class lg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new lg(this.syncTree_,n)}node(){return eT(this.syncTree_,this.path_)}}const hj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},J_=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mj(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},mj=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},gj=function(t,e,n,r){return ug(e,new lg(n,t),r)},yj=function(t,e,n){return ug(t,new ag(e),n)};function ug(t,e,n){const r=t.getPriority().val(),i=J_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=J_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(Ee,(a,l)=>{const u=ug(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function dg(t,e){let n=e instanceof se?e:new se(e),r=t,i=q(n);for(;i!==null;){const s=ks(r.node.children,i)||{children:{},childCount:0};r=new cg(i,r,s),n=le(n),i=q(n)}return r}function Gs(t){return t.node.value}function iT(t,e){t.node.value=e,Hh(t)}function sT(t){return t.node.childCount>0}function vj(t){return Gs(t)===void 0&&!sT(t)}function Hc(t,e){pt(t.node.children,(n,r)=>{e(new cg(n,t,r))})}function oT(t,e,n,r){n&&!r&&e(t),Hc(t,i=>{oT(i,e,!0,r)}),n&&r&&e(t)}function _j(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $a(t){return new se(t.parent===null?t.name:$a(t.parent)+"/"+t.name)}function Hh(t){t.parent!==null&&wj(t.parent,t.name,t)}function wj(t,e,n){const r=vj(n),i=jn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Hh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=/[\[\].#$\/\u0000-\u001F\u007F]/,Sj=/[\[\].#$\u0000-\u001F\u007F]/,lf=10*1024*1024,aT=function(t){return typeof t=="string"&&t.length!==0&&!Ej.test(t)},lT=function(t){return typeof t=="string"&&t.length!==0&&!Sj.test(t)},Cj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lT(t)},uT=function(t,e,n){const r=n instanceof se?new j4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(iC(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>lf/3&&Mc(e)>lf)throw new Error(t+"contains a string greater than "+lf+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!aT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);U4(r,o),uT(t,a,r),z4(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},cT=function(t,e,n,r){if(!(r&&n===void 0)&&!lT(n))throw new Error(iS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cT(t,e,n,r)},Ij=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!aT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cj(n))throw new Error(iS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kj(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!bC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lr(t,e,n){kj(t,n),bj(t,r=>Yt(r,e)||Yt(e,r))}function bj(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Pj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ii&&Ye("event: "+n.toString()),Aa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rj="repo_interrupt",Oj=25;class Nj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ou(),this.transactionQueueTree_=new cg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Aj(t,e,n){if(t.stats_=Gm(t.repoInfo_),t.forceRestClient_||c4())t.server_=new Ru(t.repoInfo_,(r,i,s,o)=>{Z_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>e0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(r,i,s,o)=>{Z_(t,r,i,s,o)},r=>{e0(t,r)},r=>{Lj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=m4(t.repoInfo_,()=>new h6(t.stats_,t.server_)),t.infoData_=new l6,t.infoSyncTree_=new X_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=La(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fg(t,"connected",!1),t.serverSyncTree_=new X_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Lr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Dj(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dT(t){return hj({timestamp:Dj(t)})}function Z_(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=hu(n,u=>Ue(u));o=oj(t.serverSyncTree_,s,l,i)}else{const l=Ue(n);o=ZC(t.serverSyncTree_,s,l,i)}else if(r){const l=hu(n,u=>Ue(u));o=rj(t.serverSyncTree_,s,l)}else{const l=Ue(n);o=La(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=mg(t,s)),Lr(t.eventQueue_,a,o)}function e0(t,e){fg(t,"connected",e),e===!1&&Fj(t)}function Lj(t,e){pt(e,(n,r)=>{fg(t,n,r)})}function fg(t,e,n){const r=new se("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(r,i);const s=La(t.infoSyncTree_,r,i);Lr(t.eventQueue_,r,s)}function Mj(t){return t.nextWriteId_++}function $j(t,e,n){const r=lj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ue(i).withIndex(e._queryParams.getIndex());aj(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=La(t.serverSyncTree_,e._path,s);else{const a=ha(t.serverSyncTree_,e);o=ZC(t.serverSyncTree_,e._path,s,a)}return Lr(t.eventQueue_,e._path,o),JC(t.serverSyncTree_,e,n,null,!0),s},i=>(hg(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function Fj(t){hg(t,"onDisconnectEvents");const e=dT(t),n=Ou();Uh(t.onDisconnect_,Q(),(i,s)=>{const o=gj(i,s,t.serverSyncTree_,e);MC(n,i,o)});let r=[];Uh(n,Q(),(i,s)=>{r=r.concat(La(t.serverSyncTree_,i,s));const o=Bj(t,i);mg(t,o)}),t.onDisconnect_=Ou(),Lr(t.eventQueue_,Q(),r)}function jj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rj)}function hg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function fT(t,e,n){return eT(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function pg(t,e=t.transactionQueueTree_){if(e||Gc(t,e),Gs(e)){const n=pT(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uj(t,$a(e),n)}else sT(e)&&Hc(e,n=>{pg(t,n)})}function Uj(t,e,n){const r=n.map(u=>u.currentWriteId),i=fT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=et(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{hg(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Ji(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gc(t,dg(t.transactionQueueTree_,e)),pg(t,t.transactionQueueTree_),Lr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Aa(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{St("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}mg(t,e)}},o)}function mg(t,e){const n=hT(t,e),r=$a(n),i=pT(t,n);return zj(t,i,r),r}function zj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=et(n,l.path);let c=!1,d;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Ji(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Oj)c=!0,d="maxretry",i=i.concat(Ji(t.serverSyncTree_,l.currentWriteId,!0));else{const f=fT(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){uT("transaction failed: Data returned ",p,l.path);let g=Ue(p);typeof p=="object"&&p!=null&&jn(p,".priority")||(g=g.updatePriority(f.getPriority()));const _=l.currentWriteId,m=dT(t),h=yj(g,f,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=Mj(t),o.splice(o.indexOf(_),1),i=i.concat(nj(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Ji(t.serverSyncTree_,_,!0))}else c=!0,d="nodata",i=i.concat(Ji(t.serverSyncTree_,l.currentWriteId,!0))}Lr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Gc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Aa(r[a]);pg(t,t.transactionQueueTree_)}function hT(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Gs(r)===void 0;)r=dg(r,n),e=le(e),n=q(e);return r}function pT(t,e){const n=[];return mT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mT(t,e,n){const r=Gs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hc(e,i=>{mT(t,i,n)})}function Gc(t,e){const n=Gs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,iT(e,n.length>0?n:void 0)}Hc(e,r=>{Gc(t,r)})}function Bj(t,e){const n=$a(hT(t,e)),r=dg(t.transactionQueueTree_,e);return _j(r,i=>{uf(t,i)}),uf(t,r),oT(r,i=>{uf(t,i)}),n}function uf(t,e){const n=Gs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ji(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iT(e,void 0):n.length=s+1,Lr(t.eventQueue_,$a(e),i);for(let o=0;o<r.length;o++)Aa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Wj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):St(`Invalid query segment '${n}' in query '${t}'`)}return e}const t0=function(t,e){const n=Hj(t),r=n.namespace;n.domain==="firebase.com"&&Mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||t4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},Hj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Vj(t.substring(c,d)));const f=Wj(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class Kj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:IC(this._path)}get ref(){return new Un(this._repo,this._path)}get _queryIdentifier(){const e=U_(this._queryParams),n=Wm(e);return n==="{}"?"default":n}get _queryObject(){return U_(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof gg))return!1;const n=this._repo===e._repo,r=bC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F4(this._path)}}class Un extends gg{constructor(e,n){super(e,n,new Xm,!1)}get parent(){const e=kC(this._path);return e===null?null:new Un(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Gh(this.ref,e);return new pa(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new pa(i,Gh(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yj(t,e){return t=bt(t),t._checkNotDeleted("ref"),e!==void 0?Gh(t._root,e):t._root}function Gh(t,e){return t=bt(t),q(t._path)===null?Tj("child","path",e,!1):cT("child","path",e,!1),new Un(t._repo,be(t._path,e))}function Qj(t){t=bt(t);const e=new qj(()=>{}),n=new yg(e);return $j(t._repo,t,n).then(r=>new pa(r,new Un(t._repo,t._path),t._queryParams.getIndex()))}class yg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Gj("value",this,new pa(e.snapshotNode,new Un(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Kj(this,e,n):null}matches(e){return e instanceof yg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}q6(Un);Z6(Un);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xj="FIREBASE_DATABASE_EMULATOR_HOST",Kh={};let Jj=!1;function Zj(t,e,n,r){t.repoInfo_=new gC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function e5(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=t0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Xj]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=t0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ds(ds.OWNER):new f4(t.name,t.options,e);Ij("Invalid Firebase Database URL",o),G(o.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=n5(a,t,c,new d4(t.name,n));return new r5(d,t)}function t5(t,e){const n=Kh[e];(!n||n[t.key]!==t)&&Mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jj(t),delete n[t.key]}function n5(t,e,n,r){let i=Kh[e.name];i||(i={},Kh[e.name]=i);let s=i[t.toURLString()];return s&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Nj(t,Jj,n,r),i[t.toURLString()]=s,s}class r5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Aj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Un(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(t5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mn("Cannot call "+e+" on a deleted database.")}}function i5(t=lS(),e){const n=bm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nL("database");r&&s5(n,...r)}return n}function s5(t,e,n,r={}){t=bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rL(r.mockUserToken,t.app.options.projectId);s=new ds(o)}Zj(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o5(t){QF(Bs),bs(new di("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return e5(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mr(C_,T_,t),mr(C_,T_,"esm2017")}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};o5();var a5="firebase",l5="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr(a5,l5,"app");const u5={apiKey:"AIzaSyD5fwzH88Rdr8aJpWHjevCG4wHs9XYXciY",authDomain:"learnlingvo-491b1.firebaseapp.com",databaseURL:"https://learnlingvo-491b1-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"learnlingvo-491b1",storageBucket:"learnlingvo-491b1.appspot.com",messagingSenderId:"801121241363",appId:"1:801121241363:web:652af757d537699fa7b2e6"},c5=aS(u5),d5=i5(c5),f5={teachers:[],favorites:[],totalHits:null,isLoading:!1,currentPage:1},gT=JS({name:"teachers",initialState:f5,reducers:{addTeachers:(t,{payload:e})=>{t.teachers=t.teachers.concat(e),t.currentPage+=1},addToFavorites:(t,{payload:e})=>{t.favorites.concat(e)}}}),{addTeachers:h5}=gT.actions,p5=gT.reducer,m5=()=>E.jsx(g5,{children:E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[E.jsx("path",{d:"M14.6667 4.13333C14.6667 3.3866 14.6667 3.01323 14.5213 2.72801C14.3935 2.47713 14.1895 2.27316 13.9387 2.14532C13.6534 2 13.2801 2 12.5333 2H12.2667C10.7732 2 10.0265 2 9.45603 2.29065C8.95426 2.54631 8.54631 2.95426 8.29065 3.45603C8 4.02646 8 4.77319 8 6.26667V14L8.0667 13.8999C8.5298 13.2053 8.76135 12.858 9.06727 12.6065C9.33809 12.3839 9.65016 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12H12.5333C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5229 14.5213 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.86667V4.13333Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),E.jsx("path",{d:"M1.33325 4.13333C1.33325 3.3866 1.33325 3.01323 1.47858 2.72801C1.60641 2.47713 1.81038 2.27316 2.06126 2.14532C2.34648 2 2.71985 2 3.46659 2H3.73325C5.22673 2 5.97346 2 6.54389 2.29065C7.04566 2.54631 7.45361 2.95426 7.70927 3.45603C7.99992 4.02646 7.99992 4.77319 7.99992 6.26667V14L7.93322 13.8999C7.47012 13.2053 7.23857 12.858 6.93265 12.6065C6.66182 12.3839 6.34976 12.2169 6.01432 12.1151C5.63542 12 5.21799 12 4.38313 12H3.46659C2.71985 12 2.34648 12 2.06126 11.8547C1.81038 11.7268 1.60641 11.5229 1.47858 11.272C1.33325 10.9868 1.33325 10.6134 1.33325 9.86667V4.13333Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]})}),g5=A.div`
 display: flex;
 align-items: center;
 justify-content: center;
`,yT=()=>E.jsx("div",{children:E.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("g",{"clip-path":"url(#clip0_44_287)",children:E.jsx("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531","stroke-width":"1.2"})}),E.jsx("defs",{children:E.jsx("clipPath",{id:"clip0_44_287",children:E.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})});function y5(){return E.jsx(v5,{children:E.jsx("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:E.jsx("path",{d:"M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z",stroke:"#121417","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})}const v5=A.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;A.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;const _5=()=>E.jsx("div",{children:E.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("g",{id:"user",children:E.jsxs("g",{"clip-path":"url(#clip0_193_329)",children:[E.jsx("rect",{width:"100",height:"100",rx:"50",fill:"#F3F3F3","fill-opacity":"0.952941"}),E.jsxs("g",{id:"Group 1456",children:[E.jsx("circle",{id:"Ellipse 190",cx:"50.6392",cy:"47.8557",r:"15.8557",fill:"#939FC0"}),E.jsx("path",{id:"Ellipse 191",d:"M89 101.688C89 96.5668 87.9912 91.4954 86.0313 86.7637C84.0714 82.032 81.1986 77.7327 77.5772 74.1112C73.9557 70.4897 69.6563 67.617 64.9247 65.657C60.193 63.6971 55.1216 62.6883 50 62.6883C44.8784 62.6883 39.807 63.6971 35.0753 65.657C30.3436 67.617 26.0443 70.4897 22.4228 74.1112C18.8013 77.7327 15.9286 82.032 13.9687 86.7637C12.0088 91.4954 11 96.5668 11 101.688L50 101.688H89Z",fill:"#939FC0"})]})]})}),E.jsx("defs",{children:E.jsx("clipPath",{id:"clip0_193_329",children:E.jsx("rect",{width:"100",height:"100",rx:"50",fill:"white"})})})]})});A.div`
    width: 44px;
    height: 44px;

`;const w5=A.div`
display: flex;
flex-direction: column;
gap: 16px;

`,E5=A.div`
width: 44px;
height: 44px;
border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,S5=A.div`
display: flex;
gap: 12px;
align-items: center;
justify-content: flex-start;
`,C5=A.p`
color: var(--secondary-text-color);
font-size: 16px;
font-weight: 500;
line-height: calc(24 / 16);
`;A.div`
display: flex;
gap: 8px;
`;const T5=A.p`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: calc(24 / 16);

`,I5=A.div`
display: flex;
gap: 8px;

`,x5=({el:t})=>{console.log(t);const{comment:e,reviewer_name:n,reviewer_rating:r}=t;return E.jsxs(w5,{children:[E.jsxs(S5,{children:[E.jsx(E5,{children:E.jsx(_5,{})}),E.jsxs("div",{children:[E.jsx(C5,{children:n}),E.jsxs(I5,{children:[E.jsx(yT,{}),E.jsx("p",{children:`${r}.0`})]})]})]}),E.jsx(T5,{children:e})]})},k5=A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 35px;
  background-color: transparent;
  border: 1px solid rgba(18, 20, 23, 0.2);
  transition:  var(--hover-transition);

  &:hover {
    background-color: var(--orange);
    border-color: transparent;
  }
`,b5=({title:t})=>E.jsx(k5,{children:t}),P5=A.div`
  display: flex;
  gap: 48px;
  padding: 24px;
  border-radius: 24px;
  background-color: var(--main-bgr-color);
  margin: 0 auto;
`,R5=A.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--orange);
  background-color: var(--main-bgr-color);
  display: flex;
  align-items: center;
  justify-content: center;
`,O5=A.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
`,N5=A.div`
display: flex;
flex-direction: column;
gap: 8px;
`,A5=A.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`,D5=A.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,al=A.li`
  padding-right: 16px;
  border-right: 1px rgba(18, 20, 23, 0.2);
  display: flex;
  gap: 8px;
  align-items: center;
`,L5=A.button`
/* margin-left: 64px; */
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
border: none;
outline: none;
cursor: pointer;
transition: transform var(--hover-transition);

&:hover {
    transform: scale(1.1);
}

`,M5=A.div`
flex-grow: 1;
  width: 968px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,$5=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,F5=A.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`,j5=A.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: calc(24 / 24);
`,ll=A.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 24);
  color: var(--secondary-text-color);
`,cf=A.span`
  color: var(--main-text-color);

  &.languages {
    text-decoration: underline;
  }
`,U5=A.button`
margin-right: auto;
font-size: 16px;
font-weight: 500;
line-height: calc(24 / 16); 
text-decoration-line: underline;
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
`,z5=({item:t})=>{const[e,n]=C.useState(!1),{avatar_url:r,name:i,surname:s,languages:o,lesson_info:a,conditions:l,lessons_done:u,rating:c,price_per_hour:d,experience:f,reviews:p,levels:g}=t;return E.jsx(eC,{children:E.jsxs(P5,{children:[E.jsxs(R5,{children:[" ",E.jsx(O5,{src:r,alt:"avatar"})]}),E.jsxs(M5,{children:[E.jsxs(A5,{children:[E.jsxs(N5,{children:[E.jsx(ll,{children:"Languages"}),E.jsx(j5,{children:`${i} ${s}`})]}),E.jsxs(D5,{children:[E.jsxs(al,{children:[E.jsx(m5,{}),"Lessons online"]}),E.jsxs(al,{children:["Lessons done: ",E.jsx("span",{children:u})]}),E.jsxs(al,{children:[" ",E.jsx(yT,{}),"Rating: ",E.jsx("span",{children:c})]}),E.jsxs(al,{children:["Price / 1 hour: ",E.jsx("span",{children:`${d}$`})]}),E.jsxs(L5,{children:[" ",E.jsx(y5,{})," "]})]})]}),E.jsxs($5,{children:[E.jsxs(ll,{children:["Speaks:"," ",E.jsx(cf,{className:"languages",children:`${o}`})]}),E.jsxs(ll,{children:["Lesson Info: ",E.jsx(cf,{children:`${a}`})]}),E.jsxs(ll,{children:["Conditions: ",E.jsx(cf,{children:`${l}`})]})]}),e?E.jsxs(E.Fragment,{children:[E.jsx("p",{children:f}),p.map((v,_)=>E.jsx(x5,{el:v},_))]}):E.jsx(U5,{onClick:()=>n(!0),children:"Read more"}),E.jsx(F5,{children:g.map((v,_)=>E.jsx(b5,{title:v},_))})]})]})})},B5=A.div`
background-color: var(--secondary-bgr-color);
display: flex;
flex-direction: column;
gap: 32px;
`,V5=()=>{const t=eE(r=>r.teachers.teachers),e=sm(),n=async()=>{try{const r=Yj(d5,"/"),i=await Qj(r);if(i.exists()){const s=i.val();e(h5(s))}}catch{console.error("Помилка завантаження")}};return C.useEffect(()=>{n()},[]),E.jsx(B5,{children:t.map((r,i)=>E.jsx(z5,{item:r},i))})},W5=()=>E.jsx("div",{children:"Favorites"});function H5(){return E.jsx(Hk,{children:E.jsxs(co,{path:"/",element:E.jsx(AF,{}),children:[E.jsx(co,{index:!0,element:E.jsx(YF,{})}),E.jsx(co,{path:"teachers",element:E.jsx(V5,{})}),E.jsx(co,{path:"favorites",element:E.jsx(W5,{})})]})})}const G5=vF({reducer:{user:PF,teachers:p5}});df.createRoot(document.getElementById("root")).render(E.jsx(ct.StrictMode,{children:E.jsx(Xk,{children:E.jsx(Q2,{store:G5,children:E.jsx(H5,{})})})}))});export default K5();
