/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4217:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={185:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UseOnigurumaFindOptions=t.DebugFlags=void 0,t.DebugFlags={InDebugMode:"undefined"!=typeof process&&!!process.env.VSCODE_TEXTMATE_DEBUG},t.UseOnigurumaFindOptions=!1},151:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.applyStateStackDiff=t.diffStateStacksRefEq=void 0;const s=n(752);t.diffStateStacksRefEq=function(e,t){let n=0;const s=[];let r=e,i=t;for(;r!==i;)r&&(!i||r.depth>=i.depth)?(n++,r=r.parent):(s.push(i.toStateStackFrame()),i=i.parent);return{pops:n,newFrames:s.reverse()}},t.applyStateStackDiff=function(e,t){let n=e;for(let e=0;e<t.pops;e++)n=n.parent;for(const e of t.newFrames)n=s.StateStackImpl.pushFrame(n,e);return n}},490:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.toOptionalTokenType=t.EncodedTokenAttributes=void 0,(n=t.EncodedTokenAttributes||(t.EncodedTokenAttributes={})).toBinaryStr=function(e){return e.toString(2).padStart(32,"0")},n.print=function(e){const t=n.getLanguageId(e),s=n.getTokenType(e),r=n.getFontStyle(e),i=n.getForeground(e),o=n.getBackground(e);console.log({languageId:t,tokenType:s,fontStyle:r,foreground:i,background:o})},n.getLanguageId=function(e){return(255&e)>>>0},n.getTokenType=function(e){return(768&e)>>>8},n.containsBalancedBrackets=function(e){return!!(1024&e)},n.getFontStyle=function(e){return(30720&e)>>>11},n.getForeground=function(e){return(16744448&e)>>>15},n.getBackground=function(e){return(4278190080&e)>>>24},n.set=function(e,t,s,r,i,o,a){let c=n.getLanguageId(e),l=n.getTokenType(e),u=n.containsBalancedBrackets(e)?1:0,h=n.getFontStyle(e),p=n.getForeground(e),d=n.getBackground(e);return 0!==t&&(c=t),8!==s&&(l=s),null!==r&&(u=r?1:0),-1!==i&&(h=i),0!==o&&(p=o),0!==a&&(d=a),(c|l<<8|u<<10|h<<11|p<<15|d<<24)>>>0},t.toOptionalTokenType=function(e){return e}},214:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BasicScopeAttributesProvider=t.BasicScopeAttributes=void 0;const s=n(807);class r{constructor(e,t){this.languageId=e,this.tokenType=t}}t.BasicScopeAttributes=r;class i{constructor(e,t){this._getBasicScopeAttributes=new s.CachedFn((e=>{const t=this._scopeToLanguage(e),n=this._toStandardTokenType(e);return new r(t,n)})),this._defaultAttributes=new r(e,8),this._embeddedLanguagesMatcher=new o(Object.entries(t||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return null===e?i._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){const t=e.match(i.STANDARD_TOKEN_TYPE_REGEXP);if(!t)return 8;switch(t[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}}t.BasicScopeAttributesProvider=i,i._NULL_SCOPE_METADATA=new r(0,0),i.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/;class o{constructor(e){if(0===e.length)this.values=null,this.scopesRegExp=null;else{this.values=new Map(e);const t=e.map((([e,t])=>s.escapeRegExpCharacters(e)));t.sort(),t.reverse(),this.scopesRegExp=new RegExp(`^((${t.join(")|(")}))($|\\.)`,"")}}match(e){if(!this.scopesRegExp)return;const t=e.match(this.scopesRegExp);return t?this.values.get(t[1]):void 0}}},929:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LineTokens=t.BalancedBracketSelectors=t.StateStackImpl=t.AttributedScopeStack=t.Grammar=t.createGrammar=void 0;const s=n(185),r=n(490),i=n(916),o=n(810),a=n(666),c=n(63),l=n(807),u=n(214),h=n(398);function p(e,t,n,s,r){const o=i.createMatchers(t,d),c=a.RuleFactory.getCompiledRuleId(n,s,r.repository);for(const n of o)e.push({debugSelector:t,matcher:n.matcher,ruleId:c,grammar:r,priority:n.priority})}function d(e,t){if(t.length<e.length)return!1;let n=0;return e.every((e=>{for(let s=n;s<t.length;s++)if(f(t[s],e))return n=s+1,!0;return!1}))}function f(e,t){if(!e)return!1;if(e===t)return!0;const n=t.length;return e.length>n&&e.substr(0,n)===t&&"."===e[n]}t.createGrammar=function(e,t,n,s,r,i,o,a){return new m(e,t,n,s,r,i,o,a)};class m{constructor(e,t,n,s,r,o,a,c){if(this._rootScopeName=e,this.balancedBracketSelectors=o,this._onigLib=c,this._basicScopeAttributesProvider=new u.BasicScopeAttributesProvider(n,s),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=a,this._grammar=g(t,null),this._injections=null,this._tokenTypeMatchers=[],r)for(const e of Object.keys(r)){const t=i.createMatchers(e,d);for(const n of t)this._tokenTypeMatchers.push({matcher:n.matcher,type:r[e]})}}get themeProvider(){return this._grammarRepository}dispose(){for(const e of this._ruleId2desc)e&&e.dispose()}createOnigScanner(e){return this._onigLib.createOnigScanner(e)}createOnigString(e){return this._onigLib.createOnigString(e)}getMetadataForScope(e){return this._basicScopeAttributesProvider.getBasicScopeAttributes(e)}_collectInjections(){const e=[],t=this._rootScopeName,n=(e=>e===this._rootScopeName?this._grammar:this.getExternalGrammar(e))(t);if(n){const s=n.injections;if(s)for(let t in s)p(e,t,s[t],this,n);const r=this._grammarRepository.injections(t);r&&r.forEach((t=>{const n=this.getExternalGrammar(t);if(n){const t=n.injectionSelector;t&&p(e,t,n,this,n)}}))}return e.sort(((e,t)=>e.priority-t.priority)),e}getInjections(){if(null===this._injections&&(this._injections=this._collectInjections(),s.DebugFlags.InDebugMode&&this._injections.length>0)){console.log(`Grammar ${this._rootScopeName} contains the following injections:`);for(const e of this._injections)console.log(`  - ${e.debugSelector}`)}return this._injections}registerRule(e){const t=++this._lastRuleId,n=e(a.ruleIdFromNumber(t));return this._ruleId2desc[t]=n,n}getRule(e){return this._ruleId2desc[a.ruleIdToNumber(e)]}getExternalGrammar(e,t){if(this._includedGrammars[e])return this._includedGrammars[e];if(this._grammarRepository){const n=this._grammarRepository.lookup(e);if(n)return this._includedGrammars[e]=g(n,t&&t.$base),this._includedGrammars[e]}}tokenizeLine(e,t,n=0){const s=this._tokenize(e,t,!1,n);return{tokens:s.lineTokens.getResult(s.ruleStack,s.lineLength),ruleStack:s.ruleStack,stoppedEarly:s.stoppedEarly}}tokenizeLine2(e,t,n=0){const s=this._tokenize(e,t,!0,n);return{tokens:s.lineTokens.getBinaryResult(s.ruleStack,s.lineLength),ruleStack:s.ruleStack,stoppedEarly:s.stoppedEarly}}_tokenize(e,t,n,s){let i;if(-1===this._rootId&&(this._rootId=a.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository),this.getInjections()),t&&t!==b.NULL)i=!1,t.reset();else{i=!0;const e=this._basicScopeAttributesProvider.getDefaultAttributes(),n=this.themeProvider.getDefaults(),s=r.EncodedTokenAttributes.set(0,e.languageId,e.tokenType,null,n.fontStyle,n.foregroundId,n.backgroundId),o=this.getRule(this._rootId).getName(null,null);let a;a=o?_.createRootAndLookUpScopeName(o,s,this):_.createRoot("unknown",s),t=new b(null,this._rootId,-1,-1,!1,null,a,a)}e+="\n";const c=this.createOnigString(e),l=c.content.length,u=new y(n,e,this._tokenTypeMatchers,this.balancedBracketSelectors),p=h._tokenizeString(this,c,i,0,t,u,!0,s);return o.disposeOnigString(c),{lineLength:l,lineTokens:u,ruleStack:p.stack,stoppedEarly:p.stoppedEarly}}}function g(e,t){return(e=l.clone(e)).repository=e.repository||{},e.repository.$self={$vscodeTextmateLocation:e.$vscodeTextmateLocation,patterns:e.patterns,name:e.scopeName},e.repository.$base=t||e.repository.$self,e}t.Grammar=m;class _{constructor(e,t,n){this.parent=e,this.scopePath=t,this.tokenAttributes=n}static fromExtension(e,t){let n=e,s=e?.scopePath??null;for(const e of t)s=c.ScopeStack.push(s,e.scopeNames),n=new _(n,s,e.encodedTokenAttributes);return n}static createRoot(e,t){return new _(null,new c.ScopeStack(null,e),t)}static createRootAndLookUpScopeName(e,t,n){const s=n.getMetadataForScope(e),r=new c.ScopeStack(null,e),i=n.themeProvider.themeMatch(r),o=_.mergeAttributes(t,s,i);return new _(null,r,o)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return _.equals(this,e)}static equals(e,t){for(;;){if(e===t)return!0;if(!e&&!t)return!0;if(!e||!t)return!1;if(e.scopeName!==t.scopeName||e.tokenAttributes!==t.tokenAttributes)return!1;e=e.parent,t=t.parent}}static mergeAttributes(e,t,n){let s=-1,i=0,o=0;return null!==n&&(s=n.fontStyle,i=n.foregroundId,o=n.backgroundId),r.EncodedTokenAttributes.set(e,t.languageId,t.tokenType,null,s,i,o)}pushAttributed(e,t){if(null===e)return this;if(-1===e.indexOf(" "))return _._pushAttributed(this,e,t);const n=e.split(/ /g);let s=this;for(const e of n)s=_._pushAttributed(s,e,t);return s}static _pushAttributed(e,t,n){const s=n.getMetadataForScope(t),r=e.scopePath.push(t),i=n.themeProvider.themeMatch(r),o=_.mergeAttributes(e.tokenAttributes,s,i);return new _(e,r,o)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){const t=[];let n=this;for(;n&&n!==e;)t.push({encodedTokenAttributes:n.tokenAttributes,scopeNames:n.scopePath.getExtensionIfDefined(n.parent?.scopePath??null)}),n=n.parent;return n===e?t.reverse():void 0}}t.AttributedScopeStack=_;class b{constructor(e,t,n,s,r,i,o,a){this.parent=e,this.ruleId=t,this.beginRuleCapturedEOL=r,this.endRule=i,this.nameScopesList=o,this.contentNameScopesList=a,this._stackElementBrand=void 0,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=n,this._anchorPos=s}equals(e){return null!==e&&b._equals(this,e)}static _equals(e,t){return e===t||!!this._structuralEquals(e,t)&&_.equals(e.contentNameScopesList,t.contentNameScopesList)}static _structuralEquals(e,t){for(;;){if(e===t)return!0;if(!e&&!t)return!0;if(!e||!t)return!1;if(e.depth!==t.depth||e.ruleId!==t.ruleId||e.endRule!==t.endRule)return!1;e=e.parent,t=t.parent}}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){b._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,t,n,s,r,i,o){return new b(this,e,t,n,s,r,i,o)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,t){return this.parent&&(t=this.parent._writeString(e,t)),e[t++]=`(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`,t}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new b(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let t=this;for(;t&&t._enterPos===e._enterPos;){if(t.ruleId===e.ruleId)return!0;t=t.parent}return!1}toStateStackFrame(){return{ruleId:a.ruleIdToNumber(this.ruleId),beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList??null)??[],contentNameScopesList:this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList)??[]}}static pushFrame(e,t){const n=_.fromExtension(e?.nameScopesList??null,t.nameScopesList);return new b(e,a.ruleIdFromNumber(t.ruleId),t.enterPos??-1,t.anchorPos??-1,t.beginRuleCapturedEOL,t.endRule,n,_.fromExtension(n,t.contentNameScopesList))}}t.StateStackImpl=b,b.NULL=new b(null,0,0,0,!1,null,null,null),t.BalancedBracketSelectors=class{constructor(e,t){this.allowAny=!1,this.balancedBracketScopes=e.flatMap((e=>"*"===e?(this.allowAny=!0,[]):i.createMatchers(e,d).map((e=>e.matcher)))),this.unbalancedBracketScopes=t.flatMap((e=>i.createMatchers(e,d).map((e=>e.matcher))))}get matchesAlways(){return this.allowAny&&0===this.unbalancedBracketScopes.length}get matchesNever(){return 0===this.balancedBracketScopes.length&&!this.allowAny}match(e){for(const t of this.unbalancedBracketScopes)if(t(e))return!1;for(const t of this.balancedBracketScopes)if(t(e))return!0;return this.allowAny}};class y{constructor(e,t,n,r){this.balancedBracketSelectors=r,this._emitBinaryTokens=e,this._tokenTypeOverrides=n,s.DebugFlags.InDebugMode?this._lineText=t:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(e,t){this.produceFromScopes(e.contentNameScopesList,t)}produceFromScopes(e,t){if(this._lastTokenEndIndex>=t)return;if(this._emitBinaryTokens){let n=e?.tokenAttributes??0,i=!1;if(this.balancedBracketSelectors?.matchesAlways&&(i=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const t=e?.getScopeNames()??[];for(const e of this._tokenTypeOverrides)e.matcher(t)&&(n=r.EncodedTokenAttributes.set(n,0,r.toOptionalTokenType(e.type),null,-1,0,0));this.balancedBracketSelectors&&(i=this.balancedBracketSelectors.match(t))}if(i&&(n=r.EncodedTokenAttributes.set(n,0,8,i,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===n)return void(this._lastTokenEndIndex=t);if(s.DebugFlags.InDebugMode){const n=e?.getScopeNames()??[];console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(let e=0;e<n.length;e++)console.log("      * "+n[e])}return this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(n),void(this._lastTokenEndIndex=t)}const n=e?.getScopeNames()??[];if(s.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(let e=0;e<n.length;e++)console.log("      * "+n[e])}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:t,scopes:n}),this._lastTokenEndIndex=t}getResult(e,t){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===t-1&&this._tokens.pop(),0===this._tokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(e,t){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===t-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),0===this._binaryTokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._binaryTokens[this._binaryTokens.length-2]=0);const n=new Uint32Array(this._binaryTokens.length);for(let e=0,t=this._binaryTokens.length;e<t;e++)n[e]=this._binaryTokens[e];return n}}t.LineTokens=y},784:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseInclude=t.TopLevelRepositoryReference=t.TopLevelReference=t.RelativeReference=t.SelfReference=t.BaseReference=t.ScopeDependencyProcessor=t.ExternalReferenceCollector=t.TopLevelRepositoryRuleReference=t.TopLevelRuleReference=void 0;const s=n(807);class r{constructor(e){this.scopeName=e}toKey(){return this.scopeName}}t.TopLevelRuleReference=r;class i{constructor(e,t){this.scopeName=e,this.ruleName=t}toKey(){return`${this.scopeName}#${this.ruleName}`}}t.TopLevelRepositoryRuleReference=i;class o{constructor(){this._references=[],this._seenReferenceKeys=new Set,this.visitedRule=new Set}get references(){return this._references}add(e){const t=e.toKey();this._seenReferenceKeys.has(t)||(this._seenReferenceKeys.add(t),this._references.push(e))}}function a(e,t,n,s){const i=n.lookup(e.scopeName);if(!i){if(e.scopeName===t)throw new Error(`No grammar provided for <${t}>`);return}const o=n.lookup(t);e instanceof r?l({baseGrammar:o,selfGrammar:i},s):c(e.ruleName,{baseGrammar:o,selfGrammar:i,repository:i.repository},s);const a=n.injections(e.scopeName);if(a)for(const e of a)s.add(new r(e))}function c(e,t,n){t.repository&&t.repository[e]&&u([t.repository[e]],t,n)}function l(e,t){e.selfGrammar.patterns&&Array.isArray(e.selfGrammar.patterns)&&u(e.selfGrammar.patterns,{...e,repository:e.selfGrammar.repository},t),e.selfGrammar.injections&&u(Object.values(e.selfGrammar.injections),{...e,repository:e.selfGrammar.repository},t)}function u(e,t,n){for(const o of e){if(n.visitedRule.has(o))continue;n.visitedRule.add(o);const e=o.repository?s.mergeObjects({},t.repository,o.repository):t.repository;Array.isArray(o.patterns)&&u(o.patterns,{...t,repository:e},n);const a=o.include;if(!a)continue;const h=g(a);switch(h.kind){case 0:l({...t,selfGrammar:t.baseGrammar},n);break;case 1:l(t,n);break;case 2:c(h.ruleName,{...t,repository:e},n);break;case 3:case 4:const s=h.scopeName===t.selfGrammar.scopeName?t.selfGrammar:h.scopeName===t.baseGrammar.scopeName?t.baseGrammar:void 0;if(s){const r={baseGrammar:t.baseGrammar,selfGrammar:s,repository:e};4===h.kind?c(h.ruleName,r,n):l(r,n)}else 4===h.kind?n.add(new i(h.scopeName,h.ruleName)):n.add(new r(h.scopeName))}}}t.ExternalReferenceCollector=o,t.ScopeDependencyProcessor=class{constructor(e,t){this.repo=e,this.initialScopeName=t,this.seenFullScopeRequests=new Set,this.seenPartialScopeRequests=new Set,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new r(this.initialScopeName)]}processQueue(){const e=this.Q;this.Q=[];const t=new o;for(const n of e)a(n,this.initialScopeName,this.repo,t);for(const e of t.references)if(e instanceof r){if(this.seenFullScopeRequests.has(e.scopeName))continue;this.seenFullScopeRequests.add(e.scopeName),this.Q.push(e)}else{if(this.seenFullScopeRequests.has(e.scopeName))continue;if(this.seenPartialScopeRequests.has(e.toKey()))continue;this.seenPartialScopeRequests.add(e.toKey()),this.Q.push(e)}}};class h{constructor(){this.kind=0}}t.BaseReference=h;class p{constructor(){this.kind=1}}t.SelfReference=p;class d{constructor(e){this.ruleName=e,this.kind=2}}t.RelativeReference=d;class f{constructor(e){this.scopeName=e,this.kind=3}}t.TopLevelReference=f;class m{constructor(e,t){this.scopeName=e,this.ruleName=t,this.kind=4}}function g(e){if("$base"===e)return new h;if("$self"===e)return new p;const t=e.indexOf("#");if(-1===t)return new f(e);if(0===t)return new d(e.substring(1));{const n=e.substring(0,t),s=e.substring(t+1);return new m(n,s)}}t.TopLevelRepositoryReference=m,t.parseInclude=g},752:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(929),t)},398:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStackElement=t._tokenizeString=void 0;const s=n(185),r=n(810),i=n(666),o=n(807);class a{constructor(e,t){this.stack=e,this.stoppedEarly=t}}function c(e,t,n,r,c,h,d,f){const m=t.content.length;let g=!1,_=-1;if(d){const o=function(e,t,n,r,o,a){let c=o.beginRuleCapturedEOL?0:-1;const l=[];for(let t=o;t;t=t.pop()){const n=t.getRule(e);n instanceof i.BeginWhileRule&&l.push({rule:n,stack:t})}for(let h=l.pop();h;h=l.pop()){const{ruleScanner:l,findOptions:d}=u(h.rule,e,h.stack.endRule,n,r===c),f=l.findNextMatchSync(t,r,d);if(s.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(l.toString())),!f){s.DebugFlags.InDebugMode&&console.log("  popping "+h.rule.debugName+" - "+h.rule.debugWhileRegExp),o=h.stack.pop();break}if(f.ruleId!==i.whileRuleId){o=h.stack.pop();break}f.captureIndices&&f.captureIndices.length&&(a.produce(h.stack,f.captureIndices[0].start),p(e,t,n,h.stack,a,h.rule.whileCaptures,f.captureIndices),a.produce(h.stack,f.captureIndices[0].end),c=f.captureIndices[0].end,f.captureIndices[0].end>r&&(r=f.captureIndices[0].end,n=!1))}return{stack:o,linePos:r,anchorPosition:c,isFirstLine:n}}(e,t,n,r,c,h);c=o.stack,r=o.linePos,n=o.isFirstLine,_=o.anchorPosition}const b=Date.now();for(;!g;){if(0!==f&&Date.now()-b>f)return new a(c,!0);y()}return new a(c,!1);function y(){s.DebugFlags.InDebugMode&&(console.log(""),console.log(`@@scanNext ${r}: |${t.content.substr(r).replace(/\n$/,"\\n")}|`));const a=function(e,t,n,r,i,a){const c=function(e,t,n,r,i,a){const c=i.getRule(e),{ruleScanner:u,findOptions:h}=l(c,e,i.endRule,n,r===a);let p=0;s.DebugFlags.InDebugMode&&(p=o.performanceNow());const d=u.findNextMatchSync(t,r,h);if(s.DebugFlags.InDebugMode){const e=o.performanceNow()-p;e>5&&console.warn(`Rule ${c.debugName} (${c.id}) matching took ${e} against '${t}'`),console.log(`  scanning for (linePos: ${r}, anchorPosition: ${a})`),console.log(u.toString()),d&&console.log(`matched rule id: ${d.ruleId} from ${d.captureIndices[0].start} to ${d.captureIndices[0].end}`)}return d?{captureIndices:d.captureIndices,matchedRuleId:d.ruleId}:null}(e,t,n,r,i,a),u=e.getInjections();if(0===u.length)return c;const h=function(e,t,n,r,i,o,a){let c,u=Number.MAX_VALUE,h=null,p=0;const d=o.contentNameScopesList.getScopeNames();for(let o=0,f=e.length;o<f;o++){const f=e[o];if(!f.matcher(d))continue;const m=t.getRule(f.ruleId),{ruleScanner:g,findOptions:_}=l(m,t,null,r,i===a),b=g.findNextMatchSync(n,i,_);if(!b)continue;s.DebugFlags.InDebugMode&&(console.log(`  matched injection: ${f.debugSelector}`),console.log(g.toString()));const y=b.captureIndices[0].start;if(!(y>=u)&&(u=y,h=b.captureIndices,c=b.ruleId,p=f.priority,u===i))break}return h?{priorityMatch:-1===p,captureIndices:h,matchedRuleId:c}:null}(u,e,t,n,r,i,a);if(!h)return c;if(!c)return h;const p=c.captureIndices[0].start,d=h.captureIndices[0].start;return d<p||h.priorityMatch&&d===p?h:c}(e,t,n,r,c,_);if(!a)return s.DebugFlags.InDebugMode&&console.log("  no more matches."),h.produce(c,m),void(g=!0);const u=a.captureIndices,d=a.matchedRuleId,f=!!(u&&u.length>0)&&u[0].end>r;if(d===i.endRuleId){const i=c.getRule(e);s.DebugFlags.InDebugMode&&console.log("  popping "+i.debugName+" - "+i.debugEndRegExp),h.produce(c,u[0].start),c=c.withContentNameScopesList(c.nameScopesList),p(e,t,n,c,h,i.endCaptures,u),h.produce(c,u[0].end);const o=c;if(c=c.parent,_=o.getAnchorPos(),!f&&o.getEnterPos()===r)return s.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),c=o,h.produce(c,m),void(g=!0)}else{const o=e.getRule(d);h.produce(c,u[0].start);const a=c,l=o.getName(t.content,u),b=c.contentNameScopesList.pushAttributed(l,e);if(c=c.push(d,r,_,u[0].end===m,null,b,b),o instanceof i.BeginEndRule){const r=o;s.DebugFlags.InDebugMode&&console.log("  pushing "+r.debugName+" - "+r.debugBeginRegExp),p(e,t,n,c,h,r.beginCaptures,u),h.produce(c,u[0].end),_=u[0].end;const i=r.getContentName(t.content,u),l=b.pushAttributed(i,e);if(c=c.withContentNameScopesList(l),r.endHasBackReferences&&(c=c.withEndRule(r.getEndWithResolvedBackReferences(t.content,u))),!f&&a.hasSameRuleAs(c))return s.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),c=c.pop(),h.produce(c,m),void(g=!0)}else if(o instanceof i.BeginWhileRule){const r=o;s.DebugFlags.InDebugMode&&console.log("  pushing "+r.debugName),p(e,t,n,c,h,r.beginCaptures,u),h.produce(c,u[0].end),_=u[0].end;const i=r.getContentName(t.content,u),l=b.pushAttributed(i,e);if(c=c.withContentNameScopesList(l),r.whileHasBackReferences&&(c=c.withEndRule(r.getWhileWithResolvedBackReferences(t.content,u))),!f&&a.hasSameRuleAs(c))return s.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),c=c.pop(),h.produce(c,m),void(g=!0)}else{const r=o;if(s.DebugFlags.InDebugMode&&console.log("  matched "+r.debugName+" - "+r.debugMatchRegExp),p(e,t,n,c,h,r.captures,u),h.produce(c,u[0].end),c=c.pop(),!f)return s.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),c=c.safePop(),h.produce(c,m),void(g=!0)}}u[0].end>r&&(r=u[0].end,n=!1)}}function l(e,t,n,r,i){return s.UseOnigurumaFindOptions?{ruleScanner:e.compile(t,n),findOptions:h(r,i)}:{ruleScanner:e.compileAG(t,n,r,i),findOptions:0}}function u(e,t,n,r,i){return s.UseOnigurumaFindOptions?{ruleScanner:e.compileWhile(t,n),findOptions:h(r,i)}:{ruleScanner:e.compileWhileAG(t,n,r,i),findOptions:0}}function h(e,t){let n=0;return e||(n|=1),t||(n|=4),n}function p(e,t,n,s,i,o,a){if(0===o.length)return;const l=t.content,u=Math.min(o.length,a.length),h=[],p=a[0].end;for(let t=0;t<u;t++){const u=o[t];if(null===u)continue;const f=a[t];if(0===f.length)continue;if(f.start>p)break;for(;h.length>0&&h[h.length-1].endPos<=f.start;)i.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop();if(h.length>0?i.produceFromScopes(h[h.length-1].scopes,f.start):i.produce(s,f.start),u.retokenizeCapturedWithRuleId){const t=u.getName(l,a),o=s.contentNameScopesList.pushAttributed(t,e),h=u.getContentName(l,a),p=o.pushAttributed(h,e),d=s.push(u.retokenizeCapturedWithRuleId,f.start,-1,!1,null,o,p),m=e.createOnigString(l.substring(0,f.end));c(e,m,n&&0===f.start,f.start,d,i,!1,0),r.disposeOnigString(m);continue}const m=u.getName(l,a);if(null!==m){const t=(h.length>0?h[h.length-1].scopes:s.contentNameScopesList).pushAttributed(m,e);h.push(new d(t,f.end))}}for(;h.length>0;)i.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop()}t._tokenizeString=c;class d{constructor(e,t){this.scopes=e,this.endPos=t}}t.LocalStackElement=d},726:(e,t)=>{function n(e,t){throw new Error("Near offset "+e.pos+": "+t+" ~~~"+e.source.substr(e.pos,50)+"~~~")}Object.defineProperty(t,"__esModule",{value:!0}),t.parseJSON=void 0,t.parseJSON=function(e,t,o){let a=new s(e),c=new r,l=0,u=null,h=[],p=[];function d(){h.push(l),p.push(u)}function f(){l=h.pop(),u=p.pop()}function m(e){n(a,e)}for(;i(a,c);){if(0===l){if(null!==u&&m("too many constructs in root"),3===c.type){u={},o&&(u.$vscodeTextmateLocation=c.toLocation(t)),d(),l=1;continue}if(2===c.type){u=[],d(),l=4;continue}m("unexpected token in root")}if(2===l){if(5===c.type){f();continue}if(7===c.type){l=3;continue}m("expected , or }")}if(1===l||3===l){if(1===l&&5===c.type){f();continue}if(1===c.type){let e=c.value;if(i(a,c)&&6===c.type||m("expected colon"),i(a,c)||m("expected value"),l=2,1===c.type){u[e]=c.value;continue}if(8===c.type){u[e]=null;continue}if(9===c.type){u[e]=!0;continue}if(10===c.type){u[e]=!1;continue}if(11===c.type){u[e]=parseFloat(c.value);continue}if(2===c.type){let t=[];u[e]=t,d(),l=4,u=t;continue}if(3===c.type){let n={};o&&(n.$vscodeTextmateLocation=c.toLocation(t)),u[e]=n,d(),l=1,u=n;continue}}m("unexpected token in dict")}if(5===l){if(4===c.type){f();continue}if(7===c.type){l=6;continue}m("expected , or ]")}if(4===l||6===l){if(4===l&&4===c.type){f();continue}if(l=5,1===c.type){u.push(c.value);continue}if(8===c.type){u.push(null);continue}if(9===c.type){u.push(!0);continue}if(10===c.type){u.push(!1);continue}if(11===c.type){u.push(parseFloat(c.value));continue}if(2===c.type){let e=[];u.push(e),d(),l=4,u=e;continue}if(3===c.type){let e={};o&&(e.$vscodeTextmateLocation=c.toLocation(t)),u.push(e),d(),l=1,u=e;continue}m("unexpected token in array")}m("unknown state")}return 0!==p.length&&m("unclosed constructs"),u};class s{constructor(e){this.source=e,this.pos=0,this.len=e.length,this.line=1,this.char=0}}class r{constructor(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1}toLocation(e){return{filename:e,line:this.line,char:this.char}}}function i(e,t){t.value=null,t.type=0,t.offset=-1,t.len=-1,t.line=-1,t.char=-1;let s,r=e.source,i=e.pos,o=e.len,a=e.line,c=e.char;for(;;){if(i>=o)return!1;if(s=r.charCodeAt(i),32!==s&&9!==s&&13!==s){if(10!==s)break;i++,a++,c=0}else i++,c++}if(t.offset=i,t.line=a,t.char=c,34===s){for(t.type=1,i++,c++;;){if(i>=o)return!1;if(s=r.charCodeAt(i),i++,c++,92!==s){if(34===s)break}else i++,c++}t.value=r.substring(t.offset+1,i-1).replace(/\\u([0-9A-Fa-f]{4})/g,((e,t)=>String.fromCodePoint(parseInt(t,16)))).replace(/\\(.)/g,((t,s)=>{switch(s){case'"':return'"';case"\\":return"\\";case"/":return"/";case"b":return"\b";case"f":return"\f";case"n":return"\n";case"r":return"\r";case"t":return"\t";default:n(e,"invalid escape sequence")}throw new Error("unreachable")}))}else if(91===s)t.type=2,i++,c++;else if(123===s)t.type=3,i++,c++;else if(93===s)t.type=4,i++,c++;else if(125===s)t.type=5,i++,c++;else if(58===s)t.type=6,i++,c++;else if(44===s)t.type=7,i++,c++;else if(110===s){if(t.type=8,i++,c++,s=r.charCodeAt(i),117!==s)return!1;if(i++,c++,s=r.charCodeAt(i),108!==s)return!1;if(i++,c++,s=r.charCodeAt(i),108!==s)return!1;i++,c++}else if(116===s){if(t.type=9,i++,c++,s=r.charCodeAt(i),114!==s)return!1;if(i++,c++,s=r.charCodeAt(i),117!==s)return!1;if(i++,c++,s=r.charCodeAt(i),101!==s)return!1;i++,c++}else if(102===s){if(t.type=10,i++,c++,s=r.charCodeAt(i),97!==s)return!1;if(i++,c++,s=r.charCodeAt(i),108!==s)return!1;if(i++,c++,s=r.charCodeAt(i),115!==s)return!1;if(i++,c++,s=r.charCodeAt(i),101!==s)return!1;i++,c++}else for(t.type=11;;){if(i>=o)return!1;if(s=r.charCodeAt(i),!(46===s||s>=48&&s<=57||101===s||69===s||45===s||43===s))break;i++,c++}return t.len=i-t.offset,null===t.value&&(t.value=r.substr(t.offset,t.len)),e.pos=i,e.line=a,e.char=c,!0}},625:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.applyStateStackDiff=t.diffStateStacksRefEq=t.parseRawGrammar=t.INITIAL=t.Registry=void 0;const i=n(752),o=n(150),a=n(583),c=n(63),l=n(784),u=n(151);Object.defineProperty(t,"applyStateStackDiff",{enumerable:!0,get:function(){return u.applyStateStackDiff}}),Object.defineProperty(t,"diffStateStacksRefEq",{enumerable:!0,get:function(){return u.diffStateStacksRefEq}}),r(n(810),t),t.Registry=class{constructor(e){this._options=e,this._syncRegistry=new a.SyncRegistry(c.Theme.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(e,t){this._syncRegistry.setTheme(c.Theme.createFromRawTheme(e,t))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(e,t,n){return this.loadGrammarWithConfiguration(e,t,{embeddedLanguages:n})}loadGrammarWithConfiguration(e,t,n){return this._loadGrammar(e,t,n.embeddedLanguages,n.tokenTypes,new i.BalancedBracketSelectors(n.balancedBracketSelectors||[],n.unbalancedBracketSelectors||[]))}loadGrammar(e){return this._loadGrammar(e,0,null,null,null)}async _loadGrammar(e,t,n,s,r){const i=new l.ScopeDependencyProcessor(this._syncRegistry,e);for(;i.Q.length>0;)await Promise.all(i.Q.map((e=>this._loadSingleGrammar(e.scopeName)))),i.processQueue();return this._grammarForScopeName(e,t,n,s,r)}async _loadSingleGrammar(e){return this._ensureGrammarCache.has(e)||this._ensureGrammarCache.set(e,this._doLoadSingleGrammar(e)),this._ensureGrammarCache.get(e)}async _doLoadSingleGrammar(e){const t=await this._options.loadGrammar(e);if(t){const n="function"==typeof this._options.getInjections?this._options.getInjections(e):void 0;this._syncRegistry.addGrammar(t,n)}}async addGrammar(e,t=[],n=0,s=null){return this._syncRegistry.addGrammar(e,t),await this._grammarForScopeName(e.scopeName,n,s)}_grammarForScopeName(e,t=0,n=null,s=null,r=null){return this._syncRegistry.grammarForScopeName(e,t,n,s,r)}},t.INITIAL=i.StateStackImpl.NULL,t.parseRawGrammar=o.parseRawGrammar},916:(e,t)=>{function n(e){return!!e&&!!e.match(/[\w\.:]+/)}Object.defineProperty(t,"__esModule",{value:!0}),t.createMatchers=void 0,t.createMatchers=function(e,t){const s=[],r=function(e){let t=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,n=t.exec(e);return{next:()=>{if(!n)return null;const s=n[0];return n=t.exec(e),s}}}(e);let i=r.next();for(;null!==i;){let e=0;if(2===i.length&&":"===i.charAt(1)){switch(i.charAt(0)){case"R":e=1;break;case"L":e=-1;break;default:console.log(`Unknown priority ${i} in scope selector`)}i=r.next()}let t=a();if(s.push({matcher:t,priority:e}),","!==i)break;i=r.next()}return s;function o(){if("-"===i){i=r.next();const e=o();return t=>!!e&&!e(t)}if("("===i){i=r.next();const e=function(){const e=[];let t=a();for(;t&&(e.push(t),"|"===i||","===i);){do{i=r.next()}while("|"===i||","===i);t=a()}return t=>e.some((e=>e(t)))}();return")"===i&&(i=r.next()),e}if(n(i)){const e=[];do{e.push(i),i=r.next()}while(n(i));return n=>t(e,n)}return null}function a(){const e=[];let t=o();for(;t;)e.push(t),t=o();return t=>e.every((e=>e(t)))}}},810:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.disposeOnigString=void 0,t.disposeOnigString=function(e){"function"==typeof e.dispose&&e.dispose()}},150:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseRawGrammar=void 0;const s=n(578),r=n(185),i=n(726);t.parseRawGrammar=function(e,t=null){return null!==t&&/\.json$/.test(t)?(n=e,o=t,r.DebugFlags.InDebugMode?i.parseJSON(n,o,!0):JSON.parse(n)):function(e,t){return r.DebugFlags.InDebugMode?s.parseWithLocation(e,t,"$vscodeTextmateLocation"):s.parsePLIST(e)}(e,t);// removed by dead control flow
{ var n, o; }}},578:(e,t)=>{function n(e,t,n){const s=e.length;let r=0,i=1,o=0;function a(t){if(null===n)r+=t;else for(;t>0;)10===e.charCodeAt(r)?(r++,i++,o=0):(r++,o++),t--}function c(e){null===n?r=e:a(e-r)}function l(){for(;r<s;){let t=e.charCodeAt(r);if(32!==t&&9!==t&&13!==t&&10!==t)break;a(1)}}function u(t){return e.substr(r,t.length)===t&&(a(t.length),!0)}function h(t){let n=e.indexOf(t,r);c(-1!==n?n+t.length:s)}function p(t){let n=e.indexOf(t,r);if(-1!==n){let s=e.substring(r,n);return c(n+t.length),s}{let t=e.substr(r);return c(s),t}}s>0&&65279===e.charCodeAt(0)&&(r=1);let d=0,f=null,m=[],g=[],_=null;function b(e,t){m.push(d),g.push(f),d=e,f=t}function y(){if(0===m.length)return S("illegal state stack");d=m.pop(),f=g.pop()}function S(t){throw new Error("Near offset "+r+": "+t+" ~~~"+e.substr(r,50)+"~~~")}const k=function(){if(null===_)return S("missing <key>");let e={};null!==n&&(e[n]={filename:t,line:i,char:o}),f[_]=e,_=null,b(1,e)},C=function(){if(null===_)return S("missing <key>");let e=[];f[_]=e,_=null,b(2,e)},R=function(){let e={};null!==n&&(e[n]={filename:t,line:i,char:o}),f.push(e),b(1,e)},A=function(){let e=[];f.push(e),b(2,e)};function w(){if(1!==d)return S("unexpected </dict>");y()}function P(){return 1===d||2!==d?S("unexpected </array>"):void y()}function I(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function v(e){if(isNaN(e))return S("cannot parse float");if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function N(e){if(isNaN(e))return S("cannot parse integer");if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function x(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function T(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function G(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null}else 2===d?f.push(e):f=e}function E(){let e=p(">"),t=!1;return 47===e.charCodeAt(e.length-1)&&(t=!0,e=e.substring(0,e.length-1)),{name:e.trim(),isClosed:t}}function L(e){if(e.isClosed)return"";let t=p("</");return h(">"),t.replace(/&#([0-9]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,10))})).replace(/&#x([0-9a-f]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,(function(e){switch(e){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"';case"&apos;":return"'"}return e}))}for(;r<s&&(l(),!(r>=s));){const c=e.charCodeAt(r);if(a(1),60!==c)return S("expected <");if(r>=s)return S("unexpected end of input");const p=e.charCodeAt(r);if(63===p){a(1),h("?>");continue}if(33===p){if(a(1),u("--")){h("--\x3e");continue}h(">");continue}if(47===p){if(a(1),l(),u("plist")){h(">");continue}if(u("dict")){h(">"),w();continue}if(u("array")){h(">"),P();continue}return S("unexpected closed tag")}let m=E();switch(m.name){case"dict":1===d?k():2===d?R():(f={},null!==n&&(f[n]={filename:t,line:i,char:o}),b(1,f)),m.isClosed&&w();continue;case"array":1===d?C():2===d?A():(f=[],b(2,f)),m.isClosed&&P();continue;case"key":M=L(m),1!==d?S("unexpected <key>"):null!==_?S("too many <key>"):_=M;continue;case"string":I(L(m));continue;case"real":v(parseFloat(L(m)));continue;case"integer":N(parseInt(L(m),10));continue;case"date":x(new Date(L(m)));continue;case"data":T(L(m));continue;case"true":L(m),G(!0);continue;case"false":L(m),G(!1);continue}if(!/^plist/.test(m.name))return S("unexpected opened tag "+m.name)}var M;return f}Object.defineProperty(t,"__esModule",{value:!0}),t.parsePLIST=t.parseWithLocation=void 0,t.parseWithLocation=function(e,t,s){return n(e,t,s)},t.parsePLIST=function(e){return n(e,null,null)}},583:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SyncRegistry=void 0;const s=n(752);t.SyncRegistry=class{constructor(e,t){this._onigLibPromise=t,this._grammars=new Map,this._rawGrammars=new Map,this._injectionGrammars=new Map,this._theme=e}dispose(){for(const e of this._grammars.values())e.dispose()}setTheme(e){this._theme=e}getColorMap(){return this._theme.getColorMap()}addGrammar(e,t){this._rawGrammars.set(e.scopeName,e),t&&this._injectionGrammars.set(e.scopeName,t)}lookup(e){return this._rawGrammars.get(e)}injections(e){return this._injectionGrammars.get(e)}getDefaults(){return this._theme.getDefaults()}themeMatch(e){return this._theme.match(e)}async grammarForScopeName(e,t,n,r,i){if(!this._grammars.has(e)){let o=this._rawGrammars.get(e);if(!o)return null;this._grammars.set(e,s.createGrammar(e,o,t,n,r,i,this,await this._onigLibPromise))}return this._grammars.get(e)}}},666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompiledRule=t.RegExpSourceList=t.RegExpSource=t.RuleFactory=t.BeginWhileRule=t.BeginEndRule=t.IncludeOnlyRule=t.MatchRule=t.CaptureRule=t.Rule=t.ruleIdToNumber=t.ruleIdFromNumber=t.whileRuleId=t.endRuleId=void 0;const s=n(807),r=n(784),i=/\\(\d+)/,o=/\\(\d+)/g;Symbol("RuleId"),t.endRuleId=-1,t.whileRuleId=-2,t.ruleIdFromNumber=function(e){return e},t.ruleIdToNumber=function(e){return e};class a{constructor(e,t,n,r){this.$location=e,this.id=t,this._name=n||null,this._nameIsCapturing=s.RegexSource.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=s.RegexSource.hasCaptures(this._contentName)}get debugName(){const e=this.$location?`${s.basename(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${e}`}getName(e,t){return this._nameIsCapturing&&null!==this._name&&null!==e&&null!==t?s.RegexSource.replaceCaptures(this._name,e,t):this._name}getContentName(e,t){return this._contentNameIsCapturing&&null!==this._contentName?s.RegexSource.replaceCaptures(this._contentName,e,t):this._contentName}}t.Rule=a;class c extends a{constructor(e,t,n,s,r){super(e,t,n,s),this.retokenizeCapturedWithRuleId=r}dispose(){}collectPatterns(e,t){throw new Error("Not supported!")}compile(e,t){throw new Error("Not supported!")}compileAG(e,t,n,s){throw new Error("Not supported!")}}t.CaptureRule=c;class l extends a{constructor(e,t,n,s,r){super(e,t,n,null),this._match=new f(s,this.id),this.captures=r,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(e,t){t.push(this._match)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new m,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}t.MatchRule=l;class u extends a{constructor(e,t,n,s,r){super(e,t,n,s),this.patterns=r.patterns,this.hasMissingPatterns=r.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(e,t){for(const n of this.patterns)e.getRule(n).collectPatterns(e,t)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new m,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}t.IncludeOnlyRule=u;class h extends a{constructor(e,t,n,s,r,i,o,a,c,l){super(e,t,n,s),this._begin=new f(r,this.id),this.beginCaptures=i,this._end=new f(o||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=a,this.applyEndPatternLast=c||!1,this.patterns=l.patterns,this.hasMissingPatterns=l.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(e,t){return this._end.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin)}compile(e,t){return this._getCachedCompiledPatterns(e,t).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e,t).compileAG(e,n,s)}_getCachedCompiledPatterns(e,t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new m;for(const t of this.patterns)e.getRule(t).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,t):this._cachedCompiledPatterns.setSource(0,t)),this._cachedCompiledPatterns}}t.BeginEndRule=h;class p extends a{constructor(e,n,s,r,i,o,a,c,l){super(e,n,s,r),this._begin=new f(i,this.id),this.beginCaptures=o,this.whileCaptures=c,this._while=new f(a,t.whileRuleId),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=l.patterns,this.hasMissingPatterns=l.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(e,t){return this._while.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin)}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new m;for(const t of this.patterns)e.getRule(t).collectPatterns(e,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(e,t){return this._getCachedCompiledWhilePatterns(e,t).compile(e)}compileWhileAG(e,t,n,s){return this._getCachedCompiledWhilePatterns(e,t).compileAG(e,n,s)}_getCachedCompiledWhilePatterns(e,t){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new m,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,t||"￿"),this._cachedCompiledWhilePatterns}}t.BeginWhileRule=p;class d{static createCaptureRule(e,t,n,s,r){return e.registerRule((e=>new c(t,e,n,s,r)))}static getCompiledRuleId(e,t,n){return e.id||t.registerRule((r=>{if(e.id=r,e.match)return new l(e.$vscodeTextmateLocation,e.id,e.name,e.match,d._compileCaptures(e.captures,t,n));if(void 0===e.begin){e.repository&&(n=s.mergeObjects({},n,e.repository));let r=e.patterns;return void 0===r&&e.include&&(r=[{include:e.include}]),new u(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,d._compilePatterns(r,t,n))}return e.while?new p(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,d._compileCaptures(e.beginCaptures||e.captures,t,n),e.while,d._compileCaptures(e.whileCaptures||e.captures,t,n),d._compilePatterns(e.patterns,t,n)):new h(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,d._compileCaptures(e.beginCaptures||e.captures,t,n),e.end,d._compileCaptures(e.endCaptures||e.captures,t,n),e.applyEndPatternLast,d._compilePatterns(e.patterns,t,n))})),e.id}static _compileCaptures(e,t,n){let s=[];if(e){let r=0;for(const t in e){if("$vscodeTextmateLocation"===t)continue;const e=parseInt(t,10);e>r&&(r=e)}for(let e=0;e<=r;e++)s[e]=null;for(const r in e){if("$vscodeTextmateLocation"===r)continue;const i=parseInt(r,10);let o=0;e[r].patterns&&(o=d.getCompiledRuleId(e[r],t,n)),s[i]=d.createCaptureRule(t,e[r].$vscodeTextmateLocation,e[r].name,e[r].contentName,o)}}return s}static _compilePatterns(e,t,n){let s=[];if(e)for(let i=0,o=e.length;i<o;i++){const o=e[i];let a=-1;if(o.include){const e=r.parseInclude(o.include);switch(e.kind){case 0:case 1:a=d.getCompiledRuleId(n[o.include],t,n);break;case 2:let s=n[e.ruleName];s&&(a=d.getCompiledRuleId(s,t,n));break;case 3:case 4:const r=e.scopeName,i=4===e.kind?e.ruleName:null,c=t.getExternalGrammar(r,n);if(c)if(i){let e=c.repository[i];e&&(a=d.getCompiledRuleId(e,t,c.repository))}else a=d.getCompiledRuleId(c.repository.$self,t,c.repository)}}else a=d.getCompiledRuleId(o,t,n);if(-1!==a){const e=t.getRule(a);let n=!1;if((e instanceof u||e instanceof h||e instanceof p)&&e.hasMissingPatterns&&0===e.patterns.length&&(n=!0),n)continue;s.push(a)}}return{patterns:s,hasMissingPatterns:(e?e.length:0)!==s.length}}}t.RuleFactory=d;class f{constructor(e,t){if(e){const t=e.length;let n=0,s=[],r=!1;for(let i=0;i<t;i++)if("\\"===e.charAt(i)&&i+1<t){const t=e.charAt(i+1);"z"===t?(s.push(e.substring(n,i)),s.push("$(?!\\n)(?<!\\n)"),n=i+2):"A"!==t&&"G"!==t||(r=!0),i++}this.hasAnchor=r,0===n?this.source=e:(s.push(e.substring(n,t)),this.source=s.join(""))}else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=t,this.hasBackReferences=i.test(this.source)}clone(){return new f(this.source,this.ruleId)}setSource(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(e,t){let n=t.map((t=>e.substring(t.start,t.end)));return o.lastIndex=0,this.source.replace(o,((e,t)=>s.escapeRegExpCharacters(n[parseInt(t,10)]||"")))}_buildAnchorCache(){let e,t,n,s,r=[],i=[],o=[],a=[];for(e=0,t=this.source.length;e<t;e++)n=this.source.charAt(e),r[e]=n,i[e]=n,o[e]=n,a[e]=n,"\\"===n&&e+1<t&&(s=this.source.charAt(e+1),"A"===s?(r[e+1]="￿",i[e+1]="￿",o[e+1]="A",a[e+1]="A"):"G"===s?(r[e+1]="￿",i[e+1]="G",o[e+1]="￿",a[e+1]="G"):(r[e+1]=s,i[e+1]=s,o[e+1]=s,a[e+1]=s),e++);return{A0_G0:r.join(""),A0_G1:i.join(""),A1_G0:o.join(""),A1_G1:a.join("")}}resolveAnchors(e,t){return this.hasAnchor&&this._anchorCache?e?t?this._anchorCache.A1_G1:this._anchorCache.A1_G0:t?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source}}t.RegExpSource=f;class m{constructor(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(e){this._items.push(e),this._hasAnchors=this._hasAnchors||e.hasAnchor}unshift(e){this._items.unshift(e),this._hasAnchors=this._hasAnchors||e.hasAnchor}length(){return this._items.length}setSource(e,t){this._items[e].source!==t&&(this._disposeCaches(),this._items[e].setSource(t))}compile(e){if(!this._cached){let t=this._items.map((e=>e.source));this._cached=new g(e,t,this._items.map((e=>e.ruleId)))}return this._cached}compileAG(e,t,n){return this._hasAnchors?t?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G0):this.compile(e)}_resolveAnchors(e,t,n){let s=this._items.map((e=>e.resolveAnchors(t,n)));return new g(e,s,this._items.map((e=>e.ruleId)))}}t.RegExpSourceList=m;class g{constructor(e,t,n){this.regExps=t,this.rules=n,this.scanner=e.createOnigScanner(t)}dispose(){"function"==typeof this.scanner.dispose&&this.scanner.dispose()}toString(){const e=[];for(let t=0,n=this.rules.length;t<n;t++)e.push("   - "+this.rules[t]+": "+this.regExps[t]);return e.join("\n")}findNextMatchSync(e,t,n){const s=this.scanner.findNextMatchSync(e,t,n);return s?{ruleId:this.rules[s.index],captureIndices:s.captureIndices}:null}}t.CompiledRule=g},63:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeTrieElement=t.ThemeTrieElementRule=t.ColorMap=t.fontStyleToString=t.ParsedThemeRule=t.parseTheme=t.StyleAttributes=t.ScopeStack=t.Theme=void 0;const s=n(807);class r{constructor(e,t,n){this._colorMap=e,this._defaults=t,this._root=n,this._cachedMatchRoot=new s.CachedFn((e=>this._root.match(e)))}static createFromRawTheme(e,t){return this.createFromParsedTheme(c(e),t)}static createFromParsedTheme(e,t){return function(e,t){e.sort(((e,t)=>{let n=s.strcmp(e.scope,t.scope);return 0!==n?n:(n=s.strArrCmp(e.parentScopes,t.parentScopes),0!==n?n:e.index-t.index)}));let n=0,i="#000000",o="#ffffff";for(;e.length>=1&&""===e[0].scope;){let t=e.shift();-1!==t.fontStyle&&(n=t.fontStyle),null!==t.foreground&&(i=t.foreground),null!==t.background&&(o=t.background)}let c=new u(t),l=new a(n,c.getId(i),c.getId(o)),h=new d(new p(0,null,-1,0,0),[]);for(let t=0,n=e.length;t<n;t++){let n=e[t];h.insert(0,n.scope,n.parentScopes,n.fontStyle,c.getId(n.foreground),c.getId(n.background))}return new r(c,l,h)}(e,t)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(e){if(null===e)return this._defaults;const t=e.scopeName,n=this._cachedMatchRoot.get(t).find((t=>function(e,t){if(0===t.length)return!0;for(let n=0;n<t.length;n++){let s=t[n],r=!1;if(">"===s){if(n===t.length-1)return!1;s=t[++n],r=!0}for(;e&&!o(e.scopeName,s);){if(r)return!1;e=e.parent}if(!e)return!1;e=e.parent}return!0}(e.parent,t.parentScopes)));return n?new a(n.fontStyle,n.foreground,n.background):null}}t.Theme=r;class i{constructor(e,t){this.parent=e,this.scopeName=t}static push(e,t){for(const n of t)e=new i(e,n);return e}static from(...e){let t=null;for(let n=0;n<e.length;n++)t=new i(t,e[n]);return t}push(e){return new i(this,e)}getSegments(){let e=this;const t=[];for(;e;)t.push(e.scopeName),e=e.parent;return t.reverse(),t}toString(){return this.getSegments().join(" ")}extends(e){return this===e||null!==this.parent&&this.parent.extends(e)}getExtensionIfDefined(e){const t=[];let n=this;for(;n&&n!==e;)t.push(n.scopeName),n=n.parent;return n===e?t.reverse():void 0}}function o(e,t){return t===e||e.startsWith(t)&&"."===e[t.length]}t.ScopeStack=i;class a{constructor(e,t,n){this.fontStyle=e,this.foregroundId=t,this.backgroundId=n}}function c(e){if(!e)return[];if(!e.settings||!Array.isArray(e.settings))return[];let t=e.settings,n=[],r=0;for(let e=0,i=t.length;e<i;e++){let i,o=t[e];if(!o.settings)continue;if("string"==typeof o.scope){let e=o.scope;e=e.replace(/^[,]+/,""),e=e.replace(/[,]+$/,""),i=e.split(",")}else i=Array.isArray(o.scope)?o.scope:[""];let a=-1;if("string"==typeof o.settings.fontStyle){a=0;let e=o.settings.fontStyle.split(" ");for(let t=0,n=e.length;t<n;t++)switch(e[t]){case"italic":a|=1;break;case"bold":a|=2;break;case"underline":a|=4;break;case"strikethrough":a|=8}}let c=null;"string"==typeof o.settings.foreground&&s.isValidHexColor(o.settings.foreground)&&(c=o.settings.foreground);let u=null;"string"==typeof o.settings.background&&s.isValidHexColor(o.settings.background)&&(u=o.settings.background);for(let t=0,s=i.length;t<s;t++){let s=i[t].trim().split(" "),o=s[s.length-1],h=null;s.length>1&&(h=s.slice(0,s.length-1),h.reverse()),n[r++]=new l(o,h,e,a,c,u)}}return n}t.StyleAttributes=a,t.parseTheme=c;class l{constructor(e,t,n,s,r,i){this.scope=e,this.parentScopes=t,this.index=n,this.fontStyle=s,this.foreground=r,this.background=i}}t.ParsedThemeRule=l,t.fontStyleToString=function(e){if(-1===e)return"not set";let t="";return 1&e&&(t+="italic "),2&e&&(t+="bold "),4&e&&(t+="underline "),8&e&&(t+="strikethrough "),""===t&&(t="none"),t.trim()};class u{constructor(e){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(e)){this._isFrozen=!0;for(let t=0,n=e.length;t<n;t++)this._color2id[e[t]]=t,this._id2color[t]=e[t]}else this._isFrozen=!1}getId(e){if(null===e)return 0;e=e.toUpperCase();let t=this._color2id[e];if(t)return t;if(this._isFrozen)throw new Error(`Missing color in color map - ${e}`);return t=++this._lastColorId,this._color2id[e]=t,this._id2color[t]=e,t}getColorMap(){return this._id2color.slice(0)}}t.ColorMap=u;const h=Object.freeze([]);class p{constructor(e,t,n,s,r){this.scopeDepth=e,this.parentScopes=t||h,this.fontStyle=n,this.foreground=s,this.background=r}clone(){return new p(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let t=[];for(let n=0,s=e.length;n<s;n++)t[n]=e[n].clone();return t}acceptOverwrite(e,t,n,s){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,-1!==t&&(this.fontStyle=t),0!==n&&(this.foreground=n),0!==s&&(this.background=s)}}t.ThemeTrieElementRule=p;class d{constructor(e,t=[],n={}){this._mainRule=e,this._children=n,this._rulesWithParentScopes=t}static _cmpBySpecificity(e,t){if(e.scopeDepth!==t.scopeDepth)return t.scopeDepth-e.scopeDepth;let n=0,s=0;for(;">"===e.parentScopes[n]&&n++,">"===t.parentScopes[s]&&s++,!(n>=e.parentScopes.length||s>=t.parentScopes.length);){const r=t.parentScopes[s].length-e.parentScopes[n].length;if(0!==r)return r;n++,s++}return t.parentScopes.length-e.parentScopes.length}match(e){if(""!==e){let t,n,s=e.indexOf(".");if(-1===s?(t=e,n=""):(t=e.substring(0,s),n=e.substring(s+1)),this._children.hasOwnProperty(t))return this._children[t].match(n)}const t=this._rulesWithParentScopes.concat(this._mainRule);return t.sort(d._cmpBySpecificity),t}insert(e,t,n,s,r,i){if(""===t)return void this._doInsertHere(e,n,s,r,i);let o,a,c,l=t.indexOf(".");-1===l?(o=t,a=""):(o=t.substring(0,l),a=t.substring(l+1)),this._children.hasOwnProperty(o)?c=this._children[o]:(c=new d(this._mainRule.clone(),p.cloneArr(this._rulesWithParentScopes)),this._children[o]=c),c.insert(e+1,a,n,s,r,i)}_doInsertHere(e,t,n,r,i){if(null!==t){for(let o=0,a=this._rulesWithParentScopes.length;o<a;o++){let a=this._rulesWithParentScopes[o];if(0===s.strArrCmp(a.parentScopes,t))return void a.acceptOverwrite(e,n,r,i)}-1===n&&(n=this._mainRule.fontStyle),0===r&&(r=this._mainRule.foreground),0===i&&(i=this._mainRule.background),this._rulesWithParentScopes.push(new p(e,t,n,r,i))}else this._mainRule.acceptOverwrite(e,n,r,i)}}t.ThemeTrieElement=d},807:(e,t)=>{function n(e){return Array.isArray(e)?function(e){let t=[];for(let s=0,r=e.length;s<r;s++)t[s]=n(e[s]);return t}(e):"object"==typeof e?function(e){let t={};for(let s in e)t[s]=n(e[s]);return t}(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.performanceNow=t.CachedFn=t.escapeRegExpCharacters=t.isValidHexColor=t.strArrCmp=t.strcmp=t.RegexSource=t.basename=t.mergeObjects=t.clone=void 0,t.clone=function(e){return n(e)},t.mergeObjects=function(e,...t){return t.forEach((t=>{for(let n in t)e[n]=t[n]})),e},t.basename=function e(t){const n=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return 0===n?t:~n==t.length-1?e(t.substring(0,t.length-1)):t.substr(1+~n)};let s=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;function r(e,t){return e<t?-1:e>t?1:0}t.RegexSource=class{static hasCaptures(e){return null!==e&&(s.lastIndex=0,s.test(e))}static replaceCaptures(e,t,n){return e.replace(s,((e,s,r,i)=>{let o=n[parseInt(s||r,10)];if(!o)return e;{let e=t.substring(o.start,o.end);for(;"."===e[0];)e=e.substring(1);switch(i){case"downcase":return e.toLowerCase();case"upcase":return e.toUpperCase();default:return e}}}))}},t.strcmp=r,t.strArrCmp=function(e,t){if(null===e&&null===t)return 0;if(!e)return-1;if(!t)return 1;let n=e.length,s=t.length;if(n===s){for(let s=0;s<n;s++){let n=r(e[s],t[s]);if(0!==n)return n}return 0}return n-s},t.isValidHexColor=function(e){return!!(/^#[0-9a-f]{6}$/i.test(e)||/^#[0-9a-f]{8}$/i.test(e)||/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{4}$/i.test(e))},t.escapeRegExpCharacters=function(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},t.CachedFn=class{constructor(e){this.fn=e,this.cache=new Map}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.fn(e);return this.cache.set(e,t),t}},t.performanceNow="undefined"==typeof performance?function(){return Date.now()}:function(){return performance.now()}}},t={};return function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}(625)})()));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 6486:
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(()=>{return t={770:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.setDefaultDebugCall=n.createOnigScanner=n.createOnigString=n.loadWASM=n.OnigScanner=n.OnigString=void 0;const i=r(e(418));let o=null,a=!1;class f{static _utf8ByteLength(t){let n=0;for(let e=0,r=t.length;e<r;e++){const i=t.charCodeAt(e);let o=i,a=!1;if(i>=55296&&i<=56319&&e+1<r){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(o=65536+(i-55296<<10)|n-56320,a=!0)}n+=o<=127?1:o<=2047?2:o<=65535?3:4,a&&e++}return n}constructor(t){const n=t.length,e=f._utf8ByteLength(t),r=e!==n,i=r?new Uint32Array(n+1):null;r&&(i[n]=e);const o=r?new Uint32Array(e+1):null;r&&(o[e]=n);const a=new Uint8Array(e);let s=0;for(let e=0;e<n;e++){const f=t.charCodeAt(e);let u=f,c=!1;if(f>=55296&&f<=56319&&e+1<n){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(u=65536+(f-55296<<10)|n-56320,c=!0)}r&&(i[e]=s,c&&(i[e+1]=s),u<=127?o[s+0]=e:u<=2047?(o[s+0]=e,o[s+1]=e):u<=65535?(o[s+0]=e,o[s+1]=e,o[s+2]=e):(o[s+0]=e,o[s+1]=e,o[s+2]=e,o[s+3]=e)),u<=127?a[s++]=u:u<=2047?(a[s++]=192|(1984&u)>>>6,a[s++]=128|(63&u)>>>0):u<=65535?(a[s++]=224|(61440&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0):(a[s++]=240|(1835008&u)>>>18,a[s++]=128|(258048&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0),c&&e++}this.utf16Length=n,this.utf8Length=e,this.utf16Value=t,this.utf8Value=a,this.utf16OffsetToUtf8=i,this.utf8OffsetToUtf16=o}createString(t){const n=t._omalloc(this.utf8Length);return t.HEAPU8.set(this.utf8Value,n),n}}class s{constructor(t){if(this.id=++s.LAST_ID,!o)throw new Error("Must invoke loadWASM first.");this._onigBinding=o,this.content=t;const n=new f(t);this.utf16Length=n.utf16Length,this.utf8Length=n.utf8Length,this.utf16OffsetToUtf8=n.utf16OffsetToUtf8,this.utf8OffsetToUtf16=n.utf8OffsetToUtf16,this.utf8Length<1e4&&!s._sharedPtrInUse?(s._sharedPtr||(s._sharedPtr=o._omalloc(1e4)),s._sharedPtrInUse=!0,o.HEAPU8.set(n.utf8Value,s._sharedPtr),this.ptr=s._sharedPtr):this.ptr=n.createString(o)}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===s._sharedPtr?s._sharedPtrInUse=!1:this._onigBinding._ofree(this.ptr)}}n.OnigString=s,s.LAST_ID=0,s._sharedPtr=0,s._sharedPtrInUse=!1;class u{constructor(t){if(!o)throw new Error("Must invoke loadWASM first.");const n=[],e=[];for(let r=0,i=t.length;r<i;r++){const i=new f(t[r]);n[r]=i.createString(o),e[r]=i.utf8Length}const r=o._omalloc(4*t.length);o.HEAPU32.set(n,r/4);const i=o._omalloc(4*t.length);o.HEAPU32.set(e,i/4);const a=o._createOnigScanner(r,i,t.length);for(let e=0,r=t.length;e<r;e++)o._ofree(n[e]);o._ofree(i),o._ofree(r),0===a&&function(t){throw new Error(t.UTF8ToString(t._getLastOnigError()))}(o),this._onigBinding=o,this._ptr=a}dispose(){this._onigBinding._freeOnigScanner(this._ptr)}findNextMatchSync(t,n,e){let r=a,i=0;if("number"==typeof e?(8&e&&(r=!0),i=e):"boolean"==typeof e&&(r=e),"string"==typeof t){t=new s(t);const e=this._findNextMatchSync(t,n,r,i);return t.dispose(),e}return this._findNextMatchSync(t,n,r,i)}_findNextMatchSync(t,n,e,r){const i=this._onigBinding;let o;if(o=e?i._findNextOnigScannerMatchDbg(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r):i._findNextOnigScannerMatch(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r),0===o)return null;const a=i.HEAPU32;let f=o/4;const s=a[f++],u=a[f++];let c=[];for(let n=0;n<u;n++){const e=t.convertUtf8OffsetToUtf16(a[f++]),r=t.convertUtf8OffsetToUtf16(a[f++]);c[n]={start:e,end:r,length:r-e}}return{index:s,captureIndices:c}}}n.OnigScanner=u;let c=!1,l=null;n.loadWASM=function(t){if(c)return l;let n,e,r,a;if(c=!0,function(t){return"function"==typeof t.instantiator}(t))n=t.instantiator,e=t.print;else{let r;!function(t){return void 0!==t.data}(t)?r=t:(r=t.data,e=t.print),n=function(t){return"undefined"!=typeof Response&&t instanceof Response}(r)?"function"==typeof WebAssembly.instantiateStreaming?function(t){return n=>WebAssembly.instantiateStreaming(t,n)}(r):function(t){return async n=>{const e=await t.arrayBuffer();return WebAssembly.instantiate(e,n)}}(r):function(t){return n=>WebAssembly.instantiate(t,n)}(r)}return l=new Promise(((t,n)=>{r=t,a=n})),function(t,n,e,r){(0,i.default)({print:n,instantiateWasm:(n,e)=>{if("undefined"==typeof performance){const t=()=>Date.now();n.env.emscripten_get_now=t,n.wasi_snapshot_preview1.emscripten_get_now=t}return t(n).then((t=>e(t.instance)),r),{}}}).then((t=>{o=t,e()}))}(n,e,r,a),l},n.createOnigString=function(t){return new s(t)},n.createOnigScanner=function(t){return new u(t)},n.setDefaultDebugCall=function(t){a=t}},418:t=>{var n=("undefined"!=typeof document&&document.currentScript&&document.currentScript.src,function(t){var n,e,r=void 0!==(t=t||{})?t:{};r.ready=new Promise((function(t,r){n=t,e=r}));var i,o=Object.assign({},r),a=[],f=!1,s=!1,u=!0,c="";function l(t){return r.locateFile?r.locateFile(t,c):c+t}u&&(i=function(t){let n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(n=read(t,"binary"),m("object"==typeof n),n)},"undefined"!=typeof scriptArgs?a=scriptArgs:void 0!==arguments&&(a=arguments),"undefined"!=typeof onig_print&&("undefined"==typeof console&&(console={}),console.log=onig_print,console.warn=console.error="undefined"!=typeof printErr?printErr:onig_print));var h,p,d=r.print||console.log.bind(console),g=r.printErr||console.warn.bind(console);Object.assign(r,o),o=null,r.arguments&&(a=r.arguments),r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(h=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&k("no native wasm support detected");var _=!1;function m(t,n){t||k(n)}var y,w,S,v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&v)return v.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var f=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|f<<6|s:(7&a)<<18|f<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&a)<<6|f)}else o+=String.fromCharCode(a)}return o}function b(t,n){return t?A(w,t,n):""}function O(t){y=t,r.HEAP8=new Int8Array(t),r.HEAP16=new Int16Array(t),r.HEAP32=new Int32Array(t),r.HEAPU8=w=new Uint8Array(t),r.HEAPU16=new Uint16Array(t),r.HEAPU32=S=new Uint32Array(t),r.HEAPF32=new Float32Array(t),r.HEAPF64=new Float64Array(t)}r.INITIAL_MEMORY;var U=[],P=[],R=[];function x(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)M(r.preRun.shift());G(U)}function T(){G(P)}function E(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)I(r.postRun.shift());G(R)}function M(t){U.unshift(t)}function L(t){P.unshift(t)}function I(t){R.unshift(t)}var W=0,D=null,C=null;function N(t){W++,r.monitorRunDependencies&&r.monitorRunDependencies(W)}function j(t){if(W--,r.monitorRunDependencies&&r.monitorRunDependencies(W),0==W&&(null!==D&&(clearInterval(D),D=null),C)){var n=C;C=null,n()}}function k(t){r.onAbort&&r.onAbort(t),g(t="Aborted("+t+")"),_=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw e(n),n}var B,H,F="data:application/octet-stream;base64,";function V(t){return t.startsWith(F)}function z(t){try{if(t==B&&h)return new Uint8Array(h);if(i)return i(t);throw"both async and sync fetching of the wasm failed"}catch(t){k(t)}}function q(){return h||!f&&!s||"function"!=typeof fetch?Promise.resolve().then((function(){return z(B)})):fetch(B,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+B+"'";return t.arrayBuffer()})).catch((function(){return z(B)}))}function Y(){var t={env:nt,wasi_snapshot_preview1:nt};function n(t,n){var e=t.exports;r.asm=e,O((p=r.asm.memory).buffer),r.asm.__indirect_function_table,L(r.asm.__wasm_call_ctors),j()}function i(t){n(t.instance)}function o(n){return q().then((function(n){return WebAssembly.instantiate(n,t)})).then((function(t){return t})).then(n,(function(t){g("failed to asynchronously prepare wasm: "+t),k(t)}))}if(N(),r.instantiateWasm)try{return r.instantiateWasm(t,n)}catch(t){g("Module.instantiateWasm callback failed with error: "+t),e(t)}return(h||"function"!=typeof WebAssembly.instantiateStreaming||V(B)||"function"!=typeof fetch?o(i):fetch(B,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(i,(function(t){return g("wasm streaming compile failed: "+t),g("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(e),{}}function G(t){for(;t.length>0;)t.shift()(r)}function J(t,n,e){w.copyWithin(t,n,n+e)}function K(t){try{return p.grow(t-y.byteLength+65535>>>16),O(p.buffer),1}catch(t){}}function Q(t){var n,e=w.length,r=2147483648;if((t>>>=0)>r)return!1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),K(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}V(B="onig.wasm")||(B=l(B)),H="undefined"!=typeof dateNow?dateNow:()=>performance.now();var X=[null,[],[]];function Z(t,n){var e=X[t];0===n||10===n?((1===t?d:g)(A(e,0)),e.length=0):e.push(n)}function $(t,n,e,r){for(var i=0,o=0;o<e;o++){var a=S[n>>2],f=S[n+4>>2];n+=8;for(var s=0;s<f;s++)Z(t,w[a+s]);i+=f}return S[r>>2]=i,0}var tt,nt={emscripten_get_now:H,emscripten_memcpy_big:J,emscripten_resize_heap:Q,fd_write:$};function et(t){function e(){tt||(tt=!0,r.calledRun=!0,_||(T(),n(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),E()))}t=t||a,W>0||(x(),W>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e()))}if(Y(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.__wasm_call_ctors).apply(null,arguments)},r.___errno_location=function(){return(r.___errno_location=r.asm.__errno_location).apply(null,arguments)},r._omalloc=function(){return(r._omalloc=r.asm.omalloc).apply(null,arguments)},r._ofree=function(){return(r._ofree=r.asm.ofree).apply(null,arguments)},r._getLastOnigError=function(){return(r._getLastOnigError=r.asm.getLastOnigError).apply(null,arguments)},r._createOnigScanner=function(){return(r._createOnigScanner=r.asm.createOnigScanner).apply(null,arguments)},r._freeOnigScanner=function(){return(r._freeOnigScanner=r.asm.freeOnigScanner).apply(null,arguments)},r._findNextOnigScannerMatch=function(){return(r._findNextOnigScannerMatch=r.asm.findNextOnigScannerMatch).apply(null,arguments)},r._findNextOnigScannerMatchDbg=function(){return(r._findNextOnigScannerMatchDbg=r.asm.findNextOnigScannerMatchDbg).apply(null,arguments)},r.stackSave=function(){return(r.stackSave=r.asm.stackSave).apply(null,arguments)},r.stackRestore=function(){return(r.stackRestore=r.asm.stackRestore).apply(null,arguments)},r.stackAlloc=function(){return(r.stackAlloc=r.asm.stackAlloc).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.dynCall_jiji).apply(null,arguments)},r.UTF8ToString=b,C=function t(){tt||et(),tt||(C=t)},r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return et(),t.ready});t.exports=n}},n={},function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}(770);// removed by dead control flow
{ var t, n; }}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/charCode.js


var charCode_CharCode;
(function (CharCode) {
    CharCode[CharCode["Null"] = 0] = "Null";
    CharCode[CharCode["Backspace"] = 8] = "Backspace";
    CharCode[CharCode["Tab"] = 9] = "Tab";
    CharCode[CharCode["LineFeed"] = 10] = "LineFeed";
    CharCode[CharCode["CarriageReturn"] = 13] = "CarriageReturn";
    CharCode[CharCode["Space"] = 32] = "Space";
    CharCode[CharCode["ExclamationMark"] = 33] = "ExclamationMark";
    CharCode[CharCode["DoubleQuote"] = 34] = "DoubleQuote";
    CharCode[CharCode["Hash"] = 35] = "Hash";
    CharCode[CharCode["DollarSign"] = 36] = "DollarSign";
    CharCode[CharCode["PercentSign"] = 37] = "PercentSign";
    CharCode[CharCode["Ampersand"] = 38] = "Ampersand";
    CharCode[CharCode["SingleQuote"] = 39] = "SingleQuote";
    CharCode[CharCode["OpenParen"] = 40] = "OpenParen";
    CharCode[CharCode["CloseParen"] = 41] = "CloseParen";
    CharCode[CharCode["Asterisk"] = 42] = "Asterisk";
    CharCode[CharCode["Plus"] = 43] = "Plus";
    CharCode[CharCode["Comma"] = 44] = "Comma";
    CharCode[CharCode["Dash"] = 45] = "Dash";
    CharCode[CharCode["Period"] = 46] = "Period";
    CharCode[CharCode["Slash"] = 47] = "Slash";
    CharCode[CharCode["Digit0"] = 48] = "Digit0";
    CharCode[CharCode["Digit1"] = 49] = "Digit1";
    CharCode[CharCode["Digit2"] = 50] = "Digit2";
    CharCode[CharCode["Digit3"] = 51] = "Digit3";
    CharCode[CharCode["Digit4"] = 52] = "Digit4";
    CharCode[CharCode["Digit5"] = 53] = "Digit5";
    CharCode[CharCode["Digit6"] = 54] = "Digit6";
    CharCode[CharCode["Digit7"] = 55] = "Digit7";
    CharCode[CharCode["Digit8"] = 56] = "Digit8";
    CharCode[CharCode["Digit9"] = 57] = "Digit9";
    CharCode[CharCode["Colon"] = 58] = "Colon";
    CharCode[CharCode["Semicolon"] = 59] = "Semicolon";
    CharCode[CharCode["LessThan"] = 60] = "LessThan";
    CharCode[CharCode["Equals"] = 61] = "Equals";
    CharCode[CharCode["GreaterThan"] = 62] = "GreaterThan";
    CharCode[CharCode["QuestionMark"] = 63] = "QuestionMark";
    CharCode[CharCode["AtSign"] = 64] = "AtSign";
    CharCode[CharCode["A"] = 65] = "A";
    CharCode[CharCode["B"] = 66] = "B";
    CharCode[CharCode["C"] = 67] = "C";
    CharCode[CharCode["D"] = 68] = "D";
    CharCode[CharCode["E"] = 69] = "E";
    CharCode[CharCode["F"] = 70] = "F";
    CharCode[CharCode["G"] = 71] = "G";
    CharCode[CharCode["H"] = 72] = "H";
    CharCode[CharCode["I"] = 73] = "I";
    CharCode[CharCode["J"] = 74] = "J";
    CharCode[CharCode["K"] = 75] = "K";
    CharCode[CharCode["L"] = 76] = "L";
    CharCode[CharCode["M"] = 77] = "M";
    CharCode[CharCode["N"] = 78] = "N";
    CharCode[CharCode["O"] = 79] = "O";
    CharCode[CharCode["P"] = 80] = "P";
    CharCode[CharCode["Q"] = 81] = "Q";
    CharCode[CharCode["R"] = 82] = "R";
    CharCode[CharCode["S"] = 83] = "S";
    CharCode[CharCode["T"] = 84] = "T";
    CharCode[CharCode["U"] = 85] = "U";
    CharCode[CharCode["V"] = 86] = "V";
    CharCode[CharCode["W"] = 87] = "W";
    CharCode[CharCode["X"] = 88] = "X";
    CharCode[CharCode["Y"] = 89] = "Y";
    CharCode[CharCode["Z"] = 90] = "Z";
    CharCode[CharCode["OpenSquareBracket"] = 91] = "OpenSquareBracket";
    CharCode[CharCode["Backslash"] = 92] = "Backslash";
    CharCode[CharCode["CloseSquareBracket"] = 93] = "CloseSquareBracket";
    CharCode[CharCode["Caret"] = 94] = "Caret";
    CharCode[CharCode["Underline"] = 95] = "Underline";
    CharCode[CharCode["BackTick"] = 96] = "BackTick";
    CharCode[CharCode["a"] = 97] = "a";
    CharCode[CharCode["b"] = 98] = "b";
    CharCode[CharCode["c"] = 99] = "c";
    CharCode[CharCode["d"] = 100] = "d";
    CharCode[CharCode["e"] = 101] = "e";
    CharCode[CharCode["f"] = 102] = "f";
    CharCode[CharCode["g"] = 103] = "g";
    CharCode[CharCode["h"] = 104] = "h";
    CharCode[CharCode["i"] = 105] = "i";
    CharCode[CharCode["j"] = 106] = "j";
    CharCode[CharCode["k"] = 107] = "k";
    CharCode[CharCode["l"] = 108] = "l";
    CharCode[CharCode["m"] = 109] = "m";
    CharCode[CharCode["n"] = 110] = "n";
    CharCode[CharCode["o"] = 111] = "o";
    CharCode[CharCode["p"] = 112] = "p";
    CharCode[CharCode["q"] = 113] = "q";
    CharCode[CharCode["r"] = 114] = "r";
    CharCode[CharCode["s"] = 115] = "s";
    CharCode[CharCode["t"] = 116] = "t";
    CharCode[CharCode["u"] = 117] = "u";
    CharCode[CharCode["v"] = 118] = "v";
    CharCode[CharCode["w"] = 119] = "w";
    CharCode[CharCode["x"] = 120] = "x";
    CharCode[CharCode["y"] = 121] = "y";
    CharCode[CharCode["z"] = 122] = "z";
    CharCode[CharCode["OpenCurlyBrace"] = 123] = "OpenCurlyBrace";
    CharCode[CharCode["Pipe"] = 124] = "Pipe";
    CharCode[CharCode["CloseCurlyBrace"] = 125] = "CloseCurlyBrace";
    CharCode[CharCode["Tilde"] = 126] = "Tilde";
    CharCode[CharCode["NoBreakSpace"] = 160] = "NoBreakSpace";
    CharCode[CharCode["U_Combining_Grave_Accent"] = 768] = "U_Combining_Grave_Accent";
    CharCode[CharCode["U_Combining_Acute_Accent"] = 769] = "U_Combining_Acute_Accent";
    CharCode[CharCode["U_Combining_Circumflex_Accent"] = 770] = "U_Combining_Circumflex_Accent";
    CharCode[CharCode["U_Combining_Tilde"] = 771] = "U_Combining_Tilde";
    CharCode[CharCode["U_Combining_Macron"] = 772] = "U_Combining_Macron";
    CharCode[CharCode["U_Combining_Overline"] = 773] = "U_Combining_Overline";
    CharCode[CharCode["U_Combining_Breve"] = 774] = "U_Combining_Breve";
    CharCode[CharCode["U_Combining_Dot_Above"] = 775] = "U_Combining_Dot_Above";
    CharCode[CharCode["U_Combining_Diaeresis"] = 776] = "U_Combining_Diaeresis";
    CharCode[CharCode["U_Combining_Hook_Above"] = 777] = "U_Combining_Hook_Above";
    CharCode[CharCode["U_Combining_Ring_Above"] = 778] = "U_Combining_Ring_Above";
    CharCode[CharCode["U_Combining_Double_Acute_Accent"] = 779] = "U_Combining_Double_Acute_Accent";
    CharCode[CharCode["U_Combining_Caron"] = 780] = "U_Combining_Caron";
    CharCode[CharCode["U_Combining_Vertical_Line_Above"] = 781] = "U_Combining_Vertical_Line_Above";
    CharCode[CharCode["U_Combining_Double_Vertical_Line_Above"] = 782] = "U_Combining_Double_Vertical_Line_Above";
    CharCode[CharCode["U_Combining_Double_Grave_Accent"] = 783] = "U_Combining_Double_Grave_Accent";
    CharCode[CharCode["U_Combining_Candrabindu"] = 784] = "U_Combining_Candrabindu";
    CharCode[CharCode["U_Combining_Inverted_Breve"] = 785] = "U_Combining_Inverted_Breve";
    CharCode[CharCode["U_Combining_Turned_Comma_Above"] = 786] = "U_Combining_Turned_Comma_Above";
    CharCode[CharCode["U_Combining_Comma_Above"] = 787] = "U_Combining_Comma_Above";
    CharCode[CharCode["U_Combining_Reversed_Comma_Above"] = 788] = "U_Combining_Reversed_Comma_Above";
    CharCode[CharCode["U_Combining_Comma_Above_Right"] = 789] = "U_Combining_Comma_Above_Right";
    CharCode[CharCode["U_Combining_Grave_Accent_Below"] = 790] = "U_Combining_Grave_Accent_Below";
    CharCode[CharCode["U_Combining_Acute_Accent_Below"] = 791] = "U_Combining_Acute_Accent_Below";
    CharCode[CharCode["U_Combining_Left_Tack_Below"] = 792] = "U_Combining_Left_Tack_Below";
    CharCode[CharCode["U_Combining_Right_Tack_Below"] = 793] = "U_Combining_Right_Tack_Below";
    CharCode[CharCode["U_Combining_Left_Angle_Above"] = 794] = "U_Combining_Left_Angle_Above";
    CharCode[CharCode["U_Combining_Horn"] = 795] = "U_Combining_Horn";
    CharCode[CharCode["U_Combining_Left_Half_Ring_Below"] = 796] = "U_Combining_Left_Half_Ring_Below";
    CharCode[CharCode["U_Combining_Up_Tack_Below"] = 797] = "U_Combining_Up_Tack_Below";
    CharCode[CharCode["U_Combining_Down_Tack_Below"] = 798] = "U_Combining_Down_Tack_Below";
    CharCode[CharCode["U_Combining_Plus_Sign_Below"] = 799] = "U_Combining_Plus_Sign_Below";
    CharCode[CharCode["U_Combining_Minus_Sign_Below"] = 800] = "U_Combining_Minus_Sign_Below";
    CharCode[CharCode["U_Combining_Palatalized_Hook_Below"] = 801] = "U_Combining_Palatalized_Hook_Below";
    CharCode[CharCode["U_Combining_Retroflex_Hook_Below"] = 802] = "U_Combining_Retroflex_Hook_Below";
    CharCode[CharCode["U_Combining_Dot_Below"] = 803] = "U_Combining_Dot_Below";
    CharCode[CharCode["U_Combining_Diaeresis_Below"] = 804] = "U_Combining_Diaeresis_Below";
    CharCode[CharCode["U_Combining_Ring_Below"] = 805] = "U_Combining_Ring_Below";
    CharCode[CharCode["U_Combining_Comma_Below"] = 806] = "U_Combining_Comma_Below";
    CharCode[CharCode["U_Combining_Cedilla"] = 807] = "U_Combining_Cedilla";
    CharCode[CharCode["U_Combining_Ogonek"] = 808] = "U_Combining_Ogonek";
    CharCode[CharCode["U_Combining_Vertical_Line_Below"] = 809] = "U_Combining_Vertical_Line_Below";
    CharCode[CharCode["U_Combining_Bridge_Below"] = 810] = "U_Combining_Bridge_Below";
    CharCode[CharCode["U_Combining_Inverted_Double_Arch_Below"] = 811] = "U_Combining_Inverted_Double_Arch_Below";
    CharCode[CharCode["U_Combining_Caron_Below"] = 812] = "U_Combining_Caron_Below";
    CharCode[CharCode["U_Combining_Circumflex_Accent_Below"] = 813] = "U_Combining_Circumflex_Accent_Below";
    CharCode[CharCode["U_Combining_Breve_Below"] = 814] = "U_Combining_Breve_Below";
    CharCode[CharCode["U_Combining_Inverted_Breve_Below"] = 815] = "U_Combining_Inverted_Breve_Below";
    CharCode[CharCode["U_Combining_Tilde_Below"] = 816] = "U_Combining_Tilde_Below";
    CharCode[CharCode["U_Combining_Macron_Below"] = 817] = "U_Combining_Macron_Below";
    CharCode[CharCode["U_Combining_Low_Line"] = 818] = "U_Combining_Low_Line";
    CharCode[CharCode["U_Combining_Double_Low_Line"] = 819] = "U_Combining_Double_Low_Line";
    CharCode[CharCode["U_Combining_Tilde_Overlay"] = 820] = "U_Combining_Tilde_Overlay";
    CharCode[CharCode["U_Combining_Short_Stroke_Overlay"] = 821] = "U_Combining_Short_Stroke_Overlay";
    CharCode[CharCode["U_Combining_Long_Stroke_Overlay"] = 822] = "U_Combining_Long_Stroke_Overlay";
    CharCode[CharCode["U_Combining_Short_Solidus_Overlay"] = 823] = "U_Combining_Short_Solidus_Overlay";
    CharCode[CharCode["U_Combining_Long_Solidus_Overlay"] = 824] = "U_Combining_Long_Solidus_Overlay";
    CharCode[CharCode["U_Combining_Right_Half_Ring_Below"] = 825] = "U_Combining_Right_Half_Ring_Below";
    CharCode[CharCode["U_Combining_Inverted_Bridge_Below"] = 826] = "U_Combining_Inverted_Bridge_Below";
    CharCode[CharCode["U_Combining_Square_Below"] = 827] = "U_Combining_Square_Below";
    CharCode[CharCode["U_Combining_Seagull_Below"] = 828] = "U_Combining_Seagull_Below";
    CharCode[CharCode["U_Combining_X_Above"] = 829] = "U_Combining_X_Above";
    CharCode[CharCode["U_Combining_Vertical_Tilde"] = 830] = "U_Combining_Vertical_Tilde";
    CharCode[CharCode["U_Combining_Double_Overline"] = 831] = "U_Combining_Double_Overline";
    CharCode[CharCode["U_Combining_Grave_Tone_Mark"] = 832] = "U_Combining_Grave_Tone_Mark";
    CharCode[CharCode["U_Combining_Acute_Tone_Mark"] = 833] = "U_Combining_Acute_Tone_Mark";
    CharCode[CharCode["U_Combining_Greek_Perispomeni"] = 834] = "U_Combining_Greek_Perispomeni";
    CharCode[CharCode["U_Combining_Greek_Koronis"] = 835] = "U_Combining_Greek_Koronis";
    CharCode[CharCode["U_Combining_Greek_Dialytika_Tonos"] = 836] = "U_Combining_Greek_Dialytika_Tonos";
    CharCode[CharCode["U_Combining_Greek_Ypogegrammeni"] = 837] = "U_Combining_Greek_Ypogegrammeni";
    CharCode[CharCode["U_Combining_Bridge_Above"] = 838] = "U_Combining_Bridge_Above";
    CharCode[CharCode["U_Combining_Equals_Sign_Below"] = 839] = "U_Combining_Equals_Sign_Below";
    CharCode[CharCode["U_Combining_Double_Vertical_Line_Below"] = 840] = "U_Combining_Double_Vertical_Line_Below";
    CharCode[CharCode["U_Combining_Left_Angle_Below"] = 841] = "U_Combining_Left_Angle_Below";
    CharCode[CharCode["U_Combining_Not_Tilde_Above"] = 842] = "U_Combining_Not_Tilde_Above";
    CharCode[CharCode["U_Combining_Homothetic_Above"] = 843] = "U_Combining_Homothetic_Above";
    CharCode[CharCode["U_Combining_Almost_Equal_To_Above"] = 844] = "U_Combining_Almost_Equal_To_Above";
    CharCode[CharCode["U_Combining_Left_Right_Arrow_Below"] = 845] = "U_Combining_Left_Right_Arrow_Below";
    CharCode[CharCode["U_Combining_Upwards_Arrow_Below"] = 846] = "U_Combining_Upwards_Arrow_Below";
    CharCode[CharCode["U_Combining_Grapheme_Joiner"] = 847] = "U_Combining_Grapheme_Joiner";
    CharCode[CharCode["U_Combining_Right_Arrowhead_Above"] = 848] = "U_Combining_Right_Arrowhead_Above";
    CharCode[CharCode["U_Combining_Left_Half_Ring_Above"] = 849] = "U_Combining_Left_Half_Ring_Above";
    CharCode[CharCode["U_Combining_Fermata"] = 850] = "U_Combining_Fermata";
    CharCode[CharCode["U_Combining_X_Below"] = 851] = "U_Combining_X_Below";
    CharCode[CharCode["U_Combining_Left_Arrowhead_Below"] = 852] = "U_Combining_Left_Arrowhead_Below";
    CharCode[CharCode["U_Combining_Right_Arrowhead_Below"] = 853] = "U_Combining_Right_Arrowhead_Below";
    CharCode[CharCode["U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below"] = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below";
    CharCode[CharCode["U_Combining_Right_Half_Ring_Above"] = 855] = "U_Combining_Right_Half_Ring_Above";
    CharCode[CharCode["U_Combining_Dot_Above_Right"] = 856] = "U_Combining_Dot_Above_Right";
    CharCode[CharCode["U_Combining_Asterisk_Below"] = 857] = "U_Combining_Asterisk_Below";
    CharCode[CharCode["U_Combining_Double_Ring_Below"] = 858] = "U_Combining_Double_Ring_Below";
    CharCode[CharCode["U_Combining_Zigzag_Above"] = 859] = "U_Combining_Zigzag_Above";
    CharCode[CharCode["U_Combining_Double_Breve_Below"] = 860] = "U_Combining_Double_Breve_Below";
    CharCode[CharCode["U_Combining_Double_Breve"] = 861] = "U_Combining_Double_Breve";
    CharCode[CharCode["U_Combining_Double_Macron"] = 862] = "U_Combining_Double_Macron";
    CharCode[CharCode["U_Combining_Double_Macron_Below"] = 863] = "U_Combining_Double_Macron_Below";
    CharCode[CharCode["U_Combining_Double_Tilde"] = 864] = "U_Combining_Double_Tilde";
    CharCode[CharCode["U_Combining_Double_Inverted_Breve"] = 865] = "U_Combining_Double_Inverted_Breve";
    CharCode[CharCode["U_Combining_Double_Rightwards_Arrow_Below"] = 866] = "U_Combining_Double_Rightwards_Arrow_Below";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_A"] = 867] = "U_Combining_Latin_Small_Letter_A";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_E"] = 868] = "U_Combining_Latin_Small_Letter_E";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_I"] = 869] = "U_Combining_Latin_Small_Letter_I";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_O"] = 870] = "U_Combining_Latin_Small_Letter_O";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_U"] = 871] = "U_Combining_Latin_Small_Letter_U";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_C"] = 872] = "U_Combining_Latin_Small_Letter_C";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_D"] = 873] = "U_Combining_Latin_Small_Letter_D";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_H"] = 874] = "U_Combining_Latin_Small_Letter_H";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_M"] = 875] = "U_Combining_Latin_Small_Letter_M";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_R"] = 876] = "U_Combining_Latin_Small_Letter_R";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_T"] = 877] = "U_Combining_Latin_Small_Letter_T";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_V"] = 878] = "U_Combining_Latin_Small_Letter_V";
    CharCode[CharCode["U_Combining_Latin_Small_Letter_X"] = 879] = "U_Combining_Latin_Small_Letter_X";
    CharCode[CharCode["LINE_SEPARATOR"] = 8232] = "LINE_SEPARATOR";
    CharCode[CharCode["PARAGRAPH_SEPARATOR"] = 8233] = "PARAGRAPH_SEPARATOR";
    CharCode[CharCode["NEXT_LINE"] = 133] = "NEXT_LINE";
    CharCode[CharCode["U_CIRCUMFLEX"] = 94] = "U_CIRCUMFLEX";
    CharCode[CharCode["U_GRAVE_ACCENT"] = 96] = "U_GRAVE_ACCENT";
    CharCode[CharCode["U_DIAERESIS"] = 168] = "U_DIAERESIS";
    CharCode[CharCode["U_MACRON"] = 175] = "U_MACRON";
    CharCode[CharCode["U_ACUTE_ACCENT"] = 180] = "U_ACUTE_ACCENT";
    CharCode[CharCode["U_CEDILLA"] = 184] = "U_CEDILLA";
    CharCode[CharCode["U_MODIFIER_LETTER_LEFT_ARROWHEAD"] = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_RIGHT_ARROWHEAD"] = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_UP_ARROWHEAD"] = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_DOWN_ARROWHEAD"] = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING"] = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING";
    CharCode[CharCode["U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING"] = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING";
    CharCode[CharCode["U_MODIFIER_LETTER_UP_TACK"] = 724] = "U_MODIFIER_LETTER_UP_TACK";
    CharCode[CharCode["U_MODIFIER_LETTER_DOWN_TACK"] = 725] = "U_MODIFIER_LETTER_DOWN_TACK";
    CharCode[CharCode["U_MODIFIER_LETTER_PLUS_SIGN"] = 726] = "U_MODIFIER_LETTER_PLUS_SIGN";
    CharCode[CharCode["U_MODIFIER_LETTER_MINUS_SIGN"] = 727] = "U_MODIFIER_LETTER_MINUS_SIGN";
    CharCode[CharCode["U_BREVE"] = 728] = "U_BREVE";
    CharCode[CharCode["U_DOT_ABOVE"] = 729] = "U_DOT_ABOVE";
    CharCode[CharCode["U_RING_ABOVE"] = 730] = "U_RING_ABOVE";
    CharCode[CharCode["U_OGONEK"] = 731] = "U_OGONEK";
    CharCode[CharCode["U_SMALL_TILDE"] = 732] = "U_SMALL_TILDE";
    CharCode[CharCode["U_DOUBLE_ACUTE_ACCENT"] = 733] = "U_DOUBLE_ACUTE_ACCENT";
    CharCode[CharCode["U_MODIFIER_LETTER_RHOTIC_HOOK"] = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK";
    CharCode[CharCode["U_MODIFIER_LETTER_CROSS_ACCENT"] = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT";
    CharCode[CharCode["U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR"] = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR";
    CharCode[CharCode["U_MODIFIER_LETTER_HIGH_TONE_BAR"] = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR";
    CharCode[CharCode["U_MODIFIER_LETTER_MID_TONE_BAR"] = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_TONE_BAR"] = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR";
    CharCode[CharCode["U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR"] = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR";
    CharCode[CharCode["U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK"] = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK";
    CharCode[CharCode["U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK"] = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK";
    CharCode[CharCode["U_MODIFIER_LETTER_UNASPIRATED"] = 749] = "U_MODIFIER_LETTER_UNASPIRATED";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD"] = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_UP_ARROWHEAD"] = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD"] = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD"] = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_RING"] = 755] = "U_MODIFIER_LETTER_LOW_RING";
    CharCode[CharCode["U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT"] = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT";
    CharCode[CharCode["U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT"] = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT";
    CharCode[CharCode["U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT"] = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_TILDE"] = 759] = "U_MODIFIER_LETTER_LOW_TILDE";
    CharCode[CharCode["U_MODIFIER_LETTER_RAISED_COLON"] = 760] = "U_MODIFIER_LETTER_RAISED_COLON";
    CharCode[CharCode["U_MODIFIER_LETTER_BEGIN_HIGH_TONE"] = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE";
    CharCode[CharCode["U_MODIFIER_LETTER_END_HIGH_TONE"] = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE";
    CharCode[CharCode["U_MODIFIER_LETTER_BEGIN_LOW_TONE"] = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE";
    CharCode[CharCode["U_MODIFIER_LETTER_END_LOW_TONE"] = 764] = "U_MODIFIER_LETTER_END_LOW_TONE";
    CharCode[CharCode["U_MODIFIER_LETTER_SHELF"] = 765] = "U_MODIFIER_LETTER_SHELF";
    CharCode[CharCode["U_MODIFIER_LETTER_OPEN_SHELF"] = 766] = "U_MODIFIER_LETTER_OPEN_SHELF";
    CharCode[CharCode["U_MODIFIER_LETTER_LOW_LEFT_ARROW"] = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW";
    CharCode[CharCode["U_GREEK_LOWER_NUMERAL_SIGN"] = 885] = "U_GREEK_LOWER_NUMERAL_SIGN";
    CharCode[CharCode["U_GREEK_TONOS"] = 900] = "U_GREEK_TONOS";
    CharCode[CharCode["U_GREEK_DIALYTIKA_TONOS"] = 901] = "U_GREEK_DIALYTIKA_TONOS";
    CharCode[CharCode["U_GREEK_KORONIS"] = 8125] = "U_GREEK_KORONIS";
    CharCode[CharCode["U_GREEK_PSILI"] = 8127] = "U_GREEK_PSILI";
    CharCode[CharCode["U_GREEK_PERISPOMENI"] = 8128] = "U_GREEK_PERISPOMENI";
    CharCode[CharCode["U_GREEK_DIALYTIKA_AND_PERISPOMENI"] = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI";
    CharCode[CharCode["U_GREEK_PSILI_AND_VARIA"] = 8141] = "U_GREEK_PSILI_AND_VARIA";
    CharCode[CharCode["U_GREEK_PSILI_AND_OXIA"] = 8142] = "U_GREEK_PSILI_AND_OXIA";
    CharCode[CharCode["U_GREEK_PSILI_AND_PERISPOMENI"] = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI";
    CharCode[CharCode["U_GREEK_DASIA_AND_VARIA"] = 8157] = "U_GREEK_DASIA_AND_VARIA";
    CharCode[CharCode["U_GREEK_DASIA_AND_OXIA"] = 8158] = "U_GREEK_DASIA_AND_OXIA";
    CharCode[CharCode["U_GREEK_DASIA_AND_PERISPOMENI"] = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI";
    CharCode[CharCode["U_GREEK_DIALYTIKA_AND_VARIA"] = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA";
    CharCode[CharCode["U_GREEK_DIALYTIKA_AND_OXIA"] = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA";
    CharCode[CharCode["U_GREEK_VARIA"] = 8175] = "U_GREEK_VARIA";
    CharCode[CharCode["U_GREEK_OXIA"] = 8189] = "U_GREEK_OXIA";
    CharCode[CharCode["U_GREEK_DASIA"] = 8190] = "U_GREEK_DASIA";
    CharCode[CharCode["U_IDEOGRAPHIC_FULL_STOP"] = 12290] = "U_IDEOGRAPHIC_FULL_STOP";
    CharCode[CharCode["U_LEFT_CORNER_BRACKET"] = 12300] = "U_LEFT_CORNER_BRACKET";
    CharCode[CharCode["U_RIGHT_CORNER_BRACKET"] = 12301] = "U_RIGHT_CORNER_BRACKET";
    CharCode[CharCode["U_LEFT_BLACK_LENTICULAR_BRACKET"] = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET";
    CharCode[CharCode["U_RIGHT_BLACK_LENTICULAR_BRACKET"] = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET";
    CharCode[CharCode["U_OVERLINE"] = 8254] = "U_OVERLINE";
    CharCode[CharCode["UTF8_BOM"] = 65279] = "UTF8_BOM";
    CharCode[CharCode["U_FULLWIDTH_SEMICOLON"] = 65307] = "U_FULLWIDTH_SEMICOLON";
    CharCode[CharCode["U_FULLWIDTH_COMMA"] = 65292] = "U_FULLWIDTH_COMMA";
})(charCode_CharCode || (charCode_CharCode = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/marshallingIds.js


var MarshalledId;
(function (MarshalledId) {
    MarshalledId[MarshalledId["Uri"] = 1] = "Uri";
    MarshalledId[MarshalledId["Regexp"] = 2] = "Regexp";
    MarshalledId[MarshalledId["ScmResource"] = 3] = "ScmResource";
    MarshalledId[MarshalledId["ScmResourceGroup"] = 4] = "ScmResourceGroup";
    MarshalledId[MarshalledId["ScmProvider"] = 5] = "ScmProvider";
    MarshalledId[MarshalledId["CommentController"] = 6] = "CommentController";
    MarshalledId[MarshalledId["CommentThread"] = 7] = "CommentThread";
    MarshalledId[MarshalledId["CommentThreadInstance"] = 8] = "CommentThreadInstance";
    MarshalledId[MarshalledId["CommentThreadReply"] = 9] = "CommentThreadReply";
    MarshalledId[MarshalledId["CommentNode"] = 10] = "CommentNode";
    MarshalledId[MarshalledId["CommentThreadNode"] = 11] = "CommentThreadNode";
    MarshalledId[MarshalledId["TimelineActionContext"] = 12] = "TimelineActionContext";
    MarshalledId[MarshalledId["NotebookCellActionContext"] = 13] = "NotebookCellActionContext";
    MarshalledId[MarshalledId["NotebookActionContext"] = 14] = "NotebookActionContext";
    MarshalledId[MarshalledId["TerminalContext"] = 15] = "TerminalContext";
    MarshalledId[MarshalledId["TestItemContext"] = 16] = "TestItemContext";
    MarshalledId[MarshalledId["Date"] = 17] = "Date";
    MarshalledId[MarshalledId["TestMessageMenuArgs"] = 18] = "TestMessageMenuArgs";
    MarshalledId[MarshalledId["ChatViewContext"] = 19] = "ChatViewContext";
    MarshalledId[MarshalledId["LanguageModelToolResult"] = 20] = "LanguageModelToolResult";
    MarshalledId[MarshalledId["LanguageModelTextPart"] = 21] = "LanguageModelTextPart";
    MarshalledId[MarshalledId["LanguageModelPromptTsxPart"] = 22] = "LanguageModelPromptTsxPart";
    MarshalledId[MarshalledId["LanguageModelDataPart"] = 23] = "LanguageModelDataPart";
})(MarshalledId || (MarshalledId = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/nls.messages.js


function getNLSMessages() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
function getNLSLanguage() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/nls.js



const isPseudo = getNLSLanguage() === 'pseudo' || (typeof document !== 'undefined' && document.location && typeof document.location.hash === 'string' && document.location.hash.indexOf('pseudo=true') >= 0);
function _format(message, args) {
    let result;
    if (args.length === 0) {
        result = message;
    }
    else {
        result = message.replace(/\{(\d+)\}/g, (match, rest) => {
            const index = rest[0];
            const arg = args[index];
            let result = match;
            if (typeof arg === 'string') {
                result = arg;
            }
            else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                result = String(arg);
            }
            return result;
        });
    }
    if (isPseudo) {
        result = '\uFF3B' + result.replace(/[aouei]/g, '$&$&') + '\uFF3D';
    }
    return result;
}
let initialized = false;
function isInitialized() {
    return initialized;
}
function nls_localize(data , message , ...args) {
    if (typeof data === 'number') {
        return _format(lookupMessage(data, message), args);
    }
    return _format(message, args);
}
function lookupMessage(index, fallback) {
    initialized = true;
    const message = getNLSMessages()?.[index];
    if (typeof message !== 'string') {
        if (typeof fallback === 'string') {
            return fallback;
        }
        throw ( new Error(`!!! NLS MISSING: ${index} !!!`));
    }
    return message;
}
function localize2(data , originalMessage, ...args) {
    let message;
    if (typeof data === 'number') {
        message = lookupMessage(data, originalMessage);
    }
    else {
        message = originalMessage;
    }
    const value = _format(message, args);
    return {
        value,
        original: originalMessage === message ? value : _format(originalMessage, args)
    };
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/platform.js




const LANGUAGE_DEFAULT = 'en';
let _isWindows = false;
let _isMacintosh = false;
let _isLinux = false;
let _isLinuxSnap = false;
let _isNative = false;
let _isWeb = false;
let _isElectron = false;
let _isIOS = false;
let _isCI = false;
let _isMobile = false;
let _locale = undefined;
let _language = LANGUAGE_DEFAULT;
let _platformLocale = (/* unused pure expression or super */ null && (LANGUAGE_DEFAULT));
let _translationsConfigFile = (/* unused pure expression or super */ null && (undefined));
let _userAgent = undefined;
const $globalThis = globalThis;
let nodeProcess = undefined;
if (typeof $globalThis.vscode !== 'undefined' && typeof $globalThis.vscode.process !== 'undefined') {
    nodeProcess = $globalThis.vscode.process;
}
else if (typeof process !== 'undefined' && typeof process?.versions?.node === 'string') {
    nodeProcess = process;
}
const isElectronProcess = typeof nodeProcess?.versions?.electron === 'string';
const isElectronRenderer = isElectronProcess && nodeProcess?.type === 'renderer';
if (typeof nodeProcess === 'object') {
    _isWindows = (nodeProcess.platform === 'win32');
    _isMacintosh = (nodeProcess.platform === 'darwin');
    _isLinux = (nodeProcess.platform === 'linux');
    _isLinuxSnap = _isLinux && !!nodeProcess.env['SNAP'] && !!nodeProcess.env['SNAP_REVISION'];
    _isElectron = isElectronProcess;
    _isCI = !!nodeProcess.env['CI'] || !!nodeProcess.env['BUILD_ARTIFACTSTAGINGDIRECTORY'];
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    const rawNlsConfig = nodeProcess.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            const nlsConfig = JSON.parse(rawNlsConfig);
            _locale = nlsConfig.userLocale;
            _platformLocale = nlsConfig.osLocale;
            _language = nlsConfig.resolvedLanguage || LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
else if (typeof navigator === 'object' && !isElectronRenderer) {
    _userAgent = navigator.userAgent;
    _isWindows = _userAgent.indexOf('Windows') >= 0;
    _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
    _isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
    _isLinux = _userAgent.indexOf('Linux') >= 0;
    _isMobile = _userAgent?.indexOf('Mobi') >= 0;
    _isWeb = true;
    _language = getNLSLanguage() || LANGUAGE_DEFAULT;
    _locale = navigator.language.toLowerCase();
    _platformLocale = _locale;
}
else {
    console.error('Unable to resolve platform.');
}
var Platform;
(function (Platform) {
    Platform[Platform["Web"] = 0] = "Web";
    Platform[Platform["Mac"] = 1] = "Mac";
    Platform[Platform["Linux"] = 2] = "Linux";
    Platform[Platform["Windows"] = 3] = "Windows";
})(Platform || (Platform = {}));
function PlatformToString(platform) {
    switch (platform) {
        case Platform.Web: return 'Web';
        case Platform.Mac: return 'Mac';
        case Platform.Linux: return 'Linux';
        case Platform.Windows: return 'Windows';
    }
}
let _platform = Platform.Web;
if (_isMacintosh) {
    _platform = Platform.Mac;
}
else if (_isWindows) {
    _platform = Platform.Windows;
}
else if (_isLinux) {
    _platform = Platform.Linux;
}
const platform_isWindows = _isWindows;
const isMacintosh = _isMacintosh;
const isLinux = _isLinux;
const isLinuxSnap = (/* unused pure expression or super */ null && (_isLinuxSnap));
const isNative = _isNative;
const isElectron = (/* unused pure expression or super */ null && (_isElectron));
const isWeb = _isWeb;
const isWebWorker = (_isWeb && typeof $globalThis.importScripts === 'function');
const webWorkerOrigin = isWebWorker ? $globalThis.origin : undefined;
const isIOS = (/* unused pure expression or super */ null && (_isIOS));
const isMobile = (/* unused pure expression or super */ null && (_isMobile));
const isCI = (/* unused pure expression or super */ null && (_isCI));
const platform = (/* unused pure expression or super */ null && (_platform));
const userAgent = _userAgent;
const language = _language;
var Language;
(function (Language) {
    function value() {
        return language;
    }
    Language.value = value;
    function isDefaultVariant() {
        if (language.length === 2) {
            return language === 'en';
        }
        else if (language.length >= 3) {
            return language[0] === 'e' && language[1] === 'n' && language[2] === '-';
        }
        else {
            return false;
        }
    }
    Language.isDefaultVariant = isDefaultVariant;
    function isDefault() {
        return language === 'en';
    }
    Language.isDefault = isDefault;
})(Language || (Language = {}));
const locale = (/* unused pure expression or super */ null && (_locale));
const platformLocale = (/* unused pure expression or super */ null && (_platformLocale));
const setTimeout0IsFaster = (typeof $globalThis.postMessage === 'function' && !$globalThis.importScripts);
const platform_setTimeout0 = (() => {
    if (setTimeout0IsFaster) {
        const pending = [];
        $globalThis.addEventListener('message', (e) => {
            if (e.data && e.data.vscodeScheduleAsyncWork) {
                for (let i = 0, len = pending.length; i < len; i++) {
                    const candidate = pending[i];
                    if (candidate.id === e.data.vscodeScheduleAsyncWork) {
                        pending.splice(i, 1);
                        candidate.callback();
                        return;
                    }
                }
            }
        });
        let lastId = 0;
        return (callback) => {
            const myId = ++lastId;
            pending.push({
                id: myId,
                callback: callback
            });
            $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, '*');
        };
    }
    return (callback) => setTimeout(callback);
})();
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
    OperatingSystem[OperatingSystem["Macintosh"] = 2] = "Macintosh";
    OperatingSystem[OperatingSystem["Linux"] = 3] = "Linux";
})(OperatingSystem || (OperatingSystem = {}));
const OS = (_isMacintosh || _isIOS ? OperatingSystem.Macintosh : (_isWindows ? OperatingSystem.Windows : OperatingSystem.Linux));
let _isLittleEndian = true;
let _isLittleEndianComputed = false;
function isLittleEndian() {
    if (!_isLittleEndianComputed) {
        _isLittleEndianComputed = true;
        const test = ( new Uint8Array(2));
        test[0] = 1;
        test[1] = 2;
        const view = ( new Uint16Array(test.buffer));
        _isLittleEndian = (view[0] === (2 << 8) + 1);
    }
    return _isLittleEndian;
}
const isChrome = !!(userAgent && userAgent.indexOf('Chrome') >= 0);
const isFirefox = !!(userAgent && userAgent.indexOf('Firefox') >= 0);
const isSafari = !!(!isChrome && (userAgent && userAgent.indexOf('Safari') >= 0));
const isEdge = !!(userAgent && userAgent.indexOf('Edg/') >= 0);
const isAndroid = !!(userAgent && userAgent.indexOf('Android') >= 0);



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/process.js



let safeProcess;
const vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal !== 'undefined' && typeof vscodeGlobal.process !== 'undefined') {
    const sandboxProcess = vscodeGlobal.process;
    safeProcess = {
        get platform() { return sandboxProcess.platform; },
        get arch() { return sandboxProcess.arch; },
        get env() { return sandboxProcess.env; },
        cwd() { return sandboxProcess.cwd(); }
    };
}
else if (typeof process !== 'undefined' && typeof process?.versions?.node === 'string') {
    safeProcess = {
        get platform() { return process.platform; },
        get arch() { return process.arch; },
        get env() { return process.env; },
        cwd() { return process.env['VSCODE_CWD'] || process.cwd(); }
    };
}
else {
    safeProcess = {
        get platform() { return platform_isWindows ? 'win32' : isMacintosh ? 'darwin' : 'linux'; },
        get arch() { return undefined;  },
        get env() { return {}; },
        cwd() { return '/'; }
    };
}
const cwd = safeProcess.cwd;
const env = safeProcess.env;
const process_platform = safeProcess.platform;
const arch = safeProcess.arch;



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/path.js



const CHAR_UPPERCASE_A = 65;
const CHAR_LOWERCASE_A = 97;
const CHAR_UPPERCASE_Z = 90;
const CHAR_LOWERCASE_Z = 122;
const CHAR_DOT = 46;
const CHAR_FORWARD_SLASH = 47;
const CHAR_BACKWARD_SLASH = 92;
const CHAR_COLON = 58;
const CHAR_QUESTION_MARK = 63;
class ErrorInvalidArgType extends Error {
    constructor(name, expected, actual) {
        let determiner;
        if (typeof expected === 'string' && expected.indexOf('not ') === 0) {
            determiner = 'must not be';
            expected = expected.replace(/^not /, '');
        }
        else {
            determiner = 'must be';
        }
        const type = name.indexOf('.') !== -1 ? 'property' : 'argument';
        let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
        msg += `. Received type ${typeof actual}`;
        super(msg);
        this.code = 'ERR_INVALID_ARG_TYPE';
    }
}
function validateObject(pathObject, name) {
    if (pathObject === null || typeof pathObject !== 'object') {
        throw ( new ErrorInvalidArgType(name, 'Object', pathObject));
    }
}
function validateString(value, name) {
    if (typeof value !== 'string') {
        throw ( new ErrorInvalidArgType(name, 'string', value));
    }
}
const platformIsWin32 = (process_platform === 'win32');
function isPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
    return (code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z) ||
        (code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z);
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    let res = '';
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code = 0;
    for (let i = 0; i <= path.length; ++i) {
        if (i < path.length) {
            code = path.charCodeAt(i);
        }
        else if (isPathSeparator(code)) {
            break;
        }
        else {
            code = CHAR_FORWARD_SLASH;
        }
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 ||
                    res.charCodeAt(res.length - 1) !== CHAR_DOT ||
                    res.charCodeAt(res.length - 2) !== CHAR_DOT) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = '';
                            lastSegmentLength = 0;
                        }
                        else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                    else if (res.length !== 0) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    res += res.length > 0 ? `${separator}..` : '..';
                    lastSegmentLength = 2;
                }
            }
            else {
                if (res.length > 0) {
                    res += `${separator}${path.slice(lastSlash + 1, i)}`;
                }
                else {
                    res = path.slice(lastSlash + 1, i);
                }
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        }
        else if (code === CHAR_DOT && dots !== -1) {
            ++dots;
        }
        else {
            dots = -1;
        }
    }
    return res;
}
function formatExt(ext) {
    return ext ? `${ext[0] === '.' ? '' : '.'}${ext}` : '';
}
function path_format(sep, pathObject) {
    validateObject(pathObject, 'pathObject');
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base ||
        `${pathObject.name || ''}${formatExt(pathObject.ext)}`;
    if (!dir) {
        return base;
    }
    return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
}
const win32 = {
    resolve(...pathSegments) {
        let resolvedDevice = '';
        let resolvedTail = '';
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1; i--) {
            let path;
            if (i >= 0) {
                path = pathSegments[i];
                validateString(path, `paths[${i}]`);
                if (path.length === 0) {
                    continue;
                }
            }
            else if (resolvedDevice.length === 0) {
                path = cwd();
            }
            else {
                path = env[`=${resolvedDevice}`] || cwd();
                if (path === undefined ||
                    (path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() &&
                        path.charCodeAt(2) === CHAR_BACKWARD_SLASH)) {
                    path = `${resolvedDevice}\\`;
                }
            }
            const len = path.length;
            let rootEnd = 0;
            let device = '';
            let isAbsolute = false;
            const code = path.charCodeAt(0);
            if (len === 1) {
                if (isPathSeparator(code)) {
                    rootEnd = 1;
                    isAbsolute = true;
                }
            }
            else if (isPathSeparator(code)) {
                isAbsolute = true;
                if (isPathSeparator(path.charCodeAt(1))) {
                    let j = 2;
                    let last = j;
                    while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j);
                        last = j;
                        while (j < len && isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j < len && j !== last) {
                            last = j;
                            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                                j++;
                            }
                            if (j === len || j !== last) {
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                rootEnd = j;
                            }
                        }
                    }
                }
                else {
                    rootEnd = 1;
                }
            }
            else if (isWindowsDeviceRoot(code) &&
                path.charCodeAt(1) === CHAR_COLON) {
                device = path.slice(0, 2);
                rootEnd = 2;
                if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
                    isAbsolute = true;
                    rootEnd = 3;
                }
            }
            if (device.length > 0) {
                if (resolvedDevice.length > 0) {
                    if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                        continue;
                    }
                }
                else {
                    resolvedDevice = device;
                }
            }
            if (resolvedAbsolute) {
                if (resolvedDevice.length > 0) {
                    break;
                }
            }
            else {
                resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
                resolvedAbsolute = isAbsolute;
                if (isAbsolute && resolvedDevice.length > 0) {
                    break;
                }
            }
        }
        resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isPathSeparator);
        return resolvedAbsolute ?
            `${resolvedDevice}\\${resolvedTail}` :
            `${resolvedDevice}${resolvedTail}` || '.';
    },
    normalize(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return '.';
        }
        let rootEnd = 0;
        let device;
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        if (len === 1) {
            return isPosixPathSeparator(code) ? '\\' : path;
        }
        if (isPathSeparator(code)) {
            isAbsolute = true;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j);
                    last = j;
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            return `\\\\${firstPart}\\${path.slice(last)}\\`;
                        }
                        if (j !== last) {
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                            rootEnd = j;
                        }
                    }
                }
            }
            else {
                rootEnd = 1;
            }
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            device = path.slice(0, 2);
            rootEnd = 2;
            if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
                isAbsolute = true;
                rootEnd = 3;
            }
        }
        let tail = rootEnd < len ?
            normalizeString(path.slice(rootEnd), !isAbsolute, '\\', isPathSeparator) :
            '';
        if (tail.length === 0 && !isAbsolute) {
            tail = '.';
        }
        if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
            tail += '\\';
        }
        if (!isAbsolute && device === undefined && path.includes(':')) {
            if (tail.length >= 2 &&
                isWindowsDeviceRoot(tail.charCodeAt(0)) &&
                tail.charCodeAt(1) === CHAR_COLON) {
                return `.\\${tail}`;
            }
            let index = path.indexOf(':');
            do {
                if (index === len - 1 || isPathSeparator(path.charCodeAt(index + 1))) {
                    return `.\\${tail}`;
                }
            } while ((index = path.indexOf(':', index + 1)) !== -1);
        }
        if (device === undefined) {
            return isAbsolute ? `\\${tail}` : tail;
        }
        return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
    },
    isAbsolute(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return false;
        }
        const code = path.charCodeAt(0);
        return isPathSeparator(code) ||
            (len > 2 &&
                isWindowsDeviceRoot(code) &&
                path.charCodeAt(1) === CHAR_COLON &&
                isPathSeparator(path.charCodeAt(2)));
    },
    join(...paths) {
        if (paths.length === 0) {
            return '.';
        }
        let joined;
        let firstPart;
        for (let i = 0; i < paths.length; ++i) {
            const arg = paths[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                if (joined === undefined) {
                    joined = firstPart = arg;
                }
                else {
                    joined += `\\${arg}`;
                }
            }
        }
        if (joined === undefined) {
            return '.';
        }
        let needsReplace = true;
        let slashCount = 0;
        if (typeof firstPart === 'string' && isPathSeparator(firstPart.charCodeAt(0))) {
            ++slashCount;
            const firstLen = firstPart.length;
            if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) {
                        ++slashCount;
                    }
                    else {
                        needsReplace = false;
                    }
                }
            }
        }
        if (needsReplace) {
            while (slashCount < joined.length &&
                isPathSeparator(joined.charCodeAt(slashCount))) {
                slashCount++;
            }
            if (slashCount >= 2) {
                joined = `\\${joined.slice(slashCount)}`;
            }
        }
        return win32.normalize(joined);
    },
    relative(from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        const fromOrig = win32.resolve(from);
        const toOrig = win32.resolve(to);
        if (fromOrig === toOrig) {
            return '';
        }
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to) {
            return '';
        }
        if (fromOrig.length !== from.length || toOrig.length !== to.length) {
            const fromSplit = fromOrig.split('\\');
            const toSplit = toOrig.split('\\');
            if (fromSplit[fromSplit.length - 1] === '') {
                fromSplit.pop();
            }
            if (toSplit[toSplit.length - 1] === '') {
                toSplit.pop();
            }
            const fromLen = fromSplit.length;
            const toLen = toSplit.length;
            const length = fromLen < toLen ? fromLen : toLen;
            let i;
            for (i = 0; i < length; i++) {
                if (fromSplit[i].toLowerCase() !== toSplit[i].toLowerCase()) {
                    break;
                }
            }
            if (i === 0) {
                return toOrig;
            }
            else if (i === length) {
                if (toLen > length) {
                    return toSplit.slice(i).join('\\');
                }
                if (fromLen > length) {
                    return '..\\'.repeat(fromLen - 1 - i) + '..';
                }
                return '';
            }
            return '..\\'.repeat(fromLen - i) + toSplit.slice(i).join('\\');
        }
        let fromStart = 0;
        while (fromStart < from.length &&
            from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
            fromStart++;
        }
        let fromEnd = from.length;
        while (fromEnd - 1 > fromStart &&
            from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
            fromEnd--;
        }
        const fromLen = fromEnd - fromStart;
        let toStart = 0;
        while (toStart < to.length &&
            to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
            toStart++;
        }
        let toEnd = to.length;
        while (toEnd - 1 > toStart &&
            to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
            toEnd--;
        }
        const toLen = toEnd - toStart;
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
            const fromCode = from.charCodeAt(fromStart + i);
            if (fromCode !== to.charCodeAt(toStart + i)) {
                break;
            }
            else if (fromCode === CHAR_BACKWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        if (i !== length) {
            if (lastCommonSep === -1) {
                return toOrig;
            }
        }
        else {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
                    return toOrig.slice(toStart + i + 1);
                }
                if (i === 2) {
                    return toOrig.slice(toStart + i);
                }
            }
            if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
                    lastCommonSep = i;
                }
                else if (i === 2) {
                    lastCommonSep = 3;
                }
            }
            if (lastCommonSep === -1) {
                lastCommonSep = 0;
            }
        }
        let out = '';
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
                out += out.length === 0 ? '..' : '\\..';
            }
        }
        toStart += lastCommonSep;
        if (out.length > 0) {
            return `${out}${toOrig.slice(toStart, toEnd)}`;
        }
        if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
            ++toStart;
        }
        return toOrig.slice(toStart, toEnd);
    },
    toNamespacedPath(path) {
        if (typeof path !== 'string' || path.length === 0) {
            return path;
        }
        const resolvedPath = win32.resolve(path);
        if (resolvedPath.length <= 2) {
            return path;
        }
        if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
            if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
                const code = resolvedPath.charCodeAt(2);
                if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                }
            }
        }
        else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) &&
            resolvedPath.charCodeAt(1) === CHAR_COLON &&
            resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
            return `\\\\?\\${resolvedPath}`;
        }
        return resolvedPath;
    },
    dirname(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return '.';
        }
        let rootEnd = -1;
        let offset = 0;
        const code = path.charCodeAt(0);
        if (len === 1) {
            return isPathSeparator(code) ? path : '.';
        }
        if (isPathSeparator(code)) {
            rootEnd = offset = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    last = j;
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            return path;
                        }
                        if (j !== last) {
                            rootEnd = offset = j + 1;
                        }
                    }
                }
            }
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
            offset = rootEnd;
        }
        let end = -1;
        let matchedSlash = true;
        for (let i = len - 1; i >= offset; --i) {
            if (isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                matchedSlash = false;
            }
        }
        if (end === -1) {
            if (rootEnd === -1) {
                return '.';
            }
            end = rootEnd;
        }
        return path.slice(0, end);
    },
    basename(path, suffix) {
        if (suffix !== undefined) {
            validateString(suffix, 'suffix');
        }
        validateString(path, 'path');
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (path.length >= 2 &&
            isWindowsDeviceRoot(path.charCodeAt(0)) &&
            path.charCodeAt(1) === CHAR_COLON) {
            start = 2;
        }
        if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
            if (suffix === path) {
                return '';
            }
            let extIdx = suffix.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= start; --i) {
                const code = path.charCodeAt(i);
                if (isPathSeparator(code)) {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        if (code === suffix.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                end = i;
                            }
                        }
                        else {
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            }
            else if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        }
        for (i = path.length - 1; i >= start; --i) {
            if (isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            }
            else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) {
            return '';
        }
        return path.slice(start, end);
    },
    extname(path) {
        validateString(path, 'path');
        let start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        if (path.length >= 2 &&
            path.charCodeAt(1) === CHAR_COLON &&
            isWindowsDeviceRoot(path.charCodeAt(0))) {
            start = startPart = 2;
        }
        for (let i = path.length - 1; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            preDotState === 0 ||
            (preDotState === 1 &&
                startDot === end - 1 &&
                startDot === startPart + 1)) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: path_format.bind(null, '\\'),
    parse(path) {
        validateString(path, 'path');
        const ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        const len = path.length;
        let rootEnd = 0;
        let code = path.charCodeAt(0);
        if (len === 1) {
            if (isPathSeparator(code)) {
                ret.root = ret.dir = path;
                return ret;
            }
            ret.base = ret.name = path;
            return ret;
        }
        if (isPathSeparator(code)) {
            rootEnd = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    last = j;
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            rootEnd = j;
                        }
                        else if (j !== last) {
                            rootEnd = j + 1;
                        }
                    }
                }
            }
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            if (len <= 2) {
                ret.root = ret.dir = path;
                return ret;
            }
            rootEnd = 2;
            if (isPathSeparator(path.charCodeAt(2))) {
                if (len === 3) {
                    ret.root = ret.dir = path;
                    return ret;
                }
                rootEnd = 3;
            }
        }
        if (rootEnd > 0) {
            ret.root = path.slice(0, rootEnd);
        }
        let startDot = -1;
        let startPart = rootEnd;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        let preDotState = 0;
        for (; i >= rootEnd; --i) {
            code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                preDotState = -1;
            }
        }
        if (end !== -1) {
            if (startDot === -1 ||
                preDotState === 0 ||
                (preDotState === 1 &&
                    startDot === end - 1 &&
                    startDot === startPart + 1)) {
                ret.base = ret.name = path.slice(startPart, end);
            }
            else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
                ret.ext = path.slice(startDot, end);
            }
        }
        if (startPart > 0 && startPart !== rootEnd) {
            ret.dir = path.slice(0, startPart - 1);
        }
        else {
            ret.dir = ret.root;
        }
        return ret;
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null
};
const posixCwd = (() => {
    if (platformIsWin32) {
        const regexp = /\\/g;
        return () => {
            const cwd$1 = cwd().replace(regexp, '/');
            return cwd$1.slice(cwd$1.indexOf('/'));
        };
    }
    return () => cwd();
})();
const path_posix = {
    resolve(...pathSegments) {
        let resolvedPath = '';
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
            const path = pathSegments[i];
            validateString(path, `paths[${i}]`);
            if (path.length === 0) {
                continue;
            }
            resolvedPath = `${path}/${resolvedPath}`;
            resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        if (!resolvedAbsolute) {
            const cwd = posixCwd();
            resolvedPath = `${cwd}/${resolvedPath}`;
            resolvedAbsolute =
                cwd.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator);
        if (resolvedAbsolute) {
            return `/${resolvedPath}`;
        }
        return resolvedPath.length > 0 ? resolvedPath : '.';
    },
    normalize(path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
        path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator);
        if (path.length === 0) {
            if (isAbsolute) {
                return '/';
            }
            return trailingSeparator ? './' : '.';
        }
        if (trailingSeparator) {
            path += '/';
        }
        return isAbsolute ? `/${path}` : path;
    },
    isAbsolute(path) {
        validateString(path, 'path');
        return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    },
    join(...paths) {
        if (paths.length === 0) {
            return '.';
        }
        const path = [];
        for (let i = 0; i < paths.length; ++i) {
            const arg = paths[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                path.push(arg);
            }
        }
        if (path.length === 0) {
            return '.';
        }
        return path_posix.normalize(path.join('/'));
    },
    relative(from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        from = path_posix.resolve(from);
        to = path_posix.resolve(to);
        if (from === to) {
            return '';
        }
        const fromStart = 1;
        const fromEnd = from.length;
        const fromLen = fromEnd - fromStart;
        const toStart = 1;
        const toLen = to.length - toStart;
        const length = (fromLen < toLen ? fromLen : toLen);
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
            const fromCode = from.charCodeAt(fromStart + i);
            if (fromCode !== to.charCodeAt(toStart + i)) {
                break;
            }
            else if (fromCode === CHAR_FORWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
                    return to.slice(toStart + i + 1);
                }
                if (i === 0) {
                    return to.slice(toStart + i);
                }
            }
            else if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
                    lastCommonSep = i;
                }
                else if (i === 0) {
                    lastCommonSep = 0;
                }
            }
        }
        let out = '';
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                out += out.length === 0 ? '..' : '/..';
            }
        }
        return `${out}${to.slice(toStart + lastCommonSep)}`;
    },
    toNamespacedPath(path) {
        return path;
    },
    dirname(path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let end = -1;
        let matchedSlash = true;
        for (let i = path.length - 1; i >= 1; --i) {
            if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                matchedSlash = false;
            }
        }
        if (end === -1) {
            return hasRoot ? '/' : '.';
        }
        if (hasRoot && end === 1) {
            return '//';
        }
        return path.slice(0, end);
    },
    basename(path, suffix) {
        if (suffix !== undefined) {
            validateString(suffix, 'suffix');
        }
        validateString(path, 'path');
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
            if (suffix === path) {
                return '';
            }
            let extIdx = suffix.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
                const code = path.charCodeAt(i);
                if (code === CHAR_FORWARD_SLASH) {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        if (code === suffix.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                end = i;
                            }
                        }
                        else {
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            }
            else if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        }
        for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            }
            else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) {
            return '';
        }
        return path.slice(start, end);
    },
    extname(path) {
        validateString(path, 'path');
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        for (let i = path.length - 1; i >= 0; --i) {
            const char = path[i];
            if (char === '/') {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (char === '.') {
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            preDotState === 0 ||
            (preDotState === 1 &&
                startDot === end - 1 &&
                startDot === startPart + 1)) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: path_format.bind(null, '/'),
    parse(path) {
        validateString(path, 'path');
        const ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        }
        else {
            start = 0;
        }
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        let preDotState = 0;
        for (; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                preDotState = -1;
            }
        }
        if (end !== -1) {
            const start = startPart === 0 && isAbsolute ? 1 : startPart;
            if (startDot === -1 ||
                preDotState === 0 ||
                (preDotState === 1 &&
                    startDot === end - 1 &&
                    startDot === startPart + 1)) {
                ret.base = ret.name = path.slice(start, end);
            }
            else {
                ret.name = path.slice(start, startDot);
                ret.base = path.slice(start, end);
                ret.ext = path.slice(startDot, end);
            }
        }
        if (startPart > 0) {
            ret.dir = path.slice(0, startPart - 1);
        }
        else if (isAbsolute) {
            ret.dir = '/';
        }
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
path_posix.win32 = win32.win32 = win32;
path_posix.posix = win32.posix = path_posix;
const normalize = (platformIsWin32 ? win32.normalize : path_posix.normalize);
const isAbsolute = (platformIsWin32 ? win32.isAbsolute : path_posix.isAbsolute);
const join = (platformIsWin32 ? win32.join : path_posix.join);
const resolve = (platformIsWin32 ? win32.resolve : path_posix.resolve);
const relative = (platformIsWin32 ? win32.relative : path_posix.relative);
const path_dirname = (platformIsWin32 ? win32.dirname : path_posix.dirname);
const basename = (platformIsWin32 ? win32.basename : path_posix.basename);
const extname = (platformIsWin32 ? win32.extname : path_posix.extname);
const parse = (platformIsWin32 ? win32.parse : path_posix.parse);
const sep = (platformIsWin32 ? win32.sep : path_posix.sep);



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/uri.js






const _schemePattern = /^\w[\w\d+.-]*$/;
const _singleSlashStart = /^\//;
const _doubleSlashStart = /^\/\//;
function _validateUri(ret, _strict) {
    if (!ret.scheme && _strict) {
        throw ( new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`
        ));
    }
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw ( new Error('[UriError]: Scheme contains illegal characters.'));
    }
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw ( new Error(
                    '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                ));
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw ( new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                ));
            }
        }
    }
}
function _schemeFix(scheme, _strict) {
    if (!scheme && !_strict) {
        return 'file';
    }
    return scheme;
}
function _referenceResolution(scheme, path) {
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
const _empty = '';
const _slash = '/';
const _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
class uri_URI {
    static isUri(thing) {
        if (thing instanceof uri_URI) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string'
            && typeof thing.fsPath === 'string'
            && typeof thing.with === 'function'
            && typeof thing.toString === 'function';
    }
    constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
        }
        else {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    get fsPath() {
        return uriToFsPath(this, false);
    }
    with(change) {
        if (!change) {
            return this;
        }
        let { scheme, authority, path, query, fragment } = change;
        if (scheme === undefined) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return ( new Uri(scheme, authority, path, query, fragment));
    }
    static parse(value, _strict = false) {
        const match = _regexp.exec(value);
        if (!match) {
            return ( new Uri(_empty, _empty, _empty, _empty, _empty));
        }
        return ( new Uri(
            match[2] || _empty,
            percentDecode(match[4] || _empty),
            percentDecode(match[5] || _empty),
            percentDecode(match[7] || _empty),
            percentDecode(match[9] || _empty),
            _strict
        ));
    }
    static file(path) {
        let authority = _empty;
        if (platform_isWindows) {
            path = path.replace(/\\/g, _slash);
        }
        if (path[0] === _slash && path[1] === _slash) {
            const idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return ( new Uri('file', authority, path, _empty, _empty));
    }
    static from(components, strict) {
        const result = ( new Uri(
            components.scheme,
            components.authority,
            components.path,
            components.query,
            components.fragment,
            strict
        ));
        return result;
    }
    static joinPath(uri, ...pathFragment) {
        if (!uri.path) {
            throw ( new Error(`[UriError]: cannot call joinPath on URI without path`));
        }
        let newPath;
        if (platform_isWindows && uri.scheme === 'file') {
            newPath = uri_URI.file(win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
        }
        else {
            newPath = path_posix.join(uri.path, ...pathFragment);
        }
        return uri.with({ path: newPath });
    }
    toString(skipEncoding = false) {
        return _asFormatted(this, skipEncoding);
    }
    toJSON() {
        return this;
    }
    static revive(data) {
        if (!data) {
            return data;
        }
        else if (data instanceof uri_URI) {
            return data;
        }
        else {
            const result = ( new Uri(data));
            result._formatted = data.external ?? null;
            result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
            return result;
        }
    }
    [Symbol.for('debug.description')]() {
        return `URI(${( this.toString())})`;
    }
}
function isUriComponents(thing) {
    if (!thing || typeof thing !== 'object') {
        return false;
    }
    return typeof thing.scheme === 'string'
        && (typeof thing.authority === 'string' || typeof thing.authority === 'undefined')
        && (typeof thing.path === 'string' || typeof thing.path === 'undefined')
        && (typeof thing.query === 'string' || typeof thing.query === 'undefined')
        && (typeof thing.fragment === 'string' || typeof thing.fragment === 'undefined');
}
const _pathSepMarker = platform_isWindows ? 1 : undefined;
class Uri extends uri_URI {
    constructor() {
        super(...arguments);
        this._formatted = null;
        this._fsPath = null;
    }
    get fsPath() {
        if (!this._fsPath) {
            this._fsPath = uriToFsPath(this, false);
        }
        return this._fsPath;
    }
    toString(skipEncoding = false) {
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            return _asFormatted(this, true);
        }
    }
    toJSON() {
        const res = {
            $mid: MarshalledId.Uri
        };
        if (this._fsPath) {
            res.fsPath = this._fsPath;
            res._sep = _pathSepMarker;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    }
}
const encodeTable = {
    [charCode_CharCode.Colon]: '%3A',
    [charCode_CharCode.Slash]: '%2F',
    [charCode_CharCode.QuestionMark]: '%3F',
    [charCode_CharCode.Hash]: '%23',
    [charCode_CharCode.OpenSquareBracket]: '%5B',
    [charCode_CharCode.CloseSquareBracket]: '%5D',
    [charCode_CharCode.AtSign]: '%40',
    [charCode_CharCode.ExclamationMark]: '%21',
    [charCode_CharCode.DollarSign]: '%24',
    [charCode_CharCode.Ampersand]: '%26',
    [charCode_CharCode.SingleQuote]: '%27',
    [charCode_CharCode.OpenParen]: '%28',
    [charCode_CharCode.CloseParen]: '%29',
    [charCode_CharCode.Asterisk]: '%2A',
    [charCode_CharCode.Plus]: '%2B',
    [charCode_CharCode.Comma]: '%2C',
    [charCode_CharCode.Semicolon]: '%3B',
    [charCode_CharCode.Equals]: '%3D',
    [charCode_CharCode.Space]: '%20',
};
function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
    let res = undefined;
    let nativeEncodePos = -1;
    for (let pos = 0; pos < uriComponent.length; pos++) {
        const code = uriComponent.charCodeAt(pos);
        if ((code >= charCode_CharCode.a && code <= charCode_CharCode.z)
            || (code >= charCode_CharCode.A && code <= charCode_CharCode.Z)
            || (code >= charCode_CharCode.Digit0 && code <= charCode_CharCode.Digit9)
            || code === charCode_CharCode.Dash
            || code === charCode_CharCode.Period
            || code === charCode_CharCode.Underline
            || code === charCode_CharCode.Tilde
            || (isPath && code === charCode_CharCode.Slash)
            || (isAuthority && code === charCode_CharCode.OpenSquareBracket)
            || (isAuthority && code === charCode_CharCode.CloseSquareBracket)
            || (isAuthority && code === charCode_CharCode.Colon)) {
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            const escaped = encodeTable[code];
            if (escaped !== undefined) {
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    let res = undefined;
    for (let pos = 0; pos < path.length; pos++) {
        const code = path.charCodeAt(pos);
        if (code === charCode_CharCode.Hash || code === charCode_CharCode.QuestionMark) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
function uriToFsPath(uri, keepDriveLetterCasing) {
    let value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        value = `//${uri.authority}${uri.path}`;
    }
    else if (uri.path.charCodeAt(0) === charCode_CharCode.Slash
        && (uri.path.charCodeAt(1) >= charCode_CharCode.A && uri.path.charCodeAt(1) <= charCode_CharCode.Z || uri.path.charCodeAt(1) >= charCode_CharCode.a && uri.path.charCodeAt(1) <= charCode_CharCode.z)
        && uri.path.charCodeAt(2) === charCode_CharCode.Colon) {
        if (!keepDriveLetterCasing) {
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
        }
        else {
            value = uri.path.substr(1);
        }
    }
    else {
        value = uri.path;
    }
    if (platform_isWindows) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
function _asFormatted(uri, skipEncoding) {
    const encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    let res = '';
    let { scheme, authority, path, query, fragment } = uri;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        let idx = authority.indexOf('@');
        if (idx !== -1) {
            const userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.lastIndexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false, false);
            }
            else {
                res += encoder(userinfo.substr(0, idx), false, false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false, true);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.lastIndexOf(':');
        if (idx === -1) {
            res += encoder(authority, false, true);
        }
        else {
            res += encoder(authority.substr(0, idx), false, true);
            res += authority.substr(idx);
        }
    }
    if (path) {
        if (path.length >= 3 && path.charCodeAt(0) === charCode_CharCode.Slash && path.charCodeAt(2) === charCode_CharCode.Colon) {
            const code = path.charCodeAt(1);
            if (code >= charCode_CharCode.A && code <= charCode_CharCode.Z) {
                path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`;
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === charCode_CharCode.Colon) {
            const code = path.charCodeAt(0);
            if (code >= charCode_CharCode.A && code <= charCode_CharCode.Z) {
                path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`;
            }
        }
        res += encoder(path, true, false);
    }
    if (query) {
        res += '?';
        res += encoder(query, false, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
    }
    return res;
}
function decodeURIComponentGraceful(str) {
    try {
        return decodeURIComponent(str);
    }
    catch {
        if (str.length > 3) {
            return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
        }
        else {
            return str;
        }
    }
}
const _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(str) {
    if (!str.match(_rEncodedAsHex)) {
        return str;
    }
    return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/arraysFind.js


function findLast(array, predicate, fromIndex = array.length - 1) {
    const idx = findLastIdx(array, predicate, fromIndex);
    if (idx === -1) {
        return undefined;
    }
    return array[idx];
}
function findLastIdx(array, predicate, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        const element = array[i];
        if (predicate(element)) {
            return i;
        }
    }
    return -1;
}
function findLastMonotonous(array, predicate) {
    const idx = findLastIdxMonotonous(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function findLastIdxMonotonous(array, predicate, startIdx = 0, endIdxEx = array.length) {
    let i = startIdx;
    let j = endIdxEx;
    while (i < j) {
        const k = Math.floor((i + j) / 2);
        if (predicate(array[k])) {
            i = k + 1;
        }
        else {
            j = k;
        }
    }
    return i - 1;
}
function findFirstMonotonous(array, predicate) {
    const idx = arraysFind_findFirstIdxMonotonousOrArrLen(array, predicate);
    return idx === array.length ? undefined : array[idx];
}
function arraysFind_findFirstIdxMonotonousOrArrLen(array, predicate, startIdx = 0, endIdxEx = array.length) {
    let i = startIdx;
    let j = endIdxEx;
    while (i < j) {
        const k = Math.floor((i + j) / 2);
        if (predicate(array[k])) {
            j = k;
        }
        else {
            i = k + 1;
        }
    }
    return i;
}
class MonotonousArray {
    static { this.assertInvariants = false; }
    constructor(_array) {
        this._array = _array;
        this._findLastMonotonousLastIdx = 0;
    }
    findLastMonotonous(predicate) {
        if (MonotonousArray.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const item of this._array) {
                    if (this._prevFindLastPredicate(item) && !predicate(item)) {
                        throw ( new Error(
                            'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.'
                        ));
                    }
                }
            }
            this._prevFindLastPredicate = predicate;
        }
        const idx = findLastIdxMonotonous(this._array, predicate, this._findLastMonotonousLastIdx);
        this._findLastMonotonousLastIdx = idx + 1;
        return idx === -1 ? undefined : this._array[idx];
    }
}
function findFirstMax(array, comparator) {
    if (array.length === 0) {
        return undefined;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (comparator(item, max) > 0) {
            max = item;
        }
    }
    return max;
}
function findLastMax(array, comparator) {
    if (array.length === 0) {
        return undefined;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (comparator(item, max) >= 0) {
            max = item;
        }
    }
    return max;
}
function findFirstMin(array, comparator) {
    return findFirstMax(array, (a, b) => -comparator(a, b));
}
function findMaxIdx(array, comparator) {
    if (array.length === 0) {
        return -1;
    }
    let maxIdx = 0;
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (comparator(item, array[maxIdx]) > 0) {
            maxIdx = i;
        }
    }
    return maxIdx;
}
function mapFindFirst(items, mapFn) {
    for (const value of items) {
        const mapped = mapFn(value);
        if (mapped !== undefined) {
            return mapped;
        }
    }
    return undefined;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/errors.js


class ErrorHandler {
    constructor() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(() => {
                if (e.stack) {
                    if (ErrorNoTelemetry.isErrorNoTelemetry(e)) {
                        throw ( new ErrorNoTelemetry(e.message + '\n\n' + e.stack));
                    }
                    throw ( new Error(e.message + '\n\n' + e.stack));
                }
                throw e;
            }, 0);
        };
    }
    addListener(listener) {
        this.listeners.push(listener);
        return () => {
            this._removeListener(listener);
        };
    }
    emit(e) {
        this.listeners.forEach((listener) => {
            listener(e);
        });
    }
    _removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
        this.unexpectedErrorHandler = newUnexpectedErrorHandler;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    }
    onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
    }
}
const errorHandler = ( new ErrorHandler());
function setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
    errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
}
function onBugIndicatingError(e) {
    errorHandler.onUnexpectedError(e);
    return undefined;
}
function errors_onUnexpectedError(e) {
    if (!isCancellationError(e)) {
        errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
function onUnexpectedExternalError(e) {
    if (!isCancellationError(e)) {
        errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        const { name, message, cause } = error;
        const stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name,
            message,
            stack,
            noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(error),
            cause: cause ? transformErrorForSerialization(cause) : undefined,
            code: error.code
        };
    }
    return error;
}
function transformErrorFromSerialization(data) {
    let error;
    if (data.noTelemetry) {
        error = ( new ErrorNoTelemetry());
    }
    else {
        error = ( new Error());
        error.name = data.name;
    }
    error.message = data.message;
    error.stack = data.stack;
    if (data.code) {
        error.code = data.code;
    }
    if (data.cause) {
        error.cause = transformErrorFromSerialization(data.cause);
    }
    return error;
}
const canceledName = 'Canceled';
function isCancellationError(error) {
    if (error instanceof errors_CancellationError) {
        return true;
    }
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
class errors_CancellationError extends Error {
    constructor() {
        super(canceledName);
        this.name = this.message;
    }
}
class PendingMigrationError extends Error {
    static { this._name = 'PendingMigrationError'; }
    static is(error) {
        return error instanceof PendingMigrationError || (error instanceof Error && error.name === PendingMigrationError._name);
    }
    constructor(message) {
        super(message);
        this.name = PendingMigrationError._name;
    }
}
function canceled() {
    const error = ( new Error(canceledName));
    error.name = error.message;
    return error;
}
function illegalArgument(name) {
    if (name) {
        return ( new Error(`Illegal argument: ${name}`));
    }
    else {
        return ( new Error('Illegal argument'));
    }
}
function illegalState(name) {
    if (name) {
        return ( new Error(`Illegal state: ${name}`));
    }
    else {
        return ( new Error('Illegal state'));
    }
}
class ReadonlyError extends TypeError {
    constructor(name) {
        super(name ? `${name} is read-only and cannot be changed` : 'Cannot change read-only property');
    }
}
function getErrorMessage(err) {
    if (!err) {
        return 'Error';
    }
    if (err.message) {
        return err.message;
    }
    if (err.stack) {
        return err.stack.split('\n')[0];
    }
    return String(err);
}
class NotImplementedError extends Error {
    constructor(message) {
        super('NotImplemented');
        if (message) {
            this.message = message;
        }
    }
}
class NotSupportedError extends Error {
    constructor(message) {
        super('NotSupported');
        if (message) {
            this.message = message;
        }
    }
}
class ErrorNoTelemetry extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'CodeExpectedError';
    }
    static fromError(err) {
        if (err instanceof ErrorNoTelemetry) {
            return err;
        }
        const result = ( new ErrorNoTelemetry());
        result.message = err.message;
        result.stack = err.stack;
        return result;
    }
    static isErrorNoTelemetry(err) {
        return err.name === 'CodeExpectedError';
    }
}
class errors_BugIndicatingError extends Error {
    constructor(message) {
        super(message || 'An unexpected bug occurred.');
        Object.setPrototypeOf(this, errors_BugIndicatingError.prototype);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/arrays.js




function tail(arr) {
    if (arr.length === 0) {
        throw ( new Error('Invalid tail call'));
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function arrays_equals(one, other, itemEquals = (a, b) => a === b) {
    if (one === other) {
        return true;
    }
    if (!one || !other) {
        return false;
    }
    if (one.length !== other.length) {
        return false;
    }
    for (let i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}
function removeFastWithoutKeepingOrder(array, index) {
    const last = array.length - 1;
    if (index < last) {
        array[index] = array[last];
    }
    array.pop();
}
function binarySearch(array, key, comparator) {
    return binarySearch2(array.length, i => comparator(array[i], key));
}
function binarySearch2(length, compareToKey) {
    let low = 0, high = length - 1;
    while (low <= high) {
        const mid = ((low + high) / 2) | 0;
        const comp = compareToKey(mid);
        if (comp < 0) {
            low = mid + 1;
        }
        else if (comp > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -(low + 1);
}
function quickSelect(nth, data, compare) {
    nth = nth | 0;
    if (nth >= data.length) {
        throw ( new TypeError('invalid index'));
    }
    const pivotValue = data[Math.floor(data.length * Math.random())];
    const lower = [];
    const higher = [];
    const pivots = [];
    for (const value of data) {
        const val = compare(value, pivotValue);
        if (val < 0) {
            lower.push(value);
        }
        else if (val > 0) {
            higher.push(value);
        }
        else {
            pivots.push(value);
        }
    }
    if (nth < lower.length) {
        return quickSelect(nth, lower, compare);
    }
    else if (nth < lower.length + pivots.length) {
        return pivots[0];
    }
    else {
        return quickSelect(nth - (lower.length + pivots.length), higher, compare);
    }
}
function groupBy(data, compare) {
    const result = [];
    let currentGroup = undefined;
    for (const element of data.slice(0).sort(compare)) {
        if (!currentGroup || compare(currentGroup[0], element) !== 0) {
            currentGroup = [element];
            result.push(currentGroup);
        }
        else {
            currentGroup.push(element);
        }
    }
    return result;
}
function* groupAdjacentBy(items, shouldBeGrouped) {
    let currentGroup;
    let last;
    for (const item of items) {
        if (last !== undefined && shouldBeGrouped(last, item)) {
            currentGroup.push(item);
        }
        else {
            if (currentGroup) {
                yield currentGroup;
            }
            currentGroup = [item];
        }
        last = item;
    }
    if (currentGroup) {
        yield currentGroup;
    }
}
function forEachAdjacent(arr, f) {
    for (let i = 0; i <= arr.length; i++) {
        f(i === 0 ? undefined : arr[i - 1], i === arr.length ? undefined : arr[i]);
    }
}
function forEachWithNeighbors(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        f(i === 0 ? undefined : arr[i - 1], arr[i], i + 1 === arr.length ? undefined : arr[i + 1]);
    }
}
function concatArrays(...arrays) {
    return [].concat(...arrays);
}
function sortedDiff(before, after, compare) {
    const result = [];
    function pushSplice(start, deleteCount, toInsert) {
        if (deleteCount === 0 && toInsert.length === 0) {
            return;
        }
        const latest = result[result.length - 1];
        if (latest && latest.start + latest.deleteCount === start) {
            latest.deleteCount += deleteCount;
            latest.toInsert.push(...toInsert);
        }
        else {
            result.push({ start, deleteCount, toInsert });
        }
    }
    let beforeIdx = 0;
    let afterIdx = 0;
    while (true) {
        if (beforeIdx === before.length) {
            pushSplice(beforeIdx, 0, after.slice(afterIdx));
            break;
        }
        if (afterIdx === after.length) {
            pushSplice(beforeIdx, before.length - beforeIdx, []);
            break;
        }
        const beforeElement = before[beforeIdx];
        const afterElement = after[afterIdx];
        const n = compare(beforeElement, afterElement);
        if (n === 0) {
            beforeIdx += 1;
            afterIdx += 1;
        }
        else if (n < 0) {
            pushSplice(beforeIdx, 1, []);
            beforeIdx += 1;
        }
        else if (n > 0) {
            pushSplice(beforeIdx, 0, [afterElement]);
            afterIdx += 1;
        }
    }
    return result;
}
function delta(before, after, compare) {
    const splices = sortedDiff(before, after, compare);
    const removed = [];
    const added = [];
    for (const splice of splices) {
        removed.push(...before.slice(splice.start, splice.start + splice.deleteCount));
        added.push(...splice.toInsert);
    }
    return { removed, added };
}
function arrays_top(array, compare, n) {
    if (n === 0) {
        return [];
    }
    const result = array.slice(0, n).sort(compare);
    topStep(array, compare, result, n, array.length);
    return result;
}
function topStep(array, compare, result, i, m) {
    for (const n = result.length; i < m; i++) {
        const element = array[i];
        if (compare(element, result[n - 1]) < 0) {
            result.pop();
            const j = findFirstIdxMonotonousOrArrLen(result, e => compare(element, e) < 0);
            result.splice(j, 0, element);
        }
    }
}
function coalesce(array) {
    return array.filter((e) => !!e);
}
function coalesceInPlace(array) {
    let to = 0;
    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
            array[to] = array[i];
            to += 1;
        }
    }
    array.length = to;
}
function move(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}
function isFalsyOrEmpty(obj) {
    return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
    return Array.isArray(obj) && obj.length > 0;
}
function distinct(array, keyFn = value => value) {
    const seen = ( new Set());
    return array.filter(element => {
        const key = keyFn(element);
        if (( seen.has(key))) {
            return false;
        }
        seen.add(key);
        return true;
    });
}
function uniqueFilter(keyFn) {
    const seen = ( new Set());
    return element => {
        const key = keyFn(element);
        if (( seen.has(key))) {
            return false;
        }
        seen.add(key);
        return true;
    };
}
function commonPrefixLength(one, other, equals = (a, b) => a === b) {
    let result = 0;
    for (let i = 0, len = Math.min(one.length, other.length); i < len && equals(one[i], other[i]); i++) {
        result++;
    }
    return result;
}
function range(arg, to) {
    let from = typeof to === 'number' ? arg : 0;
    if (typeof to === 'number') {
        from = arg;
    }
    else {
        from = 0;
        to = arg;
    }
    const result = [];
    if (from <= to) {
        for (let i = from; i < to; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = from; i > to; i--) {
            result.push(i);
        }
    }
    return result;
}
function index(array, indexer, mapper) {
    return array.reduce((r, t) => {
        r[indexer(t)] = mapper ? mapper(t) : t;
        return r;
    }, Object.create(null));
}
function insert(array, element) {
    array.push(element);
    return () => remove(array, element);
}
function remove(array, element) {
    const index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
        return element;
    }
    return undefined;
}
function arrays_arrayInsert(target, insertIndex, insertArr) {
    const before = target.slice(0, insertIndex);
    const after = target.slice(insertIndex);
    return before.concat(insertArr, after);
}
function shuffle(array, _seed) {
    let rand;
    if (typeof _seed === 'number') {
        let seed = _seed;
        rand = () => {
            const x = Math.sin(seed++) * 179426549;
            return x - Math.floor(x);
        };
    }
    else {
        rand = Math.random;
    }
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rand() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function pushToStart(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.unshift(value);
    }
}
function pushToEnd(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.push(value);
    }
}
function pushMany(arr, items) {
    for (const item of items) {
        arr.push(item);
    }
}
function mapArrayOrNot(items, fn) {
    return Array.isArray(items) ?
        ( items.map(fn)) :
        fn(items);
}
function asArray(x) {
    return Array.isArray(x) ? x : [x];
}
function insertInto(array, start, newItems) {
    const startIdx = getActualStartIndex(array, start);
    const originalLength = array.length;
    const newItemsLength = newItems.length;
    array.length = originalLength + newItemsLength;
    for (let i = originalLength - 1; i >= startIdx; i--) {
        array[i + newItemsLength] = array[i];
    }
    for (let i = 0; i < newItemsLength; i++) {
        array[i + startIdx] = newItems[i];
    }
}
function splice(array, start, deleteCount, newItems) {
    const index = getActualStartIndex(array, start);
    let result = array.splice(index, deleteCount);
    if (result === undefined) {
        result = [];
    }
    insertInto(array, index, newItems);
    return result;
}
function getActualStartIndex(array, start) {
    return start < 0 ? Math.max(start + array.length, 0) : Math.min(start, array.length);
}
var CompareResult;
(function (CompareResult) {
    function isLessThan(result) {
        return result < 0;
    }
    CompareResult.isLessThan = isLessThan;
    function isLessThanOrEqual(result) {
        return result <= 0;
    }
    CompareResult.isLessThanOrEqual = isLessThanOrEqual;
    function isGreaterThan(result) {
        return result > 0;
    }
    CompareResult.isGreaterThan = isGreaterThan;
    function isNeitherLessOrGreaterThan(result) {
        return result === 0;
    }
    CompareResult.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
    CompareResult.greaterThan = 1;
    CompareResult.lessThan = -1;
    CompareResult.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(selector, comparator) {
    return (a, b) => comparator(selector(a), selector(b));
}
function tieBreakComparators(...comparators) {
    return (item1, item2) => {
        for (const comparator of comparators) {
            const result = comparator(item1, item2);
            if (!CompareResult.isNeitherLessOrGreaterThan(result)) {
                return result;
            }
        }
        return CompareResult.neitherLessOrGreaterThan;
    };
}
const numberComparator = (a, b) => a - b;
const booleanComparator = (a, b) => numberComparator(a ? 1 : 0, b ? 1 : 0);
function reverseOrder(comparator) {
    return (a, b) => -comparator(a, b);
}
function compareUndefinedSmallest(comparator) {
    return (a, b) => {
        if (a === undefined) {
            return b === undefined ? CompareResult.neitherLessOrGreaterThan : CompareResult.lessThan;
        }
        else if (b === undefined) {
            return CompareResult.greaterThan;
        }
        return comparator(a, b);
    };
}
class ArrayQueue {
    constructor(items) {
        this.firstIdx = 0;
        this.items = items;
        this.lastIdx = this.items.length - 1;
    }
    get length() {
        return this.lastIdx - this.firstIdx + 1;
    }
    takeWhile(predicate) {
        let startIdx = this.firstIdx;
        while (startIdx < this.items.length && predicate(this.items[startIdx])) {
            startIdx++;
        }
        const result = startIdx === this.firstIdx ? null : this.items.slice(this.firstIdx, startIdx);
        this.firstIdx = startIdx;
        return result;
    }
    takeFromEndWhile(predicate) {
        let endIdx = this.lastIdx;
        while (endIdx >= 0 && predicate(this.items[endIdx])) {
            endIdx--;
        }
        const result = endIdx === this.lastIdx ? null : this.items.slice(endIdx + 1, this.lastIdx + 1);
        this.lastIdx = endIdx;
        return result;
    }
    peek() {
        if (this.length === 0) {
            return undefined;
        }
        return this.items[this.firstIdx];
    }
    peekLast() {
        if (this.length === 0) {
            return undefined;
        }
        return this.items[this.lastIdx];
    }
    dequeue() {
        const result = this.items[this.firstIdx];
        this.firstIdx++;
        return result;
    }
    removeLast() {
        const result = this.items[this.lastIdx];
        this.lastIdx--;
        return result;
    }
    takeCount(count) {
        const result = this.items.slice(this.firstIdx, this.firstIdx + count);
        this.firstIdx += count;
        return result;
    }
}
class CallbackIterable {
    static { this.empty = ( new CallbackIterable(_callback => { })); }
    constructor(
    iterate) {
        this.iterate = iterate;
    }
    forEach(handler) {
        this.iterate(item => { handler(item); return true; });
    }
    toArray() {
        const result = [];
        this.iterate(item => { result.push(item); return true; });
        return result;
    }
    filter(predicate) {
        return ( new CallbackIterable(cb => this.iterate(item => predicate(item) ? cb(item) : true)));
    }
    map(mapFn) {
        return ( new CallbackIterable(cb => this.iterate(item => cb(mapFn(item)))));
    }
    some(predicate) {
        let result = false;
        this.iterate(item => { result = predicate(item); return !result; });
        return result;
    }
    findFirst(predicate) {
        let result;
        this.iterate(item => {
            if (predicate(item)) {
                result = item;
                return false;
            }
            return true;
        });
        return result;
    }
    findLast(predicate) {
        let result;
        this.iterate(item => {
            if (predicate(item)) {
                result = item;
            }
            return true;
        });
        return result;
    }
    findLastMaxBy(comparator) {
        let result;
        let first = true;
        this.iterate(item => {
            if (first || CompareResult.isGreaterThan(comparator(item, result))) {
                first = false;
                result = item;
            }
            return true;
        });
        return result;
    }
}
class Permutation {
    constructor(_indexMap) {
        this._indexMap = _indexMap;
    }
    static createSortPermutation(arr, compareFn) {
        const sortIndices = Array.from(( arr.keys())).sort((index1, index2) => compareFn(arr[index1], arr[index2]));
        return ( new Permutation(sortIndices));
    }
    apply(arr) {
        return ( arr.map((_, index) => arr[this._indexMap[index]]));
    }
    inverse() {
        const inverseIndexMap = this._indexMap.slice();
        for (let i = 0; i < this._indexMap.length; i++) {
            inverseIndexMap[this._indexMap[i]] = i;
        }
        return ( new Permutation(inverseIndexMap));
    }
}
async function findAsync(array, predicate) {
    const results = await Promise.all(( array.map(
        async (element, index) => ({ element, ok: await predicate(element, index) })
    )));
    return results.find(r => r.ok)?.element;
}
function sumBy(array, selector) {
    return array.reduce((acc, value) => acc + selector(value), 0);
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/collections.js


var _a;
function collections_groupBy(data, groupFn) {
    const result = Object.create(null);
    for (const element of data) {
        const key = groupFn(element);
        let target = result[key];
        if (!target) {
            target = result[key] = [];
        }
        target.push(element);
    }
    return result;
}
function groupByMap(data, groupFn) {
    const result = ( new Map());
    for (const element of data) {
        const key = groupFn(element);
        let target = result.get(key);
        if (!target) {
            target = [];
            result.set(key, target);
        }
        target.push(element);
    }
    return result;
}
function collections_diffSets(before, after) {
    const removed = [];
    const added = [];
    for (const element of before) {
        if (!( after.has(element))) {
            removed.push(element);
        }
    }
    for (const element of after) {
        if (!( before.has(element))) {
            added.push(element);
        }
    }
    return { removed, added };
}
function diffMaps(before, after) {
    const removed = [];
    const added = [];
    for (const [index, value] of before) {
        if (!( after.has(index))) {
            removed.push(value);
        }
    }
    for (const [index, value] of after) {
        if (!( before.has(index))) {
            added.push(value);
        }
    }
    return { removed, added };
}
function intersection(setA, setB) {
    const result = ( new Set());
    for (const elem of setB) {
        if (( setA.has(elem))) {
            result.add(elem);
        }
    }
    return result;
}
class SetWithKey {
    static { _a = Symbol.toStringTag; }
    constructor(values, toKey) {
        this.toKey = toKey;
        this._map = ( new Map());
        this[_a] = 'SetWithKey';
        for (const value of values) {
            this.add(value);
        }
    }
    get size() {
        return this._map.size;
    }
    add(value) {
        const key = this.toKey(value);
        this._map.set(key, value);
        return this;
    }
    delete(value) {
        return this._map.delete(this.toKey(value));
    }
    has(value) {
        return ( this._map.has(this.toKey(value)));
    }
    *entries() {
        for (const entry of ( this._map.values())) {
            yield [entry, entry];
        }
    }
    keys() {
        return ( this.values());
    }
    *values() {
        for (const entry of ( this._map.values())) {
            yield entry;
        }
    }
    clear() {
        this._map.clear();
    }
    forEach(callbackfn, thisArg) {
        this._map.forEach(entry => callbackfn.call(thisArg, entry, entry, this));
    }
    [Symbol.iterator]() {
        return ( this.values());
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/map.js


var map_a, _b, _c;
function getOrSet(map, key, value) {
    let result = map.get(key);
    if (result === undefined) {
        result = value;
        map.set(key, result);
    }
    return result;
}
class ResourceMapEntry {
    constructor(uri, value) {
        this.uri = uri;
        this.value = value;
    }
}
function isEntries(arg) {
    return Array.isArray(arg);
}
class ResourceMap {
    static { this.defaultToKey = (resource) => ( resource.toString()); }
    constructor(arg, toKey) {
        this[map_a] = 'ResourceMap';
        if (arg instanceof ResourceMap) {
            this.map = ( new Map(arg.map));
            this.toKey = toKey ?? ResourceMap.defaultToKey;
        }
        else if (isEntries(arg)) {
            this.map = ( new Map());
            this.toKey = toKey ?? ResourceMap.defaultToKey;
            for (const [resource, value] of arg) {
                this.set(resource, value);
            }
        }
        else {
            this.map = ( new Map());
            this.toKey = arg ?? ResourceMap.defaultToKey;
        }
    }
    set(resource, value) {
        this.map.set(this.toKey(resource), ( new ResourceMapEntry(resource, value)));
        return this;
    }
    get(resource) {
        return this.map.get(this.toKey(resource))?.value;
    }
    has(resource) {
        return ( this.map.has(this.toKey(resource)));
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
    delete(resource) {
        return this.map.delete(this.toKey(resource));
    }
    forEach(clb, thisArg) {
        if (typeof thisArg !== 'undefined') {
            clb = clb.bind(thisArg);
        }
        for (const [_, entry] of this.map) {
            clb(entry.value, entry.uri, this);
        }
    }
    *values() {
        for (const entry of ( this.map.values())) {
            yield entry.value;
        }
    }
    *keys() {
        for (const entry of ( this.map.values())) {
            yield entry.uri;
        }
    }
    *entries() {
        for (const entry of ( this.map.values())) {
            yield [entry.uri, entry.value];
        }
    }
    *[(map_a = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, entry] of this.map) {
            yield [entry.uri, entry.value];
        }
    }
}
class ResourceSet {
    constructor(entriesOrKey, toKey) {
        this[_b] = 'ResourceSet';
        if (!entriesOrKey || typeof entriesOrKey === 'function') {
            this._map = ( new ResourceMap(entriesOrKey));
        }
        else {
            this._map = ( new ResourceMap(toKey));
            entriesOrKey.forEach(this.add, this);
        }
    }
    get size() {
        return this._map.size;
    }
    add(value) {
        this._map.set(value, value);
        return this;
    }
    clear() {
        this._map.clear();
    }
    delete(value) {
        return this._map.delete(value);
    }
    forEach(callbackfn, thisArg) {
        this._map.forEach((_value, key) => callbackfn.call(thisArg, key, key, this));
    }
    has(value) {
        return ( this._map.has(value));
    }
    entries() {
        return this._map.entries();
    }
    keys() {
        return ( this._map.keys());
    }
    values() {
        return ( this._map.keys());
    }
    [(_b = Symbol.toStringTag, Symbol.iterator)]() {
        return ( this.keys());
    }
}
var Touch;
(function (Touch) {
    Touch[Touch["None"] = 0] = "None";
    Touch[Touch["AsOld"] = 1] = "AsOld";
    Touch[Touch["AsNew"] = 2] = "AsNew";
})(Touch || (Touch = {}));
class LinkedMap {
    constructor() {
        this[_c] = 'LinkedMap';
        this._map = ( new Map());
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state = 0;
    }
    clear() {
        this._map.clear();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state++;
    }
    isEmpty() {
        return !this._head && !this._tail;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._head?.value;
    }
    get last() {
        return this._tail?.value;
    }
    has(key) {
        return ( this._map.has(key));
    }
    get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        if (touch !== Touch.None) {
            this.touch(item, touch);
        }
        return item.value;
    }
    set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
            item.value = value;
            if (touch !== Touch.None) {
                this.touch(item, touch);
            }
        }
        else {
            item = { key, value, next: undefined, previous: undefined };
            switch (touch) {
                case Touch.None:
                    this.addItemLast(item);
                    break;
                case Touch.AsOld:
                    this.addItemFirst(item);
                    break;
                case Touch.AsNew:
                    this.addItemLast(item);
                    break;
                default:
                    this.addItemLast(item);
                    break;
            }
            this._map.set(key, item);
            this._size++;
        }
        return this;
    }
    delete(key) {
        return !!this.remove(key);
    }
    remove(key) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    shift() {
        if (!this._head && !this._tail) {
            return undefined;
        }
        if (!this._head || !this._tail) {
            throw ( new Error('Invalid list'));
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
            if (thisArg) {
                callbackfn.bind(thisArg)(current.value, current.key, this);
            }
            else {
                callbackfn(current.value, current.key, this);
            }
            if (this._state !== state) {
                throw ( new Error(`LinkedMap got modified during iteration.`));
            }
            current = current.next;
        }
    }
    keys() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw ( new Error(`LinkedMap got modified during iteration.`));
                }
                if (current) {
                    const result = { value: current.key, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    values() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw ( new Error(`LinkedMap got modified during iteration.`));
                }
                if (current) {
                    const result = { value: current.value, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    entries() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw ( new Error(`LinkedMap got modified during iteration.`));
                }
                if (current) {
                    const result = { value: [current.key, current.value], done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    [(_c = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.next;
            currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
            current.previous = undefined;
        }
        this._state++;
    }
    trimNew(newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        let current = this._tail;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.previous;
            currentSize--;
        }
        this._tail = current;
        this._size = currentSize;
        if (current) {
            current.next = undefined;
        }
        this._state++;
    }
    addItemFirst(item) {
        if (!this._head && !this._tail) {
            this._tail = item;
        }
        else if (!this._head) {
            throw ( new Error('Invalid list'));
        }
        else {
            item.next = this._head;
            this._head.previous = item;
        }
        this._head = item;
        this._state++;
    }
    addItemLast(item) {
        if (!this._head && !this._tail) {
            this._head = item;
        }
        else if (!this._tail) {
            throw ( new Error('Invalid list'));
        }
        else {
            item.previous = this._tail;
            this._tail.next = item;
        }
        this._tail = item;
        this._state++;
    }
    removeItem(item) {
        if (item === this._head && item === this._tail) {
            this._head = undefined;
            this._tail = undefined;
        }
        else if (item === this._head) {
            if (!item.next) {
                throw ( new Error('Invalid list'));
            }
            item.next.previous = undefined;
            this._head = item.next;
        }
        else if (item === this._tail) {
            if (!item.previous) {
                throw ( new Error('Invalid list'));
            }
            item.previous.next = undefined;
            this._tail = item.previous;
        }
        else {
            const next = item.next;
            const previous = item.previous;
            if (!next || !previous) {
                throw ( new Error('Invalid list'));
            }
            next.previous = previous;
            previous.next = next;
        }
        item.next = undefined;
        item.previous = undefined;
        this._state++;
    }
    touch(item, touch) {
        if (!this._head || !this._tail) {
            throw ( new Error('Invalid list'));
        }
        if ((touch !== Touch.AsOld && touch !== Touch.AsNew)) {
            return;
        }
        if (touch === Touch.AsOld) {
            if (item === this._head) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            if (item === this._tail) {
                previous.next = undefined;
                this._tail = previous;
            }
            else {
                next.previous = previous;
                previous.next = next;
            }
            item.previous = undefined;
            item.next = this._head;
            this._head.previous = item;
            this._head = item;
            this._state++;
        }
        else if (touch === Touch.AsNew) {
            if (item === this._tail) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            if (item === this._head) {
                next.previous = undefined;
                this._head = next;
            }
            else {
                next.previous = previous;
                previous.next = next;
            }
            item.next = undefined;
            item.previous = this._tail;
            this._tail.next = item;
            this._tail = item;
            this._state++;
        }
    }
    toJSON() {
        const data = [];
        this.forEach((value, key) => {
            data.push([key, value]);
        });
        return data;
    }
    fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
            this.set(key, value);
        }
    }
}
class Cache extends LinkedMap {
    constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
    }
    get limit() {
        return this._limit;
    }
    set limit(limit) {
        this._limit = limit;
        this.checkTrim();
    }
    get ratio() {
        return this._ratio;
    }
    set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
    }
    get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
    }
    peek(key) {
        return super.get(key, Touch.None);
    }
    set(key, value) {
        super.set(key, value, Touch.AsNew);
        return this;
    }
    checkTrim() {
        if (this.size > this._limit) {
            this.trim(Math.round(this._limit * this._ratio));
        }
    }
}
class LRUCache extends Cache {
    constructor(limit, ratio = 1) {
        super(limit, ratio);
    }
    trim(newSize) {
        this.trimOld(newSize);
    }
    set(key, value) {
        super.set(key, value);
        this.checkTrim();
        return this;
    }
}
class MRUCache extends Cache {
    constructor(limit, ratio = 1) {
        super(limit, ratio);
    }
    trim(newSize) {
        this.trimNew(newSize);
    }
    set(key, value) {
        if (this._limit <= this.size && !( this.has(key))) {
            this.trim(Math.round(this._limit * this._ratio) - 1);
        }
        super.set(key, value);
        return this;
    }
}
class CounterSet {
    constructor() {
        this.map = ( new Map());
    }
    add(value) {
        this.map.set(value, (this.map.get(value) || 0) + 1);
        return this;
    }
    delete(value) {
        let counter = this.map.get(value) || 0;
        if (counter === 0) {
            return false;
        }
        counter--;
        if (counter === 0) {
            this.map.delete(value);
        }
        else {
            this.map.set(value, counter);
        }
        return true;
    }
    has(value) {
        return ( this.map.has(value));
    }
}
class BidirectionalMap {
    constructor(entries) {
        this._m1 = ( new Map());
        this._m2 = ( new Map());
        if (entries) {
            for (const [key, value] of entries) {
                this.set(key, value);
            }
        }
    }
    clear() {
        this._m1.clear();
        this._m2.clear();
    }
    set(key, value) {
        this._m1.set(key, value);
        this._m2.set(value, key);
    }
    get(key) {
        return this._m1.get(key);
    }
    getKey(value) {
        return this._m2.get(value);
    }
    delete(key) {
        const value = this._m1.get(key);
        if (value === undefined) {
            return false;
        }
        this._m1.delete(key);
        this._m2.delete(value);
        return true;
    }
    forEach(callbackfn, thisArg) {
        this._m1.forEach((value, key) => {
            callbackfn.call(thisArg, value, key, this);
        });
    }
    keys() {
        return ( this._m1.keys());
    }
    values() {
        return ( this._m1.values());
    }
}
class SetMap {
    constructor() {
        this.map = ( new Map());
    }
    add(key, value) {
        let values = this.map.get(key);
        if (!values) {
            values = ( new Set());
            this.map.set(key, values);
        }
        values.add(value);
    }
    delete(key, value) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.delete(value);
        if (values.size === 0) {
            this.map.delete(key);
        }
    }
    forEach(key, fn) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.forEach(fn);
    }
    get(key) {
        const values = this.map.get(key);
        if (!values) {
            return ( new Set());
        }
        return values;
    }
}
function mapsStrictEqualIgnoreOrder(a, b) {
    if (a === b) {
        return true;
    }
    if (a.size !== b.size) {
        return false;
    }
    for (const [key, value] of a) {
        if (!( b.has(key)) || b.get(key) !== value) {
            return false;
        }
    }
    for (const [key] of b) {
        if (!( a.has(key))) {
            return false;
        }
    }
    return true;
}
class NKeyMap {
    constructor() {
        this._data = ( new Map());
    }
    set(value, ...keys) {
        let currentMap = this._data;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!( currentMap.has(keys[i]))) {
                currentMap.set(keys[i], ( new Map()));
            }
            currentMap = currentMap.get(keys[i]);
        }
        currentMap.set(keys[keys.length - 1], value);
    }
    get(...keys) {
        let currentMap = this._data;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!( currentMap.has(keys[i]))) {
                return undefined;
            }
            currentMap = currentMap.get(keys[i]);
        }
        return currentMap.get(keys[keys.length - 1]);
    }
    clear() {
        this._data.clear();
    }
    *values() {
        function* iterate(map) {
            for (const value of ( map.values())) {
                if (value instanceof Map) {
                    yield* iterate(value);
                }
                else {
                    yield value;
                }
            }
        }
        yield* iterate(this._data);
    }
    toString() {
        const printMap = (map, depth) => {
            let result = '';
            for (const [key, value] of map) {
                result += `${'  '.repeat(depth)}${key}: `;
                if (value instanceof Map) {
                    result += '\n' + printMap(value, depth + 1);
                }
                else {
                    result += `${value}\n`;
                }
            }
            return result;
        };
        return printMap(this._data, 0);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/functional.js


function functional_createSingleCallFunction(fn, fnDidRunCallback) {
    const _this = this;
    let didCall = false;
    let result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        if (fnDidRunCallback) {
            try {
                result = fn.apply(_this, arguments);
            }
            finally {
                fnDidRunCallback();
            }
        }
        else {
            result = fn.apply(_this, arguments);
        }
        return result;
    };
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/assert.js



function ok(value, message) {
    if (!value) {
        throw ( new Error(message ? `Assertion failed (${message})` : 'Assertion Failed'));
    }
}
function assertNever(value, message = 'Unreachable') {
    throw ( new Error(message));
}
function assert_assert(condition, messageOrError = 'unexpected state') {
    if (!condition) {
        const errorToThrow = typeof messageOrError === 'string'
            ? ( new BugIndicatingError(`Assertion Failed: ${messageOrError}`))
            : messageOrError;
        throw errorToThrow;
    }
}
function softAssert(condition, message = 'Soft Assertion Failed') {
    if (!condition) {
        onUnexpectedError(( new BugIndicatingError(message)));
    }
}
function assertFn(condition) {
    if (!condition()) {
        debugger;
        condition();
        errors_onUnexpectedError(( new errors_BugIndicatingError('Assertion Failed')));
    }
}
function checkAdjacentItems(items, predicate) {
    let i = 0;
    while (i < items.length - 1) {
        const a = items[i];
        const b = items[i + 1];
        if (!predicate(a, b)) {
            return false;
        }
        i++;
    }
    return true;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/types.js



function isString(str) {
    return (typeof str === 'string');
}
function isStringArray(value) {
    return Array.isArray(value) && value.every(elem => isString(elem));
}
function isObject(obj) {
    return typeof obj === 'object'
        && obj !== null
        && !Array.isArray(obj)
        && !(obj instanceof RegExp)
        && !(obj instanceof Date);
}
function isTypedArray(obj) {
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    return typeof obj === 'object'
        && obj instanceof TypedArray;
}
function types_isNumber(obj) {
    return (typeof obj === 'number' && !isNaN(obj));
}
function isIterable(obj) {
    return !!obj && typeof obj[Symbol.iterator] === 'function';
}
function isBoolean(obj) {
    return (obj === true || obj === false);
}
function isUndefined(obj) {
    return (typeof obj === 'undefined');
}
function isDefined(arg) {
    return !isUndefinedOrNull(arg);
}
function isUndefinedOrNull(obj) {
    return (isUndefined(obj) || obj === null);
}
function assertType(condition, type) {
    if (!condition) {
        throw ( new Error(type ? `Unexpected type, expected '${type}'` : 'Unexpected type'));
    }
}
function assertReturnsDefined(arg) {
    assert(arg !== null && arg !== undefined, 'Argument is `undefined` or `null`.');
    return arg;
}
function assertDefined(value, error) {
    if (value === null || value === undefined) {
        const errorToThrow = typeof error === 'string' ? ( new Error(error)) : error;
        throw errorToThrow;
    }
}
function assertReturnsAllDefined(...args) {
    const result = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (isUndefinedOrNull(arg)) {
            throw ( new Error(`Assertion Failed: argument at index ${i} is undefined or null`));
        }
        result.push(arg);
    }
    return result;
}
const isOneOf = (value, validValues) => {
    return validValues.includes(value);
};
const types_hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    for (const key in obj) {
        if (types_hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function isFunction(obj) {
    return (typeof obj === 'function');
}
function areFunctions(...objects) {
    return objects.length > 0 && objects.every(isFunction);
}
function validateConstraints(args, constraints) {
    const len = Math.min(args.length, constraints.length);
    for (let i = 0; i < len; i++) {
        validateConstraint(args[i], constraints[i]);
    }
}
function validateConstraint(arg, constraint) {
    if (isString(constraint)) {
        if (typeof arg !== constraint) {
            throw ( new Error(`argument does not match constraint: typeof ${constraint}`));
        }
    }
    else if (isFunction(constraint)) {
        try {
            if (arg instanceof constraint) {
                return;
            }
        }
        catch {
        }
        if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
            return;
        }
        if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
            return;
        }
        throw ( new Error(
            `argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true`
        ));
    }
}
function upcast(x) {
    return x;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/iterator.js



var Iterable;
(function (Iterable) {
    function is(thing) {
        return !!thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
    }
    Iterable.is = is;
    const _empty = ( Object.freeze([]));
    function empty() {
        return _empty;
    }
    Iterable.empty = empty;
    function* single(element) {
        yield element;
    }
    Iterable.single = single;
    function wrap(iterableOrElement) {
        if (is(iterableOrElement)) {
            return iterableOrElement;
        }
        else {
            return single(iterableOrElement);
        }
    }
    Iterable.wrap = wrap;
    function from(iterable) {
        return iterable || _empty;
    }
    Iterable.from = from;
    function* reverse(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            yield array[i];
        }
    }
    Iterable.reverse = reverse;
    function isEmpty(iterable) {
        return !iterable || iterable[Symbol.iterator]().next().done === true;
    }
    Iterable.isEmpty = isEmpty;
    function first(iterable) {
        return iterable[Symbol.iterator]().next().value;
    }
    Iterable.first = first;
    function some(iterable, predicate) {
        let i = 0;
        for (const element of iterable) {
            if (predicate(element, i++)) {
                return true;
            }
        }
        return false;
    }
    Iterable.some = some;
    function every(iterable, predicate) {
        let i = 0;
        for (const element of iterable) {
            if (!predicate(element, i++)) {
                return false;
            }
        }
        return true;
    }
    Iterable.every = every;
    function find(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                return element;
            }
        }
        return undefined;
    }
    Iterable.find = find;
    function* filter(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                yield element;
            }
        }
    }
    Iterable.filter = filter;
    function* map(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
            yield fn(element, index++);
        }
    }
    Iterable.map = map;
    function* flatMap(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
            yield* fn(element, index++);
        }
    }
    Iterable.flatMap = flatMap;
    function* concat(...iterables) {
        for (const item of iterables) {
            if (isIterable(item)) {
                yield* item;
            }
            else {
                yield item;
            }
        }
    }
    Iterable.concat = concat;
    function reduce(iterable, reducer, initialValue) {
        let value = initialValue;
        for (const element of iterable) {
            value = reducer(value, element);
        }
        return value;
    }
    Iterable.reduce = reduce;
    function length(iterable) {
        let count = 0;
        for (const _ of iterable) {
            count++;
        }
        return count;
    }
    Iterable.length = length;
    function* slice(arr, from, to = arr.length) {
        if (from < -arr.length) {
            from = 0;
        }
        if (from < 0) {
            from += arr.length;
        }
        if (to < 0) {
            to += arr.length;
        }
        else if (to > arr.length) {
            to = arr.length;
        }
        for (; from < to; from++) {
            yield arr[from];
        }
    }
    Iterable.slice = slice;
    function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
        const consumed = [];
        if (atMost === 0) {
            return [consumed, iterable];
        }
        const iterator = iterable[Symbol.iterator]();
        for (let i = 0; i < atMost; i++) {
            const next = iterator.next();
            if (next.done) {
                return [consumed, Iterable.empty()];
            }
            consumed.push(next.value);
        }
        return [consumed, { [Symbol.iterator]() { return iterator; } }];
    }
    Iterable.consume = consume;
    async function asyncToArray(iterable) {
        const result = [];
        for await (const item of iterable) {
            result.push(item);
        }
        return result;
    }
    Iterable.asyncToArray = asyncToArray;
    async function asyncToArrayFlat(iterable) {
        let result = [];
        for await (const item of iterable) {
            result = result.concat(item);
        }
        return result;
    }
    Iterable.asyncToArrayFlat = asyncToArrayFlat;
})(Iterable || (Iterable = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/lifecycle.js







let disposableTracker = null;
class GCBasedDisposableTracker {
    constructor() {
        this._registry = ( new FinalizationRegistry(heldValue => {
            console.warn(`[LEAKED DISPOSABLE] ${heldValue}`);
        }));
    }
    trackDisposable(disposable) {
        const stack = ( new Error('CREATED via:')).stack;
        this._registry.register(disposable, stack, disposable);
    }
    setParent(child, parent) {
        if (parent) {
            this._registry.unregister(child);
        }
        else {
            this.trackDisposable(child);
        }
    }
    markAsDisposed(disposable) {
        this._registry.unregister(disposable);
    }
    markAsSingleton(disposable) {
        this._registry.unregister(disposable);
    }
}
class DisposableTracker {
    constructor() {
        this.livingDisposables = ( new Map());
    }
    static { this.idx = 0; }
    getDisposableData(d) {
        let val = this.livingDisposables.get(d);
        if (!val) {
            val = { parent: null, source: null, isSingleton: false, value: d, idx: DisposableTracker.idx++ };
            this.livingDisposables.set(d, val);
        }
        return val;
    }
    trackDisposable(d) {
        const data = this.getDisposableData(d);
        if (!data.source) {
            data.source =
                ( new Error()).stack;
        }
    }
    setParent(child, parent) {
        const data = this.getDisposableData(child);
        data.parent = parent;
    }
    markAsDisposed(x) {
        this.livingDisposables.delete(x);
    }
    markAsSingleton(disposable) {
        this.getDisposableData(disposable).isSingleton = true;
    }
    getRootParent(data, cache) {
        const cacheValue = cache.get(data);
        if (cacheValue) {
            return cacheValue;
        }
        const result = data.parent ? this.getRootParent(this.getDisposableData(data.parent), cache) : data;
        cache.set(data, result);
        return result;
    }
    getTrackedDisposables() {
        const rootParentCache = ( new Map());
        const leaking = [...this.livingDisposables.entries()]
            .filter(([, v]) => v.source !== null && !this.getRootParent(v, rootParentCache).isSingleton)
            .flatMap(([k]) => k);
        return leaking;
    }
    computeLeakingDisposables(maxReported = 10, preComputedLeaks) {
        let uncoveredLeakingObjs;
        if (preComputedLeaks) {
            uncoveredLeakingObjs = preComputedLeaks;
        }
        else {
            const rootParentCache = ( new Map());
            const leakingObjects = [...( this.livingDisposables.values())]
                .filter((info) => info.source !== null && !this.getRootParent(info, rootParentCache).isSingleton);
            if (leakingObjects.length === 0) {
                return;
            }
            const leakingObjsSet = ( new Set(( leakingObjects.map(o => o.value))));
            uncoveredLeakingObjs = leakingObjects.filter(l => {
                return !(l.parent && ( leakingObjsSet.has(l.parent)));
            });
            if (uncoveredLeakingObjs.length === 0) {
                throw ( new Error('There are cyclic diposable chains!'));
            }
        }
        if (!uncoveredLeakingObjs) {
            return undefined;
        }
        function getStackTracePath(leaking) {
            function removePrefix(array, linesToRemove) {
                while (array.length > 0 && ( linesToRemove.some(
                    regexp => typeof regexp === 'string' ? regexp === array[0] : array[0].match(regexp)
                ))) {
                    array.shift();
                }
            }
            const lines = ( leaking.source.split('\n').map(p => p.trim().replace('at ', ''))).filter(l => l !== '');
            removePrefix(lines, ['Error', /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]);
            return lines.reverse();
        }
        const stackTraceStarts = ( new SetMap());
        for (const leaking of uncoveredLeakingObjs) {
            const stackTracePath = getStackTracePath(leaking);
            for (let i = 0; i <= stackTracePath.length; i++) {
                stackTraceStarts.add(stackTracePath.slice(0, i).join('\n'), leaking);
            }
        }
        uncoveredLeakingObjs.sort(compareBy(l => l.idx, numberComparator));
        let message = '';
        let i = 0;
        for (const leaking of uncoveredLeakingObjs.slice(0, maxReported)) {
            i++;
            const stackTracePath = getStackTracePath(leaking);
            const stackTraceFormattedLines = [];
            for (let i = 0; i < stackTracePath.length; i++) {
                let line = stackTracePath[i];
                const starts = stackTraceStarts.get(stackTracePath.slice(0, i + 1).join('\n'));
                line = `(shared with ${starts.size}/${uncoveredLeakingObjs.length} leaks) at ${line}`;
                const prevStarts = stackTraceStarts.get(stackTracePath.slice(0, i).join('\n'));
                const continuations = collections_groupBy(( [...prevStarts].map(d => getStackTracePath(d)[i])), v => v);
                delete continuations[stackTracePath[i]];
                for (const [cont, set] of Object.entries(continuations)) {
                    stackTraceFormattedLines.unshift(`    - stacktraces of ${set.length} other leaks continue with ${cont}`);
                }
                stackTraceFormattedLines.unshift(line);
            }
            message += `\n\n\n==================== Leaking disposable ${i}/${uncoveredLeakingObjs.length}: ${leaking.value.constructor.name} ====================\n${stackTraceFormattedLines.join('\n')}\n============================================================\n\n`;
        }
        if (uncoveredLeakingObjs.length > maxReported) {
            message += `\n\n\n... and ${uncoveredLeakingObjs.length - maxReported} more leaking disposables\n\n`;
        }
        return { leaks: uncoveredLeakingObjs, details: message };
    }
}
function setDisposableTracker(tracker) {
    disposableTracker = tracker;
}
function trackDisposable(x) {
    disposableTracker?.trackDisposable(x);
    return x;
}
function markAsDisposed(disposable) {
    disposableTracker?.markAsDisposed(disposable);
}
function setParentOfDisposable(child, parent) {
    disposableTracker?.setParent(child, parent);
}
function setParentOfDisposables(children, parent) {
    if (!disposableTracker) {
        return;
    }
    for (const child of children) {
        disposableTracker.setParent(child, parent);
    }
}
function markAsSingleton(singleton) {
    disposableTracker?.markAsSingleton(singleton);
    return singleton;
}
function lifecycle_isDisposable(thing) {
    return typeof thing === 'object' && thing !== null && typeof thing.dispose === 'function' && thing.dispose.length === 0;
}
function dispose(arg) {
    if (Iterable.is(arg)) {
        const errors = [];
        for (const d of arg) {
            if (d) {
                try {
                    d.dispose();
                }
                catch (e) {
                    errors.push(e);
                }
            }
        }
        if (errors.length === 1) {
            throw errors[0];
        }
        else if (errors.length > 1) {
            throw ( new AggregateError(errors, 'Encountered errors while disposing of store'));
        }
        return Array.isArray(arg) ? [] : arg;
    }
    else if (arg) {
        arg.dispose();
        return arg;
    }
}
function disposeIfDisposable(disposables) {
    for (const d of disposables) {
        if (lifecycle_isDisposable(d)) {
            d.dispose();
        }
    }
    return [];
}
function combinedDisposable(...disposables) {
    const parent = lifecycle_toDisposable(() => dispose(disposables));
    setParentOfDisposables(disposables, parent);
    return parent;
}
function lifecycle_toDisposable(fn) {
    const self = trackDisposable({
        dispose: functional_createSingleCallFunction(() => {
            markAsDisposed(self);
            fn();
        })
    });
    return self;
}
class lifecycle_DisposableStore {
    static { this.DISABLE_DISPOSED_WARNING = false; }
    constructor() {
        this._toDispose = ( new Set());
        this._isDisposed = false;
        trackDisposable(this);
    }
    dispose() {
        if (this._isDisposed) {
            return;
        }
        markAsDisposed(this);
        this._isDisposed = true;
        this.clear();
    }
    get isDisposed() {
        return this._isDisposed;
    }
    clear() {
        if (this._toDispose.size === 0) {
            return;
        }
        try {
            dispose(this._toDispose);
        }
        finally {
            this._toDispose.clear();
        }
    }
    add(o) {
        if (!o) {
            return o;
        }
        if (o === this) {
            throw ( new Error('Cannot register a disposable on itself!'));
        }
        setParentOfDisposable(o, this);
        if (this._isDisposed) {
            if (!lifecycle_DisposableStore.DISABLE_DISPOSED_WARNING) {
                console.warn(( new Error(
                    'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                )).stack);
            }
        }
        else {
            this._toDispose.add(o);
        }
        return o;
    }
    delete(o) {
        if (!o) {
            return;
        }
        if (o === this) {
            throw ( new Error('Cannot dispose a disposable on itself!'));
        }
        this._toDispose.delete(o);
        o.dispose();
    }
    deleteAndLeak(o) {
        if (!o) {
            return;
        }
        if (( this._toDispose.has(o))) {
            this._toDispose.delete(o);
            setParentOfDisposable(o, null);
        }
    }
}
class lifecycle_Disposable {
    static { this.None = ( Object.freeze({ dispose() { } })); }
    constructor() {
        this._store = ( new lifecycle_DisposableStore());
        trackDisposable(this);
        setParentOfDisposable(this._store, this);
    }
    dispose() {
        markAsDisposed(this);
        this._store.dispose();
    }
    _register(o) {
        if (o === this) {
            throw ( new Error('Cannot register a disposable on itself!'));
        }
        return this._store.add(o);
    }
}
class MutableDisposable {
    constructor() {
        this._isDisposed = false;
        trackDisposable(this);
    }
    get value() {
        return this._isDisposed ? undefined : this._value;
    }
    set value(value) {
        if (this._isDisposed || value === this._value) {
            return;
        }
        this._value?.dispose();
        if (value) {
            setParentOfDisposable(value, this);
        }
        this._value = value;
    }
    clear() {
        this.value = undefined;
    }
    dispose() {
        this._isDisposed = true;
        markAsDisposed(this);
        this._value?.dispose();
        this._value = undefined;
    }
    clearAndLeak() {
        const oldValue = this._value;
        this._value = undefined;
        if (oldValue) {
            setParentOfDisposable(oldValue, null);
        }
        return oldValue;
    }
}
class MandatoryMutableDisposable {
    constructor(initialValue) {
        this._disposable = ( new MutableDisposable());
        this._isDisposed = false;
        this._disposable.value = initialValue;
    }
    get value() {
        return this._disposable.value;
    }
    set value(value) {
        if (this._isDisposed || value === this._disposable.value) {
            return;
        }
        this._disposable.value = value;
    }
    dispose() {
        this._isDisposed = true;
        this._disposable.dispose();
    }
}
class RefCountedDisposable {
    constructor(_disposable) {
        this._disposable = _disposable;
        this._counter = 1;
    }
    acquire() {
        this._counter++;
        return this;
    }
    release() {
        if (--this._counter === 0) {
            this._disposable.dispose();
        }
        return this;
    }
}
class ReferenceCollection {
    constructor() {
        this.references = ( new Map());
    }
    acquire(key, ...args) {
        let reference = this.references.get(key);
        if (!reference) {
            reference = { counter: 0, object: this.createReferencedObject(key, ...args) };
            this.references.set(key, reference);
        }
        const { object } = reference;
        const dispose = createSingleCallFunction(() => {
            if (--reference.counter === 0) {
                this.destroyReferencedObject(key, reference.object);
                this.references.delete(key);
            }
        });
        reference.counter++;
        return { object, dispose };
    }
}
class AsyncReferenceCollection {
    constructor(referenceCollection) {
        this.referenceCollection = referenceCollection;
    }
    async acquire(key, ...args) {
        const ref = this.referenceCollection.acquire(key, ...args);
        try {
            const object = await ref.object;
            return {
                object,
                dispose: () => ref.dispose()
            };
        }
        catch (error) {
            ref.dispose();
            throw error;
        }
    }
}
class ImmortalReference {
    constructor(object) {
        this.object = object;
    }
    dispose() { }
}
class lifecycle_DisposableMap {
    constructor() {
        this._store = ( new Map());
        this._isDisposed = false;
        trackDisposable(this);
    }
    dispose() {
        markAsDisposed(this);
        this._isDisposed = true;
        this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (!this._store.size) {
            return;
        }
        try {
            dispose(( this._store.values()));
        }
        finally {
            this._store.clear();
        }
    }
    has(key) {
        return ( this._store.has(key));
    }
    get size() {
        return this._store.size;
    }
    get(key) {
        return this._store.get(key);
    }
    set(key, value, skipDisposeOnOverwrite = false) {
        if (this._isDisposed) {
            console.warn(( new Error(
                'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!'
            )).stack);
        }
        if (!skipDisposeOnOverwrite) {
            this._store.get(key)?.dispose();
        }
        this._store.set(key, value);
    }
    deleteAndDispose(key) {
        this._store.get(key)?.dispose();
        this._store.delete(key);
    }
    deleteAndLeak(key) {
        const value = this._store.get(key);
        this._store.delete(key);
        return value;
    }
    keys() {
        return ( this._store.keys());
    }
    values() {
        return ( this._store.values());
    }
    [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
    }
}
function thenIfNotDisposed(promise, then) {
    let disposed = false;
    promise.then(result => {
        if (disposed) {
            return;
        }
        then(result);
    });
    return lifecycle_toDisposable(() => {
        disposed = true;
    });
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/common/TMScopeRegistry.js


class TMScopeRegistry {
    constructor() {
        this._scopeNameToLanguageRegistration = Object.create(null);
    }
    reset() {
        this._scopeNameToLanguageRegistration = Object.create(null);
    }
    register(def) {
        this._scopeNameToLanguageRegistration[def.scopeName] = def;
    }
    getGrammarDefinition(scopeName) {
        return this._scopeNameToLanguageRegistration[scopeName] || null;
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/common/TMGrammarFactory.js




const missingTMGrammarErrorMessage = 'No TM Grammar registered for this language.';
class TMGrammarFactory extends lifecycle_Disposable {
    constructor(host, grammarDefinitions, vscodeTextmate, onigLib) {
        super();
        this._host = host;
        this._initialState = vscodeTextmate.INITIAL;
        this._scopeRegistry = ( new TMScopeRegistry());
        this._injections = {};
        this._injectedEmbeddedLanguages = {};
        this._languageToScope = ( new Map());
        this._grammarRegistry = this._register(new vscodeTextmate.Registry({
            onigLib: onigLib,
            loadGrammar: async (scopeName) => {
                const grammarDefinition = this._scopeRegistry.getGrammarDefinition(scopeName);
                if (!grammarDefinition) {
                    this._host.logTrace(`No grammar found for scope ${scopeName}`);
                    return null;
                }
                const location = grammarDefinition.location;
                try {
                    const content = await this._host.readFile(location);
                    return vscodeTextmate.parseRawGrammar(content, location.path);
                }
                catch (e) {
                    this._host.logError(`Unable to load and parse grammar for scope ${scopeName} from ${location}`, e);
                    return null;
                }
            },
            getInjections: (scopeName) => {
                const scopeParts = scopeName.split('.');
                let injections = [];
                for (let i = 1; i <= scopeParts.length; i++) {
                    const subScopeName = scopeParts.slice(0, i).join('.');
                    injections = [...injections, ...(this._injections[subScopeName] || [])];
                }
                return injections;
            }
        }));
        for (const validGrammar of grammarDefinitions) {
            this._scopeRegistry.register(validGrammar);
            if (validGrammar.injectTo) {
                for (const injectScope of validGrammar.injectTo) {
                    let injections = this._injections[injectScope];
                    if (!injections) {
                        this._injections[injectScope] = injections = [];
                    }
                    injections.push(validGrammar.scopeName);
                }
                if (validGrammar.embeddedLanguages) {
                    for (const injectScope of validGrammar.injectTo) {
                        let injectedEmbeddedLanguages = this._injectedEmbeddedLanguages[injectScope];
                        if (!injectedEmbeddedLanguages) {
                            this._injectedEmbeddedLanguages[injectScope] = injectedEmbeddedLanguages = [];
                        }
                        injectedEmbeddedLanguages.push(validGrammar.embeddedLanguages);
                    }
                }
            }
            if (validGrammar.language) {
                this._languageToScope.set(validGrammar.language, validGrammar.scopeName);
            }
        }
    }
    has(languageId) {
        return ( this._languageToScope.has(languageId));
    }
    setTheme(theme, colorMap) {
        this._grammarRegistry.setTheme(theme, colorMap);
    }
    getColorMap() {
        return this._grammarRegistry.getColorMap();
    }
    async createGrammar(languageId, encodedLanguageId) {
        const scopeName = this._languageToScope.get(languageId);
        if (typeof scopeName !== 'string') {
            throw ( new Error(missingTMGrammarErrorMessage));
        }
        const grammarDefinition = this._scopeRegistry.getGrammarDefinition(scopeName);
        if (!grammarDefinition) {
            throw ( new Error(missingTMGrammarErrorMessage));
        }
        const embeddedLanguages = grammarDefinition.embeddedLanguages;
        if (this._injectedEmbeddedLanguages[scopeName]) {
            const injectedEmbeddedLanguages = this._injectedEmbeddedLanguages[scopeName];
            for (const injected of injectedEmbeddedLanguages) {
                for (const scope of ( Object.keys(injected))) {
                    embeddedLanguages[scope] = injected[scope];
                }
            }
        }
        const containsEmbeddedLanguages = (( Object.keys(embeddedLanguages)).length > 0);
        let grammar;
        try {
            grammar = await this._grammarRegistry.loadGrammarWithConfiguration(scopeName, encodedLanguageId, {
                embeddedLanguages,
                tokenTypes: grammarDefinition.tokenTypes,
                balancedBracketSelectors: grammarDefinition.balancedBracketSelectors,
                unbalancedBracketSelectors: grammarDefinition.unbalancedBracketSelectors,
            });
        }
        catch (err) {
            if (err.message && err.message.startsWith('No grammar provided for')) {
                throw ( new Error(missingTMGrammarErrorMessage));
            }
            throw err;
        }
        return {
            languageId: languageId,
            grammar: grammar,
            initialState: this._initialState,
            containsEmbeddedLanguages: containsEmbeddedLanguages,
            sourceExtensionId: grammarDefinition.sourceExtensionId,
        };
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/linkedList.js


class Node {
    static { this.Undefined = ( new Node(undefined)); }
    constructor(element) {
        this.element = element;
        this.next = Node.Undefined;
        this.prev = Node.Undefined;
    }
}
class linkedList_LinkedList {
    constructor() {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    isEmpty() {
        return this._first === Node.Undefined;
    }
    clear() {
        let node = this._first;
        while (node !== Node.Undefined) {
            const next = node.next;
            node.prev = Node.Undefined;
            node.next = Node.Undefined;
            node = next;
        }
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    unshift(element) {
        return this._insert(element, false);
    }
    push(element) {
        return this._insert(element, true);
    }
    _insert(element, atTheEnd) {
        const newNode = ( new Node(element));
        if (this._first === Node.Undefined) {
            this._first = newNode;
            this._last = newNode;
        }
        else if (atTheEnd) {
            const oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        else {
            const oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        this._size += 1;
        let didRemove = false;
        return () => {
            if (!didRemove) {
                didRemove = true;
                this._remove(newNode);
            }
        };
    }
    shift() {
        if (this._first === Node.Undefined) {
            return undefined;
        }
        else {
            const res = this._first.element;
            this._remove(this._first);
            return res;
        }
    }
    pop() {
        if (this._last === Node.Undefined) {
            return undefined;
        }
        else {
            const res = this._last.element;
            this._remove(this._last);
            return res;
        }
    }
    _remove(node) {
        if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
            const anchor = node.prev;
            anchor.next = node.next;
            node.next.prev = anchor;
        }
        else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
            this._first = Node.Undefined;
            this._last = Node.Undefined;
        }
        else if (node.next === Node.Undefined) {
            this._last = this._last.prev;
            this._last.next = Node.Undefined;
        }
        else if (node.prev === Node.Undefined) {
            this._first = this._first.next;
            this._first.prev = Node.Undefined;
        }
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let node = this._first;
        while (node !== Node.Undefined) {
            yield node.element;
            node = node.next;
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/stopwatch.js


const performanceNow = globalThis.performance.now.bind(globalThis.performance);
class stopwatch_StopWatch {
    static create(highResolution) {
        return ( new stopwatch_StopWatch(highResolution));
    }
    constructor(highResolution) {
        this._now = highResolution === false ? Date.now : performanceNow;
        this._startTime = this._now();
        this._stopTime = -1;
    }
    stop() {
        this._stopTime = this._now();
    }
    reset() {
        this._startTime = this._now();
        this._stopTime = -1;
    }
    elapsed() {
        if (this._stopTime !== -1) {
            return this._stopTime - this._startTime;
        }
        return this._now() - this._startTime;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/event.js








var event_Event;
(function (Event) {
    Event.None = () => lifecycle_Disposable.None;
    function defer(event, disposable) {
        return debounce(event, () => void 0, 0, undefined, true, undefined, disposable);
    }
    Event.defer = defer;
    function once(event) {
        return (listener, thisArgs = null, disposables) => {
            let didFire = false;
            let result = undefined;
            result = event(e => {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    function onceIf(event, condition) {
        return Event.once(Event.filter(event, condition));
    }
    Event.onceIf = onceIf;
    function map(event, map, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => listener.call(thisArgs, ( map(i))), null, disposables), disposable);
    }
    Event.map = map;
    function forEach(event, each, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => { each(i); listener.call(thisArgs, i); }, null, disposables), disposable);
    }
    Event.forEach = forEach;
    function filter(event, filter, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables), disposable);
    }
    Event.filter = filter;
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    function any(...events) {
        return (listener, thisArgs = null, disposables) => {
            const disposable = combinedDisposable(...( events.map(event => event(e => listener.call(thisArgs, e)))));
            return addAndReturnDisposable(disposable, disposables);
        };
    }
    Event.any = any;
    function reduce(event, merge, initial, disposable) {
        let output = initial;
        return ( map(event, e => {
            output = merge(output, e);
            return output;
        }, disposable));
    }
    Event.reduce = reduce;
    function snapshot(event, disposable) {
        let listener;
        const options = {
            onWillAddFirstListener() {
                listener = event(emitter.fire, emitter);
            },
            onDidRemoveLastListener() {
                listener?.dispose();
            }
        };
        const emitter = ( new Emitter(options));
        disposable?.add(emitter);
        return emitter.event;
    }
    function addAndReturnDisposable(d, store) {
        if (store instanceof Array) {
            store.push(d);
        }
        else if (store) {
            store.add(d);
        }
        return d;
    }
    function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
        let subscription;
        let output = undefined;
        let handle = undefined;
        let numDebouncedCalls = 0;
        let doFire;
        const options = {
            leakWarningThreshold,
            onWillAddFirstListener() {
                subscription = event(cur => {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                        output = undefined;
                    }
                    doFire = () => {
                        const _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    };
                    if (typeof delay === 'number') {
                        if (handle) {
                            clearTimeout(handle);
                        }
                        handle = setTimeout(doFire, delay);
                    }
                    else {
                        if (handle === undefined) {
                            handle = null;
                            queueMicrotask(doFire);
                        }
                    }
                });
            },
            onWillRemoveListener() {
                if (flushOnListenerRemove && numDebouncedCalls > 0) {
                    doFire?.();
                }
            },
            onDidRemoveLastListener() {
                doFire = undefined;
                subscription.dispose();
            }
        };
        const emitter = ( new Emitter(options));
        disposable?.add(emitter);
        return emitter.event;
    }
    Event.debounce = debounce;
    function accumulate(event, delay = 0, disposable) {
        return Event.debounce(event, (last, e) => {
            if (!last) {
                return [e];
            }
            last.push(e);
            return last;
        }, delay, undefined, true, undefined, disposable);
    }
    Event.accumulate = accumulate;
    function latch(event, equals = (a, b) => a === b, disposable) {
        let firstCall = true;
        let cache;
        return filter(event, value => {
            const shouldEmit = firstCall || !equals(value, cache);
            firstCall = false;
            cache = value;
            return shouldEmit;
        }, disposable);
    }
    Event.latch = latch;
    function split(event, isT, disposable) {
        return [
            Event.filter(event, isT, disposable),
            Event.filter(event, e => !isT(e), disposable),
        ];
    }
    Event.split = split;
    function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
        let buffer = _buffer.slice();
        let listener = event(e => {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        if (disposable) {
            disposable.add(listener);
        }
        const flush = () => {
            buffer?.forEach(e => emitter.fire(e));
            buffer = null;
        };
        const emitter = ( new Emitter({
            onWillAddFirstListener() {
                if (!listener) {
                    listener = event(e => emitter.fire(e));
                    if (disposable) {
                        disposable.add(listener);
                    }
                }
            },
            onDidAddFirstListener() {
                if (buffer) {
                    if (flushAfterTimeout) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onDidRemoveLastListener() {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        }));
        if (disposable) {
            disposable.add(emitter);
        }
        return emitter.event;
    }
    Event.buffer = buffer;
    function chain(event, sythensize) {
        const fn = (listener, thisArgs, disposables) => {
            const cs = sythensize(( new ChainableSynthesis()));
            return event(function (value) {
                const result = cs.evaluate(value);
                if (result !== HaltChainable) {
                    listener.call(thisArgs, result);
                }
            }, undefined, disposables);
        };
        return fn;
    }
    Event.chain = chain;
    const HaltChainable = Symbol('HaltChainable');
    class ChainableSynthesis {
        constructor() {
            this.steps = [];
        }
        map(fn) {
            this.steps.push(fn);
            return this;
        }
        forEach(fn) {
            this.steps.push(v => {
                fn(v);
                return v;
            });
            return this;
        }
        filter(fn) {
            this.steps.push(v => fn(v) ? v : HaltChainable);
            return this;
        }
        reduce(merge, initial) {
            let last = initial;
            this.steps.push(v => {
                last = merge(last, v);
                return last;
            });
            return this;
        }
        latch(equals = (a, b) => a === b) {
            let firstCall = true;
            let cache;
            this.steps.push(value => {
                const shouldEmit = firstCall || !equals(value, cache);
                firstCall = false;
                cache = value;
                return shouldEmit ? value : HaltChainable;
            });
            return this;
        }
        evaluate(value) {
            for (const step of this.steps) {
                value = step(value);
                if (value === HaltChainable) {
                    break;
                }
            }
            return value;
        }
    }
    function fromNodeEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(( map(...args)));
        const onFirstListenerAdd = () => emitter.on(eventName, fn);
        const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
        const result = ( new Emitter(
            { onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove }
        ));
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromDOMEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(( map(...args)));
        const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
        const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
        const result = ( new Emitter(
            { onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove }
        ));
        return result.event;
    }
    Event.fromDOMEventEmitter = fromDOMEventEmitter;
    function toPromise(event, disposables) {
        let cancelRef;
        const promise = ( new Promise((resolve, reject) => {
            const listener = once(event)(resolve, null, disposables);
            cancelRef = () => listener.dispose();
        }));
        promise.cancel = cancelRef;
        return promise;
    }
    Event.toPromise = toPromise;
    function fromPromise(promise) {
        const result = ( new Emitter());
        promise.then(res => {
            result.fire(res);
        }, () => {
            result.fire(undefined);
        }).finally(() => {
            result.dispose();
        });
        return result.event;
    }
    Event.fromPromise = fromPromise;
    function forward(from, to) {
        return from(e => to.fire(e));
    }
    Event.forward = forward;
    function runAndSubscribe(event, handler, initial) {
        handler(initial);
        return event(e => handler(e));
    }
    Event.runAndSubscribe = runAndSubscribe;
    class EmitterObserver {
        constructor(_observable, store) {
            this._observable = _observable;
            this._counter = 0;
            this._hasChanged = false;
            const options = {
                onWillAddFirstListener: () => {
                    _observable.addObserver(this);
                    this._observable.reportChanges();
                },
                onDidRemoveLastListener: () => {
                    _observable.removeObserver(this);
                }
            };
            this.emitter = ( new Emitter(options));
            if (store) {
                store.add(this.emitter);
            }
        }
        beginUpdate(_observable) {
            this._counter++;
        }
        handlePossibleChange(_observable) {
        }
        handleChange(_observable, _change) {
            this._hasChanged = true;
        }
        endUpdate(_observable) {
            this._counter--;
            if (this._counter === 0) {
                this._observable.reportChanges();
                if (this._hasChanged) {
                    this._hasChanged = false;
                    this.emitter.fire(this._observable.get());
                }
            }
        }
    }
    function fromObservable(obs, store) {
        const observer = ( new EmitterObserver(obs, store));
        return observer.emitter.event;
    }
    Event.fromObservable = fromObservable;
    function fromObservableLight(observable) {
        return (listener, thisArgs, disposables) => {
            let count = 0;
            let didChange = false;
            const observer = {
                beginUpdate() {
                    count++;
                },
                endUpdate() {
                    count--;
                    if (count === 0) {
                        observable.reportChanges();
                        if (didChange) {
                            didChange = false;
                            listener.call(thisArgs);
                        }
                    }
                },
                handlePossibleChange() {
                },
                handleChange() {
                    didChange = true;
                }
            };
            observable.addObserver(observer);
            observable.reportChanges();
            const disposable = {
                dispose() {
                    observable.removeObserver(observer);
                }
            };
            if (disposables instanceof lifecycle_DisposableStore) {
                disposables.add(disposable);
            }
            else if (Array.isArray(disposables)) {
                disposables.push(disposable);
            }
            return disposable;
        };
    }
    Event.fromObservableLight = fromObservableLight;
})(event_Event || (event_Event = {}));
class EventProfiling {
    static { this.all = ( new Set()); }
    static { this._idPool = 0; }
    constructor(name) {
        this.listenerCount = 0;
        this.invocationCount = 0;
        this.elapsedOverall = 0;
        this.durations = [];
        this.name = `${name}_${EventProfiling._idPool++}`;
        EventProfiling.all.add(this);
    }
    start(listenerCount) {
        this._stopWatch = ( new stopwatch_StopWatch());
        this.listenerCount = listenerCount;
    }
    stop() {
        if (this._stopWatch) {
            const elapsed = this._stopWatch.elapsed();
            this.durations.push(elapsed);
            this.elapsedOverall += elapsed;
            this.invocationCount += 1;
            this._stopWatch = undefined;
        }
    }
}
let _globalLeakWarningThreshold = -1;
function setGlobalLeakWarningThreshold(n) {
    const oldValue = _globalLeakWarningThreshold;
    _globalLeakWarningThreshold = n;
    return {
        dispose() {
            _globalLeakWarningThreshold = oldValue;
        }
    };
}
class LeakageMonitor {
    static { this._idPool = 1; }
    constructor(_errorHandler, threshold, name = ( (LeakageMonitor._idPool++).toString(16)).padStart(3, '0')) {
        this._errorHandler = _errorHandler;
        this.threshold = threshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(stack, listenerCount) {
        const threshold = this.threshold;
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = ( new Map());
        }
        const count = (this._stacks.get(stack.value) || 0);
        this._stacks.set(stack.value, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            this._warnCountdown = threshold * 0.5;
            const [topStack, topCount] = this.getMostFrequentStack();
            const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
            console.warn(message);
            console.warn(topStack);
            const error = ( new ListenerLeakError(message, topStack));
            this._errorHandler(error);
        }
        return () => {
            const count = (this._stacks.get(stack.value) || 0);
            this._stacks.set(stack.value, count - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) {
            return undefined;
        }
        let topStack;
        let topCount = 0;
        for (const [stack, count] of this._stacks) {
            if (!topStack || topCount < count) {
                topStack = [stack, count];
                topCount = count;
            }
        }
        return topStack;
    }
}
class Stacktrace {
    static create() {
        const err = ( new Error());
        return ( new Stacktrace(err.stack ?? ''));
    }
    constructor(value) {
        this.value = value;
    }
    print() {
        console.warn(this.value.split('\n').slice(2).join('\n'));
    }
}
class ListenerLeakError extends Error {
    constructor(message, stack) {
        super(message);
        this.name = 'ListenerLeakError';
        this.stack = stack;
    }
}
class ListenerRefusalError extends Error {
    constructor(message, stack) {
        super(message);
        this.name = 'ListenerRefusalError';
        this.stack = stack;
    }
}
let id = 0;
class UniqueContainer {
    constructor(value) {
        this.value = value;
        this.id = id++;
    }
}
const compactionThreshold = 2;
const forEachListener = (listeners, fn) => {
    if (listeners instanceof UniqueContainer) {
        fn(listeners);
    }
    else {
        for (let i = 0; i < listeners.length; i++) {
            const l = listeners[i];
            if (l) {
                fn(l);
            }
        }
    }
};
class Emitter {
    constructor(options) {
        this._size = 0;
        this._options = options;
        this._leakageMon = (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold)
            ? ( new LeakageMonitor(
            options?.onListenerError ?? errors_onUnexpectedError,
            this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold
        )) :
            undefined;
        this._perfMon = this._options?._profName ? ( new EventProfiling(this._options._profName)) : undefined;
        this._deliveryQueue = this._options?.deliveryQueue;
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = true;
            if (this._deliveryQueue?.current === this) {
                this._deliveryQueue.reset();
            }
            if (this._listeners) {
                this._listeners = undefined;
                this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.();
            this._leakageMon?.dispose();
        }
    }
    get event() {
        this._event ??= (callback, thisArgs, disposables) => {
            if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                const message = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                console.warn(message);
                const tuple = this._leakageMon.getMostFrequentStack() ?? ['UNKNOWN stack', -1];
                const error = ( new ListenerRefusalError(
                    `${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`,
                    tuple[0]
                ));
                const errorHandler = this._options?.onListenerError || errors_onUnexpectedError;
                errorHandler(error);
                return lifecycle_Disposable.None;
            }
            if (this._disposed) {
                return lifecycle_Disposable.None;
            }
            if (thisArgs) {
                callback = callback.bind(thisArgs);
            }
            const contained = ( new UniqueContainer(callback));
            let removeMonitor;
            if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
                contained.stack = Stacktrace.create();
                removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
            }
            if (!this._listeners) {
                this._options?.onWillAddFirstListener?.(this);
                this._listeners = contained;
                this._options?.onDidAddFirstListener?.(this);
            }
            else if (this._listeners instanceof UniqueContainer) {
                this._deliveryQueue ??= ( new EventDeliveryQueuePrivate());
                this._listeners = [this._listeners, contained];
            }
            else {
                this._listeners.push(contained);
            }
            this._options?.onDidAddListener?.(this);
            this._size++;
            const result = lifecycle_toDisposable(() => {
                removeMonitor?.();
                this._removeListener(contained);
            });
            if (disposables instanceof lifecycle_DisposableStore) {
                disposables.add(result);
            }
            else if (Array.isArray(disposables)) {
                disposables.push(result);
            }
            return result;
        };
        return this._event;
    }
    _removeListener(listener) {
        this._options?.onWillRemoveListener?.(this);
        if (!this._listeners) {
            return;
        }
        if (this._size === 1) {
            this._listeners = undefined;
            this._options?.onDidRemoveLastListener?.(this);
            this._size = 0;
            return;
        }
        const listeners = this._listeners;
        const index = listeners.indexOf(listener);
        if (index === -1) {
            console.log('disposed?', this._disposed);
            console.log('size?', this._size);
            console.log('arr?', JSON.stringify(this._listeners));
            throw ( new Error('Attempted to dispose unknown listener'));
        }
        this._size--;
        listeners[index] = undefined;
        const adjustDeliveryQueue = this._deliveryQueue.current === this;
        if (this._size * compactionThreshold <= listeners.length) {
            let n = 0;
            for (let i = 0; i < listeners.length; i++) {
                if (listeners[i]) {
                    listeners[n++] = listeners[i];
                }
                else if (adjustDeliveryQueue && n < this._deliveryQueue.end) {
                    this._deliveryQueue.end--;
                    if (n < this._deliveryQueue.i) {
                        this._deliveryQueue.i--;
                    }
                }
            }
            listeners.length = n;
        }
    }
    _deliver(listener, value) {
        if (!listener) {
            return;
        }
        const errorHandler = this._options?.onListenerError || errors_onUnexpectedError;
        if (!errorHandler) {
            listener.value(value);
            return;
        }
        try {
            listener.value(value);
        }
        catch (e) {
            errorHandler(e);
        }
    }
    _deliverQueue(dq) {
        const listeners = dq.current._listeners;
        while (dq.i < dq.end) {
            this._deliver(listeners[dq.i++], dq.value);
        }
        dq.reset();
    }
    fire(event) {
        if (this._deliveryQueue?.current) {
            this._deliverQueue(this._deliveryQueue);
            this._perfMon?.stop();
        }
        this._perfMon?.start(this._size);
        if (!this._listeners) ;
        else if (this._listeners instanceof UniqueContainer) {
            this._deliver(this._listeners, event);
        }
        else {
            const dq = this._deliveryQueue;
            dq.enqueue(this, event, this._listeners.length);
            this._deliverQueue(dq);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}
const createEventDeliveryQueue = () => ( new EventDeliveryQueuePrivate());
class EventDeliveryQueuePrivate {
    constructor() {
        this.i = -1;
        this.end = 0;
    }
    enqueue(emitter, value, end) {
        this.i = 0;
        this.end = end;
        this.current = emitter;
        this.value = value;
    }
    reset() {
        this.i = this.end;
        this.current = undefined;
        this.value = undefined;
    }
}
class AsyncEmitter extends (/* unused pure expression or super */ null && (Emitter)) {
    async fireAsync(data, token, promiseJoin) {
        if (!this._listeners) {
            return;
        }
        if (!this._asyncDeliveryQueue) {
            this._asyncDeliveryQueue = ( new LinkedList());
        }
        forEachListener(this._listeners, listener => this._asyncDeliveryQueue.push([listener.value, data]));
        while (this._asyncDeliveryQueue.size > 0 && !token.isCancellationRequested) {
            const [listener, data] = this._asyncDeliveryQueue.shift();
            const thenables = [];
            const event = {
                ...data,
                token,
                waitUntil: (p) => {
                    if (Object.isFrozen(thenables)) {
                        throw ( new Error('waitUntil can NOT be called asynchronous'));
                    }
                    if (promiseJoin) {
                        p = promiseJoin(p, listener);
                    }
                    thenables.push(p);
                }
            };
            try {
                listener(event);
            }
            catch (e) {
                onUnexpectedError(e);
                continue;
            }
            await Promise.allSettled(thenables).then(values => {
                for (const value of values) {
                    if (value.status === 'rejected') {
                        onUnexpectedError(value.reason);
                    }
                }
            });
        }
    }
}
class PauseableEmitter extends Emitter {
    get isPaused() {
        return this._isPaused !== 0;
    }
    constructor(options) {
        super(options);
        this._isPaused = 0;
        this._eventQueue = ( new linkedList_LinkedList());
        this._mergeFn = options?.merge;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                if (this._eventQueue.size > 0) {
                    const events = Array.from(this._eventQueue);
                    this._eventQueue.clear();
                    super.fire(this._mergeFn(events));
                }
            }
            else {
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    super.fire(this._eventQueue.shift());
                }
            }
        }
    }
    fire(event) {
        if (this._size) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            }
            else {
                super.fire(event);
            }
        }
    }
}
class DebounceEmitter extends PauseableEmitter {
    constructor(options) {
        super(options);
        this._delay = options.delay ?? 100;
    }
    fire(event) {
        if (!this._handle) {
            this.pause();
            this._handle = setTimeout(() => {
                this._handle = undefined;
                this.resume();
            }, this._delay);
        }
        super.fire(event);
    }
}
class MicrotaskEmitter extends Emitter {
    constructor(options) {
        super(options);
        this._queuedEvents = [];
        this._mergeFn = options?.merge;
    }
    fire(event) {
        if (!this.hasListeners()) {
            return;
        }
        this._queuedEvents.push(event);
        if (this._queuedEvents.length === 1) {
            queueMicrotask(() => {
                if (this._mergeFn) {
                    super.fire(this._mergeFn(this._queuedEvents));
                }
                else {
                    this._queuedEvents.forEach(e => super.fire(e));
                }
                this._queuedEvents = [];
            });
        }
    }
}
class EventMultiplexer {
    constructor() {
        this.hasListeners = false;
        this.events = [];
        this.emitter = ( new Emitter({
            onWillAddFirstListener: () => this.onFirstListenerAdd(),
            onDidRemoveLastListener: () => this.onLastListenerRemove()
        }));
    }
    get event() {
        return this.emitter.event;
    }
    add(event) {
        const e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        const dispose = () => {
            if (this.hasListeners) {
                this.unhook(e);
            }
            const idx = this.events.indexOf(e);
            this.events.splice(idx, 1);
        };
        return toDisposable(createSingleCallFunction(dispose));
    }
    onFirstListenerAdd() {
        this.hasListeners = true;
        this.events.forEach(e => this.hook(e));
    }
    onLastListenerRemove() {
        this.hasListeners = false;
        this.events.forEach(e => this.unhook(e));
    }
    hook(e) {
        e.listener = e.event(r => this.emitter.fire(r));
    }
    unhook(e) {
        e.listener?.dispose();
        e.listener = null;
    }
    dispose() {
        this.emitter.dispose();
        for (const e of this.events) {
            e.listener?.dispose();
        }
        this.events = [];
    }
}
class DynamicListEventMultiplexer {
    constructor(items, onAddItem, onRemoveItem, getEvent) {
        this._store = ( new DisposableStore());
        const multiplexer = this._store.add(( new EventMultiplexer()));
        const itemListeners = this._store.add(( new DisposableMap()));
        function addItem(instance) {
            itemListeners.set(instance, multiplexer.add(getEvent(instance)));
        }
        for (const instance of items) {
            addItem(instance);
        }
        this._store.add(onAddItem(instance => {
            addItem(instance);
        }));
        this._store.add(onRemoveItem(instance => {
            itemListeners.deleteAndDispose(instance);
        }));
        this.event = multiplexer.event;
    }
    dispose() {
        this._store.dispose();
    }
}
class EventBufferer {
    constructor() {
        this.data = [];
    }
    wrapEvent(event, reduce, initial) {
        return (listener, thisArgs, disposables) => {
            return event(i => {
                const data = this.data[this.data.length - 1];
                if (!reduce) {
                    if (data) {
                        data.buffers.push(() => listener.call(thisArgs, i));
                    }
                    else {
                        listener.call(thisArgs, i);
                    }
                    return;
                }
                const reduceData = data;
                if (!reduceData) {
                    listener.call(thisArgs, reduce(initial, i));
                    return;
                }
                reduceData.items ??= [];
                reduceData.items.push(i);
                if (reduceData.buffers.length === 0) {
                    data.buffers.push(() => {
                        reduceData.reducedResult ??= initial
                            ? reduceData.items.reduce(reduce, initial)
                            : reduceData.items.reduce(reduce);
                        listener.call(thisArgs, reduceData.reducedResult);
                    });
                }
            }, undefined, disposables);
        };
    }
    bufferEvents(fn) {
        const data = { buffers: ( new Array()) };
        this.data.push(data);
        const r = fn();
        this.data.pop();
        data.buffers.forEach(flush => flush());
        return r;
    }
}
class Relay {
    constructor() {
        this.listening = false;
        this.inputEvent = event_Event.None;
        this.inputEventListener = Disposable.None;
        this.emitter = ( new Emitter({
            onDidAddFirstListener: () => {
                this.listening = true;
                this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: () => {
                this.listening = false;
                this.inputEventListener.dispose();
            }
        }));
        this.event = this.emitter.event;
    }
    set input(event) {
        this.inputEvent = event;
        if (this.listening) {
            this.inputEventListener.dispose();
            this.inputEventListener = event(this.emitter.fire, this.emitter);
        }
    }
    dispose() {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    }
}
class ValueWithChangeEvent {
    static const(value) {
        return ( new ConstValueWithChangeEvent(value));
    }
    constructor(_value) {
        this._value = _value;
        this._onDidChange = ( new Emitter());
        this.onDidChange = this._onDidChange.event;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            this._onDidChange.fire(undefined);
        }
    }
}
class ConstValueWithChangeEvent {
    constructor(value) {
        this.value = value;
        this.onDidChange = event_Event.None;
    }
}
function trackSetChanges(getData, onDidChangeData, handleItem) {
    const map = ( new DisposableMap());
    let oldData = ( new Set(getData()));
    for (const d of oldData) {
        map.set(d, handleItem(d));
    }
    const store = ( new DisposableStore());
    store.add(onDidChangeData(() => {
        const newData = getData();
        const diff = diffSets(oldData, newData);
        for (const r of diff.removed) {
            map.deleteAndDispose(r);
        }
        for (const a of diff.added) {
            map.set(a, handleItem(a));
        }
        oldData = ( new Set(newData));
    }));
    store.add(map);
    return store;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/cancellation.js



const shortcutEvent = ( Object.freeze(function (callback, context) {
    const handle = setTimeout(callback.bind(context), 0);
    return { dispose() { clearTimeout(handle); } };
}));
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean'
            && typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = ( Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: event_Event.None
    }));
    CancellationToken.Cancelled = ( Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    }));
})(CancellationToken || (CancellationToken = {}));
class MutableToken {
    constructor() {
        this._isCancelled = false;
        this._emitter = null;
    }
    cancel() {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        if (this._isCancelled) {
            return shortcutEvent;
        }
        if (!this._emitter) {
            this._emitter = ( new Emitter());
        }
        return this._emitter.event;
    }
    dispose() {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    }
}
class cancellation_CancellationTokenSource {
    constructor(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    get token() {
        if (!this._token) {
            this._token = ( new MutableToken());
        }
        return this._token;
    }
    cancel() {
        if (!this._token) {
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            this._token.cancel();
        }
    }
    dispose(cancel = false) {
        if (cancel) {
            this.cancel();
        }
        this._parentListener?.dispose();
        if (!this._token) {
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            this._token.dispose();
        }
    }
}
function cancelOnDispose(store) {
    const source = ( new cancellation_CancellationTokenSource());
    store.add({ dispose() { source.cancel(); } });
    return source.token;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/cache.js



class cache_Cache {
    constructor(task) {
        this.task = task;
        this.result = null;
    }
    get() {
        if (this.result) {
            return this.result;
        }
        const cts = ( new CancellationTokenSource());
        const promise = this.task(cts.token);
        this.result = {
            promise,
            dispose: () => {
                this.result = null;
                cts.cancel();
                cts.dispose();
            }
        };
        return this.result;
    }
}
function identity(t) {
    return t;
}
class LRUCachedFunction {
    constructor(arg1, arg2) {
        this.lastCache = undefined;
        this.lastArgKey = undefined;
        if (typeof arg1 === 'function') {
            this._fn = arg1;
            this._computeKey = identity;
        }
        else {
            this._fn = arg2;
            this._computeKey = arg1.getCacheKey;
        }
    }
    get(arg) {
        const key = this._computeKey(arg);
        if (this.lastArgKey !== key) {
            this.lastArgKey = key;
            this.lastCache = this._fn(arg);
        }
        return this.lastCache;
    }
}
class CachedFunction {
    get cachedValues() {
        return this._map;
    }
    constructor(arg1, arg2) {
        this._map = ( new Map());
        this._map2 = ( new Map());
        if (typeof arg1 === 'function') {
            this._fn = arg1;
            this._computeKey = identity;
        }
        else {
            this._fn = arg2;
            this._computeKey = arg1.getCacheKey;
        }
    }
    get(arg) {
        const key = this._computeKey(arg);
        if (( this._map2.has(key))) {
            return this._map2.get(key);
        }
        const value = this._fn(arg);
        this._map.set(arg, value);
        this._map2.set(key, value);
        return value;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/lazy.js


class lazy_Lazy {
    constructor(executor) {
        this.executor = executor;
        this._didRun = false;
    }
    get hasValue() { return this._didRun; }
    get value() {
        if (!this._didRun) {
            try {
                this._value = this.executor();
            }
            catch (err) {
                this._error = err;
            }
            finally {
                this._didRun = true;
            }
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
    get rawValue() { return this._value; }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/uint.js


var uint_Constants;
(function (Constants) {
    Constants[Constants["MAX_SAFE_SMALL_INTEGER"] = 1073741824] = "MAX_SAFE_SMALL_INTEGER";
    Constants[Constants["MIN_SAFE_SMALL_INTEGER"] = -1073741824] = "MIN_SAFE_SMALL_INTEGER";
    Constants[Constants["MAX_UINT_8"] = 255] = "MAX_UINT_8";
    Constants[Constants["MAX_UINT_16"] = 65535] = "MAX_UINT_16";
    Constants[Constants["MAX_UINT_32"] = 4294967295] = "MAX_UINT_32";
    Constants[Constants["UNICODE_SUPPLEMENTARY_PLANE_BEGIN"] = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(uint_Constants || (uint_Constants = {}));
function toUint8(v) {
    if (v < 0) {
        return 0;
    }
    if (v > uint_Constants.MAX_UINT_8) {
        return uint_Constants.MAX_UINT_8;
    }
    return v | 0;
}
function toUint32(v) {
    if (v < 0) {
        return 0;
    }
    if (v > uint_Constants.MAX_UINT_32) {
        return uint_Constants.MAX_UINT_32;
    }
    return v | 0;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/strings.js






function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
const _formatRegexp = /{(\d+)}/g;
function format(value, ...args) {
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        const idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
            match :
            args[idx];
    });
}
const _format2Regexp = /{([^}]+)}/g;
function format2(template, values) {
    if (( Object.keys(values)).length === 0) {
        return template;
    }
    return template.replace(_format2Regexp, (match, group) => (values[group] ?? match));
}
function htmlAttributeEncodeValue(value) {
    return value.replace(/[<>"'&]/g, ch => {
        switch (ch) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case '\'': return '&apos;';
            case '&': return '&amp;';
        }
        return ch;
    });
}
function strings_escape(html) {
    return html.replace(/[<>&]/g, function (match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}
function escapeRegExpCharacters(value) {
    return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
function count(value, substr) {
    let result = 0;
    let index = value.indexOf(substr);
    while (index !== -1) {
        result++;
        index = value.indexOf(substr, index + substr.length);
    }
    return result;
}
function truncate(value, maxLength, suffix = Ellipsis) {
    if (value.length <= maxLength) {
        return value;
    }
    return `${value.substr(0, maxLength)}${suffix}`;
}
function truncateMiddle(value, maxLength, suffix = Ellipsis) {
    if (value.length <= maxLength) {
        return value;
    }
    const prefixLength = Math.ceil(maxLength / 2) - suffix.length / 2;
    const suffixLength = Math.floor(maxLength / 2) - suffix.length / 2;
    return `${value.substr(0, prefixLength)}${suffix}${value.substr(value.length - suffixLength)}`;
}
function trim(haystack, needle = ' ') {
    const trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    const needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    let offset = 0;
    while (haystack.indexOf(needle, offset) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    const needleLen = needle.length, haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    let offset = haystackLen, idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
function stripWildcards(pattern) {
    return pattern.replace(/\*/g, '');
}
function createRegExp(searchString, isRegex, options = {}) {
    if (!searchString) {
        throw ( new Error('Cannot create regex from empty string'));
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    let modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    if (options.unicode) {
        modifiers += 'u';
    }
    return ( new RegExp(searchString, modifiers));
}
function regExpLeadsToEndlessLoop(regexp) {
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    const match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
function joinStrings(items, separator) {
    return items.filter(item => item !== undefined && item !== null && item !== false).join(separator);
}
function splitLines(str) {
    return str.split(/\r\n|\r|\n/);
}
function firstNonWhitespaceIndex(str) {
    for (let i = 0, len = str.length; i < len; i++) {
        const chCode = str.charCodeAt(i);
        if (chCode !== CharCode.Space && chCode !== CharCode.Tab) {
            return i;
        }
    }
    return -1;
}
function getLeadingWhitespace(str, start = 0, end = str.length) {
    for (let i = start; i < end; i++) {
        const chCode = str.charCodeAt(i);
        if (chCode !== CharCode.Space && chCode !== CharCode.Tab) {
            return str.substring(start, i);
        }
    }
    return str.substring(start, end);
}
function lastNonWhitespaceIndex(str, startIndex = str.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
        const chCode = str.charCodeAt(i);
        if (chCode !== CharCode.Space && chCode !== CharCode.Tab) {
            return i;
        }
    }
    return -1;
}
function getIndentationLength(str) {
    const idx = firstNonWhitespaceIndex(str);
    if (idx === -1) {
        return str.length;
    }
    return idx;
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
function compareSubstring(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
    for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
        const codeA = a.charCodeAt(aStart);
        const codeB = b.charCodeAt(bStart);
        if (codeA < codeB) {
            return -1;
        }
        else if (codeA > codeB) {
            return 1;
        }
    }
    const aLen = aEnd - aStart;
    const bLen = bEnd - bStart;
    if (aLen < bLen) {
        return -1;
    }
    else if (aLen > bLen) {
        return 1;
    }
    return 0;
}
function compareIgnoreCase(a, b) {
    return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
function compareSubstringIgnoreCase(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
    for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
        let codeA = a.charCodeAt(aStart);
        let codeB = b.charCodeAt(bStart);
        if (codeA === codeB) {
            continue;
        }
        if (codeA >= 128 || codeB >= 128) {
            return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
        }
        if (isLowerAsciiLetter(codeA)) {
            codeA -= 32;
        }
        if (isLowerAsciiLetter(codeB)) {
            codeB -= 32;
        }
        const diff = codeA - codeB;
        if (diff === 0) {
            continue;
        }
        return diff;
    }
    const aLen = aEnd - aStart;
    const bLen = bEnd - bStart;
    if (aLen < bLen) {
        return -1;
    }
    else if (aLen > bLen) {
        return 1;
    }
    return 0;
}
function isAsciiDigit(code) {
    return code >= CharCode.Digit0 && code <= CharCode.Digit9;
}
function isLowerAsciiLetter(code) {
    return code >= charCode_CharCode.a && code <= charCode_CharCode.z;
}
function isUpperAsciiLetter(code) {
    return code >= charCode_CharCode.A && code <= charCode_CharCode.Z;
}
function strings_equalsIgnoreCase(a, b) {
    return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}
function strings_startsWithIgnoreCase(str, candidate) {
    const candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return compareSubstringIgnoreCase(str, candidate, 0, candidateLength) === 0;
}
function strings_commonPrefixLength(a, b) {
    const len = Math.min(a.length, b.length);
    let i;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
function commonSuffixLength(a, b) {
    const len = Math.min(a.length, b.length);
    let i;
    const aLastIndex = a.length - 1;
    const bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
function computeCodePoint(highSurrogate, lowSurrogate) {
    return ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00) + 0x10000;
}
function getNextCodePoint(str, len, offset) {
    const charCode = str.charCodeAt(offset);
    if (isHighSurrogate(charCode) && offset + 1 < len) {
        const nextCharCode = str.charCodeAt(offset + 1);
        if (isLowSurrogate(nextCharCode)) {
            return computeCodePoint(charCode, nextCharCode);
        }
    }
    return charCode;
}
function getPrevCodePoint(str, offset) {
    const charCode = str.charCodeAt(offset - 1);
    if (isLowSurrogate(charCode) && offset > 1) {
        const prevCharCode = str.charCodeAt(offset - 2);
        if (isHighSurrogate(prevCharCode)) {
            return computeCodePoint(prevCharCode, charCode);
        }
    }
    return charCode;
}
class CodePointIterator {
    get offset() {
        return this._offset;
    }
    constructor(str, offset = 0) {
        this._str = str;
        this._len = str.length;
        this._offset = offset;
    }
    setOffset(offset) {
        this._offset = offset;
    }
    prevCodePoint() {
        const codePoint = getPrevCodePoint(this._str, this._offset);
        this._offset -= (codePoint >= Constants.UNICODE_SUPPLEMENTARY_PLANE_BEGIN ? 2 : 1);
        return codePoint;
    }
    nextCodePoint() {
        const codePoint = getNextCodePoint(this._str, this._len, this._offset);
        this._offset += (codePoint >= Constants.UNICODE_SUPPLEMENTARY_PLANE_BEGIN ? 2 : 1);
        return codePoint;
    }
    eol() {
        return (this._offset >= this._len);
    }
}
class GraphemeIterator {
    get offset() {
        return this._iterator.offset;
    }
    constructor(str, offset = 0) {
        this._iterator = ( new CodePointIterator(str, offset));
    }
    nextGraphemeLength() {
        const graphemeBreakTree = GraphemeBreakTree.getInstance();
        const iterator = this._iterator;
        const initialOffset = iterator.offset;
        let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());
        while (!iterator.eol()) {
            const offset = iterator.offset;
            const nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.nextCodePoint());
            if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
                iterator.setOffset(offset);
                break;
            }
            graphemeBreakType = nextGraphemeBreakType;
        }
        return (iterator.offset - initialOffset);
    }
    prevGraphemeLength() {
        const graphemeBreakTree = GraphemeBreakTree.getInstance();
        const iterator = this._iterator;
        const initialOffset = iterator.offset;
        let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());
        while (iterator.offset > 0) {
            const offset = iterator.offset;
            const prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(iterator.prevCodePoint());
            if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
                iterator.setOffset(offset);
                break;
            }
            graphemeBreakType = prevGraphemeBreakType;
        }
        return (initialOffset - iterator.offset);
    }
    eol() {
        return this._iterator.eol();
    }
}
function nextCharLength(str, initialOffset) {
    const iterator = ( new GraphemeIterator(str, initialOffset));
    return iterator.nextGraphemeLength();
}
function prevCharLength(str, initialOffset) {
    const iterator = ( new GraphemeIterator(str, initialOffset));
    return iterator.prevGraphemeLength();
}
function getCharContainingOffset(str, offset) {
    if (offset > 0 && isLowSurrogate(str.charCodeAt(offset))) {
        offset--;
    }
    const endOffset = offset + nextCharLength(str, offset);
    const startOffset = endOffset - prevCharLength(str, endOffset);
    return [startOffset, endOffset];
}
let CONTAINS_RTL = (/* unused pure expression or super */ null && (undefined));
function makeContainsRtl() {
    return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function containsRTL(str) {
    if (!CONTAINS_RTL) {
        CONTAINS_RTL = makeContainsRtl();
    }
    return CONTAINS_RTL.test(str);
}
const IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
const UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
function containsUnusualLineTerminators(str) {
    return UNUSUAL_LINE_TERMINATORS.test(str);
}
function isFullWidthCharacter(charCode) {
    return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
        || (charCode >= 0xF900 && charCode <= 0xFAFF)
        || (charCode >= 0xFF01 && charCode <= 0xFF5E));
}
function isEmojiImprecise(x) {
    return ((x >= 0x1F1E6 && x <= 0x1F1FF) || (x === 8986) || (x === 8987) || (x === 9200)
        || (x === 9203) || (x >= 9728 && x <= 10175) || (x === 11088) || (x === 11093)
        || (x >= 127744 && x <= 128591) || (x >= 128640 && x <= 128764)
        || (x >= 128992 && x <= 129008) || (x >= 129280 && x <= 129535)
        || (x >= 129648 && x <= 129782));
}
function lcut(text, n, prefix = '') {
    const trimmed = text.trimStart();
    if (trimmed.length < n) {
        return trimmed;
    }
    const re = /\b/g;
    let i = 0;
    while (re.test(trimmed)) {
        if (trimmed.length - re.lastIndex < n) {
            break;
        }
        i = re.lastIndex;
        re.lastIndex += 1;
    }
    if (i === 0) {
        return trimmed;
    }
    return prefix + trimmed.substring(i).trimStart();
}
const CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/;
const OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/;
const ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/;
const CONTROL_SEQUENCES = ( new RegExp('(?:' + [
    CSI_SEQUENCE.source,
    OSC_SEQUENCE.source,
    ESC_SEQUENCE.source,
].join('|') + ')', 'g'));
function* forAnsiStringParts(str) {
    let last = 0;
    for (const match of str.matchAll(CONTROL_SEQUENCES)) {
        if (last !== match.index) {
            yield { isCode: false, str: str.substring(last, match.index) };
        }
        yield { isCode: true, str: match[0] };
        last = match.index + match[0].length;
    }
    if (last !== str.length) {
        yield { isCode: false, str: str.substring(last) };
    }
}
function removeAnsiEscapeCodes(str) {
    if (str) {
        str = str.replace(CONTROL_SEQUENCES, '');
    }
    return str;
}
const PROMPT_NON_PRINTABLE = /\\\[.*?\\\]/g;
function removeAnsiEscapeCodesFromPrompt(str) {
    return removeAnsiEscapeCodes(str).replace(PROMPT_NON_PRINTABLE, '');
}
const UTF8_BOM_CHARACTER = String.fromCharCode(charCode_CharCode.UTF8_BOM);
function startsWithUTF8BOM(str) {
    return !!(str && str.length > 0 && str.charCodeAt(0) === CharCode.UTF8_BOM);
}
function fuzzyContains(target, query) {
    if (!target || !query) {
        return false;
    }
    if (target.length < query.length) {
        return false;
    }
    const queryLen = query.length;
    const targetLower = target.toLowerCase();
    let index = 0;
    let lastIndexOf = -1;
    while (index < queryLen) {
        const indexOf = targetLower.indexOf(query[index], lastIndexOf + 1);
        if (indexOf < 0) {
            return false;
        }
        lastIndexOf = indexOf;
        index++;
    }
    return true;
}
function containsUppercaseCharacter(target, ignoreEscapedChars = false) {
    if (!target) {
        return false;
    }
    if (ignoreEscapedChars) {
        target = target.replace(/\\./g, '');
    }
    return target.toLowerCase() !== target;
}
function uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function getNLines(str, n = 1) {
    if (n === 0) {
        return '';
    }
    let idx = -1;
    do {
        idx = str.indexOf('\n', idx + 1);
        n--;
    } while (n > 0 && idx >= 0);
    if (idx === -1) {
        return str;
    }
    if (str[idx - 1] === '\r') {
        idx--;
    }
    return str.substr(0, idx);
}
function singleLetterHash(n) {
    const LETTERS_CNT = (CharCode.Z - CharCode.A + 1);
    n = n % (2 * LETTERS_CNT);
    if (n < LETTERS_CNT) {
        return String.fromCharCode(CharCode.a + n);
    }
    return String.fromCharCode(CharCode.A + n - LETTERS_CNT);
}
function breakBetweenGraphemeBreakType(breakTypeA, breakTypeB) {
    if (breakTypeA === GraphemeBreakType.Other) {
        return (breakTypeB !== GraphemeBreakType.Extend && breakTypeB !== GraphemeBreakType.SpacingMark);
    }
    if (breakTypeA === GraphemeBreakType.CR) {
        if (breakTypeB === GraphemeBreakType.LF) {
            return false;
        }
    }
    if (breakTypeA === GraphemeBreakType.Control || breakTypeA === GraphemeBreakType.CR || breakTypeA === GraphemeBreakType.LF) {
        return true;
    }
    if (breakTypeB === GraphemeBreakType.Control || breakTypeB === GraphemeBreakType.CR || breakTypeB === GraphemeBreakType.LF) {
        return true;
    }
    if (breakTypeA === GraphemeBreakType.L) {
        if (breakTypeB === GraphemeBreakType.L || breakTypeB === GraphemeBreakType.V || breakTypeB === GraphemeBreakType.LV || breakTypeB === GraphemeBreakType.LVT) {
            return false;
        }
    }
    if (breakTypeA === GraphemeBreakType.LV || breakTypeA === GraphemeBreakType.V) {
        if (breakTypeB === GraphemeBreakType.V || breakTypeB === GraphemeBreakType.T) {
            return false;
        }
    }
    if (breakTypeA === GraphemeBreakType.LVT || breakTypeA === GraphemeBreakType.T) {
        if (breakTypeB === GraphemeBreakType.T) {
            return false;
        }
    }
    if (breakTypeB === GraphemeBreakType.Extend || breakTypeB === GraphemeBreakType.ZWJ) {
        return false;
    }
    if (breakTypeB === GraphemeBreakType.SpacingMark) {
        return false;
    }
    if (breakTypeA === GraphemeBreakType.Prepend) {
        return false;
    }
    if (breakTypeA === GraphemeBreakType.ZWJ && breakTypeB === GraphemeBreakType.Extended_Pictographic) {
        return false;
    }
    if (breakTypeA === GraphemeBreakType.Regional_Indicator && breakTypeB === GraphemeBreakType.Regional_Indicator) {
        return false;
    }
    return true;
}
var GraphemeBreakType;
(function (GraphemeBreakType) {
    GraphemeBreakType[GraphemeBreakType["Other"] = 0] = "Other";
    GraphemeBreakType[GraphemeBreakType["Prepend"] = 1] = "Prepend";
    GraphemeBreakType[GraphemeBreakType["CR"] = 2] = "CR";
    GraphemeBreakType[GraphemeBreakType["LF"] = 3] = "LF";
    GraphemeBreakType[GraphemeBreakType["Control"] = 4] = "Control";
    GraphemeBreakType[GraphemeBreakType["Extend"] = 5] = "Extend";
    GraphemeBreakType[GraphemeBreakType["Regional_Indicator"] = 6] = "Regional_Indicator";
    GraphemeBreakType[GraphemeBreakType["SpacingMark"] = 7] = "SpacingMark";
    GraphemeBreakType[GraphemeBreakType["L"] = 8] = "L";
    GraphemeBreakType[GraphemeBreakType["V"] = 9] = "V";
    GraphemeBreakType[GraphemeBreakType["T"] = 10] = "T";
    GraphemeBreakType[GraphemeBreakType["LV"] = 11] = "LV";
    GraphemeBreakType[GraphemeBreakType["LVT"] = 12] = "LVT";
    GraphemeBreakType[GraphemeBreakType["ZWJ"] = 13] = "ZWJ";
    GraphemeBreakType[GraphemeBreakType["Extended_Pictographic"] = 14] = "Extended_Pictographic";
})(GraphemeBreakType || (GraphemeBreakType = {}));
class GraphemeBreakTree {
    static { this._INSTANCE = null; }
    static getInstance() {
        if (!GraphemeBreakTree._INSTANCE) {
            GraphemeBreakTree._INSTANCE = ( new GraphemeBreakTree());
        }
        return GraphemeBreakTree._INSTANCE;
    }
    constructor() {
        this._data = getGraphemeBreakRawData();
    }
    getGraphemeBreakType(codePoint) {
        if (codePoint < 32) {
            if (codePoint === charCode_CharCode.LineFeed) {
                return GraphemeBreakType.LF;
            }
            if (codePoint === charCode_CharCode.CarriageReturn) {
                return GraphemeBreakType.CR;
            }
            return GraphemeBreakType.Control;
        }
        if (codePoint < 127) {
            return GraphemeBreakType.Other;
        }
        const data = this._data;
        const nodeCount = data.length / 3;
        let nodeIndex = 1;
        while (nodeIndex <= nodeCount) {
            if (codePoint < data[3 * nodeIndex]) {
                nodeIndex = 2 * nodeIndex;
            }
            else if (codePoint > data[3 * nodeIndex + 1]) {
                nodeIndex = 2 * nodeIndex + 1;
            }
            else {
                return data[3 * nodeIndex + 2];
            }
        }
        return GraphemeBreakType.Other;
    }
}
function getGraphemeBreakRawData() {
    return JSON.parse('[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]');
}
function getLeftDeleteOffset(offset, str) {
    if (offset === 0) {
        return 0;
    }
    const emojiOffset = getOffsetBeforeLastEmojiComponent(offset, str);
    if (emojiOffset !== undefined) {
        return emojiOffset;
    }
    const iterator = ( new CodePointIterator(str, offset));
    iterator.prevCodePoint();
    return iterator.offset;
}
function getOffsetBeforeLastEmojiComponent(initialOffset, str) {
    const iterator = ( new CodePointIterator(str, initialOffset));
    let codePoint = iterator.prevCodePoint();
    while ((isEmojiModifier(codePoint) || codePoint === CodePoint.emojiVariantSelector || codePoint === CodePoint.enclosingKeyCap)) {
        if (iterator.offset === 0) {
            return undefined;
        }
        codePoint = iterator.prevCodePoint();
    }
    if (!isEmojiImprecise(codePoint)) {
        return undefined;
    }
    let resultOffset = iterator.offset;
    if (resultOffset > 0) {
        const optionalZwjCodePoint = iterator.prevCodePoint();
        if (optionalZwjCodePoint === CodePoint.zwj) {
            resultOffset = iterator.offset;
        }
    }
    return resultOffset;
}
function isEmojiModifier(codePoint) {
    return 0x1F3FB <= codePoint && codePoint <= 0x1F3FF;
}
var CodePoint;
(function (CodePoint) {
    CodePoint[CodePoint["zwj"] = 8205] = "zwj";
    CodePoint[CodePoint["emojiVariantSelector"] = 65039] = "emojiVariantSelector";
    CodePoint[CodePoint["enclosingKeyCap"] = 8419] = "enclosingKeyCap";
    CodePoint[CodePoint["space"] = 32] = "space";
})(CodePoint || (CodePoint = {}));
const noBreakWhitespace = '\xa0';
class AmbiguousCharacters {
    static { this.ambiguousCharacterData = ( new lazy_Lazy(() => {
        return JSON.parse('{\"_common\":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],\"_default\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"cs\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"de\":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"es\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"fr\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"it\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ja\":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],\"ko\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pl\":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pt-BR\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"qps-ploc\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ru\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"tr\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"zh-hans\":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],\"zh-hant\":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}');
    })); }
    static { this.cache = ( new LRUCachedFunction({ getCacheKey: JSON.stringify }, (locales) => {
        function arrayToMap(arr) {
            const result = ( new Map());
            for (let i = 0; i < arr.length; i += 2) {
                result.set(arr[i], arr[i + 1]);
            }
            return result;
        }
        function mergeMaps(map1, map2) {
            const result = ( new Map(map1));
            for (const [key, value] of map2) {
                result.set(key, value);
            }
            return result;
        }
        function intersectMaps(map1, map2) {
            if (!map1) {
                return map2;
            }
            const result = ( new Map());
            for (const [key, value] of map1) {
                if (( map2.has(key))) {
                    result.set(key, value);
                }
            }
            return result;
        }
        const data = this.ambiguousCharacterData.value;
        let filteredLocales = locales.filter((l) => !l.startsWith('_') && l in data);
        if (filteredLocales.length === 0) {
            filteredLocales = ['_default'];
        }
        let languageSpecificMap = undefined;
        for (const locale of filteredLocales) {
            const map = arrayToMap(data[locale]);
            languageSpecificMap = intersectMaps(languageSpecificMap, map);
        }
        const commonMap = arrayToMap(data['_common']);
        const map = mergeMaps(commonMap, languageSpecificMap);
        return ( new AmbiguousCharacters(map));
    })); }
    static getInstance(locales) {
        return AmbiguousCharacters.cache.get(Array.from(locales));
    }
    static { this._locales = ( new lazy_Lazy(() => ( Object.keys(AmbiguousCharacters.ambiguousCharacterData.value)).filter((k) => !k.startsWith('_')))); }
    static getLocales() {
        return AmbiguousCharacters._locales.value;
    }
    constructor(confusableDictionary) {
        this.confusableDictionary = confusableDictionary;
    }
    isAmbiguous(codePoint) {
        return ( this.confusableDictionary.has(codePoint));
    }
    containsAmbiguousCharacter(str) {
        for (let i = 0; i < str.length; i++) {
            const codePoint = str.codePointAt(i);
            if (typeof codePoint === 'number' && this.isAmbiguous(codePoint)) {
                return true;
            }
        }
        return false;
    }
    getPrimaryConfusable(codePoint) {
        return this.confusableDictionary.get(codePoint);
    }
    getConfusableCodePoints() {
        return ( new Set(( this.confusableDictionary.keys())));
    }
}
class InvisibleCharacters {
    static getRawData() {
        return JSON.parse('{\"_common\":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],\"cs\":[173,8203,12288],\"de\":[173,8203,12288],\"es\":[8203,12288],\"fr\":[173,8203,12288],\"it\":[160,173,12288],\"ja\":[173],\"ko\":[173,12288],\"pl\":[173,8203,12288],\"pt-BR\":[173,8203,12288],\"qps-ploc\":[160,173,8203,12288],\"ru\":[173,12288],\"tr\":[160,173,8203,12288],\"zh-hans\":[160,173,8203,12288],\"zh-hant\":[173,12288]}');
    }
    static { this._data = undefined; }
    static getData() {
        if (!this._data) {
            this._data = ( new Set([...( Object.values(InvisibleCharacters.getRawData()))].flat()));
        }
        return this._data;
    }
    static isInvisibleCharacter(codePoint) {
        return ( InvisibleCharacters.getData().has(codePoint));
    }
    static containsInvisibleCharacter(str) {
        for (let i = 0; i < str.length; i++) {
            const codePoint = str.codePointAt(i);
            if (typeof codePoint === 'number' && (InvisibleCharacters.isInvisibleCharacter(codePoint) || codePoint === CodePoint.space)) {
                return true;
            }
        }
        return false;
    }
    static get codePoints() {
        return InvisibleCharacters.getData();
    }
}
const Ellipsis = '\u2026';



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/extpath.js







function extpath_isPathSeparator(code) {
    return code === charCode_CharCode.Slash || code === charCode_CharCode.Backslash;
}
function toSlashes(osPath) {
    return osPath.replace(/[\\/]/g, path_posix.sep);
}
function toPosixPath(osPath) {
    if (osPath.indexOf('/') === -1) {
        osPath = toSlashes(osPath);
    }
    if (/^[a-zA-Z]:(\/|$)/.test(osPath)) {
        osPath = '/' + osPath;
    }
    return osPath;
}
function getRoot(path, sep = path_posix.sep) {
    if (!path) {
        return '';
    }
    const len = path.length;
    const firstLetter = path.charCodeAt(0);
    if (extpath_isPathSeparator(firstLetter)) {
        if (extpath_isPathSeparator(path.charCodeAt(1))) {
            if (!extpath_isPathSeparator(path.charCodeAt(2))) {
                let pos = 3;
                const start = pos;
                for (; pos < len; pos++) {
                    if (extpath_isPathSeparator(path.charCodeAt(pos))) {
                        break;
                    }
                }
                if (start !== pos && !extpath_isPathSeparator(path.charCodeAt(pos + 1))) {
                    pos += 1;
                    for (; pos < len; pos++) {
                        if (extpath_isPathSeparator(path.charCodeAt(pos))) {
                            return path.slice(0, pos + 1)
                                .replace(/[\\/]/g, sep);
                        }
                    }
                }
            }
        }
        return sep;
    }
    else if (isWindowsDriveLetter(firstLetter)) {
        if (path.charCodeAt(1) === charCode_CharCode.Colon) {
            if (extpath_isPathSeparator(path.charCodeAt(2))) {
                return path.slice(0, 2) + sep;
            }
            else {
                return path.slice(0, 2);
            }
        }
    }
    let pos = path.indexOf('://');
    if (pos !== -1) {
        pos += 3;
        for (; pos < len; pos++) {
            if (extpath_isPathSeparator(path.charCodeAt(pos))) {
                return path.slice(0, pos + 1);
            }
        }
    }
    return '';
}
function isUNC(path) {
    if (!isWindows) {
        return false;
    }
    if (!path || path.length < 5) {
        return false;
    }
    let code = path.charCodeAt(0);
    if (code !== CharCode.Backslash) {
        return false;
    }
    code = path.charCodeAt(1);
    if (code !== CharCode.Backslash) {
        return false;
    }
    let pos = 2;
    const start = pos;
    for (; pos < path.length; pos++) {
        code = path.charCodeAt(pos);
        if (code === CharCode.Backslash) {
            break;
        }
    }
    if (start === pos) {
        return false;
    }
    code = path.charCodeAt(pos + 1);
    if (isNaN(code) || code === CharCode.Backslash) {
        return false;
    }
    return true;
}
const WINDOWS_INVALID_FILE_CHARS = /[\\/:\*\?"<>\|]/g;
const UNIX_INVALID_FILE_CHARS = /[/]/g;
const WINDOWS_FORBIDDEN_NAMES = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;
function isValidBasename(name, isWindowsOS = isWindows) {
    const invalidFileChars = isWindowsOS ? WINDOWS_INVALID_FILE_CHARS : UNIX_INVALID_FILE_CHARS;
    if (!name || name.length === 0 || /^\s+$/.test(name)) {
        return false;
    }
    invalidFileChars.lastIndex = 0;
    if (invalidFileChars.test(name)) {
        return false;
    }
    if (isWindowsOS && WINDOWS_FORBIDDEN_NAMES.test(name)) {
        return false;
    }
    if (name === '.' || name === '..') {
        return false;
    }
    if (isWindowsOS && name[name.length - 1] === '.') {
        return false;
    }
    if (isWindowsOS && name.length !== name.trim().length) {
        return false;
    }
    if (name.length > 255) {
        return false;
    }
    return true;
}
function isEqual(pathA, pathB, ignoreCase) {
    const identityEquals = (pathA === pathB);
    if (!ignoreCase || identityEquals) {
        return identityEquals;
    }
    if (!pathA || !pathB) {
        return false;
    }
    return equalsIgnoreCase(pathA, pathB);
}
function isEqualOrParent(base, parentCandidate, ignoreCase, separator = sep) {
    if (base === parentCandidate) {
        return true;
    }
    if (!base || !parentCandidate) {
        return false;
    }
    if (parentCandidate.length > base.length) {
        return false;
    }
    if (ignoreCase) {
        const beginsWith = strings_startsWithIgnoreCase(base, parentCandidate);
        if (!beginsWith) {
            return false;
        }
        if (parentCandidate.length === base.length) {
            return true;
        }
        let sepOffset = parentCandidate.length;
        if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
            sepOffset--;
        }
        return base.charAt(sepOffset) === separator;
    }
    if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
        parentCandidate += separator;
    }
    return base.indexOf(parentCandidate) === 0;
}
function isWindowsDriveLetter(char0) {
    return char0 >= charCode_CharCode.A && char0 <= charCode_CharCode.Z || char0 >= charCode_CharCode.a && char0 <= charCode_CharCode.z;
}
function hasDriveLetter(path, isWindowsOS = isWindows) {
    if (isWindowsOS) {
        return isWindowsDriveLetter(path.charCodeAt(0)) && path.charCodeAt(1) === CharCode.Colon;
    }
    return false;
}
function getDriveLetter(path, isWindowsOS = isWindows) {
    return hasDriveLetter(path, isWindowsOS) ? path[0] : undefined;
}
function indexOfPath(path, candidate, ignoreCase) {
    if (candidate.length > path.length) {
        return -1;
    }
    if (path === candidate) {
        return 0;
    }
    if (ignoreCase) {
        path = path.toLowerCase();
        candidate = candidate.toLowerCase();
    }
    return path.indexOf(candidate);
}
function parseLineAndColumnAware(rawPath) {
    const segments = rawPath.split(':');
    let path = undefined;
    let line = undefined;
    let column = undefined;
    for (const segment of segments) {
        const segmentAsNumber = Number(segment);
        if (!isNumber(segmentAsNumber)) {
            path = !!path ? [path, segment].join(':') : segment;
        }
        else if (line === undefined) {
            line = segmentAsNumber;
        }
        else if (column === undefined) {
            column = segmentAsNumber;
        }
    }
    if (!path) {
        throw ( new Error('Format for `--goto` should be: `FILE:LINE(:COLUMN)`'));
    }
    return {
        path,
        line: line !== undefined ? line : undefined,
        column: column !== undefined ? column : line !== undefined ? 1 : undefined
    };
}
const pathChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const windowsSafePathFirstChars = 'BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789';
function randomPath(parent, prefix, randomLength = 8) {
    let suffix = '';
    for (let i = 0; i < randomLength; i++) {
        let pathCharsTouse;
        if (i === 0 && isWindows && true && (randomLength === 3 || randomLength === 4)) {
            pathCharsTouse = windowsSafePathFirstChars;
        }
        else {
            pathCharsTouse = pathChars;
        }
        suffix += pathCharsTouse.charAt(Math.floor(Math.random() * pathCharsTouse.length));
    }
    let randomFileName;
    {
        randomFileName = suffix;
    }
    return randomFileName;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/network.js









var Schemas;
(function (Schemas) {
    Schemas.inMemory = 'inmemory';
    Schemas.vscode = 'vscode';
    Schemas.internal = 'private';
    Schemas.walkThrough = 'walkThrough';
    Schemas.walkThroughSnippet = 'walkThroughSnippet';
    Schemas.http = 'http';
    Schemas.https = 'https';
    Schemas.file = 'file';
    Schemas.mailto = 'mailto';
    Schemas.untitled = 'untitled';
    Schemas.data = 'data';
    Schemas.command = 'command';
    Schemas.vscodeRemote = 'vscode-remote';
    Schemas.vscodeRemoteResource = 'vscode-remote-resource';
    Schemas.vscodeManagedRemoteResource = 'vscode-managed-remote-resource';
    Schemas.vscodeUserData = 'vscode-userdata';
    Schemas.vscodeCustomEditor = 'vscode-custom-editor';
    Schemas.vscodeNotebookCell = 'vscode-notebook-cell';
    Schemas.vscodeNotebookCellMetadata = 'vscode-notebook-cell-metadata';
    Schemas.vscodeNotebookCellMetadataDiff = 'vscode-notebook-cell-metadata-diff';
    Schemas.vscodeNotebookCellOutput = 'vscode-notebook-cell-output';
    Schemas.vscodeNotebookCellOutputDiff = 'vscode-notebook-cell-output-diff';
    Schemas.vscodeNotebookMetadata = 'vscode-notebook-metadata';
    Schemas.vscodeInteractiveInput = 'vscode-interactive-input';
    Schemas.vscodeSettings = 'vscode-settings';
    Schemas.vscodeWorkspaceTrust = 'vscode-workspace-trust';
    Schemas.vscodeTerminal = 'vscode-terminal';
    Schemas.vscodeChatCodeBlock = 'vscode-chat-code-block';
    Schemas.vscodeChatCodeCompareBlock = 'vscode-chat-code-compare-block';
    Schemas.vscodeChatSesssion = 'vscode-chat-editor';
    Schemas.vscodeChatInput = 'chatSessionInput';
    Schemas.webviewPanel = 'webview-panel';
    Schemas.vscodeWebview = 'vscode-webview';
    Schemas.extension = 'extension';
    Schemas.vscodeFileResource = 'vscode-file';
    Schemas.tmp = 'tmp';
    Schemas.vsls = 'vsls';
    Schemas.vscodeSourceControl = 'vscode-scm';
    Schemas.commentsInput = 'comment';
    Schemas.codeSetting = 'code-setting';
    Schemas.outputChannel = 'output';
    Schemas.accessibleView = 'accessible-view';
})(Schemas || (Schemas = {}));
function matchesScheme(target, scheme) {
    if (URI.isUri(target)) {
        return equalsIgnoreCase(target.scheme, scheme);
    }
    else {
        return startsWithIgnoreCase(target, scheme + ':');
    }
}
function matchesSomeScheme(target, ...schemes) {
    return ( schemes.some(scheme => matchesScheme(target, scheme)));
}
const connectionTokenQueryName = 'tkn';
class RemoteAuthoritiesImpl {
    constructor() {
        this._hosts = Object.create(null);
        this._ports = Object.create(null);
        this._connectionTokens = Object.create(null);
        this._preferredWebSchema = 'http';
        this._delegate = null;
        this._serverRootPath = '/';
    }
    setPreferredWebSchema(schema) {
        this._preferredWebSchema = schema;
    }
    setDelegate(delegate) {
        this._delegate = delegate;
    }
    setServerRootPath(product, serverBasePath) {
        this._serverRootPath = path_posix.join(serverBasePath ?? '/', getServerProductSegment(product));
    }
    getServerRootPath() {
        return this._serverRootPath;
    }
    get _remoteResourcesPath() {
        return path_posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
    }
    set(authority, host, port) {
        this._hosts[authority] = host;
        this._ports[authority] = port;
    }
    setConnectionToken(authority, connectionToken) {
        this._connectionTokens[authority] = connectionToken;
    }
    getPreferredWebSchema() {
        return this._preferredWebSchema;
    }
    rewrite(uri) {
        if (this._delegate) {
            try {
                return this._delegate(uri);
            }
            catch (err) {
                errors_onUnexpectedError(err);
                return uri;
            }
        }
        const authority = uri.authority;
        let host = this._hosts[authority];
        if (host && host.indexOf(':') !== -1 && host.indexOf('[') === -1) {
            host = `[${host}]`;
        }
        const port = this._ports[authority];
        const connectionToken = this._connectionTokens[authority];
        let query = `path=${encodeURIComponent(uri.path)}`;
        if (typeof connectionToken === 'string') {
            query += `&${connectionTokenQueryName}=${encodeURIComponent(connectionToken)}`;
        }
        return ( uri_URI.from({
            scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource,
            authority: `${host}:${port}`,
            path: this._remoteResourcesPath,
            query
        }));
    }
}
const RemoteAuthorities = ( new RemoteAuthoritiesImpl());
function getServerProductSegment(product) {
    return `${product.quality ?? 'oss'}-${product.commit ?? 'dev'}`;
}
const nodeModulesPath = 'vs/../../node_modules';
const VSCODE_AUTHORITY = 'vscode-app';
class FileAccessImpl {
    constructor() {
        this.staticBrowserUris = ( new ResourceMap());
        this.appResourcePathUrls = ( new Map());
    }
    static { this.FALLBACK_AUTHORITY = VSCODE_AUTHORITY; }
    registerAppResourcePathUrl(moduleId, url) {
        this.appResourcePathUrls.set(moduleId, url);
    }
    toUrl(moduleId) {
        let url = this.appResourcePathUrls.get(moduleId);
        if (typeof url === 'function') {
            url = url();
        }
        return ( ( new URL(url ?? moduleId, globalThis.location?.href ?? "file:///Users/aliadelelroby/Developer/ai-powered-product/monaco-vscode-api-nextjs/node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/network.js")).toString());
    }
    asBrowserUri(resourcePath) {
        const uri = this.toUri(resourcePath);
        return this.uriToBrowserUri(uri);
    }
    uriToBrowserUri(uri) {
        if (uri.scheme === Schemas.vscodeRemote) {
            return RemoteAuthorities.rewrite(uri);
        }
        if (
        uri.scheme === Schemas.file &&
            (
            (
            isNative || (webWorkerOrigin === `${Schemas.vscodeFileResource}://${FileAccessImpl.FALLBACK_AUTHORITY}`)))) {
            return uri.with({
                scheme: Schemas.vscodeFileResource,
                authority: uri.authority || FileAccessImpl.FALLBACK_AUTHORITY,
                query: null,
                fragment: null
            });
        }
        return this.staticBrowserUris.get(uri) ?? uri;
    }
    asFileUri(resourcePath) {
        const uri = this.toUri(resourcePath);
        return this.uriToFileUri(uri);
    }
    uriToFileUri(uri) {
        if (uri.scheme === Schemas.vscodeFileResource) {
            return uri.with({
                scheme: Schemas.file,
                authority: uri.authority !== FileAccessImpl.FALLBACK_AUTHORITY ? uri.authority : null,
                query: null,
                fragment: null
            });
        }
        return uri;
    }
    toUri(uriOrModule) {
        if (uri_URI.isUri(uriOrModule)) {
            return uriOrModule;
        }
        if (globalThis._VSCODE_FILE_ROOT) {
            const rootUriOrPath = globalThis._VSCODE_FILE_ROOT;
            if (/^\w[\w\d+.-]*:\/\//.test(rootUriOrPath)) {
                return uri_URI.joinPath(( uri_URI.parse(rootUriOrPath, true)), uriOrModule);
            }
            const modulePath = join(rootUriOrPath, uriOrModule);
            return uri_URI.file(modulePath);
        }
        return ( uri_URI.parse(this.toUrl(uriOrModule)));
    }
    registerStaticBrowserUri(uri, browserUri) {
        this.staticBrowserUris.set(uri, browserUri);
        return lifecycle_toDisposable(() => {
            if (this.staticBrowserUris.get(uri) === browserUri) {
                this.staticBrowserUris.delete(uri);
            }
        });
    }
    getRegisteredBrowserUris() {
        return ( this.staticBrowserUris.keys());
    }
}
const FileAccess = ( new FileAccessImpl());
var COI;
(function (COI) {
    const coiHeaders = ( new Map([
        ['1', { 'Cross-Origin-Opener-Policy': 'same-origin' }],
        ['2', { 'Cross-Origin-Embedder-Policy': 'require-corp' }],
        ['3', { 'Cross-Origin-Opener-Policy': 'same-origin', 'Cross-Origin-Embedder-Policy': 'require-corp' }],
    ]));
    COI.CoopAndCoep = ( Object.freeze(coiHeaders.get('3')));
    const coiSearchParamName = 'vscode-coi';
    function getHeadersFromQuery(url) {
        let params;
        if (typeof url === 'string') {
            params = ( new URL(url)).searchParams;
        }
        else if (url instanceof URL) {
            params = url.searchParams;
        }
        else if (uri_URI.isUri(url)) {
            params = ( new URL(( url.toString(true)))).searchParams;
        }
        const value = params?.get(coiSearchParamName);
        if (!value) {
            return undefined;
        }
        return coiHeaders.get(value);
    }
    COI.getHeadersFromQuery = getHeadersFromQuery;
    function addSearchParam(urlOrSearch, coop, coep) {
        if (!globalThis.crossOriginIsolated) {
            return;
        }
        const value = coop && coep ? '3' : coep ? '2' : '1';
        if (urlOrSearch instanceof URLSearchParams) {
            urlOrSearch.set(coiSearchParamName, value);
        }
        else {
            urlOrSearch[coiSearchParamName] = value;
        }
    }
    COI.addSearchParam = addSearchParam;
})(COI || (COI = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/resources.js









function originalFSPath(uri) {
    return uriToFsPath(uri, true);
}
class ExtUri {
    constructor(_ignorePathCasing) {
        this._ignorePathCasing = _ignorePathCasing;
    }
    compare(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
            return 0;
        }
        return compare(this.getComparisonKey(uri1, ignoreFragment), this.getComparisonKey(uri2, ignoreFragment));
    }
    isEqual(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
            return true;
        }
        if (!uri1 || !uri2) {
            return false;
        }
        return this.getComparisonKey(uri1, ignoreFragment) === this.getComparisonKey(uri2, ignoreFragment);
    }
    getComparisonKey(uri, ignoreFragment = false) {
        return ( uri.with({
            path: this._ignorePathCasing(uri) ? uri.path.toLowerCase() : undefined,
            fragment: ignoreFragment ? null : undefined
        }).toString());
    }
    ignorePathCasing(uri) {
        return this._ignorePathCasing(uri);
    }
    isEqualOrParent(base, parentCandidate, ignoreFragment = false) {
        if (base.scheme === parentCandidate.scheme) {
            if (base.scheme === Schemas.file) {
                return isEqualOrParent(originalFSPath(base), originalFSPath(parentCandidate), this._ignorePathCasing(base)) && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
            }
            if (isEqualAuthority(base.authority, parentCandidate.authority)) {
                return isEqualOrParent(base.path, parentCandidate.path, this._ignorePathCasing(base), '/') && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
            }
        }
        return false;
    }
    joinPath(resource, ...pathFragment) {
        return uri_URI.joinPath(resource, ...pathFragment);
    }
    basenameOrAuthority(resource) {
        return resources_basename(resource) || resource.authority;
    }
    basename(resource) {
        return path_posix.basename(resource.path);
    }
    extname(resource) {
        return path_posix.extname(resource.path);
    }
    dirname(resource) {
        if (resource.path.length === 0) {
            return resource;
        }
        let dirname;
        if (resource.scheme === Schemas.file) {
            dirname = uri_URI.file(path_dirname(originalFSPath(resource))).path;
        }
        else {
            dirname = path_posix.dirname(resource.path);
            if (resource.authority && dirname.length && dirname.charCodeAt(0) !== charCode_CharCode.Slash) {
                console.error(`dirname("${resource.toString})) resulted in a relative path`);
                dirname = '/';
            }
        }
        return resource.with({
            path: dirname
        });
    }
    normalizePath(resource) {
        if (!resource.path.length) {
            return resource;
        }
        let normalizedPath;
        if (resource.scheme === Schemas.file) {
            normalizedPath = uri_URI.file(normalize(originalFSPath(resource))).path;
        }
        else {
            normalizedPath = path_posix.normalize(resource.path);
        }
        return resource.with({
            path: normalizedPath
        });
    }
    relativePath(from, to) {
        if (from.scheme !== to.scheme || !isEqualAuthority(from.authority, to.authority)) {
            return undefined;
        }
        if (from.scheme === Schemas.file) {
            const relativePath = relative(originalFSPath(from), originalFSPath(to));
            return platform_isWindows ? toSlashes(relativePath) : relativePath;
        }
        let fromPath = from.path || '/';
        const toPath = to.path || '/';
        if (this._ignorePathCasing(from)) {
            let i = 0;
            for (const len = Math.min(fromPath.length, toPath.length); i < len; i++) {
                if (fromPath.charCodeAt(i) !== toPath.charCodeAt(i)) {
                    if (fromPath.charAt(i).toLowerCase() !== toPath.charAt(i).toLowerCase()) {
                        break;
                    }
                }
            }
            fromPath = toPath.substr(0, i) + fromPath.substr(i);
        }
        return path_posix.relative(fromPath, toPath);
    }
    resolvePath(base, path) {
        if (base.scheme === Schemas.file) {
            const newURI = uri_URI.file(resolve(originalFSPath(base), path));
            return base.with({
                authority: newURI.authority,
                path: newURI.path
            });
        }
        path = toPosixPath(path);
        return base.with({
            path: path_posix.resolve(base.path, path)
        });
    }
    isAbsolutePath(resource) {
        return !!resource.path && resource.path[0] === '/';
    }
    isEqualAuthority(a1, a2) {
        return a1 === a2 || (a1 !== undefined && a2 !== undefined && strings_equalsIgnoreCase(a1, a2));
    }
    hasTrailingPathSeparator(resource, sep$1 = sep) {
        if (resource.scheme === Schemas.file) {
            const fsp = originalFSPath(resource);
            return fsp.length > getRoot(fsp).length && fsp[fsp.length - 1] === sep$1;
        }
        else {
            const p = resource.path;
            return (p.length > 1 && p.charCodeAt(p.length - 1) === charCode_CharCode.Slash) && !(/^[a-zA-Z]:(\/$|\\$)/.test(resource.fsPath));
        }
    }
    removeTrailingPathSeparator(resource, sep$1 = sep) {
        if (hasTrailingPathSeparator(resource, sep$1)) {
            return resource.with({ path: resource.path.substr(0, resource.path.length - 1) });
        }
        return resource;
    }
    addTrailingPathSeparator(resource, sep$1 = sep) {
        let isRootSep = false;
        if (resource.scheme === Schemas.file) {
            const fsp = originalFSPath(resource);
            isRootSep = ((fsp !== undefined) && (fsp.length === getRoot(fsp).length) && (fsp[fsp.length - 1] === sep$1));
        }
        else {
            sep$1 = '/';
            const p = resource.path;
            isRootSep = p.length === 1 && p.charCodeAt(p.length - 1) === charCode_CharCode.Slash;
        }
        if (!isRootSep && !hasTrailingPathSeparator(resource, sep$1)) {
            return resource.with({ path: resource.path + '/' });
        }
        return resource;
    }
}
const resources_extUri = ( new ExtUri(() => false));
const extUriBiasedIgnorePathCase = ( new ExtUri(uri => {
    return uri.scheme === Schemas.file ? !isLinux : true;
}));
const extUriIgnorePathCase = ( new ExtUri(_ => true));
const resources_isEqual = resources_extUri.isEqual.bind(resources_extUri);
const resources_isEqualOrParent = resources_extUri.isEqualOrParent.bind(resources_extUri);
resources_extUri.getComparisonKey.bind(resources_extUri);
const basenameOrAuthority = resources_extUri.basenameOrAuthority.bind(resources_extUri);
const resources_basename = resources_extUri.basename.bind(resources_extUri);
const resources_extname = resources_extUri.extname.bind(resources_extUri);
const dirname = resources_extUri.dirname.bind(resources_extUri);
const joinPath = resources_extUri.joinPath.bind(resources_extUri);
const normalizePath = resources_extUri.normalizePath.bind(resources_extUri);
const relativePath = resources_extUri.relativePath.bind(resources_extUri);
const resolvePath = resources_extUri.resolvePath.bind(resources_extUri);
const isAbsolutePath = resources_extUri.isAbsolutePath.bind(resources_extUri);
const isEqualAuthority = resources_extUri.isEqualAuthority.bind(resources_extUri);
const hasTrailingPathSeparator = resources_extUri.hasTrailingPathSeparator.bind(resources_extUri);
const removeTrailingPathSeparator = resources_extUri.removeTrailingPathSeparator.bind(resources_extUri);
const addTrailingPathSeparator = resources_extUri.addTrailingPathSeparator.bind(resources_extUri);
function distinctParents(items, resourceAccessor) {
    const distinctParents = [];
    for (let i = 0; i < items.length; i++) {
        const candidateResource = resourceAccessor(items[i]);
        if (( items.some((otherItem, index) => {
            if (index === i) {
                return false;
            }
            return resources_isEqualOrParent(candidateResource, resourceAccessor(otherItem));
        }))) {
            continue;
        }
        distinctParents.push(items[i]);
    }
    return distinctParents;
}
var DataUri;
(function (DataUri) {
    DataUri.META_DATA_LABEL = 'label';
    DataUri.META_DATA_DESCRIPTION = 'description';
    DataUri.META_DATA_SIZE = 'size';
    DataUri.META_DATA_MIME = 'mime';
    function parseMetaData(dataUri) {
        const metadata = ( new Map());
        const meta = dataUri.path.substring(dataUri.path.indexOf(';') + 1, dataUri.path.lastIndexOf(';'));
        meta.split(';').forEach(property => {
            const [key, value] = property.split(':');
            if (key && value) {
                metadata.set(key, value);
            }
        });
        const mime = dataUri.path.substring(0, dataUri.path.indexOf(';'));
        if (mime) {
            metadata.set(DataUri.META_DATA_MIME, mime);
        }
        return metadata;
    }
    DataUri.parseMetaData = parseMetaData;
})(DataUri || (DataUri = {}));
function toLocalResource(resource, authority, localScheme) {
    if (authority) {
        let path = resource.path;
        if (path && path[0] !== posix.sep) {
            path = posix.sep + path;
        }
        return resource.with({ scheme: localScheme, authority, path });
    }
    return resource.with({ scheme: localScheme });
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/symbols.js


const symbols_MicrotaskDelay = Symbol('MicrotaskDelay');



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/async.js










function isThenable(obj) {
    return !!obj && typeof obj.then === 'function';
}
function createCancelablePromise(callback) {
    const source = ( new CancellationTokenSource());
    const thenable = callback(source.token);
    let isCancelled = false;
    const promise = ( new Promise((resolve, reject) => {
        const subscription = source.token.onCancellationRequested(() => {
            isCancelled = true;
            subscription.dispose();
            reject(( new CancellationError()));
        });
        Promise.resolve(thenable).then(value => {
            subscription.dispose();
            source.dispose();
            if (!isCancelled) {
                resolve(value);
            }
            else if (isDisposable(value)) {
                value.dispose();
            }
        }, err => {
            subscription.dispose();
            source.dispose();
            reject(err);
        });
    }));
    return new (class {
        cancel() {
            source.cancel();
            source.dispose();
        }
        then(resolve, reject) {
            return promise.then(resolve, reject);
        }
        catch(reject) {
            return this.then(undefined, reject);
        }
        finally(onfinally) {
            return promise.finally(onfinally);
        }
    });
}
function raceCancellation(promise, token, defaultValue) {
    return ( new Promise((resolve, reject) => {
        const ref = token.onCancellationRequested(() => {
            ref.dispose();
            resolve(defaultValue);
        });
        promise.then(resolve, reject).finally(() => ref.dispose());
    }));
}
function raceCancellationError(promise, token) {
    return ( new Promise((resolve, reject) => {
        const ref = token.onCancellationRequested(() => {
            ref.dispose();
            reject(( new CancellationError()));
        });
        promise.then(resolve, reject).finally(() => ref.dispose());
    }));
}
function notCancellablePromise(promise) {
    return ( new Promise((resolve, reject) => {
        promise.then(resolve, reject);
    }));
}
function raceCancellablePromises(cancellablePromises) {
    let resolvedPromiseIndex = -1;
    const promises = ( cancellablePromises.map(
        (promise, index) => promise.then(result => { resolvedPromiseIndex = index; return result; })
    ));
    const promise = Promise.race(promises);
    promise.cancel = () => {
        cancellablePromises.forEach((cancellablePromise, index) => {
            if (index !== resolvedPromiseIndex && cancellablePromise.cancel) {
                cancellablePromise.cancel();
            }
        });
    };
    promise.finally(() => {
        promise.cancel();
    });
    return promise;
}
function raceTimeout(promise, timeout, onTimeout) {
    let promiseResolve = undefined;
    const timer = setTimeout(() => {
        promiseResolve?.(undefined);
        onTimeout?.();
    }, timeout);
    return Promise.race([
        promise.finally(() => clearTimeout(timer)),
        ( new Promise(resolve => promiseResolve = resolve))
    ]);
}
function asPromise(callback) {
    return ( new Promise((resolve, reject) => {
        const item = callback();
        if (isThenable(item)) {
            item.then(resolve, reject);
        }
        else {
            resolve(item);
        }
    }));
}
function promiseWithResolvers() {
    let resolve;
    let reject;
    const promise = ( new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    }));
    return { promise, resolve: resolve, reject: reject };
}
class Throttler {
    constructor() {
        this.isDisposed = false;
        this.activePromise = null;
        this.queuedPromise = null;
        this.queuedPromiseFactory = null;
    }
    queue(promiseFactory) {
        if (this.isDisposed) {
            return Promise.reject(( new Error('Throttler is disposed')));
        }
        if (this.activePromise) {
            this.queuedPromiseFactory = promiseFactory;
            if (!this.queuedPromise) {
                const onComplete = () => {
                    this.queuedPromise = null;
                    if (this.isDisposed) {
                        return;
                    }
                    const result = this.queue(this.queuedPromiseFactory);
                    this.queuedPromiseFactory = null;
                    return result;
                };
                this.queuedPromise = ( new Promise(resolve => {
                    this.activePromise.then(onComplete, onComplete).then(resolve);
                }));
            }
            return ( new Promise((resolve, reject) => {
                this.queuedPromise.then(resolve, reject);
            }));
        }
        this.activePromise = promiseFactory();
        return ( new Promise((resolve, reject) => {
            this.activePromise.then((result) => {
                this.activePromise = null;
                resolve(result);
            }, (err) => {
                this.activePromise = null;
                reject(err);
            });
        }));
    }
    dispose() {
        this.isDisposed = true;
    }
}
class Sequencer {
    constructor() {
        this.current = Promise.resolve(null);
    }
    queue(promiseTask) {
        return this.current = this.current.then(() => promiseTask(), () => promiseTask());
    }
}
class SequencerByKey {
    constructor() {
        this.promiseMap = ( new Map());
    }
    queue(key, promiseTask) {
        const runningPromise = this.promiseMap.get(key) ?? Promise.resolve();
        const newPromise = runningPromise
            .catch(() => { })
            .then(promiseTask)
            .finally(() => {
            if (this.promiseMap.get(key) === newPromise) {
                this.promiseMap.delete(key);
            }
        });
        this.promiseMap.set(key, newPromise);
        return newPromise;
    }
    keys() {
        return ( this.promiseMap.keys());
    }
}
const timeoutDeferred = (timeout, fn) => {
    let scheduled = true;
    const handle = setTimeout(() => {
        scheduled = false;
        fn();
    }, timeout);
    return {
        isTriggered: () => scheduled,
        dispose: () => {
            clearTimeout(handle);
            scheduled = false;
        },
    };
};
const microtaskDeferred = (fn) => {
    let scheduled = true;
    queueMicrotask(() => {
        if (scheduled) {
            scheduled = false;
            fn();
        }
    });
    return {
        isTriggered: () => scheduled,
        dispose: () => { scheduled = false; },
    };
};
class Delayer {
    constructor(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.deferred = null;
        this.completionPromise = null;
        this.doResolve = null;
        this.doReject = null;
        this.task = null;
    }
    trigger(task, delay = this.defaultDelay) {
        this.task = task;
        this.cancelTimeout();
        if (!this.completionPromise) {
            this.completionPromise = ( new Promise((resolve, reject) => {
                this.doResolve = resolve;
                this.doReject = reject;
            })).then(() => {
                this.completionPromise = null;
                this.doResolve = null;
                if (this.task) {
                    const task = this.task;
                    this.task = null;
                    return task();
                }
                return undefined;
            });
        }
        const fn = () => {
            this.deferred = null;
            this.doResolve?.(null);
        };
        this.deferred = delay === MicrotaskDelay ? microtaskDeferred(fn) : timeoutDeferred(delay, fn);
        return this.completionPromise;
    }
    isTriggered() {
        return !!this.deferred?.isTriggered();
    }
    cancel() {
        this.cancelTimeout();
        if (this.completionPromise) {
            this.doReject?.(( new CancellationError()));
            this.completionPromise = null;
        }
    }
    cancelTimeout() {
        this.deferred?.dispose();
        this.deferred = null;
    }
    dispose() {
        this.cancel();
    }
}
class ThrottledDelayer {
    constructor(defaultDelay) {
        this.delayer = ( new Delayer(defaultDelay));
        this.throttler = ( new Throttler());
    }
    trigger(promiseFactory, delay) {
        return this.delayer.trigger(() => this.throttler.queue(promiseFactory), delay);
    }
    isTriggered() {
        return this.delayer.isTriggered();
    }
    cancel() {
        this.delayer.cancel();
    }
    dispose() {
        this.delayer.dispose();
        this.throttler.dispose();
    }
}
class Barrier {
    constructor() {
        this._isOpen = false;
        this._promise = ( new Promise((c, e) => {
            this._completePromise = c;
        }));
    }
    isOpen() {
        return this._isOpen;
    }
    open() {
        this._isOpen = true;
        this._completePromise(true);
    }
    wait() {
        return this._promise;
    }
}
class AutoOpenBarrier extends Barrier {
    constructor(autoOpenTimeMs) {
        super();
        this._timeout = setTimeout(() => this.open(), autoOpenTimeMs);
    }
    open() {
        clearTimeout(this._timeout);
        super.open();
    }
}
function timeout(millis, token) {
    if (!token) {
        return createCancelablePromise(token => timeout(millis, token));
    }
    return ( new Promise((resolve, reject) => {
        const handle = setTimeout(() => {
            disposable.dispose();
            resolve();
        }, millis);
        const disposable = token.onCancellationRequested(() => {
            clearTimeout(handle);
            disposable.dispose();
            reject(( new CancellationError()));
        });
    }));
}
function disposableTimeout(handler, timeout = 0, store) {
    const timer = setTimeout(() => {
        handler();
        if (store) {
            disposable.dispose();
        }
    }, timeout);
    const disposable = toDisposable(() => {
        clearTimeout(timer);
        store?.delete(disposable);
    });
    store?.add(disposable);
    return disposable;
}
function sequence(promiseFactories) {
    const results = [];
    let index = 0;
    const len = promiseFactories.length;
    function next() {
        return index < len ? promiseFactories[index++]() : null;
    }
    function thenHandler(result) {
        if (result !== undefined && result !== null) {
            results.push(result);
        }
        const n = next();
        if (n) {
            return n.then(thenHandler);
        }
        return Promise.resolve(results);
    }
    return Promise.resolve(null).then(thenHandler);
}
function first(promiseFactories, shouldStop = t => !!t, defaultValue = null) {
    let index = 0;
    const len = promiseFactories.length;
    const loop = () => {
        if (index >= len) {
            return Promise.resolve(defaultValue);
        }
        const factory = promiseFactories[index++];
        const promise = Promise.resolve(factory());
        return promise.then(result => {
            if (shouldStop(result)) {
                return Promise.resolve(result);
            }
            return loop();
        });
    };
    return loop();
}
class Limiter {
    constructor(maxDegreeOfParalellism) {
        this._size = 0;
        this._isDisposed = false;
        this.maxDegreeOfParalellism = maxDegreeOfParalellism;
        this.outstandingPromises = [];
        this.runningPromises = 0;
        this._onDrained = ( new Emitter());
    }
    whenIdle() {
        return this.size > 0
            ? event_Event.toPromise(this.onDrained)
            : Promise.resolve();
    }
    get onDrained() {
        return this._onDrained.event;
    }
    get size() {
        return this._size;
    }
    queue(factory) {
        if (this._isDisposed) {
            throw ( new Error('Object has been disposed'));
        }
        this._size++;
        return ( new Promise((c, e) => {
            this.outstandingPromises.push({ factory, c, e });
            this.consume();
        }));
    }
    consume() {
        while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
            const iLimitedTask = this.outstandingPromises.shift();
            this.runningPromises++;
            const promise = iLimitedTask.factory();
            promise.then(iLimitedTask.c, iLimitedTask.e);
            promise.then(() => this.consumed(), () => this.consumed());
        }
    }
    consumed() {
        if (this._isDisposed) {
            return;
        }
        this.runningPromises--;
        if (--this._size === 0) {
            this._onDrained.fire();
        }
        if (this.outstandingPromises.length > 0) {
            this.consume();
        }
    }
    clear() {
        if (this._isDisposed) {
            throw ( new Error('Object has been disposed'));
        }
        this.outstandingPromises.length = 0;
        this._size = this.runningPromises;
    }
    dispose() {
        this._isDisposed = true;
        this.outstandingPromises.length = 0;
        this._size = 0;
        this._onDrained.dispose();
    }
}
class Queue extends Limiter {
    constructor() {
        super(1);
    }
}
class ResourceQueue {
    constructor() {
        this.queues = ( new Map());
        this.drainers = ( new Set());
        this.drainListeners = undefined;
        this.drainListenerCount = 0;
    }
    async whenDrained() {
        if (this.isDrained()) {
            return;
        }
        const promise = ( new DeferredPromise());
        this.drainers.add(promise);
        return promise.p;
    }
    isDrained() {
        for (const [, queue] of this.queues) {
            if (queue.size > 0) {
                return false;
            }
        }
        return true;
    }
    queueSize(resource, extUri$1 = extUri) {
        const key = extUri$1.getComparisonKey(resource);
        return this.queues.get(key)?.size ?? 0;
    }
    queueFor(resource, factory, extUri$1 = extUri) {
        const key = extUri$1.getComparisonKey(resource);
        let queue = this.queues.get(key);
        if (!queue) {
            queue = ( new Queue());
            const drainListenerId = this.drainListenerCount++;
            const drainListener = Event.once(queue.onDrained)(() => {
                queue?.dispose();
                this.queues.delete(key);
                this.onDidQueueDrain();
                this.drainListeners?.deleteAndDispose(drainListenerId);
                if (this.drainListeners?.size === 0) {
                    this.drainListeners.dispose();
                    this.drainListeners = undefined;
                }
            });
            if (!this.drainListeners) {
                this.drainListeners = ( new DisposableMap());
            }
            this.drainListeners.set(drainListenerId, drainListener);
            this.queues.set(key, queue);
        }
        return queue.queue(factory);
    }
    onDidQueueDrain() {
        if (!this.isDrained()) {
            return;
        }
        this.releaseDrainers();
    }
    releaseDrainers() {
        for (const drainer of this.drainers) {
            drainer.complete();
        }
        this.drainers.clear();
    }
    dispose() {
        for (const [, queue] of this.queues) {
            queue.dispose();
        }
        this.queues.clear();
        this.releaseDrainers();
        this.drainListeners?.dispose();
    }
}
class TaskQueue {
    constructor() {
        this._runningTask = undefined;
        this._pendingTasks = [];
    }
    schedule(task) {
        const deferred = ( new DeferredPromise());
        this._pendingTasks.push({ task, deferred, setUndefinedWhenCleared: false });
        this._runIfNotRunning();
        return deferred.p;
    }
    scheduleSkipIfCleared(task) {
        const deferred = ( new DeferredPromise());
        this._pendingTasks.push({ task, deferred, setUndefinedWhenCleared: true });
        this._runIfNotRunning();
        return deferred.p;
    }
    _runIfNotRunning() {
        if (this._runningTask === undefined) {
            this._processQueue();
        }
    }
    async _processQueue() {
        if (this._pendingTasks.length === 0) {
            return;
        }
        const next = this._pendingTasks.shift();
        if (!next) {
            return;
        }
        if (this._runningTask) {
            throw ( new BugIndicatingError());
        }
        this._runningTask = next.task;
        try {
            const result = await next.task();
            next.deferred.complete(result);
        }
        catch (e) {
            next.deferred.error(e);
        }
        finally {
            this._runningTask = undefined;
            this._processQueue();
        }
    }
    clearPending() {
        const tasks = this._pendingTasks;
        this._pendingTasks = [];
        for (const task of tasks) {
            if (task.setUndefinedWhenCleared) {
                task.deferred.complete(undefined);
            }
            else {
                task.deferred.error(( new CancellationError()));
            }
        }
    }
}
class TimeoutTimer {
    constructor(runner, timeout) {
        this._isDisposed = false;
        this._token = undefined;
        if (typeof runner === 'function' && typeof timeout === 'number') {
            this.setIfNotSet(runner, timeout);
        }
    }
    dispose() {
        this.cancel();
        this._isDisposed = true;
    }
    cancel() {
        if (this._token !== undefined) {
            clearTimeout(this._token);
            this._token = undefined;
        }
    }
    cancelAndSet(runner, timeout) {
        if (this._isDisposed) {
            throw ( new BugIndicatingError(`Calling 'cancelAndSet' on a disposed TimeoutTimer`));
        }
        this.cancel();
        this._token = setTimeout(() => {
            this._token = undefined;
            runner();
        }, timeout);
    }
    setIfNotSet(runner, timeout) {
        if (this._isDisposed) {
            throw ( new BugIndicatingError(`Calling 'setIfNotSet' on a disposed TimeoutTimer`));
        }
        if (this._token !== undefined) {
            return;
        }
        this._token = setTimeout(() => {
            this._token = undefined;
            runner();
        }, timeout);
    }
}
class IntervalTimer {
    constructor() {
        this.disposable = undefined;
        this.isDisposed = false;
    }
    cancel() {
        this.disposable?.dispose();
        this.disposable = undefined;
    }
    cancelAndSet(runner, interval, context = globalThis) {
        if (this.isDisposed) {
            throw ( new BugIndicatingError(`Calling 'cancelAndSet' on a disposed IntervalTimer`));
        }
        this.cancel();
        const handle = context.setInterval(() => {
            runner();
        }, interval);
        this.disposable = toDisposable(() => {
            context.clearInterval(handle);
            this.disposable = undefined;
        });
    }
    dispose() {
        this.cancel();
        this.isDisposed = true;
    }
}
class RunOnceScheduler {
    constructor(runner, delay) {
        this.timeoutToken = undefined;
        this.runner = runner;
        this.timeout = delay;
        this.timeoutHandler = this.onTimeout.bind(this);
    }
    dispose() {
        this.cancel();
        this.runner = null;
    }
    cancel() {
        if (this.isScheduled()) {
            clearTimeout(this.timeoutToken);
            this.timeoutToken = undefined;
        }
    }
    schedule(delay = this.timeout) {
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    }
    get delay() {
        return this.timeout;
    }
    set delay(value) {
        this.timeout = value;
    }
    isScheduled() {
        return this.timeoutToken !== undefined;
    }
    flush() {
        if (this.isScheduled()) {
            this.cancel();
            this.doRun();
        }
    }
    onTimeout() {
        this.timeoutToken = undefined;
        if (this.runner) {
            this.doRun();
        }
    }
    doRun() {
        this.runner?.();
    }
}
class RunOnceWorker extends RunOnceScheduler {
    constructor(runner, timeout) {
        super(runner, timeout);
        this.units = [];
    }
    work(unit) {
        this.units.push(unit);
        if (!this.isScheduled()) {
            this.schedule();
        }
    }
    doRun() {
        const units = this.units;
        this.units = [];
        this.runner?.(units);
    }
    dispose() {
        this.units = [];
        super.dispose();
    }
}
let async_runWhenGlobalIdle;
let _runWhenIdle;
(function () {
    const safeGlobal = globalThis;
    if (typeof safeGlobal.requestIdleCallback !== 'function' || typeof safeGlobal.cancelIdleCallback !== 'function') {
        _runWhenIdle = (_targetWindow, runner, timeout) => {
            platform_setTimeout0(() => {
                if (disposed) {
                    return;
                }
                const end = Date.now() + 15;
                const deadline = {
                    didTimeout: true,
                    timeRemaining() {
                        return Math.max(0, end - Date.now());
                    }
                };
                runner(( Object.freeze(deadline)));
            });
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                }
            };
        };
    }
    else {
        _runWhenIdle = (targetWindow, runner, timeout) => {
            const handle = targetWindow.requestIdleCallback(runner, typeof timeout === 'number' ? { timeout } : undefined);
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    targetWindow.cancelIdleCallback(handle);
                }
            };
        };
    }
    async_runWhenGlobalIdle = (runner, timeout) => _runWhenIdle(globalThis, runner, timeout);
})();
class AbstractIdleValue {
    constructor(targetWindow, executor) {
        this._didRun = false;
        this._executor = () => {
            try {
                this._value = executor();
            }
            catch (err) {
                this._error = err;
            }
            finally {
                this._didRun = true;
            }
        };
        this._handle = _runWhenIdle(targetWindow, () => this._executor());
    }
    dispose() {
        this._handle.dispose();
    }
    get value() {
        if (!this._didRun) {
            this._handle.dispose();
            this._executor();
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
    get isInitialized() {
        return this._didRun;
    }
}
class GlobalIdleValue extends AbstractIdleValue {
    constructor(executor) {
        super(globalThis, executor);
    }
}
async function retry(task, delay, retries) {
    let lastError;
    for (let i = 0; i < retries; i++) {
        try {
            return await task();
        }
        catch (error) {
            lastError = error;
            await timeout(delay);
        }
    }
    throw lastError;
}
class TaskSequentializer {
    isRunning(taskId) {
        if (typeof taskId === 'number') {
            return this._running?.taskId === taskId;
        }
        return !!this._running;
    }
    get running() {
        return this._running?.promise;
    }
    cancelRunning() {
        this._running?.cancel();
    }
    run(taskId, promise, onCancel) {
        this._running = { taskId, cancel: () => onCancel?.(), promise };
        promise.then(() => this.doneRunning(taskId), () => this.doneRunning(taskId));
        return promise;
    }
    doneRunning(taskId) {
        if (this._running && taskId === this._running.taskId) {
            this._running = undefined;
            this.runQueued();
        }
    }
    runQueued() {
        if (this._queued) {
            const queued = this._queued;
            this._queued = undefined;
            queued.run().then(queued.promiseResolve, queued.promiseReject);
        }
    }
    queue(run) {
        if (!this._queued) {
            const { promise, resolve: promiseResolve, reject: promiseReject } = promiseWithResolvers();
            this._queued = {
                run,
                promise,
                promiseResolve: promiseResolve,
                promiseReject: promiseReject
            };
        }
        else {
            this._queued.run = run;
        }
        return this._queued.promise;
    }
    hasQueued() {
        return !!this._queued;
    }
    async join() {
        return this._queued?.promise ?? this._running?.promise;
    }
}
class IntervalCounter {
    constructor(interval, nowFn = () => Date.now()) {
        this.interval = interval;
        this.nowFn = nowFn;
        this.lastIncrementTime = 0;
        this.value = 0;
    }
    increment() {
        const now = this.nowFn();
        if (now - this.lastIncrementTime > this.interval) {
            this.lastIncrementTime = now;
            this.value = 0;
        }
        this.value++;
        return this.value;
    }
}
var DeferredOutcome;
(function (DeferredOutcome) {
    DeferredOutcome[DeferredOutcome["Resolved"] = 0] = "Resolved";
    DeferredOutcome[DeferredOutcome["Rejected"] = 1] = "Rejected";
})(DeferredOutcome || (DeferredOutcome = {}));
class DeferredPromise {
    get isRejected() {
        return this.outcome?.outcome === DeferredOutcome.Rejected;
    }
    get isResolved() {
        return this.outcome?.outcome === DeferredOutcome.Resolved;
    }
    get isSettled() {
        return !!this.outcome;
    }
    get value() {
        return this.outcome?.outcome === DeferredOutcome.Resolved ? this.outcome?.value : undefined;
    }
    constructor() {
        this.p = ( new Promise((c, e) => {
            this.completeCallback = c;
            this.errorCallback = e;
        }));
    }
    complete(value) {
        return ( new Promise(resolve => {
            this.completeCallback(value);
            this.outcome = { outcome: DeferredOutcome.Resolved, value };
            resolve();
        }));
    }
    error(err) {
        return ( new Promise(resolve => {
            this.errorCallback(err);
            this.outcome = { outcome: DeferredOutcome.Rejected, value: err };
            resolve();
        }));
    }
    settleWith(promise) {
        return promise.then(value => this.complete(value), error => this.error(error));
    }
    cancel() {
        return this.error(( new CancellationError()));
    }
}
var Promises;
(function (Promises) {
    async function settled(promises) {
        let firstError = undefined;
        const result = await Promise.all(( promises.map(promise => promise.then(value => value, error => {
            if (!firstError) {
                firstError = error;
            }
            return undefined;
        }))));
        if (typeof firstError !== 'undefined') {
            throw firstError;
        }
        return result;
    }
    Promises.settled = settled;
    function withAsyncBody(bodyFn) {
        return ( new Promise(async (resolve, reject) => {
            try {
                await bodyFn(resolve, reject);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    Promises.withAsyncBody = withAsyncBody;
})(Promises || (Promises = {}));
class StatefulPromise {
    get value() { return this._value; }
    get error() { return this._error; }
    get isResolved() { return this._isResolved; }
    constructor(promise) {
        this._value = undefined;
        this._error = undefined;
        this._isResolved = false;
        this.promise = promise.then(value => {
            this._value = value;
            this._isResolved = true;
            return value;
        }, error => {
            this._error = error;
            this._isResolved = true;
            throw error;
        });
    }
    requireValue() {
        if (!this._isResolved) {
            throw ( new BugIndicatingError('Promise is not resolved yet'));
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
}
class LazyStatefulPromise {
    constructor(_compute) {
        this._compute = _compute;
        this._promise = ( new Lazy(() => ( new StatefulPromise(this._compute()))));
    }
    requireValue() {
        return this._promise.value.requireValue();
    }
    getPromise() {
        return this._promise.value.promise;
    }
    get currentValue() {
        return this._promise.rawValue?.value;
    }
}
var AsyncIterableSourceState;
(function (AsyncIterableSourceState) {
    AsyncIterableSourceState[AsyncIterableSourceState["Initial"] = 0] = "Initial";
    AsyncIterableSourceState[AsyncIterableSourceState["DoneOK"] = 1] = "DoneOK";
    AsyncIterableSourceState[AsyncIterableSourceState["DoneError"] = 2] = "DoneError";
})(AsyncIterableSourceState || (AsyncIterableSourceState = {}));
class AsyncIterableObject {
    static fromArray(items) {
        return ( new AsyncIterableObject((writer) => {
            writer.emitMany(items);
        }));
    }
    static fromPromise(promise) {
        return ( new AsyncIterableObject(async (emitter) => {
            emitter.emitMany(await promise);
        }));
    }
    static fromPromisesResolveOrder(promises) {
        return ( new AsyncIterableObject(async (emitter) => {
            await Promise.all(( promises.map(async (p) => emitter.emitOne(await p))));
        }));
    }
    static merge(iterables) {
        return ( new AsyncIterableObject(async (emitter) => {
            await Promise.all(( iterables.map(async (iterable) => {
                for await (const item of iterable) {
                    emitter.emitOne(item);
                }
            })));
        }));
    }
    static { this.EMPTY = AsyncIterableObject.fromArray([]); }
    constructor(executor, onReturn) {
        this._state = AsyncIterableSourceState.Initial;
        this._results = [];
        this._error = null;
        this._onReturn = onReturn;
        this._onStateChanged = ( new Emitter());
        queueMicrotask(async () => {
            const writer = {
                emitOne: (item) => this.emitOne(item),
                emitMany: (items) => this.emitMany(items),
                reject: (error) => this.reject(error)
            };
            try {
                await Promise.resolve(executor(writer));
                this.resolve();
            }
            catch (err) {
                this.reject(err);
            }
            finally {
                writer.emitOne = undefined;
                writer.emitMany = undefined;
                writer.reject = undefined;
            }
        });
    }
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next: async () => {
                do {
                    if (this._state === AsyncIterableSourceState.DoneError) {
                        throw this._error;
                    }
                    if (i < this._results.length) {
                        return { done: false, value: this._results[i++] };
                    }
                    if (this._state === AsyncIterableSourceState.DoneOK) {
                        return { done: true, value: undefined };
                    }
                    await event_Event.toPromise(this._onStateChanged.event);
                } while (true);
            },
            return: async () => {
                this._onReturn?.();
                return { done: true, value: undefined };
            }
        };
    }
    static map(iterable, mapFn) {
        return ( new AsyncIterableObject(async (emitter) => {
            for await (const item of iterable) {
                emitter.emitOne(mapFn(item));
            }
        }));
    }
    map(mapFn) {
        return ( AsyncIterableObject.map(this, mapFn));
    }
    static filter(iterable, filterFn) {
        return ( new AsyncIterableObject(async (emitter) => {
            for await (const item of iterable) {
                if (filterFn(item)) {
                    emitter.emitOne(item);
                }
            }
        }));
    }
    filter(filterFn) {
        return AsyncIterableObject.filter(this, filterFn);
    }
    static coalesce(iterable) {
        return AsyncIterableObject.filter(iterable, item => !!item);
    }
    coalesce() {
        return AsyncIterableObject.coalesce(this);
    }
    static async toPromise(iterable) {
        const result = [];
        for await (const item of iterable) {
            result.push(item);
        }
        return result;
    }
    toPromise() {
        return AsyncIterableObject.toPromise(this);
    }
    emitOne(value) {
        if (this._state !== AsyncIterableSourceState.Initial) {
            return;
        }
        this._results.push(value);
        this._onStateChanged.fire();
    }
    emitMany(values) {
        if (this._state !== AsyncIterableSourceState.Initial) {
            return;
        }
        this._results = this._results.concat(values);
        this._onStateChanged.fire();
    }
    resolve() {
        if (this._state !== AsyncIterableSourceState.Initial) {
            return;
        }
        this._state = AsyncIterableSourceState.DoneOK;
        this._onStateChanged.fire();
    }
    reject(error) {
        if (this._state !== AsyncIterableSourceState.Initial) {
            return;
        }
        this._state = AsyncIterableSourceState.DoneError;
        this._error = error;
        this._onStateChanged.fire();
    }
}
class CancelableAsyncIterableObject extends AsyncIterableObject {
    constructor(_source, executor) {
        super(executor);
        this._source = _source;
    }
    cancel() {
        this._source.cancel();
    }
}
function createCancelableAsyncIterable(callback) {
    const source = ( new CancellationTokenSource());
    const innerIterable = callback(source.token);
    return ( new CancelableAsyncIterableObject(source, async (emitter) => {
        const subscription = source.token.onCancellationRequested(() => {
            subscription.dispose();
            source.dispose();
            emitter.reject(( new CancellationError()));
        });
        try {
            for await (const item of innerIterable) {
                if (source.token.isCancellationRequested) {
                    return;
                }
                emitter.emitOne(item);
            }
            subscription.dispose();
            source.dispose();
        }
        catch (err) {
            subscription.dispose();
            source.dispose();
            emitter.reject(err);
        }
    }));
}
class AsyncIterableSource {
    constructor(onReturn) {
        this._deferred = ( new DeferredPromise());
        this._asyncIterable = ( new AsyncIterableObject(emitter => {
            if (earlyError) {
                emitter.reject(earlyError);
                return;
            }
            if (earlyItems) {
                emitter.emitMany(earlyItems);
            }
            this._errorFn = (error) => emitter.reject(error);
            this._emitOneFn = (item) => emitter.emitOne(item);
            this._emitManyFn = (items) => emitter.emitMany(items);
            return this._deferred.p;
        }, onReturn));
        let earlyError;
        let earlyItems;
        this._errorFn = (error) => {
            if (!earlyError) {
                earlyError = error;
            }
        };
        this._emitOneFn = (item) => {
            if (!earlyItems) {
                earlyItems = [];
            }
            earlyItems.push(item);
        };
        this._emitManyFn = (items) => {
            if (!earlyItems) {
                earlyItems = items.slice();
            }
            else {
                items.forEach(item => earlyItems.push(item));
            }
        };
    }
    get asyncIterable() {
        return this._asyncIterable;
    }
    resolve() {
        this._deferred.complete();
    }
    reject(error) {
        this._errorFn(error);
        this._deferred.complete();
    }
    emitOne(item) {
        this._emitOneFn(item);
    }
    emitMany(items) {
        this._emitManyFn(items);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/logging.js


let globalObservableLogger;
function addLogger(logger) {
    if (!globalObservableLogger) {
        globalObservableLogger = logger;
    }
    else if (globalObservableLogger instanceof ComposedLogger) {
        globalObservableLogger.loggers.push(logger);
    }
    else {
        globalObservableLogger = ( new ComposedLogger([globalObservableLogger, logger]));
    }
}
function getLogger() {
    return globalObservableLogger;
}
let globalObservableLoggerFn = undefined;
function setLogObservableFn(fn) {
    globalObservableLoggerFn = fn;
}
function logObservable(obs) {
    if (globalObservableLoggerFn) {
        globalObservableLoggerFn(obs);
    }
}
class ComposedLogger {
    constructor(loggers) {
        this.loggers = loggers;
    }
    handleObservableCreated(observable) {
        for (const logger of this.loggers) {
            logger.handleObservableCreated(observable);
        }
    }
    handleOnListenerCountChanged(observable, newCount) {
        for (const logger of this.loggers) {
            logger.handleOnListenerCountChanged(observable, newCount);
        }
    }
    handleObservableUpdated(observable, info) {
        for (const logger of this.loggers) {
            logger.handleObservableUpdated(observable, info);
        }
    }
    handleAutorunCreated(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunCreated(autorun);
        }
    }
    handleAutorunDisposed(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunDisposed(autorun);
        }
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        for (const logger of this.loggers) {
            logger.handleAutorunDependencyChanged(autorun, observable, change);
        }
    }
    handleAutorunStarted(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunStarted(autorun);
        }
    }
    handleAutorunFinished(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunFinished(autorun);
        }
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        for (const logger of this.loggers) {
            logger.handleDerivedDependencyChanged(derived, observable, change);
        }
    }
    handleDerivedCleared(observable) {
        for (const logger of this.loggers) {
            logger.handleDerivedCleared(observable);
        }
    }
    handleBeginTransaction(transaction) {
        for (const logger of this.loggers) {
            logger.handleBeginTransaction(transaction);
        }
    }
    handleEndTransaction(transaction) {
        for (const logger of this.loggers) {
            logger.handleEndTransaction(transaction);
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/reactions/autorunImpl.js








var AutorunState;
(function (AutorunState) {
    AutorunState[AutorunState["dependenciesMightHaveChanged"] = 1] = "dependenciesMightHaveChanged";
    AutorunState[AutorunState["stale"] = 2] = "stale";
    AutorunState[AutorunState["upToDate"] = 3] = "upToDate";
})(AutorunState || (AutorunState = {}));
class autorunImpl_AutorunObserver {
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? '(anonymous)';
    }
    constructor(_debugNameData, _runFn, _changeTracker) {
        this._debugNameData = _debugNameData;
        this._runFn = _runFn;
        this._changeTracker = _changeTracker;
        this._state = AutorunState.stale;
        this._updateCount = 0;
        this._disposed = false;
        this._dependencies = ( new Set());
        this._dependenciesToBeRemoved = ( new Set());
        this._isRunning = false;
        this._store = undefined;
        this._delayedStore = undefined;
        this._changeSummary = this._changeTracker?.createChangeSummary(undefined);
        getLogger()?.handleAutorunCreated(this);
        this._run();
        trackDisposable(this);
    }
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        for (const o of this._dependencies) {
            o.removeObserver(this);
        }
        this._dependencies.clear();
        if (this._store !== undefined) {
            this._store.dispose();
        }
        if (this._delayedStore !== undefined) {
            this._delayedStore.dispose();
        }
        getLogger()?.handleAutorunDisposed(this);
        markAsDisposed(this);
    }
    _run() {
        const emptySet = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies;
        this._dependencies = emptySet;
        this._state = AutorunState.upToDate;
        try {
            if (!this._disposed) {
                getLogger()?.handleAutorunStarted(this);
                const changeSummary = this._changeSummary;
                const delayedStore = this._delayedStore;
                if (delayedStore !== undefined) {
                    this._delayedStore = undefined;
                }
                try {
                    this._isRunning = true;
                    if (this._changeTracker) {
                        this._changeTracker.beforeUpdate?.(this, changeSummary);
                        this._changeSummary = this._changeTracker.createChangeSummary(changeSummary);
                    }
                    if (this._store !== undefined) {
                        this._store.dispose();
                        this._store = undefined;
                    }
                    this._runFn(this, changeSummary);
                }
                catch (e) {
                    onBugIndicatingError(e);
                }
                finally {
                    this._isRunning = false;
                    if (delayedStore !== undefined) {
                        delayedStore.dispose();
                    }
                }
            }
        }
        finally {
            if (!this._disposed) {
                getLogger()?.handleAutorunFinished(this);
            }
            for (const o of this._dependenciesToBeRemoved) {
                o.removeObserver(this);
            }
            this._dependenciesToBeRemoved.clear();
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`;
    }
    beginUpdate(_observable) {
        if (this._state === AutorunState.upToDate) {
            this._state = AutorunState.dependenciesMightHaveChanged;
        }
        this._updateCount++;
    }
    endUpdate(_observable) {
        try {
            if (this._updateCount === 1) {
                do {
                    if (this._state === AutorunState.dependenciesMightHaveChanged) {
                        this._state = AutorunState.upToDate;
                        for (const d of this._dependencies) {
                            d.reportChanges();
                            if (this._state === AutorunState.stale) {
                                break;
                            }
                        }
                    }
                    if (this._state !== AutorunState.upToDate) {
                        this._run();
                    }
                } while (this._state !== AutorunState.upToDate);
            }
        }
        finally {
            this._updateCount--;
        }
        assertFn(() => this._updateCount >= 0);
    }
    handlePossibleChange(observable) {
        if (this._state === AutorunState.upToDate && this._isDependency(observable)) {
            this._state = AutorunState.dependenciesMightHaveChanged;
        }
    }
    handleChange(observable, change) {
        if (this._isDependency(observable)) {
            getLogger()?.handleAutorunDependencyChanged(this, observable, change);
            try {
                const shouldReact = this._changeTracker ? this._changeTracker.handleChange({
                    changedObservable: observable,
                    change,
                    didChange: (o) => o === observable,
                }, this._changeSummary) : true;
                if (shouldReact) {
                    this._state = AutorunState.stale;
                }
            }
            catch (e) {
                onBugIndicatingError(e);
            }
        }
    }
    _isDependency(observable) {
        return ( this._dependencies.has(observable)) && !( this._dependenciesToBeRemoved.has(observable));
    }
    _ensureNoRunning() {
        if (!this._isRunning) {
            throw ( new errors_BugIndicatingError('The reader object cannot be used outside its compute function!'));
        }
    }
    readObservable(observable) {
        this._ensureNoRunning();
        if (this._disposed) {
            return observable.get();
        }
        observable.addObserver(this);
        const value = observable.get();
        this._dependencies.add(observable);
        this._dependenciesToBeRemoved.delete(observable);
        return value;
    }
    get store() {
        this._ensureNoRunning();
        if (this._disposed) {
            throw ( new errors_BugIndicatingError('Cannot access store after dispose'));
        }
        if (this._store === undefined) {
            this._store = ( new lifecycle_DisposableStore());
        }
        return this._store;
    }
    get delayedStore() {
        this._ensureNoRunning();
        if (this._disposed) {
            throw ( new errors_BugIndicatingError('Cannot access store after dispose'));
        }
        if (this._delayedStore === undefined) {
            this._delayedStore = ( new lifecycle_DisposableStore());
        }
        return this._delayedStore;
    }
    debugGetState() {
        return {
            isRunning: this._isRunning,
            updateCount: this._updateCount,
            dependencies: this._dependencies,
            state: this._state,
        };
    }
    debugRerun() {
        if (!this._isRunning) {
            this._run();
        }
        else {
            this._state = AutorunState.stale;
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/equals.js



const equals_strictEquals = (a, b) => a === b;
function itemsEquals(itemEquals = equals_strictEquals) {
    return (a, b) => equals(a, b, itemEquals);
}
function itemEquals() {
    return (a, b) => a.equals(b);
}
function equalsIfDefined(equalsOrV1, v2, equals) {
    if (equals !== undefined) {
        const v1 = equalsOrV1;
        if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
            return v2 === v1;
        }
        return equals(v1, v2);
    }
    else {
        const equals = equalsOrV1;
        return (v1, v2) => {
            if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
                return v2 === v1;
            }
            return equals(v1, v2);
        };
    }
}
function structuralEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!structuralEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (a && typeof a === 'object' && b && typeof b === 'object') {
        if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) {
            const aObj = a;
            const bObj = b;
            const keysA = ( Object.keys(aObj));
            const keysB = ( Object.keys(bObj));
            const keysBSet = ( new Set(keysB));
            if (keysA.length !== keysB.length) {
                return false;
            }
            for (const key of keysA) {
                if (!( keysBSet.has(key))) {
                    return false;
                }
                if (!structuralEquals(aObj[key], bObj[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
function getStructuralKey(t) {
    return JSON.stringify(toNormalizedJsonStructure(t));
}
let objectId = 0;
const objIds = ( new WeakMap());
function toNormalizedJsonStructure(t) {
    if (Array.isArray(t)) {
        return ( t.map(toNormalizedJsonStructure));
    }
    if (t && typeof t === 'object') {
        if (Object.getPrototypeOf(t) === Object.prototype) {
            const tObj = t;
            const res = Object.create(null);
            for (const key of ( Object.keys(tObj)).sort()) {
                res[key] = toNormalizedJsonStructure(tObj[key]);
            }
            return res;
        }
        else {
            let objId = objIds.get(t);
            if (objId === undefined) {
                objId = objectId++;
                objIds.set(t, objId);
            }
            return objId + '----2b76a038c20c4bcc';
        }
    }
    return t;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/debugName.js


class debugName_DebugNameData {
    constructor(owner, debugNameSource, referenceFn) {
        this.owner = owner;
        this.debugNameSource = debugNameSource;
        this.referenceFn = referenceFn;
    }
    getDebugName(target) {
        return getDebugName(target, this);
    }
}
const countPerName = ( new Map());
const cachedDebugName = ( new WeakMap());
function getDebugName(target, data) {
    const cached = cachedDebugName.get(target);
    if (cached) {
        return cached;
    }
    const dbgName = computeDebugName(target, data);
    if (dbgName) {
        let count = countPerName.get(dbgName) ?? 0;
        count++;
        countPerName.set(dbgName, count);
        const result = count === 1 ? dbgName : `${dbgName}#${count}`;
        cachedDebugName.set(target, result);
        return result;
    }
    return undefined;
}
function computeDebugName(self, data) {
    const cached = cachedDebugName.get(self);
    if (cached) {
        return cached;
    }
    const ownerStr = data.owner ? formatOwner(data.owner) + `.` : '';
    let result;
    const debugNameSource = data.debugNameSource;
    if (debugNameSource !== undefined) {
        if (typeof debugNameSource === 'function') {
            result = debugNameSource();
            if (result !== undefined) {
                return ownerStr + result;
            }
        }
        else {
            return ownerStr + debugNameSource;
        }
    }
    const referenceFn = data.referenceFn;
    if (referenceFn !== undefined) {
        result = getFunctionName(referenceFn);
        if (result !== undefined) {
            return ownerStr + result;
        }
    }
    if (data.owner !== undefined) {
        const key = findKey(data.owner, self);
        if (key !== undefined) {
            return ownerStr + key;
        }
    }
    return undefined;
}
function findKey(obj, value) {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}
const countPerClassName = ( new Map());
const ownerId = ( new WeakMap());
function formatOwner(owner) {
    const id = ownerId.get(owner);
    if (id) {
        return id;
    }
    const className = getClassName(owner) ?? 'Object';
    let count = countPerClassName.get(className) ?? 0;
    count++;
    countPerClassName.set(className, count);
    const result = count === 1 ? className : `${className}#${count}`;
    ownerId.set(owner, result);
    return result;
}
function getClassName(obj) {
    const ctor = obj.constructor;
    if (ctor) {
        if (ctor.name === 'Object') {
            return undefined;
        }
        return ctor.name;
    }
    return undefined;
}
function getFunctionName(fn) {
    const fnSrc = ( fn.toString());
    const regexp = /\/\*\*\s*@description\s*([^*]*)\*\//;
    const match = regexp.exec(fnSrc);
    const result = match ? match[1] : undefined;
    return result?.trim();
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/baseObservable.js




let _derived;
function _setDerivedOpts(derived) {
    _derived = derived;
}
let _recomputeInitiallyAndOnChange;
function _setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange) {
    _recomputeInitiallyAndOnChange = recomputeInitiallyAndOnChange;
}
let _keepObserved;
function _setKeepObserved(keepObserved) {
    _keepObserved = keepObserved;
}
class ConvenientObservable {
    get TChange() { return null; }
    reportChanges() {
        this.get();
    }
    read(reader) {
        if (reader) {
            return reader.readObservable(this);
        }
        else {
            return this.get();
        }
    }
    map(fnOrOwner, fnOrUndefined) {
        const owner = fnOrUndefined === undefined ? undefined : fnOrOwner;
        const fn = fnOrUndefined === undefined ? fnOrOwner : fnOrUndefined;
        return _derived({
            owner,
            debugName: () => {
                const name = getFunctionName(fn);
                if (name !== undefined) {
                    return name;
                }
                const regexp = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/;
                const match = regexp.exec(( fn.toString()));
                if (match) {
                    return `${this.debugName}.${match[2]}`;
                }
                if (!owner) {
                    return `${this.debugName} (mapped)`;
                }
                return undefined;
            },
            debugReferenceFn: fn,
        }, (reader) => fn(this.read(reader), reader));
    }
    flatten() {
        return _derived({
            owner: undefined,
            debugName: () => `${this.debugName} (flattened)`,
        }, (reader) => this.read(reader).read(reader));
    }
    recomputeInitiallyAndOnChange(store, handleValue) {
        store.add(_recomputeInitiallyAndOnChange(this, handleValue));
        return this;
    }
    keepObserved(store) {
        store.add(_keepObserved(this));
        return this;
    }
    get debugValue() {
        return this.get();
    }
}
class BaseObservable extends ConvenientObservable {
    constructor() {
        super();
        this._observers = ( new Set());
        getLogger()?.handleObservableCreated(this);
    }
    addObserver(observer) {
        const len = this._observers.size;
        this._observers.add(observer);
        if (len === 0) {
            this.onFirstObserverAdded();
        }
        if (len !== this._observers.size) {
            getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    removeObserver(observer) {
        const deleted = this._observers.delete(observer);
        if (deleted && this._observers.size === 0) {
            this.onLastObserverRemoved();
        }
        if (deleted) {
            getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    onFirstObserverAdded() { }
    onLastObserverRemoved() { }
    log() {
        const hadLogger = !!getLogger();
        logObservable(this);
        if (!hadLogger) {
            getLogger()?.handleObservableCreated(this);
        }
        return this;
    }
    debugGetObservers() {
        return this._observers;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/derivedImpl.js









var DerivedState;
(function (DerivedState) {
    DerivedState[DerivedState["initial"] = 0] = "initial";
    DerivedState[DerivedState["dependenciesMightHaveChanged"] = 1] = "dependenciesMightHaveChanged";
    DerivedState[DerivedState["stale"] = 2] = "stale";
    DerivedState[DerivedState["upToDate"] = 3] = "upToDate";
})(DerivedState || (DerivedState = {}));
class derivedImpl_Derived extends BaseObservable {
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? '(anonymous)';
    }
    constructor(_debugNameData, _computeFn, _changeTracker, _handleLastObserverRemoved = undefined, _equalityComparator) {
        super();
        this._debugNameData = _debugNameData;
        this._computeFn = _computeFn;
        this._changeTracker = _changeTracker;
        this._handleLastObserverRemoved = _handleLastObserverRemoved;
        this._equalityComparator = _equalityComparator;
        this._state = DerivedState.initial;
        this._value = undefined;
        this._updateCount = 0;
        this._dependencies = ( new Set());
        this._dependenciesToBeRemoved = ( new Set());
        this._changeSummary = undefined;
        this._isUpdating = false;
        this._isComputing = false;
        this._didReportChange = false;
        this._isInBeforeUpdate = false;
        this._isReaderValid = false;
        this._store = undefined;
        this._delayedStore = undefined;
        this._removedObserverToCallEndUpdateOn = null;
        this._changeSummary = this._changeTracker?.createChangeSummary(undefined);
    }
    onLastObserverRemoved() {
        this._state = DerivedState.initial;
        this._value = undefined;
        getLogger()?.handleDerivedCleared(this);
        for (const d of this._dependencies) {
            d.removeObserver(this);
        }
        this._dependencies.clear();
        if (this._store !== undefined) {
            this._store.dispose();
            this._store = undefined;
        }
        if (this._delayedStore !== undefined) {
            this._delayedStore.dispose();
            this._delayedStore = undefined;
        }
        this._handleLastObserverRemoved?.();
    }
    get() {
        if (this._observers.size === 0) {
            let result;
            try {
                this._isReaderValid = true;
                let changeSummary = undefined;
                if (this._changeTracker) {
                    changeSummary = this._changeTracker.createChangeSummary(undefined);
                    this._changeTracker.beforeUpdate?.(this, changeSummary);
                }
                result = this._computeFn(this, changeSummary);
            }
            finally {
                this._isReaderValid = false;
            }
            this.onLastObserverRemoved();
            return result;
        }
        else {
            do {
                if (this._state === DerivedState.dependenciesMightHaveChanged) {
                    for (const d of this._dependencies) {
                        d.reportChanges();
                        if (this._state === DerivedState.stale) {
                            break;
                        }
                    }
                }
                if (this._state === DerivedState.dependenciesMightHaveChanged) {
                    this._state = DerivedState.upToDate;
                }
                if (this._state !== DerivedState.upToDate) {
                    this._recompute();
                }
            } while (this._state !== DerivedState.upToDate);
            return this._value;
        }
    }
    _recompute() {
        let didChange = false;
        this._isComputing = true;
        this._didReportChange = false;
        const emptySet = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies;
        this._dependencies = emptySet;
        try {
            const changeSummary = this._changeSummary;
            this._isReaderValid = true;
            if (this._changeTracker) {
                this._isInBeforeUpdate = true;
                this._changeTracker.beforeUpdate?.(this, changeSummary);
                this._isInBeforeUpdate = false;
                this._changeSummary = this._changeTracker?.createChangeSummary(changeSummary);
            }
            const hadValue = this._state !== DerivedState.initial;
            const oldValue = this._value;
            this._state = DerivedState.upToDate;
            const delayedStore = this._delayedStore;
            if (delayedStore !== undefined) {
                this._delayedStore = undefined;
            }
            try {
                if (this._store !== undefined) {
                    this._store.dispose();
                    this._store = undefined;
                }
                this._value = this._computeFn(this, changeSummary);
            }
            finally {
                this._isReaderValid = false;
                for (const o of this._dependenciesToBeRemoved) {
                    o.removeObserver(this);
                }
                this._dependenciesToBeRemoved.clear();
                if (delayedStore !== undefined) {
                    delayedStore.dispose();
                }
            }
            didChange = this._didReportChange || (hadValue && !(this._equalityComparator(oldValue, this._value)));
            getLogger()?.handleObservableUpdated(this, {
                oldValue,
                newValue: this._value,
                change: undefined,
                didChange,
                hadValue,
            });
        }
        catch (e) {
            onBugIndicatingError(e);
        }
        this._isComputing = false;
        if (!this._didReportChange && didChange) {
            for (const r of this._observers) {
                r.handleChange(this, undefined);
            }
        }
        else {
            this._didReportChange = false;
        }
    }
    toString() {
        return `LazyDerived<${this.debugName}>`;
    }
    beginUpdate(_observable) {
        if (this._isUpdating) {
            throw ( new errors_BugIndicatingError('Cyclic deriveds are not supported yet!'));
        }
        this._updateCount++;
        this._isUpdating = true;
        try {
            const propagateBeginUpdate = this._updateCount === 1;
            if (this._state === DerivedState.upToDate) {
                this._state = DerivedState.dependenciesMightHaveChanged;
                if (!propagateBeginUpdate) {
                    for (const r of this._observers) {
                        r.handlePossibleChange(this);
                    }
                }
            }
            if (propagateBeginUpdate) {
                for (const r of this._observers) {
                    r.beginUpdate(this);
                }
            }
        }
        finally {
            this._isUpdating = false;
        }
    }
    endUpdate(_observable) {
        this._updateCount--;
        if (this._updateCount === 0) {
            const observers = [...this._observers];
            for (const r of observers) {
                r.endUpdate(this);
            }
            if (this._removedObserverToCallEndUpdateOn) {
                const observers = [...this._removedObserverToCallEndUpdateOn];
                this._removedObserverToCallEndUpdateOn = null;
                for (const r of observers) {
                    r.endUpdate(this);
                }
            }
        }
        assertFn(() => this._updateCount >= 0);
    }
    handlePossibleChange(observable) {
        if (this._state === DerivedState.upToDate && ( this._dependencies.has(observable)) && !( this._dependenciesToBeRemoved.has(observable))) {
            this._state = DerivedState.dependenciesMightHaveChanged;
            for (const r of this._observers) {
                r.handlePossibleChange(this);
            }
        }
    }
    handleChange(observable, change) {
        if (( this._dependencies.has(observable)) && !( this._dependenciesToBeRemoved.has(observable)) || this._isInBeforeUpdate) {
            getLogger()?.handleDerivedDependencyChanged(this, observable, change);
            let shouldReact = false;
            try {
                shouldReact = this._changeTracker ? this._changeTracker.handleChange({
                    changedObservable: observable,
                    change,
                    didChange: (o) => o === observable,
                }, this._changeSummary) : true;
            }
            catch (e) {
                onBugIndicatingError(e);
            }
            const wasUpToDate = this._state === DerivedState.upToDate;
            if (shouldReact && (this._state === DerivedState.dependenciesMightHaveChanged || wasUpToDate)) {
                this._state = DerivedState.stale;
                if (wasUpToDate) {
                    for (const r of this._observers) {
                        r.handlePossibleChange(this);
                    }
                }
            }
        }
    }
    _ensureReaderValid() {
        if (!this._isReaderValid) {
            throw ( new errors_BugIndicatingError('The reader object cannot be used outside its compute function!'));
        }
    }
    readObservable(observable) {
        this._ensureReaderValid();
        observable.addObserver(this);
        const value = observable.get();
        this._dependencies.add(observable);
        this._dependenciesToBeRemoved.delete(observable);
        return value;
    }
    reportChange(change) {
        this._ensureReaderValid();
        this._didReportChange = true;
        for (const r of this._observers) {
            r.handleChange(this, change);
        }
    }
    get store() {
        this._ensureReaderValid();
        if (this._store === undefined) {
            this._store = ( new lifecycle_DisposableStore());
        }
        return this._store;
    }
    get delayedStore() {
        this._ensureReaderValid();
        if (this._delayedStore === undefined) {
            this._delayedStore = ( new lifecycle_DisposableStore());
        }
        return this._delayedStore;
    }
    addObserver(observer) {
        const shouldCallBeginUpdate = !( this._observers.has(observer)) && this._updateCount > 0;
        super.addObserver(observer);
        if (shouldCallBeginUpdate) {
            if (this._removedObserverToCallEndUpdateOn && ( this._removedObserverToCallEndUpdateOn.has(observer))) {
                this._removedObserverToCallEndUpdateOn.delete(observer);
            }
            else {
                observer.beginUpdate(this);
            }
        }
    }
    removeObserver(observer) {
        if (( this._observers.has(observer)) && this._updateCount > 0) {
            if (!this._removedObserverToCallEndUpdateOn) {
                this._removedObserverToCallEndUpdateOn = ( new Set());
            }
            this._removedObserverToCallEndUpdateOn.add(observer);
        }
        super.removeObserver(observer);
    }
    debugGetState() {
        return {
            state: this._state,
            updateCount: this._updateCount,
            isComputing: this._isComputing,
            dependencies: this._dependencies,
            value: this._value,
        };
    }
    debugSetValue(newValue) {
        this._value = newValue;
    }
    setValue(newValue, tx, change) {
        this._value = newValue;
        const observers = this._observers;
        tx.updateObserver(this, this);
        for (const d of observers) {
            d.handleChange(this, change);
        }
    }
}
class derivedImpl_DerivedWithSetter extends derivedImpl_Derived {
    constructor(debugNameData, computeFn, changeTracker, handleLastObserverRemoved = undefined, equalityComparator, set) {
        super(debugNameData, computeFn, changeTracker, handleLastObserverRemoved, equalityComparator);
        this.set = set;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/derived.js









function derived_derived(computeFnOrOwner, computeFn) {
    if (computeFn !== undefined) {
        return ( new Derived(( new DebugNameData(computeFnOrOwner, undefined, computeFn)), computeFn, undefined, undefined, strictEquals));
    }
    return ( new Derived(( new DebugNameData(undefined, undefined, computeFnOrOwner)), computeFnOrOwner, undefined, undefined, strictEquals));
}
function derivedWithSetter(owner, computeFn, setter) {
    return ( new DerivedWithSetter(( new DebugNameData(owner, undefined, computeFn)), computeFn, undefined, undefined, strictEquals, setter));
}
function derived_derivedOpts(options, computeFn) {
    return ( new derivedImpl_Derived(( new debugName_DebugNameData(options.owner, options.debugName, options.debugReferenceFn)), computeFn, undefined, options.onLastObserverRemoved, options.equalsFn ?? equals_strictEquals));
}
_setDerivedOpts(derived_derivedOpts);
function derivedHandleChanges(options, computeFn) {
    return ( new Derived(( new DebugNameData(options.owner, options.debugName, undefined)), computeFn, options.changeTracker, undefined, options.equalityComparer ?? strictEquals));
}
function derivedDisposable(computeFnOrOwner, computeFnOrUndefined) {
    let computeFn;
    let owner;
    if (computeFnOrUndefined === undefined) {
        computeFn = computeFnOrOwner;
        owner = undefined;
    }
    else {
        owner = computeFnOrOwner;
        computeFn = computeFnOrUndefined;
    }
    let store = undefined;
    return ( new Derived(( new DebugNameData(owner, undefined, computeFn)), r => {
        if (!store) {
            store = ( new DisposableStore());
        }
        else {
            store.clear();
        }
        const result = computeFn(r);
        if (result) {
            store.add(result);
        }
        return result;
    }, undefined, () => {
        if (store) {
            store.dispose();
            store = undefined;
        }
    }, strictEquals));
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/reactions/autorun.js








function autorun_autorun(fn) {
    return ( new AutorunObserver(( new DebugNameData(undefined, undefined, fn)), fn, undefined));
}
function autorunOpts(options, fn) {
    return ( new AutorunObserver(( new DebugNameData(options.owner, options.debugName, options.debugReferenceFn ?? fn)), fn, undefined));
}
function autorunHandleChanges(options, fn) {
    return ( new AutorunObserver(( new DebugNameData(options.owner, options.debugName, options.debugReferenceFn ?? fn)), fn, options.changeTracker));
}
function autorunWithStoreHandleChanges(options, fn) {
    const store = ( new DisposableStore());
    const disposable = autorunHandleChanges({
        owner: options.owner,
        debugName: options.debugName,
        debugReferenceFn: options.debugReferenceFn ?? fn,
        changeTracker: options.changeTracker,
    }, (reader, changeSummary) => {
        store.clear();
        fn(reader, changeSummary, store);
    });
    return toDisposable(() => {
        disposable.dispose();
        store.dispose();
    });
}
function autorunWithStore(fn) {
    const store = ( new DisposableStore());
    const disposable = autorunOpts({
        owner: undefined,
        debugName: undefined,
        debugReferenceFn: fn,
    }, reader => {
        store.clear();
        fn(reader, store);
    });
    return toDisposable(() => {
        disposable.dispose();
        store.dispose();
    });
}
function autorunDelta(observable, handler) {
    let _lastValue;
    return autorunOpts({ debugReferenceFn: handler }, (reader) => {
        const newValue = observable.read(reader);
        const lastValue = _lastValue;
        _lastValue = newValue;
        handler({ lastValue, newValue });
    });
}
function autorunIterableDelta(getValue, handler, getUniqueIdentifier = v => v) {
    const lastValues = ( new Map());
    return autorunOpts({ debugReferenceFn: getValue }, (reader) => {
        const newValues = ( new Map());
        const removedValues = ( new Map(lastValues));
        for (const value of getValue(reader)) {
            const id = getUniqueIdentifier(value);
            if (( lastValues.has(id))) {
                removedValues.delete(id);
            }
            else {
                newValues.set(id, value);
                lastValues.set(id, value);
            }
        }
        for (const id of ( removedValues.keys())) {
            lastValues.delete(id);
        }
        if (newValues.size || removedValues.size) {
            handler({ addedValues: [...( newValues.values())], removedValues: [...( removedValues.values())] });
        }
    });
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/base.js






function handleBugIndicatingErrorRecovery(message) {
    const err = ( new Error('BugIndicatingErrorRecovery: ' + message));
    errors_onUnexpectedError(err);
    console.error('recovered from an error that indicates a bug', err);
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/transaction.js





function transaction(fn, getDebugName) {
    const tx = ( new TransactionImpl(fn, getDebugName));
    try {
        fn(tx);
    }
    finally {
        tx.finish();
    }
}
let _globalTransaction = (/* unused pure expression or super */ null && (undefined));
function globalTransaction(fn) {
    if (_globalTransaction) {
        fn(_globalTransaction);
    }
    else {
        const tx = ( new TransactionImpl(fn, undefined));
        _globalTransaction = tx;
        try {
            fn(tx);
        }
        finally {
            tx.finish();
            _globalTransaction = undefined;
        }
    }
}
async function asyncTransaction(fn, getDebugName) {
    const tx = ( new TransactionImpl(fn, getDebugName));
    try {
        await fn(tx);
    }
    finally {
        tx.finish();
    }
}
function subtransaction(tx, fn, getDebugName) {
    if (!tx) {
        transaction(fn, getDebugName);
    }
    else {
        fn(tx);
    }
}
class TransactionImpl {
    constructor(_fn, _getDebugName) {
        this._fn = _fn;
        this._getDebugName = _getDebugName;
        this._updatingObservers = [];
        getLogger()?.handleBeginTransaction(this);
    }
    getDebugName() {
        if (this._getDebugName) {
            return this._getDebugName();
        }
        return getFunctionName(this._fn);
    }
    updateObserver(observer, observable) {
        if (!this._updatingObservers) {
            handleBugIndicatingErrorRecovery('Transaction already finished!');
            transaction(tx => {
                tx.updateObserver(observer, observable);
            });
            return;
        }
        this._updatingObservers.push({ observer, observable });
        observer.beginUpdate(observable);
    }
    finish() {
        const updatingObservers = this._updatingObservers;
        if (!updatingObservers) {
            handleBugIndicatingErrorRecovery('transaction.finish() has already been called!');
            return;
        }
        for (let i = 0; i < updatingObservers.length; i++) {
            const { observer, observable } = updatingObservers[i];
            observer.endUpdate(observable);
        }
        this._updatingObservers = null;
        getLogger()?.handleEndTransaction(this);
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/observableValue.js










function observableValue_observableValue(nameOrOwner, initialValue) {
    let debugNameData;
    if (typeof nameOrOwner === 'string') {
        debugNameData = ( new debugName_DebugNameData(undefined, nameOrOwner, undefined));
    }
    else {
        debugNameData = ( new debugName_DebugNameData(nameOrOwner, undefined, undefined));
    }
    return ( new ObservableValue(debugNameData, initialValue, equals_strictEquals));
}
class ObservableValue extends BaseObservable {
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? 'ObservableValue';
    }
    constructor(_debugNameData, initialValue, _equalityComparator) {
        super();
        this._debugNameData = _debugNameData;
        this._equalityComparator = _equalityComparator;
        this._value = initialValue;
        getLogger()?.handleObservableUpdated(this, { hadValue: false, newValue: initialValue, change: undefined, didChange: true, oldValue: undefined });
    }
    get() {
        return this._value;
    }
    set(value, tx, change) {
        if (change === undefined && this._equalityComparator(this._value, value)) {
            return;
        }
        let _tx;
        if (!tx) {
            tx = _tx = ( new TransactionImpl(() => { }, () => `Setting ${this.debugName}`));
        }
        try {
            const oldValue = this._value;
            this._setValue(value);
            getLogger()?.handleObservableUpdated(this, { oldValue, newValue: value, change, didChange: true, hadValue: true });
            for (const observer of this._observers) {
                tx.updateObserver(observer, this);
                observer.handleChange(this, change);
            }
        }
        finally {
            if (_tx) {
                _tx.finish();
            }
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`;
    }
    _setValue(newValue) {
        this._value = newValue;
    }
    debugGetState() {
        return {
            value: this._value,
        };
    }
    debugSetValue(value) {
        this._value = value;
    }
}
function disposableObservableValue(nameOrOwner, initialValue) {
    let debugNameData;
    if (typeof nameOrOwner === 'string') {
        debugNameData = ( new DebugNameData(undefined, nameOrOwner, undefined));
    }
    else {
        debugNameData = ( new DebugNameData(nameOrOwner, undefined, undefined));
    }
    return ( new DisposableObservableValue(debugNameData, initialValue, strictEquals));
}
class DisposableObservableValue extends (/* unused pure expression or super */ null && (ObservableValue)) {
    _setValue(newValue) {
        if (this._value === newValue) {
            return;
        }
        if (this._value) {
            this._value.dispose();
        }
        this._value = newValue;
    }
    dispose() {
        this._value?.dispose();
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/observableFromEvent.js










function observableFromEvent_observableFromEvent(...args) {
    let owner;
    let event;
    let getValue;
    if (args.length === 3) {
        [owner, event, getValue] = args;
    }
    else {
        [event, getValue] = args;
    }
    return ( new FromEventObservable(( new debugName_DebugNameData(owner, undefined, getValue)), event, getValue, () => FromEventObservable.globalTransaction, equals_strictEquals));
}
function observableFromEventOpts(options, event, getValue) {
    return ( new FromEventObservable(( new DebugNameData(options.owner, options.debugName, options.debugReferenceFn ?? getValue)), event, getValue, () => FromEventObservable.globalTransaction, options.equalsFn ?? strictEquals));
}
class FromEventObservable extends BaseObservable {
    constructor(_debugNameData, event, _getValue, _getTransaction, _equalityComparator) {
        super();
        this._debugNameData = _debugNameData;
        this.event = event;
        this._getValue = _getValue;
        this._getTransaction = _getTransaction;
        this._equalityComparator = _equalityComparator;
        this._hasValue = false;
        this.handleEvent = (args) => {
            const newValue = this._getValue(args);
            const oldValue = this._value;
            const didChange = !this._hasValue || !(this._equalityComparator(oldValue, newValue));
            let didRunTransaction = false;
            if (didChange) {
                this._value = newValue;
                if (this._hasValue) {
                    didRunTransaction = true;
                    subtransaction(this._getTransaction(), (tx) => {
                        getLogger()?.handleObservableUpdated(this, { oldValue, newValue, change: undefined, didChange, hadValue: this._hasValue });
                        for (const o of this._observers) {
                            tx.updateObserver(o, this);
                            o.handleChange(this, undefined);
                        }
                    }, () => {
                        const name = this.getDebugName();
                        return 'Event fired' + (name ? `: ${name}` : '');
                    });
                }
                this._hasValue = true;
            }
            if (!didRunTransaction) {
                getLogger()?.handleObservableUpdated(this, { oldValue, newValue, change: undefined, didChange, hadValue: this._hasValue });
            }
        };
    }
    getDebugName() {
        return this._debugNameData.getDebugName(this);
    }
    get debugName() {
        const name = this.getDebugName();
        return 'From Event' + (name ? `: ${name}` : '');
    }
    onFirstObserverAdded() {
        this._subscription = this.event(this.handleEvent);
    }
    onLastObserverRemoved() {
        this._subscription.dispose();
        this._subscription = undefined;
        this._hasValue = false;
        this._value = undefined;
    }
    get() {
        if (this._subscription) {
            if (!this._hasValue) {
                this.handleEvent(undefined);
            }
            return this._value;
        }
        else {
            const value = this._getValue(undefined);
            return value;
        }
    }
    debugSetValue(value) {
        this._value = value;
    }
}
(function (observableFromEvent) {
    observableFromEvent.Observer = FromEventObservable;
    function batchEventsGlobally(tx, fn) {
        let didSet = false;
        if (FromEventObservable.globalTransaction === undefined) {
            FromEventObservable.globalTransaction = tx;
            didSet = true;
        }
        try {
            fn();
        }
        finally {
            if (didSet) {
                FromEventObservable.globalTransaction = undefined;
            }
        }
    }
    observableFromEvent.batchEventsGlobally = batchEventsGlobally;
})(observableFromEvent_observableFromEvent || (observableFromEvent_observableFromEvent = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/observables/observableSignal.js





function observableSignal_observableSignal(debugNameOrOwner) {
    if (typeof debugNameOrOwner === 'string') {
        return ( new ObservableSignal(debugNameOrOwner));
    }
    else {
        return ( new ObservableSignal(undefined, debugNameOrOwner));
    }
}
class ObservableSignal extends BaseObservable {
    get debugName() {
        return ( new debugName_DebugNameData(this._owner, this._debugName, undefined)).getDebugName(this) ?? 'Observable Signal';
    }
    toString() {
        return this.debugName;
    }
    constructor(_debugName, _owner) {
        super();
        this._debugName = _debugName;
        this._owner = _owner;
    }
    trigger(tx, change) {
        if (!tx) {
            transaction(tx => {
                this.trigger(tx, change);
            }, () => `Trigger signal ${this.debugName}`);
            return;
        }
        for (const o of this._observers) {
            tx.updateObserver(o, this);
            o.handleChange(this, change);
        }
    }
    get() {
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/utils/utils.js












function observableFromPromise(promise) {
    const observable = observableValue('promiseValue', {});
    promise.then((value) => {
        observable.set({ value }, undefined);
    });
    return observable;
}
function debouncedObservable(observable, debounceMs) {
    let hasValue = false;
    let lastValue;
    let timeout = undefined;
    return observableFromEvent(cb => {
        const d = autorun(reader => {
            const value = observable.read(reader);
            if (!hasValue) {
                hasValue = true;
                lastValue = value;
            }
            else {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    lastValue = value;
                    cb();
                }, debounceMs);
            }
        });
        return {
            dispose() {
                d.dispose();
                hasValue = false;
                lastValue = undefined;
            },
        };
    }, () => {
        if (hasValue) {
            return lastValue;
        }
        else {
            return observable.get();
        }
    });
}
function wasEventTriggeredRecently(event, timeoutMs, disposableStore) {
    const observable = observableValue('triggeredRecently', false);
    let timeout = undefined;
    disposableStore.add(event(() => {
        observable.set(true, undefined);
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            observable.set(false, undefined);
        }, timeoutMs);
    }));
    return observable;
}
function keepObserved(observable) {
    const o = ( new KeepAliveObserver(false, undefined));
    observable.addObserver(o);
    return lifecycle_toDisposable(() => {
        observable.removeObserver(o);
    });
}
_setKeepObserved(keepObserved);
function recomputeInitiallyAndOnChange(observable, handleValue) {
    const o = ( new KeepAliveObserver(true, handleValue));
    observable.addObserver(o);
    try {
        o.beginUpdate(observable);
    }
    finally {
        o.endUpdate(observable);
    }
    return lifecycle_toDisposable(() => {
        observable.removeObserver(o);
    });
}
_setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange);
class KeepAliveObserver {
    constructor(_forceRecompute, _handleValue) {
        this._forceRecompute = _forceRecompute;
        this._handleValue = _handleValue;
        this._counter = 0;
    }
    beginUpdate(observable) {
        this._counter++;
    }
    endUpdate(observable) {
        if (this._counter === 1 && this._forceRecompute) {
            if (this._handleValue) {
                this._handleValue(observable.get());
            }
            else {
                observable.reportChanges();
            }
        }
        this._counter--;
    }
    handlePossibleChange(observable) {
    }
    handleChange(observable, change) {
    }
}
function derivedObservableWithCache(owner, computeFn) {
    let lastValue = undefined;
    const observable = derivedOpts({ owner, debugReferenceFn: computeFn }, reader => {
        lastValue = computeFn(reader, lastValue);
        return lastValue;
    });
    return observable;
}
function derivedObservableWithWritableCache(owner, computeFn) {
    let lastValue = undefined;
    const onChange = observableSignal('derivedObservableWithWritableCache');
    const observable = derived(owner, reader => {
        onChange.read(reader);
        lastValue = computeFn(reader, lastValue);
        return lastValue;
    });
    return Object.assign(observable, {
        clearCache: (tx) => {
            lastValue = undefined;
            onChange.trigger(tx);
        },
        setCache: (newValue, tx) => {
            lastValue = newValue;
            onChange.trigger(tx);
        }
    });
}
function mapObservableArrayCached(owner, items, map, keySelector) {
    let m = ( new ArrayMap(map, keySelector));
    const self = derivedOpts({
        debugReferenceFn: map,
        owner,
        onLastObserverRemoved: () => {
            m.dispose();
            m = ( new ArrayMap(map));
        }
    }, (reader) => {
        m.setItems(items.read(reader));
        return m.getItems();
    });
    return self;
}
class ArrayMap {
    constructor(_map, _keySelector) {
        this._map = _map;
        this._keySelector = _keySelector;
        this._cache = ( new Map());
        this._items = [];
    }
    dispose() {
        this._cache.forEach(entry => entry.store.dispose());
        this._cache.clear();
    }
    setItems(items) {
        const newItems = [];
        const itemsToRemove = ( new Set(( this._cache.keys())));
        for (const item of items) {
            const key = this._keySelector ? this._keySelector(item) : item;
            let entry = this._cache.get(key);
            if (!entry) {
                const store = ( new DisposableStore());
                const out = this._map(item, store);
                entry = { out, store };
                this._cache.set(key, entry);
            }
            else {
                itemsToRemove.delete(key);
            }
            newItems.push(entry.out);
        }
        for (const item of itemsToRemove) {
            const entry = this._cache.get(item);
            entry.store.dispose();
            this._cache.delete(item);
        }
        this._items = newItems;
    }
    getItems() {
        return this._items;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/consoleObservableLogger.js





let consoleObservableLogger;
function logObservableToConsole(obs) {
    if (!consoleObservableLogger) {
        consoleObservableLogger = ( new ConsoleObservableLogger());
        addLogger(consoleObservableLogger);
    }
    consoleObservableLogger.addFilteredObj(obs);
}
class ConsoleObservableLogger {
    constructor() {
        this.indentation = 0;
        this.changedObservablesSets = ( new WeakMap());
    }
    addFilteredObj(obj) {
        if (!this._filteredObjects) {
            this._filteredObjects = ( new Set());
        }
        this._filteredObjects.add(obj);
    }
    _isIncluded(obj) {
        return this._filteredObjects?.has(obj) ?? true;
    }
    textToConsoleArgs(text) {
        return consoleTextToArgs([
            normalText(repeat('|  ', this.indentation)),
            text,
        ]);
    }
    formatInfo(info) {
        if (!info.hadValue) {
            return [
                normalText(` `),
                styled(formatValue(info.newValue, 60), {
                    color: 'green',
                }),
                normalText(` (initial)`),
            ];
        }
        return info.didChange
            ? [
                normalText(` `),
                styled(formatValue(info.oldValue, 70), {
                    color: 'red',
                    strikeThrough: true,
                }),
                normalText(` `),
                styled(formatValue(info.newValue, 60), {
                    color: 'green',
                }),
            ]
            : [normalText(` (unchanged)`)];
    }
    handleObservableCreated(observable) {
        if (observable instanceof derivedImpl_Derived) {
            const derived = observable;
            this.changedObservablesSets.set(derived, ( new Set()));
        }
    }
    handleOnListenerCountChanged(observable, newCount) {
    }
    handleObservableUpdated(observable, info) {
        if (!this._isIncluded(observable)) {
            return;
        }
        if (observable instanceof derivedImpl_Derived) {
            this._handleDerivedRecomputed(observable, info);
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('observable value changed'),
            styled(observable.debugName, { color: 'BlueViolet' }),
            ...this.formatInfo(info),
        ]));
    }
    formatChanges(changes) {
        if (changes.size === 0) {
            return undefined;
        }
        return styled(' (changed deps: ' +
            ( [...changes].map((o) => o.debugName)).join(', ') +
            ')', { color: 'gray' });
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        if (!this._isIncluded(derived)) {
            return;
        }
        this.changedObservablesSets.get(derived)?.add(observable);
    }
    _handleDerivedRecomputed(derived, info) {
        if (!this._isIncluded(derived)) {
            return;
        }
        const changedObservables = this.changedObservablesSets.get(derived);
        if (!changedObservables) {
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('derived recomputed'),
            styled(derived.debugName, { color: 'BlueViolet' }),
            ...this.formatInfo(info),
            this.formatChanges(changedObservables),
            { data: [{ fn: derived._debugNameData.referenceFn ?? derived._computeFn }] }
        ]));
        changedObservables.clear();
    }
    handleDerivedCleared(derived) {
        if (!this._isIncluded(derived)) {
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('derived cleared'),
            styled(derived.debugName, { color: 'BlueViolet' }),
        ]));
    }
    handleFromEventObservableTriggered(observable, info) {
        if (!this._isIncluded(observable)) {
            return;
        }
        console.log(...this.textToConsoleArgs([
            formatKind('observable from event triggered'),
            styled(observable.debugName, { color: 'BlueViolet' }),
            ...this.formatInfo(info),
            { data: [{ fn: observable._getValue }] }
        ]));
    }
    handleAutorunCreated(autorun) {
        if (!this._isIncluded(autorun)) {
            return;
        }
        this.changedObservablesSets.set(autorun, ( new Set()));
    }
    handleAutorunDisposed(autorun) {
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        if (!this._isIncluded(autorun)) {
            return;
        }
        this.changedObservablesSets.get(autorun).add(observable);
    }
    handleAutorunStarted(autorun) {
        const changedObservables = this.changedObservablesSets.get(autorun);
        if (!changedObservables) {
            return;
        }
        if (this._isIncluded(autorun)) {
            console.log(...this.textToConsoleArgs([
                formatKind('autorun'),
                styled(autorun.debugName, { color: 'BlueViolet' }),
                this.formatChanges(changedObservables),
                { data: [{ fn: autorun._debugNameData.referenceFn ?? autorun._runFn }] }
            ]));
        }
        changedObservables.clear();
        this.indentation++;
    }
    handleAutorunFinished(autorun) {
        this.indentation--;
    }
    handleBeginTransaction(transaction) {
        let transactionName = transaction.getDebugName();
        if (transactionName === undefined) {
            transactionName = '';
        }
        if (this._isIncluded(transaction)) {
            console.log(...this.textToConsoleArgs([
                formatKind('transaction'),
                styled(transactionName, { color: 'BlueViolet' }),
                { data: [{ fn: transaction._fn }] }
            ]));
        }
        this.indentation++;
    }
    handleEndTransaction() {
        this.indentation--;
    }
}
function consoleTextToArgs(text) {
    const styles = ( new Array());
    const data = [];
    let firstArg = '';
    function process(t) {
        if ('length' in t) {
            for (const item of t) {
                if (item) {
                    process(item);
                }
            }
        }
        else if ('text' in t) {
            firstArg += `%c${t.text}`;
            styles.push(t.style);
            if (t.data) {
                data.push(...t.data);
            }
        }
        else if ('data' in t) {
            data.push(...t.data);
        }
    }
    process(text);
    const result = [firstArg, ...styles];
    result.push(...data);
    return result;
}
function normalText(text) {
    return styled(text, { color: 'black' });
}
function formatKind(kind) {
    return styled(padStr(`${kind}: `, 10), { color: 'black', bold: true });
}
function styled(text, options = {
    color: 'black',
}) {
    function objToCss(styleObj) {
        return Object.entries(styleObj).reduce((styleString, [propName, propValue]) => {
            return `${styleString}${propName}:${propValue};`;
        }, '');
    }
    const style = {
        color: options.color,
    };
    if (options.strikeThrough) {
        style['text-decoration'] = 'line-through';
    }
    if (options.bold) {
        style['font-weight'] = 'bold';
    }
    return {
        text,
        style: objToCss(style),
    };
}
function formatValue(value, availableLen) {
    switch (typeof value) {
        case 'number':
            return '' + value;
        case 'string':
            if (value.length + 2 <= availableLen) {
                return `"${value}"`;
            }
            return `"${value.substr(0, availableLen - 7)}"+...`;
        case 'boolean':
            return value ? 'true' : 'false';
        case 'undefined':
            return 'undefined';
        case 'object':
            if (value === null) {
                return 'null';
            }
            if (Array.isArray(value)) {
                return formatArray(value, availableLen);
            }
            return formatObject(value, availableLen);
        case 'symbol':
            return ( value.toString());
        case 'function':
            return `[[Function${value.name ? ' ' + value.name : ''}]]`;
        default:
            return '' + value;
    }
}
function formatArray(value, availableLen) {
    let result = '[ ';
    let first = true;
    for (const val of value) {
        if (!first) {
            result += ', ';
        }
        if (result.length - 5 > availableLen) {
            result += '...';
            break;
        }
        first = false;
        result += `${formatValue(val, availableLen - result.length)}`;
    }
    result += ' ]';
    return result;
}
function formatObject(value, availableLen) {
    if (typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
        const val = ( value.toString());
        if (val.length <= availableLen) {
            return val;
        }
        return val.substring(0, availableLen - 3) + '...';
    }
    const className = getClassName(value);
    let result = className ? className + '(' : '{ ';
    let first = true;
    for (const [key, val] of Object.entries(value)) {
        if (!first) {
            result += ', ';
        }
        if (result.length - 5 > availableLen) {
            result += '...';
            break;
        }
        first = false;
        result += `${key}: ${formatValue(val, availableLen - result.length)}`;
    }
    result += className ? ')' : ' }';
    return result;
}
function repeat(str, count) {
    let result = '';
    for (let i = 1; i <= count; i++) {
        result += str;
    }
    return result;
}
function padStr(str, length) {
    while (str.length < length) {
        str += ' ';
    }
    return str;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/debugger/rpc.js


class SimpleTypedRpcConnection {
    static createHost(channelFactory, getHandler) {
        return ( new SimpleTypedRpcConnection(channelFactory, getHandler));
    }
    static createClient(channelFactory, getHandler) {
        return ( new SimpleTypedRpcConnection(channelFactory, getHandler));
    }
    constructor(_channelFactory, _getHandler) {
        this._channelFactory = _channelFactory;
        this._getHandler = _getHandler;
        this._channel = this._channelFactory({
            handleNotification: (notificationData) => {
                const m = notificationData;
                const fn = this._getHandler().notifications[m[0]];
                if (!fn) {
                    throw ( new Error(`Unknown notification "${m[0]}"!`));
                }
                fn(...m[1]);
            },
            handleRequest: (requestData) => {
                const m = requestData;
                try {
                    const result = this._getHandler().requests[m[0]](...m[1]);
                    return { type: 'result', value: result };
                }
                catch (e) {
                    return { type: 'error', value: e };
                }
            },
        });
        const requests = ( new Proxy({}, {
            get: (target, key) => {
                return async (...args) => {
                    const result = await this._channel.sendRequest([key, args]);
                    if (result.type === 'error') {
                        throw result.value;
                    }
                    else {
                        return result.value;
                    }
                };
            }
        }));
        const notifications = ( new Proxy({}, {
            get: (target, key) => {
                return (...args) => {
                    this._channel.sendNotification([key, args]);
                };
            }
        }));
        this.api = { notifications: notifications, requests: requests };
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/debugger/debuggerRpc.js



function registerDebugChannel(channelId, createClient) {
    const g = globalThis;
    let queuedNotifications = [];
    let curHost = undefined;
    const { channel, handler } = createChannelFactoryFromDebugChannel({
        sendNotification: (data) => {
            if (curHost) {
                curHost.sendNotification(data);
            }
            else {
                queuedNotifications.push(data);
            }
        },
    });
    let curClient = undefined;
    (g.$$debugValueEditor_debugChannels ?? (g.$$debugValueEditor_debugChannels = {}))[channelId] = (host) => {
        curClient = createClient();
        curHost = host;
        for (const n of queuedNotifications) {
            host.sendNotification(n);
        }
        queuedNotifications = [];
        return handler;
    };
    return SimpleTypedRpcConnection.createClient(channel, () => {
        if (!curClient) {
            throw ( new Error('Not supported'));
        }
        return curClient;
    });
}
function createChannelFactoryFromDebugChannel(host) {
    let h;
    const channel = (handler) => {
        h = handler;
        return {
            sendNotification: data => {
                host.sendNotification(data);
            },
            sendRequest: data => {
                throw ( new Error('not supported'));
            },
        };
    };
    return {
        channel: channel,
        handler: {
            handleRequest: (data) => {
                if (data.type === 'notification') {
                    return h?.handleNotification(data.data);
                }
                else {
                    return h?.handleRequest(data.data);
                }
            },
        },
    };
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/debugger/utils.js


function getFirstStackFrameOutsideOf(stack, pattern) {
    const lines = stack.split('\n');
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (pattern && pattern.test(line)) {
            continue;
        }
        const showFramesUpMatch = line.match(/\$show(\d+)FramesUp/);
        if (showFramesUpMatch) {
            const n = parseInt(showFramesUpMatch[1], 10);
            i += (n - 1);
            continue;
        }
        const result = parseLine(line);
        if (result) {
            return result;
        }
    }
    return undefined;
}
function parseLine(stackLine) {
    const match = stackLine.match(/\((.*):(\d+):(\d+)\)/);
    if (match) {
        return {
            fileName: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            id: stackLine,
        };
    }
    const match2 = stackLine.match(/at ([^\(\)]*):(\d+):(\d+)/);
    if (match2) {
        return {
            fileName: match2[1],
            line: parseInt(match2[2]),
            column: parseInt(match2[3]),
            id: stackLine,
        };
    }
    return undefined;
}
class utils_Throttler {
    constructor() {
        this._timeout = undefined;
    }
    throttle(fn, timeoutMs) {
        if (this._timeout === undefined) {
            this._timeout = setTimeout(() => {
                this._timeout = undefined;
                fn();
            }, timeoutMs);
        }
    }
    dispose() {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
        }
    }
}
function deepAssign(target, source) {
    for (const key in source) {
        if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssign(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
}
function deepAssignDeleteNulls(target, source) {
    for (const key in source) {
        if (source[key] === null) {
            delete target[key];
        }
        else if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssignDeleteNulls(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/logging/debugger/devToolsLogger.js











class DevToolsLogger {
    static { this._instance = undefined; }
    static getInstance() {
        if (DevToolsLogger._instance === undefined) {
            DevToolsLogger._instance = ( new DevToolsLogger());
        }
        return DevToolsLogger._instance;
    }
    getTransactionState() {
        const affected = [];
        const txs = [...this._activeTransactions];
        if (txs.length === 0) {
            return undefined;
        }
        const observerQueue = ( txs.flatMap(t => t.debugGetUpdatingObservers() ?? []).map(o => o.observer));
        const processedObservers = ( new Set());
        while (observerQueue.length > 0) {
            const observer = observerQueue.shift();
            if (( processedObservers.has(observer))) {
                continue;
            }
            processedObservers.add(observer);
            const state = this._getInfo(observer, d => {
                if (!( processedObservers.has(d))) {
                    observerQueue.push(d);
                }
            });
            if (state) {
                affected.push(state);
            }
        }
        return { names: ( txs.map(t => t.getDebugName() ?? 'tx')), affected };
    }
    _getObservableInfo(observable) {
        const info = this._instanceInfos.get(observable);
        if (!info) {
            errors_onUnexpectedError(( new errors_BugIndicatingError('No info found')));
            return undefined;
        }
        return info;
    }
    _getAutorunInfo(autorun) {
        const info = this._instanceInfos.get(autorun);
        if (!info) {
            errors_onUnexpectedError(( new errors_BugIndicatingError('No info found')));
            return undefined;
        }
        return info;
    }
    _getInfo(observer, queue) {
        if (observer instanceof derivedImpl_Derived) {
            const observersToUpdate = [...observer.debugGetObservers()];
            for (const o of observersToUpdate) {
                queue(o);
            }
            const info = this._getObservableInfo(observer);
            if (!info) {
                return;
            }
            const observerState = observer.debugGetState();
            const base = { name: observer.debugName, instanceId: info.instanceId, updateCount: observerState.updateCount };
            const changedDependencies = ( [...info.changedObservables].map(o => this._instanceInfos.get(o)?.instanceId)).filter(isDefined);
            if (observerState.isComputing) {
                return { ...base, type: 'observable/derived', state: 'updating', changedDependencies, initialComputation: false };
            }
            switch (observerState.state) {
                case DerivedState.initial:
                    return { ...base, type: 'observable/derived', state: 'noValue' };
                case DerivedState.upToDate:
                    return { ...base, type: 'observable/derived', state: 'upToDate' };
                case DerivedState.stale:
                    return { ...base, type: 'observable/derived', state: 'stale', changedDependencies };
                case DerivedState.dependenciesMightHaveChanged:
                    return { ...base, type: 'observable/derived', state: 'possiblyStale' };
            }
        }
        else if (observer instanceof autorunImpl_AutorunObserver) {
            const info = this._getAutorunInfo(observer);
            if (!info) {
                return undefined;
            }
            const base = { name: observer.debugName, instanceId: info.instanceId, updateCount: info.updateCount };
            const changedDependencies = ( [...info.changedObservables].map(o => this._instanceInfos.get(o).instanceId));
            if (observer.debugGetState().isRunning) {
                return { ...base, type: 'autorun', state: 'updating', changedDependencies };
            }
            switch (observer.debugGetState().state) {
                case AutorunState.upToDate:
                    return { ...base, type: 'autorun', state: 'upToDate' };
                case AutorunState.stale:
                    return { ...base, type: 'autorun', state: 'stale', changedDependencies };
                case AutorunState.dependenciesMightHaveChanged:
                    return { ...base, type: 'autorun', state: 'possiblyStale' };
            }
        }
        return undefined;
    }
    _formatObservable(obs) {
        const info = this._getObservableInfo(obs);
        if (!info) {
            return undefined;
        }
        return { name: obs.debugName, instanceId: info.instanceId };
    }
    _formatObserver(obs) {
        if (obs instanceof derivedImpl_Derived) {
            return { name: ( obs.toString()), instanceId: this._getObservableInfo(obs)?.instanceId };
        }
        const autorunInfo = this._getAutorunInfo(obs);
        if (autorunInfo) {
            return { name: ( obs.toString()), instanceId: autorunInfo.instanceId };
        }
        return undefined;
    }
    constructor() {
        this._declarationId = 0;
        this._instanceId = 0;
        this._declarations = ( new Map());
        this._instanceInfos = ( new WeakMap());
        this._aliveInstances = ( new Map());
        this._activeTransactions = ( new Set());
        this._channel = registerDebugChannel('observableDevTools', () => {
            return {
                notifications: {
                    setDeclarationIdFilter: declarationIds => {
                    },
                    logObservableValue: (observableId) => {
                        console.log('logObservableValue', observableId);
                    },
                    flushUpdates: () => {
                        this._flushUpdates();
                    },
                    resetUpdates: () => {
                        this._pendingChanges = null;
                        this._channel.api.notifications.handleChange(this._fullState, true);
                    },
                },
                requests: {
                    getDeclarations: () => {
                        const result = {};
                        for (const decl of ( this._declarations.values())) {
                            result[decl.id] = decl;
                        }
                        return { decls: result };
                    },
                    getSummarizedInstances: () => {
                        return null;
                    },
                    getObservableValueInfo: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            observers: ( [...obs.debugGetObservers()].map(d => this._formatObserver(d))).filter(isDefined),
                        };
                    },
                    getDerivedInfo: instanceId => {
                        const d = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: ( [...d.debugGetState().dependencies].map(d => this._formatObservable(d))).filter(isDefined),
                            observers: ( [...d.debugGetObservers()].map(d => this._formatObserver(d))).filter(isDefined),
                        };
                    },
                    getAutorunInfo: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: ( [...obs.debugGetState().dependencies].map(d => this._formatObservable(d))).filter(isDefined),
                        };
                    },
                    getTransactionState: () => {
                        return this.getTransactionState();
                    },
                    setValue: (instanceId, jsonValue) => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof derivedImpl_Derived) {
                            obs.debugSetValue(jsonValue);
                        }
                        else if (obs instanceof ObservableValue) {
                            obs.debugSetValue(jsonValue);
                        }
                        else if (obs instanceof FromEventObservable) {
                            obs.debugSetValue(jsonValue);
                        }
                        else {
                            throw ( new errors_BugIndicatingError('Observable is not supported'));
                        }
                        const observers = [...obs.debugGetObservers()];
                        for (const d of observers) {
                            d.beginUpdate(obs);
                        }
                        for (const d of observers) {
                            d.handleChange(obs, undefined);
                        }
                        for (const d of observers) {
                            d.endUpdate(obs);
                        }
                    },
                    getValue: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof derivedImpl_Derived) {
                            return formatValue(obs.debugGetState().value, 200);
                        }
                        else if (obs instanceof ObservableValue) {
                            return formatValue(obs.debugGetState().value, 200);
                        }
                        return undefined;
                    }
                }
            };
        });
        this._pendingChanges = null;
        this._changeThrottler = ( new utils_Throttler());
        this._fullState = {};
        this._flushUpdates = () => {
            if (this._pendingChanges !== null) {
                this._channel.api.notifications.handleChange(this._pendingChanges, false);
                this._pendingChanges = null;
            }
        };
    }
    _handleChange(update) {
        deepAssignDeleteNulls(this._fullState, update);
        if (this._pendingChanges === null) {
            this._pendingChanges = update;
        }
        else {
            deepAssign(this._pendingChanges, update);
        }
        this._changeThrottler.throttle(this._flushUpdates, 10);
    }
    _getDeclarationId(type) {
        let shallow = true;
        let loc;
        const Err = Error;
        while (true) {
            const l = Err.stackTraceLimit;
            Err.stackTraceLimit = shallow ? 6 : 20;
            const stack = ( new Error()).stack;
            Err.stackTraceLimit = l;
            let result = getFirstStackFrameOutsideOf(stack, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!shallow && !result) {
                result = getFirstStackFrameOutsideOf(stack, /[/\\]observableInternal[/\\]|\.observe/);
            }
            if (result) {
                loc = result;
                break;
            }
            if (!shallow) {
                console.error('Could not find location for declaration', ( new Error()).stack);
                loc = { fileName: 'unknown', line: 0, column: 0, id: 'unknown' };
                break;
            }
            shallow = false;
        }
        let decInfo = this._declarations.get(loc.id);
        if (decInfo === undefined) {
            decInfo = {
                id: this._declarationId++,
                type,
                url: loc.fileName,
                line: loc.line,
                column: loc.column,
            };
            this._declarations.set(loc.id, decInfo);
            this._handleChange({ decls: { [decInfo.id]: decInfo } });
        }
        return decInfo.id;
    }
    handleObservableCreated(observable) {
        const declarationId = this._getDeclarationId('observable/value');
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: undefined,
            updateCount: 0,
            changedObservables: ( new Set()),
        };
        this._instanceInfos.set(observable, info);
    }
    handleOnListenerCountChanged(observable, newCount) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        if (info.listenerCount === 0 && newCount > 0) {
            const type = observable instanceof derivedImpl_Derived ? 'observable/derived' : 'observable/value';
            this._aliveInstances.set(info.instanceId, observable);
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        formattedValue: info.lastValue,
                        type,
                        name: observable.debugName,
                    }
                }
            });
        }
        else if (info.listenerCount > 0 && newCount === 0) {
            this._handleChange({
                instances: { [info.instanceId]: null }
            });
            this._aliveInstances.delete(info.instanceId);
        }
        info.listenerCount = newCount;
    }
    handleObservableUpdated(observable, changeInfo) {
        if (observable instanceof derivedImpl_Derived) {
            this._handleDerivedRecomputed(observable, changeInfo);
            return;
        }
        const info = this._getObservableInfo(observable);
        if (info) {
            if (changeInfo.didChange) {
                info.lastValue = formatValue(changeInfo.newValue, 30);
                if (info.listenerCount > 0) {
                    this._handleChange({
                        instances: { [info.instanceId]: { formattedValue: info.lastValue } }
                    });
                }
            }
        }
    }
    handleAutorunCreated(autorun) {
        const declarationId = this._getDeclarationId('autorun');
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: ( new Set()),
        };
        this._instanceInfos.set(autorun, info);
        this._aliveInstances.set(info.instanceId, autorun);
        if (info) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        runCount: 0,
                        type: 'autorun',
                        name: autorun.debugName,
                    }
                }
            });
        }
    }
    handleAutorunDisposed(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        this._handleChange({
            instances: { [info.instanceId]: null }
        });
        this._instanceInfos.delete(autorun);
        this._aliveInstances.delete(info.instanceId);
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.add(observable);
    }
    handleAutorunStarted(autorun) {
    }
    handleAutorunFinished(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.clear();
        info.updateCount++;
        this._handleChange({
            instances: { [info.instanceId]: { runCount: info.updateCount } }
        });
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        const info = this._getObservableInfo(derived);
        if (info) {
            info.changedObservables.add(observable);
        }
    }
    _handleDerivedRecomputed(observable, changeInfo) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        const formattedValue = formatValue(changeInfo.newValue, 30);
        info.updateCount++;
        info.changedObservables.clear();
        info.lastValue = formattedValue;
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: { [info.instanceId]: { formattedValue: formattedValue, recomputationCount: info.updateCount } }
            });
        }
    }
    handleDerivedCleared(observable) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        info.lastValue = undefined;
        info.changedObservables.clear();
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        formattedValue: undefined,
                    }
                }
            });
        }
    }
    handleBeginTransaction(transaction) {
        this._activeTransactions.add(transaction);
    }
    handleEndTransaction(transaction) {
        this._activeTransactions.delete(transaction);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/observableInternal/index.js
















setLogObservableFn(logObservableToConsole);
if (env && env['VSCODE_DEV_DEBUG']) {
    addLogger(DevToolsLogger.getInstance());
}

;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/core/ranges/offsetRange.js



class OffsetRange {
    static fromTo(start, endExclusive) {
        return ( new OffsetRange(start, endExclusive));
    }
    static addRange(range, sortedRanges) {
        let i = 0;
        while (i < sortedRanges.length && sortedRanges[i].endExclusive < range.start) {
            i++;
        }
        let j = i;
        while (j < sortedRanges.length && sortedRanges[j].start <= range.endExclusive) {
            j++;
        }
        if (i === j) {
            sortedRanges.splice(i, 0, range);
        }
        else {
            const start = Math.min(range.start, sortedRanges[i].start);
            const end = Math.max(range.endExclusive, sortedRanges[j - 1].endExclusive);
            sortedRanges.splice(i, j - i, ( new OffsetRange(start, end)));
        }
    }
    static tryCreate(start, endExclusive) {
        if (start > endExclusive) {
            return undefined;
        }
        return ( new OffsetRange(start, endExclusive));
    }
    static ofLength(length) {
        return ( new OffsetRange(0, length));
    }
    static ofStartAndLength(start, length) {
        return ( new OffsetRange(start, start + length));
    }
    static emptyAt(offset) {
        return ( new OffsetRange(offset, offset));
    }
    constructor(start, endExclusive) {
        this.start = start;
        this.endExclusive = endExclusive;
        if (start > endExclusive) {
            throw ( new errors_BugIndicatingError(`Invalid range: ${( this.toString())}`));
        }
    }
    get isEmpty() {
        return this.start === this.endExclusive;
    }
    delta(offset) {
        return ( new OffsetRange(this.start + offset, this.endExclusive + offset));
    }
    deltaStart(offset) {
        return ( new OffsetRange(this.start + offset, this.endExclusive));
    }
    deltaEnd(offset) {
        return ( new OffsetRange(this.start, this.endExclusive + offset));
    }
    get length() {
        return this.endExclusive - this.start;
    }
    toString() {
        return `[${this.start}, ${this.endExclusive})`;
    }
    equals(other) {
        return this.start === other.start && this.endExclusive === other.endExclusive;
    }
    containsRange(other) {
        return this.start <= other.start && other.endExclusive <= this.endExclusive;
    }
    contains(offset) {
        return this.start <= offset && offset < this.endExclusive;
    }
    join(other) {
        return ( new OffsetRange(
            Math.min(this.start, other.start),
            Math.max(this.endExclusive, other.endExclusive)
        ));
    }
    intersect(other) {
        const start = Math.max(this.start, other.start);
        const end = Math.min(this.endExclusive, other.endExclusive);
        if (start <= end) {
            return ( new OffsetRange(start, end));
        }
        return undefined;
    }
    intersectionLength(range) {
        const start = Math.max(this.start, range.start);
        const end = Math.min(this.endExclusive, range.endExclusive);
        return Math.max(0, end - start);
    }
    intersects(other) {
        const start = Math.max(this.start, other.start);
        const end = Math.min(this.endExclusive, other.endExclusive);
        return start < end;
    }
    intersectsOrTouches(other) {
        const start = Math.max(this.start, other.start);
        const end = Math.min(this.endExclusive, other.endExclusive);
        return start <= end;
    }
    isBefore(other) {
        return this.endExclusive <= other.start;
    }
    isAfter(other) {
        return this.start >= other.endExclusive;
    }
    slice(arr) {
        return arr.slice(this.start, this.endExclusive);
    }
    substring(str) {
        return str.substring(this.start, this.endExclusive);
    }
    clip(value) {
        if (this.isEmpty) {
            throw ( new errors_BugIndicatingError(`Invalid clipping range: ${( this.toString())}`));
        }
        return Math.max(this.start, Math.min(this.endExclusive - 1, value));
    }
    clipCyclic(value) {
        if (this.isEmpty) {
            throw ( new errors_BugIndicatingError(`Invalid clipping range: ${( this.toString())}`));
        }
        if (value < this.start) {
            return this.endExclusive - ((this.start - value) % this.length);
        }
        if (value >= this.endExclusive) {
            return this.start + ((value - this.start) % this.length);
        }
        return value;
    }
    map(f) {
        const result = [];
        for (let i = this.start; i < this.endExclusive; i++) {
            result.push(f(i));
        }
        return result;
    }
    forEach(f) {
        for (let i = this.start; i < this.endExclusive; i++) {
            f(i);
        }
    }
    joinRightTouching(range) {
        if (this.endExclusive !== range.start) {
            throw ( new errors_BugIndicatingError(`Invalid join: ${( this.toString())} and ${( range.toString())}`));
        }
        return ( new OffsetRange(this.start, range.endExclusive));
    }
}
class OffsetRangeSet {
    constructor() {
        this._sortedRanges = [];
    }
    get ranges() {
        return [...this._sortedRanges];
    }
    addRange(range) {
        let i = 0;
        while (i < this._sortedRanges.length && this._sortedRanges[i].endExclusive < range.start) {
            i++;
        }
        let j = i;
        while (j < this._sortedRanges.length && this._sortedRanges[j].start <= range.endExclusive) {
            j++;
        }
        if (i === j) {
            this._sortedRanges.splice(i, 0, range);
        }
        else {
            const start = Math.min(range.start, this._sortedRanges[i].start);
            const end = Math.max(range.endExclusive, this._sortedRanges[j - 1].endExclusive);
            this._sortedRanges.splice(i, j - i, ( new OffsetRange(start, end)));
        }
    }
    toString() {
        return ( this._sortedRanges.map(r => ( r.toString()))).join(', ');
    }
    intersectsStrict(other) {
        let i = 0;
        while (i < this._sortedRanges.length && this._sortedRanges[i].endExclusive <= other.start) {
            i++;
        }
        return i < this._sortedRanges.length && this._sortedRanges[i].start < other.endExclusive;
    }
    intersectWithRange(other) {
        const result = ( new OffsetRangeSet());
        for (const range of this._sortedRanges) {
            const intersection = range.intersect(other);
            if (intersection) {
                result.addRange(intersection);
            }
        }
        return result;
    }
    intersectWithRangeLength(other) {
        return this.intersectWithRange(other).length;
    }
    get length() {
        return this._sortedRanges.reduce((prev, cur) => prev + cur.length, 0);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/core/position.js


class Position {
    constructor(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    with(newLineNumber = this.lineNumber, newColumn = this.column) {
        if (newLineNumber === this.lineNumber && newColumn === this.column) {
            return this;
        }
        else {
            return ( new Position(newLineNumber, newColumn));
        }
    }
    delta(deltaLineNumber = 0, deltaColumn = 0) {
        return this.with(Math.max(1, this.lineNumber + deltaLineNumber), Math.max(1, this.column + deltaColumn));
    }
    equals(other) {
        return Position.equals(this, other);
    }
    static equals(a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.lineNumber === b.lineNumber &&
            a.column === b.column);
    }
    isBefore(other) {
        return Position.isBefore(this, other);
    }
    static isBefore(a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    }
    isBeforeOrEqual(other) {
        return Position.isBeforeOrEqual(this, other);
    }
    static isBeforeOrEqual(a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    }
    static compare(a, b) {
        const aLineNumber = a.lineNumber | 0;
        const bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            const aColumn = a.column | 0;
            const bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    }
    clone() {
        return ( new Position(this.lineNumber, this.column));
    }
    toString() {
        return '(' + this.lineNumber + ',' + this.column + ')';
    }
    static lift(pos) {
        return ( new Position(pos.lineNumber, pos.column));
    }
    static isIPosition(obj) {
        return (obj
            && (typeof obj.lineNumber === 'number')
            && (typeof obj.column === 'number'));
    }
    toJSON() {
        return {
            lineNumber: this.lineNumber,
            column: this.column
        };
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/core/range.js



class range_Range {
    constructor(startLineNumber, startColumn, endLineNumber, endColumn) {
        if ((startLineNumber > endLineNumber) || (startLineNumber === endLineNumber && startColumn > endColumn)) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        }
        else {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    isEmpty() {
        return range_Range.isEmpty(this);
    }
    static isEmpty(range) {
        return (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn);
    }
    containsPosition(position) {
        return range_Range.containsPosition(this, position);
    }
    static containsPosition(range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    }
    static strictContainsPosition(range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
            return false;
        }
        return true;
    }
    containsRange(range) {
        return range_Range.containsRange(this, range);
    }
    static containsRange(range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    }
    strictContainsRange(range) {
        return range_Range.strictContainsRange(this, range);
    }
    static strictContainsRange(range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
            return false;
        }
        return true;
    }
    plusRange(range) {
        return range_Range.plusRange(this, range);
    }
    static plusRange(a, b) {
        let startLineNumber;
        let startColumn;
        let endLineNumber;
        let endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        }
        else if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        }
        else {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        }
        else if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        }
        else {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return ( new range_Range(startLineNumber, startColumn, endLineNumber, endColumn));
    }
    intersectRanges(range) {
        return range_Range.intersectRanges(this, range);
    }
    static intersectRanges(a, b) {
        let resultStartLineNumber = a.startLineNumber;
        let resultStartColumn = a.startColumn;
        let resultEndLineNumber = a.endLineNumber;
        let resultEndColumn = a.endColumn;
        const otherStartLineNumber = b.startLineNumber;
        const otherStartColumn = b.startColumn;
        const otherEndLineNumber = b.endLineNumber;
        const otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        }
        else if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        }
        else if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return ( new range_Range(
            resultStartLineNumber,
            resultStartColumn,
            resultEndLineNumber,
            resultEndColumn
        ));
    }
    equalsRange(other) {
        return range_Range.equalsRange(this, other);
    }
    static equalsRange(a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.startLineNumber === b.startLineNumber &&
            a.startColumn === b.startColumn &&
            a.endLineNumber === b.endLineNumber &&
            a.endColumn === b.endColumn);
    }
    getEndPosition() {
        return range_Range.getEndPosition(this);
    }
    static getEndPosition(range) {
        return ( new Position(range.endLineNumber, range.endColumn));
    }
    getStartPosition() {
        return range_Range.getStartPosition(this);
    }
    static getStartPosition(range) {
        return ( new Position(range.startLineNumber, range.startColumn));
    }
    toString() {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    }
    setEndPosition(endLineNumber, endColumn) {
        return ( new range_Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn));
    }
    setStartPosition(startLineNumber, startColumn) {
        return ( new range_Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn));
    }
    collapseToStart() {
        return range_Range.collapseToStart(this);
    }
    static collapseToStart(range) {
        return ( new range_Range(
            range.startLineNumber,
            range.startColumn,
            range.startLineNumber,
            range.startColumn
        ));
    }
    collapseToEnd() {
        return range_Range.collapseToEnd(this);
    }
    static collapseToEnd(range) {
        return ( new range_Range(range.endLineNumber, range.endColumn, range.endLineNumber, range.endColumn));
    }
    delta(lineCount) {
        return ( new range_Range(
            this.startLineNumber + lineCount,
            this.startColumn,
            this.endLineNumber + lineCount,
            this.endColumn
        ));
    }
    isSingleLine() {
        return this.startLineNumber === this.endLineNumber;
    }
    static fromPositions(start, end = start) {
        return ( new range_Range(start.lineNumber, start.column, end.lineNumber, end.column));
    }
    static lift(range) {
        if (!range) {
            return null;
        }
        return ( new range_Range(
            range.startLineNumber,
            range.startColumn,
            range.endLineNumber,
            range.endColumn
        ));
    }
    static isIRange(obj) {
        return (obj
            && (typeof obj.startLineNumber === 'number')
            && (typeof obj.startColumn === 'number')
            && (typeof obj.endLineNumber === 'number')
            && (typeof obj.endColumn === 'number'));
    }
    static areIntersectingOrTouching(a, b) {
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn)) {
            return false;
        }
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn)) {
            return false;
        }
        return true;
    }
    static areIntersecting(a, b) {
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn)) {
            return false;
        }
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn)) {
            return false;
        }
        return true;
    }
    static areOnlyIntersecting(a, b) {
        if (a.endLineNumber < (b.startLineNumber - 1) || (a.endLineNumber === b.startLineNumber && a.endColumn < (b.startColumn - 1))) {
            return false;
        }
        if (b.endLineNumber < (a.startLineNumber - 1) || (b.endLineNumber === a.startLineNumber && b.endColumn < (a.startColumn - 1))) {
            return false;
        }
        return true;
    }
    static compareRangesUsingStarts(a, b) {
        if (a && b) {
            const aStartLineNumber = a.startLineNumber | 0;
            const bStartLineNumber = b.startLineNumber | 0;
            if (aStartLineNumber === bStartLineNumber) {
                const aStartColumn = a.startColumn | 0;
                const bStartColumn = b.startColumn | 0;
                if (aStartColumn === bStartColumn) {
                    const aEndLineNumber = a.endLineNumber | 0;
                    const bEndLineNumber = b.endLineNumber | 0;
                    if (aEndLineNumber === bEndLineNumber) {
                        const aEndColumn = a.endColumn | 0;
                        const bEndColumn = b.endColumn | 0;
                        return aEndColumn - bEndColumn;
                    }
                    return aEndLineNumber - bEndLineNumber;
                }
                return aStartColumn - bStartColumn;
            }
            return aStartLineNumber - bStartLineNumber;
        }
        const aExists = (a ? 1 : 0);
        const bExists = (b ? 1 : 0);
        return aExists - bExists;
    }
    static compareRangesUsingEnds(a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    }
    static spansMultipleLines(range) {
        return range.endLineNumber > range.startLineNumber;
    }
    toJSON() {
        return this;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/core/ranges/lineRange.js







class lineRange_LineRange {
    static ofLength(startLineNumber, length) {
        return ( new lineRange_LineRange(startLineNumber, startLineNumber + length));
    }
    static fromRange(range) {
        return ( new lineRange_LineRange(range.startLineNumber, range.endLineNumber));
    }
    static fromRangeInclusive(range) {
        return ( new lineRange_LineRange(range.startLineNumber, range.endLineNumber + 1));
    }
    static { this.compareByStart = compareBy(l => l.startLineNumber, numberComparator); }
    static subtract(a, b) {
        if (!b) {
            return [a];
        }
        if (a.startLineNumber < b.startLineNumber && b.endLineNumberExclusive < a.endLineNumberExclusive) {
            return [
                ( new lineRange_LineRange(a.startLineNumber, b.startLineNumber)),
                ( new lineRange_LineRange(b.endLineNumberExclusive, a.endLineNumberExclusive))
            ];
        }
        else if (b.startLineNumber <= a.startLineNumber && a.endLineNumberExclusive <= b.endLineNumberExclusive) {
            return [];
        }
        else if (b.endLineNumberExclusive < a.endLineNumberExclusive) {
            return [( new lineRange_LineRange(
                Math.max(b.endLineNumberExclusive, a.startLineNumber),
                a.endLineNumberExclusive
            ))];
        }
        else {
            return [( new lineRange_LineRange(a.startLineNumber, Math.min(b.startLineNumber, a.endLineNumberExclusive)))];
        }
    }
    static joinMany(lineRanges) {
        if (lineRanges.length === 0) {
            return [];
        }
        let result = ( new LineRangeSet(lineRanges[0].slice()));
        for (let i = 1; i < lineRanges.length; i++) {
            result = result.getUnion(( new LineRangeSet(lineRanges[i].slice())));
        }
        return result.ranges;
    }
    static join(lineRanges) {
        if (lineRanges.length === 0) {
            throw ( new errors_BugIndicatingError('lineRanges cannot be empty'));
        }
        let startLineNumber = lineRanges[0].startLineNumber;
        let endLineNumberExclusive = lineRanges[0].endLineNumberExclusive;
        for (let i = 1; i < lineRanges.length; i++) {
            startLineNumber = Math.min(startLineNumber, lineRanges[i].startLineNumber);
            endLineNumberExclusive = Math.max(endLineNumberExclusive, lineRanges[i].endLineNumberExclusive);
        }
        return ( new lineRange_LineRange(startLineNumber, endLineNumberExclusive));
    }
    static deserialize(lineRange) {
        return ( new lineRange_LineRange(lineRange[0], lineRange[1]));
    }
    constructor(startLineNumber, endLineNumberExclusive) {
        if (startLineNumber > endLineNumberExclusive) {
            throw ( new errors_BugIndicatingError(
                `startLineNumber ${startLineNumber} cannot be after endLineNumberExclusive ${endLineNumberExclusive}`
            ));
        }
        this.startLineNumber = startLineNumber;
        this.endLineNumberExclusive = endLineNumberExclusive;
    }
    contains(lineNumber) {
        return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
    }
    containsRange(range) {
        return this.startLineNumber <= range.startLineNumber && range.endLineNumberExclusive <= this.endLineNumberExclusive;
    }
    get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
    }
    delta(offset) {
        return ( new lineRange_LineRange(this.startLineNumber + offset, this.endLineNumberExclusive + offset));
    }
    deltaLength(offset) {
        return ( new lineRange_LineRange(this.startLineNumber, this.endLineNumberExclusive + offset));
    }
    get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
    }
    join(other) {
        return ( new lineRange_LineRange(
            Math.min(this.startLineNumber, other.startLineNumber),
            Math.max(this.endLineNumberExclusive, other.endLineNumberExclusive)
        ));
    }
    toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    intersect(other) {
        const startLineNumber = Math.max(this.startLineNumber, other.startLineNumber);
        const endLineNumberExclusive = Math.min(this.endLineNumberExclusive, other.endLineNumberExclusive);
        if (startLineNumber <= endLineNumberExclusive) {
            return ( new lineRange_LineRange(startLineNumber, endLineNumberExclusive));
        }
        return undefined;
    }
    intersectsStrict(other) {
        return this.startLineNumber < other.endLineNumberExclusive && other.startLineNumber < this.endLineNumberExclusive;
    }
    intersectsOrTouches(other) {
        return this.startLineNumber <= other.endLineNumberExclusive && other.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(b) {
        return this.startLineNumber === b.startLineNumber && this.endLineNumberExclusive === b.endLineNumberExclusive;
    }
    toInclusiveRange() {
        if (this.isEmpty) {
            return null;
        }
        return ( new range_Range(
            this.startLineNumber,
            1,
            this.endLineNumberExclusive - 1,
            Number.MAX_SAFE_INTEGER
        ));
    }
    toExclusiveRange() {
        return ( new range_Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1));
    }
    mapToLineArray(f) {
        const result = [];
        for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
            result.push(f(lineNumber));
        }
        return result;
    }
    forEach(f) {
        for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
            f(lineNumber);
        }
    }
    serialize() {
        return [this.startLineNumber, this.endLineNumberExclusive];
    }
    toOffsetRange() {
        return ( new OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1));
    }
    distanceToRange(other) {
        if (this.endLineNumberExclusive <= other.startLineNumber) {
            return other.startLineNumber - this.endLineNumberExclusive;
        }
        if (other.endLineNumberExclusive <= this.startLineNumber) {
            return this.startLineNumber - other.endLineNumberExclusive;
        }
        return 0;
    }
    distanceToLine(lineNumber) {
        if (this.contains(lineNumber)) {
            return 0;
        }
        if (lineNumber < this.startLineNumber) {
            return this.startLineNumber - lineNumber;
        }
        return lineNumber - this.endLineNumberExclusive;
    }
    addMargin(marginTop, marginBottom) {
        return ( new lineRange_LineRange(
            this.startLineNumber - marginTop,
            this.endLineNumberExclusive + marginBottom
        ));
    }
}
class LineRangeSet {
    constructor(
    _normalizedRanges = []) {
        this._normalizedRanges = _normalizedRanges;
    }
    get ranges() {
        return this._normalizedRanges;
    }
    addRange(range) {
        if (range.length === 0) {
            return;
        }
        const joinRangeStartIdx = arraysFind_findFirstIdxMonotonousOrArrLen(this._normalizedRanges, r => r.endLineNumberExclusive >= range.startLineNumber);
        const joinRangeEndIdxExclusive = findLastIdxMonotonous(this._normalizedRanges, r => r.startLineNumber <= range.endLineNumberExclusive) + 1;
        if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
            this._normalizedRanges.splice(joinRangeStartIdx, 0, range);
        }
        else if (joinRangeStartIdx === joinRangeEndIdxExclusive - 1) {
            const joinRange = this._normalizedRanges[joinRangeStartIdx];
            this._normalizedRanges[joinRangeStartIdx] = joinRange.join(range);
        }
        else {
            const joinRange = this._normalizedRanges[joinRangeStartIdx].join(this._normalizedRanges[joinRangeEndIdxExclusive - 1]).join(range);
            this._normalizedRanges.splice(joinRangeStartIdx, joinRangeEndIdxExclusive - joinRangeStartIdx, joinRange);
        }
    }
    contains(lineNumber) {
        const rangeThatStartsBeforeEnd = findLastMonotonous(this._normalizedRanges, r => r.startLineNumber <= lineNumber);
        return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > lineNumber;
    }
    intersects(range) {
        const rangeThatStartsBeforeEnd = findLastMonotonous(this._normalizedRanges, r => r.startLineNumber < range.endLineNumberExclusive);
        return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > range.startLineNumber;
    }
    getUnion(other) {
        if (this._normalizedRanges.length === 0) {
            return other;
        }
        if (other._normalizedRanges.length === 0) {
            return this;
        }
        const result = [];
        let i1 = 0;
        let i2 = 0;
        let current = null;
        while (i1 < this._normalizedRanges.length || i2 < other._normalizedRanges.length) {
            let next = null;
            if (i1 < this._normalizedRanges.length && i2 < other._normalizedRanges.length) {
                const lineRange1 = this._normalizedRanges[i1];
                const lineRange2 = other._normalizedRanges[i2];
                if (lineRange1.startLineNumber < lineRange2.startLineNumber) {
                    next = lineRange1;
                    i1++;
                }
                else {
                    next = lineRange2;
                    i2++;
                }
            }
            else if (i1 < this._normalizedRanges.length) {
                next = this._normalizedRanges[i1];
                i1++;
            }
            else {
                next = other._normalizedRanges[i2];
                i2++;
            }
            if (current === null) {
                current = next;
            }
            else {
                if (current.endLineNumberExclusive >= next.startLineNumber) {
                    current = ( new lineRange_LineRange(
                        current.startLineNumber,
                        Math.max(current.endLineNumberExclusive, next.endLineNumberExclusive)
                    ));
                }
                else {
                    result.push(current);
                    current = next;
                }
            }
        }
        if (current !== null) {
            result.push(current);
        }
        return ( new LineRangeSet(result));
    }
    subtractFrom(range) {
        const joinRangeStartIdx = arraysFind_findFirstIdxMonotonousOrArrLen(this._normalizedRanges, r => r.endLineNumberExclusive >= range.startLineNumber);
        const joinRangeEndIdxExclusive = findLastIdxMonotonous(this._normalizedRanges, r => r.startLineNumber <= range.endLineNumberExclusive) + 1;
        if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
            return ( new LineRangeSet([range]));
        }
        const result = [];
        let startLineNumber = range.startLineNumber;
        for (let i = joinRangeStartIdx; i < joinRangeEndIdxExclusive; i++) {
            const r = this._normalizedRanges[i];
            if (r.startLineNumber > startLineNumber) {
                result.push(( new lineRange_LineRange(startLineNumber, r.startLineNumber)));
            }
            startLineNumber = r.endLineNumberExclusive;
        }
        if (startLineNumber < range.endLineNumberExclusive) {
            result.push(( new lineRange_LineRange(startLineNumber, range.endLineNumberExclusive)));
        }
        return ( new LineRangeSet(result));
    }
    toString() {
        return ( this._normalizedRanges.map(r => ( r.toString()))).join(', ');
    }
    getIntersection(other) {
        const result = [];
        let i1 = 0;
        let i2 = 0;
        while (i1 < this._normalizedRanges.length && i2 < other._normalizedRanges.length) {
            const r1 = this._normalizedRanges[i1];
            const r2 = other._normalizedRanges[i2];
            const i = r1.intersect(r2);
            if (i && !i.isEmpty) {
                result.push(i);
            }
            if (r1.endLineNumberExclusive < r2.endLineNumberExclusive) {
                i1++;
            }
            else {
                i2++;
            }
        }
        return ( new LineRangeSet(result));
    }
    getWithDelta(value) {
        return ( new LineRangeSet(( this._normalizedRanges.map(r => r.delta(value)))));
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/model/prefixSumComputer.js




class PrefixSumComputer {
    constructor(values) {
        this.values = values;
        this.prefixSum = ( new Uint32Array(values.length));
        this.prefixSumValidIndex = ( new Int32Array(1));
        this.prefixSumValidIndex[0] = -1;
    }
    getCount() {
        return this.values.length;
    }
    insertValues(insertIndex, insertValues) {
        insertIndex = toUint32(insertIndex);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        const insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = ( new Uint32Array(oldValues.length + insertValuesLen));
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = ( new Uint32Array(this.values.length));
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    setValue(index, value) {
        index = toUint32(index);
        value = toUint32(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    }
    removeValues(startIndex, count) {
        startIndex = toUint32(startIndex);
        count = toUint32(count);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        const maxCount = oldValues.length - startIndex;
        if (count >= maxCount) {
            count = maxCount;
        }
        if (count === 0) {
            return false;
        }
        this.values = ( new Uint32Array(oldValues.length - count));
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + count), startIndex);
        this.prefixSum = ( new Uint32Array(this.values.length));
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    getTotalSum() {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(index) {
        if (index < 0) {
            return 0;
        }
        index = toUint32(index);
        return this._getPrefixSum(index);
    }
    _getPrefixSum(index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        let startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (let i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    }
    getIndexOf(sum) {
        sum = Math.floor(sum);
        this.getTotalSum();
        let low = 0;
        let high = this.values.length - 1;
        let mid = 0;
        let midStop = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (sum < midStart) {
                high = mid - 1;
            }
            else if (sum >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return ( new PrefixSumIndexOfResult(mid, sum - midStart));
    }
}
class ConstantTimePrefixSumComputer {
    constructor(values) {
        this._values = values;
        this._isValid = false;
        this._validEndIndex = -1;
        this._prefixSum = [];
        this._indexBySum = [];
    }
    getTotalSum() {
        this._ensureValid();
        return this._indexBySum.length;
    }
    getPrefixSum(count) {
        this._ensureValid();
        if (count === 0) {
            return 0;
        }
        return this._prefixSum[count - 1];
    }
    getIndexOf(sum) {
        this._ensureValid();
        const idx = this._indexBySum[sum];
        const viewLinesAbove = idx > 0 ? this._prefixSum[idx - 1] : 0;
        return ( new PrefixSumIndexOfResult(idx, sum - viewLinesAbove));
    }
    removeValues(start, deleteCount) {
        this._values.splice(start, deleteCount);
        this._invalidate(start);
    }
    insertValues(insertIndex, insertArr) {
        this._values = arrayInsert(this._values, insertIndex, insertArr);
        this._invalidate(insertIndex);
    }
    _invalidate(index) {
        this._isValid = false;
        this._validEndIndex = Math.min(this._validEndIndex, index - 1);
    }
    _ensureValid() {
        if (this._isValid) {
            return;
        }
        for (let i = this._validEndIndex + 1, len = this._values.length; i < len; i++) {
            const value = this._values[i];
            const sumAbove = i > 0 ? this._prefixSum[i - 1] : 0;
            this._prefixSum[i] = sumAbove + value;
            for (let j = 0; j < value; j++) {
                this._indexBySum[sumAbove + j] = i;
            }
        }
        this._prefixSum.length = this._values.length;
        this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1];
        this._isValid = true;
        this._validEndIndex = this._values.length - 1;
    }
    setValue(index, value) {
        if (this._values[index] === value) {
            return;
        }
        this._values[index] = value;
        this._invalidate(index);
    }
}
class PrefixSumIndexOfResult {
    constructor(index, remainder) {
        this.index = index;
        this.remainder = remainder;
        this._prefixSumIndexOfResultBrand = undefined;
        this.index = index;
        this.remainder = remainder;
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/model/mirrorTextModel.js





class MirrorTextModel {
    constructor(uri, lines, eol, versionId) {
        this._uri = uri;
        this._lines = lines;
        this._eol = eol;
        this._versionId = versionId;
        this._lineStarts = null;
        this._cachedTextValue = null;
    }
    dispose() {
        this._lines.length = 0;
    }
    get version() {
        return this._versionId;
    }
    getText() {
        if (this._cachedTextValue === null) {
            this._cachedTextValue = this._lines.join(this._eol);
        }
        return this._cachedTextValue;
    }
    onEvents(e) {
        if (e.eol && e.eol !== this._eol) {
            this._eol = e.eol;
            this._lineStarts = null;
        }
        const changes = e.changes;
        for (const change of changes) {
            this._acceptDeleteRange(change.range);
            this._acceptInsertText(( new Position(change.range.startLineNumber, change.range.startColumn)), change.text);
        }
        this._versionId = e.versionId;
        this._cachedTextValue = null;
    }
    _ensureLineStarts() {
        if (!this._lineStarts) {
            const eolLength = this._eol.length;
            const linesLength = this._lines.length;
            const lineStartValues = ( new Uint32Array(linesLength));
            for (let i = 0; i < linesLength; i++) {
                lineStartValues[i] = this._lines[i].length + eolLength;
            }
            this._lineStarts = ( new PrefixSumComputer(lineStartValues));
        }
    }
    _setLineText(lineIndex, newValue) {
        this._lines[lineIndex] = newValue;
        if (this._lineStarts) {
            this._lineStarts.setValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
        }
    }
    _acceptDeleteRange(range) {
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                return;
            }
            this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
                + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
            return;
        }
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
            + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
        this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        if (this._lineStarts) {
            this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        }
    }
    _acceptInsertText(position, insertText) {
        if (insertText.length === 0) {
            return;
        }
        const insertLines = splitLines(insertText);
        if (insertLines.length === 1) {
            this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
                + insertLines[0]
                + this._lines[position.lineNumber - 1].substring(position.column - 1));
            return;
        }
        insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
            + insertLines[0]);
        const newLengths = ( new Uint32Array(insertLines.length - 1));
        for (let i = 1; i < insertLines.length; i++) {
            this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
            newLengths[i - 1] = insertLines[i].length + this._eol.length;
        }
        if (this._lineStarts) {
            this._lineStarts.insertValues(position.lineNumber, newLengths);
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/core/misc/eolCounter.js



var StringEOL;
(function (StringEOL) {
    StringEOL[StringEOL["Unknown"] = 0] = "Unknown";
    StringEOL[StringEOL["Invalid"] = 3] = "Invalid";
    StringEOL[StringEOL["LF"] = 1] = "LF";
    StringEOL[StringEOL["CRLF"] = 2] = "CRLF";
})(StringEOL || (StringEOL = {}));
function countEOL(text) {
    let eolCount = 0;
    let firstLineLength = 0;
    let lastLineStart = 0;
    let eol = StringEOL.Unknown;
    for (let i = 0, len = text.length; i < len; i++) {
        const chr = text.charCodeAt(i);
        if (chr === charCode_CharCode.CarriageReturn) {
            if (eolCount === 0) {
                firstLineLength = i;
            }
            eolCount++;
            if (i + 1 < len && text.charCodeAt(i + 1) === charCode_CharCode.LineFeed) {
                eol |= StringEOL.CRLF;
                i++;
            }
            else {
                eol |= StringEOL.Invalid;
            }
            lastLineStart = i + 1;
        }
        else if (chr === charCode_CharCode.LineFeed) {
            eol |= StringEOL.LF;
            if (eolCount === 0) {
                firstLineLength = i;
            }
            eolCount++;
            lastLineStart = i + 1;
        }
    }
    if (eolCount === 0) {
        firstLineLength = text.length;
    }
    return [eolCount, firstLineLength, text.length - lastLineStart, eol];
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/encodedTokenAttributes.js


var LanguageId;
(function (LanguageId) {
    LanguageId[LanguageId["Null"] = 0] = "Null";
    LanguageId[LanguageId["PlainText"] = 1] = "PlainText";
})(LanguageId || (LanguageId = {}));
var FontStyle;
(function (FontStyle) {
    FontStyle[FontStyle["NotSet"] = -1] = "NotSet";
    FontStyle[FontStyle["None"] = 0] = "None";
    FontStyle[FontStyle["Italic"] = 1] = "Italic";
    FontStyle[FontStyle["Bold"] = 2] = "Bold";
    FontStyle[FontStyle["Underline"] = 4] = "Underline";
    FontStyle[FontStyle["Strikethrough"] = 8] = "Strikethrough";
})(FontStyle || (FontStyle = {}));
var ColorId;
(function (ColorId) {
    ColorId[ColorId["None"] = 0] = "None";
    ColorId[ColorId["DefaultForeground"] = 1] = "DefaultForeground";
    ColorId[ColorId["DefaultBackground"] = 2] = "DefaultBackground";
})(ColorId || (ColorId = {}));
var StandardTokenType;
(function (StandardTokenType) {
    StandardTokenType[StandardTokenType["Other"] = 0] = "Other";
    StandardTokenType[StandardTokenType["Comment"] = 1] = "Comment";
    StandardTokenType[StandardTokenType["String"] = 2] = "String";
    StandardTokenType[StandardTokenType["RegEx"] = 3] = "RegEx";
})(StandardTokenType || (StandardTokenType = {}));
var MetadataConsts;
(function (MetadataConsts) {
    MetadataConsts[MetadataConsts["LANGUAGEID_MASK"] = 255] = "LANGUAGEID_MASK";
    MetadataConsts[MetadataConsts["TOKEN_TYPE_MASK"] = 768] = "TOKEN_TYPE_MASK";
    MetadataConsts[MetadataConsts["BALANCED_BRACKETS_MASK"] = 1024] = "BALANCED_BRACKETS_MASK";
    MetadataConsts[MetadataConsts["FONT_STYLE_MASK"] = 30720] = "FONT_STYLE_MASK";
    MetadataConsts[MetadataConsts["FOREGROUND_MASK"] = 16744448] = "FOREGROUND_MASK";
    MetadataConsts[MetadataConsts["BACKGROUND_MASK"] = 4278190080] = "BACKGROUND_MASK";
    MetadataConsts[MetadataConsts["ITALIC_MASK"] = 2048] = "ITALIC_MASK";
    MetadataConsts[MetadataConsts["BOLD_MASK"] = 4096] = "BOLD_MASK";
    MetadataConsts[MetadataConsts["UNDERLINE_MASK"] = 8192] = "UNDERLINE_MASK";
    MetadataConsts[MetadataConsts["STRIKETHROUGH_MASK"] = 16384] = "STRIKETHROUGH_MASK";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_ITALIC"] = 1] = "SEMANTIC_USE_ITALIC";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_BOLD"] = 2] = "SEMANTIC_USE_BOLD";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_UNDERLINE"] = 4] = "SEMANTIC_USE_UNDERLINE";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_STRIKETHROUGH"] = 8] = "SEMANTIC_USE_STRIKETHROUGH";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_FOREGROUND"] = 16] = "SEMANTIC_USE_FOREGROUND";
    MetadataConsts[MetadataConsts["SEMANTIC_USE_BACKGROUND"] = 32] = "SEMANTIC_USE_BACKGROUND";
    MetadataConsts[MetadataConsts["LANGUAGEID_OFFSET"] = 0] = "LANGUAGEID_OFFSET";
    MetadataConsts[MetadataConsts["TOKEN_TYPE_OFFSET"] = 8] = "TOKEN_TYPE_OFFSET";
    MetadataConsts[MetadataConsts["BALANCED_BRACKETS_OFFSET"] = 10] = "BALANCED_BRACKETS_OFFSET";
    MetadataConsts[MetadataConsts["FONT_STYLE_OFFSET"] = 11] = "FONT_STYLE_OFFSET";
    MetadataConsts[MetadataConsts["FOREGROUND_OFFSET"] = 15] = "FOREGROUND_OFFSET";
    MetadataConsts[MetadataConsts["BACKGROUND_OFFSET"] = 24] = "BACKGROUND_OFFSET";
})(MetadataConsts || (MetadataConsts = {}));
class TokenMetadata {
    static getLanguageId(metadata) {
        return (metadata & MetadataConsts.LANGUAGEID_MASK) >>> MetadataConsts.LANGUAGEID_OFFSET;
    }
    static getTokenType(metadata) {
        return (metadata & MetadataConsts.TOKEN_TYPE_MASK) >>> MetadataConsts.TOKEN_TYPE_OFFSET;
    }
    static containsBalancedBrackets(metadata) {
        return (metadata & MetadataConsts.BALANCED_BRACKETS_MASK) !== 0;
    }
    static getFontStyle(metadata) {
        return (metadata & MetadataConsts.FONT_STYLE_MASK) >>> MetadataConsts.FONT_STYLE_OFFSET;
    }
    static getForeground(metadata) {
        return (metadata & MetadataConsts.FOREGROUND_MASK) >>> MetadataConsts.FOREGROUND_OFFSET;
    }
    static getBackground(metadata) {
        return (metadata & MetadataConsts.BACKGROUND_MASK) >>> MetadataConsts.BACKGROUND_OFFSET;
    }
    static getClassNameFromMetadata(metadata) {
        const foreground = this.getForeground(metadata);
        let className = 'mtk' + foreground;
        const fontStyle = this.getFontStyle(metadata);
        if (fontStyle & FontStyle.Italic) {
            className += ' mtki';
        }
        if (fontStyle & FontStyle.Bold) {
            className += ' mtkb';
        }
        if (fontStyle & FontStyle.Underline) {
            className += ' mtku';
        }
        if (fontStyle & FontStyle.Strikethrough) {
            className += ' mtks';
        }
        return className;
    }
    static getInlineStyleFromMetadata(metadata, colorMap) {
        const foreground = this.getForeground(metadata);
        const fontStyle = this.getFontStyle(metadata);
        let result = `color: ${colorMap[foreground]};`;
        if (fontStyle & FontStyle.Italic) {
            result += 'font-style: italic;';
        }
        if (fontStyle & FontStyle.Bold) {
            result += 'font-weight: bold;';
        }
        let textDecoration = '';
        if (fontStyle & FontStyle.Underline) {
            textDecoration += ' underline';
        }
        if (fontStyle & FontStyle.Strikethrough) {
            textDecoration += ' line-through';
        }
        if (textDecoration) {
            result += `text-decoration:${textDecoration};`;
        }
        return result;
    }
    static getPresentationFromMetadata(metadata) {
        const foreground = this.getForeground(metadata);
        const fontStyle = this.getFontStyle(metadata);
        return {
            foreground: foreground,
            italic: Boolean(fontStyle & FontStyle.Italic),
            bold: Boolean(fontStyle & FontStyle.Bold),
            underline: Boolean(fontStyle & FontStyle.Underline),
            strikethrough: Boolean(fontStyle & FontStyle.Strikethrough),
        };
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/codiconsUtil.js



const _codiconFontCharacters = Object.create(null);
function register(id, fontCharacter) {
    if (isString(fontCharacter)) {
        const val = _codiconFontCharacters[fontCharacter];
        if (val === undefined) {
            throw ( new Error(`${id} references an unknown codicon: ${fontCharacter}`));
        }
        fontCharacter = val;
    }
    _codiconFontCharacters[id] = fontCharacter;
    return { id };
}
function getCodiconFontCharacters() {
    return _codiconFontCharacters;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/codiconsLibrary.js



const codiconsLibrary = {
    add: register('add', 0xea60),
    plus: register('plus', 0xea60),
    gistNew: register('gist-new', 0xea60),
    repoCreate: register('repo-create', 0xea60),
    lightbulb: register('lightbulb', 0xea61),
    lightBulb: register('light-bulb', 0xea61),
    repo: register('repo', 0xea62),
    repoDelete: register('repo-delete', 0xea62),
    gistFork: register('gist-fork', 0xea63),
    repoForked: register('repo-forked', 0xea63),
    gitPullRequest: register('git-pull-request', 0xea64),
    gitPullRequestAbandoned: register('git-pull-request-abandoned', 0xea64),
    recordKeys: register('record-keys', 0xea65),
    keyboard: register('keyboard', 0xea65),
    tag: register('tag', 0xea66),
    gitPullRequestLabel: register('git-pull-request-label', 0xea66),
    tagAdd: register('tag-add', 0xea66),
    tagRemove: register('tag-remove', 0xea66),
    person: register('person', 0xea67),
    personFollow: register('person-follow', 0xea67),
    personOutline: register('person-outline', 0xea67),
    personFilled: register('person-filled', 0xea67),
    gitBranch: register('git-branch', 0xea68),
    gitBranchCreate: register('git-branch-create', 0xea68),
    gitBranchDelete: register('git-branch-delete', 0xea68),
    sourceControl: register('source-control', 0xea68),
    mirror: register('mirror', 0xea69),
    mirrorPublic: register('mirror-public', 0xea69),
    star: register('star', 0xea6a),
    starAdd: register('star-add', 0xea6a),
    starDelete: register('star-delete', 0xea6a),
    starEmpty: register('star-empty', 0xea6a),
    comment: register('comment', 0xea6b),
    commentAdd: register('comment-add', 0xea6b),
    alert: register('alert', 0xea6c),
    warning: register('warning', 0xea6c),
    search: register('search', 0xea6d),
    searchSave: register('search-save', 0xea6d),
    logOut: register('log-out', 0xea6e),
    signOut: register('sign-out', 0xea6e),
    logIn: register('log-in', 0xea6f),
    signIn: register('sign-in', 0xea6f),
    eye: register('eye', 0xea70),
    eyeUnwatch: register('eye-unwatch', 0xea70),
    eyeWatch: register('eye-watch', 0xea70),
    circleFilled: register('circle-filled', 0xea71),
    primitiveDot: register('primitive-dot', 0xea71),
    closeDirty: register('close-dirty', 0xea71),
    debugBreakpoint: register('debug-breakpoint', 0xea71),
    debugBreakpointDisabled: register('debug-breakpoint-disabled', 0xea71),
    debugHint: register('debug-hint', 0xea71),
    terminalDecorationSuccess: register('terminal-decoration-success', 0xea71),
    primitiveSquare: register('primitive-square', 0xea72),
    edit: register('edit', 0xea73),
    pencil: register('pencil', 0xea73),
    info: register('info', 0xea74),
    issueOpened: register('issue-opened', 0xea74),
    gistPrivate: register('gist-private', 0xea75),
    gitForkPrivate: register('git-fork-private', 0xea75),
    lock: register('lock', 0xea75),
    mirrorPrivate: register('mirror-private', 0xea75),
    close: register('close', 0xea76),
    removeClose: register('remove-close', 0xea76),
    x: register('x', 0xea76),
    repoSync: register('repo-sync', 0xea77),
    sync: register('sync', 0xea77),
    clone: register('clone', 0xea78),
    desktopDownload: register('desktop-download', 0xea78),
    beaker: register('beaker', 0xea79),
    microscope: register('microscope', 0xea79),
    vm: register('vm', 0xea7a),
    deviceDesktop: register('device-desktop', 0xea7a),
    file: register('file', 0xea7b),
    fileText: register('file-text', 0xea7b),
    more: register('more', 0xea7c),
    ellipsis: register('ellipsis', 0xea7c),
    kebabHorizontal: register('kebab-horizontal', 0xea7c),
    mailReply: register('mail-reply', 0xea7d),
    reply: register('reply', 0xea7d),
    organization: register('organization', 0xea7e),
    organizationFilled: register('organization-filled', 0xea7e),
    organizationOutline: register('organization-outline', 0xea7e),
    newFile: register('new-file', 0xea7f),
    fileAdd: register('file-add', 0xea7f),
    newFolder: register('new-folder', 0xea80),
    fileDirectoryCreate: register('file-directory-create', 0xea80),
    trash: register('trash', 0xea81),
    trashcan: register('trashcan', 0xea81),
    history: register('history', 0xea82),
    clock: register('clock', 0xea82),
    folder: register('folder', 0xea83),
    fileDirectory: register('file-directory', 0xea83),
    symbolFolder: register('symbol-folder', 0xea83),
    logoGithub: register('logo-github', 0xea84),
    markGithub: register('mark-github', 0xea84),
    github: register('github', 0xea84),
    terminal: register('terminal', 0xea85),
    console: register('console', 0xea85),
    repl: register('repl', 0xea85),
    zap: register('zap', 0xea86),
    symbolEvent: register('symbol-event', 0xea86),
    error: register('error', 0xea87),
    stop: register('stop', 0xea87),
    variable: register('variable', 0xea88),
    symbolVariable: register('symbol-variable', 0xea88),
    array: register('array', 0xea8a),
    symbolArray: register('symbol-array', 0xea8a),
    symbolModule: register('symbol-module', 0xea8b),
    symbolPackage: register('symbol-package', 0xea8b),
    symbolNamespace: register('symbol-namespace', 0xea8b),
    symbolObject: register('symbol-object', 0xea8b),
    symbolMethod: register('symbol-method', 0xea8c),
    symbolFunction: register('symbol-function', 0xea8c),
    symbolConstructor: register('symbol-constructor', 0xea8c),
    symbolBoolean: register('symbol-boolean', 0xea8f),
    symbolNull: register('symbol-null', 0xea8f),
    symbolNumeric: register('symbol-numeric', 0xea90),
    symbolNumber: register('symbol-number', 0xea90),
    symbolStructure: register('symbol-structure', 0xea91),
    symbolStruct: register('symbol-struct', 0xea91),
    symbolParameter: register('symbol-parameter', 0xea92),
    symbolTypeParameter: register('symbol-type-parameter', 0xea92),
    symbolKey: register('symbol-key', 0xea93),
    symbolText: register('symbol-text', 0xea93),
    symbolReference: register('symbol-reference', 0xea94),
    goToFile: register('go-to-file', 0xea94),
    symbolEnum: register('symbol-enum', 0xea95),
    symbolValue: register('symbol-value', 0xea95),
    symbolRuler: register('symbol-ruler', 0xea96),
    symbolUnit: register('symbol-unit', 0xea96),
    activateBreakpoints: register('activate-breakpoints', 0xea97),
    archive: register('archive', 0xea98),
    arrowBoth: register('arrow-both', 0xea99),
    arrowDown: register('arrow-down', 0xea9a),
    arrowLeft: register('arrow-left', 0xea9b),
    arrowRight: register('arrow-right', 0xea9c),
    arrowSmallDown: register('arrow-small-down', 0xea9d),
    arrowSmallLeft: register('arrow-small-left', 0xea9e),
    arrowSmallRight: register('arrow-small-right', 0xea9f),
    arrowSmallUp: register('arrow-small-up', 0xeaa0),
    arrowUp: register('arrow-up', 0xeaa1),
    bell: register('bell', 0xeaa2),
    bold: register('bold', 0xeaa3),
    book: register('book', 0xeaa4),
    bookmark: register('bookmark', 0xeaa5),
    debugBreakpointConditionalUnverified: register('debug-breakpoint-conditional-unverified', 0xeaa6),
    debugBreakpointConditional: register('debug-breakpoint-conditional', 0xeaa7),
    debugBreakpointConditionalDisabled: register('debug-breakpoint-conditional-disabled', 0xeaa7),
    debugBreakpointDataUnverified: register('debug-breakpoint-data-unverified', 0xeaa8),
    debugBreakpointData: register('debug-breakpoint-data', 0xeaa9),
    debugBreakpointDataDisabled: register('debug-breakpoint-data-disabled', 0xeaa9),
    debugBreakpointLogUnverified: register('debug-breakpoint-log-unverified', 0xeaaa),
    debugBreakpointLog: register('debug-breakpoint-log', 0xeaab),
    debugBreakpointLogDisabled: register('debug-breakpoint-log-disabled', 0xeaab),
    briefcase: register('briefcase', 0xeaac),
    broadcast: register('broadcast', 0xeaad),
    browser: register('browser', 0xeaae),
    bug: register('bug', 0xeaaf),
    calendar: register('calendar', 0xeab0),
    caseSensitive: register('case-sensitive', 0xeab1),
    check: register('check', 0xeab2),
    checklist: register('checklist', 0xeab3),
    chevronDown: register('chevron-down', 0xeab4),
    chevronLeft: register('chevron-left', 0xeab5),
    chevronRight: register('chevron-right', 0xeab6),
    chevronUp: register('chevron-up', 0xeab7),
    chromeClose: register('chrome-close', 0xeab8),
    chromeMaximize: register('chrome-maximize', 0xeab9),
    chromeMinimize: register('chrome-minimize', 0xeaba),
    chromeRestore: register('chrome-restore', 0xeabb),
    circleOutline: register('circle-outline', 0xeabc),
    circle: register('circle', 0xeabc),
    debugBreakpointUnverified: register('debug-breakpoint-unverified', 0xeabc),
    terminalDecorationIncomplete: register('terminal-decoration-incomplete', 0xeabc),
    circleSlash: register('circle-slash', 0xeabd),
    circuitBoard: register('circuit-board', 0xeabe),
    clearAll: register('clear-all', 0xeabf),
    clippy: register('clippy', 0xeac0),
    closeAll: register('close-all', 0xeac1),
    cloudDownload: register('cloud-download', 0xeac2),
    cloudUpload: register('cloud-upload', 0xeac3),
    code: register('code', 0xeac4),
    collapseAll: register('collapse-all', 0xeac5),
    colorMode: register('color-mode', 0xeac6),
    commentDiscussion: register('comment-discussion', 0xeac7),
    creditCard: register('credit-card', 0xeac9),
    dash: register('dash', 0xeacc),
    dashboard: register('dashboard', 0xeacd),
    database: register('database', 0xeace),
    debugContinue: register('debug-continue', 0xeacf),
    debugDisconnect: register('debug-disconnect', 0xead0),
    debugPause: register('debug-pause', 0xead1),
    debugRestart: register('debug-restart', 0xead2),
    debugStart: register('debug-start', 0xead3),
    debugStepInto: register('debug-step-into', 0xead4),
    debugStepOut: register('debug-step-out', 0xead5),
    debugStepOver: register('debug-step-over', 0xead6),
    debugStop: register('debug-stop', 0xead7),
    debug: register('debug', 0xead8),
    deviceCameraVideo: register('device-camera-video', 0xead9),
    deviceCamera: register('device-camera', 0xeada),
    deviceMobile: register('device-mobile', 0xeadb),
    diffAdded: register('diff-added', 0xeadc),
    diffIgnored: register('diff-ignored', 0xeadd),
    diffModified: register('diff-modified', 0xeade),
    diffRemoved: register('diff-removed', 0xeadf),
    diffRenamed: register('diff-renamed', 0xeae0),
    diff: register('diff', 0xeae1),
    diffSidebyside: register('diff-sidebyside', 0xeae1),
    discard: register('discard', 0xeae2),
    editorLayout: register('editor-layout', 0xeae3),
    emptyWindow: register('empty-window', 0xeae4),
    exclude: register('exclude', 0xeae5),
    extensions: register('extensions', 0xeae6),
    eyeClosed: register('eye-closed', 0xeae7),
    fileBinary: register('file-binary', 0xeae8),
    fileCode: register('file-code', 0xeae9),
    fileMedia: register('file-media', 0xeaea),
    filePdf: register('file-pdf', 0xeaeb),
    fileSubmodule: register('file-submodule', 0xeaec),
    fileSymlinkDirectory: register('file-symlink-directory', 0xeaed),
    fileSymlinkFile: register('file-symlink-file', 0xeaee),
    fileZip: register('file-zip', 0xeaef),
    files: register('files', 0xeaf0),
    filter: register('filter', 0xeaf1),
    flame: register('flame', 0xeaf2),
    foldDown: register('fold-down', 0xeaf3),
    foldUp: register('fold-up', 0xeaf4),
    fold: register('fold', 0xeaf5),
    folderActive: register('folder-active', 0xeaf6),
    folderOpened: register('folder-opened', 0xeaf7),
    gear: register('gear', 0xeaf8),
    gift: register('gift', 0xeaf9),
    gistSecret: register('gist-secret', 0xeafa),
    gist: register('gist', 0xeafb),
    gitCommit: register('git-commit', 0xeafc),
    gitCompare: register('git-compare', 0xeafd),
    compareChanges: register('compare-changes', 0xeafd),
    gitMerge: register('git-merge', 0xeafe),
    githubAction: register('github-action', 0xeaff),
    githubAlt: register('github-alt', 0xeb00),
    globe: register('globe', 0xeb01),
    grabber: register('grabber', 0xeb02),
    graph: register('graph', 0xeb03),
    gripper: register('gripper', 0xeb04),
    heart: register('heart', 0xeb05),
    home: register('home', 0xeb06),
    horizontalRule: register('horizontal-rule', 0xeb07),
    hubot: register('hubot', 0xeb08),
    inbox: register('inbox', 0xeb09),
    issueReopened: register('issue-reopened', 0xeb0b),
    issues: register('issues', 0xeb0c),
    italic: register('italic', 0xeb0d),
    jersey: register('jersey', 0xeb0e),
    json: register('json', 0xeb0f),
    kebabVertical: register('kebab-vertical', 0xeb10),
    key: register('key', 0xeb11),
    law: register('law', 0xeb12),
    lightbulbAutofix: register('lightbulb-autofix', 0xeb13),
    linkExternal: register('link-external', 0xeb14),
    link: register('link', 0xeb15),
    listOrdered: register('list-ordered', 0xeb16),
    listUnordered: register('list-unordered', 0xeb17),
    liveShare: register('live-share', 0xeb18),
    loading: register('loading', 0xeb19),
    location: register('location', 0xeb1a),
    mailRead: register('mail-read', 0xeb1b),
    mail: register('mail', 0xeb1c),
    markdown: register('markdown', 0xeb1d),
    megaphone: register('megaphone', 0xeb1e),
    mention: register('mention', 0xeb1f),
    milestone: register('milestone', 0xeb20),
    gitPullRequestMilestone: register('git-pull-request-milestone', 0xeb20),
    mortarBoard: register('mortar-board', 0xeb21),
    move: register('move', 0xeb22),
    multipleWindows: register('multiple-windows', 0xeb23),
    mute: register('mute', 0xeb24),
    noNewline: register('no-newline', 0xeb25),
    note: register('note', 0xeb26),
    octoface: register('octoface', 0xeb27),
    openPreview: register('open-preview', 0xeb28),
    package: register('package', 0xeb29),
    paintcan: register('paintcan', 0xeb2a),
    pin: register('pin', 0xeb2b),
    play: register('play', 0xeb2c),
    run: register('run', 0xeb2c),
    plug: register('plug', 0xeb2d),
    preserveCase: register('preserve-case', 0xeb2e),
    preview: register('preview', 0xeb2f),
    project: register('project', 0xeb30),
    pulse: register('pulse', 0xeb31),
    question: register('question', 0xeb32),
    quote: register('quote', 0xeb33),
    radioTower: register('radio-tower', 0xeb34),
    reactions: register('reactions', 0xeb35),
    references: register('references', 0xeb36),
    refresh: register('refresh', 0xeb37),
    regex: register('regex', 0xeb38),
    remoteExplorer: register('remote-explorer', 0xeb39),
    remote: register('remote', 0xeb3a),
    remove: register('remove', 0xeb3b),
    replaceAll: register('replace-all', 0xeb3c),
    replace: register('replace', 0xeb3d),
    repoClone: register('repo-clone', 0xeb3e),
    repoForcePush: register('repo-force-push', 0xeb3f),
    repoPull: register('repo-pull', 0xeb40),
    repoPush: register('repo-push', 0xeb41),
    report: register('report', 0xeb42),
    requestChanges: register('request-changes', 0xeb43),
    rocket: register('rocket', 0xeb44),
    rootFolderOpened: register('root-folder-opened', 0xeb45),
    rootFolder: register('root-folder', 0xeb46),
    rss: register('rss', 0xeb47),
    ruby: register('ruby', 0xeb48),
    saveAll: register('save-all', 0xeb49),
    saveAs: register('save-as', 0xeb4a),
    save: register('save', 0xeb4b),
    screenFull: register('screen-full', 0xeb4c),
    screenNormal: register('screen-normal', 0xeb4d),
    searchStop: register('search-stop', 0xeb4e),
    server: register('server', 0xeb50),
    settingsGear: register('settings-gear', 0xeb51),
    settings: register('settings', 0xeb52),
    shield: register('shield', 0xeb53),
    smiley: register('smiley', 0xeb54),
    sortPrecedence: register('sort-precedence', 0xeb55),
    splitHorizontal: register('split-horizontal', 0xeb56),
    splitVertical: register('split-vertical', 0xeb57),
    squirrel: register('squirrel', 0xeb58),
    starFull: register('star-full', 0xeb59),
    starHalf: register('star-half', 0xeb5a),
    symbolClass: register('symbol-class', 0xeb5b),
    symbolColor: register('symbol-color', 0xeb5c),
    symbolConstant: register('symbol-constant', 0xeb5d),
    symbolEnumMember: register('symbol-enum-member', 0xeb5e),
    symbolField: register('symbol-field', 0xeb5f),
    symbolFile: register('symbol-file', 0xeb60),
    symbolInterface: register('symbol-interface', 0xeb61),
    symbolKeyword: register('symbol-keyword', 0xeb62),
    symbolMisc: register('symbol-misc', 0xeb63),
    symbolOperator: register('symbol-operator', 0xeb64),
    symbolProperty: register('symbol-property', 0xeb65),
    wrench: register('wrench', 0xeb65),
    wrenchSubaction: register('wrench-subaction', 0xeb65),
    symbolSnippet: register('symbol-snippet', 0xeb66),
    tasklist: register('tasklist', 0xeb67),
    telescope: register('telescope', 0xeb68),
    textSize: register('text-size', 0xeb69),
    threeBars: register('three-bars', 0xeb6a),
    thumbsdown: register('thumbsdown', 0xeb6b),
    thumbsup: register('thumbsup', 0xeb6c),
    tools: register('tools', 0xeb6d),
    triangleDown: register('triangle-down', 0xeb6e),
    triangleLeft: register('triangle-left', 0xeb6f),
    triangleRight: register('triangle-right', 0xeb70),
    triangleUp: register('triangle-up', 0xeb71),
    twitter: register('twitter', 0xeb72),
    unfold: register('unfold', 0xeb73),
    unlock: register('unlock', 0xeb74),
    unmute: register('unmute', 0xeb75),
    unverified: register('unverified', 0xeb76),
    verified: register('verified', 0xeb77),
    versions: register('versions', 0xeb78),
    vmActive: register('vm-active', 0xeb79),
    vmOutline: register('vm-outline', 0xeb7a),
    vmRunning: register('vm-running', 0xeb7b),
    watch: register('watch', 0xeb7c),
    whitespace: register('whitespace', 0xeb7d),
    wholeWord: register('whole-word', 0xeb7e),
    window: register('window', 0xeb7f),
    wordWrap: register('word-wrap', 0xeb80),
    zoomIn: register('zoom-in', 0xeb81),
    zoomOut: register('zoom-out', 0xeb82),
    listFilter: register('list-filter', 0xeb83),
    listFlat: register('list-flat', 0xeb84),
    listSelection: register('list-selection', 0xeb85),
    selection: register('selection', 0xeb85),
    listTree: register('list-tree', 0xeb86),
    debugBreakpointFunctionUnverified: register('debug-breakpoint-function-unverified', 0xeb87),
    debugBreakpointFunction: register('debug-breakpoint-function', 0xeb88),
    debugBreakpointFunctionDisabled: register('debug-breakpoint-function-disabled', 0xeb88),
    debugStackframeActive: register('debug-stackframe-active', 0xeb89),
    circleSmallFilled: register('circle-small-filled', 0xeb8a),
    debugStackframeDot: register('debug-stackframe-dot', 0xeb8a),
    terminalDecorationMark: register('terminal-decoration-mark', 0xeb8a),
    debugStackframe: register('debug-stackframe', 0xeb8b),
    debugStackframeFocused: register('debug-stackframe-focused', 0xeb8b),
    debugBreakpointUnsupported: register('debug-breakpoint-unsupported', 0xeb8c),
    symbolString: register('symbol-string', 0xeb8d),
    debugReverseContinue: register('debug-reverse-continue', 0xeb8e),
    debugStepBack: register('debug-step-back', 0xeb8f),
    debugRestartFrame: register('debug-restart-frame', 0xeb90),
    debugAlt: register('debug-alt', 0xeb91),
    callIncoming: register('call-incoming', 0xeb92),
    callOutgoing: register('call-outgoing', 0xeb93),
    menu: register('menu', 0xeb94),
    expandAll: register('expand-all', 0xeb95),
    feedback: register('feedback', 0xeb96),
    gitPullRequestReviewer: register('git-pull-request-reviewer', 0xeb96),
    groupByRefType: register('group-by-ref-type', 0xeb97),
    ungroupByRefType: register('ungroup-by-ref-type', 0xeb98),
    account: register('account', 0xeb99),
    gitPullRequestAssignee: register('git-pull-request-assignee', 0xeb99),
    bellDot: register('bell-dot', 0xeb9a),
    debugConsole: register('debug-console', 0xeb9b),
    library: register('library', 0xeb9c),
    output: register('output', 0xeb9d),
    runAll: register('run-all', 0xeb9e),
    syncIgnored: register('sync-ignored', 0xeb9f),
    pinned: register('pinned', 0xeba0),
    githubInverted: register('github-inverted', 0xeba1),
    serverProcess: register('server-process', 0xeba2),
    serverEnvironment: register('server-environment', 0xeba3),
    pass: register('pass', 0xeba4),
    issueClosed: register('issue-closed', 0xeba4),
    stopCircle: register('stop-circle', 0xeba5),
    playCircle: register('play-circle', 0xeba6),
    record: register('record', 0xeba7),
    debugAltSmall: register('debug-alt-small', 0xeba8),
    vmConnect: register('vm-connect', 0xeba9),
    cloud: register('cloud', 0xebaa),
    merge: register('merge', 0xebab),
    export: register('export', 0xebac),
    graphLeft: register('graph-left', 0xebad),
    magnet: register('magnet', 0xebae),
    notebook: register('notebook', 0xebaf),
    redo: register('redo', 0xebb0),
    checkAll: register('check-all', 0xebb1),
    pinnedDirty: register('pinned-dirty', 0xebb2),
    passFilled: register('pass-filled', 0xebb3),
    circleLargeFilled: register('circle-large-filled', 0xebb4),
    circleLarge: register('circle-large', 0xebb5),
    circleLargeOutline: register('circle-large-outline', 0xebb5),
    combine: register('combine', 0xebb6),
    gather: register('gather', 0xebb6),
    table: register('table', 0xebb7),
    variableGroup: register('variable-group', 0xebb8),
    typeHierarchy: register('type-hierarchy', 0xebb9),
    typeHierarchySub: register('type-hierarchy-sub', 0xebba),
    typeHierarchySuper: register('type-hierarchy-super', 0xebbb),
    gitPullRequestCreate: register('git-pull-request-create', 0xebbc),
    runAbove: register('run-above', 0xebbd),
    runBelow: register('run-below', 0xebbe),
    notebookTemplate: register('notebook-template', 0xebbf),
    debugRerun: register('debug-rerun', 0xebc0),
    workspaceTrusted: register('workspace-trusted', 0xebc1),
    workspaceUntrusted: register('workspace-untrusted', 0xebc2),
    workspaceUnknown: register('workspace-unknown', 0xebc3),
    terminalCmd: register('terminal-cmd', 0xebc4),
    terminalDebian: register('terminal-debian', 0xebc5),
    terminalLinux: register('terminal-linux', 0xebc6),
    terminalPowershell: register('terminal-powershell', 0xebc7),
    terminalTmux: register('terminal-tmux', 0xebc8),
    terminalUbuntu: register('terminal-ubuntu', 0xebc9),
    terminalBash: register('terminal-bash', 0xebca),
    arrowSwap: register('arrow-swap', 0xebcb),
    copy: register('copy', 0xebcc),
    personAdd: register('person-add', 0xebcd),
    filterFilled: register('filter-filled', 0xebce),
    wand: register('wand', 0xebcf),
    debugLineByLine: register('debug-line-by-line', 0xebd0),
    inspect: register('inspect', 0xebd1),
    layers: register('layers', 0xebd2),
    layersDot: register('layers-dot', 0xebd3),
    layersActive: register('layers-active', 0xebd4),
    compass: register('compass', 0xebd5),
    compassDot: register('compass-dot', 0xebd6),
    compassActive: register('compass-active', 0xebd7),
    azure: register('azure', 0xebd8),
    issueDraft: register('issue-draft', 0xebd9),
    gitPullRequestClosed: register('git-pull-request-closed', 0xebda),
    gitPullRequestDraft: register('git-pull-request-draft', 0xebdb),
    debugAll: register('debug-all', 0xebdc),
    debugCoverage: register('debug-coverage', 0xebdd),
    runErrors: register('run-errors', 0xebde),
    folderLibrary: register('folder-library', 0xebdf),
    debugContinueSmall: register('debug-continue-small', 0xebe0),
    beakerStop: register('beaker-stop', 0xebe1),
    graphLine: register('graph-line', 0xebe2),
    graphScatter: register('graph-scatter', 0xebe3),
    pieChart: register('pie-chart', 0xebe4),
    bracket: register('bracket', 0xeb0f),
    bracketDot: register('bracket-dot', 0xebe5),
    bracketError: register('bracket-error', 0xebe6),
    lockSmall: register('lock-small', 0xebe7),
    azureDevops: register('azure-devops', 0xebe8),
    verifiedFilled: register('verified-filled', 0xebe9),
    newline: register('newline', 0xebea),
    layout: register('layout', 0xebeb),
    layoutActivitybarLeft: register('layout-activitybar-left', 0xebec),
    layoutActivitybarRight: register('layout-activitybar-right', 0xebed),
    layoutPanelLeft: register('layout-panel-left', 0xebee),
    layoutPanelCenter: register('layout-panel-center', 0xebef),
    layoutPanelJustify: register('layout-panel-justify', 0xebf0),
    layoutPanelRight: register('layout-panel-right', 0xebf1),
    layoutPanel: register('layout-panel', 0xebf2),
    layoutSidebarLeft: register('layout-sidebar-left', 0xebf3),
    layoutSidebarRight: register('layout-sidebar-right', 0xebf4),
    layoutStatusbar: register('layout-statusbar', 0xebf5),
    layoutMenubar: register('layout-menubar', 0xebf6),
    layoutCentered: register('layout-centered', 0xebf7),
    target: register('target', 0xebf8),
    indent: register('indent', 0xebf9),
    recordSmall: register('record-small', 0xebfa),
    errorSmall: register('error-small', 0xebfb),
    terminalDecorationError: register('terminal-decoration-error', 0xebfb),
    arrowCircleDown: register('arrow-circle-down', 0xebfc),
    arrowCircleLeft: register('arrow-circle-left', 0xebfd),
    arrowCircleRight: register('arrow-circle-right', 0xebfe),
    arrowCircleUp: register('arrow-circle-up', 0xebff),
    layoutSidebarRightOff: register('layout-sidebar-right-off', 0xec00),
    layoutPanelOff: register('layout-panel-off', 0xec01),
    layoutSidebarLeftOff: register('layout-sidebar-left-off', 0xec02),
    blank: register('blank', 0xec03),
    heartFilled: register('heart-filled', 0xec04),
    map: register('map', 0xec05),
    mapHorizontal: register('map-horizontal', 0xec05),
    foldHorizontal: register('fold-horizontal', 0xec05),
    mapFilled: register('map-filled', 0xec06),
    mapHorizontalFilled: register('map-horizontal-filled', 0xec06),
    foldHorizontalFilled: register('fold-horizontal-filled', 0xec06),
    circleSmall: register('circle-small', 0xec07),
    bellSlash: register('bell-slash', 0xec08),
    bellSlashDot: register('bell-slash-dot', 0xec09),
    commentUnresolved: register('comment-unresolved', 0xec0a),
    gitPullRequestGoToChanges: register('git-pull-request-go-to-changes', 0xec0b),
    gitPullRequestNewChanges: register('git-pull-request-new-changes', 0xec0c),
    searchFuzzy: register('search-fuzzy', 0xec0d),
    commentDraft: register('comment-draft', 0xec0e),
    send: register('send', 0xec0f),
    sparkle: register('sparkle', 0xec10),
    insert: register('insert', 0xec11),
    mic: register('mic', 0xec12),
    thumbsdownFilled: register('thumbsdown-filled', 0xec13),
    thumbsupFilled: register('thumbsup-filled', 0xec14),
    coffee: register('coffee', 0xec15),
    snake: register('snake', 0xec16),
    game: register('game', 0xec17),
    vr: register('vr', 0xec18),
    chip: register('chip', 0xec19),
    piano: register('piano', 0xec1a),
    music: register('music', 0xec1b),
    micFilled: register('mic-filled', 0xec1c),
    repoFetch: register('repo-fetch', 0xec1d),
    copilot: register('copilot', 0xec1e),
    lightbulbSparkle: register('lightbulb-sparkle', 0xec1f),
    robot: register('robot', 0xec20),
    sparkleFilled: register('sparkle-filled', 0xec21),
    diffSingle: register('diff-single', 0xec22),
    diffMultiple: register('diff-multiple', 0xec23),
    surroundWith: register('surround-with', 0xec24),
    share: register('share', 0xec25),
    gitStash: register('git-stash', 0xec26),
    gitStashApply: register('git-stash-apply', 0xec27),
    gitStashPop: register('git-stash-pop', 0xec28),
    vscode: register('vscode', 0xec29),
    vscodeInsiders: register('vscode-insiders', 0xec2a),
    codeOss: register('code-oss', 0xec2b),
    runCoverage: register('run-coverage', 0xec2c),
    runAllCoverage: register('run-all-coverage', 0xec2d),
    coverage: register('coverage', 0xec2e),
    githubProject: register('github-project', 0xec2f),
    mapVertical: register('map-vertical', 0xec30),
    foldVertical: register('fold-vertical', 0xec30),
    mapVerticalFilled: register('map-vertical-filled', 0xec31),
    foldVerticalFilled: register('fold-vertical-filled', 0xec31),
    goToSearch: register('go-to-search', 0xec32),
    percentage: register('percentage', 0xec33),
    sortPercentage: register('sort-percentage', 0xec33),
    attach: register('attach', 0xec34),
    goToEditingSession: register('go-to-editing-session', 0xec35),
    editSession: register('edit-session', 0xec36),
    codeReview: register('code-review', 0xec37),
    copilotWarning: register('copilot-warning', 0xec38),
    python: register('python', 0xec39),
    copilotLarge: register('copilot-large', 0xec3a),
    copilotWarningLarge: register('copilot-warning-large', 0xec3b),
    keyboardTab: register('keyboard-tab', 0xec3c),
    copilotBlocked: register('copilot-blocked', 0xec3d),
    copilotNotConnected: register('copilot-not-connected', 0xec3e),
    flag: register('flag', 0xec3f),
    lightbulbEmpty: register('lightbulb-empty', 0xec40),
    symbolMethodArrow: register('symbol-method-arrow', 0xec41),
    copilotUnavailable: register('copilot-unavailable', 0xec42),
    repoPinned: register('repo-pinned', 0xec43),
    keyboardTabAbove: register('keyboard-tab-above', 0xec44),
    keyboardTabBelow: register('keyboard-tab-below', 0xec45),
    gitPullRequestDone: register('git-pull-request-done', 0xec46),
    mcp: register('mcp', 0xec47),
    extensionsLarge: register('extensions-large', 0xec48),
    layoutPanelDock: register('layout-panel-dock', 0xec49),
    layoutSidebarLeftDock: register('layout-sidebar-left-dock', 0xec4a),
    layoutSidebarRightDock: register('layout-sidebar-right-dock', 0xec4b),
    copilotInProgress: register('copilot-in-progress', 0xec4c),
    copilotError: register('copilot-error', 0xec4d),
    copilotSuccess: register('copilot-success', 0xec4e),
    chatSparkle: register('chat-sparkle', 0xec4f),
    searchSparkle: register('search-sparkle', 0xec50),
    editSparkle: register('edit-sparkle', 0xec51),
    copilotSnooze: register('copilot-snooze', 0xec52),
};



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/codicons.js




function getAllCodicons() {
    return ( Object.values(Codicon));
}
const codiconsDerived = {
    dialogError: register('dialog-error', 'error'),
    dialogWarning: register('dialog-warning', 'warning'),
    dialogInfo: register('dialog-info', 'info'),
    dialogClose: register('dialog-close', 'close'),
    treeItemExpanded: register('tree-item-expanded', 'chevron-down'),
    treeFilterOnTypeOn: register('tree-filter-on-type-on', 'list-filter'),
    treeFilterOnTypeOff: register('tree-filter-on-type-off', 'list-selection'),
    treeFilterClear: register('tree-filter-clear', 'close'),
    treeItemLoading: register('tree-item-loading', 'loading'),
    menuSelection: register('menu-selection', 'check'),
    menuSubmenu: register('menu-submenu', 'chevron-right'),
    menuBarMore: register('menubar-more', 'more'),
    scrollbarButtonLeft: register('scrollbar-button-left', 'triangle-left'),
    scrollbarButtonRight: register('scrollbar-button-right', 'triangle-right'),
    scrollbarButtonUp: register('scrollbar-button-up', 'triangle-up'),
    scrollbarButtonDown: register('scrollbar-button-down', 'triangle-down'),
    toolBarMore: register('toolbar-more', 'more'),
    quickInputBack: register('quick-input-back', 'arrow-left'),
    dropDownButton: register('drop-down-button', 0xeab4),
    symbolCustomColor: register('symbol-customcolor', 0xeb5c),
    exportIcon: register('export', 0xebac),
    workspaceUnspecified: register('workspace-unspecified', 0xebc3),
    newLine: register('newline', 0xebea),
    thumbsDownFilled: register('thumbsdown-filled', 0xec13),
    thumbsUpFilled: register('thumbsup-filled', 0xec14),
    gitFetch: register('git-fetch', 0xec1d),
    lightbulbSparkleAutofix: register('lightbulb-sparkle-autofix', 0xec1f),
    debugBreakpointPending: register('debug-breakpoint-pending', 0xebd9),
};
const Codicon = {
    ...codiconsLibrary,
    ...codiconsDerived
};



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/tokenizationRegistry.js





class TokenizationRegistry {
    constructor() {
        this._tokenizationSupports = ( new Map());
        this._factories = ( new Map());
        this._onDidChange = ( new Emitter());
        this.onDidChange = this._onDidChange.event;
        this._colorMap = null;
    }
    handleChange(languageIds) {
        this._onDidChange.fire({
            changedLanguages: languageIds,
            changedColorMap: false
        });
    }
    register(languageId, support) {
        this._tokenizationSupports.set(languageId, support);
        this.handleChange([languageId]);
        return lifecycle_toDisposable(() => {
            if (this._tokenizationSupports.get(languageId) !== support) {
                return;
            }
            this._tokenizationSupports.delete(languageId);
            this.handleChange([languageId]);
        });
    }
    get(languageId) {
        return this._tokenizationSupports.get(languageId) || null;
    }
    registerFactory(languageId, factory) {
        this._factories.get(languageId)?.dispose();
        const myData = ( new TokenizationSupportFactoryData(this, languageId, factory));
        this._factories.set(languageId, myData);
        return lifecycle_toDisposable(() => {
            const v = this._factories.get(languageId);
            if (!v || v !== myData) {
                return;
            }
            this._factories.delete(languageId);
            v.dispose();
        });
    }
    async getOrCreate(languageId) {
        const tokenizationSupport = this.get(languageId);
        if (tokenizationSupport) {
            return tokenizationSupport;
        }
        const factory = this._factories.get(languageId);
        if (!factory || factory.isResolved) {
            return null;
        }
        await factory.resolve();
        return this.get(languageId);
    }
    isResolved(languageId) {
        const tokenizationSupport = this.get(languageId);
        if (tokenizationSupport) {
            return true;
        }
        const factory = this._factories.get(languageId);
        if (!factory || factory.isResolved) {
            return true;
        }
        return false;
    }
    setColorMap(colorMap) {
        this._colorMap = colorMap;
        this._onDidChange.fire({
            changedLanguages: Array.from(( this._tokenizationSupports.keys())),
            changedColorMap: true
        });
    }
    getColorMap() {
        return this._colorMap;
    }
    getDefaultBackground() {
        if (this._colorMap && this._colorMap.length > ColorId.DefaultBackground) {
            return this._colorMap[ColorId.DefaultBackground];
        }
        return null;
    }
}
class TokenizationSupportFactoryData extends lifecycle_Disposable {
    get isResolved() {
        return this._isResolved;
    }
    constructor(_registry, _languageId, _factory) {
        super();
        this._registry = _registry;
        this._languageId = _languageId;
        this._factory = _factory;
        this._isDisposed = false;
        this._resolvePromise = null;
        this._isResolved = false;
    }
    dispose() {
        this._isDisposed = true;
        super.dispose();
    }
    async resolve() {
        if (!this._resolvePromise) {
            this._resolvePromise = this._create();
        }
        return this._resolvePromise;
    }
    async _create() {
        const value = await this._factory.tokenizationSupport;
        this._isResolved = true;
        if (value && !this._isDisposed) {
            this._register(this._registry.register(this._languageId, value));
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/languages.js








class languages_Token {
    constructor(offset, type, language) {
        this.offset = offset;
        this.type = type;
        this.language = language;
        this._tokenBrand = undefined;
    }
    toString() {
        return '(' + this.offset + ', ' + this.type + ')';
    }
}
class languages_TokenizationResult {
    constructor(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._tokenizationResultBrand = undefined;
    }
}
class EncodedTokenizationResult {
    constructor(
    tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._encodedTokenizationResultBrand = undefined;
    }
}
var HoverVerbosityAction;
(function (HoverVerbosityAction) {
    HoverVerbosityAction[HoverVerbosityAction["Increase"] = 0] = "Increase";
    HoverVerbosityAction[HoverVerbosityAction["Decrease"] = 1] = "Decrease";
})(HoverVerbosityAction || (HoverVerbosityAction = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["User"] = 25] = "User";
    CompletionItemKind[CompletionItemKind["Issue"] = 26] = "Issue";
    CompletionItemKind[CompletionItemKind["Tool"] = 27] = "Tool";
    CompletionItemKind[CompletionItemKind["Snippet"] = 28] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));
var CompletionItemKinds;
(function (CompletionItemKinds) {
    const byKind = ( new Map());
    byKind.set(CompletionItemKind.Method, Codicon.symbolMethod);
    byKind.set(CompletionItemKind.Function, Codicon.symbolFunction);
    byKind.set(CompletionItemKind.Constructor, Codicon.symbolConstructor);
    byKind.set(CompletionItemKind.Field, Codicon.symbolField);
    byKind.set(CompletionItemKind.Variable, Codicon.symbolVariable);
    byKind.set(CompletionItemKind.Class, Codicon.symbolClass);
    byKind.set(CompletionItemKind.Struct, Codicon.symbolStruct);
    byKind.set(CompletionItemKind.Interface, Codicon.symbolInterface);
    byKind.set(CompletionItemKind.Module, Codicon.symbolModule);
    byKind.set(CompletionItemKind.Property, Codicon.symbolProperty);
    byKind.set(CompletionItemKind.Event, Codicon.symbolEvent);
    byKind.set(CompletionItemKind.Operator, Codicon.symbolOperator);
    byKind.set(CompletionItemKind.Unit, Codicon.symbolUnit);
    byKind.set(CompletionItemKind.Value, Codicon.symbolValue);
    byKind.set(CompletionItemKind.Enum, Codicon.symbolEnum);
    byKind.set(CompletionItemKind.Constant, Codicon.symbolConstant);
    byKind.set(CompletionItemKind.Enum, Codicon.symbolEnum);
    byKind.set(CompletionItemKind.EnumMember, Codicon.symbolEnumMember);
    byKind.set(CompletionItemKind.Keyword, Codicon.symbolKeyword);
    byKind.set(CompletionItemKind.Snippet, Codicon.symbolSnippet);
    byKind.set(CompletionItemKind.Text, Codicon.symbolText);
    byKind.set(CompletionItemKind.Color, Codicon.symbolColor);
    byKind.set(CompletionItemKind.File, Codicon.symbolFile);
    byKind.set(CompletionItemKind.Reference, Codicon.symbolReference);
    byKind.set(CompletionItemKind.Customcolor, Codicon.symbolCustomColor);
    byKind.set(CompletionItemKind.Folder, Codicon.symbolFolder);
    byKind.set(CompletionItemKind.TypeParameter, Codicon.symbolTypeParameter);
    byKind.set(CompletionItemKind.User, Codicon.account);
    byKind.set(CompletionItemKind.Issue, Codicon.issues);
    byKind.set(CompletionItemKind.Tool, Codicon.tools);
    function toIcon(kind) {
        let codicon = byKind.get(kind);
        if (!codicon) {
            console.info('No codicon found for CompletionItemKind ' + kind);
            codicon = Codicon.symbolProperty;
        }
        return codicon;
    }
    CompletionItemKinds.toIcon = toIcon;
    function toLabel(kind) {
        switch (kind) {
            case CompletionItemKind.Method: return nls_localize(776, 'Method');
            case CompletionItemKind.Function: return nls_localize(777, 'Function');
            case CompletionItemKind.Constructor: return nls_localize(778, 'Constructor');
            case CompletionItemKind.Field: return nls_localize(779, 'Field');
            case CompletionItemKind.Variable: return nls_localize(780, 'Variable');
            case CompletionItemKind.Class: return nls_localize(781, 'Class');
            case CompletionItemKind.Struct: return nls_localize(782, 'Struct');
            case CompletionItemKind.Interface: return nls_localize(783, 'Interface');
            case CompletionItemKind.Module: return nls_localize(784, 'Module');
            case CompletionItemKind.Property: return nls_localize(785, 'Property');
            case CompletionItemKind.Event: return nls_localize(786, 'Event');
            case CompletionItemKind.Operator: return nls_localize(787, 'Operator');
            case CompletionItemKind.Unit: return nls_localize(788, 'Unit');
            case CompletionItemKind.Value: return nls_localize(789, 'Value');
            case CompletionItemKind.Constant: return nls_localize(790, 'Constant');
            case CompletionItemKind.Enum: return nls_localize(791, 'Enum');
            case CompletionItemKind.EnumMember: return nls_localize(792, 'Enum Member');
            case CompletionItemKind.Keyword: return nls_localize(793, 'Keyword');
            case CompletionItemKind.Text: return nls_localize(794, 'Text');
            case CompletionItemKind.Color: return nls_localize(795, 'Color');
            case CompletionItemKind.File: return nls_localize(796, 'File');
            case CompletionItemKind.Reference: return nls_localize(797, 'Reference');
            case CompletionItemKind.Customcolor: return nls_localize(798, 'Custom Color');
            case CompletionItemKind.Folder: return nls_localize(799, 'Folder');
            case CompletionItemKind.TypeParameter: return nls_localize(800, 'Type Parameter');
            case CompletionItemKind.User: return nls_localize(801, 'User');
            case CompletionItemKind.Issue: return nls_localize(802, 'Issue');
            case CompletionItemKind.Tool: return nls_localize(803, 'Tool');
            case CompletionItemKind.Snippet: return nls_localize(804, 'Snippet');
            default: return '';
        }
    }
    CompletionItemKinds.toLabel = toLabel;
    const data = ( new Map());
    data.set('method', CompletionItemKind.Method);
    data.set('function', CompletionItemKind.Function);
    data.set('constructor', CompletionItemKind.Constructor);
    data.set('field', CompletionItemKind.Field);
    data.set('variable', CompletionItemKind.Variable);
    data.set('class', CompletionItemKind.Class);
    data.set('struct', CompletionItemKind.Struct);
    data.set('interface', CompletionItemKind.Interface);
    data.set('module', CompletionItemKind.Module);
    data.set('property', CompletionItemKind.Property);
    data.set('event', CompletionItemKind.Event);
    data.set('operator', CompletionItemKind.Operator);
    data.set('unit', CompletionItemKind.Unit);
    data.set('value', CompletionItemKind.Value);
    data.set('constant', CompletionItemKind.Constant);
    data.set('enum', CompletionItemKind.Enum);
    data.set('enum-member', CompletionItemKind.EnumMember);
    data.set('enumMember', CompletionItemKind.EnumMember);
    data.set('keyword', CompletionItemKind.Keyword);
    data.set('snippet', CompletionItemKind.Snippet);
    data.set('text', CompletionItemKind.Text);
    data.set('color', CompletionItemKind.Color);
    data.set('file', CompletionItemKind.File);
    data.set('reference', CompletionItemKind.Reference);
    data.set('customcolor', CompletionItemKind.Customcolor);
    data.set('folder', CompletionItemKind.Folder);
    data.set('type-parameter', CompletionItemKind.TypeParameter);
    data.set('typeParameter', CompletionItemKind.TypeParameter);
    data.set('account', CompletionItemKind.User);
    data.set('issue', CompletionItemKind.Issue);
    data.set('tool', CompletionItemKind.Tool);
    function fromString(value, strict) {
        let res = data.get(value);
        if (typeof res === 'undefined' && !strict) {
            res = CompletionItemKind.Property;
        }
        return res;
    }
    CompletionItemKinds.fromString = fromString;
})(CompletionItemKinds || (CompletionItemKinds = {}));
var CompletionItemTag;
(function (CompletionItemTag) {
    CompletionItemTag[CompletionItemTag["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["None"] = 0] = "None";
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
var PartialAcceptTriggerKind;
(function (PartialAcceptTriggerKind) {
    PartialAcceptTriggerKind[PartialAcceptTriggerKind["Word"] = 0] = "Word";
    PartialAcceptTriggerKind[PartialAcceptTriggerKind["Line"] = 1] = "Line";
    PartialAcceptTriggerKind[PartialAcceptTriggerKind["Suggest"] = 2] = "Suggest";
})(PartialAcceptTriggerKind || (PartialAcceptTriggerKind = {}));
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
var InlineCompletionTriggerKind;
(function (InlineCompletionTriggerKind) {
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Automatic"] = 0] = "Automatic";
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
class SelectedSuggestionInfo {
    constructor(range, text, completionKind, isSnippetText) {
        this.range = range;
        this.text = text;
        this.completionKind = completionKind;
        this.isSnippetText = isSnippetText;
    }
    equals(other) {
        return Range.lift(this.range).equalsRange(other.range)
            && this.text === other.text
            && this.completionKind === other.completionKind
            && this.isSnippetText === other.isSnippetText;
    }
}
var InlineCompletionEndOfLifeReasonKind;
(function (InlineCompletionEndOfLifeReasonKind) {
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Accepted"] = 0] = "Accepted";
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Rejected"] = 1] = "Rejected";
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Ignored"] = 2] = "Ignored";
})(InlineCompletionEndOfLifeReasonKind || (InlineCompletionEndOfLifeReasonKind = {}));
var CodeActionTriggerType;
(function (CodeActionTriggerType) {
    CodeActionTriggerType[CodeActionTriggerType["Invoke"] = 1] = "Invoke";
    CodeActionTriggerType[CodeActionTriggerType["Auto"] = 2] = "Auto";
})(CodeActionTriggerType || (CodeActionTriggerType = {}));
var DocumentPasteTriggerKind;
(function (DocumentPasteTriggerKind) {
    DocumentPasteTriggerKind[DocumentPasteTriggerKind["Automatic"] = 0] = "Automatic";
    DocumentPasteTriggerKind[DocumentPasteTriggerKind["PasteAs"] = 1] = "PasteAs";
})(DocumentPasteTriggerKind || (DocumentPasteTriggerKind = {}));
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
function isLocationLink(thing) {
    return thing
        && URI.isUri(thing.uri)
        && Range.isIRange(thing.range)
        && (Range.isIRange(thing.originSelectionRange) || Range.isIRange(thing.targetSelectionRange));
}
function isLocation(thing) {
    return thing
        && URI.isUri(thing.uri)
        && Range.isIRange(thing.range);
}
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
const symbolKindNames = {
    [SymbolKind.Array]: ( nls_localize(805, "array")),
    [SymbolKind.Boolean]: ( nls_localize(806, "boolean")),
    [SymbolKind.Class]: ( nls_localize(807, "class")),
    [SymbolKind.Constant]: ( nls_localize(808, "constant")),
    [SymbolKind.Constructor]: ( nls_localize(809, "constructor")),
    [SymbolKind.Enum]: ( nls_localize(810, "enumeration")),
    [SymbolKind.EnumMember]: ( nls_localize(811, "enumeration member")),
    [SymbolKind.Event]: ( nls_localize(812, "event")),
    [SymbolKind.Field]: ( nls_localize(813, "field")),
    [SymbolKind.File]: ( nls_localize(814, "file")),
    [SymbolKind.Function]: ( nls_localize(815, "function")),
    [SymbolKind.Interface]: ( nls_localize(816, "interface")),
    [SymbolKind.Key]: ( nls_localize(817, "key")),
    [SymbolKind.Method]: ( nls_localize(818, "method")),
    [SymbolKind.Module]: ( nls_localize(819, "module")),
    [SymbolKind.Namespace]: ( nls_localize(820, "namespace")),
    [SymbolKind.Null]: ( nls_localize(821, "null")),
    [SymbolKind.Number]: ( nls_localize(822, "number")),
    [SymbolKind.Object]: ( nls_localize(823, "object")),
    [SymbolKind.Operator]: ( nls_localize(824, "operator")),
    [SymbolKind.Package]: ( nls_localize(825, "package")),
    [SymbolKind.Property]: ( nls_localize(826, "property")),
    [SymbolKind.String]: ( nls_localize(827, "string")),
    [SymbolKind.Struct]: ( nls_localize(828, "struct")),
    [SymbolKind.TypeParameter]: ( nls_localize(829, "type parameter")),
    [SymbolKind.Variable]: ( nls_localize(830, "variable")),
};
function getAriaLabelForSymbol(symbolName, kind) {
    return localize(831, '{0} ({1})', symbolName, symbolKindNames[kind]);
}
var SymbolTag;
(function (SymbolTag) {
    SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
var SymbolKinds;
(function (SymbolKinds) {
    const byKind = ( new Map());
    byKind.set(SymbolKind.File, Codicon.symbolFile);
    byKind.set(SymbolKind.Module, Codicon.symbolModule);
    byKind.set(SymbolKind.Namespace, Codicon.symbolNamespace);
    byKind.set(SymbolKind.Package, Codicon.symbolPackage);
    byKind.set(SymbolKind.Class, Codicon.symbolClass);
    byKind.set(SymbolKind.Method, Codicon.symbolMethod);
    byKind.set(SymbolKind.Property, Codicon.symbolProperty);
    byKind.set(SymbolKind.Field, Codicon.symbolField);
    byKind.set(SymbolKind.Constructor, Codicon.symbolConstructor);
    byKind.set(SymbolKind.Enum, Codicon.symbolEnum);
    byKind.set(SymbolKind.Interface, Codicon.symbolInterface);
    byKind.set(SymbolKind.Function, Codicon.symbolFunction);
    byKind.set(SymbolKind.Variable, Codicon.symbolVariable);
    byKind.set(SymbolKind.Constant, Codicon.symbolConstant);
    byKind.set(SymbolKind.String, Codicon.symbolString);
    byKind.set(SymbolKind.Number, Codicon.symbolNumber);
    byKind.set(SymbolKind.Boolean, Codicon.symbolBoolean);
    byKind.set(SymbolKind.Array, Codicon.symbolArray);
    byKind.set(SymbolKind.Object, Codicon.symbolObject);
    byKind.set(SymbolKind.Key, Codicon.symbolKey);
    byKind.set(SymbolKind.Null, Codicon.symbolNull);
    byKind.set(SymbolKind.EnumMember, Codicon.symbolEnumMember);
    byKind.set(SymbolKind.Struct, Codicon.symbolStruct);
    byKind.set(SymbolKind.Event, Codicon.symbolEvent);
    byKind.set(SymbolKind.Operator, Codicon.symbolOperator);
    byKind.set(SymbolKind.TypeParameter, Codicon.symbolTypeParameter);
    function toIcon(kind) {
        let icon = byKind.get(kind);
        if (!icon) {
            console.info('No codicon found for SymbolKind ' + kind);
            icon = Codicon.symbolProperty;
        }
        return icon;
    }
    SymbolKinds.toIcon = toIcon;
    const byCompletionKind = ( new Map());
    byCompletionKind.set(SymbolKind.File, CompletionItemKind.File);
    byCompletionKind.set(SymbolKind.Module, CompletionItemKind.Module);
    byCompletionKind.set(SymbolKind.Namespace, CompletionItemKind.Module);
    byCompletionKind.set(SymbolKind.Package, CompletionItemKind.Module);
    byCompletionKind.set(SymbolKind.Class, CompletionItemKind.Class);
    byCompletionKind.set(SymbolKind.Method, CompletionItemKind.Method);
    byCompletionKind.set(SymbolKind.Property, CompletionItemKind.Property);
    byCompletionKind.set(SymbolKind.Field, CompletionItemKind.Field);
    byCompletionKind.set(SymbolKind.Constructor, CompletionItemKind.Constructor);
    byCompletionKind.set(SymbolKind.Enum, CompletionItemKind.Enum);
    byCompletionKind.set(SymbolKind.Interface, CompletionItemKind.Interface);
    byCompletionKind.set(SymbolKind.Function, CompletionItemKind.Function);
    byCompletionKind.set(SymbolKind.Variable, CompletionItemKind.Variable);
    byCompletionKind.set(SymbolKind.Constant, CompletionItemKind.Constant);
    byCompletionKind.set(SymbolKind.String, CompletionItemKind.Text);
    byCompletionKind.set(SymbolKind.Number, CompletionItemKind.Value);
    byCompletionKind.set(SymbolKind.Boolean, CompletionItemKind.Value);
    byCompletionKind.set(SymbolKind.Array, CompletionItemKind.Value);
    byCompletionKind.set(SymbolKind.Object, CompletionItemKind.Value);
    byCompletionKind.set(SymbolKind.Key, CompletionItemKind.Keyword);
    byCompletionKind.set(SymbolKind.Null, CompletionItemKind.Value);
    byCompletionKind.set(SymbolKind.EnumMember, CompletionItemKind.EnumMember);
    byCompletionKind.set(SymbolKind.Struct, CompletionItemKind.Struct);
    byCompletionKind.set(SymbolKind.Event, CompletionItemKind.Event);
    byCompletionKind.set(SymbolKind.Operator, CompletionItemKind.Operator);
    byCompletionKind.set(SymbolKind.TypeParameter, CompletionItemKind.TypeParameter);
    function toCompletionKind(kind) {
        let completionKind = byCompletionKind.get(kind);
        if (completionKind === undefined) {
            console.info('No completion kind found for SymbolKind ' + kind);
            completionKind = CompletionItemKind.File;
        }
        return completionKind;
    }
    SymbolKinds.toCompletionKind = toCompletionKind;
})(SymbolKinds || (SymbolKinds = {}));
class TextEdit {
    static asEditOperation(edit) {
        const range = Range.lift(edit.range);
        return range.isEmpty()
            ? EditOperation.insert(range.getStartPosition(), edit.text)
            : EditOperation.replace(range, edit.text);
    }
    static isTextEdit(thing) {
        const possibleTextEdit = thing;
        return typeof possibleTextEdit.text === 'string' && Range.isIRange(possibleTextEdit.range);
    }
}
class FoldingRangeKind {
    static { this.Comment = ( new FoldingRangeKind('comment')); }
    static { this.Imports = ( new FoldingRangeKind('imports')); }
    static { this.Region = ( new FoldingRangeKind('region')); }
    static fromValue(value) {
        switch (value) {
            case 'comment': return FoldingRangeKind.Comment;
            case 'imports': return FoldingRangeKind.Imports;
            case 'region': return FoldingRangeKind.Region;
        }
        return ( new FoldingRangeKind(value));
    }
    constructor(value) {
        this.value = value;
    }
}
var NewSymbolNameTag;
(function (NewSymbolNameTag) {
    NewSymbolNameTag[NewSymbolNameTag["AIGenerated"] = 1] = "AIGenerated";
})(NewSymbolNameTag || (NewSymbolNameTag = {}));
var NewSymbolNameTriggerKind;
(function (NewSymbolNameTriggerKind) {
    NewSymbolNameTriggerKind[NewSymbolNameTriggerKind["Invoke"] = 0] = "Invoke";
    NewSymbolNameTriggerKind[NewSymbolNameTriggerKind["Automatic"] = 1] = "Automatic";
})(NewSymbolNameTriggerKind || (NewSymbolNameTriggerKind = {}));
var Command;
(function (Command) {
    function is(obj) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }
        return typeof obj.id === 'string' &&
            typeof obj.title === 'string';
    }
    Command.is = is;
})(Command || (Command = {}));
var CommentThreadCollapsibleState;
(function (CommentThreadCollapsibleState) {
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Collapsed"] = 0] = "Collapsed";
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Expanded"] = 1] = "Expanded";
})(CommentThreadCollapsibleState || (CommentThreadCollapsibleState = {}));
var CommentThreadState;
(function (CommentThreadState) {
    CommentThreadState[CommentThreadState["Unresolved"] = 0] = "Unresolved";
    CommentThreadState[CommentThreadState["Resolved"] = 1] = "Resolved";
})(CommentThreadState || (CommentThreadState = {}));
var CommentThreadApplicability;
(function (CommentThreadApplicability) {
    CommentThreadApplicability[CommentThreadApplicability["Current"] = 0] = "Current";
    CommentThreadApplicability[CommentThreadApplicability["Outdated"] = 1] = "Outdated";
})(CommentThreadApplicability || (CommentThreadApplicability = {}));
var CommentMode;
(function (CommentMode) {
    CommentMode[CommentMode["Editing"] = 0] = "Editing";
    CommentMode[CommentMode["Preview"] = 1] = "Preview";
})(CommentMode || (CommentMode = {}));
var CommentState;
(function (CommentState) {
    CommentState[CommentState["Published"] = 0] = "Published";
    CommentState[CommentState["Draft"] = 1] = "Draft";
})(CommentState || (CommentState = {}));
var InlayHintKind;
(function (InlayHintKind) {
    InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
    InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {}));
class LazyTokenizationSupport {
    constructor(createSupport) {
        this.createSupport = createSupport;
        this._tokenizationSupport = null;
    }
    dispose() {
        if (this._tokenizationSupport) {
            this._tokenizationSupport.then((support) => {
                if (support) {
                    support.dispose();
                }
            });
        }
    }
    get tokenizationSupport() {
        if (!this._tokenizationSupport) {
            this._tokenizationSupport = this.createSupport();
        }
        return this._tokenizationSupport;
    }
}
const languages_TokenizationRegistry = ( new TokenizationRegistry());
var ExternalUriOpenerPriority;
(function (ExternalUriOpenerPriority) {
    ExternalUriOpenerPriority[ExternalUriOpenerPriority["None"] = 0] = "None";
    ExternalUriOpenerPriority[ExternalUriOpenerPriority["Option"] = 1] = "Option";
    ExternalUriOpenerPriority[ExternalUriOpenerPriority["Default"] = 2] = "Default";
    ExternalUriOpenerPriority[ExternalUriOpenerPriority["Preferred"] = 3] = "Preferred";
})(ExternalUriOpenerPriority || (ExternalUriOpenerPriority = {}));



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/languages/nullTokenize.js




const NullState = new class {
    clone() {
        return this;
    }
    equals(other) {
        return (this === other);
    }
};
function nullTokenize(languageId, state) {
    return ( new TokenizationResult([( new Token(0, '', languageId))], state));
}
function nullTokenizeEncoded(languageId, state) {
    const tokens = ( new Uint32Array(2));
    tokens[0] = 0;
    tokens[1] = ((languageId << MetadataConsts.LANGUAGEID_OFFSET)
        | (StandardTokenType.Other << MetadataConsts.TOKEN_TYPE_OFFSET)
        | (FontStyle.None << MetadataConsts.FONT_STYLE_OFFSET)
        | (ColorId.DefaultForeground << MetadataConsts.FOREGROUND_OFFSET)
        | (ColorId.DefaultBackground << MetadataConsts.BACKGROUND_OFFSET)) >>> 0;
    return ( new EncodedTokenizationResult(tokens, state === null ? NullState : state));
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/model/fixedArray.js



class FixedArray {
    constructor(_default) {
        this._default = _default;
        this._store = [];
    }
    get(index) {
        if (index < this._store.length) {
            return this._store[index];
        }
        return this._default;
    }
    set(index, value) {
        while (index >= this._store.length) {
            this._store[this._store.length] = this._default;
        }
        this._store[index] = value;
    }
    replace(index, oldLength, newLength) {
        if (index >= this._store.length) {
            return;
        }
        if (oldLength === 0) {
            this.insert(index, newLength);
            return;
        }
        else if (newLength === 0) {
            this.delete(index, oldLength);
            return;
        }
        const before = this._store.slice(0, index);
        const after = this._store.slice(index + oldLength);
        const insertArr = arrayFill(newLength, this._default);
        this._store = before.concat(insertArr, after);
    }
    delete(deleteIndex, deleteCount) {
        if (deleteCount === 0 || deleteIndex >= this._store.length) {
            return;
        }
        this._store.splice(deleteIndex, deleteCount);
    }
    insert(insertIndex, insertCount) {
        if (insertCount === 0 || insertIndex >= this._store.length) {
            return;
        }
        const arr = [];
        for (let i = 0; i < insertCount; i++) {
            arr[i] = this._default;
        }
        this._store = arrays_arrayInsert(this._store, insertIndex, arr);
    }
}
function arrayFill(length, value) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/stream.js




function isReadableStream(obj) {
    const candidate = obj;
    if (!candidate) {
        return false;
    }
    return [candidate.on, candidate.pause, candidate.resume, candidate.destroy].every(fn => typeof fn === 'function');
}
function isReadableBufferedStream(obj) {
    const candidate = obj;
    if (!candidate) {
        return false;
    }
    return isReadableStream(candidate.stream) && Array.isArray(candidate.buffer) && typeof candidate.ended === 'boolean';
}
function stream_newWriteableStream(reducer, options) {
    return ( new WriteableStreamImpl(reducer, options));
}
class WriteableStreamImpl {
    constructor(reducer, options) {
        this.reducer = reducer;
        this.options = options;
        this.state = {
            flowing: false,
            ended: false,
            destroyed: false
        };
        this.buffer = {
            data: [],
            error: []
        };
        this.listeners = {
            data: [],
            error: [],
            end: []
        };
        this.pendingWritePromises = [];
    }
    pause() {
        if (this.state.destroyed) {
            return;
        }
        this.state.flowing = false;
    }
    resume() {
        if (this.state.destroyed) {
            return;
        }
        if (!this.state.flowing) {
            this.state.flowing = true;
            this.flowData();
            this.flowErrors();
            this.flowEnd();
        }
    }
    write(data) {
        if (this.state.destroyed) {
            return;
        }
        if (this.state.flowing) {
            this.emitData(data);
        }
        else {
            this.buffer.data.push(data);
            if (typeof this.options?.highWaterMark === 'number' && this.buffer.data.length > this.options.highWaterMark) {
                return ( new Promise(resolve => this.pendingWritePromises.push(resolve)));
            }
        }
    }
    error(error) {
        if (this.state.destroyed) {
            return;
        }
        if (this.state.flowing) {
            this.emitError(error);
        }
        else {
            this.buffer.error.push(error);
        }
    }
    end(result) {
        if (this.state.destroyed) {
            return;
        }
        if (typeof result !== 'undefined') {
            this.write(result);
        }
        if (this.state.flowing) {
            this.emitEnd();
            this.destroy();
        }
        else {
            this.state.ended = true;
        }
    }
    emitData(data) {
        this.listeners.data.slice(0).forEach(listener => listener(data));
    }
    emitError(error) {
        if (this.listeners.error.length === 0) {
            onUnexpectedError(error);
        }
        else {
            this.listeners.error.slice(0).forEach(listener => listener(error));
        }
    }
    emitEnd() {
        this.listeners.end.slice(0).forEach(listener => listener());
    }
    on(event, callback) {
        if (this.state.destroyed) {
            return;
        }
        switch (event) {
            case 'data':
                this.listeners.data.push(callback);
                this.resume();
                break;
            case 'end':
                this.listeners.end.push(callback);
                if (this.state.flowing && this.flowEnd()) {
                    this.destroy();
                }
                break;
            case 'error':
                this.listeners.error.push(callback);
                if (this.state.flowing) {
                    this.flowErrors();
                }
                break;
        }
    }
    removeListener(event, callback) {
        if (this.state.destroyed) {
            return;
        }
        let listeners = undefined;
        switch (event) {
            case 'data':
                listeners = this.listeners.data;
                break;
            case 'end':
                listeners = this.listeners.end;
                break;
            case 'error':
                listeners = this.listeners.error;
                break;
        }
        if (listeners) {
            const index = listeners.indexOf(callback);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
    }
    flowData() {
        if (this.buffer.data.length === 0) {
            return;
        }
        if (typeof this.reducer === 'function') {
            const fullDataBuffer = this.reducer(this.buffer.data);
            this.emitData(fullDataBuffer);
        }
        else {
            for (const data of this.buffer.data) {
                this.emitData(data);
            }
        }
        this.buffer.data.length = 0;
        const pendingWritePromises = [...this.pendingWritePromises];
        this.pendingWritePromises.length = 0;
        pendingWritePromises.forEach(pendingWritePromise => pendingWritePromise());
    }
    flowErrors() {
        if (this.listeners.error.length > 0) {
            for (const error of this.buffer.error) {
                this.emitError(error);
            }
            this.buffer.error.length = 0;
        }
    }
    flowEnd() {
        if (this.state.ended) {
            this.emitEnd();
            return this.listeners.end.length > 0;
        }
        return false;
    }
    destroy() {
        if (!this.state.destroyed) {
            this.state.destroyed = true;
            this.state.ended = true;
            this.buffer.data.length = 0;
            this.buffer.error.length = 0;
            this.listeners.data.length = 0;
            this.listeners.error.length = 0;
            this.listeners.end.length = 0;
            this.pendingWritePromises.length = 0;
        }
    }
}
function stream_consumeReadable(readable, reducer) {
    const chunks = [];
    let chunk;
    while ((chunk = readable.read()) !== null) {
        chunks.push(chunk);
    }
    return reducer(chunks);
}
function peekReadable(readable, reducer, maxChunks) {
    const chunks = [];
    let chunk = undefined;
    while ((chunk = readable.read()) !== null && chunks.length < maxChunks) {
        chunks.push(chunk);
    }
    if (chunk === null && chunks.length > 0) {
        return reducer(chunks);
    }
    return {
        read: () => {
            if (chunks.length > 0) {
                return chunks.shift();
            }
            if (typeof chunk !== 'undefined') {
                const lastReadChunk = chunk;
                chunk = undefined;
                return lastReadChunk;
            }
            return readable.read();
        }
    };
}
function stream_consumeStream(stream, reducer) {
    return ( new Promise((resolve, reject) => {
        const chunks = [];
        listenStream(stream, {
            onData: chunk => {
                if (reducer) {
                    chunks.push(chunk);
                }
            },
            onError: error => {
                if (reducer) {
                    reject(error);
                }
                else {
                    resolve(undefined);
                }
            },
            onEnd: () => {
                if (reducer) {
                    resolve(reducer(chunks));
                }
                else {
                    resolve(undefined);
                }
            }
        });
    }));
}
function listenStream(stream, listener, token) {
    stream.on('error', error => {
        if (!token?.isCancellationRequested) {
            listener.onError(error);
        }
    });
    stream.on('end', () => {
        if (!token?.isCancellationRequested) {
            listener.onEnd();
        }
    });
    stream.on('data', data => {
        if (!token?.isCancellationRequested) {
            listener.onData(data);
        }
    });
}
function peekStream(stream, maxChunks) {
    return ( new Promise((resolve, reject) => {
        const streamListeners = ( new DisposableStore());
        const buffer = [];
        const dataListener = (chunk) => {
            buffer.push(chunk);
            if (buffer.length > maxChunks) {
                streamListeners.dispose();
                stream.pause();
                return resolve({ stream, buffer, ended: false });
            }
        };
        const errorListener = (error) => {
            streamListeners.dispose();
            return reject(error);
        };
        const endListener = () => {
            streamListeners.dispose();
            return resolve({ stream, buffer, ended: true });
        };
        streamListeners.add(toDisposable(() => stream.removeListener('error', errorListener)));
        stream.on('error', errorListener);
        streamListeners.add(toDisposable(() => stream.removeListener('end', endListener)));
        stream.on('end', endListener);
        streamListeners.add(toDisposable(() => stream.removeListener('data', dataListener)));
        stream.on('data', dataListener);
    }));
}
function stream_toStream(t, reducer) {
    const stream = stream_newWriteableStream(reducer);
    stream.end(t);
    return stream;
}
function emptyStream() {
    const stream = stream_newWriteableStream(() => { throw ( new Error('not supported')); });
    stream.end();
    return stream;
}
function stream_toReadable(t) {
    let consumed = false;
    return {
        read: () => {
            if (consumed) {
                return null;
            }
            consumed = true;
            return t;
        }
    };
}
function transform(stream, transformer, reducer) {
    const target = stream_newWriteableStream(reducer);
    listenStream(stream, {
        onData: data => target.write(transformer.data(data)),
        onError: error => target.error(transformer.error ? transformer.error(error) : error),
        onEnd: () => target.end()
    });
    return target;
}
function stream_prefixedReadable(prefix, readable, reducer) {
    let prefixHandled = false;
    return {
        read: () => {
            const chunk = readable.read();
            if (!prefixHandled) {
                prefixHandled = true;
                if (chunk !== null) {
                    return reducer([prefix, chunk]);
                }
                return prefix;
            }
            return chunk;
        }
    };
}
function stream_prefixedStream(prefix, stream, reducer) {
    let prefixHandled = false;
    const target = stream_newWriteableStream(reducer);
    listenStream(stream, {
        onData: data => {
            if (!prefixHandled) {
                prefixHandled = true;
                return target.write(reducer([prefix, data]));
            }
            return target.write(data);
        },
        onError: error => target.error(error),
        onEnd: () => {
            if (!prefixHandled) {
                prefixHandled = true;
                target.write(prefix);
            }
            target.end();
        }
    });
    return target;
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/buffer.js




const hasBuffer = (typeof Buffer !== 'undefined');
const indexOfTable = ( new lazy_Lazy(() => ( new Uint8Array(256))));
let textEncoder;
let textDecoder;
class VSBuffer {
    static alloc(byteLength) {
        if (hasBuffer) {
            return ( new VSBuffer(Buffer.allocUnsafe(byteLength)));
        }
        else {
            return ( new VSBuffer(( new Uint8Array(byteLength))));
        }
    }
    static wrap(actual) {
        if (hasBuffer && !(Buffer.isBuffer(actual))) {
            actual = Buffer.from(actual.buffer, actual.byteOffset, actual.byteLength);
        }
        return ( new VSBuffer(actual));
    }
    static fromString(source, options) {
        const dontUseNodeBuffer = options?.dontUseNodeBuffer || false;
        if (!dontUseNodeBuffer && hasBuffer) {
            return ( new VSBuffer(Buffer.from(source)));
        }
        else {
            if (!textEncoder) {
                textEncoder = ( new TextEncoder());
            }
            return ( new VSBuffer(textEncoder.encode(source)));
        }
    }
    static fromByteArray(source) {
        const result = VSBuffer.alloc(source.length);
        for (let i = 0, len = source.length; i < len; i++) {
            result.buffer[i] = source[i];
        }
        return result;
    }
    static concat(buffers, totalLength) {
        if (typeof totalLength === 'undefined') {
            totalLength = 0;
            for (let i = 0, len = buffers.length; i < len; i++) {
                totalLength += buffers[i].byteLength;
            }
        }
        const ret = VSBuffer.alloc(totalLength);
        let offset = 0;
        for (let i = 0, len = buffers.length; i < len; i++) {
            const element = buffers[i];
            ret.set(element, offset);
            offset += element.byteLength;
        }
        return ret;
    }
    static isNativeBuffer(buffer) {
        return hasBuffer && Buffer.isBuffer(buffer);
    }
    constructor(buffer) {
        this.buffer = buffer;
        this.byteLength = this.buffer.byteLength;
    }
    clone() {
        const result = VSBuffer.alloc(this.byteLength);
        result.set(this);
        return result;
    }
    toString() {
        if (hasBuffer) {
            return ( this.buffer.toString());
        }
        else {
            if (!textDecoder) {
                textDecoder = ( new TextDecoder());
            }
            return textDecoder.decode(this.buffer);
        }
    }
    slice(start, end) {
        return ( new VSBuffer(this.buffer.subarray(start, end)));
    }
    set(array, offset) {
        if (array instanceof VSBuffer) {
            this.buffer.set(array.buffer, offset);
        }
        else if (array instanceof Uint8Array) {
            this.buffer.set(array, offset);
        }
        else if (array instanceof ArrayBuffer) {
            this.buffer.set(( new Uint8Array(array)), offset);
        }
        else if (ArrayBuffer.isView(array)) {
            this.buffer.set(( new Uint8Array(array.buffer, array.byteOffset, array.byteLength)), offset);
        }
        else {
            throw ( new Error(`Unknown argument 'array'`));
        }
    }
    readUInt32BE(offset) {
        return readUInt32BE(this.buffer, offset);
    }
    writeUInt32BE(value, offset) {
        writeUInt32BE(this.buffer, value, offset);
    }
    readUInt32LE(offset) {
        return readUInt32LE(this.buffer, offset);
    }
    writeUInt32LE(value, offset) {
        writeUInt32LE(this.buffer, value, offset);
    }
    readUInt8(offset) {
        return readUInt8(this.buffer, offset);
    }
    writeUInt8(value, offset) {
        writeUInt8(this.buffer, value, offset);
    }
    indexOf(subarray, offset = 0) {
        return binaryIndexOf(this.buffer, subarray instanceof VSBuffer ? subarray.buffer : subarray, offset);
    }
    equals(other) {
        if (this === other) {
            return true;
        }
        if (this.byteLength !== other.byteLength) {
            return false;
        }
        return this.buffer.every((value, index) => value === other.buffer[index]);
    }
}
function binaryIndexOf(haystack, needle, offset = 0) {
    const needleLen = needle.byteLength;
    const haystackLen = haystack.byteLength;
    if (needleLen === 0) {
        return 0;
    }
    if (needleLen === 1) {
        return haystack.indexOf(needle[0]);
    }
    if (needleLen > haystackLen - offset) {
        return -1;
    }
    const table = indexOfTable.value;
    table.fill(needle.length);
    for (let i = 0; i < needle.length; i++) {
        table[needle[i]] = needle.length - i - 1;
    }
    let i = offset + needle.length - 1;
    let j = i;
    let result = -1;
    while (i < haystackLen) {
        if (haystack[i] === needle[j]) {
            if (j === 0) {
                result = i;
                break;
            }
            i--;
            j--;
        }
        else {
            i += Math.max(needle.length - j, table[haystack[i]]);
            j = needle.length - 1;
        }
    }
    return result;
}
function readUInt16LE(source, offset) {
    return (((source[offset + 0] << 0) >>> 0) |
        ((source[offset + 1] << 8) >>> 0));
}
function writeUInt16LE(destination, value, offset) {
    destination[offset + 0] = (value & 0b11111111);
    value = value >>> 8;
    destination[offset + 1] = (value & 0b11111111);
}
function readUInt32BE(source, offset) {
    return (source[offset] * 2 ** 24
        + source[offset + 1] * 2 ** 16
        + source[offset + 2] * 2 ** 8
        + source[offset + 3]);
}
function writeUInt32BE(destination, value, offset) {
    destination[offset + 3] = value;
    value = value >>> 8;
    destination[offset + 2] = value;
    value = value >>> 8;
    destination[offset + 1] = value;
    value = value >>> 8;
    destination[offset] = value;
}
function readUInt32LE(source, offset) {
    return (((source[offset + 0] << 0) >>> 0) |
        ((source[offset + 1] << 8) >>> 0) |
        ((source[offset + 2] << 16) >>> 0) |
        ((source[offset + 3] << 24) >>> 0));
}
function writeUInt32LE(destination, value, offset) {
    destination[offset + 0] = (value & 0b11111111);
    value = value >>> 8;
    destination[offset + 1] = (value & 0b11111111);
    value = value >>> 8;
    destination[offset + 2] = (value & 0b11111111);
    value = value >>> 8;
    destination[offset + 3] = (value & 0b11111111);
}
function readUInt8(source, offset) {
    return source[offset];
}
function writeUInt8(destination, value, offset) {
    destination[offset] = value;
}
function readableToBuffer(readable) {
    return consumeReadable(readable, chunks => VSBuffer.concat(chunks));
}
function bufferToReadable(buffer) {
    return toReadable(buffer);
}
function streamToBuffer(stream) {
    return consumeStream(stream, chunks => VSBuffer.concat(chunks));
}
async function bufferedStreamToBuffer(bufferedStream) {
    if (bufferedStream.ended) {
        return VSBuffer.concat(bufferedStream.buffer);
    }
    return VSBuffer.concat([
        ...bufferedStream.buffer,
        await streamToBuffer(bufferedStream.stream)
    ]);
}
function bufferToStream(buffer) {
    return toStream(buffer, chunks => VSBuffer.concat(chunks));
}
function newWriteableBufferStream(options) {
    return newWriteableStream(chunks => VSBuffer.concat(chunks), options);
}
function prefixedBufferReadable(prefix, readable) {
    return prefixedReadable(prefix, readable, chunks => VSBuffer.concat(chunks));
}
function prefixedBufferStream(prefix, stream) {
    return prefixedStream(prefix, stream, chunks => VSBuffer.concat(chunks));
}
function decodeBase64(encoded) {
    let building = 0;
    let remainder = 0;
    let bufi = 0;
    const buffer = ( new Uint8Array(Math.floor(encoded.length / 4 * 3)));
    const append = (value) => {
        switch (remainder) {
            case 3:
                buffer[bufi++] = building | value;
                remainder = 0;
                break;
            case 2:
                buffer[bufi++] = building | (value >>> 2);
                building = value << 6;
                remainder = 3;
                break;
            case 1:
                buffer[bufi++] = building | (value >>> 4);
                building = value << 4;
                remainder = 2;
                break;
            default:
                building = value << 2;
                remainder = 1;
        }
    };
    for (let i = 0; i < encoded.length; i++) {
        const code = encoded.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            append(code - 65);
        }
        else if (code >= 97 && code <= 122) {
            append(code - 97 + 26);
        }
        else if (code >= 48 && code <= 57) {
            append(code - 48 + 52);
        }
        else if (code === 43 || code === 45) {
            append(62);
        }
        else if (code === 47 || code === 95) {
            append(63);
        }
        else if (code === 61) {
            break;
        }
        else {
            throw ( new SyntaxError(`Unexpected base64 character ${encoded[i]}`));
        }
    }
    const unpadded = bufi;
    while (remainder > 0) {
        append(0);
    }
    return VSBuffer.wrap(buffer).slice(0, unpadded);
}
const base64Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const base64UrlSafeAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
function encodeBase64({ buffer }, padded = true, urlSafe = false) {
    const dictionary = urlSafe ? base64UrlSafeAlphabet : base64Alphabet;
    let output = '';
    const remainder = buffer.byteLength % 3;
    let i = 0;
    for (; i < buffer.byteLength - remainder; i += 3) {
        const a = buffer[i + 0];
        const b = buffer[i + 1];
        const c = buffer[i + 2];
        output += dictionary[a >>> 2];
        output += dictionary[(a << 4 | b >>> 4) & 0b111111];
        output += dictionary[(b << 2 | c >>> 6) & 0b111111];
        output += dictionary[c & 0b111111];
    }
    if (remainder === 1) {
        const a = buffer[i + 0];
        output += dictionary[a >>> 2];
        output += dictionary[(a << 4) & 0b111111];
        if (padded) {
            output += '==';
        }
    }
    else if (remainder === 2) {
        const a = buffer[i + 0];
        const b = buffer[i + 1];
        output += dictionary[a >>> 2];
        output += dictionary[(a << 4 | b >>> 4) & 0b111111];
        output += dictionary[(b << 2) & 0b111111];
        if (padded) {
            output += '=';
        }
    }
    return output;
}
const hexChars = '0123456789abcdef';
function encodeHex({ buffer }) {
    let result = '';
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        result += hexChars[byte >>> 4];
        result += hexChars[byte & 0x0f];
    }
    return result;
}
function decodeHex(hex) {
    if (hex.length % 2 !== 0) {
        throw ( new SyntaxError('Hex string must have an even length'));
    }
    const out = ( new Uint8Array(hex.length >> 1));
    for (let i = 0; i < hex.length;) {
        out[i >> 1] = (decodeHexChar(hex, i++) << 4) | decodeHexChar(hex, i++);
    }
    return VSBuffer.wrap(out);
}
function decodeHexChar(str, position) {
    const s = str.charCodeAt(position);
    if (s >= 48 && s <= 57) {
        return s - 48;
    }
    else if (s >= 97 && s <= 102) {
        return s - 87;
    }
    else if (s >= 65 && s <= 70) {
        return s - 55;
    }
    else {
        throw ( new SyntaxError(`Invalid hex character at position ${position}`));
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/tokens/lineTokens.js





class LineTokens {
    static createEmpty(lineContent, decoder) {
        const defaultMetadata = LineTokens.defaultTokenMetadata;
        const tokens = ( new Uint32Array(2));
        tokens[0] = lineContent.length;
        tokens[1] = defaultMetadata;
        return ( new LineTokens(tokens, lineContent, decoder));
    }
    static createFromTextAndMetadata(data, decoder) {
        let offset = 0;
        let fullText = '';
        const tokens = ( new Array());
        for (const { text, metadata } of data) {
            tokens.push(offset + text.length, metadata);
            offset += text.length;
            fullText += text;
        }
        return ( new LineTokens(( new Uint32Array(tokens)), fullText, decoder));
    }
    static convertToEndOffset(tokens, lineTextLength) {
        const tokenCount = (tokens.length >>> 1);
        const lastTokenIndex = tokenCount - 1;
        for (let tokenIndex = 0; tokenIndex < lastTokenIndex; tokenIndex++) {
            tokens[tokenIndex << 1] = tokens[(tokenIndex + 1) << 1];
        }
        tokens[lastTokenIndex << 1] = lineTextLength;
    }
    static findIndexInTokensArray(tokens, desiredIndex) {
        if (tokens.length <= 2) {
            return 0;
        }
        let low = 0;
        let high = (tokens.length >>> 1) - 1;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            const endOffset = tokens[(mid << 1)];
            if (endOffset === desiredIndex) {
                return mid + 1;
            }
            else if (endOffset < desiredIndex) {
                low = mid + 1;
            }
            else if (endOffset > desiredIndex) {
                high = mid;
            }
        }
        return low;
    }
    static { this.defaultTokenMetadata = ((FontStyle.None << MetadataConsts.FONT_STYLE_OFFSET)
        | (ColorId.DefaultForeground << MetadataConsts.FOREGROUND_OFFSET)
        | (ColorId.DefaultBackground << MetadataConsts.BACKGROUND_OFFSET)) >>> 0; }
    constructor(tokens, text, decoder) {
        this._lineTokensBrand = undefined;
        const tokensLength = tokens.length > 1 ? tokens[tokens.length - 2] : 0;
        if (tokensLength !== text.length) {
            errors_onUnexpectedError(( new Error('Token length and text length do not match!')));
        }
        this._tokens = tokens;
        this._tokensCount = (this._tokens.length >>> 1);
        this._text = text;
        this.languageIdCodec = decoder;
    }
    getTextLength() {
        return this._text.length;
    }
    equals(other) {
        if (other instanceof LineTokens) {
            return this.slicedEquals(other, 0, this._tokensCount);
        }
        return false;
    }
    slicedEquals(other, sliceFromTokenIndex, sliceTokenCount) {
        if (this._text !== other._text) {
            return false;
        }
        if (this._tokensCount !== other._tokensCount) {
            return false;
        }
        const from = (sliceFromTokenIndex << 1);
        const to = from + (sliceTokenCount << 1);
        for (let i = from; i < to; i++) {
            if (this._tokens[i] !== other._tokens[i]) {
                return false;
            }
        }
        return true;
    }
    getLineContent() {
        return this._text;
    }
    getCount() {
        return this._tokensCount;
    }
    getStartOffset(tokenIndex) {
        if (tokenIndex > 0) {
            return this._tokens[(tokenIndex - 1) << 1];
        }
        return 0;
    }
    getMetadata(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return metadata;
    }
    getLanguageId(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        const languageId = TokenMetadata.getLanguageId(metadata);
        return this.languageIdCodec.decodeLanguageId(languageId);
    }
    getStandardTokenType(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return TokenMetadata.getTokenType(metadata);
    }
    getForeground(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return TokenMetadata.getForeground(metadata);
    }
    getClassName(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return TokenMetadata.getClassNameFromMetadata(metadata);
    }
    getInlineStyle(tokenIndex, colorMap) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return TokenMetadata.getInlineStyleFromMetadata(metadata, colorMap);
    }
    getPresentation(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return TokenMetadata.getPresentationFromMetadata(metadata);
    }
    getEndOffset(tokenIndex) {
        return this._tokens[tokenIndex << 1];
    }
    findTokenIndexAtOffset(offset) {
        return LineTokens.findIndexInTokensArray(this._tokens, offset);
    }
    inflate() {
        return this;
    }
    sliceAndInflate(startOffset, endOffset, deltaOffset) {
        return ( new SliceLineTokens(this, startOffset, endOffset, deltaOffset));
    }
    sliceZeroCopy(range) {
        return this.sliceAndInflate(range.start, range.endExclusive, 0);
    }
    withInserted(insertTokens) {
        if (insertTokens.length === 0) {
            return this;
        }
        let nextOriginalTokenIdx = 0;
        let nextInsertTokenIdx = 0;
        let text = '';
        const newTokens = ( new Array());
        let originalEndOffset = 0;
        while (true) {
            const nextOriginalTokenEndOffset = nextOriginalTokenIdx < this._tokensCount ? this._tokens[nextOriginalTokenIdx << 1] : -1;
            const nextInsertToken = nextInsertTokenIdx < insertTokens.length ? insertTokens[nextInsertTokenIdx] : null;
            if (nextOriginalTokenEndOffset !== -1 && (nextInsertToken === null || nextOriginalTokenEndOffset <= nextInsertToken.offset)) {
                text += this._text.substring(originalEndOffset, nextOriginalTokenEndOffset);
                const metadata = this._tokens[(nextOriginalTokenIdx << 1) + 1];
                newTokens.push(text.length, metadata);
                nextOriginalTokenIdx++;
                originalEndOffset = nextOriginalTokenEndOffset;
            }
            else if (nextInsertToken) {
                if (nextInsertToken.offset > originalEndOffset) {
                    text += this._text.substring(originalEndOffset, nextInsertToken.offset);
                    const metadata = this._tokens[(nextOriginalTokenIdx << 1) + 1];
                    newTokens.push(text.length, metadata);
                    originalEndOffset = nextInsertToken.offset;
                }
                text += nextInsertToken.text;
                newTokens.push(text.length, nextInsertToken.tokenMetadata);
                nextInsertTokenIdx++;
            }
            else {
                break;
            }
        }
        return ( new LineTokens(( new Uint32Array(newTokens)), text, this.languageIdCodec));
    }
    getTokensInRange(range) {
        const builder = ( new TokenArrayBuilder());
        const startTokenIndex = this.findTokenIndexAtOffset(range.start);
        const endTokenIndex = this.findTokenIndexAtOffset(range.endExclusive);
        for (let tokenIndex = startTokenIndex; tokenIndex <= endTokenIndex; tokenIndex++) {
            const tokenRange = ( new OffsetRange(this.getStartOffset(tokenIndex), this.getEndOffset(tokenIndex)));
            const length = tokenRange.intersectionLength(range);
            if (length > 0) {
                builder.add(length, this.getMetadata(tokenIndex));
            }
        }
        return builder.build();
    }
    getTokenText(tokenIndex) {
        const startOffset = this.getStartOffset(tokenIndex);
        const endOffset = this.getEndOffset(tokenIndex);
        const text = this._text.substring(startOffset, endOffset);
        return text;
    }
    forEach(callback) {
        const tokenCount = this.getCount();
        for (let tokenIndex = 0; tokenIndex < tokenCount; tokenIndex++) {
            callback(tokenIndex);
        }
    }
    toString() {
        let result = '';
        this.forEach((i) => {
            result += `[${this.getTokenText(i)}]{${this.getClassName(i)}}`;
        });
        return result;
    }
}
class SliceLineTokens {
    constructor(source, startOffset, endOffset, deltaOffset) {
        this._source = source;
        this._startOffset = startOffset;
        this._endOffset = endOffset;
        this._deltaOffset = deltaOffset;
        this._firstTokenIndex = source.findTokenIndexAtOffset(startOffset);
        this.languageIdCodec = source.languageIdCodec;
        this._tokensCount = 0;
        for (let i = this._firstTokenIndex, len = source.getCount(); i < len; i++) {
            const tokenStartOffset = source.getStartOffset(i);
            if (tokenStartOffset >= endOffset) {
                break;
            }
            this._tokensCount++;
        }
    }
    getMetadata(tokenIndex) {
        return this._source.getMetadata(this._firstTokenIndex + tokenIndex);
    }
    getLanguageId(tokenIndex) {
        return this._source.getLanguageId(this._firstTokenIndex + tokenIndex);
    }
    getLineContent() {
        return this._source.getLineContent().substring(this._startOffset, this._endOffset);
    }
    equals(other) {
        if (other instanceof SliceLineTokens) {
            return (this._startOffset === other._startOffset
                && this._endOffset === other._endOffset
                && this._deltaOffset === other._deltaOffset
                && this._source.slicedEquals(other._source, this._firstTokenIndex, this._tokensCount));
        }
        return false;
    }
    getCount() {
        return this._tokensCount;
    }
    getStandardTokenType(tokenIndex) {
        return this._source.getStandardTokenType(this._firstTokenIndex + tokenIndex);
    }
    getForeground(tokenIndex) {
        return this._source.getForeground(this._firstTokenIndex + tokenIndex);
    }
    getEndOffset(tokenIndex) {
        const tokenEndOffset = this._source.getEndOffset(this._firstTokenIndex + tokenIndex);
        return Math.min(this._endOffset, tokenEndOffset) - this._startOffset + this._deltaOffset;
    }
    getClassName(tokenIndex) {
        return this._source.getClassName(this._firstTokenIndex + tokenIndex);
    }
    getInlineStyle(tokenIndex, colorMap) {
        return this._source.getInlineStyle(this._firstTokenIndex + tokenIndex, colorMap);
    }
    getPresentation(tokenIndex) {
        return this._source.getPresentation(this._firstTokenIndex + tokenIndex);
    }
    findTokenIndexAtOffset(offset) {
        return this._source.findTokenIndexAtOffset(offset + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
    }
    getTokenText(tokenIndex) {
        const adjustedTokenIndex = this._firstTokenIndex + tokenIndex;
        const tokenStartOffset = this._source.getStartOffset(adjustedTokenIndex);
        const tokenEndOffset = this._source.getEndOffset(adjustedTokenIndex);
        let text = this._source.getTokenText(adjustedTokenIndex);
        if (tokenStartOffset < this._startOffset) {
            text = text.substring(this._startOffset - tokenStartOffset);
        }
        if (tokenEndOffset > this._endOffset) {
            text = text.substring(0, text.length - (tokenEndOffset - this._endOffset));
        }
        return text;
    }
    forEach(callback) {
        for (let tokenIndex = 0; tokenIndex < this.getCount(); tokenIndex++) {
            callback(tokenIndex);
        }
    }
}
function getStandardTokenTypeAtPosition(model, position) {
    const lineNumber = position.lineNumber;
    if (!model.tokenization.isCheapToTokenize(lineNumber)) {
        return undefined;
    }
    model.tokenization.forceTokenization(lineNumber);
    const lineTokens = model.tokenization.getLineTokens(lineNumber);
    const tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
    const tokenType = lineTokens.getStandardTokenType(tokenIndex);
    return tokenType;
}
class TokenArray {
    static fromLineTokens(lineTokens) {
        const tokenInfo = [];
        for (let i = 0; i < lineTokens.getCount(); i++) {
            tokenInfo.push(( new TokenInfo(
                lineTokens.getEndOffset(i) - lineTokens.getStartOffset(i),
                lineTokens.getMetadata(i)
            )));
        }
        return TokenArray.create(tokenInfo);
    }
    static create(tokenInfo) {
        return ( new TokenArray(tokenInfo));
    }
    constructor(_tokenInfo) {
        this._tokenInfo = _tokenInfo;
    }
    toLineTokens(lineContent, decoder) {
        return LineTokens.createFromTextAndMetadata(( this.map((r, t) => ({ text: r.substring(lineContent), metadata: t.metadata }))), decoder);
    }
    forEach(cb) {
        let lengthSum = 0;
        for (const tokenInfo of this._tokenInfo) {
            const range = ( new OffsetRange(lengthSum, lengthSum + tokenInfo.length));
            cb(range, tokenInfo);
            lengthSum += tokenInfo.length;
        }
    }
    map(cb) {
        const result = [];
        let lengthSum = 0;
        for (const tokenInfo of this._tokenInfo) {
            const range = ( new OffsetRange(lengthSum, lengthSum + tokenInfo.length));
            result.push(cb(range, tokenInfo));
            lengthSum += tokenInfo.length;
        }
        return result;
    }
    slice(range) {
        const result = [];
        let lengthSum = 0;
        for (const tokenInfo of this._tokenInfo) {
            const tokenStart = lengthSum;
            const tokenEndEx = tokenStart + tokenInfo.length;
            if (tokenEndEx > range.start) {
                if (tokenStart >= range.endExclusive) {
                    break;
                }
                const deltaBefore = Math.max(0, range.start - tokenStart);
                const deltaAfter = Math.max(0, tokenEndEx - range.endExclusive);
                result.push(( new TokenInfo(tokenInfo.length - deltaBefore - deltaAfter, tokenInfo.metadata)));
            }
            lengthSum += tokenInfo.length;
        }
        return TokenArray.create(result);
    }
    append(other) {
        const result = this._tokenInfo.concat(other._tokenInfo);
        return TokenArray.create(result);
    }
}
class TokenInfo {
    constructor(length, metadata) {
        this.length = length;
        this.metadata = metadata;
    }
}
class TokenArrayBuilder {
    constructor() {
        this._tokens = [];
    }
    add(length, metadata) {
        this._tokens.push(( new TokenInfo(length, metadata)));
    }
    build() {
        return TokenArray.create(this._tokens);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/tokens/contiguousTokensEditing.js



const EMPTY_LINE_TOKENS = (( new Uint32Array(0))).buffer;
class ContiguousTokensEditing {
    static deleteBeginning(lineTokens, toChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        return ContiguousTokensEditing.delete(lineTokens, 0, toChIndex);
    }
    static deleteEnding(lineTokens, fromChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const lineTextLength = tokens[tokens.length - 2];
        return ContiguousTokensEditing.delete(lineTokens, fromChIndex, lineTextLength);
    }
    static delete(lineTokens, fromChIndex, toChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS || fromChIndex === toChIndex) {
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const tokensCount = (tokens.length >>> 1);
        if (fromChIndex === 0 && tokens[tokens.length - 2] === toChIndex) {
            return EMPTY_LINE_TOKENS;
        }
        const fromTokenIndex = LineTokens.findIndexInTokensArray(tokens, fromChIndex);
        const fromTokenStartOffset = (fromTokenIndex > 0 ? tokens[(fromTokenIndex - 1) << 1] : 0);
        const fromTokenEndOffset = tokens[fromTokenIndex << 1];
        if (toChIndex < fromTokenEndOffset) {
            const delta = (toChIndex - fromChIndex);
            for (let i = fromTokenIndex; i < tokensCount; i++) {
                tokens[i << 1] -= delta;
            }
            return lineTokens;
        }
        let dest;
        let lastEnd;
        if (fromTokenStartOffset !== fromChIndex) {
            tokens[fromTokenIndex << 1] = fromChIndex;
            dest = ((fromTokenIndex + 1) << 1);
            lastEnd = fromChIndex;
        }
        else {
            dest = (fromTokenIndex << 1);
            lastEnd = fromTokenStartOffset;
        }
        const delta = (toChIndex - fromChIndex);
        for (let tokenIndex = fromTokenIndex + 1; tokenIndex < tokensCount; tokenIndex++) {
            const tokenEndOffset = tokens[tokenIndex << 1] - delta;
            if (tokenEndOffset > lastEnd) {
                tokens[dest++] = tokenEndOffset;
                tokens[dest++] = tokens[(tokenIndex << 1) + 1];
                lastEnd = tokenEndOffset;
            }
        }
        if (dest === tokens.length) {
            return lineTokens;
        }
        const tmp = ( new Uint32Array(dest));
        tmp.set(tokens.subarray(0, dest), 0);
        return tmp.buffer;
    }
    static append(lineTokens, _otherTokens) {
        if (_otherTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        if (lineTokens === EMPTY_LINE_TOKENS) {
            return _otherTokens;
        }
        if (lineTokens === null) {
            return lineTokens;
        }
        if (_otherTokens === null) {
            return null;
        }
        const myTokens = toUint32Array(lineTokens);
        const otherTokens = toUint32Array(_otherTokens);
        const otherTokensCount = (otherTokens.length >>> 1);
        const result = ( new Uint32Array(myTokens.length + otherTokens.length));
        result.set(myTokens, 0);
        let dest = myTokens.length;
        const delta = myTokens[myTokens.length - 2];
        for (let i = 0; i < otherTokensCount; i++) {
            result[dest++] = otherTokens[(i << 1)] + delta;
            result[dest++] = otherTokens[(i << 1) + 1];
        }
        return result.buffer;
    }
    static insert(lineTokens, chIndex, textLength) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const tokensCount = (tokens.length >>> 1);
        let fromTokenIndex = LineTokens.findIndexInTokensArray(tokens, chIndex);
        if (fromTokenIndex > 0) {
            const fromTokenStartOffset = tokens[(fromTokenIndex - 1) << 1];
            if (fromTokenStartOffset === chIndex) {
                fromTokenIndex--;
            }
        }
        for (let tokenIndex = fromTokenIndex; tokenIndex < tokensCount; tokenIndex++) {
            tokens[tokenIndex << 1] += textLength;
        }
        return lineTokens;
    }
}
function toUint32Array(arr) {
    if (arr instanceof Uint32Array) {
        return arr;
    }
    else {
        return ( new Uint32Array(arr));
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/tokens/contiguousMultilineTokens.js








class ContiguousMultilineTokens {
    static deserialize(buff, offset, result) {
        const view32 = ( new Uint32Array(buff.buffer));
        const startLineNumber = readUInt32BE(buff, offset);
        offset += 4;
        const count = readUInt32BE(buff, offset);
        offset += 4;
        const tokens = [];
        for (let i = 0; i < count; i++) {
            const byteCount = readUInt32BE(buff, offset);
            offset += 4;
            tokens.push(view32.subarray(offset / 4, offset / 4 + byteCount / 4));
            offset += byteCount;
        }
        result.push(( new ContiguousMultilineTokens(startLineNumber, tokens)));
        return offset;
    }
    get startLineNumber() {
        return this._startLineNumber;
    }
    get endLineNumber() {
        return this._startLineNumber + this._tokens.length - 1;
    }
    constructor(startLineNumber, tokens) {
        this._startLineNumber = startLineNumber;
        this._tokens = tokens;
    }
    getLineRange() {
        return ( new lineRange_LineRange(this._startLineNumber, this._startLineNumber + this._tokens.length));
    }
    getLineTokens(lineNumber) {
        return this._tokens[lineNumber - this._startLineNumber];
    }
    appendLineTokens(lineTokens) {
        this._tokens.push(lineTokens);
    }
    serializeSize() {
        let result = 0;
        result += 4;
        result += 4;
        for (let i = 0; i < this._tokens.length; i++) {
            const lineTokens = this._tokens[i];
            if (!(lineTokens instanceof Uint32Array)) {
                throw ( new Error(`Not supported!`));
            }
            result += 4;
            result += lineTokens.byteLength;
        }
        return result;
    }
    serialize(destination, offset) {
        writeUInt32BE(destination, this._startLineNumber, offset);
        offset += 4;
        writeUInt32BE(destination, this._tokens.length, offset);
        offset += 4;
        for (let i = 0; i < this._tokens.length; i++) {
            const lineTokens = this._tokens[i];
            if (!(lineTokens instanceof Uint32Array)) {
                throw ( new Error(`Not supported!`));
            }
            writeUInt32BE(destination, lineTokens.byteLength, offset);
            offset += 4;
            destination.set(( new Uint8Array(lineTokens.buffer)), offset);
            offset += lineTokens.byteLength;
        }
        return offset;
    }
    applyEdit(range, text) {
        const [eolCount, firstLineLength] = countEOL(text);
        this._acceptDeleteRange(range);
        this._acceptInsertText(( new Position(range.startLineNumber, range.startColumn)), eolCount, firstLineLength);
    }
    _acceptDeleteRange(range) {
        if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
            return;
        }
        const firstLineIndex = range.startLineNumber - this._startLineNumber;
        const lastLineIndex = range.endLineNumber - this._startLineNumber;
        if (lastLineIndex < 0) {
            const deletedLinesCount = lastLineIndex - firstLineIndex;
            this._startLineNumber -= deletedLinesCount;
            return;
        }
        if (firstLineIndex >= this._tokens.length) {
            return;
        }
        if (firstLineIndex < 0 && lastLineIndex >= this._tokens.length) {
            this._startLineNumber = 0;
            this._tokens = [];
            return;
        }
        if (firstLineIndex === lastLineIndex) {
            this._tokens[firstLineIndex] = ContiguousTokensEditing.delete(this._tokens[firstLineIndex], range.startColumn - 1, range.endColumn - 1);
            return;
        }
        if (firstLineIndex >= 0) {
            this._tokens[firstLineIndex] = ContiguousTokensEditing.deleteEnding(this._tokens[firstLineIndex], range.startColumn - 1);
            if (lastLineIndex < this._tokens.length) {
                const lastLineTokens = ContiguousTokensEditing.deleteBeginning(this._tokens[lastLineIndex], range.endColumn - 1);
                this._tokens[firstLineIndex] = ContiguousTokensEditing.append(this._tokens[firstLineIndex], lastLineTokens);
                this._tokens.splice(firstLineIndex + 1, lastLineIndex - firstLineIndex);
            }
            else {
                this._tokens[firstLineIndex] = ContiguousTokensEditing.append(this._tokens[firstLineIndex], null);
                this._tokens = this._tokens.slice(0, firstLineIndex + 1);
            }
        }
        else {
            const deletedBefore = -firstLineIndex;
            this._startLineNumber -= deletedBefore;
            this._tokens[lastLineIndex] = ContiguousTokensEditing.deleteBeginning(this._tokens[lastLineIndex], range.endColumn - 1);
            this._tokens = this._tokens.slice(lastLineIndex);
        }
    }
    _acceptInsertText(position, eolCount, firstLineLength) {
        if (eolCount === 0 && firstLineLength === 0) {
            return;
        }
        const lineIndex = position.lineNumber - this._startLineNumber;
        if (lineIndex < 0) {
            this._startLineNumber += eolCount;
            return;
        }
        if (lineIndex >= this._tokens.length) {
            return;
        }
        if (eolCount === 0) {
            this._tokens[lineIndex] = ContiguousTokensEditing.insert(this._tokens[lineIndex], position.column - 1, firstLineLength);
            return;
        }
        this._tokens[lineIndex] = ContiguousTokensEditing.deleteEnding(this._tokens[lineIndex], position.column - 1);
        this._tokens[lineIndex] = ContiguousTokensEditing.insert(this._tokens[lineIndex], position.column - 1, firstLineLength);
        this._insertLines(position.lineNumber, eolCount);
    }
    _insertLines(insertIndex, insertCount) {
        if (insertCount === 0) {
            return;
        }
        const lineTokens = [];
        for (let i = 0; i < insertCount; i++) {
            lineTokens[i] = null;
        }
        this._tokens = arrays_arrayInsert(this._tokens, insertIndex, lineTokens);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/tokens/contiguousMultilineTokensBuilder.js




class contiguousMultilineTokensBuilder_ContiguousMultilineTokensBuilder {
    static deserialize(buff) {
        let offset = 0;
        const count = readUInt32BE(buff, offset);
        offset += 4;
        const result = [];
        for (let i = 0; i < count; i++) {
            offset = ContiguousMultilineTokens.deserialize(buff, offset, result);
        }
        return result;
    }
    constructor() {
        this._tokens = [];
    }
    add(lineNumber, lineTokens) {
        if (this._tokens.length > 0) {
            const last = this._tokens[this._tokens.length - 1];
            if (last.endLineNumber + 1 === lineNumber) {
                last.appendLineTokens(lineTokens);
                return;
            }
        }
        this._tokens.push(( new ContiguousMultilineTokens(lineNumber, [lineTokens])));
    }
    finalize() {
        return this._tokens;
    }
    serialize() {
        const size = this._serializeSize();
        const result = ( new Uint8Array(size));
        this._serialize(result);
        return result;
    }
    _serializeSize() {
        let result = 0;
        result += 4;
        for (let i = 0; i < this._tokens.length; i++) {
            result += this._tokens[i].serializeSize();
        }
        return result;
    }
    _serialize(destination) {
        let offset = 0;
        writeUInt32BE(destination, this._tokens.length, offset);
        offset += 4;
        for (let i = 0; i < this._tokens.length; i++) {
            offset = this._tokens[i].serialize(destination, offset);
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/editor/common/model/textModelTokens.js














var textModelTokens_Constants;
(function (Constants) {
    Constants[Constants["CHEAP_TOKENIZATION_LENGTH_LIMIT"] = 2048] = "CHEAP_TOKENIZATION_LENGTH_LIMIT";
})(textModelTokens_Constants || (textModelTokens_Constants = {}));
class TokenizerWithStateStore {
    constructor(lineCount, tokenizationSupport) {
        this.tokenizationSupport = tokenizationSupport;
        this.initialState = this.tokenizationSupport.getInitialState();
        this.store = ( new TrackingTokenizationStateStore(lineCount));
    }
    getStartState(lineNumber) {
        return this.store.getStartState(lineNumber, this.initialState);
    }
    getFirstInvalidLine() {
        return this.store.getFirstInvalidLine(this.initialState);
    }
}
class TokenizerWithStateStoreAndTextModel extends TokenizerWithStateStore {
    constructor(lineCount, tokenizationSupport, _textModel, _languageIdCodec) {
        super(lineCount, tokenizationSupport);
        this._textModel = _textModel;
        this._languageIdCodec = _languageIdCodec;
    }
    updateTokensUntilLine(builder, lineNumber) {
        const languageId = this._textModel.getLanguageId();
        while (true) {
            const lineToTokenize = this.getFirstInvalidLine();
            if (!lineToTokenize || lineToTokenize.lineNumber > lineNumber) {
                break;
            }
            const text = this._textModel.getLineContent(lineToTokenize.lineNumber);
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, lineToTokenize.startState);
            builder.add(lineToTokenize.lineNumber, r.tokens);
            this.store.setEndState(lineToTokenize.lineNumber, r.endState);
        }
    }
    getTokenTypeIfInsertingCharacter(position, character) {
        const lineStartState = this.getStartState(position.lineNumber);
        if (!lineStartState) {
            return StandardTokenType.Other;
        }
        const languageId = this._textModel.getLanguageId();
        const lineContent = this._textModel.getLineContent(position.lineNumber);
        const text = (lineContent.substring(0, position.column - 1)
            + character
            + lineContent.substring(position.column - 1));
        const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, lineStartState);
        const lineTokens = ( new LineTokens(r.tokens, text, this._languageIdCodec));
        if (lineTokens.getCount() === 0) {
            return StandardTokenType.Other;
        }
        const tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
        return lineTokens.getStandardTokenType(tokenIndex);
    }
    tokenizeLinesAt(lineNumber, lines) {
        const lineStartState = this.getStartState(lineNumber);
        if (!lineStartState) {
            return null;
        }
        const languageId = this._textModel.getLanguageId();
        const result = [];
        let state = lineStartState;
        for (const line of lines) {
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, line, true, state);
            result.push(( new LineTokens(r.tokens, line, this._languageIdCodec)));
            state = r.endState;
        }
        return result;
    }
    hasAccurateTokensForLine(lineNumber) {
        const firstInvalidLineNumber = this.store.getFirstInvalidEndStateLineNumberOrMax();
        return (lineNumber < firstInvalidLineNumber);
    }
    isCheapToTokenize(lineNumber) {
        const firstInvalidLineNumber = this.store.getFirstInvalidEndStateLineNumberOrMax();
        if (lineNumber < firstInvalidLineNumber) {
            return true;
        }
        if (lineNumber === firstInvalidLineNumber
            && this._textModel.getLineLength(lineNumber) < textModelTokens_Constants.CHEAP_TOKENIZATION_LENGTH_LIMIT) {
            return true;
        }
        return false;
    }
    tokenizeHeuristically(builder, startLineNumber, endLineNumber) {
        if (endLineNumber <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
            return { heuristicTokens: false };
        }
        if (startLineNumber <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
            this.updateTokensUntilLine(builder, endLineNumber);
            return { heuristicTokens: false };
        }
        let state = this.guessStartState(startLineNumber);
        const languageId = this._textModel.getLanguageId();
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const text = this._textModel.getLineContent(lineNumber);
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, state);
            builder.add(lineNumber, r.tokens);
            state = r.endState;
        }
        return { heuristicTokens: true };
    }
    guessStartState(lineNumber) {
        let { likelyRelevantLines, initialState } = findLikelyRelevantLines(this._textModel, lineNumber, this);
        if (!initialState) {
            initialState = this.tokenizationSupport.getInitialState();
        }
        const languageId = this._textModel.getLanguageId();
        let state = initialState;
        for (const line of likelyRelevantLines) {
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, line, false, state);
            state = r.endState;
        }
        return state;
    }
}
function findLikelyRelevantLines(model, lineNumber, store) {
    let nonWhitespaceColumn = model.getLineFirstNonWhitespaceColumn(lineNumber);
    const likelyRelevantLines = [];
    let initialState = null;
    for (let i = lineNumber - 1; nonWhitespaceColumn > 1 && i >= 1; i--) {
        const newNonWhitespaceIndex = model.getLineFirstNonWhitespaceColumn(i);
        if (newNonWhitespaceIndex === 0) {
            continue;
        }
        if (newNonWhitespaceIndex < nonWhitespaceColumn) {
            likelyRelevantLines.push(model.getLineContent(i));
            nonWhitespaceColumn = newNonWhitespaceIndex;
            initialState = store?.getStartState(i);
            if (initialState) {
                break;
            }
        }
    }
    likelyRelevantLines.reverse();
    return { likelyRelevantLines, initialState: initialState ?? undefined };
}
class TrackingTokenizationStateStore {
    constructor(lineCount) {
        this.lineCount = lineCount;
        this._tokenizationStateStore = ( new TokenizationStateStore());
        this._invalidEndStatesLineNumbers = ( new RangePriorityQueueImpl());
        this._invalidEndStatesLineNumbers.addRange(( new OffsetRange(1, lineCount + 1)));
    }
    getEndState(lineNumber) {
        return this._tokenizationStateStore.getEndState(lineNumber);
    }
    setEndState(lineNumber, state) {
        if (!state) {
            throw ( new errors_BugIndicatingError('Cannot set null/undefined state'));
        }
        this._invalidEndStatesLineNumbers.delete(lineNumber);
        const r = this._tokenizationStateStore.setEndState(lineNumber, state);
        if (r && lineNumber < this.lineCount) {
            this._invalidEndStatesLineNumbers.addRange(( new OffsetRange(lineNumber + 1, lineNumber + 2)));
        }
        return r;
    }
    acceptChange(range, newLineCount) {
        this.lineCount += newLineCount - range.length;
        this._tokenizationStateStore.acceptChange(range, newLineCount);
        this._invalidEndStatesLineNumbers.addRangeAndResize(( new OffsetRange(range.startLineNumber, range.endLineNumberExclusive)), newLineCount);
    }
    acceptChanges(changes) {
        for (const c of changes) {
            const [eolCount] = countEOL(c.text);
            this.acceptChange(( new lineRange_LineRange(c.range.startLineNumber, c.range.endLineNumber + 1)), eolCount + 1);
        }
    }
    invalidateEndStateRange(range) {
        this._invalidEndStatesLineNumbers.addRange(( new OffsetRange(range.startLineNumber, range.endLineNumberExclusive)));
    }
    getFirstInvalidEndStateLineNumber() { return this._invalidEndStatesLineNumbers.min; }
    getFirstInvalidEndStateLineNumberOrMax() {
        return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
    }
    allStatesValid() { return this._invalidEndStatesLineNumbers.min === null; }
    getStartState(lineNumber, initialState) {
        if (lineNumber === 1) {
            return initialState;
        }
        return this.getEndState(lineNumber - 1);
    }
    getFirstInvalidLine(initialState) {
        const lineNumber = this.getFirstInvalidEndStateLineNumber();
        if (lineNumber === null) {
            return null;
        }
        const startState = this.getStartState(lineNumber, initialState);
        if (!startState) {
            throw ( new errors_BugIndicatingError('Start state must be defined'));
        }
        return { lineNumber, startState };
    }
}
class TokenizationStateStore {
    constructor() {
        this._lineEndStates = ( new FixedArray(null));
    }
    getEndState(lineNumber) {
        return this._lineEndStates.get(lineNumber);
    }
    setEndState(lineNumber, state) {
        const oldState = this._lineEndStates.get(lineNumber);
        if (oldState && oldState.equals(state)) {
            return false;
        }
        this._lineEndStates.set(lineNumber, state);
        return true;
    }
    acceptChange(range, newLineCount) {
        let length = range.length;
        if (newLineCount > 0 && length > 0) {
            length--;
            newLineCount--;
        }
        this._lineEndStates.replace(range.startLineNumber, length, newLineCount);
    }
    acceptChanges(changes) {
        for (const c of changes) {
            const [eolCount] = countEOL(c.text);
            this.acceptChange(( new lineRange_LineRange(c.range.startLineNumber, c.range.endLineNumber + 1)), eolCount + 1);
        }
    }
}
class RangePriorityQueueImpl {
    constructor() {
        this._ranges = [];
    }
    getRanges() {
        return this._ranges;
    }
    get min() {
        if (this._ranges.length === 0) {
            return null;
        }
        return this._ranges[0].start;
    }
    removeMin() {
        if (this._ranges.length === 0) {
            return null;
        }
        const range = this._ranges[0];
        if (range.start + 1 === range.endExclusive) {
            this._ranges.shift();
        }
        else {
            this._ranges[0] = ( new OffsetRange(range.start + 1, range.endExclusive));
        }
        return range.start;
    }
    delete(value) {
        const idx = this._ranges.findIndex(r => r.contains(value));
        if (idx !== -1) {
            const range = this._ranges[idx];
            if (range.start === value) {
                if (range.endExclusive === value + 1) {
                    this._ranges.splice(idx, 1);
                }
                else {
                    this._ranges[idx] = ( new OffsetRange(value + 1, range.endExclusive));
                }
            }
            else {
                if (range.endExclusive === value + 1) {
                    this._ranges[idx] = ( new OffsetRange(range.start, value));
                }
                else {
                    this._ranges.splice(idx, 1, ( new OffsetRange(range.start, value)), ( new OffsetRange(value + 1, range.endExclusive)));
                }
            }
        }
    }
    addRange(range) {
        OffsetRange.addRange(range, this._ranges);
    }
    addRangeAndResize(range, newLength) {
        let idxFirstMightBeIntersecting = 0;
        while (!(idxFirstMightBeIntersecting >= this._ranges.length || range.start <= this._ranges[idxFirstMightBeIntersecting].endExclusive)) {
            idxFirstMightBeIntersecting++;
        }
        let idxFirstIsAfter = idxFirstMightBeIntersecting;
        while (!(idxFirstIsAfter >= this._ranges.length || range.endExclusive < this._ranges[idxFirstIsAfter].start)) {
            idxFirstIsAfter++;
        }
        const delta = newLength - range.length;
        for (let i = idxFirstIsAfter; i < this._ranges.length; i++) {
            this._ranges[i] = this._ranges[i].delta(delta);
        }
        if (idxFirstMightBeIntersecting === idxFirstIsAfter) {
            const newRange = ( new OffsetRange(range.start, range.start + newLength));
            if (!newRange.isEmpty) {
                this._ranges.splice(idxFirstMightBeIntersecting, 0, newRange);
            }
        }
        else {
            const start = Math.min(range.start, this._ranges[idxFirstMightBeIntersecting].start);
            const endEx = Math.max(range.endExclusive, this._ranges[idxFirstIsAfter - 1].endExclusive);
            const newRange = ( new OffsetRange(start, endEx + delta));
            if (!newRange.isEmpty) {
                this._ranges.splice(idxFirstMightBeIntersecting, idxFirstIsAfter - idxFirstMightBeIntersecting, newRange);
            }
            else {
                this._ranges.splice(idxFirstMightBeIntersecting, idxFirstIsAfter - idxFirstMightBeIntersecting);
            }
        }
    }
    toString() {
        return ( this._ranges.map(r => ( r.toString()))).join(' + ');
    }
}
function safeTokenize(languageIdCodec, languageId, tokenizationSupport, text, hasEOL, state) {
    let r = null;
    if (tokenizationSupport) {
        try {
            r = tokenizationSupport.tokenizeEncoded(text, hasEOL, state.clone());
        }
        catch (e) {
            errors_onUnexpectedError(e);
        }
    }
    if (!r) {
        r = nullTokenizeEncoded(languageIdCodec.encodeLanguageId(languageId), state);
    }
    LineTokens.convertToEndOffset(r.tokens, text.length);
    return r;
}
class DefaultBackgroundTokenizer {
    constructor(_tokenizerWithStateStore, _backgroundTokenStore) {
        this._tokenizerWithStateStore = _tokenizerWithStateStore;
        this._backgroundTokenStore = _backgroundTokenStore;
        this._isDisposed = false;
        this._isScheduled = false;
    }
    dispose() {
        this._isDisposed = true;
    }
    handleChanges() {
        this._beginBackgroundTokenization();
    }
    _beginBackgroundTokenization() {
        if (this._isScheduled || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize()) {
            return;
        }
        this._isScheduled = true;
        runWhenGlobalIdle((deadline) => {
            this._isScheduled = false;
            this._backgroundTokenizeWithDeadline(deadline);
        });
    }
    _backgroundTokenizeWithDeadline(deadline) {
        const endTime = Date.now() + deadline.timeRemaining();
        const execute = () => {
            if (this._isDisposed || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize()) {
                return;
            }
            this._backgroundTokenizeForAtLeast1ms();
            if (Date.now() < endTime) {
                setTimeout0(execute);
            }
            else {
                this._beginBackgroundTokenization();
            }
        };
        execute();
    }
    _backgroundTokenizeForAtLeast1ms() {
        const lineCount = this._tokenizerWithStateStore._textModel.getLineCount();
        const builder = ( new ContiguousMultilineTokensBuilder());
        const sw = StopWatch.create(false);
        do {
            if (sw.elapsed() > 1) {
                break;
            }
            const tokenizedLineNumber = this._tokenizeOneInvalidLine(builder);
            if (tokenizedLineNumber >= lineCount) {
                break;
            }
        } while (this._hasLinesToTokenize());
        this._backgroundTokenStore.setTokens(builder.finalize());
        this.checkFinished();
    }
    _hasLinesToTokenize() {
        if (!this._tokenizerWithStateStore) {
            return false;
        }
        return !this._tokenizerWithStateStore.store.allStatesValid();
    }
    _tokenizeOneInvalidLine(builder) {
        const firstInvalidLine = this._tokenizerWithStateStore?.getFirstInvalidLine();
        if (!firstInvalidLine) {
            return this._tokenizerWithStateStore._textModel.getLineCount() + 1;
        }
        this._tokenizerWithStateStore.updateTokensUntilLine(builder, firstInvalidLine.lineNumber);
        return firstInvalidLine.lineNumber;
    }
    checkFinished() {
        if (this._isDisposed) {
            return;
        }
        if (this._tokenizerWithStateStore.store.allStatesValid()) {
            this._backgroundTokenStore.backgroundTokenizationFinished();
        }
    }
    requestTokens(startLineNumber, endLineNumberExclusive) {
        this._tokenizerWithStateStore.store.invalidateEndStateRange(( new LineRange(startLineNumber, endLineNumberExclusive)));
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/tokenizationSupport/textMateTokenizationSupport.js







class TextMateTokenizationSupport extends lifecycle_Disposable {
    constructor(_grammar, _initialState, _containsEmbeddedLanguages, _createBackgroundTokenizer, _backgroundTokenizerShouldOnlyVerifyTokens, _reportTokenizationTime, _reportSlowTokenization) {
        super();
        this._grammar = _grammar;
        this._initialState = _initialState;
        this._containsEmbeddedLanguages = _containsEmbeddedLanguages;
        this._createBackgroundTokenizer = _createBackgroundTokenizer;
        this._backgroundTokenizerShouldOnlyVerifyTokens = _backgroundTokenizerShouldOnlyVerifyTokens;
        this._reportTokenizationTime = _reportTokenizationTime;
        this._reportSlowTokenization = _reportSlowTokenization;
        this._seenLanguages = [];
        this._onDidEncounterLanguage = this._register(( new Emitter()));
        this.onDidEncounterLanguage = this._onDidEncounterLanguage.event;
    }
    get backgroundTokenizerShouldOnlyVerifyTokens() {
        return this._backgroundTokenizerShouldOnlyVerifyTokens();
    }
    getInitialState() {
        return this._initialState;
    }
    tokenize(line, hasEOL, state) {
        throw ( new Error('Not supported!'));
    }
    createBackgroundTokenizer(textModel, store) {
        if (this._createBackgroundTokenizer) {
            return this._createBackgroundTokenizer(textModel, store);
        }
        return undefined;
    }
    tokenizeEncoded(line, hasEOL, state) {
        const isRandomSample = Math.random() * 10_000 < 1;
        const shouldMeasure = this._reportSlowTokenization || isRandomSample;
        const sw = shouldMeasure ? ( new stopwatch_StopWatch(true)) : undefined;
        const textMateResult = this._grammar.tokenizeLine2(line, state, 500);
        if (shouldMeasure) {
            const timeMS = sw.elapsed();
            if (isRandomSample || timeMS > 32) {
                this._reportTokenizationTime(timeMS, line.length, isRandomSample);
            }
        }
        if (textMateResult.stoppedEarly) {
            console.warn(`Time limit reached when tokenizing line: ${line.substring(0, 100)}`);
            return ( new EncodedTokenizationResult(textMateResult.tokens, state));
        }
        if (this._containsEmbeddedLanguages) {
            const seenLanguages = this._seenLanguages;
            const tokens = textMateResult.tokens;
            for (let i = 0, len = (tokens.length >>> 1); i < len; i++) {
                const metadata = tokens[(i << 1) + 1];
                const languageId = TokenMetadata.getLanguageId(metadata);
                if (!seenLanguages[languageId]) {
                    seenLanguages[languageId] = true;
                    this._onDidEncounterLanguage.fire(languageId);
                }
            }
        }
        let endState;
        if (state.equals(textMateResult.ruleStack)) {
            endState = state;
        }
        else {
            endState = textMateResult.ruleStack;
        }
        return ( new EncodedTokenizationResult(textMateResult.tokens, endState));
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/tokenizationSupport/tokenizationSupportWithLineLimit.js






class TokenizationSupportWithLineLimit extends lifecycle_Disposable {
    get backgroundTokenizerShouldOnlyVerifyTokens() {
        return this._actual.backgroundTokenizerShouldOnlyVerifyTokens;
    }
    constructor(_encodedLanguageId, _actual, disposable, _maxTokenizationLineLength) {
        super();
        this._encodedLanguageId = _encodedLanguageId;
        this._actual = _actual;
        this._maxTokenizationLineLength = _maxTokenizationLineLength;
        this._register(keepObserved(this._maxTokenizationLineLength));
        this._register(disposable);
    }
    getInitialState() {
        return this._actual.getInitialState();
    }
    tokenize(line, hasEOL, state) {
        throw ( new Error('Not supported!'));
    }
    tokenizeEncoded(line, hasEOL, state) {
        if (line.length >= this._maxTokenizationLineLength.get()) {
            return nullTokenizeEncoded(this._encodedLanguageId, state);
        }
        return this._actual.tokenizeEncoded(line, hasEOL, state);
    }
    createBackgroundTokenizer(textModel, store) {
        if (this._actual.createBackgroundTokenizer) {
            return this._actual.createBackgroundTokenizer(textModel, store);
        }
        else {
            return undefined;
        }
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateWorkerTokenizer.js














class TextMateWorkerTokenizer extends MirrorTextModel {
    constructor(uri, lines, eol, versionId, _host, _languageId, _encodedLanguageId, maxTokenizationLineLength) {
        super(uri, lines, eol, versionId);
        this._host = _host;
        this._languageId = _languageId;
        this._encodedLanguageId = _encodedLanguageId;
        this._tokenizerWithStateStore = null;
        this._isDisposed = false;
        this._maxTokenizationLineLength = observableValue_observableValue(this, -1);
        this._tokenizeDebouncer = ( new RunOnceScheduler(() => this._tokenize(), 10));
        this._maxTokenizationLineLength.set(maxTokenizationLineLength, undefined);
        this._resetTokenization();
    }
    dispose() {
        this._isDisposed = true;
        super.dispose();
    }
    onLanguageId(languageId, encodedLanguageId) {
        this._languageId = languageId;
        this._encodedLanguageId = encodedLanguageId;
        this._resetTokenization();
    }
    onEvents(e) {
        super.onEvents(e);
        this._tokenizerWithStateStore?.store.acceptChanges(e.changes);
        this._tokenizeDebouncer.schedule();
    }
    acceptMaxTokenizationLineLength(maxTokenizationLineLength) {
        this._maxTokenizationLineLength.set(maxTokenizationLineLength, undefined);
    }
    retokenize(startLineNumber, endLineNumberExclusive) {
        if (this._tokenizerWithStateStore) {
            this._tokenizerWithStateStore.store.invalidateEndStateRange(( new lineRange_LineRange(startLineNumber, endLineNumberExclusive)));
            this._tokenizeDebouncer.schedule();
        }
    }
    async _resetTokenization() {
        this._tokenizerWithStateStore = null;
        const languageId = this._languageId;
        const encodedLanguageId = this._encodedLanguageId;
        const r = await this._host.getOrCreateGrammar(languageId, encodedLanguageId);
        if (this._isDisposed || languageId !== this._languageId || encodedLanguageId !== this._encodedLanguageId || !r) {
            return;
        }
        if (r.grammar) {
            const tokenizationSupport = ( new TokenizationSupportWithLineLimit(this._encodedLanguageId, ( new TextMateTokenizationSupport(
                r.grammar,
                r.initialState,
                false,
                undefined,
                () => false,
                (timeMs, lineLength, isRandomSample) => {
                    this._host.reportTokenizationTime(timeMs, languageId, r.sourceExtensionId, lineLength, isRandomSample);
                },
                false
            )), lifecycle_Disposable.None, this._maxTokenizationLineLength));
            this._tokenizerWithStateStore = ( new TokenizerWithStateStore(this._lines.length, tokenizationSupport));
        }
        else {
            this._tokenizerWithStateStore = null;
        }
        this._tokenize();
    }
    async _tokenize() {
        if (this._isDisposed || !this._tokenizerWithStateStore) {
            return;
        }
        if (!this._diffStateStacksRefEqFn) {
            const { diffStateStacksRefEq } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4217, 19)).then(module => module.default ?? module);
            this._diffStateStacksRefEqFn = diffStateStacksRefEq;
        }
        const startTime = ( new Date()).getTime();
        while (true) {
            let tokenizedLines = 0;
            const tokenBuilder = ( new contiguousMultilineTokensBuilder_ContiguousMultilineTokensBuilder());
            const stateDeltaBuilder = ( new StateDeltaBuilder());
            while (true) {
                const lineToTokenize = this._tokenizerWithStateStore.getFirstInvalidLine();
                if (lineToTokenize === null || tokenizedLines > 200) {
                    break;
                }
                tokenizedLines++;
                const text = this._lines[lineToTokenize.lineNumber - 1];
                const r = this._tokenizerWithStateStore.tokenizationSupport.tokenizeEncoded(text, true, lineToTokenize.startState);
                if (this._tokenizerWithStateStore.store.setEndState(lineToTokenize.lineNumber, r.endState)) {
                    const delta = this._diffStateStacksRefEqFn(lineToTokenize.startState, r.endState);
                    stateDeltaBuilder.setState(lineToTokenize.lineNumber, delta);
                }
                else {
                    stateDeltaBuilder.setState(lineToTokenize.lineNumber, null);
                }
                LineTokens.convertToEndOffset(r.tokens, text.length);
                tokenBuilder.add(lineToTokenize.lineNumber, r.tokens);
                const deltaMs = ( new Date()).getTime() - startTime;
                if (deltaMs > 20) {
                    break;
                }
            }
            if (tokenizedLines === 0) {
                break;
            }
            const stateDeltas = stateDeltaBuilder.getStateDeltas();
            this._host.setTokensAndStates(this._versionId, tokenBuilder.serialize(), stateDeltas);
            const deltaMs = ( new Date()).getTime() - startTime;
            if (deltaMs > 20) {
                platform_setTimeout0(() => this._tokenize());
                return;
            }
        }
    }
}
class StateDeltaBuilder {
    constructor() {
        this._lastStartLineNumber = -1;
        this._stateDeltas = [];
    }
    setState(lineNumber, stackDiff) {
        if (lineNumber === this._lastStartLineNumber + 1) {
            this._stateDeltas[this._stateDeltas.length - 1].stateDeltas.push(stackDiff);
        }
        else {
            this._stateDeltas.push({ startLineNumber: lineNumber, stateDeltas: [stackDiff] });
        }
        this._lastStartLineNumber = lineNumber;
    }
    getStateDeltas() {
        return this._stateDeltas;
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateWorkerHost.js


class TextMateWorkerHost {
    static { this.CHANNEL_NAME = 'textMateWorkerHost'; }
    static getChannel(workerServer) {
        return workerServer.getChannel(TextMateWorkerHost.CHANNEL_NAME);
    }
    static setChannel(workerClient, obj) {
        workerClient.setChannel(TextMateWorkerHost.CHANNEL_NAME, obj);
    }
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.worker.js






function create(workerServer) {
    return ( new TextMateTokenizationWorker(workerServer));
}
class TextMateTokenizationWorker {
    constructor(workerServer) {
        this._models = ( new Map());
        this._grammarCache = [];
        this._grammarFactory = Promise.resolve(null);
        this._host = TextMateWorkerHost.getChannel(workerServer);
    }
    async $init(_createData) {
        const grammarDefinitions = ( _createData.grammarDefinitions.map((def) => {
            return {
                location: uri_URI.revive(def.location),
                language: def.language,
                scopeName: def.scopeName,
                embeddedLanguages: def.embeddedLanguages,
                tokenTypes: def.tokenTypes,
                injectTo: def.injectTo,
                balancedBracketSelectors: def.balancedBracketSelectors,
                unbalancedBracketSelectors: def.unbalancedBracketSelectors,
                sourceExtensionId: def.sourceExtensionId,
            };
        }));
        this._grammarFactory = this._loadTMGrammarFactory(grammarDefinitions, _createData.onigurumaWASMUri);
    }
    async _loadTMGrammarFactory(grammarDefinitions, onigurumaWASMUri) {
        const vscodeTextmate = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4217, 19)).then(module => module.default ?? module);
        const vscodeOniguruma = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6486, 19)).then(module => module.default ?? module);
        const response = await fetch(onigurumaWASMUri);
        const bytes = await response.arrayBuffer();
        await vscodeOniguruma.loadWASM(bytes);
        const onigLib = Promise.resolve({
            createOnigScanner: (sources) => vscodeOniguruma.createOnigScanner(sources),
            createOnigString: (str) => vscodeOniguruma.createOnigString(str)
        });
        return ( new TMGrammarFactory({
            logTrace: (msg) => { },
            logError: (msg, err) => console.error(msg, err),
            readFile: (resource) => this._host.$readFile(resource)
        }, grammarDefinitions, vscodeTextmate, onigLib));
    }
    $acceptNewModel(data) {
        const uri = uri_URI.revive(data.uri);
        const that = this;
        this._models.set(data.controllerId, ( new TextMateWorkerTokenizer(uri, data.lines, data.EOL, data.versionId, {
            async getOrCreateGrammar(languageId, encodedLanguageId) {
                const grammarFactory = await that._grammarFactory;
                if (!grammarFactory) {
                    return Promise.resolve(null);
                }
                if (!that._grammarCache[encodedLanguageId]) {
                    that._grammarCache[encodedLanguageId] = grammarFactory.createGrammar(languageId, encodedLanguageId);
                }
                return that._grammarCache[encodedLanguageId];
            },
            setTokensAndStates(versionId, tokens, stateDeltas) {
                that._host.$setTokensAndStates(data.controllerId, versionId, tokens, stateDeltas);
            },
            reportTokenizationTime(timeMs, languageId, sourceExtensionId, lineLength, isRandomSample) {
                that._host.$reportTokenizationTime(timeMs, languageId, sourceExtensionId, lineLength, isRandomSample);
            },
        }, data.languageId, data.encodedLanguageId, data.maxTokenizationLineLength)));
    }
    $acceptModelChanged(controllerId, e) {
        this._models.get(controllerId).onEvents(e);
    }
    $retokenize(controllerId, startLineNumber, endLineNumberExclusive) {
        this._models.get(controllerId).retokenize(startLineNumber, endLineNumberExclusive);
    }
    $acceptModelLanguageChanged(controllerId, newLanguageId, newEncodedLanguageId) {
        this._models.get(controllerId).onLanguageId(newLanguageId, newEncodedLanguageId);
    }
    $acceptRemovedModel(controllerId) {
        const model = this._models.get(controllerId);
        if (model) {
            model.dispose();
            this._models.delete(controllerId);
        }
    }
    async $acceptTheme(theme, colorMap) {
        const grammarFactory = await this._grammarFactory;
        grammarFactory?.setTheme(theme, colorMap);
    }
    $acceptMaxTokenizationLineLength(controllerId, value) {
        this._models.get(controllerId).acceptMaxTokenizationLineLength(value);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/worker/webWorker.js








const DEFAULT_CHANNEL = 'default';
const INITIALIZE = '$initialize';
let webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!isWeb) {
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Request"] = 0] = "Request";
    MessageType[MessageType["Reply"] = 1] = "Reply";
    MessageType[MessageType["SubscribeEvent"] = 2] = "SubscribeEvent";
    MessageType[MessageType["Event"] = 3] = "Event";
    MessageType[MessageType["UnsubscribeEvent"] = 4] = "UnsubscribeEvent";
})(MessageType || (MessageType = {}));
class RequestMessage {
    constructor(vsWorker, req, channel, method, args) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.channel = channel;
        this.method = method;
        this.args = args;
        this.type = MessageType.Request;
    }
}
class ReplyMessage {
    constructor(vsWorker, seq, res, err) {
        this.vsWorker = vsWorker;
        this.seq = seq;
        this.res = res;
        this.err = err;
        this.type = MessageType.Reply;
    }
}
class SubscribeEventMessage {
    constructor(vsWorker, req, channel, eventName, arg) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.channel = channel;
        this.eventName = eventName;
        this.arg = arg;
        this.type = MessageType.SubscribeEvent;
    }
}
class EventMessage {
    constructor(vsWorker, req, event) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.event = event;
        this.type = MessageType.Event;
    }
}
class UnsubscribeEventMessage {
    constructor(vsWorker, req) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.type = MessageType.UnsubscribeEvent;
    }
}
class WebWorkerProtocol {
    constructor(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
        this._pendingEmitters = ( new Map());
        this._pendingEvents = ( new Map());
    }
    setWorkerId(workerId) {
        this._workerId = workerId;
    }
    sendMessage(channel, method, args) {
        const req = String(++this._lastSentReq);
        return ( new Promise((resolve, reject) => {
            this._pendingReplies[req] = {
                resolve: resolve,
                reject: reject
            };
            this._send(( new RequestMessage(this._workerId, req, channel, method, args)));
        }));
    }
    listen(channel, eventName, arg) {
        let req = null;
        const emitter = ( new Emitter({
            onWillAddFirstListener: () => {
                req = String(++this._lastSentReq);
                this._pendingEmitters.set(req, emitter);
                this._send(( new SubscribeEventMessage(this._workerId, req, channel, eventName, arg)));
            },
            onDidRemoveLastListener: () => {
                this._pendingEmitters.delete(req);
                this._send(( new UnsubscribeEventMessage(this._workerId, req)));
                req = null;
            }
        }));
        return emitter.event;
    }
    handleMessage(message) {
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    }
    createProxyToRemoteChannel(channel, sendMessageBarrier) {
        const handler = {
            get: (target, name) => {
                if (typeof name === 'string' && !target[name]) {
                    if (propertyIsDynamicEvent(name)) {
                        target[name] = (arg) => {
                            return this.listen(channel, name, arg);
                        };
                    }
                    else if (propertyIsEvent(name)) {
                        target[name] = this.listen(channel, name, undefined);
                    }
                    else if (name.charCodeAt(0) === charCode_CharCode.DollarSign) {
                        target[name] = async (...myArgs) => {
                            await sendMessageBarrier?.();
                            return this.sendMessage(channel, name, myArgs);
                        };
                    }
                }
                return target[name];
            }
        };
        return ( new Proxy(Object.create(null), handler));
    }
    _handleMessage(msg) {
        switch (msg.type) {
            case MessageType.Reply:
                return this._handleReplyMessage(msg);
            case MessageType.Request:
                return this._handleRequestMessage(msg);
            case MessageType.SubscribeEvent:
                return this._handleSubscribeEventMessage(msg);
            case MessageType.Event:
                return this._handleEventMessage(msg);
            case MessageType.UnsubscribeEvent:
                return this._handleUnsubscribeEventMessage(msg);
        }
    }
    _handleReplyMessage(replyMessage) {
        if (!this._pendingReplies[replyMessage.seq]) {
            console.warn('Got reply to unknown seq');
            return;
        }
        const reply = this._pendingReplies[replyMessage.seq];
        delete this._pendingReplies[replyMessage.seq];
        if (replyMessage.err) {
            let err = replyMessage.err;
            if (replyMessage.err.$isError) {
                err = ( new Error());
                err.name = replyMessage.err.name;
                err.message = replyMessage.err.message;
                err.stack = replyMessage.err.stack;
            }
            reply.reject(err);
            return;
        }
        reply.resolve(replyMessage.res);
    }
    _handleRequestMessage(requestMessage) {
        const req = requestMessage.req;
        const result = this._handler.handleMessage(requestMessage.channel, requestMessage.method, requestMessage.args);
        result.then((r) => {
            this._send(( new ReplyMessage(this._workerId, req, r, undefined)));
        }, (e) => {
            if (e.detail instanceof Error) {
                e.detail = transformErrorForSerialization(e.detail);
            }
            this._send(( new ReplyMessage(this._workerId, req, undefined, transformErrorForSerialization(e))));
        });
    }
    _handleSubscribeEventMessage(msg) {
        const req = msg.req;
        const disposable = this._handler.handleEvent(msg.channel, msg.eventName, msg.arg)((event) => {
            this._send(( new EventMessage(this._workerId, req, event)));
        });
        this._pendingEvents.set(req, disposable);
    }
    _handleEventMessage(msg) {
        if (!( this._pendingEmitters.has(msg.req))) {
            console.warn('Got event for unknown req');
            return;
        }
        this._pendingEmitters.get(msg.req).fire(msg.event);
    }
    _handleUnsubscribeEventMessage(msg) {
        if (!( this._pendingEvents.has(msg.req))) {
            console.warn('Got unsubscribe for unknown req');
            return;
        }
        this._pendingEvents.get(msg.req).dispose();
        this._pendingEvents.delete(msg.req);
    }
    _send(msg) {
        const transfer = [];
        if (msg.type === MessageType.Request) {
            for (let i = 0; i < msg.args.length; i++) {
                if (msg.args[i] instanceof ArrayBuffer) {
                    transfer.push(msg.args[i]);
                }
            }
        }
        else if (msg.type === MessageType.Reply) {
            if (msg.res instanceof ArrayBuffer) {
                transfer.push(msg.res);
            }
        }
        this._handler.sendMessage(msg, transfer);
    }
}
class WebWorkerClient extends lifecycle_Disposable {
    constructor(worker) {
        super();
        this._localChannels = ( new Map());
        this._remoteChannels = ( new Map());
        this._worker = this._register(worker);
        this._register(this._worker.onMessage((msg) => {
            this._protocol.handleMessage(msg);
        }));
        this._register(this._worker.onError((err) => {
            logOnceWebWorkerWarning(err);
            errors_onUnexpectedError(err);
        }));
        this._protocol = ( new WebWorkerProtocol({
            sendMessage: (msg, transfer) => {
                this._worker.postMessage(msg, transfer);
            },
            handleMessage: (channel, method, args) => {
                return this._handleMessage(channel, method, args);
            },
            handleEvent: (channel, eventName, arg) => {
                return this._handleEvent(channel, eventName, arg);
            }
        }));
        this._protocol.setWorkerId(this._worker.getId());
        this._onModuleLoaded = this._protocol.sendMessage(DEFAULT_CHANNEL, INITIALIZE, [
            this._worker.getId(),
        ]);
        this.proxy = this._protocol.createProxyToRemoteChannel(DEFAULT_CHANNEL, async () => { await this._onModuleLoaded; });
        this._onModuleLoaded.catch((e) => {
            this._onError('Worker failed to load ', e);
        });
    }
    _handleMessage(channelName, method, args) {
        const channel = this._localChannels.get(channelName);
        if (!channel) {
            return Promise.reject(( new Error(`Missing channel ${channelName} on main thread`)));
        }
        if (typeof channel[method] !== 'function') {
            return Promise.reject(( new Error(`Missing method ${method} on main thread channel ${channelName}`)));
        }
        try {
            return Promise.resolve(channel[method].apply(channel, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _handleEvent(channelName, eventName, arg) {
        const channel = this._localChannels.get(channelName);
        if (!channel) {
            throw ( new Error(`Missing channel ${channelName} on main thread`));
        }
        if (propertyIsDynamicEvent(eventName)) {
            const event = channel[eventName].call(channel, arg);
            if (typeof event !== 'function') {
                throw ( new Error(
                    `Missing dynamic event ${eventName} on main thread channel ${channelName}.`
                ));
            }
            return event;
        }
        if (propertyIsEvent(eventName)) {
            const event = channel[eventName];
            if (typeof event !== 'function') {
                throw ( new Error(`Missing event ${eventName} on main thread channel ${channelName}.`));
            }
            return event;
        }
        throw ( new Error(`Malformed event name ${eventName}`));
    }
    setChannel(channel, handler) {
        this._localChannels.set(channel, handler);
    }
    getChannel(channel) {
        if (!( this._remoteChannels.has(channel))) {
            const inst = this._protocol.createProxyToRemoteChannel(channel, async () => { await this._onModuleLoaded; });
            this._remoteChannels.set(channel, inst);
        }
        return this._remoteChannels.get(channel);
    }
    _onError(message, error) {
        console.error(message);
        console.info(error);
    }
}
function propertyIsEvent(name) {
    return name[0] === 'o' && name[1] === 'n' && isUpperAsciiLetter(name.charCodeAt(2));
}
function propertyIsDynamicEvent(name) {
    return /^onDynamic/.test(name) && isUpperAsciiLetter(name.charCodeAt(9));
}
class WebWorkerServer {
    constructor(postMessage, requestHandlerFactory) {
        this._localChannels = ( new Map());
        this._remoteChannels = ( new Map());
        this._protocol = ( new WebWorkerProtocol({
            sendMessage: (msg, transfer) => {
                postMessage(msg, transfer);
            },
            handleMessage: (channel, method, args) => this._handleMessage(channel, method, args),
            handleEvent: (channel, eventName, arg) => this._handleEvent(channel, eventName, arg)
        }));
        this.requestHandler = requestHandlerFactory(this);
    }
    onmessage(msg) {
        this._protocol.handleMessage(msg);
    }
    _handleMessage(channel, method, args) {
        if (channel === DEFAULT_CHANNEL && method === INITIALIZE) {
            return this.initialize(args[0]);
        }
        const requestHandler = (channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel));
        if (!requestHandler) {
            return Promise.reject(( new Error(`Missing channel ${channel} on worker thread`)));
        }
        if (typeof requestHandler[method] !== 'function') {
            return Promise.reject(( new Error(`Missing method ${method} on worker thread channel ${channel}`)));
        }
        try {
            return Promise.resolve(requestHandler[method].apply(requestHandler, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _handleEvent(channel, eventName, arg) {
        const requestHandler = (channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel));
        if (!requestHandler) {
            throw ( new Error(`Missing channel ${channel} on worker thread`));
        }
        if (propertyIsDynamicEvent(eventName)) {
            const event = requestHandler[eventName].call(requestHandler, arg);
            if (typeof event !== 'function') {
                throw ( new Error(`Missing dynamic event ${eventName} on request handler.`));
            }
            return event;
        }
        if (propertyIsEvent(eventName)) {
            const event = requestHandler[eventName];
            if (typeof event !== 'function') {
                throw ( new Error(`Missing event ${eventName} on request handler.`));
            }
            return event;
        }
        throw ( new Error(`Malformed event name ${eventName}`));
    }
    setChannel(channel, handler) {
        this._localChannels.set(channel, handler);
    }
    getChannel(channel) {
        if (!( this._remoteChannels.has(channel))) {
            const inst = this._protocol.createProxyToRemoteChannel(channel);
            this._remoteChannels.set(channel, inst);
        }
        return this._remoteChannels.get(channel);
    }
    async initialize(workerId) {
        this._protocol.setWorkerId(workerId);
    }
}



;// ./node_modules/@codingame/monaco-vscode-api/vscode/src/vs/base/common/worker/webWorkerBootstrap.js



let webWorkerBootstrap_initialized = false;
function initialize(factory) {
    if (webWorkerBootstrap_initialized) {
        throw ( new Error('WebWorker already initialized!'));
    }
    webWorkerBootstrap_initialized = true;
    const webWorkerServer = ( new WebWorkerServer(
        msg => globalThis.postMessage(msg),
        (workerServer) => factory(workerServer)
    ));
    globalThis.onmessage = (e) => {
        webWorkerServer.onmessage(e.data);
    };
    return webWorkerServer;
}
function bootstrapWebWorker(factory) {
    globalThis.onmessage = (_e) => {
        if (!webWorkerBootstrap_initialized) {
            initialize(factory);
        }
    };
}



;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/vscode/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.workerMain.js




bootstrapWebWorker(create);

;// ./node_modules/@codingame/monaco-vscode-textmate-service-override/worker.js



})();

/******/ })()
;