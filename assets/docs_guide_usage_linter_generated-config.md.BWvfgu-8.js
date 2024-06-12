import{_ as e,c as s,o as t,a3 as a}from"./chunks/framework.Bg3dKMxI.js";const m=JSON.parse('{"title":"Oxlint Configuration File","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/generated-config.md","filePath":"docs/guide/usage/linter/generated-config.md"}'),n={name:"docs/guide/usage/linter/generated-config.md"},o=a(`<h1 id="oxlint-configuration-file" tabindex="-1">Oxlint Configuration File <a class="header-anchor" href="#oxlint-configuration-file" aria-label="Permalink to &quot;Oxlint Configuration File&quot;">​</a></h1><p>This configuration is aligned with ESLint v8&#39;s configuration schema (<code>eslintrc.json</code>).</p><p>Usage: <code>oxlint -c oxlintrc.json</code></p><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>Only the <code>.json</code> format is supported.</p></div><p>Example</p><p><code>.oxlintrc.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;browser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;readonly&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eqeqeq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="env" tabindex="-1">env <a class="header-anchor" href="#env" aria-label="Permalink to &quot;env&quot;">​</a></h2><p>type: <code>object</code></p><p>Predefine global variables.</p><h2 id="globals" tabindex="-1">globals <a class="header-anchor" href="#globals" aria-label="Permalink to &quot;globals&quot;">​</a></h2><p>type: <code>object</code></p><p>Add or remove global variables.</p><h2 id="rules" tabindex="-1">rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;rules&quot;">​</a></h2><p>See <a href="./rules.html">Oxlint Rules</a></p><h2 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;settings&quot;">​</a></h2><p>type: <code>object</code></p><p>Shared settings for plugins</p><h3 id="settings-jsdoc" tabindex="-1">settings.jsdoc <a class="header-anchor" href="#settings-jsdoc" aria-label="Permalink to &quot;settings.jsdoc&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="settings-jsdoc-augmentsextendsreplacesdocs" tabindex="-1">settings.jsdoc.augmentsExtendsReplacesDocs <a class="header-anchor" href="#settings-jsdoc-augmentsextendsreplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.augmentsExtendsReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-exemptdestructuredrootsfromchecks" tabindex="-1">settings.jsdoc.exemptDestructuredRootsFromChecks <a class="header-anchor" href="#settings-jsdoc-exemptdestructuredrootsfromchecks" aria-label="Permalink to &quot;settings.jsdoc.exemptDestructuredRootsFromChecks&quot;">​</a></h4><p>type: <code>boolean</code></p><p>Only for <code>require-param-type</code> and <code>require-param-description</code> rule</p><h4 id="settings-jsdoc-ignoreinternal" tabindex="-1">settings.jsdoc.ignoreInternal <a class="header-anchor" href="#settings-jsdoc-ignoreinternal" aria-label="Permalink to &quot;settings.jsdoc.ignoreInternal&quot;">​</a></h4><p>type: <code>boolean</code></p><p>For all rules but NOT apply to <code>empty-tags</code> rule</p><h4 id="settings-jsdoc-ignoreprivate" tabindex="-1">settings.jsdoc.ignorePrivate <a class="header-anchor" href="#settings-jsdoc-ignoreprivate" aria-label="Permalink to &quot;settings.jsdoc.ignorePrivate&quot;">​</a></h4><p>type: <code>boolean</code></p><p>For all rules but NOT apply to <code>check-access</code> and <code>empty-tags</code> rule</p><h4 id="settings-jsdoc-ignorereplacesdocs" tabindex="-1">settings.jsdoc.ignoreReplacesDocs <a class="header-anchor" href="#settings-jsdoc-ignorereplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.ignoreReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-implementsreplacesdocs" tabindex="-1">settings.jsdoc.implementsReplacesDocs <a class="header-anchor" href="#settings-jsdoc-implementsreplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.implementsReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-overridereplacesdocs" tabindex="-1">settings.jsdoc.overrideReplacesDocs <a class="header-anchor" href="#settings-jsdoc-overridereplacesdocs" aria-label="Permalink to &quot;settings.jsdoc.overrideReplacesDocs&quot;">​</a></h4><p>type: <code>boolean</code></p><p>Only for <code>require-(yields|returns|description|example|param|throws)</code> rule</p><h4 id="settings-jsdoc-tagnamepreference" tabindex="-1">settings.jsdoc.tagNamePreference <a class="header-anchor" href="#settings-jsdoc-tagnamepreference" aria-label="Permalink to &quot;settings.jsdoc.tagNamePreference&quot;">​</a></h4><p>type: <code>object</code></p><h3 id="settings-jsx-a11y" tabindex="-1">settings.jsx-a11y <a class="header-anchor" href="#settings-jsx-a11y" aria-label="Permalink to &quot;settings.jsx-a11y&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="settings-jsx-a11y-components" tabindex="-1">settings.jsx-a11y.components <a class="header-anchor" href="#settings-jsx-a11y-components" aria-label="Permalink to &quot;settings.jsx-a11y.components&quot;">​</a></h4><p>type: <code>object</code></p><h4 id="settings-jsx-a11y-polymorphicpropname" tabindex="-1">settings.jsx-a11y.polymorphicPropName <a class="header-anchor" href="#settings-jsx-a11y-polymorphicpropname" aria-label="Permalink to &quot;settings.jsx-a11y.polymorphicPropName&quot;">​</a></h4><p>type: <code>[ string, null ]</code></p><h3 id="settings-next" tabindex="-1">settings.next <a class="header-anchor" href="#settings-next" aria-label="Permalink to &quot;settings.next&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="settings-next-rootdir" tabindex="-1">settings.next.rootDir <a class="header-anchor" href="#settings-next-rootdir" aria-label="Permalink to &quot;settings.next.rootDir&quot;">​</a></h4><h3 id="settings-react" tabindex="-1">settings.react <a class="header-anchor" href="#settings-react" aria-label="Permalink to &quot;settings.react&quot;">​</a></h3><p>type: <code>object</code></p><h4 id="settings-react-formcomponents" tabindex="-1">settings.react.formComponents <a class="header-anchor" href="#settings-react-formcomponents" aria-label="Permalink to &quot;settings.react.formComponents&quot;">​</a></h4><p>type: <code>array</code></p><h5 id="settings-react-formcomponents-n" tabindex="-1">settings.react.formComponents[n] <a class="header-anchor" href="#settings-react-formcomponents-n" aria-label="Permalink to &quot;settings.react.formComponents[n]&quot;">​</a></h5><h4 id="settings-react-linkcomponents" tabindex="-1">settings.react.linkComponents <a class="header-anchor" href="#settings-react-linkcomponents" aria-label="Permalink to &quot;settings.react.linkComponents&quot;">​</a></h4><p>type: <code>array</code></p><h5 id="settings-react-linkcomponents-n" tabindex="-1">settings.react.linkComponents[n] <a class="header-anchor" href="#settings-react-linkcomponents-n" aria-label="Permalink to &quot;settings.react.linkComponents[n]&quot;">​</a></h5>`,60),i=[o];function r(c,l,d,p,h,g){return t(),s("div",null,i)}const k=e(n,[["render",r]]);export{m as __pageData,k as default};
