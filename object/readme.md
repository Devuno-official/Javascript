# JavaScript Objects (VIP Guide)

Objects are the backbone of JavaScript, used to store collections of data and more complex entities. Here’s a VIP-level guide to understanding and using objects in JavaScript.

## What is an Object?
An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.

```js
let user = {
  name: "Sara",
  age: 22,
  isAdmin: true
};
```

## Accessing Properties
Use dot notation or bracket notation:

```js
console.log(user.name); // Sara
console.log(user["age"]); // 22
```

## Adding & Modifying Properties

```js
user.email = "sara@email.com";
user.age = 23;
```

## Deleting Properties

```js
delete user.isAdmin;
```

## Methods (Functions in Objects)

```js
let car = {
  model: "Honda",
  start: function() {
    console.log("Car started!");
  }
};
car.start();
```

## Looping Through Objects

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

## Built-in Object Methods
- `Object.keys(obj)` — Returns array of keys
- `Object.values(obj)` — Returns array of values
- `Object.entries(obj)` — Returns array of [key, value] pairs

```js
console.log(Object.keys(user)); // ["name", "age", "email"]
```

## Nested Objects
Objects can contain other objects:

```js
let student = {
  name: "Ali",
  marks: {
    math: 90,
    english: 85
  }
};
console.log(student.marks.math); // 90
```

## Object Reference
Objects are reference types. Assigning an object to another variable copies the reference, not the value.

```js
let a = {x: 1};
let b = a;
b.x = 2;
console.log(a.x); // 2
```

## Summary
- Objects store data as key-value pairs
- Can hold functions (methods)
- Support nesting and dynamic property changes
- Are reference types

---
This VIP guide covers all the essentials for mastering JavaScript objects. Practice by creating, modifying, and using objects in your code!
