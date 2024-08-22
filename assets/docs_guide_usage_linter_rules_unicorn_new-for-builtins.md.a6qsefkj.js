import{_ as a,c as t,j as i,a as s,I as n,a4 as o,o as d,E as h}from"./chunks/framework.D6UG3LSr.js";const w=JSON.parse('{"title":"unicorn/new-for-builtins","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md","filePath":"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md"}'),r={name:"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md"},l={id:"unicorn-new-for-builtins",tabindex:"-1"},c=i("a",{class:"header-anchor",href:"#unicorn-new-for-builtins","aria-label":'Permalink to "unicorn/new-for-builtins <Badge type="info" text="Pedantic" />"'},"​",-1),p=o(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of <code>new</code> for following builtins: <code>Object</code>, <code>Array</code>, <code>ArrayBuffer</code>, <code>BigInt64Array</code>, <code>BigUint64Array</code>, <code>DataView</code>, <code>Date</code>, <code>Error</code>, <code>Float32Array</code>, <code>Float64Array</code>, <code>Function</code>, <code>Int8Array</code>, <code>Int16Array</code>, <code>Int32Array</code>, <code>Map</code>, <code>WeakMap</code>, <code>Set</code>, <code>WeakSet</code>, <code>Promise</code>, <code>RegExp</code>, <code>Uint8Array</code>, <code>Uint16Array</code>, <code>Uint32Array</code>, <code>Uint8ClampedArray</code>, <code>SharedArrayBuffer</code>, <code>Proxy</code>, <code>WeakRef</code>, <code>FinalizationRegistry</code>.</p><p>Disallows the use of <code>new</code> for following builtins: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Symbol</code>, <code>BigInt</code>.</p><p>These should not use <code>new</code> as that would create object wrappers for the primitive values, which is not what you want. However, without <code>new</code> they can be useful for coercing a value to that type.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>They work the same, but <code>new</code> should be preferred for consistency with other constructors.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,9);function k(y,g,u,E,F,f){const e=h("Badge");return d(),t("div",null,[i("h1",l,[s("unicorn/new-for-builtins "),n(e,{type:"info",text:"Pedantic"}),s(),c]),p])}const A=a(r,[["render",k]]);export{w as __pageData,A as default};
