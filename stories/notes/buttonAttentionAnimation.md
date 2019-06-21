# Button Attention Animation

## When To Use

This is good to use when trying to capture the user's attention that something about the button changed.

For example, on E-commerce, there is a button that says "Check Availability". After the user enters their postal code, and if it's an area we service, the button changes to "Add to Cart", and we run this animation.

## Relevant CSS

```css
@keyframes attention {
  from {
    transform: none;
  }
  to {
    transform: scale(1.08);
  }
}

.button.attention {
  animation: 333ms cubic-bezier(0.4, -0.44, 0.61, 1.42) 200ms 2 alternate attention;
}
```
