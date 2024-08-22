import{_ as r,c as n,j as s,a,I as t,w as l,a4 as h,E as i,o as p}from"./chunks/framework.D6UG3LSr.js";const q=JSON.parse('{"title":"eslint/sort-imports","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/sort-imports.md","filePath":"docs/guide/usage/linter/rules/eslint/sort-imports.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/sort-imports.md"},c={id:"eslint-sort-imports",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-sort-imports","aria-label":'Permalink to "eslint/sort-imports <Badge type="info" text="Style" />"'},"​",-1),m={class:"rule-meta"},u=s("span",{class:"emoji"},"🛠️",-1),_=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule checks all import declarations and verifies that all imports are first sorted by the used member syntax and then alphabetically by the first member or alias name.</p><p>When declaring multiple imports, a sorted list of import declarations make it easier for developers to read the code and find necessary imports later.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { b, a, c } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bar.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,6);function g(E,f,y,b,x,v){const e=i("Badge"),o=i("Alert");return p(),n("div",null,[s("h1",c,[a("eslint/sort-imports "),t(e,{type:"info",text:"Style"}),a(),k]),s("div",m,[t(o,{class:"fix",type:"info"},{default:l(()=>[u,a(" An auto-fix is available for this rule for some violations. ")]),_:1})]),_])}const A=r(d,[["render",g]]);export{q as __pageData,A as default};
