# JavaScript – Random, DOM Creation & Mini Projects Notes

---

# 1. Math.random()

## What is Math.random()?

Generates a random decimal number between:

```
0 (inclusive) and1 (exclusive)
```

---

## Example

```jsx
console.log(Math.random());
```

Output example:

```
0.4728392
```

---

## Random Number Between 1 and 10

```jsx
let num =Math.floor(Math.random() *10) +1;console.log(num);
```

### How it works:

1. Math.random() → 0–0.999
2. × 10 → 0–9.999
3. floor() → 0–9
4. +1 → 1–10

---

# 2. Math.floor()

## What does it do?

Rounds number DOWN to nearest integer.

```jsx
console.log(Math.floor(4.9));// 4console.log(Math.floor(4.1));// 4
```

Used commonly in random number generation.

---

# 3. Math.ceil()

## What does it do?

Rounds number UP to nearest integer.

```jsx
console.log(Math.ceil(4.1));// 5console.log(Math.ceil(4.9));// 5
```

---

# Difference

| Method | Behavior |
| --- | --- |
| floor() | Round down |
| ceil() | Round up |
| round() | Normal rounding |

---

# 4. Gambling Game (Random Number Game)

## Concept

User guesses a number.

System generates random number.

If matched → win.

---

## Example

```jsx
let userGuess =Number(prompt("Enter number between 1 and 5"));let randomNum =Math.floor(Math.random() *5) +1;if (userGuess === randomNum) {alert("You Won!");
}else {alert("You Lost! Number was " + randomNum);
}
```

---

# 5. document.createElement()

## What is it?

Creates a new HTML element dynamically.

```jsx
let div =document.createElement("div");
```

It does NOT automatically add it to the page.

---

# 6. appendChild()

Adds created element inside a parent.

```jsx
let div =document.createElement("div");
div.textContent ="Hello";document.body.appendChild(div);
```

✔ Adds as last child

✔ Only accepts one node

---

# 7. append()

Similar to appendChild but more flexible.

```jsx
let p =document.createElement("p");
p.textContent ="Hi";document.body.append(p);
```

Difference:

| appendChild() | append() |
| --- | --- |
| One node only | Multiple values allowed |
| Older method | Modern method |

---

# 8. setAttribute()

Used to set attribute of element.

---

## Example

```jsx
let img =document.createElement("img");

img.setAttribute("src","image.jpg");
img.setAttribute("alt","Profile");document.body.append(img);
```

---

# 9. getAttribute()

Gets value of attribute.

```jsx
let value = img.getAttribute("src");console.log(value);
```

---

# 10. Random Quotes Generator

## Concept

Store quotes in array.

Select random index.

Display quote.

---

## Example

### HTML

```html
<pid="quote"></p><buttonid="btn">New Quote</button>
```

---

### JavaScript

```jsx
let quotes = ["Stay focused.","Work hard.","Consistency is key.","Never give up."
];let quoteText =document.getElementById("quote");let btn =document.getElementById("btn");

btn.addEventListener("click",function() {let randomIndex =Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
```