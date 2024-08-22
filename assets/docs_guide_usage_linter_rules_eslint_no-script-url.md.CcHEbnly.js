import{_ as i,c as t,j as a,a as s,I as n,a4 as l,o as r,E as o}from"./chunks/framework.D6UG3LSr.js";const b=JSON.parse('{"title":"eslint/no-script-url","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-script-url.md","filePath":"docs/guide/usage/linter/rules/eslint/no-script-url.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-script-url.md"},h={id:"eslint-no-script-url",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#eslint-no-script-url","aria-label":'Permalink to "eslint/no-script-url <Badge type="info" text="Style" />"'},"​",-1),c=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow javascript: urls</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using javascript: URLs is considered by some as a form of eval. Code passed in javascript: URLs has to be parsed and evaluated by the browser in the same way that eval is processed.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-script-url: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;javascript:void(0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`javascript:void(0)\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,7);function u(k,_,g,m,E,v){const e=o("Badge");return r(),t("div",null,[a("h1",h,[s("eslint/no-script-url "),n(e,{type:"info",text:"Style"}),s(),d]),c])}const f=i(p,[["render",u]]);export{b as __pageData,f as default};
