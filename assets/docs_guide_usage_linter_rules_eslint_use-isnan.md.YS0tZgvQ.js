import{_ as o,c as h,j as s,a,I as e,w as t,a4 as r,E as n,o as p}from"./chunks/framework.D6UG3LSr.js";const F=JSON.parse('{"title":"eslint/use-isnan","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/use-isnan.md","filePath":"docs/guide/usage/linter/rules/eslint/use-isnan.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/use-isnan.md"},c={id:"eslint-use-isnan",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#eslint-use-isnan","aria-label":'Permalink to "eslint/use-isnan <Badge type="info" text="Correctness" />"'},"​",-1),k={class:"rule-meta"},N=s("span",{class:"emoji"},"✅",-1),g=s("span",{class:"emoji"},"🛠️",-1),_=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows checking against NaN without using isNaN() call.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In JavaScript, NaN is a special value of the Number type. It’s used to represent any of the “not-a-number” values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic.</p><p>Because NaN is unique in JavaScript by not being equal to anything, including itself, the results of comparisons to NaN are confusing:</p><ul><li>NaN === NaN or NaN == NaN evaluate to false</li><li>NaN !== NaN or NaN != NaN evaluate to true</li></ul><p>Therefore, use Number.isNaN() or global isNaN() functions to test whether a value is NaN.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,9);function E(f,y,m,b,v,x){const l=n("Badge"),i=n("Alert");return p(),h("div",null,[s("h1",c,[a("eslint/use-isnan "),e(l,{type:"info",text:"Correctness"}),a(),u]),s("div",k,[e(i,{class:"default-on",type:"success"},{default:t(()=>[N,a(" This rule is turned on by default. ")]),_:1}),e(i,{class:"fix",type:"info"},{default:t(()=>[g,a(" An auto-fix is available for this rule for some violations. ")]),_:1})]),_])}const B=o(d,[["render",E]]);export{F as __pageData,B as default};
