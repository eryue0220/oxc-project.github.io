import{_ as o,c as r,j as s,a,G as i,w as h,a2 as d,B as t,o as c}from"./chunks/framework.8qdJL5ht.js";const v=JSON.parse('{"title":"unicorn/no-length-as-slice-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.md"},g={id:"unicorn-no-length-as-slice-end",tabindex:"-1"},u={class:"rule-meta"};function k(f,e,E,m,b,x){const n=t("Badge"),l=t("Alert");return c(),r("div",null,[s("h1",g,[e[0]||(e[0]=a("unicorn/no-length-as-slice-end ")),i(n,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-no-length-as-slice-end","aria-label":'Permalink to "unicorn/no-length-as-slice-end <Badge type="info" text="Restriction" />"'},"​",-1))]),s("div",u,[i(l,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=d('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow using <code>length</code> as the end argument of a <code>slice</code> call.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Passing <code>length</code> as the end argument of a <code>slice</code> call is unnecessary and can be confusing.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, foo.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_length_as_slice_end.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=o(p,[["render",k]]);export{v as __pageData,_ as default};
