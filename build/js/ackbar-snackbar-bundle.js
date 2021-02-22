/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s;}},r={},i={},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,c=new RegExp(`${n}|${o}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],a=[],r=document.createTreeWalker(e.content,133,null,!1);let i=0,o=-1,l=0;const{strings:d,values:{length:b}}=t;for(;l<b;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let a=0;for(let t=0;t<s;t++)h(e[t].name,"$lit$")&&a++;for(;a-- >0;){const e=d[l],s=p.exec(e)[2],a=s.toLowerCase()+"$lit$",r=t.getAttribute(a);t.removeAttribute(a);const i=r.split(c);this.parts.push({type:"attribute",index:o,name:s,strings:i}),l+=i.length-1;}}"TEMPLATE"===t.tagName&&(a.push(t),r.currentNode=t.content);}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const a=t.parentNode,r=e.split(c),i=r.length-1;for(let e=0;e<i;e++){let s,i=r[e];if(""===i)s=u();else {const t=p.exec(i);null!==t&&h(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(i);}a.insertBefore(s,t),this.parts.push({type:"node",index:++o});}""===r[i]?(a.insertBefore(u(),t),s.push(t)):t.data=r[i],l+=i;}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&o!==i||(o++,e.insertBefore(u(),t)),i=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),l++;}else {let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),l++;}}else r.currentNode=a.pop();}for(const t of s)t.parentNode.removeChild(t);}}const h=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},d=t=>-1!==t.index,u=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s;}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit();}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],a=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,n=0,o=0,c=r.nextNode();for(;n<a.length;)if(i=a[n],d(i)){for(;o<i.index;)o++,"TEMPLATE"===c.nodeName&&(e.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=e.pop(),c=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t);}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));n++;}else this.__parts.push(void 0),n++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),_=` ${n} `;class g{constructor(t,e,s,a){this.strings=t,this.values=e,this.type=s,this.processor=a;}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let a=0;a<t;a++){const t=this.strings[a],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const i=p.exec(t);e+=null===i?t+(s?_:o):t.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+n;}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==m&&(e=m.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart();}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!y(t))return t}let a="";for(let r=0;r<e;r++){a+=t[r];const e=s[r];if(void 0!==e){const t=e.value;if(f(t)||!y(t))a+="string"==typeof t?t:String(t);else for(const e of t)a+="string"==typeof e?e:String(e);}}return a+=t[e],a}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()));}}class k{constructor(t){this.value=void 0,this.committer=t;}setValue(t){t===r||f(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0));}commit(){for(;e(this.value);){const t=this.value;this.value=r,t(this);}this.value!==r&&this.committer.commit();}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t;}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u());}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling;}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u());}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode;}setValue(t){this.__pendingValue=t;}commit(){if(null===this.startNode.parentNode)return;for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this);}const t=this.__pendingValue;t!==r&&(f(t)?t!==this.value&&this.__commitText(t):t instanceof g?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===i?(this.value=i,this.clear()):this.__commitText(t));}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode);}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t);}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t;}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else {const s=new b(e,t.processor,this.options),a=s._clone();s.update(t.values),this.__commitNode(a),this.value=s;}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,a=0;for(const r of t)s=e[a],void 0===s&&(s=new S(this.options),e.push(s),0===a?s.appendIntoPart(this):s.insertAfterPart(e[a-1])),s.setValue(r),s.commit(),a++;a<e.length&&(e.length=a,this.clear(s&&s.endNode));}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode);}}class w{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s;}setValue(t){this.__pendingValue=t;}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this);}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r;}}class x extends v{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1];}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue());}}class P extends k{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch(t){}})();class C{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t);}setValue(t){this.__pendingValue=t;}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this);}if(this.__pendingValue===r)return;const t=this.__pendingValue,s=this.value,a=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),i=null!=t&&(null==s||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r;}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t);}}const A=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const T=new class{handleAttributeExpressions(t,e,s,a){const r=e[0];if("."===r){return new x(t,e.slice(1),s).parts}if("@"===r)return [new C(t,e.slice(1),a.eventContext)];if("?"===r)return [new w(t,e.slice(1),s)];return new v(t,e,s).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const a=t.strings.join(n);return s=e.keyString.get(a),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(a,s)),e.stringsArray.set(t.strings,s),s}const V=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,window.JSCompiler_renameProperty=(t,e)=>t;const U={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},z=(t,e)=>e!==t&&(e==e||t==t),R={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:z};class I extends HTMLElement{constructor(){super(),this.initialize();}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const a=this._attributeNameForProperty(s,e);void 0!==a&&(this._attributeToPropertyMap.set(a,s),t.push(a));})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)));}}static createProperty(t,e=R){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,a=this.getPropertyDescriptor(t,s,e);void 0!==a&&Object.defineProperty(this.prototype,t,a);}static getPropertyDescriptor(t,e,s){return {get(){return this[e]},set(a){const r=this[t];this[e]=a,this.requestUpdateInternal(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||R}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s]);}}static _attributeNameForProperty(t,e){const s=e.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=z){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,a=e.converter||U,r="function"==typeof a?a:a.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,a=e.converter;return (a&&a.toAttribute||U.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal();}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t);}}));}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0;}connectedCallback(){this.enableUpdating();}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0);}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s);}_propertyToAttribute(t,e,s=R){const a=this.constructor,r=a._attributeNameForProperty(t,s);if(void 0!==r){const t=a._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState;}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,a=s._attributeToPropertyMap.get(t);if(void 0!==a){const t=s.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState;}}requestUpdateInternal(t,e,s){let a=!0;if(void 0!==t){const r=this.constructor;s=s||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):a=!1;}!this._hasRequestedUpdate&&a&&(this._updatePromise=this._enqueueUpdate());}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise;}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated();}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e));}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState;}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return !0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated();}updated(t){}firstUpdated(t){}}I.finalized=!0,
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(t,...e)=>new g(t,e,"html",T)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,M=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol();class L{constructor(t,e){if(e!==D)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return void 0===this._styleSheet&&(M?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const H=(t,...e)=>{const s=e.reduce(((e,s,a)=>e+(t=>{if(t instanceof L)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[a+1]),t[0]);return new L(s,D)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const B={};class F extends I{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),a=[];s.forEach((t=>a.unshift(t))),this._styles=a;}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!M){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new L(String(e),D)}return t}));}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles();}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?M?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName));}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this);}update(t){const e=this.render();super.update(t),e!==B&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e);})));}render(){return B}}F.finalized=!0,F.render=(t,e,s)=>{let r=O.get(e);void 0===r&&(a(e,e.firstChild),O.set(e,r=new S(Object.assign({templateFactory:E},s))),r.appendInto(e)),r.setValue(t),r.commit();};const q=H`
  :host {
    /* Colors: */
    --ackbar-color-bg: rgb(53, 53, 53);
    --ackbar-color-success: rgb(105, 199, 109);
    --ackbar-color-error: rgb(234, 94, 94);
    --ackbar-color-warning: rgb(241, 153, 78);
    --ackbar-color-info: rgb(47, 162, 255);
    --ackbar-color-text: rgb(255, 255, 255);
    --ackbar-color-button-default: rgb(149, 104, 228);
    --ackbar-color-button-background: transparent;
    --ackbar-color-button-background-hover: rgba(0, 0, 0, 0.1);

    /* Distances / Position / Spacing*/
    --ackbar-padding-normal: 1rem;
    --ackbar-button-padding: 0.125rem 0.5rem;
    --ackbar-spacing-normal: 0.25rem;
    --ackbar-margins: 1rem;
    --ackbar-width: 25rem;
    --ackbar-max-width: calc(100vw - calc(var(--ackbar-margins) * 4));
    --ackbar-line-height: 1.2;

    /* Other */
    --ackbar-button-opacity: 0.75;
    --ackbar-button-opacity-hover: 1;
    --ackbar-base-font-size: 1rem;
    --ackbar-radius-normal: 0.25rem;
    --ackbar-opacity: 1;
    --ackbar-grid-gap: 1rem;
  }
`,j=H`
  ${q}

  :host,
  :host([position="bottom left"]) {
    width: fit-content;
    position: fixed;
    bottom: var(--ackbar-margins);
    left: var(--ackbar-margins);
    opacity: var(--ackbar-opacity);
  }

  /* POSITION */
  :host([position='top left']) {
    bottom: unset;
    top: var(--ackbar-margins);
    left: var(--ackbar-margins);
    transform: none;
  }

  :host([position='top center']) {
    bottom: unset;
    top: var(--ackbar-margins);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position='top right']) {
    bottom: unset;
    left: unset;
    top: var(--ackbar-margins);
    right: var(--ackbar-margins);
  }

  :host([position='bottom center']) {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position='bottom right']) {
    left: unset;
    right: var(--ackbar-margins);
  }

  :host([position='middle left']) {
    bottom: unset;
    top: 50%;
    left: var(--ackbar-margins);
    transform: translateY(-50%);
  }

  :host([position='middle center']) {
    bottom: unset;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :host([position='middle right']) {
    bottom: unset;
    top: 50%;
    left: unset;
    right: var(--ackbar-margins);
    transform: translateY(-50%);
  }

  :host([position='top right']) ackbar-bar,
  :host([position='middle right']) ackbar-bar,
  :host([position='bottom right']) ackbar-bar {
    margin-left: auto;
    margin-right: 0;
  }

  :host([position='top center']) ackbar-bar,
  :host([position='middle center']) ackbar-bar,
  :host([position='bottom center']) ackbar-bar {
    margin-left: auto;
    margin-right: auto;
  }
`,J={animationDone:!1,animationDuration:500,animationName:"default",buttonCallback:null,buttonText:null,duration:4e3,message:"Ackbar snackbar: It's a snackbar!",size:"normal",type:"auto",variant:"default"},W=["default","slide-in","zoom"],X=["small","normal","large"],Y=["auto","dismiss"],Z=["default","success","error","warning","info"],G={animationDuration:t=>!t||"number"==typeof t,animationName:t=>!t||"string"==typeof t&&W.includes(t),buttonCallback:t=>!t||"function"==typeof t,buttonText:t=>!t||"string"==typeof t,duration:t=>!t||"number"==typeof t&&!Number.isNaN(t),message:t=>!t||"string"==typeof t&&t.length>0,size:t=>!t||"string"==typeof t&&X.includes(t),type:t=>!t||"string"==typeof t&&Y.includes(t),variant:t=>!t||"string"==typeof t&&Z.includes(t)};const K=H`
  :host {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: var(--ackbar-width);
    max-width: var(--ackbar-max-width);
    background-color: var(--ackbar-color-bg);
    padding: calc(var(--ackbar-padding-normal) / 2) var(--ackbar-padding-normal);
    margin-top: var(--ackbar-spacing-normal);
    color: var(--ackbar-color-text);
    border-radius: var(--ackbar-radius-normal);
    line-height: var(--ackbar-line-height);
  }

  /* VARIANTS*/
  :host([variant='success']) {
    background-color: var(--ackbar-color-success);
  }

  :host([variant='error']) {
    background-color: var(--ackbar-color-error);
  }

  :host([variant='warning']) {
    background-color: var(--ackbar-color-warning);
  }

  :host([variant='info']) {
    background-color: var(--ackbar-color-info);
  }

  /* SIZES */
  :host([size='small']) {
    padding: calc(var(--ackbar-padding-normal) / 3)
      calc(var(--ackbar-padding-normal) / 2);
  }

  :host([size='small']) .ackbar-bar__message,
  :host([size='small']) .ackbar-bar__button {
    font-size: calc(var(--ackbar-base-font-size) * 0.75);
  }

  :host([size='large']) {
    padding: calc(var(--ackbar-padding-normal) * 0.5)
      calc(var(--ackbar-padding-normal) * 1.25);
  }

  :host([size='large']) .ackbar-bar__message,
  :host([size='large']) .ackbar-bar__button {
    font-size: calc(var(--ackbar-base-font-size) * 1.5);
  }

  /* HAS BUTTON */
  :host([hasButton]) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: var(--ackbar-grid-gap);
  }

  /* BUTTON */
  .ackbar-bar__button {
    border: none;
    background-color: var(--ackbar-color-button-background);
    font-size: var(--ackbar-base-font-size);
    color: var(--ackbar-color-button-default);
    outline: none;
    opacity: var(--ackbar-button-opacity);
    padding: var(--ackbar-button-padding);
    border-radius: 0.25rem;
  }

  :host([variant='success']) .ackbar-bar__button,
  :host([variant='error']) .ackbar-bar__button,
  :host([variant='info']) .ackbar-bar__button,
  :host([variant='warning']) .ackbar-bar__button {
    color: var(--ackbar-color-text);
  }

  .ackbar-bar__message {
    margin: 0;
    font-size: var(--ackbar-base-font-size);
  }

  @media (hover: hover) {
    .ackbar-bar__button:hover {
      background-color: var(--ackbar-color-button-background-hover);
      cursor: pointer;
      opacity: var(--ackbar-button-opacity-hover);
    }
  }
`,Q={default:{showAnimation:[{opacity:"0"},{opacity:"1"}],hideAnimation:[{opacity:"1"},{opacity:"0"}]},"slide-in":{showAnimation:[{transform:"translateX(-100%)",opacity:"0"},{transform:"translateX(0)",opacity:"1"}],hideAnimation:[{transform:"translateX(0)",opacity:"1"},{transform:"translateX(-100%)",opacity:"0"}]},zoom:{showAnimation:[{transform:"scale(0)",opacity:"0"},{transform:"scale(1)",opacity:"1"}],hideAnimation:[{transform:"scale(1)",opacity:"1"},{transform:"scale(0)",opacity:"0"}]}};window.customElements.define("ackbar-bar",class extends F{render(){return $`
      <p class="ackbar-bar__message">${this.message}</p>

      ${this.buttonText?$`
            <button
              class="ackbar-bar__button"
              @click="${this._handleButtonClick}"
            >
              ${this.buttonText}
            </button>
          `:""}
    `}static get styles(){return H`
      ${K}
    `}static get properties(){return {animationDone:{type:Boolean},animationDuration:{type:Number},animationName:{type:String},buttonCallback:{type:Function},buttonText:{type:String},duration:{type:Number},id:{type:String},message:{type:String},type:{type:String}}}set buttonText(t){t&&this.setAttribute("hasButton",""),this._buttonText=t;}get buttonText(){return this._buttonText}constructor(){super(),this._timer=this._timer.bind(this),this._showStart=Date.now();}connectedCallback(){super.connectedCallback(),"auto"!==this.type&&this._buttonText||this._timer();}_timer(){Date.now()-this._showStart>=this.duration?(this._fadeOut(),cancelAnimationFrame(this._timer)):requestAnimationFrame(this._timer);}update(t){super.update(t),this.animationDone||this._fadeIn();}_fadeIn(){const t=Q[this.animationName].showAnimation,e={duration:this.animationDuration,iterations:1};this.animate(t,e),this.dispatchEvent(new CustomEvent("ackbar-bar-has-faded-in",{bubbles:!0,composed:!0,detail:{snackbarID:this.id}}));}_fadeOut(){const t=Q[this.animationName].hideAnimation,e={duration:this.animationDuration,iterations:1};this.animate(t,e).onfinish=()=>{this._removeSnackbar();};}_removeSnackbar(){this.dispatchEvent(new CustomEvent("ackbar-snackbar-remove",{bubbles:!0,composed:!0,detail:{snackbarID:this.id}}));}_handleButtonClick(){this._fadeOut(),"function"==typeof this.buttonCallback&&this.buttonCallback();}});customElements.define("ackbar-snackbar",class extends F{render(){return $``}static get styles(){return H`
      ${j}
    `}constructor(){super(),window.addEventListener("ackbar-snackbar-add",this._handleSnackbarAdd.bind(this)),window.addEventListener("ackbar-snackbar-remove",this._handleSnackbarRemove.bind(this));}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("ackbar-snackbar-ready",{bubbles:!0,composed:!0}));}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("ackbar-snackbar-add",this._handleSnackbarAdd.bind(this)),window.removeEventListener("ackbar-snackbar-remove",this._handleSnackbarRemove.bind(this));}_handleSnackbarAdd(t){const e=t.detail||{},s=(a=e,Object.keys(G).filter((t=>!G[t](a[t]))).map((t=>new Error(`${t} is invalid.`))));var a;if(s.length>0)for(const{message:t}of s)console.error("There was a problem creating your snackbar. Please check your custom event options.",t);else {const t={id:Date.now(),...J,...e},s=this._createNewSnackbar(t);this.shadowRoot.prepend(s),this.dispatchEvent(new CustomEvent("ackbar-snackbar-bar-added",{bubbles:!0,composed:!0,detail:{snackbarID:s.id}}));}}_handleSnackbarRemove(t){this.shadowRoot.getElementById(t.detail.snackbarID).remove(),this.dispatchEvent(new CustomEvent("ackbar-snackbar-bar-removed",{bubbles:!0,composed:!0,detail:{snackbarID:t.detail.snackbarID}}));}_createNewSnackbar(t){const e=document.createElement("ackbar-bar");return ["animationDuration","animationName","buttonCallback","buttonText","duration","message","type","hasFadedIn"].forEach((s=>{e[s]=t[s];})),["id","size","variant"].forEach((s=>{e.setAttribute(s,t[s]);})),e}});
//# sourceMappingURL=ackbar-snackbar-bundle.js.map
