import{_ as i,c as o,j as t,a as s,G as r,a2 as n,B as l,o as p}from"./chunks/framework.8qdJL5ht.js";const m=JSON.parse('{"title":"eslint/no-prototype-builtins","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md","filePath":"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md"},d={id:"eslint-no-prototype-builtins",tabindex:"-1"};function c(k,e,u,b,y,E){const a=l("Badge");return p(),o("div",null,[t("h1",d,[e[0]||(e[0]=s("eslint/no-prototype-builtins ")),r(a,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#eslint-no-prototype-builtins","aria-label":'Permalink to "eslint/no-prototype-builtins <Badge type="info" text="Pedantic" />"'},"​",-1))]),e[3]||(e[3]=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow calling some Object.prototype methods directly on objects</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In ECMAScript 5.1, Object.create was added, which enables the creation of objects with a specified [[Prototype]]. Object.create(null) is a common pattern used to create objects that will be used as a Map. This can lead to errors when it is assumed that objects will have properties from Object.prototype. This rule prevents calling some Object.prototype methods directly from an object. Additionally, objects can have properties that shadow the builtins on Object.prototype, potentially causing unintended behavior or denial-of-service security vulnerabilities. For example, it would be unsafe for a webserver to parse JSON input from a client and call hasOwnProperty directly on the resulting object, because a malicious client could send a JSON value like {&quot;hasOwnProperty&quot;: 1} and cause the server to crash.</p><p>To avoid subtle bugs like this, it’s better to always call these methods from Object.prototype. For example, foo.hasOwnProperty(&quot;bar&quot;) should be replaced with Object.prototype.hasOwnProperty.call(foo, &quot;bar&quot;).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hasBarProperty </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isPrototypeOfBar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> barIsEnumerable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">propertyIsEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_prototype_builtins.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10))])}const f=i(h,[["render",c]]);export{m as __pageData,f as default};
