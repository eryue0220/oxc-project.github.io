<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-render-return-value <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule will warn you if you try to use the ReactDOM.render() return value.

### Example

```jsx
// Bad
vaa inst =ReactDOM.render(<App />, document.body);
function render() {
 return ReactDOM.render(<App />, document.body);
}

// Good
ReactDOM.render(<App />, document.body);
```