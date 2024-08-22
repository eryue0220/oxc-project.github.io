import{_ as r,c as l,j as e,a,I as s,w as i,a4 as d,E as o,o as h}from"./chunks/framework.D6UG3LSr.js";const T=JSON.parse('{"title":"eslint/no-compare-neg-zero","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md","filePath":"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md"},p={id:"eslint-no-compare-neg-zero",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#eslint-no-compare-neg-zero","aria-label":'Permalink to "eslint/no-compare-neg-zero <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},g=e("span",{class:"emoji"},"✅",-1),m=e("span",{class:"emoji"},"🛠️💡",-1),k=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow comparing against -0</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function f(b,x,y,E,v,w){const n=o("Badge"),t=o("Alert");return h(),l("div",null,[e("h1",p,[a("eslint/no-compare-neg-zero "),s(n,{type:"info",text:"Correctness"}),a(),_]),e("div",u,[s(t,{class:"default-on",type:"success"},{default:i(()=>[g,a(" This rule is turned on by default. ")]),_:1}),s(t,{class:"fix",type:"info"},{default:i(()=>[m,a(" An auto-fix and a suggestion are available for this rule for some violations. ")]),_:1})]),k])}const A=r(c,[["render",f]]);export{T as __pageData,A as default};
