import{_ as l,c as h,j as s,a as e,I as a,w as p,a4 as r,E as i,o}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"typescript/no-misused-new","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-misused-new.md","filePath":"docs/guide/usage/linter/rules/typescript/no-misused-new.md"}'),d={name:"docs/guide/usage/linter/rules/typescript/no-misused-new.md"},c={id:"typescript-no-misused-new",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#typescript-no-misused-new","aria-label":'Permalink to "typescript/no-misused-new <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},y=s("span",{class:"emoji"},"✅",-1),E=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce valid definition of <code>new</code> and <code>constructor</code></p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>JavaScript classes may define a constructor method that runs when a class instance is newly created.</p><p>TypeScript allows interfaces that describe a static class object to define a <code>new()</code> method (though this is rarely used in real world code). Developers new to JavaScript classes and/or TypeScript interfaces may sometimes confuse when to use constructor or new.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7);function g(m,_,f,w,b,F){const t=i("Badge"),n=i("Alert");return o(),h("div",null,[s("h1",c,[e("typescript/no-misused-new "),a(t,{type:"info",text:"Correctness"}),e(),k]),s("div",u,[a(n,{class:"default-on",type:"success"},{default:p(()=>[y,e(" This rule is turned on by default. ")]),_:1})]),E])}const v=l(d,[["render",g]]);export{C as __pageData,v as default};
