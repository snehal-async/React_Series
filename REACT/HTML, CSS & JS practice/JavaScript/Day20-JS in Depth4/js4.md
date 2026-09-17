# 

# JavaScript Arrays & Objects – Complete Revision Notes

---

# 1. Arrays in JavaScript

## What is an Array?

An array is a data structure used to store multiple values in a single variable.

```jsx
let arr = [10,20,30];
```

- Index starts from 0
- Ordered collection
- Can store mixed data types

---

# 2. forEach()

## What is forEach?

Used to iterate over an array.

Executes function for each element

Does NOT return a new array

---

### Syntax

```jsx
arr.forEach(function(value, index) {console.log(value, index);
});
```

---

### Example

```jsx
let nums = [1,2,3];

nums.forEach(function(num) {console.log(num *2);
});
```

---

# 3. map()

## What is map?

Creates a new array by transforming elements.

Returns new array

Does NOT modify original array

---

### Example

```jsx
let nums = [1,2,3];let doubled = nums.map(function(num) {return num *2;
});console.log(doubled);// [2, 4, 6]
```

---

# 4. filter()

## What is filter?

Creates new array containing only elements that pass condition.

---

### Example

```jsx
let nums = [1,2,3,4];let even = nums.filter(function(num) {return num %2 ===0;
});console.log(even);// [2,4]
```

---

# 5. Strict Equality (===)

## What does === do?

Checks:

- Value
- Data type

```jsx
5 ==="5";// false5 ===5;// true
```

No type conversion

Recommended over ==

---

# 6. Mutable vs Immutable

## Mutable

Data that can be changed after creation.

Example:

- Arrays
- Objects

```jsx
let arr = [1,2];
arr.push(3);
```

Original array changed → Mutable

---

## Immutable

Cannot be changed after creation.

Example:

- Primitive types (number, string, boolean)

```jsx
let a =10;
a =20;// new value assigned
```

Original value not modified → Immutable

---

# 7. sort()

## What is sort?

Sorts array elements.

Default behavior sorts as strings.

---

### Example

```jsx
let nums = [10,5,2];
nums.sort();console.log(nums);// [10, 2, 5]
```

Wrong order because string comparison.

---

### Correct Way

```jsx
nums.sort(function(a, b) {return a - b;
});
```

---

# 8. reverse()

Reverses array.

```jsx
let arr = [1,2,3];
arr.reverse();console.log(arr);// [3,2,1]
```

Modifies original array

---

# 9. concat()

Merges arrays.

```jsx
let arr1 = [1,2];let arr2 = [3,4];let result = arr1.concat(arr2);
```

Returns new array

Does not modify original

---

# 10. includes()

Checks if element exists.

```jsx
let arr = [1,2,3];

arr.includes(2);// true
```

Returns boolean.

---

# 11. every()

Checks if all elements satisfy condition.

```jsx
let nums = [2,4,6];let allEven = nums.every(function(num) {return num %2 ===0;
});
```

Returns true only if ALL pass.

---

# 12. startsWith()

Used for strings.

```jsx
let str ="JavaScript";

str.startsWith("Java");// true
```

Case sensitive

---

# 13. find()

Returns first element that satisfies condition.

```jsx
let nums = [5,10,15];let result = nums.find(function(num) {return num >8;
});console.log(result);// 10
```

Returns first match

Returns undefined if not found

---

# 14. Objects in JavaScript

## What is an Object?

Object is a collection of key-value pairs.

---

### Example

```jsx
let user = {name:"Ritik",age:20,isStudent:true
};
```

---

## Accessing Object Properties

### Dot Notation

```jsx
console.log(user.name);
```

### Bracket Notation

```jsx
console.log(user["age"]);
```

---

## Adding Property

```jsx
user.city ="Delhi";
```

---

## Updating Property

```jsx
user.age =21;
```

---

## Deleting Property

```jsx
delete user.city;
```