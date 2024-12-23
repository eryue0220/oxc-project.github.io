<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-compare-neg-zero <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🛠️💡</span> An auto-fix and a suggestion are available for this rule for some violations.
</Alert>
</div>

### What it does

Disallow comparing against -0

### Why is this bad?

The rule should warn against code that tries to compare against -0,
since that will not work as intended. That is, code like x === -0 will
pass for both +0 and -0. The author probably intended Object.is(x, -0).

### Example

```javascript
if (x === -0) {
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/eslint/no_compare_neg_zero.rs)
