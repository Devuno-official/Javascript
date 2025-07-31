# 🚀 JavaScript Functions VIP Guide

## What is a Function?
A function is a reusable block of code that performs a specific task. Functions help organize code, avoid repetition, and make programs easier to maintain.

---

## Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Function Expression
```javascript
const add = function(a, b) {
  return a + b;
};
```

## Arrow Function
```javascript
const multiply = (x, y) => x * y;
```

---

## Parameters & Arguments
- **Parameters** are variables listed in the function definition.
- **Arguments** are values passed to the function when calling it.

---

## Return Statement
A function can return a value using the `return` keyword.

```javascript
function square(num) {
  return num * num;
}
```

---

## Example: Function Usage
```javascript
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4)); // true
```

---

## Tips for VIPs
- Name your functions clearly.
- Keep functions short and focused.
- Use arrow functions for concise code.
- Reuse functions to avoid repetition.

---

> **VIP Note:** Functions are the backbone of JavaScript logic. Master them to write clean, efficient, and powerful code!
