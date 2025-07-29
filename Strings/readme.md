# JavaScript Strings

Strings in JavaScript are sequences of characters used to represent text. They are one of the most commonly used data types.

## Creating Strings

You can create strings using single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` `` for template literals):

```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`; // Template literal
```

## Common String Methods

- `.length` — Returns the length of the string.ps aux | grep gnome

- `.toUpperCase()` / `.toLowerCase()` — Changes case.
- `.indexOf(substring)` — Finds the position of a substring.
- `.slice(start, end)` — Extracts a section of the string.
- `.replace(search, replacement)` — Replaces part of the string.
- `.split(separator)` — Splits the string into an array.

```js
let text = "JavaScript";
console.log(text.length); // 10
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.indexOf("Script")); // 4
console.log(text.slice(4)); // "Script"
console.log(text.replace("Java", "Type")); // "TypeScript"
console.log(text.split("a")); // ["J", "v", "Script"]
```

## Template Literals

Template literals allow embedding expressions:

```js
let name = "Alice";
let greeting = `Hello, ${name}!`;
```

## Escape Characters

Use backslash (`\`) for special characters:

```js
let quote = "He said, \"Hello!\"";
```

## Useful Tips

- Strings are immutable: methods return new strings.
- You can iterate over strings with loops.
