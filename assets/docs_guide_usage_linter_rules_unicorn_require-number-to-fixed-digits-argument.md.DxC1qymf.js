import{_ as o,c as l,j as i,a as s,G as t,w as d,a2 as h,B as a,o as u}from"./chunks/framework.Cm5JpC29.js";const v=JSON.parse('{"title":"unicorn/require-number-to-fixed-digits-argument","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.md","filePath":"docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.md"},c={id:"unicorn-require-number-to-fixed-digits-argument",tabindex:"-1"},g={class:"rule-meta"};function m(k,e,b,f,x,E){const r=a("Badge"),n=a("Alert");return u(),l("div",null,[i("h1",c,[e[0]||(e[0]=s("unicorn/require-number-to-fixed-digits-argument ")),t(r,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=i("a",{class:"header-anchor",href:"#unicorn-require-number-to-fixed-digits-argument","aria-label":'Permalink to "unicorn/require-number-to-fixed-digits-argument <Badge type="info" text="Pedantic" />"'},"​",-1))]),i("div",g,[t(n,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[i("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce using the digits argument with Number.toFixed()</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>It&#39;s better to make it clear what the value of the digits argument is when calling Number.toFixed(), instead of relying on the default value of 0.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/36ebb3e7841818c238c44349d6cf859db4177d55/crates/oxc_linter/src/rules/unicorn/require_number_to_fixed_digits_argument.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const q=o(p,[["render",m]]);export{v as __pageData,q as default};
