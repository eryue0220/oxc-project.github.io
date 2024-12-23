<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-func-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow reassigning `function` declarations

### Why is this bad?

Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

### Example

```javascript
function foo() {}
foo = bar;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/eslint/no_func_assign.rs)
