import{_ as t,c as i,j as s,a as e,I as o,a4 as n,o as l,E as r}from"./chunks/framework.D6UG3LSr.js";const x=JSON.parse('{"title":"eslint/no-console","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-console.md","filePath":"docs/guide/usage/linter/rules/eslint/no-console.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-console.md"},c={id:"eslint-no-console",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#eslint-no-console","aria-label":'Permalink to "eslint/no-console <Badge type="info" text="Restriction" />"'},"​",-1),p=n('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows using the global console object.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In JavaScript that is designed to be executed in the browser, it’s considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;here&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7);function u(_,g,b,k,m,E){const a=r("Badge");return l(),i("div",null,[s("h1",c,[e("eslint/no-console "),o(a,{type:"info",text:"Restriction"}),e(),h]),p])}const v=t(d,[["render",u]]);export{x as __pageData,v as default};
