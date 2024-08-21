<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/for-direction <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">⚠️🛠️️</span> A dangerous auto-fix is available for this rule.
</Alert>
</div>

### What it does

Disallow "for" loop update causing the counter to move in the wrong direction.

### Why is this bad?

A for loop that is known to run infinitely or never run is considered a bug.

### Example

```javascript
for (var i = 0; i < 10; i--) {}

for (var i = 10; i >= 0; i++) {}
```