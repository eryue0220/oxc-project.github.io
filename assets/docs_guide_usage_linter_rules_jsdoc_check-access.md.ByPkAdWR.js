import{_ as i,c as t,j as a,a as s,I as c,a4 as n,o as l,E as o}from"./chunks/framework.D6UG3LSr.js";const b=JSON.parse('{"title":"jsdoc/check-access","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/check-access.md","filePath":"docs/guide/usage/linter/rules/jsdoc/check-access.md"}'),h={name:"docs/guide/usage/linter/rules/jsdoc/check-access.md"},p={id:"jsdoc-check-access",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#jsdoc-check-access","aria-label":'Permalink to "jsdoc/check-access <Badge type="info" text="Restriction" />"'},"​",-1),r=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Checks that <code>@access</code> tags use one of the following values:</p><ul><li>&quot;package&quot;, &quot;private&quot;, &quot;protected&quot;, &quot;public&quot;</li></ul><p>Also reports:</p><ul><li>Mixing of <code>@access</code> with <code>@public</code>, <code>@private</code>, <code>@protected</code>, or <code>@package</code> on the same doc block.</li><li>Use of multiple instances of <code>@access</code> (or the <code>@public</code>, etc) on the same doc block.</li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>It is important to have a consistent way of specifying access levels.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Passing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Failing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> @public</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> invalidlevel */</span></span></code></pre></div>`,10);function k(u,g,_,A,y,D){const e=o("Badge");return l(),t("div",null,[a("h1",p,[s("jsdoc/check-access "),c(e,{type:"info",text:"Restriction"}),s(),d]),r])}const v=i(h,[["render",k]]);export{b as __pageData,v as default};
