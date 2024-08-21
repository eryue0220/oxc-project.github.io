<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-done-callback <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

This rule checks the function parameter of hooks & tests for use of the done argument, suggesting you return a promise instead.

### Why is this bad?

When calling asynchronous code in hooks and tests, jest needs to know when the asynchronous work is complete to progress the current run.
Originally the most common pattern to achieve this was to use callbacks:

```javascript
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

This can be very error-prone however, as it requires careful understanding of how assertions work in tests or otherwise tests won't behave as expected.

### Example

```javascript
beforeEach((done) => {
  // ...
});

test("myFunction()", (done) => {
  // ...
});

test("myFunction()", function (done) {
  // ...
});
```