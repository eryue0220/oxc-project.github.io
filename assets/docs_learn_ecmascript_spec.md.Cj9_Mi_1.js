import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.Bg3dKMxI.js";const E=JSON.parse('{"title":"Specification","description":"","frontmatter":{"title":"Specification","outline":"deep"},"headers":[],"relativePath":"docs/learn/ecmascript/spec.md","filePath":"docs/learn/ecmascript/spec.md"}'),e={name:"docs/learn/ecmascript/spec.md"},n=t(`<h1 id="specification" tabindex="-1">Specification <a class="header-anchor" href="#specification" aria-label="Permalink to &quot;Specification&quot;">​</a></h1><p><a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer">The ECMAScript® 2023 Language Specification</a> details everything about the JavaScript language, so anyone can implement their own JavaScript engine.</p><p>The following chapters need to be studied for our parser:</p><ul><li>Chapter 5: Notational Conventions</li><li>Chapter 11: ECMAScript Language: Source Text</li><li>Chapter 12: ECMAScript Language: Lexical Grammar</li><li>Chapter 13 - 16: Expressions, Statements, Functions, Classes, Scripts and Modules</li><li>Annex B: Additional ECMAScript Features for Web Browsers</li><li>Annex C: The Strict Mode of ECMAScript</li></ul><p>For navigation inside the specification:</p><ul><li>Anything clickable has a permanent link, they are shown on the URL as anchors, for example <code>#sec-identifiers</code></li><li>Hovering over things may show a tooltip, clicking on <code>References</code> shows all its references</li></ul><h2 id="notational-conventions" tabindex="-1">Notational Conventions <a class="header-anchor" href="#notational-conventions" aria-label="Permalink to &quot;Notational Conventions&quot;">​</a></h2><p><a href="https://tc39.es/ecma262/#sec-grammar-notation" target="_blank" rel="noreferrer">Chapter 5.1.5 Grammar Notation</a> is the section we need to read.</p><p>The things to note here are:</p><h3 id="recursion" tabindex="-1">Recursion <a class="header-anchor" href="#recursion" aria-label="Permalink to &quot;Recursion&quot;">​</a></h3><p>This is how lists are presented in the grammar.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ArgumentList :</span></span>
<span class="line"><span>  AssignmentExpression</span></span>
<span class="line"><span>  ArgumentList , AssignmentExpression</span></span></code></pre></div><p>means</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_____________</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArgumentList</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   ^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__________</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArgumentList, AssignmentExpression,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          ^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">___</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AssignmentExpression</span></span></code></pre></div><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><p>The <code>_opt_</code> suffix for optional syntax. For example,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>VariableDeclaration :</span></span>
<span class="line"><span>  BindingIdentifier Initializer_opt</span></span></code></pre></div><p>means</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding_identifier;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding_identifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Initializer;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       ______________ Initializer_opt</span></span></code></pre></div><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>The <code>[Return]</code> and <code>[In]</code> are parameters of the grammar.</p><p>For example</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ScriptBody :</span></span>
<span class="line"><span>    StatementList[~Yield, ~Await, ~Return]</span></span></code></pre></div><p>means top-level yield, await and return are not allowed in scripts, but</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ModuleItem :</span></span>
<span class="line"><span>  ImportDeclaration</span></span>
<span class="line"><span>  ExportDeclaration</span></span>
<span class="line"><span>  StatementListItem[~Yield, +Await, ~Return]</span></span></code></pre></div><p>allows for top-level await.</p><h2 id="source-text" tabindex="-1">Source Text <a class="header-anchor" href="#source-text" aria-label="Permalink to &quot;Source Text&quot;">​</a></h2><p><a href="https://tc39.es/ecma262/#sec-types-of-source-code" target="_blank" rel="noreferrer">Chapter 11.2 Types of Source Code</a> tells us that there is a huge distinction between script code and module code. And there is a <code>use strict</code> mode that makes the grammar saner by disallowing old JavaScript behaviors.</p><p><strong>Script Code</strong> is not strict, <code>use strict</code> need to be inserted at the top of the file to make script code strict. In HTML we write <code>&lt;script src=&quot;javascript.js&quot;&gt;&lt;/script&gt;</code>.</p><p><strong>Module Code</strong> is automatically strict. In HTML we write <code>&lt;script type=&quot;module&quot; src=&quot;main.mjs&quot;&gt;&lt;/script&gt;</code>.</p><h2 id="ecmascript-language-lexical-grammar" tabindex="-1">ECMAScript Language: Lexical Grammar <a class="header-anchor" href="#ecmascript-language-lexical-grammar" aria-label="Permalink to &quot;ECMAScript Language: Lexical Grammar&quot;">​</a></h2><p>For more in-depth explanation, read the V8 blog on <a href="https://v8.dev/blog/understanding-ecmascript-part-3" target="_blank" rel="noreferrer">Understanding the ECMAScript spec</a>.</p><h3 id="automatic-semicolon-insertion" tabindex="-1"><a href="https://tc39.es/ecma262/#sec-automatic-semicolon-insertion" target="_blank" rel="noreferrer">Automatic Semicolon Insertion</a> <a class="header-anchor" href="#automatic-semicolon-insertion" aria-label="Permalink to &quot;[Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)&quot;">​</a></h3><p>This section describes all the rules where we can omit a semicolon while writing JavaScript. All the explanation boils down to</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;mut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;()&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Semicolon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">can_insert_semicolon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> range </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prev_node_end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cur_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SyntaxError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AutoSemicolonInsertion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> can_insert_semicolon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cur_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">is_on_new_line </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> matches!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cur_kind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RCurly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Eof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>The <code>asi</code> function need to be manually called where applicable, for example in the end of statement:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse_debugger_statement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;mut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Statement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start_node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Debugger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // highlight-next-line</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ast</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debugger_statement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">finish_node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(node))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This section on asi is written with a parser in mind, it explicitly states that the source text is parsed from left to right, which makes it almost impossible to write the parser in any other way. The author of jsparagus made a rant about this <a href="https://github.com/mozilla-spidermonkey/jsparagus/blob/master/js-quirks.md#automatic-semicolon-insertion-" target="_blank" rel="noreferrer">here</a>.</p><blockquote><p>The specification for this feature is both very-high-level and weirdly procedural (“When, as the source text is parsed from left to right, a token is encountered...”, as if the specification is telling a story about a browser. As far as I know, this is the only place in the spec where anything is assumed or implied about the internal implementation details of parsing.) But it would be hard to specify ASI any other way.</p></blockquote></div><h2 id="expressions-statements-functions-classes-scripts-and-modules" tabindex="-1">Expressions, Statements, Functions, Classes, Scripts and Modules <a class="header-anchor" href="#expressions-statements-functions-classes-scripts-and-modules" aria-label="Permalink to &quot;Expressions, Statements, Functions, Classes, Scripts and Modules&quot;">​</a></h2><p>It takes a while to understand the syntactic grammar, then apply them to writing a parser.</p>`,40),l=[n];function h(p,r,k,o,d,c){return a(),i("div",null,l)}const y=s(e,[["render",h]]);export{E as __pageData,y as default};
