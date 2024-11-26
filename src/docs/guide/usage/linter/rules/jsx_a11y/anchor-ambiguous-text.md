<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/anchor-ambiguous-text <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Inspects anchor link text for the use of ambiguous words.

This rule checks the text from the anchor element `aria-label` if available.
In absence of an anchor `aria-label` it combines the following text of it's children:

- `aria-label` if available
- if the child is an image, the `alt` text
- the text content of the HTML element

### Why is this bad?

Screen readers users rely on link text for context, ambiguous words such as "click here" do
not provide enough context.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<a>link</a>
<a>click here</a>
```

Examples of **correct** code for this rule:

```jsx
<a>read this tutorial</a>
<a aria-label="oxc linter documentation">click here</a>
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/jsx_a11y/anchor_ambiguous_text.rs)