import{_ as l,c as o,j as s,a,G as i,w as p,a2 as h,B as t,o as d}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"eslint/no-regex-spaces","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-regex-spaces.md","filePath":"docs/guide/usage/linter/rules/eslint/no-regex-spaces.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-regex-spaces.md"},k={id:"eslint-no-regex-spaces",tabindex:"-1"},g={class:"rule-meta"};function u(x,e,m,b,y,f){const n=t("Badge"),r=t("Alert");return d(),o("div",null,[s("h1",k,[e[0]||(e[0]=a("eslint/no-regex-spaces ")),i(n,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#eslint-no-regex-spaces","aria-label":'Permalink to "eslint/no-regex-spaces <Badge type="info" text="Restriction" />"'},"​",-1))]),s("div",g,[i(r,{class:"fix",type:"info"},{default:p(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow 2+ consecutive spaces in regular expressions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In a regular expression, it is hard to tell how many spaces are intended to be matched. It is better to use only one space and then specify how many spaces are expected using a quantifier.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{3}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">foo   bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_regex_spaces.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9))])}const v=l(c,[["render",u]]);export{F as __pageData,v as default};
