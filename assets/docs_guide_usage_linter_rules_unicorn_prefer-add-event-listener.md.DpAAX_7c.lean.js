import{_ as o,c as d,j as s,a,G as t,w as l,a2 as p,B as i,o as c}from"./chunks/framework.Cm5JpC29.js";const y=JSON.parse('{"title":"unicorn/prefer-add-event-listener","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md"},u={id:"unicorn-prefer-add-event-listener",tabindex:"-1"},k={class:"rule-meta"};function f(g,e,v,E,m,b){const n=i("Badge"),r=i("Alert");return c(),d("div",null,[s("h1",u,[e[0]||(e[0]=a("unicorn/prefer-add-event-listener ")),t(n,{type:"info",text:"Suspicious"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-add-event-listener","aria-label":'Permalink to "unicorn/prefer-add-event-listener <Badge type="info" text="Suspicious" />"'},"​",-1))]),s("div",k,[t(r,{class:"fix",type:"info"},{default:l(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of <code>.addEventListener()</code> and <code>.removeEventListener()</code> over their <code>on</code>-function counterparts.</p><p>For example, <code>foo.addEventListener(&#39;click&#39;, handler);</code> is preferred over <code>foo.onclick = handler;</code> for HTML DOM Events.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are <a href="https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick/35093997#35093997" target="_blank" rel="noreferrer">numerous advantages of using <code>addEventListener</code></a>. Some of these advantages include registering unlimited event handlers and optionally having the event handler invoked only once.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {});</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/unicorn/prefer_add_event_listener.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const _=o(h,[["render",f]]);export{y as __pageData,_ as default};
