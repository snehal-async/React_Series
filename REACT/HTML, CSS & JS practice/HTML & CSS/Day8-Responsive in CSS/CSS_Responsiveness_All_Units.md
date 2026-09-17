
# CSS Responsiveness – Complete Guide (Units + Media Queries)

This document explains responsive design including ALL CSS units.

---

## What is Responsive Design?

Responsive design allows websites to adapt to mobile, tablet, and desktop screens.

---

# CSS Units

## Absolute

### px
Fixed size.

```css
.box { width: 200px; }
```

---

## Relative

### %
Relative to parent.

```css
.child { width: 50%; }
```

### em
Relative to parent font.

```css
.text { font-size: 2em; }
```

### rem
Relative to root font.

```css
.text { font-size: 2rem; }
```

---

## Viewport

### vw
```css
.box { width: 50vw; }
```

### vh
```css
.box { height: 100vh; }
```

### vmin
```css
.box { font-size: 5vmin; }
```

### vmax
```css
.box { font-size: 5vmax; }
```

---

## Grid

### fr
```css
.container { grid-template-columns: 1fr 2fr; }
```

---

## auto
```css
.box { margin: auto; }
```

---

# Media Queries

```css
@media (max-width: 768px) {
  .box { width: 90%; }
}
```

---

# Example

```html
<div class="box">Responsive</div>
```

```css
.box {
  width: 50%;
  padding: 2rem;
}

@media (max-width: 768px) {
  .box {
    width: 90%;
  }
}
```

---

# Revision

px fixed  
% parent  
em parent font  
rem root  
vw viewport width  
vh viewport height  
vmin smaller viewport  
vmax larger viewport  
fr grid  

---

END
