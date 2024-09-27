import{_ as p,c as l,j as s,a as t,G as i,w as o,a2 as h,B as a,o as d}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"typescript/prefer-ts-expect-error","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.md","filePath":"docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.md"},k={id:"typescript-prefer-ts-expect-error",tabindex:"-1"},g={class:"rule-meta"};function u(f,e,y,m,x,b){const r=a("Badge"),n=a("Alert");return d(),l("div",null,[s("h1",k,[e[0]||(e[0]=t("typescript/prefer-ts-expect-error ")),i(r,{type:"info",text:"Pedantic"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-prefer-ts-expect-error","aria-label":'Permalink to "typescript/prefer-ts-expect-error <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",g,[i(n,{class:"fix",type:"info"},{default:o(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce using @ts-expect-error over @ts-ignore.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>TypeScript allows you to suppress all errors on a line by placing a comment starting with @ts-ignore or @ts-expect-error immediately before the erroring line. The two directives work the same, except @ts-expect-error causes a type error if placed before a line that&#39;s not erroring in the first place.</p><p>This means it&#39;s easy for @ts-ignores to be forgotten about, and remain in code even after the error they were suppressing is fixed. This is dangerous, as if a new error arises on that line it&#39;ll be suppressed by the forgotten about @ts-ignore, and so be missed.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @ts-ignore</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Explaining comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @ts-ignore */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> multiLine</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/prefer_ts_expect_error.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const D=p(c,[["render",u]]);export{F as __pageData,D as default};
