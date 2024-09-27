import{_ as l,c as h,j as s,a as e,G as i,w as o,a2 as d,B as t,o as p}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"oxc/bad-array-method-on-arguments","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.md","filePath":"docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.md"}'),k={name:"docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.md"},c={id:"oxc-bad-array-method-on-arguments",tabindex:"-1"},u={class:"rule-meta"};function g(m,a,y,E,b,x){const n=t("Badge"),r=t("Alert");return p(),h("div",null,[s("h1",c,[a[0]||(a[0]=e("oxc/bad-array-method-on-arguments ")),i(n,{type:"info",text:"Correctness"}),a[1]||(a[1]=e()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#oxc-bad-array-method-on-arguments","aria-label":'Permalink to "oxc/bad-array-method-on-arguments <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",u,[i(r,{class:"default-on",type:"success"},{default:o(()=>a[3]||(a[3]=[s("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1})]),a[4]||(a[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule applies when an array method is called on the arguments object itself.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The arguments object is not an array, but an array-like object. It should be converted to a real array before calling an array method. Otherwise, a TypeError exception will be thrown because of the non-existent method.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(add, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/bad_array_method_on_arguments.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const _=l(k,[["render",g]]);export{F as __pageData,_ as default};
