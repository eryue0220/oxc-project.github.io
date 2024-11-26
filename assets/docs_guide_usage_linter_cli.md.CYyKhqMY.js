import{_ as o,c as i,a2 as n,o as t}from"./chunks/framework.Cm5JpC29.js";const p=JSON.parse('{"title":"Command-line Interface","description":"","frontmatter":{"outline":[2,3],"editLink":false},"headers":[],"relativePath":"docs/guide/usage/linter/cli.md","filePath":"docs/guide/usage/linter/cli.md"}'),l={name:"docs/guide/usage/linter/cli.md"};function r(s,e,a,c,d,g){return t(),i("div",null,e[0]||(e[0]=[n('<h1 id="command-line-interface" tabindex="-1">Command-line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command-line Interface&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p><strong><code>oxlint</code></strong> [<strong><code>-c</code></strong>=<em><code>&lt;./oxlintrc.json&gt;</code></em>] [<em><code>PATH</code></em>]...</p><h2 id="basic-configuration" tabindex="-1">Basic Configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;Basic Configuration&quot;">​</a></h2><ul><li><strong><code>-c</code></strong>, <strong><code>--config</code></strong>=<em><code>&lt;./oxlintrc.json&gt;</code></em> — Oxlint configuration file (experimental)</li></ul><ul><li><p>only <code>.json</code> extension is supported</p></li><li><p>tries to be compatible with the ESLint v8&#39;s format</p><p>If not provided, Oxlint will look for <code>.oxlintrc.json</code> in the current working directory.</p></li></ul><ul><li><strong><code> --tsconfig</code></strong>=<em><code>&lt;./tsconfig.json&gt;</code></em> — TypeScript <code>tsconfig.json</code> path for reading path alias and project references for import plugin</li></ul><h2 id="allowing-denying-multiple-lints" tabindex="-1">Allowing / Denying Multiple Lints <a class="header-anchor" href="#allowing-denying-multiple-lints" aria-label="Permalink to &quot;Allowing / Denying Multiple Lints&quot;">​</a></h2><p>Accumulate rules and categories from left to right on the command-line.</p><p>For example <code>-D correctness -A no-debugger</code> or <code>-A all -D no-debugger</code>. The categories are:</p><ul><li><code>correctness</code> - code that is outright wrong or useless (default).</li><li><code>suspicious</code> - code that is most likely wrong or useless.</li><li><code>pedantic</code> - lints which are rather strict or have occasional false positives.</li><li><code>style</code> - code that should be written in a more idiomatic way.</li><li><code>nursery</code> - new lints that are still under development.</li><li><code>restriction</code> - lints which prevent the use of language and library features.</li><li><code>all</code> - all the categories listed above except nursery. Does not enable plugins automatically.</li></ul><p>Arguments:</p><ul><li><strong><code>-A</code></strong>, <strong><code>--allow</code></strong>=<em><code>NAME</code></em> — Allow the rule or category (suppress the lint)</li><li><strong><code>-W</code></strong>, <strong><code>--warn</code></strong>=<em><code>NAME</code></em> — Deny the rule or category (emit a warning)</li><li><strong><code>-D</code></strong>, <strong><code>--deny</code></strong>=<em><code>NAME</code></em> — Deny the rule or category (emit an error)</li></ul><h2 id="enable-plugins" tabindex="-1">Enable Plugins <a class="header-anchor" href="#enable-plugins" aria-label="Permalink to &quot;Enable Plugins&quot;">​</a></h2><ul><li><strong><code> --disable-react-plugin</code></strong> — Disable react plugin, which is turned on by default</li><li><strong><code> --disable-unicorn-plugin</code></strong> — Disable unicorn plugin, which is turned on by default</li><li><strong><code> --disable-oxc-plugin</code></strong> — Disable oxc unique rules, which is turned on by default</li><li><strong><code> --disable-typescript-plugin</code></strong> — Disable TypeScript plugin, which is turned on by default</li><li><strong><code> --import-plugin</code></strong> — Enable the experimental import plugin and detect ESM problems. It is recommended to use along side with the <code>--tsconfig</code> option.</li><li><strong><code> --jsdoc-plugin</code></strong> — Enable the experimental jsdoc plugin and detect JSDoc problems</li><li><strong><code> --jest-plugin</code></strong> — Enable the Jest plugin and detect test problems</li><li><strong><code> --vitest-plugin</code></strong> — Enable the Vitest plugin and detect test problems</li><li><strong><code> --jsx-a11y-plugin</code></strong> — Enable the JSX-a11y plugin and detect accessibility problems</li><li><strong><code> --nextjs-plugin</code></strong> — Enable the Next.js plugin and detect Next.js problems</li><li><strong><code> --react-perf-plugin</code></strong> — Enable the React performance plugin and detect rendering performance problems</li><li><strong><code> --promise-plugin</code></strong> — Enable the promise plugin and detect promise usage problems</li><li><strong><code> --node-plugin</code></strong> — Enable the node plugin and detect node usage problems</li><li><strong><code> --security-plugin</code></strong> — Enable the security plugin and detect security problems</li></ul><h2 id="fix-problems" tabindex="-1">Fix Problems <a class="header-anchor" href="#fix-problems" aria-label="Permalink to &quot;Fix Problems&quot;">​</a></h2><ul><li><strong><code> --fix</code></strong> — Fix as many issues as possible. Only unfixed issues are reported in the output</li><li><strong><code> --fix-suggestions</code></strong> — Apply auto-fixable suggestions. May change program behavior.</li><li><strong><code> --fix-dangerously</code></strong> — Apply dangerous fixes and suggestions.</li></ul><h2 id="ignore-files" tabindex="-1">Ignore Files <a class="header-anchor" href="#ignore-files" aria-label="Permalink to &quot;Ignore Files&quot;">​</a></h2><ul><li><p><strong><code> --ignore-path</code></strong>=<em><code>PATH</code></em> — Specify the file to use as your .eslintignore</p></li><li><p><strong><code> --ignore-pattern</code></strong>=<em><code>PAT</code></em> — Specify patterns of files to ignore (in addition to those in .eslintignore)</p><p>The supported syntax is the same as for .eslintignore and .gitignore files You should quote your patterns in order to avoid shell interpretation of glob patterns</p></li><li><p><strong><code> --no-ignore</code></strong> — Disables excluding of files from .eslintignore files, <strong><code>--ignore-path</code></strong> flags and <strong><code>--ignore-pattern</code></strong> flags</p></li><li><p><strong><code> --symlinks</code></strong> — Follow symbolic links. Oxlint ignores symbolic links by default.</p></li></ul><h2 id="handle-warnings" tabindex="-1">Handle Warnings <a class="header-anchor" href="#handle-warnings" aria-label="Permalink to &quot;Handle Warnings&quot;">​</a></h2><ul><li><strong><code> --quiet</code></strong> — Disable reporting on warnings, only errors are reported</li><li><strong><code> --deny-warnings</code></strong> — Ensure warnings produce a non-zero exit code</li><li><strong><code> --max-warnings</code></strong>=<em><code>INT</code></em> — Specify a warning threshold, which can be used to force exit with an error status if there are too many warning-level rule violations in your project</li></ul><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li><strong><code>-f</code></strong>, <strong><code>--format</code></strong>=<em><code>ARG</code></em> — Use a specific output format (default, json, unix, checkstyle, github)</li></ul><h2 id="miscellaneous" tabindex="-1">Miscellaneous <a class="header-anchor" href="#miscellaneous" aria-label="Permalink to &quot;Miscellaneous&quot;">​</a></h2><ul><li><strong><code> --silent</code></strong> — Do not display any diagnostics</li><li><strong><code> --threads</code></strong>=<em><code>INT</code></em> — Number of threads to use. Set to 1 for using only 1 CPU core</li><li><strong><code> --print-config</code></strong> — This option outputs the configuration to be used. When present, no linting is performed and only config-related options are valid.</li></ul><h2 id="available-positional-items" tabindex="-1">Available positional items: <a class="header-anchor" href="#available-positional-items" aria-label="Permalink to &quot;Available positional items:&quot;">​</a></h2><ul><li><em><code>PATH</code></em> — Single file, single path or list of paths</li></ul><h2 id="available-options" tabindex="-1">Available options: <a class="header-anchor" href="#available-options" aria-label="Permalink to &quot;Available options:&quot;">​</a></h2><ul><li><strong><code> --rules</code></strong> — list all the rules that are currently registered</li><li><strong><code>-h</code></strong>, <strong><code>--help</code></strong> — Prints help information</li><li><strong><code>-V</code></strong>, <strong><code>--version</code></strong> — Prints version information</li></ul>',29)]))}const h=o(l,[["render",r]]);export{p as __pageData,h as default};
