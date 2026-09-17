# forEach Loop

## Definition

`forEach()` is an array method that runs a function on every element of the array.

## Syntax

```js
array.forEach(function(value, index, array) {
  // code
});
```

## Example

```js
let arr = [10, 20, 30];

arr.forEach(function(value, index) {
  console.log(value, index);
});
```

Output:

```
10 0
20 1
30 2
```

## Important Points

- It works only on arrays.
- It does not return any value.
- You cannot break the loop (`break` / `continue` cannot be used).

---

# JSON (JavaScript Object Notation)

## Definition

JSON is a format used to store and transfer data. It is commonly used to send data between a server and a client.

## Example

```json
{
  "name": "Rahul",
  "age": 22,
  "city": "Delhi"
}
```

## JSON Rules

- Keys must always be in double quotes `"`.
- String values must be in double quotes.
- Functions are not allowed.
- Comments are not allowed.

## JSON Methods in JavaScript

1. `JSON.stringify()`

   Converts a JavaScript object into a JSON string.

   ```js
   let obj = { name: "Rahul", age: 22 };
   let jsonData = JSON.stringify(obj);
   console.log(jsonData);
   // Output: {"name":"Rahul","age":22}
   ```

2. `JSON.parse()`

   Converts a JSON string into a JavaScript object.

   ```js
   let data = '{"name":"Rahul","age":22}';
   let obj = JSON.parse(data);
   console.log(obj.name); // Rahul
   ```

---

# Template Literals (ES6)

## Definition

Template literals are a modern JavaScript feature (introduced in ES6 / ECMAScript 2015) that allow writing strings using backticks (`` ` ``).

## Syntax

```js
let name = "Rahul";
let message = `Hello ${name}`;
```

### 1. Variable Interpolation

You can include variables or expressions inside `${}`.

```js
let a = 10;
let b = 20;
console.log(`Sum is ${a + b}`);
// Output: Sum is 30
```

### 2. Multi-line Strings

Template literals support multi-line strings without using `\n`.

```js
let text = `Hello
How are you?
I am fine.`;

console.log(text);
```

### 3. Expression Support

You can perform expressions directly inside template literals.

```js
console.log(`5 * 2 = ${5 * 2}`);
// Output: 5 * 2 = 10
```
