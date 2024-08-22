import{_ as o,c as l,j as s,a as e,I as a,w as r,a4 as h,E as t,o as c}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"eslint/no-ex-assign","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-ex-assign.md","filePath":"docs/guide/usage/linter/rules/eslint/no-ex-assign.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-ex-assign.md"},p={id:"eslint-no-ex-assign",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-ex-assign","aria-label":'Permalink to "eslint/no-ex-assign <Badge type="info" text="Correctness" />"'},"​",-1),g={class:"rule-meta"},u=s("span",{class:"emoji"},"✅",-1),_=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow reassigning exceptions in catch clauses</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>If a catch clause in a try statement accidentally (or purposely) assigns another value to the exception parameter, it is impossible to refer to the error from that point on. Since there is no arguments object to offer alternative access to this data, assignment of the parameter is absolutely destructive.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function m(E,x,y,f,b,v){const i=t("Badge"),n=t("Alert");return c(),l("div",null,[s("h1",p,[e("eslint/no-ex-assign "),a(i,{type:"info",text:"Correctness"}),e(),k]),s("div",g,[a(n,{class:"default-on",type:"success"},{default:r(()=>[u,e(" This rule is turned on by default. ")]),_:1})]),_])}const D=o(d,[["render",m]]);export{C as __pageData,D as default};
