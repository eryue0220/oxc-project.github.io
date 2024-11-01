import{_ as i,c as o,j as e,a as s,G as n,a2 as r,B as p,o as l}from"./chunks/framework.8qdJL5ht.js";const f=JSON.parse('{"title":"oxc/approx-constant","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/approx-constant.md","filePath":"docs/guide/usage/linter/rules/oxc/approx-constant.md"}'),h={name:"docs/guide/usage/linter/rules/oxc/approx-constant.md"},c={id:"oxc-approx-constant",tabindex:"-1"};function d(u,a,k,x,g,m){const t=p("Badge");return l(),o("div",null,[e("h1",c,[a[0]||(a[0]=s("oxc/approx-constant ")),n(t,{type:"info",text:"Suspicious"}),a[1]||(a[1]=s()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#oxc-approx-constant","aria-label":'Permalink to "oxc/approx-constant <Badge type="info" text="Suspicious" />"'},"​",-1))]),a[3]||(a[3]=r('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows the use of approximate constants, instead preferring the use of the constants in the <code>Math</code> object.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Approximate constants are not as accurate as the constants in the <code>Math</code> object.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> log10e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.434294</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> log10e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LOG10E</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/approx_constant.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const E=i(h,[["render",d]]);export{f as __pageData,E as default};
