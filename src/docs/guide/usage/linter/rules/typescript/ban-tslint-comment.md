<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/ban-tslint-comment <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

This rule disallows `tslint:<rule-flag>` comments

### Why is this bad?

Useful when migrating from TSLint to ESLint. Once TSLint has been
removed, this rule helps locate TSLint annotations

### Example

```ts
// tslint:disable-next-line
someCode();
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/typescript/ban_tslint_comment.rs)
