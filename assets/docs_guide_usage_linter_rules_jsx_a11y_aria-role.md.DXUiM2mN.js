import{_ as t,c as e,j as i,a as s,I as n,a4 as h,o as l,E as k}from"./chunks/framework.D6UG3LSr.js";const f=JSON.parse('{"title":"jsx_a11y/aria-role","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-role.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-role.md"}'),p={name:"docs/guide/usage/linter/rules/jsx_a11y/aria-role.md"},r={id:"jsx-a11y-aria-role",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#jsx-a11y-aria-role","aria-label":'Permalink to "jsx_a11y/aria-role <Badge type="info" text="Correctness" />"'},"​",-1),d=h(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role definitions can be found at <a href="https://www.w3.org/TR/wai-aria/#role_definitions" target="_blank" rel="noreferrer">WAI-ARIA</a> site.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate (or set) and keep up to date on the status of user interface controls in the content(such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities).</p><p>When standard controls from accessible technologies are used, this process is straightforward. If the user interface elements are used according to specification the conditions of this provision will be met.</p><p>If custom controls are created, however, or interface elements are programmed (in code or script) to have a different role and/or function than usual, then additional measures need to be taken to ensure that the controls provide important information to assistive technologies and allow themselves to be controlled by assistive technologies. A particularly important state of a user interface control is whether or not it has focus. The focus state of a control can be programmatically determined, and notifications about change of focus are sent to user agents and assistive technology. Other examples of user interface control state are whether or not a checkbox or radio button has been selected, or whether or not a collapsible tree or list node is expanded or collapsed.</p><h3 id="rule-options" tabindex="-1">Rule options <a class="header-anchor" href="#rule-options" aria-label="Permalink to &quot;Rule options&quot;">​</a></h3><p>This rule takes one optional object argument of type object:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsx-a11y/aria-role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;allowedInvalidRoles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ignoreNonDOM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>allowedInvalidRules</code> is an optional string array of custom roles that should be allowed in addition to the ARIA spec, such as for cases when you need to use a non-standard role.</p><p>For the <code>ignoreNonDOM</code> option, this determines if developer created components are checked.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;datepicker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;datepicker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is not an </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARIA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> role </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;range&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;range&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is an _abstract_ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARIA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> role </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;           </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: An empty </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARIA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> role is not allowed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Foo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{role}&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ignoreNonDOM is set to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or not set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;     </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is a valid </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARIA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> role </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{role}&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: role is a variable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cannot be determined until runtime. </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;                   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: No </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ARIA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> role </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Foo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{role}&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ignoreNonDOM is set to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --&gt;</span></span></code></pre></div>`,17);function E(g,c,y,F,u,C){const a=k("Badge");return l(),e("div",null,[i("h1",r,[s("jsx_a11y/aria-role "),n(a,{type:"info",text:"Correctness"}),s(),o]),d])}const m=t(p,[["render",E]]);export{f as __pageData,m as default};
