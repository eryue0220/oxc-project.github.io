import{_ as r,c as l,j as a,a as i,G as e,w as o,a2 as p,B as t,o as d}from"./chunks/framework.Cm5JpC29.js";const m=JSON.parse('{"title":"unicorn/no-hex-escape","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"}'),k={name:"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"},c={id:"unicorn-no-hex-escape",tabindex:"-1"},g={class:"rule-meta"};function u(F,s,y,f,b,E){const n=t("Badge"),h=t("Alert");return d(),l("div",null,[a("h1",c,[s[0]||(s[0]=i("unicorn/no-hex-escape ")),e(n,{type:"info",text:"Pedantic"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#unicorn-no-hex-escape","aria-label":'Permalink to "unicorn/no-hex-escape <Badge type="info" text="Pedantic" />"'},"​",-1))]),a("div",g,[e(h,{class:"fix",type:"info"},{default:o(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🛠️",-1),i(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces a convention of using <a href="https://mathiasbynens.be/notes/javascript-escapes#unicode" target="_blank" rel="noreferrer">Unicode escapes</a> instead of <a href="https://mathiasbynens.be/notes/javascript-escapes#hexadecimal" target="_blank" rel="noreferrer">hexadecimal escapes</a> for consistency and clarity.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/unicorn/no_hex_escape.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',10))])}const C=r(k,[["render",u]]);export{m as __pageData,C as default};