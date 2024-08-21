<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/jsx-no-duplicate-props <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule prevents duplicate props in JSX elements.

### Why is this bad?

Having duplicate props in a JSX element is most likely a mistake.
Creating JSX elements with duplicate props can cause unexpected behavior in your application.

### Example

```jsx
// Bad
<App a a />;
<App foo={2} bar baz foo={3} />;

// Good
<App a />;
<App bar baz foo={3} />;
```