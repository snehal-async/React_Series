
# CSS Core Concepts – Theory with Code Examples

## 1. `div` Element

### What does `div` do?
`div` is a **block-level container** used to group elements and structure layouts.

### Why do we use `div`?
- To create sections
- To apply common styles
- To control layout

### Code Example
```html
<div class="container">
  This is a container
</div>
```

```css
.container {
  background-color: #f2f2f2;
  padding: 20px;
}
```

---

## 2. `id` Attribute

### What does `id` do?
`id` uniquely identifies a single HTML element.

### Why use `id`?
- Unique styling
- JavaScript targeting
- Anchor linking

### Code Example
```html
<div id="header">Header Section</div>
```

```css
#header {
  background-color: lightblue;
}
```

---

## 3. `class` Attribute

### What does `class` do?
`class` allows multiple elements to share the same styles.

### Why use `class`?
- Reusability
- Clean CSS
- Scalable designs

### Code Example
```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 15px;
}
```

---

## 4. CSS Units

### `px` – Fixed Unit

**What it does:** Sets a fixed size.

```css
.box {
  width: 200px;
}
```

---

### `%` – Relative Unit

**What it does:** Size depends on the parent element.

```css
.parent {
  width: 400px;
}

.child {
  width: 50%;
}
```

---

## 5. Background Properties

### Background Color

```css
.box {
  background-color: lightcoral;
}
```

---

### Linear Gradient

**What it does:** Creates a smooth color transition in a straight line.

```css
.box {
  background: linear-gradient(to right, red, blue);
}
```

---

### Radial Gradient

**What it does:** Creates a circular gradient from center.

```css
.box {
  background: radial-gradient(circle, red, blue);
}
```

---

## 6. Border

### What does `border` do?
Creates an outline around an element.

### Code Example
```css
.box {
  border: 2px solid black;
  border-radius: 10px;
}
```

---

## 7. Margin

### What does `margin` do?
Creates **space outside the element**, separating it from others.

### Why margin is important?
- Controls spacing between elements
- Improves layout clarity

### Code Example
```css
.box {
  margin: 20px;
}
```

---

## 8. Padding

### What does `padding` do?
Creates **space inside the element**, between content and border.

### Why padding is important?
- Improves readability
- Prevents content touching borders

### Code Example
```css
.box {
  padding: 15px;
}
```

---

## 9. CSS Box Model

### What is Box Model?
Every element consists of:
1. Content
2. Padding
3. Border
4. Margin

```
Margin
  Border
    Padding
      Content
```

### Code Example
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

---

## 10. Combined Example

```html
<div class="box">Hello CSS</div>
```

```css
.box {
  width: 300px;
  padding: 20px;
  margin: 30px auto;
  border: 3px solid #333;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  text-align: center;
}
```

## 1. `background-color`

### What it does
Sets the background color of an element.

### Why it is used
- Improves UI visibility
- Separates sections visually

```css
.box {
  background-color: lightblue;
}
```

---

## 2. `background-image`

### What it does
Sets an image as the background of an element.

### Why it is used
- Decorative visuals
- Hero sections
- Branding

```css
.box {
  background-image: url("image.jpg");
}
```

---

## 3. `background-repeat`

### What it does
Controls whether the background image repeats.

### Values
- repeat (default)
- no-repeat
- repeat-x
- repeat-y

```css
.box {
  background-repeat: no-repeat;
}
```

---

## 4. `background-size`

### What it does
Controls the size of the background image.

### Values
- auto
- cover
- contain
- custom (px, %)

```css
.box {
  background-size: cover;
}
```

📌 **cover** fills the container  
📌 **contain** fits image without cropping

---

## 5. `background-position`

### What it does
Controls the position of the background image.

### Common values
- center
- top
- bottom
- left
- right
- x y values

```css
.box {
  background-position: center;
}
```

## 6. Linear Gradient

### What it does
Creates a smooth color transition in a straight line.

```css
.box {
  background: linear-gradient(to right, red, blue);
}
```

Other examples:
```css
background: linear-gradient(45deg, red, yellow);
```

---

## 7. Radial Gradient

### What it does
Creates a gradient from center outward.

```css
.box {
  background: radial-gradient(circle, red, blue);
}
```

---

## 8. Multiple Backgrounds

### What it does
Allows layering of multiple backgrounds.

```css
.box {
  background:
    linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("image.jpg");
}
```


## 9. Background Shorthand Property

### What it does
Combines all background properties into one line.

```css
.box {
  background: url("image.jpg") no-repeat center / cover;
}
```

---

## 10. Complete Real-World Example

```html
<div class="hero">Welcome</div>
```

```css
.hero {
  height: 300px;
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
```

---

## 11. Quick Revision Table

| Property | Purpose |
|-------|--------|
| background-color | Background color |
| background-image | Background image |
| background-size | Image size |
| background-repeat | Image repetition |


## Final Note

Background properties are essential for:
- UI design
- Hero sections
- Visual branding
- Modern layouts



---

## End of Background Properties Guide
