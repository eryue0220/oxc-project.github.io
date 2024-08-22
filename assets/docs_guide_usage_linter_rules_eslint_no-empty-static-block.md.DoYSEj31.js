import{_ as o,c as l,j as e,a as t,I as s,w as c,a4 as r,E as a,o as h}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"eslint/no-empty-static-block","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-empty-static-block.md","filePath":"docs/guide/usage/linter/rules/eslint/no-empty-static-block.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-empty-static-block.md"},p={id:"eslint-no-empty-static-block",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#eslint-no-empty-static-block","aria-label":'Permalink to "eslint/no-empty-static-block <Badge type="info" text="Correctness" />"'},"​",-1),k={class:"rule-meta"},_=e("span",{class:"emoji"},"✅",-1),m=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows the usages of empty static blocks</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed. They can cause confusion when reading code.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function y(b,g,f,E,x,v){const i=a("Badge"),n=a("Alert");return h(),l("div",null,[e("h1",p,[t("eslint/no-empty-static-block "),s(i,{type:"info",text:"Correctness"}),t(),u]),e("div",k,[s(n,{class:"default-on",type:"success"},{default:c(()=>[_,t(" This rule is turned on by default. ")]),_:1})]),m])}const T=o(d,[["render",y]]);export{C as __pageData,T as default};
