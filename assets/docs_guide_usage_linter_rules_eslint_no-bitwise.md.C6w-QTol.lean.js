import{_ as t,c as o,j as a,a as i,G as r,a2 as n,B as l,o as d}from"./chunks/framework.DlAqvapY.js";const x=JSON.parse('{"title":"eslint/no-bitwise","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-bitwise.md","filePath":"docs/guide/usage/linter/rules/eslint/no-bitwise.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-bitwise.md"},p={id:"eslint-no-bitwise",tabindex:"-1"};function c(u,e,b,m,k,g){const s=l("Badge");return d(),o("div",null,[a("h1",p,[e[0]||(e[0]=i("eslint/no-bitwise ")),r(s,{type:"info",text:"Restriction"}),e[1]||(e[1]=i()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-no-bitwise","aria-label":'Permalink to "eslint/no-bitwise <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=n('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow bitwise operators</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The use of bitwise operators in JavaScript is very rare and often <code>&amp;</code> or <code>|</code> is simply a mistyped <code>&amp;&amp;</code> or <code>||</code>, which will lead to unexpected behavior.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_bitwise.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9))])}const w=t(h,[["render",c]]);export{x as __pageData,w as default};
