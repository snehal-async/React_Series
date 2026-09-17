
# CSS Animations & Pseudo Classes / Elements – Complete Guide

This document explains **CSS animations, keyframes, and pseudo selectors** with:
- What they are
- Why they are used
- How to use them
- Practical examples

Perfect for README, learning, revision, and interviews.

---

# 1. CSS Animation

## What is Animation?

CSS animation allows elements to change styles smoothly over time **without JavaScript**.

Used for:
- Loaders
- Hover effects
- UI motion
- Micro-interactions

---

## animation Properties

```css
.box {
  animation-name: move;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

### Explanation

- animation-name → keyframe name  
- animation-duration → total time  
- animation-timing-function → speed curve  
- animation-delay → start delay  
- animation-iteration-count → repeat count  
- animation-direction → direction  

---

## Shorthand

```css
.box {
  animation: move 2s ease infinite alternate;
}
```

---

# 2. @keyframes

## What is keyframes?

Defines animation steps.

---

### Example

```css
@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(200px);
  }
}
```

---

### Percentage Based

```css
@keyframes colorChange {
  0% { background: red; }
  50% { background: yellow; }
  100% { background: blue; }
}
```

---

# 3. Pseudo Classes

Pseudo classes target element **states**.

---

## :hover

Triggered when mouse is over element.

```css
button:hover {
  background: green;
}
```

---

## :active

Triggered while clicking.

```css
button:active {
  transform: scale(0.95);
}
```

---

## :focus

Triggered when input is focused.

```css
input:focus {
  border: 2px solid blue;
}
```

---

## :visited

Visited links.

```css
a:visited {
  color: purple;
}
```

---

# 4. Pseudo Elements

Pseudo elements style **specific parts** of elements.

---

## ::before

Adds content BEFORE element.

```css
.box::before {
  content: "🔥";
}
```

---

## ::after

Adds content AFTER element.

```css
.box::after {
  content: "🚀";
}
```

---

## ::first-letter

```css
p::first-letter {
  font-size: 40px;
}
```

---

## ::first-line

```css
p::first-line {
  color: red;
}
```

---

# 5. Combined Animation Example

```html
<button class="btn">Hover Me</button>
```

```css
.btn {
  padding: 15px 30px;
  background: orange;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: red;
}

.btn::after {
  content: " →";
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.btn {
  animation: pulse 2s infinite;
}
```

---

# 6. Transition vs Animation

Transition:
- Triggered by action
- Simple

Animation:
- Runs automatically
- Complex timelines

---

# Quick Revision

| Feature | Purpose |
|--------|---------|
| animation | Element motion |
| keyframes | Animation steps |
| :hover | Mouse state |
| :active | Click state |
| ::before | Before content |
| ::after | After content |

---

## End of Guide
