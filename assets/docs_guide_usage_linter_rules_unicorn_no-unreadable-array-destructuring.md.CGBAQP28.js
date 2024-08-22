import{_ as i,c as t,j as s,a,I as n,a4 as r,o as l,E as o}from"./chunks/framework.D6UG3LSr.js";const f=JSON.parse('{"title":"unicorn/no-unreadable-array-destructuring","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.md"},h={id:"unicorn-no-unreadable-array-destructuring",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#unicorn-no-unreadable-array-destructuring","aria-label":'Permalink to "unicorn/no-unreadable-array-destructuring <Badge type="info" text="Style" />"'},"​",-1),p=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow unreadable array destructuring</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Destructuring is very useful, but it can also make some code harder to read. This rule prevents ignoring consecutive values when destructuring from an array.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [, , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parts;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parts;</span></span></code></pre></div>`,7);function u(k,g,y,_,E,b){const e=o("Badge");return l(),t("div",null,[s("h1",h,[a("unicorn/no-unreadable-array-destructuring "),n(e,{type:"info",text:"Style"}),a(),c]),p])}const v=i(d,[["render",u]]);export{f as __pageData,v as default};
