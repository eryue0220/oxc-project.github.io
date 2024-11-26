import{_ as t,c as r,j as s,a,G as p,a2 as n,B as o,o as l}from"./chunks/framework.Cm5JpC29.js";const m=JSON.parse('{"title":"jsdoc/require-property-type","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/require-property-type.md","filePath":"docs/guide/usage/linter/rules/jsdoc/require-property-type.md"}'),h={name:"docs/guide/usage/linter/rules/jsdoc/require-property-type.md"},d={id:"jsdoc-require-property-type",tabindex:"-1"};function c(k,e,y,u,g,f){const i=o("Badge");return l(),r("div",null,[s("h1",d,[e[0]||(e[0]=a("jsdoc/require-property-type ")),p(i,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#jsdoc-require-property-type","aria-label":'Permalink to "jsdoc/require-property-type <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires that each <code>@property</code> tag has a type value (within curly brackets).</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The type of a property should be documented.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> foo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/jsdoc/require_property_type.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const D=t(h,[["render",c]]);export{m as __pageData,D as default};
