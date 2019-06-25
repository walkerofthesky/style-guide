# Hamburger Icon

Click on the icon to see it transform to an "x".

## Example Implementation

### HTML

```html
<div class="hamburger">
  <span class="hamburger__top-bun"></span>
  <span class="hamburger__patty"></span>
  <span class="hamburger__bottom-bun"></span>
</div>
```

### CSS

```css
.hamburger {
  cursor: pointer;
  height: 32px;
  position: relative;
  width: 32px;
}
.hamburger > * {
  display: block;
  background: #6d6e71;
  height: 3px;
  position: absolute;
  width: 100%;
}
.hamburger__top-bun {
  transform-origin: right center;
  transition: transform 0.25s ease-in-out;
}
.hamburger--x .hamburger__top-bun {
  transform: rotate(-45deg);
}
.hamburger__patty {
  top: 10px;
  transition: opacity 0.25s ease-in-out;
}
.hamburger--x .hamburger__patty {
  opacity: 0;
}
.hamburger__bottom-bun {
  top: 20px;
  transform-origin: right center;
  transition: all 0.25s ease-in-out;
}
.hamburger--x .hamburger__bottom-bun {
  top: 23px;
  transform: rotate(45deg);
}
```

### JS

Basically you need a way to toggle the open state. 

```javascript
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function() {
  this.classList.toggle('hamburger--x')
  /* Perform other actions (e.g. open menu) */
})
```
