import{_ as l,c as o,j as e,a,I as s,w as r,a4 as h,E as t,o as d}from"./chunks/framework.D6UG3LSr.js";const w=JSON.parse('{"title":"eslint/no-eq-null","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-eq-null.md","filePath":"docs/guide/usage/linter/rules/eslint/no-eq-null.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-eq-null.md"},c={id:"eslint-no-eq-null",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#eslint-no-eq-null","aria-label":'Permalink to "eslint/no-eq-null <Badge type="info" text="Restriction" />"'},"​",-1),_={class:"rule-meta"},k=e("span",{class:"emoji"},"⚠️🛠️️",-1),g=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow null comparisons without type-checking operators.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Comparing to null without a type-checking operator (== or !=), can have unintended results as the comparison will evaluate to true when comparing to not just a null, but also an undefined value.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function m(f,E,b,y,x,q){const i=t("Badge"),n=t("Alert");return d(),o("div",null,[e("h1",c,[a("eslint/no-eq-null "),s(i,{type:"info",text:"Restriction"}),a(),u]),e("div",_,[s(n,{class:"fix",type:"info"},{default:r(()=>[k,a(" A dangerous auto-fix is available for this rule. ")]),_:1})]),g])}const C=l(p,[["render",m]]);export{w as __pageData,C as default};
