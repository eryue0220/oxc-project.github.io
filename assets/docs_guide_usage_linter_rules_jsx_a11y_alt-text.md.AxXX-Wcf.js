import{_ as s,c as i,j as e,a as t,I as n,a4 as o,o as l,E as h}from"./chunks/framework.D6UG3LSr.js";const E=JSON.parse('{"title":"jsx_a11y/alt-text","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md"}'),r={name:"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md"},c={id:"jsx-a11y-alt-text",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#jsx-a11y-alt-text","aria-label":'Permalink to "jsx_a11y/alt-text <Badge type="info" text="Correctness" />"'},"​",-1),p=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that all elements that require alternative text have meaningful information to relay back to the end user.</p><h3 id="why-is-this-necessary" tabindex="-1">Why is this necessary? <a class="header-anchor" href="#why-is-this-necessary" aria-label="Permalink to &quot;Why is this necessary?&quot;">​</a></h3><p>Alternative text is a critical component of accessibility for screen reader users, enabling them to understand the content and function of an element.</p><h3 id="what-it-checks" tabindex="-1">What it checks <a class="header-anchor" href="#what-it-checks" aria-label="Permalink to &quot;What it checks&quot;">​</a></h3><p>This rule checks for alternative text on the following elements: <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>, <code>&lt;input type=&quot;image&quot;&gt;</code>, and <code>&lt;object&gt;</code>.</p><h3 id="how-to-fix-it" tabindex="-1">How to fix it <a class="header-anchor" href="#how-to-fix-it" aria-label="Permalink to &quot;How to fix it&quot;">​</a></h3><p>Ensure that the <code>alt</code> attribute is present and contains meaningful text that describes the element&#39;s content or purpose.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flower.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A close-up of a white daisy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flower.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>',14);function k(u,g,x,m,y,f){const a=h("Badge");return l(),i("div",null,[e("h1",c,[t("jsx_a11y/alt-text "),n(a,{type:"info",text:"Correctness"}),t(),d]),p])}const b=s(r,[["render",k]]);export{E as __pageData,b as default};
