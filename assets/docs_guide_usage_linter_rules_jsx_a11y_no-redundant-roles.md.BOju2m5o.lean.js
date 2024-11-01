import{_ as r,c as l,j as s,a,G as t,w as d,a2 as h,B as i,o as p}from"./chunks/framework.8qdJL5ht.js";const _=JSON.parse('{"title":"jsx_a11y/no-redundant-roles","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.md"},u={id:"jsx-a11y-no-redundant-roles",tabindex:"-1"},k={class:"rule-meta"};function g(x,e,m,f,y,b){const n=i("Badge"),o=i("Alert");return p(),l("div",null,[s("h1",u,[e[0]||(e[0]=a("jsx_a11y/no-redundant-roles ")),t(n,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#jsx-a11y-no-redundant-roles","aria-label":'Permalink to "jsx_a11y/no-redundant-roles <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",k,[t(o,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that the explicit <code>role</code> property is not the same as implicit/default role property on element.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Redundant roles can lead to confusion and verbosity in the codebase.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;navigation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/no_redundant_roles.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const v=r(c,[["render",g]]);export{_ as __pageData,v as default};
