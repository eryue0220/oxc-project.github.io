import{_ as n,c as l,j as e,a,I as t,w as r,a4 as d,E as s,o as h}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"eslint/no-delete-var","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-delete-var.md","filePath":"docs/guide/usage/linter/rules/eslint/no-delete-var.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-delete-var.md"},p={id:"eslint-no-delete-var",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#eslint-no-delete-var","aria-label":'Permalink to "eslint/no-delete-var <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},m=e("span",{class:"emoji"},"✅",-1),v=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>The purpose of the delete operator is to remove a property from an object.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using the delete operator on a variable might lead to unexpected behavior.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span></code></pre></div>`,6);function g(b,k,f,x,y,E){const i=s("Badge"),o=s("Alert");return h(),l("div",null,[e("h1",p,[a("eslint/no-delete-var "),t(i,{type:"info",text:"Correctness"}),a(),_]),e("div",u,[t(o,{class:"default-on",type:"success"},{default:r(()=>[m,a(" This rule is turned on by default. ")]),_:1})]),v])}const P=n(c,[["render",g]]);export{C as __pageData,P as default};
