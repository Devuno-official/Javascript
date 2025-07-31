# 🏆 JavaScript Conditionals VIP Guide

## What are Conditionals?
Conditionals let you run code only if certain conditions are true. They help your program make decisions

---

## if Statement
```javascript
if (score > 80) {
  console.log("VIP: Great job!");
}
```

## if...else Statement
```javascript
if (isMember) {
  console.log("Welcome, VIP!");
} else {
  console.log("Please sign up.");
}
```

## else if Statement
```javascript
if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
```

---

## Ternary Operator
A shortcut for simple conditions.
```javascript
const status = isVIP ? "Access granted" : "Access denied";
```

---

## switch Statement
```javascript
switch (day) {
  case "Monday":
    console.log("Start strong!");
    break;
  case "Friday":
    console.log("Finish like a VIP!");
    break;
  default:
    console.log("Keep going!");
}
```

---

## Tips for VIPs
- Use clear and simple conditions.
- Prefer ternary for short checks.
- Use `switch` for multiple choices.
- Always handle the `else` or `default` case.

---

> **VIP Note:** Conditionals are the key to smart, dynamic programs. Use them wisely to control your code’s flow like a pro!
