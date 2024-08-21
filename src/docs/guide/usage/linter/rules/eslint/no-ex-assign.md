<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-ex-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow reassigning exceptions in catch clauses

### Why is this bad?

If a catch clause in a try statement accidentally
(or purposely) assigns another value to the exception parameter,
it is impossible to refer to the error from that point on.
Since there is no arguments object to offer alternative access to this data,
assignment of the parameter is absolutely destructive.

### Example

```javascript
try {
  // code
} catch (e) {
  e = 10;
}
```