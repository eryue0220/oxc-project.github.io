import{_ as e,c as n,j as i,a as s,I as t,a4 as l,o as h,E as p}from"./chunks/framework.D6UG3LSr.js";const F=JSON.parse('{"title":"jsdoc/require-yields","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/require-yields.md","filePath":"docs/guide/usage/linter/rules/jsdoc/require-yields.md"}'),d={name:"docs/guide/usage/linter/rules/jsdoc/require-yields.md"},r={id:"jsdoc-require-yields",tabindex:"-1"},k=i("a",{class:"header-anchor",href:"#jsdoc-require-yields","aria-label":'Permalink to "jsdoc/require-yields <Badge type="info" text="Correctness" />"'},"​",-1),o=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires that yields are documented. Will also report if multiple <code>@yields</code> tags are present.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The rule is intended to prevent the omission of <code>@yields</code> tags when they are necessary.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Passing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@yields</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Foo */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Failing</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@yields</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {undefined}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@yields</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {void}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div>`,7);function c(y,g,u,E,_,A){const a=p("Badge");return h(),n("div",null,[i("h1",r,[s("jsdoc/require-yields "),t(a,{type:"info",text:"Correctness"}),s(),k]),o])}const f=e(d,[["render",c]]);export{F as __pageData,f as default};
