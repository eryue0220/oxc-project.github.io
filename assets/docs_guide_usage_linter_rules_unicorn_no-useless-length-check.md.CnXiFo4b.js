import{_ as o,c as r,j as e,a as s,I as a,w as l,a4 as h,E as t,o as c}from"./chunks/framework.D6UG3LSr.js";const B=JSON.parse('{"title":"unicorn/no-useless-length-check","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-useless-length-check.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-useless-length-check.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/no-useless-length-check.md"},p={id:"unicorn-no-useless-length-check",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-no-useless-length-check","aria-label":'Permalink to "unicorn/no-useless-length-check <Badge type="info" text="Correctness" />"'},"​",-1),k={class:"rule-meta"},g=e("span",{class:"emoji"},"✅",-1),y=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>It checks for an unnecessary array length check in a logical expression.</p><p>The cases are:</p><ul><li><code>array.length === 0 || array.every(Boolean)</code> (<code>array.every</code> returns <code>true</code> if array is has elements)</li><li><code>array.length &gt; 0 &amp;&amp; array.some(Boolean)</code> (<code>array.some</code> returns <code>false</code> if array is empty)</li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>An extra unnecessary length check is done.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (array.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">every</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Boolean)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // do something!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8);function _(m,f,E,b,x,v){const i=t("Badge"),n=t("Alert");return c(),r("div",null,[e("h1",p,[s("unicorn/no-useless-length-check "),a(i,{type:"info",text:"Correctness"}),s(),u]),e("div",k,[a(n,{class:"default-on",type:"success"},{default:l(()=>[g,s(" This rule is turned on by default. ")]),_:1})]),y])}const A=o(d,[["render",_]]);export{B as __pageData,A as default};
