import{_ as l,c as o,j as s,a,I as e,w as h,a4 as d,E as i,o as c}from"./chunks/framework.D6UG3LSr.js";const B=JSON.parse('{"title":"unicorn/no-length-as-slice-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"}'),r={name:"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"},p={id:"unicorn-no-length-as-slice-end",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#unicorn-no-length-as-slice-end","aria-label":'Permalink to "unicorn/no-length-as-slice-end <Badge type="info" text="Restriction" />"'},"​",-1),g={class:"rule-meta"},u=s("span",{class:"emoji"},"🛠️",-1),_=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow using <code>length</code> as the end argument of a <code>slice</code> call.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Passing <code>length</code> as the end argument of a <code>slice</code> call is unnecessary and can be confusing.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, foo.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6);function E(m,f,y,b,x,C){const n=i("Badge"),t=i("Alert");return c(),o("div",null,[s("h1",p,[a("unicorn/no-length-as-slice-end "),e(n,{type:"info",text:"Restriction"}),a(),k]),s("div",g,[e(t,{class:"fix",type:"info"},{default:h(()=>[u,a(" An auto-fix is available for this rule. ")]),_:1})]),_])}const A=l(r,[["render",E]]);export{B as __pageData,A as default};
