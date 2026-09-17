# JavaScript Revision Notes – Switch, Ternary, Execution Context, Scope, Errors

---

# 1. Switch Case

## What is switch?

`switch` is used when we have multiple fixed conditions based on one value.

It is cleaner than multiple `if...else` when checking equality.

---

## Syntax

```jsx
switch (expression) {casevalue1:// codebreak;casevalue2:// codebreak;default:// code
}
```

---

## Example

```jsx
let day =2;switch (day) {case1:console.log("Monday");break;case2:console.log("Tuesday");break;default:console.log("Invalid");
}
```

---

## Important Points

- `break` stops execution.
- Without break → fall-through happens.
- `switch` uses strict comparison (`===`).

---

# 2. Ternary Operator

## What is Ternary Operator?

Short form of `if...else`.

---

## Syntax

```jsx
condition ? trueValue : falseValue;
```

---

## Example

```jsx
let age =20;let result = age >=18 ?"Adult" :"Minor";console.log(result);
```

---

## When to Use?

- Simple conditions.
- One-line decisions.
- Not recommended for complex logic.

---

# 3. Execution Context (Important Concept)

## What is Execution Context?

Execution context is the environment where JavaScript code runs.

It manages:

- Variable creation
- Function execution
- Scope handling

---

# 4. Types of Execution Context

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

---

# 5. Global Execution Context

Created automatically when JS runs.

Contains:

- Global variables
- Global functions
- `this` keyword (points to window in browser)

---

# 6. Phases of Execution Context

## Phase 1: Memory Creation Phase

- Variables → undefined
- Functions → fully stored

## Phase 2: Code Execution Phase

- Values assigned
- Code executed line by line

---

## Example

```jsx
var a =10;functiontest() {console.log("Hello");
}test();
```

Memory Phase:

- a → undefined
- test → function stored

Execution Phase:

- a = 10
- test() executed

---

# 7. Call Stack

## What is Call Stack?

Call stack is a data structure that keeps track of function execution.

It follows:

LIFO → Last In First Out

---

## Example

```jsx
functionone() {two();
}functiontwo() {console.log("Hello");
}one();
```

Stack Flow:

1. Global context pushed
2. one() pushed
3. two() pushed
4. two() popped
5. one() popped

---

# 8. Queue (Event Queue)

Queue is used for:

- Async operations
- setTimeout
- Events

It follows:

FIFO → First In First Out

Event Loop moves tasks from Queue to Stack when stack is empty.

---

# 9. var, let, const Scope

---

## var

- Function scoped
- Hoisted
- Can be redeclared
- Can be reassigned

---

## let

- Block scoped
- Hoisted but not initialized
- Cannot redeclare
- Can reassign

---

## const

- Block scoped
- Cannot redeclare
- Cannot reassign
- Must initialize at declaration

---

## Example

```jsx
if (true) {var a =10;let b =20;
}console.log(a);// worksconsole.log(b);// error
```

---

# 10. Hoisting

## What is Hoisting?

JavaScript moves declarations to top during memory phase.

---

## var Hoisting

```jsx
console.log(a);var a =5;
```

Output: undefined

---

## let and const Hoisting

They are hoisted but not initialized.

Accessing before declaration → ReferenceError

---

# 11. Errors in JavaScript

---

# 11.1 SyntaxError

Occurs when JS syntax is incorrect.

Example:

```jsx
let a =
```

Missing value → SyntaxError

---

# 11.2 ReferenceError

Occurs when variable is not defined.

```jsx
console.log(x);
```

x not declared → ReferenceError

---

# 11.3 TypeError

Occurs when operation is performed on wrong type.

```jsx
let num =10;
num.toUpperCase();
```

Numbers don’t have toUpperCase → TypeError