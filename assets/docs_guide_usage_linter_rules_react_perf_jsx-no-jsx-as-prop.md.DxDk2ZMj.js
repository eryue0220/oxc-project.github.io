import{_ as t,c as e,j as i,a as s,I as n,a4 as h,o as p,E as l}from"./chunks/framework.D6UG3LSr.js";const m=JSON.parse('{"title":"react_perf/jsx-no-jsx-as-prop","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.md","filePath":"docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.md"}'),k={name:"docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.md"},r={id:"react-perf-jsx-no-jsx-as-prop",tabindex:"-1"},d=i("a",{class:"header-anchor",href:"#react-perf-jsx-no-jsx-as-prop","aria-label":'Permalink to "react_perf/jsx-no-jsx-as-prop <Badge type="info" text="Perf" />"'},"​",-1),o=h(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent JSX that are local to the current method from being used as values of JSX props</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jsx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SubItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jsx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.jsx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SubItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jsx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.jsx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.jsx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SubItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;} /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.jsx} /&gt;</span></span></code></pre></div>`,5);function E(g,c,y,x,F,_){const a=l("Badge");return p(),e("div",null,[i("h1",r,[s("react_perf/jsx-no-jsx-as-prop "),n(a,{type:"info",text:"Perf"}),s(),d]),o])}const u=t(k,[["render",E]]);export{m as __pageData,u as default};
