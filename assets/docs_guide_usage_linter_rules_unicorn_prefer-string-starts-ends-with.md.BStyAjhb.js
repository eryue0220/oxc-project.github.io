import{_ as h,c as o,j as s,a as e,I as a,w as t,a4 as l,E as n,o as d}from"./chunks/framework.D6UG3LSr.js";const B=JSON.parse('{"title":"unicorn/prefer-string-starts-ends-with","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.md"},c={id:"unicorn-prefer-string-starts-ends-with",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#unicorn-prefer-string-starts-ends-with","aria-label":'Permalink to "unicorn/prefer-string-starts-ends-with <Badge type="info" text="Correctness" />"'},"​",-1),g={class:"rule-meta"},u=s("span",{class:"emoji"},"✅",-1),f=s("span",{class:"emoji"},"🛠️",-1),_=l(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" target="_blank" rel="noreferrer"><code>String#startsWith()</code></a> and <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank" rel="noreferrer"><code>String#endsWith()</code></a> over using a regex with <code>/^foo/</code> or <code>/foo$/</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>String#startsWith()</code> and <code>String#endsWith()</code> is more readable and performant as it does not need to parse a regex.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">abc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6);function E(y,F,b,m,x,C){const r=n("Badge"),i=n("Alert");return d(),o("div",null,[s("h1",c,[e("unicorn/prefer-string-starts-ends-with "),a(r,{type:"info",text:"Correctness"}),e(),k]),s("div",g,[a(i,{class:"default-on",type:"success"},{default:t(()=>[u,e(" This rule is turned on by default. ")]),_:1}),a(i,{class:"fix",type:"info"},{default:t(()=>[f,e(" An auto-fix is available for this rule. ")]),_:1})]),_])}const w=h(p,[["render",E]]);export{B as __pageData,w as default};
