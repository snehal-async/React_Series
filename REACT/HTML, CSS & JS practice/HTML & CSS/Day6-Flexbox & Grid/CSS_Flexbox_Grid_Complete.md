
# CSS Flexbox & Grid – Complete Properties Guide (Theory + Examples)

This document covers ALL important Flexbox and Grid properties with theory and examples.

---

## FLEXBOX

### What is Flexbox?
Flexbox is a 1‑dimensional layout system (row OR column).

Enable:
```css
.container { display: flex; }
```

---

### flex-direction
```css
.container { flex-direction: column; }
```

---

### justify-content
```css
.container { justify-content: space-between; }
```

---

### align-items
```css
.container { align-items: center; }
```

---

### flex-wrap
```css
.container { flex-wrap: wrap; }
```

---

### gap
```css
.container { gap: 20px; }
```

---

### align-content
```css
.container { align-content: center; }
```

---

### flex-grow
```css
.item { flex-grow: 1; }
```

---

### flex-shrink
```css
.item { flex-shrink: 0; }
```

---

### flex-basis
```css
.item { flex-basis: 200px; }
```

---

### flex (shorthand)
```css
.item { flex: 1; }
```

---

### align-self
```css
.item { align-self: flex-end; }
```

---

## GRID

Enable:
```css
.container { display: grid; }
```

---

### grid-template-columns
```css
.container { grid-template-columns: repeat(3,1fr); }
```

---

### grid-template-rows
```css
.container { grid-template-rows: 100px auto; }
```

---

### gap
```css
.container { gap: 20px; }
```

---

### justify-items
```css
.container { justify-items: center; }
```

---

### align-items
```css
.container { align-items: center; }
```

---

### place-items
```css
.container { place-items: center; }
```

---

### justify-content
```css
.container { justify-content: center; }
```

---

### align-content
```css
.container { align-content: center; }
```

---

### grid-column
```css
.item { grid-column: 1 / 3; }
```

---

### grid-row
```css
.item { grid-row: 1 / 2; }
```

---

### grid-area
```css
.item { grid-area: 1 / 1 / 3 / 3; }
```

---

### place-self
```css
.item { place-self: center; }
```

---

## Flex vs Grid

Flexbox → 1D  
Grid → 2D  




# CSS Flexbox & Grid – Complete Properties + Grid Shortcuts (Theory + Examples)

This document covers ALL important Flexbox and Grid properties, plus **CSS Grid shorthand (shortcuts)** for faster layouts.

---

# FLEXBOX

## Enable Flex
```css
.container { display: flex; }
```

### flex-direction
```css
.container { flex-direction: row; }
```

### justify-content
```css
.container { justify-content: space-between; }
```

### align-items
```css
.container { align-items: center; }
```

### flex-wrap
```css
.container { flex-wrap: wrap; }
```

### gap
```css
.container { gap: 20px; }
```

### flex (shortcut)
```css
.item { flex: 1; }
```
Means:
flex-grow:1  
flex-shrink:1  
flex-basis:0  

---

# GRID

## Enable Grid
```css
.container { display: grid; }
```

---

## Core Grid Properties

### grid-template-columns
```css
.container { grid-template-columns: repeat(3, 1fr); }
```

### grid-template-rows
```css
.container { grid-template-rows: 100px auto; }
```

### gap
```css
.container { gap: 20px; }
```

### justify-items
```css
.container { justify-items: center; }
```

### align-items
```css
.container { align-items: center; }
```

### place-items (shortcut)
```css
.container { place-items: center; }
```

Equivalent to:
justify-items + align-items

---

## Grid Item Properties

### grid-column
```css
.item { grid-column: 1 / 3; }
```

### grid-row
```css
.item { grid-row: 1 / 2; }
```

### grid-area
```css
.item { grid-area: 1 / 1 / 3 / 3; }
```

### place-self (shortcut)
```css
.item { place-self: center; }
```

Equivalent to:
align-self + justify-self

---

# GRID SHORTCUTS (IMPORTANT)

## 1. grid-template (columns + rows shortcut)

```css
.container {
  grid-template: 100px auto / repeat(3, 1fr);
}
```

Means:
grid-template-rows / grid-template-columns

---

## 2. grid (FULL shortcut)

```css
.container {
  grid: auto-flow / repeat(3, 1fr);
}
```

Shorthand for:
grid-template + grid-auto-flow

---

## 3. repeat()

```css
grid-template-columns: repeat(4, 1fr);
```

Creates 4 equal columns.

---

## 4. minmax()

```css
grid-template-columns: repeat(3, minmax(150px, 1fr));
```

Minimum 150px, maximum flexible.

---

## 5. auto-fit / auto-fill

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Used for responsive grids.

---

## 6. fr unit

```css
grid-template-columns: 1fr 2fr;
```

Second column is twice wider.

---

# Real Example

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.box {
  background: orange;
  padding: 20px;
  text-align: center;
}
```

---


---

END

---

END
