
# JavaScript Core Concepts – Type Coercion, Conditions & Loops (Complete Guide)

This document explains **important JavaScript decision-making and flow-control concepts**
with **deep theory + clear examples**, written in a beginner-friendly way.

---

## 1. Type Coercion in JavaScript

### What is Type Coercion?
Type coercion is the **automatic conversion of one data type into another** by JavaScript.

JavaScript is a **loosely typed language**, so it performs conversions when needed.

---

### Example of Type Coercion

```js
console.log(5 + "5");
```

Output:
```
"55"
```

### Why?
- `5` is a number
- `"5"` is a string
- JavaScript converts number → string
- Then performs concatenation

---

### More Examples

```js
console.log("10" - 2); // 8
console.log("10" * 2); // 20
console.log("10" / 2); // 5
```

📌 `+` prefers string concatenation  
📌 Other operators force number conversion

---

## 2. Conditional Statements

Conditional statements allow JavaScript to **make decisions**.

---

## 2.1 `if` Statement

### What it does
Executes code **only if condition is true**.

```js
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

---

## 2.2 `if...else`

```js
let age = 16;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}
```

---

## 2.3 `else if`

```js
let marks = 75;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 60) {
  console.log("B Grade");
} else {
  console.log("Fail");
}
```

---

## 2.4 `switch` Statement

Used when there are **multiple fixed conditions**.

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## 3. Conditional (Ternary) Operator

### What is it?
A **short-hand replacement** for `if...else`.

### Syntax
```js
condition ? trueValue : falseValue;
```

### Example

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

---

## 4. Double Equals (`==`) Operator

### What does `==` do?
- Compares **values**
- Performs **type coercion**

```js
console.log(5 == "5"); // true
```

### Why true?
JavaScript converts `"5"` → `5` before comparison.

---

## 5. Triple Equals (`===`) Operator

### What does `===` do?
- Compares **value + type**
- NO type coercion

```js
console.log(5 === "5"); // false
```

---

## `==` vs `===`

| Operator | Checks | Converts Type |
|--------|-------|---------------|
| `==` | Value only | Yes |
| `===` | Value + Type | No |

📌 Best Practice: **Always use `===`**

---

## 6. Loops in JavaScript

Loops are used to **repeat code execution**.

---

## 6.1 `for` Loop

Used when number of iterations is known.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 6.2 `while` Loop

Runs while condition is true.

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

---

## 6.3 `do...while` Loop

Runs **at least once**, even if condition is false.

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## 6.4 `for...of` Loop

Used for arrays and iterable objects.

```js
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
```

---

## 6.5 `for...in` Loop

Used for object keys.

```js
let user = { name: "Ritik", age: 20 };

for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 7. Common Mistakes

❌ Using `==` instead of `===`  
❌ Forgetting `break` in switch  
❌ Infinite loops  
❌ Relying too much on type coercion  

---

## 8. Summary (One-Page Revision)

- JavaScript performs **type coercion**
- Use `if`, `else`, `switch` for decisions
- Ternary operator is shorthand
- Prefer `===` over `==`
- Loops repeat execution

---

## End of JavaScript Conditions & Loops Guide
