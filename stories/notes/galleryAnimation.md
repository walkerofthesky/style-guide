# Gallery

## Relevant CSS

What's important is that the gallery is a fixed width and overflow is hidden. The images should be in a horizontal row, so that they can be moved along the x-axis equal to the width.

I have a container around the images, and I move the container around by update the translateX value:

```css
.container {
  display: flex;
  transform: translateX(var(--translate-x));
  transition: all 250ms cubic-bezier(0.83, 0.27, 0.24, 0.91);
}
```
