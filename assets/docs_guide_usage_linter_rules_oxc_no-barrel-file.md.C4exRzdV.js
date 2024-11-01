import{_ as t,c as l,j as s,a,G as r,a2 as o,B as n,o as h}from"./chunks/framework.8qdJL5ht.js";const x=JSON.parse('{"title":"oxc/no-barrel-file","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/no-barrel-file.md","filePath":"docs/guide/usage/linter/rules/oxc/no-barrel-file.md"}'),p={name:"docs/guide/usage/linter/rules/oxc/no-barrel-file.md"},d={id:"oxc-no-barrel-file",tabindex:"-1"};function c(k,e,u,g,f,b){const i=n("Badge");return h(),l("div",null,[s("h1",d,[e[0]||(e[0]=a("oxc/no-barrel-file ")),r(i,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#oxc-no-barrel-file","aria-label":'Permalink to "oxc/no-barrel-file <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of barrel files where the file contains <code>export *</code> statements, and the total number of modules exceed a threshold.</p><p>The default threshold is 100;</p><p>References:</p><ul><li><a href="https://github.com/thepassle/eslint-plugin-barrel-files" target="_blank" rel="noreferrer">https://github.com/thepassle/eslint-plugin-barrel-files</a></li><li><a href="https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7" target="_blank" rel="noreferrer">https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7</a></li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Invalid:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// where `foo` loads a subtree of 100 modules</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// where `foo` loads a subtree of 100 modules</span></span></code></pre></div><p>Valid:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/no_barrel_file.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',13))])}const y=t(p,[["render",c]]);export{x as __pageData,y as default};
