import{_ as l,c as o,j as s,a as e,I as a,w as h,a4 as c,E as t,o as r}from"./chunks/framework.D6UG3LSr.js";const T=JSON.parse('{"title":"eslint/no-useless-catch","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-useless-catch.md","filePath":"docs/guide/usage/linter/rules/eslint/no-useless-catch.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-useless-catch.md"},p={id:"eslint-no-useless-catch",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#eslint-no-useless-catch","aria-label":'Permalink to "eslint/no-useless-catch <Badge type="info" text="Correctness" />"'},"​",-1),k={class:"rule-meta"},_=s("span",{class:"emoji"},"✅",-1),g=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow unnecessary catch clauses</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>A catch clause that only rethrows the original error is redundant, and has no effect on the runtime behavior of the program. These redundant clauses can be a source of confusion and code bloat, so it’s better to disallow these unnecessary catch clauses.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingThatMightThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function E(m,y,b,f,x,v){const i=t("Badge"),n=t("Alert");return r(),o("div",null,[s("h1",p,[e("eslint/no-useless-catch "),a(i,{type:"info",text:"Correctness"}),e(),u]),s("div",k,[a(n,{class:"default-on",type:"success"},{default:h(()=>[_,e(" This rule is turned on by default. ")]),_:1})]),g])}const C=l(d,[["render",E]]);export{T as __pageData,C as default};
