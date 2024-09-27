import{_ as l,c as d,j as e,a as s,G as i,w as t,a2 as c,B as o,o as h}from"./chunks/framework.DlAqvapY.js";const v=JSON.parse('{"title":"unicorn/no-unnecessary-await","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md"},u={id:"unicorn-no-unnecessary-await",tabindex:"-1"},k={class:"rule-meta"};function m(f,a,y,b,g,x){const r=o("Badge"),n=o("Alert");return h(),d("div",null,[e("h1",u,[a[0]||(a[0]=s("unicorn/no-unnecessary-await ")),i(r,{type:"info",text:"Correctness"}),a[1]||(a[1]=s()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#unicorn-no-unnecessary-await","aria-label":'Permalink to "unicorn/no-unnecessary-await <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",k,[i(n,{class:"default-on",type:"success"},{default:t(()=>a[3]||(a[3]=[e("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1}),i(n,{class:"fix",type:"info"},{default:t(()=>a[4]||(a[4]=[e("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule for some violations. ")])),_:1})]),a[5]||(a[5]=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow awaiting on non-promise values.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>await</code> operator should only be used on <code>Promise</code> values.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_unnecessary_await.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const E=l(p,[["render",m]]);export{v as __pageData,E as default};
