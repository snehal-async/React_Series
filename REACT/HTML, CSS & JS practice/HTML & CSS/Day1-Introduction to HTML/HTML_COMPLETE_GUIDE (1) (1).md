
# HTML – Complete & Structured Guide (All Tags, Semantics, SEO, Accessibility)

> This is a **complete, industry-grade HTML reference** covering **every HTML tag**, concepts, semantics, SEO, accessibility, and real usage examples.

---

## 1. What is HTML?

HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.

### Why HTML?
- Page structure
- SEO friendly
- Accessibility support
- Works with CSS & JavaScript

---

## 2. Basic HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  Content goes here
</body>
</html>
```

---

## 3. Global Attributes (Usable on ALL Tags)

id, class, style, title, hidden, tabindex, draggable, contenteditable, data-*

```html
<p id="p1" class="text" data-id="1">Hello</p>
```

---

## 4. Heading Tags (SEO Critical)

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section</h3>
<h4>Sub Section</h4>
<h5>Minor</h5>
<h6>Least</h6>
```

Rules:
- Only one `<h1>` per page
- Follow hierarchy

---

## 5. Text Content Tags

p, span, div, br, hr

```html
<p>Paragraph</p>
<span>Inline</span>
<div>Block</div>
```

---

## 6. Text Formatting Tags

strong, em, b, i, u, mark, small, del, ins, sub, sup, code, pre, kbd, samp

```html
<strong>Important</strong>
<em>Emphasis</em>
<code>console.log()</code>
```

---

## 7. Anchor Tag

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit
</a>
```

Attributes: href, target, download, rel

---

## 8. Image & Media Tags

### Image
```html
<img src="img.jpg" alt="SEO friendly text">
```

### Audio
```html
<audio controls>
  <source src="audio.mp3">
</audio>
```

### Video
```html
<video controls>
  <source src="video.mp4">
</video>
```

---

## 9. List Tags

ul, ol, li, dl, dt, dd

```html
<ul><li>Item</li></ul>
```

---

## 10. Table Tags

table, caption, thead, tbody, tfoot, tr, th, td, colgroup, col

```html
<table>
  <caption>Users</caption>
  <tr><th>Name</th></tr>
  <tr><td>Ritik</td></tr>
</table>
```

---

## 11. Semantic HTML Tags

header, nav, main, section, article, aside, footer, figure, figcaption, address, time

```html
<main>
  <article>
    <header>Blog</header>
    <p>Content</p>
  </article>
</main>
```

---

## 12. Form Tag

```html
<form method="post">
  <input type="text">
  <button>Submit</button>
</form>
```

---

## 13. Input Types (ALL)

text, email, password, number, tel, url, search, date, time, datetime-local, month, week, checkbox, radio, range, color, file, hidden, submit, reset, button

---

## 14. Form Supporting Tags

label, textarea, select, option, optgroup, fieldset, legend, datalist, output, progress, meter

---

## 15. Interactive Elements

details, summary, dialog, menu

```html
<details>
  <summary>More</summary>
  Info
</details>
```

---

## 16. Head & SEO Tags

title, meta, link, base, style

```html
<meta name="description" content="SEO description">
```

---

## 17. Script Tags

script, noscript

```html
<script src="app.js"></script>
```

---

## 18. Embedded Content

iframe, embed, object, param

---

## 19. Graphics

canvas, svg

```html
<canvas width="200" height="100"></canvas>
```

---

## 20. Accessibility (A11Y)

aria-label, aria-hidden, role, tabindex

```html
<button aria-label="Close">X</button>
```

---

## 21. Deprecated Tags (Do NOT Use)

font, center, marquee, big, strike, frame, frameset, noframes

---

## 22. HTML Best Practices

✔ Semantic HTML  
✔ SEO-first  
✔ Accessibility  
✔ Clean structure  


## 23. 🔹 `<strong>` Tag

### What is `<strong>`?
The `<strong>` tag represents **strong importance** of text.

### Why use `<strong>`?
- Adds semantic meaning
- Improves SEO
- Screen readers emphasize it

```html
<p>This is <strong>very important</strong> information.</p>
```

---

## 24. 🔹 `<select>` Tag (Dropdown / Selection)

The `<select>` tag is used to create a dropdown list inside a form.

```html
<label for="city">Choose a city:</label>
<select id="city" name="city">
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
  <option value="bangalore">Bangalore</option>
</select>
```

---

## 25. 🔹 `<option>` Tag

The `<option>` tag defines an item inside a `<select>` element.

```html
<select>
  <option value="">Select course</option>
  <option value="html" selected>HTML</option>
  <option value="css">CSS</option>
  <option value="js" disabled>JavaScript</option>
</select>
```

---

## 26.🔹 `<details>` Tag

The `<details>` tag creates expandable and collapsible content.

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML is the standard markup language for web pages.</p>
</details>
```

```html
<details open>
  <summary>More Info</summary>
  This content is visible by default.
</details>
```

---

##  🔹 Combined Practical Example

```html
<form>
  <p><strong>Note:</strong> Please select your preferred technology.</p>

  <label for="tech">Technology:</label>
  <select id="tech">
    <option value="">Choose one</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select>

  <details>
    <summary>Why do we ask this?</summary>
    This helps us personalize your learning experience.
  </details>
</form>
```

---

---


