<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/no-const-enum <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Disallow TypeScript `const enum`

### Why is this bad?

Const enums are enums that should be inlined at use sites.
Const enums are not supported by bundlers and are incompatible with the isolatedModules mode.
Their use can lead to import nonexistent values (because const enums are erased).

### Example

```ts
const enum Color {
  Red,
  Green,
  Blue,
}
```