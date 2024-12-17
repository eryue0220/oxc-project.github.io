import{_ as n,c as t,j as e,a,G as l,a2 as o,B as r,o as h}from"./chunks/framework.Cm5JpC29.js";const b=JSON.parse('{"title":"typescript/no-non-null-asserted-nullish-coalescing","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.md"}'),p={name:"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.md"},d={id:"typescript-no-non-null-asserted-nullish-coalescing",tabindex:"-1"};function c(u,s,k,g,y,f){const i=r("Badge");return h(),t("div",null,[e("h1",d,[s[0]||(s[0]=a("typescript/no-non-null-asserted-nullish-coalescing ")),l(i,{type:"info",text:"Restriction"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#typescript-no-non-null-asserted-nullish-coalescing","aria-label":'Permalink to "typescript/no-non-null-asserted-nullish-coalescing <Badge type="info" text="Restriction" />"'},"​",-1))]),s[3]||(s[3]=o(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions in the left operand of a nullish coalescing operator.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The ?? nullish coalescing runtime operator allows providing a default value when dealing with null or undefined. Using a ! non-null assertion type operator in the left operand of a nullish coalescing operator is redundant, and likely a sign of programmer error or confusion over the two operators.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/36ebb3e7841818c238c44349d6cf859db4177d55/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_nullish_coalescing.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const m=n(p,[["render",c]]);export{b as __pageData,m as default};