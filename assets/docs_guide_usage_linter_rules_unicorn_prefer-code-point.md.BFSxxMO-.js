import{_ as o,c as r,j as e,a as i,I as s,w as d,a4 as l,E as a,o as p}from"./chunks/framework.D6UG3LSr.js";const F=JSON.parse('{"title":"unicorn/prefer-code-point","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md"},c={id:"unicorn-prefer-code-point",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#unicorn-prefer-code-point","aria-label":'Permalink to "unicorn/prefer-code-point <Badge type="info" text="Pedantic" />"'},"​",-1),g={class:"rule-meta"},f=e("span",{class:"emoji"},"🛠️",-1),E=l(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefers usage of <code>String.prototype.codePointAt</code> over <code>String.prototype.charCodeAt</code>. Prefers usage of <code>String.fromCodePoint</code> over <code>String.fromCharCode</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Unicode is better supported in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt" target="_blank" rel="noreferrer"><code>String#codePointAt()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank" rel="noreferrer"><code>String.fromCodePoint()</code></a>.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#compared_to_fromcharcode" target="_blank" rel="noreferrer">Difference between <code>String.fromCodePoint()</code> and <code>String.fromCharCode()</code></a></p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bad</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charCodeAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1f984</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// good</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codePointAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCodePoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1f984</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,7);function _(u,m,y,C,b,S){const t=a("Badge"),n=a("Alert");return p(),r("div",null,[e("h1",c,[i("unicorn/prefer-code-point "),s(t,{type:"info",text:"Pedantic"}),i(),k]),e("div",g,[s(n,{class:"fix",type:"info"},{default:d(()=>[f,i(" An auto-fix is available for this rule. ")]),_:1})]),E])}const v=o(h,[["render",_]]);export{F as __pageData,v as default};
