<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/prefer-tag-over-role <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Enforces using semantic HTML tags over `role` attribute.

### Why is this bad?

Using semantic HTML tags can improve accessibility and readability of the code.

### Example

```jsx
// Bad
<div role="button" />

// Good
<button />
```