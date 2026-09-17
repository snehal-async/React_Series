
# CSS Position, Transform, Filter & Flexbox – Theory + Practical Guide

This document explains **what each property does, why it is used, and how to use it** with clear examples.
Perfect for learning, revision, README files, and interviews.

---

## 1. CSS `position` Property

### What is `position`?
The `position` property controls **how an element is placed on the page**.

It works together with:
- top
- right
- bottom
- left
- z-index

---

### ➤ static (default)

#### Theory
Normal document flow. Top/left have no effect.

```css
.box {
  position: static;
}
```

---

### ➤ relative

#### Theory
Moves element **relative to its original position**.
Original space is still reserved.

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

Used when creating reference parent for absolute children.

---

### ➤ absolute

#### Theory
Removed from normal flow.
Positions relative to **nearest positioned parent**.

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

Used for:
- Modals
- Badges
- Tooltips

---

### ➤ fixed

#### Theory
Stays fixed to viewport even while scrolling.

```css
.nav {
  position: fixed;
  top: 0;
}
```

Used for:
- Sticky navbars
- Floating buttons

---

### ➤ sticky

#### Theory
Acts relative until scroll threshold, then becomes fixed.

```css
.header {
  position: sticky;
  top: 0;
}
```

---

## 2. Transform Property

### What is transform?
Changes visual appearance **without affecting layout**.

---

### Rotate

```css
.box {
  transform: rotate(45deg);
}
```

Rotates element clockwise.

---

### Scale

```css
.box {
  transform: scale(1.2);
}
```

Zooms element.

---

### Translate

```css
.box {
  transform: translateX(50px);
}
```

Moves element visually.

---

## 3. Filter Property

### What is filter?
Applies **visual effects** to images or elements.

---

### Blur

```css
img {
  filter: blur(5px);
}
```

Used for:
- Background blur
- Loading effects

---

### Invert

```css
img {
  filter: invert(100%);
}
```

Used for:
- Dark mode icons

---

## 4. Flexbox

### What is Flexbox?
Flexbox is a layout system for **aligning items in row or column direction**.

---

### Enable Flex

```css
.container {
  display: flex;
}
```

---

### justify-content (horizontal)

```css
.container {
  justify-content: center;
}
```

---

### align-items (vertical)

```css
.container {
  align-items: center;
}
```

---

### gap

```css
.container {
  gap: 20px;
}
```

---

### flex-direction

```css
.container {
  flex-direction: column;
}
```

---

### Child flex

```css
.item {
  flex: 1;
}
```

Means:
flex-grow: 1  
flex-shrink: 1  
flex-basis: 0  

---

## 5. Combined Real Example

```html
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.box {
  width: 100px;
  height: 100px;
  background: orange;
  transform: rotate(10deg);
  filter: blur(1px);
}
```

---

## Quick Revision

| Property | Purpose |
|--------|---------|
| position | Element placement |
| transform | Rotate / move / scale |
| filter | Visual effects |
| blur | Blur element |
| invert | Reverse colors |
| flex | Layout alignment |

---

## End of Guide
